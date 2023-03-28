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
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { defaultModelRoute } from '../../utils/Methods'

export const NovoModelo = ({ handleClose, options }) => {
  const [value, setValue] = useState('')
  const [checked, setChecked] = React.useState(false)

  const handleChangePadrao = (event) => {
    setChecked(event.target.checked)
  }

  const {
    state: { checkedFields, columnsOrder, savedTree, somar, api, endpoint }
  } = useSelectedRegisters()

  const handleSalvar = async () => {
    await api
      .post(defaultModelRoute, {
        endpoint: endpoint,
        name: value,
        standard: checked,
        configuration: JSON.stringify({
          options: options,
          group: savedTree,
          columnsOrder: columnsOrder,
          checkedFields: checkedFields,
          sum: somar
        })
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })

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
                margin: '8px'
              }}
            >
              <Box sx={{ paddingTop: 1 }}>
                <TextField
                  id='nome-arquivo'
                  label='Informe o nome do modelo'
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
              <Box sx={{ paddingTop: 1 }}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={checked}
                        onChange={handleChangePadrao}
                        inputProps={{ 'aria-label': 'modelo-padrao' }}
                      />
                    }
                    label='Padrão'
                  />
                  <Typography
                    variant='caption'
                    display='block'
                    gutterBottom
                    sx={{ padding: '8px 12px' }}
                  >
                    *Salvando como padrão o modelo (opções, agrupamentos,
                    ordenação de colunas, campos, e somas) será pré carregado na
                    próxima vez que acessar esse relatório.
                  </Typography>
                </FormGroup>
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
