import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useSelectedRegisters } from '../../context/context'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import Stack from '@mui/material/Stack'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormLabel from '@mui/material/FormLabel'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox'

const tiposExportacao = ['Excel', 'Texto', 'Word', 'Calc (BrOffice)', 'CSV']
const tiposDatas = ['DDMMYY', 'MMDDYY', 'MMYY', 'DDMMYYYY']
const opcoesExportacao = [
  'Nova pasta',
  'Exportar cabeçalho',
  'manter Excel Visível'
]

export const Exportacao = ({ handleClose }) => {
  const {
    state: { orderedFields, checkedFields }
  } = useSelectedRegisters()
  const [extensao, setExtensao] = useState('')
  const [selectedData, setSelectedData] = useState('')
  const [fileName, setFileName] = useState('')
  const [selecteds, setSelecteds] = useState([])

  const handleToggleOpcao = (value) => () => {
    const currentIndex = selecteds.indexOf(value)
    const newChecked = [...selecteds]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setSelecteds(newChecked)
  }

  const handleChangeExtensao = (event) => {
    setExtensao(event.target.value)
  }

  const handleSalvar = () => {
    handleClose()
  }

  const handleChangeData = (event) => {
    setSelectedData(event.target.value)
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
            Exportação
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
          <Grid xs={8}>
            <Grid
              style={{
                padding: '8px',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                borderRadius: '4px',
                margin: '8px'
              }}
            >
              <FormLabel id='controlled-radio-buttons-group2'>
                Opções de formatação
              </FormLabel>
              <Box sx={{ paddingTop: 1 }}>
                <FormControl fullWidth>
                  <InputLabel id='simple-select-label' shrink={true}>
                    Formato de data
                  </InputLabel>
                  <Select
                    labelId='simple-select-label'
                    id='simple-select'
                    value={selectedData}
                    label='Formato de data'
                    onChange={handleChangeData}
                    notched={true}
                  >
                    {tiposDatas.map((tipo) => (
                      <MenuItem key={tipo} value={tipo}>
                        {tipo}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ paddingTop: 1 }}>
                <TextField
                  id='nome-arquivo'
                  label='Nome do arquivo'
                  variant='outlined'
                  fullWidth
                  value={fileName}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={(event) => {
                    setFileName(event.target.value)
                  }}
                />
              </Box>

              <List
                sx={{
                  width: '100%',
                  maxWidth: 360
                }}
              >
                {opcoesExportacao.map((opcao) => {
                  const labelId = `checkbox-list-label-${opcao}`

                  return (
                    <ListItem
                      key={opcao}
                      secondaryAction={
                        <IconButton edge='end' aria-label='comments' />
                      }
                      disablePadding
                    >
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggleOpcao(opcao)}
                        dense
                        sx={{ height: '36px' }}
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge='start'
                            checked={selecteds.indexOf(opcao) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={opcao} />
                      </ListItemButton>
                    </ListItem>
                  )
                })}
              </List>
            </Grid>
          </Grid>
          <Grid xs={4}>
            <Grid
              style={{
                paddingTop: '8px',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                borderRadius: '4px',
                margin: '8px'
              }}
            >
              <FormLabel
                id='controlled-radio-buttons-group'
                sx={{ paddingLeft: '8px' }}
              >
                Exportar para
              </FormLabel>

              <RadioGroup
                aria-labelledby='controlled-radio-buttons-group'
                name='controlled-radio-buttons-group'
                value={extensao}
                onChange={handleChangeExtensao}
              >
                {tiposExportacao.map((tipo) => {
                  return (
                    <FormControlLabel
                      key={tipo}
                      value={tipo}
                      sx={{
                        paddingLeft: 2,
                        '& .MuiRadio-root': {
                          padding: '4px'
                        }
                      }}
                      control={
                        <Radio
                          size='small'
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 24
                            }
                          }}
                        />
                      }
                      label={tipo}
                    />
                  )
                })}
              </RadioGroup>
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
              startIcon={<FileDownloadIcon />}
              color='success'
            >
              Exportar
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </React.Fragment>
  )
}

export default Exportacao
