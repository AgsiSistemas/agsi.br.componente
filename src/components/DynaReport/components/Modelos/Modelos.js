import React, { useState } from 'react'
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

const modelosMock = [
  {
    name: 'Teste modelo 1',
    options: [
      'Horizontal (paisagem)',
      'Contador de registros',
      'Mostrar campo de agrupamento'
    ],
    group: [
      {
        id: 1,
        parent: 0,
        droppable: true,
        text: 'Grupo 01'
      },
      {
        id: 'Código',
        parent: 1,
        droppable: false,
        text: 'Código'
      },
      {
        id: 11,
        parent: 0,
        droppable: true,
        text: 'Grupo 02'
      },
      {
        id: 'Quantidade',
        parent: 11,
        droppable: false,
        text: 'Quantidade'
      }
    ],
    columnsOrder: [null, 'Quantidade', 'Código', 'Atendimento', 'Operador'],
    checkedFields: ['Código', 'Operador', 'Quantidade', 'Atendimento'],
    sum: ['Quantidade']
  },
  {
    name: 'Teste modelo 2',
    options: ['Horizontal (paisagem)'],
    group: [
      {
        id: 1,
        parent: 0,
        droppable: true,
        text: 'Grupo 01'
      },
      {
        id: 'Operador',
        parent: 1,
        droppable: false,
        text: 'Operador'
      }
    ],
    columnsOrder: [
      null,
      'Código',
      'Cód. Motivo Relato',
      'Quantidade',
      'Motivo Relato',
      'Atendimento',
      'Operador'
    ],
    checkedFields: [
      'Código',
      'Atendimento',
      'Cód. Motivo Relato',
      'Motivo Relato',
      'Operador',
      'Quantidade'
    ],
    sum: ['Quantidade']
  }
]

export const Modelos = ({ handleClose }) => {
  const { dispatch } = useSelectedRegisters()
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSalvar = () => {
    dispatch({ value: modelosMock[value].columnsOrder, type: 'columnsOrder' })
    dispatch({ value: modelosMock[value].checkedFields, type: 'checkedFields' })
    dispatch({ value: modelosMock[value].group, type: 'savedTree' })
    dispatch({ value: modelosMock[value].options, type: 'options' })
    dispatch({ value: modelosMock[value].sum, type: 'somar' })

    //AGRUPAMENTO
    const grupo1 = []
    const grupo2 = []
    modelosMock[value].group.forEach((el) => {
      if (el.parent === 1) {
        grupo1.push(el.id)
      } else if (el.parent === 11) {
        grupo2.push(el.id)
      }
    })
    if (grupo2.length > 0) {
      dispatch({ value: [grupo1, grupo2], type: 'agrupamento' })
    } else {
      dispatch({ value: [grupo1], type: 'agrupamento' })
    }

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
            Modelos
          </Typography>
          <Divider />
        </div>

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
            {modelosMock.map((modelo, index) => {
              return (
                <FormControlLabel
                  key={modelo.name}
                  value={index}
                  control={<Radio />}
                  label={modelo.name}
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
              <Button variant='outlined' startIcon={<DeleteIcon />}>
                Excluir modelo
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
    </React.Fragment>
  )
}

export default Modelos
