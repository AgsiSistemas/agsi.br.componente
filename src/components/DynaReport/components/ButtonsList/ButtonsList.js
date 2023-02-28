import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import DescriptionIcon from '@mui/icons-material/Description'
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { PDFNivel1 } from '../../utils/PDFNivel1'
import { PDFNivel2 } from '../../utils/PDFNivel2'
import { PDFBasico } from '../../utils/PDFBasico'
import OptionsChecklist from '../OptionsChecklist/OptionsChecklist'
import Agrupamento from '../Agrupamento/Agrupamento'
import Somar from '../Somar/Somar'
import Modal from '@mui/material/Modal'
import { useSelectedRegisters } from '../../context/context'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 580,
  height: 400,
  bgcolor: '#fff',
  borderRadius: '5px',
  boxShadow: 24,
  p: 2
}

function ButtonsList({ listOptions }) {
  const [openAgrupamento, setOpenAgrupamento] = useState(false)
  const handleOpenAgrupamento = () => setOpenAgrupamento(true)
  const handleCloseAgrupamento = () => setOpenAgrupamento(false)

  const [openSomar, setOpenSomar] = useState(false)
  const handleOpenSomar = () => setOpenSomar(true)
  const handleCloseSomar = () => setOpenSomar(false)

  const {
    state: { selecteds, fields, checkedFields, options, agrupamento, somar }
  } = useSelectedRegisters()

  const generatePDFNivel1 = async () => {
    const filteredArr = []

    selecteds.forEach((element) => {
      const newObj = Object.keys(element)
        .filter((key) => fields.includes(key))
        .reduce((obj, key) => {
          if (checkedFields.includes(key)) obj[key] = element[key] ?? ''
          return obj
        }, {})

      filteredArr.push(newObj)
    })
    if (agrupamento.length > 1) {
      await PDFNivel2(
        filteredArr,
        [...checkedFields],
        options,
        agrupamento,
        somar
      )
    } else {
      await PDFNivel1(
        filteredArr,
        [...checkedFields],
        options,
        agrupamento[0],
        somar
      )
    }
  }

  const generatePDFBasico = async () => {
    const filteredArr = []

    selecteds.forEach((element) => {
      const newObj = Object.keys(element)
        .filter((key) => fields.includes(key))
        .reduce((obj, key) => {
          if (checkedFields.includes(key)) obj[key] = element[key] ?? ''
          return obj
        }, {})

      filteredArr.push(newObj)
    })
    await PDFBasico(filteredArr, checkedFields, options)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h5' gutterBottom sx={{ color: '#455a64' }}>
        Opções
      </Typography>
      <Divider />
      <Grid container rowSpacing={1}>
        <Grid xs={6}>
          <Button
            variant='contained'
            startIcon={<SearchIcon />}
            style={{ width: '100%' }}
            onClick={async () => generatePDFNivel1()}
            disabled={selecteds.length < 1}
          >
            Visualizar
          </Button>
        </Grid>
        <Grid xs={6}>
          <Button
            variant='contained'
            startIcon={<DescriptionIcon />}
            style={{ width: '100%' }}
            onClick={async () => generatePDFBasico()}
            disabled={selecteds.length < 1}
          >
            Resumir
          </Button>
        </Grid>
        <Grid xs={6}>
          <Button
            variant='outlined'
            startIcon={<DataSaverOnIcon />}
            style={{ width: '100%' }}
            onClick={handleOpenSomar}
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
          >
            Agrupar
          </Button>
        </Grid>
        <Grid xs={12}>
          <OptionsChecklist
            title='Detalhes do relatório'
            listOptions={listOptions}
          />
        </Grid>
      </Grid>
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
        open={openSomar}
        onClose={handleCloseSomar}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Somar handleClose={handleCloseSomar} />
        </Box>
      </Modal>
    </Box>
  )
}

export default ButtonsList
