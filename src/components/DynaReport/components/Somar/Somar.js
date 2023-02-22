import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useSelectedRegisters } from '../../context/context'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import Radio from '@mui/material/Radio'
import Stack from '@mui/material/Stack'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

export const Somar = ({ handleClose, options }) => {
  const [value, setValue] = useState('')
  const {
    state: { somar },
    dispatch
  } = useSelectedRegisters()

  const handleSalvar = () => {
    dispatch({ value: value, type: 'somar' })
    handleClose()
  }

  const handleLimpar = () => {
    setValue('')
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    setValue(somar)
  }, [])

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
            Opções de Soma
          </Typography>
          <Divider />
        </div>

        <Grid
          container
          direction='row'
          xs={12}
          style={{ overflowY: 'auto', height: '100%', padding: '2px' }}
        >
          <FormControl component='fieldset'>
            <RadioGroup
              aria-label='gender'
              name='gender1'
              value={value}
              onChange={handleChange}
              row
            >
              {options.map((value) => {
                return (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={value}
                  />
                )
              })}
            </RadioGroup>
          </FormControl>
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
            xs={6}
            justifyContent='flex-start'
            style={{ padding: '8px' }}
          >
            <Grid item>
              <Button variant='outlined' onClick={handleLimpar}>
                Limpar
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            xs={6}
            justifyContent='flex-end'
            style={{ padding: '8px' }}
          >
            <Grid item>
              <Button
                variant='contained'
                onClick={handleClose}
                color='error'
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
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </React.Fragment>
  )
}

export default Somar
