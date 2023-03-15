import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useSelectedRegisters } from '../../context/context'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

const modelosMock = [
  'modelo 1',
  'modelo 2',
  'modelo 3',
  'caracteres *9*(!&#)+!{}`^>'
]

export const NovoModelo = ({ handleClose }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSalvar = () => {
    //ADICIONAR CARREGAMENTO DO MODELO
    handleClose()
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
            Adicionar novo modelo
          </Typography>
          <Divider />
        </div>
        <Grid
          container
          direction='row'
          xs={12}
          style={{ overflowY: 'auto', height: '100%', padding: '2px' }}
          justifyContent='space-between'
        >
          <Grid xs={12}>
            <Grid
              style={{
                padding: '8px',
                // border: '1px solid rgba(0, 0, 0, 0.12)',
                // borderRadius: '4px',
                margin: '8px'
              }}
            >
              <Box sx={{ paddingTop: 1 }}>
                <TextField
                  id='nome-arquivo'
                  label='Informe um nome'
                  variant='outlined'
                  fullWidth
                  value={value}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={(event) => {
                    setValue(event.target.value)
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent='flex-end'
          flexDirection={{ xs: 'column', sm: 'row' }}
          spacing={2}
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
              Salvar
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </React.Fragment>
  )
}

export default NovoModelo
