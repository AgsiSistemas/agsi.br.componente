import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { useSelectedRegisters } from '../../context/context'

export default function FieldsChecklist() {
  const {
    state: { fields, checkedFields },
    dispatch
  } = useSelectedRegisters()

  const handleToggle = (value) => () => {
    const currentIndex = checkedFields.indexOf(value)
    const newChecked = [...checkedFields]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    dispatch({ value: newChecked, type: 'checkedFields' })
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant='h5' gutterBottom sx={{ color: '#455a64' }}>
        Campos disponiveis
      </Typography>
      <Divider />
      <List
        sx={{
          width: '100%',
          maxWidth: 360
        }}
      >
        {fields.map((value) => {
          const labelId = `checkbox-list-label-${value}`

          return (
            <ListItem
              key={value}
              secondaryAction={<IconButton edge='end' aria-label='comments' />}
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={checkedFields.indexOf(value) !== -1}
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
    </Box>
  )
}
