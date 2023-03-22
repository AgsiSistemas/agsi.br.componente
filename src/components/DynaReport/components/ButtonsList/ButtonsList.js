import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import DescriptionIcon from '@mui/icons-material/Description'
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { PDFNivel1 } from '../../utils/PDFNivel1'
import { PDFNivel2 } from '../../utils/PDFNivel2'
import OptionsChecklist from '../OptionsChecklist/OptionsChecklist'
import Agrupamento from '../Agrupamento/Agrupamento'
import Somar from '../Somar/Somar'
import Modelos from '../Modelos/Modelos'
import NovoModelo from '../NovoModelo/NovoModelo'
import Exportacao from '../Exportacao/Exportacao'
import Modal from '@mui/material/Modal'
import { useSelectedRegisters } from '../../context/context'
import { setTableWidth, resumir, getFormattedData } from '../../utils/Methods'
import Tooltip from '@mui/material/Tooltip'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 580,
  height: 500,
  bgcolor: '#fff',
  borderRadius: '5px',
  boxShadow: 24,
  p: 2
}

function ButtonsList({ listOptions, resume }) {
  const [openAgrupamento, setOpenAgrupamento] = useState(false)
  const handleOpenAgrupamento = () => setOpenAgrupamento(true)
  const handleCloseAgrupamento = () => setOpenAgrupamento(false)

  const [openSomar, setOpenSomar] = useState(false)
  const handleOpenSomar = () => setOpenSomar(true)
  const handleCloseSomar = () => setOpenSomar(false)

  const [openModelos, setOpenModelos] = useState(false)
  const handleOpenModelos = () => setOpenModelos(true)
  const handleCloseModelos = () => setOpenModelos(false)

  const [openNovoModelo, setOpenNovoModelo] = useState(false)
  const handleOpenNovoModelo = () => setOpenNovoModelo(true)
  const handleCloseNovoModelo = () => setOpenNovoModelo(false)

  const [openExportacao, setOpenExportacao] = useState(false)
  const handleOpenExportacao = () => setOpenExportacao(true)
  const handleCloseExportacao = () => setOpenExportacao(false)

  const [resumeConfirmation, setResumeConfirmation] = useState(false)
  const handleOpenConfirmation = () => setResumeConfirmation(true)
  const handleCloseConfirmation = () => setResumeConfirmation(false)

  const {
    state: {
      selecteds,
      checkedFields,
      options,
      agrupamento,
      somar,
      title,
      columnsOrder
    }
  } = useSelectedRegisters()

  const convertData = (dataToConvert, orderedFields) => {
    const filteredArr = []
    const objModel = {}
    orderedFields.forEach((field, index) => {
      objModel[field] = index
    })

    dataToConvert.forEach((element) => {
      const newObj = Object.keys(element)
        .filter((key) => orderedFields.includes(key))
        .reduce((obj, key) => {
          if (checkedFields.includes(key)) obj[key] = element[key] ?? ''
          return obj
        }, {})

      filteredArr.push(newObj)
    })

    const formattedSelecteds = filteredArr.map((o) =>
      Object.assign(
        {},
        ...Object.keys(o)
          .sort((a, b) => objModel[a] - objModel[b])
          .map((x) => {
            return { [x]: o[x] }
          })
      )
    )

    return formattedSelecteds
  }

  const generatePDFNivel1 = async () => {
    const orderedFields = [
      ...columnsOrder.filter((n) => checkedFields.includes(n))
    ].slice()

    const newSelecteds = convertData(selecteds, orderedFields)

    setTableWidth(
      options.includes('Horizontal (paisagem)') ? '761.89' : '515.3'
    )

    if (options.includes('Sintético') && agrupamento.length > 0) {
      handleResume()
    } else if (agrupamento.length > 1) {
      await PDFNivel2(
        newSelecteds,
        orderedFields,
        options,
        agrupamento,
        somar,
        title
      )
    } else {
      await PDFNivel1(
        newSelecteds,
        orderedFields,
        options,
        agrupamento[0],
        somar,
        title
      )
    }
  }

  const handleResume = async () => {
    const newData = resumir(selecteds, agrupamento, somar)

    const newSelecteds = convertData(
      getFormattedData(newData.lines, newData.columns),
      newData.columns
    )
    await PDFNivel1(
      newSelecteds,
      newData.columns,
      options,
      agrupamento.length > 1 ? agrupamento[0] : [],
      somar,
      title
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h5' gutterBottom sx={{ color: '#455a64' }}>
        Opções
      </Typography>
      <Divider />
      <Grid container rowSpacing={1}>
        <Tooltip
          title={
            <div>
              É necessário selecionar ao menos um registro para visualizar o
              relatório
              <br />
              Para opção de relatório sintético informe ao menos um agrupamento
            </div>
          }
          arrow
          placement='top'
        >
          <Grid xs={6}>
            <Button
              variant='contained'
              startIcon={<SearchIcon />}
              style={{ width: '100%' }}
              onClick={async () => generatePDFNivel1()}
              disabled={selecteds.length < 1}
              size='small'
            >
              Visualizar
            </Button>
          </Grid>
        </Tooltip>
        <Tooltip
          title='O resumo utiliza os agrupamentos e somas para recriar os dados da tabela ou seja é necessário informar ao menos um agrupamento para prosseguir'
          arrow
          placement='top'
        >
          <Grid xs={6}>
            <Button
              variant='contained'
              startIcon={<DescriptionIcon />}
              style={{ width: '100%' }}
              onClick={handleOpenConfirmation}
              disabled={agrupamento.length < 1}
              size='small'
            >
              Resumir
            </Button>
          </Grid>
        </Tooltip>
        <Grid xs={6}>
          <Button
            variant='outlined'
            startIcon={<DataSaverOnIcon />}
            style={{ width: '100%' }}
            onClick={handleOpenSomar}
            size='small'
          >
            Somar
          </Button>
        </Grid>
        <Grid xs={6}>
          <Button
            variant='outlined'
            startIcon={<GroupWorkIcon />}
            style={{ width: '100%' }}
            onClick={handleOpenAgrupamento}
            size='small'
          >
            Agrupar
          </Button>
        </Grid>
        <Grid xs={6}>
          <Button
            variant='outlined'
            style={{ width: '100%' }}
            onClick={handleOpenModelos}
            size='small'
          >
            Modelos
          </Button>
        </Grid>
        <Grid xs={6}>
          <Button
            variant='outlined'
            onClick={handleOpenNovoModelo}
            style={{ width: '100%' }}
            size='small'
          >
            Novo Modelo
          </Button>
        </Grid>
        <Grid xs={12}>
          <Button
            variant='outlined'
            onClick={handleOpenExportacao}
            style={{ width: '100%' }}
            size='small'
            startIcon={<FileDownloadIcon />}
          >
            Exportar
          </Button>
        </Grid>
        <Grid xs={12}>
          <OptionsChecklist
            title='Detalhes do relatório'
            listOptions={listOptions}
          />
        </Grid>
      </Grid>

      {/* MODALS */}
      <Modal
        open={openAgrupamento}
        onClose={handleCloseAgrupamento}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Agrupamento
            setOpen={setOpenAgrupamento}
            handleClose={handleCloseAgrupamento}
          />
        </Box>
      </Modal>
      <Modal
        open={openNovoModelo}
        onClose={handleCloseNovoModelo}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <NovoModelo
            setOpen={setOpenNovoModelo}
            handleClose={handleCloseNovoModelo}
          />
        </Box>
      </Modal>
      <Modal
        open={openSomar}
        onClose={handleCloseSomar}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Somar handleClose={handleCloseSomar} />
        </Box>
      </Modal>
      <Modal
        open={openModelos}
        onClose={handleCloseModelos}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Modelos handleClose={handleCloseModelos} />
        </Box>
      </Modal>
      <Modal
        open={openExportacao}
        onClose={handleCloseExportacao}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Exportacao handleClose={handleCloseExportacao} />
        </Box>
      </Modal>
      <Dialog
        open={resumeConfirmation}
        onClose={handleCloseConfirmation}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          Deseja resumir as informações?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            O resumo de informações leva em consideração a configuração de
            agrupamento e de soma para resumir as informações da tabela
            <br />
            Para restaurar os dados originais será necessário solicitar um novo
            relatório
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} variant='contained'>
            Recusar
          </Button>
          <Button
            onClick={() => {
              resume()
              handleCloseConfirmation()
            }}
            autoFocus
            variant='contained'
            color='success'
          >
            Aceitar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ButtonsList
