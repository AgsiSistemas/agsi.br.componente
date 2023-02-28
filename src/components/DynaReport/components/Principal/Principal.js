import React, { useState, useEffect } from 'react'
import FieldsChecklist from '../FieldsChecklist/FieldsChecklist'
import ButtonList from '../ButtonsList/ButtonsList'
import DynaGrade from '../DynaGrade/DynaGrade'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import { useSelectedRegisters } from '../../context/context'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { Typography } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error'

const reportOptions = ['Data/Hora', 'Paginação', 'Mostrar campo de agrupamento']

export const Principal = ({ api, filter }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const {
    state: { fields },
    dispatch
  } = useSelectedRegisters()

  const clearComponent = () => {
    setData(null)
    setError(false)
    dispatch({ value: [], type: 'fields' })
    dispatch({ value: [], type: 'checkedFields' })
    dispatch({ value: [], type: 'columnsOrder' })
  }

  async function fetchData() {
    setLoading(true)
    const res = await api.get(filter)
    setData(res.data.data)
    dispatch({ value: res.data.data.columns, type: 'fields' })
    dispatch({ value: res.data.data.columns, type: 'checkedFields' })
    dispatch({
      value: [null, ...res.data.data.columns],
      type: 'columnsOrder'
    })
    dispatch({
      value: res.data.data.summableFields,
      type: 'somar'
    })
    dispatch({
      value: res.data.data.summableFields,
      type: 'summableFields'
    })
    setLoading(false)
  }

  useEffect(() => {
    handleFetch()
  }, [api])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

  const getFormattedData = (_data) => {
    const newData = []

    _data?.forEach((register, i) => {
      const temp = {}
      fields.forEach((field, j) => {
        temp[field] = register[j]
      })
      temp.id = i
      newData.push(temp)
    })
    return newData
  }

  const handleFetch = () => {
    clearComponent()
    fetchData().catch((err) => {
      console.log(err)
      setError(true)
    })
  }

  if (error) {
    return (
      <Grid
        sx={{
          textAlign: 'center',
          paddingY: '8px',
          backgroundColor: 'rgb(236, 245, 250)'
        }}
      >
        <ErrorIcon fontSize='large' />
        <Typography>Não foi possível se comunicar com o servidor</Typography>
        <Button onClick={handleFetch}>Tentar novamente</Button>
      </Grid>
    )
  }
  return (
    <Box sx={{ minWidth: '840px' }}>
      <Grid container spacing={2}>
        <Grid xs={4} sm={4} md={4} lg={3}>
          <Item sx={{ marginBottom: '8px' }}>
            <FieldsChecklist />
          </Item>

          <Item sx={{ marginBottom: '8px' }}>
            <ButtonList listOptions={reportOptions} />
          </Item>
        </Grid>

        <Grid xs={8} sm={8} md={8} lg={9}>
          <Item>
            <DynaGrade conv={getFormattedData(data?.lines)} />
          </Item>
        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </Box>
  )
}

export default Principal
