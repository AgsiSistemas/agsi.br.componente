import React, { useState, useEffect } from 'react'
import FieldsChecklist from '../FieldsChecklist/FieldsChecklist'
import ButtonList from '../ButtonsList/ButtonsList'
import DynaGrade from '../DynaGrade/DynaGrade'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import { useSelectedRegisters } from '../../context/context'

const reportOptions = ['Data/Hora', 'Paginação']

export const Principal = ({ api, filter }) => {
  const {
    state: { fields },
    dispatch
  } = useSelectedRegisters()
  const [data, setData] = useState(null)

  async function fetchData() {
    const res = await api.get(filter)
    setData(res.data.data.lines)
    dispatch({ value: res.data.data.columns, type: 'fields' })
    dispatch({ value: res.data.data.columns, type: 'checkedFields' })
    dispatch({
      value: [null, ...res.data.data.columns],
      type: 'columnsOrder'
    })
  }

  useEffect(() => {
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

    _data.forEach((register, i) => {
      const temp = {}
      fields.forEach((field, j) => {
        temp[field] = register[j]
      })
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
            <ButtonList listOptions={reportOptions} />
          </Item>
        </Grid>

        <Grid xs={8} sm={8} md={8} lg={9}>
          <Item>
            {data ? <DynaGrade conv={getFormattedData(data)} /> : null}
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Principal
