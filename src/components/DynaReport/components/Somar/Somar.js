import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useSelectedRegisters } from '../../context/context'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Checkbox from '@mui/material/Checkbox'

export const Somar = ({ handleClose }) => {
  const [selecteds, setSelecteds] = useState([])
  const {
    state: { somar, summableFields },
    dispatch
  } = useSelectedRegisters()

  const handleSalvar = () => {
    dispatch({ value: selecteds, type: 'somar' })
    handleClose()
  }

  const handleLimpar = () => {
    setSelecteds([])
  }

  const handleToggle = (value) => () => {
    const currentIndex = selecteds.indexOf(value)
    const newChecked = [...selecteds]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setSelecteds(newChecked)
  }

  useEffect(() => {
    setSelecteds(somar)
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
          <List
            sx={{
              width: '100%',
              maxWidth: 360
            }}
          >
            {summableFields.map((value) => {
              const labelId = `checkbox-list-label-${value}`

              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton edge='end' aria-label='comments' />
                  }
                  disablePadding
                >
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(value)}
                    dense
                    sx={{ height: '36px' }}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge='start'
                        checked={selecteds.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={value} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
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
