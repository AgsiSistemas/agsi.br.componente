import React, { useState, useEffect } from 'react'
import FieldsChecklist from '../FieldsChecklist/FieldsChecklist'
import ButtonList from '../ButtonsList/ButtonsList'
import DynaGrade from '../DynaGrade/DynaGrade'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import { useSelectedRegisters } from '../../context/context'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

const reportOptions = ['Data/Hora', 'Paginação']

export const Principal = ({ api, filter }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = React.useState(false)

  const {
    state: { fields },
    dispatch
  } = useSelectedRegisters()

  const clearComponent = () => {
    setData(null)
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
    setLoading(false)
  }

  useEffect(() => {
    clearComponent()
    fetchData().catch((err) => console.log(err))
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
  return (
    <Box sx={{ minWidth: '840px' }}>
      <Grid container spacing={2}>
        <Grid xs={4} sm={4} md={4} lg={3}>
          <Item sx={{ marginBottom: '8px' }}>
            <FieldsChecklist />
          </Item>

          <Item sx={{ marginBottom: '8px' }}>
            <ButtonList
              listOptions={reportOptions}
              sumOptions={data?.summableFields}
            />
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
