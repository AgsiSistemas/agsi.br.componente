import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useSelectedRegisters } from '../../context/context'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { defaultModelRoute } from '../../utils/Methods'

export const Modelos = ({
  handleClose,
  applyModelo,
  modeloStandard,
  updateModeloStandard
}) => {
  const {
    state: { api, endpoint }
  } = useSelectedRegisters()

  const [resumeConfirmation, setResumeConfirmation] = useState(false)
  const handleOpenConfirmation = () => setResumeConfirmation(true)
  const handleCloseConfirmation = () => setResumeConfirmation(false)

  const [value, setValue] = useState('')
  const [modelosList, setModelosList] = useState([])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  async function fetchData() {
    const res = await api.get(`${defaultModelRoute}?endpoint=${endpoint}`)
    setModelosList(res.data)

    if (modeloStandard) {
      setValue(modeloStandard)
    } else if (res.data.length > 0) {
      res.data.forEach((element) => {
        if (element.standard) {
          setValue(String(element.id))
        }
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSalvar = () => {
    updateModeloStandard(value)
    applyModelo(
      JSON.parse(
        modelosList.find((obj) => String(obj.id) === value).configuration
      )
    )
    handleClose()
  }

  const handleDelete = async () => {
    api
      .delete(`${defaultModelRoute}/${value}`)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    fetchData()
  }

  return (
    <React.Fragment>
      <Stack
        direction='column'
        justifyContent='space-between'
        alignItems='stretch'
        spacing={0}
        style={{ height: '100%' }}
      >
        <div>
          <Typography variant='h5' gutterBottom sx={{ padding: '8px 12px' }}>
            Modelos
          </Typography>
          <Divider />
        </div>
        <Typography sx={{ padding: '8px 0px' }}>
          Selecione um modelo para aplicar no relatório atual:
        </Typography>
        <Grid
          container
          direction='row'
          xs={12}
          style={{ overflowY: 'auto', height: '100%', padding: '2px' }}
        >
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            value={value}
            onChange={handleChange}
          >
            {modelosList?.map((modelo) => {
              return (
                <FormControlLabel
                  key={modelo.name}
                  value={modelo.id}
                  control={<Radio />}
                  label={
                    modelo.standard ? (
                      <>
                        {modelo.name}
                        <Typography
                          variant='caption'
                          sx={{ padding: '8px 12px' }}
                        >
                          (padrão)
                        </Typography>
                      </>
                    ) : (
                      modelo.name
                    )
                  }
                />
              )
            })}
          </RadioGroup>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent='space-between'
          alignItems='flex-end'
          flexDirection={{ xs: 'column', sm: 'row' }}
          spacing={2}
        >
          <Grid
            container
            xs={5}
            justifyContent='flex-start'
            style={{ padding: '8px' }}
          >
            <Grid item>
              <Button
                variant='outlined'
                onClick={handleOpenConfirmation}
                startIcon={<DeleteIcon />}
              >
                Remover modelo
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            xs={7}
            justifyContent='flex-end'
            style={{ padding: '8px' }}
          >
            <Grid item>
              <Button
                variant='contained'
                onClick={handleClose}
                startIcon={<CancelOutlinedIcon />}
              >
                Cancelar
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                onClick={handleSalvar}
                startIcon={<SaveOutlinedIcon />}
                color='success'
              >
                Carregar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
      <Dialog
        open={resumeConfirmation}
        onClose={handleCloseConfirmation}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          Deseja remover o modelo {modelosList[value]?.name}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Não será possível recuperá-lo
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} variant='contained'>
            Cancelar
          </Button>
          <Button
            onClick={() => {
              handleDelete()
              handleCloseConfirmation()
            }}
            autoFocus
            variant='contained'
            color='error'
          >
            Remover
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default Modelos
