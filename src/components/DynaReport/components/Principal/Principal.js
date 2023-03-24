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
import {
  getFormattedData,
  resumir,
  defaultModelRoute
} from '../../utils/Methods'

const reportOptions = [
  'Horizontal (paisagem)',
  'Contador de registros',
  'Mostrar campo de agrupamento',
  'Sintético'
]

export const Principal = ({
  api,
  filter,
  endPoint,
  title = null,
  subTitle = null,
  text = null
}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [resumed, setResumed] = useState(false)
  const [modeloStandard, setModeloStandard] = useState(null)

  const {
    state: { fields, agrupamento, somar },
    dispatch
  } = useSelectedRegisters()

  const clearComponent = () => {
    setData(null)
    setError(false)
    dispatch({ value: [], type: 'fields' })
    dispatch({ value: [], type: 'checkedFields' })
    dispatch({ value: [], type: 'columnsOrder' })
  }

  const handleRefetch = (newdata) => {
    dispatch({
      value: [String(title ?? ''), String(subTitle ?? ''), String(text ?? '')],
      type: 'title'
    })
    dispatch({ value: newdata.columns, type: 'fields' })
    dispatch({ value: newdata.columns, type: 'checkedFields' })
    dispatch({
      value: [null, ...newdata.columns],
      type: 'columnsOrder'
    })
    dispatch({
      value: newdata.summableFields,
      type: 'somar'
    })
    dispatch({
      value: newdata.summableFields,
      type: 'summableFields'
    })
    dispatch({ value: endPoint, type: 'endpoint' })
  }

  const applyModelo = (modelo) => {
    dispatch({ value: modelo.columnsOrder, type: 'columnsOrder' })
    dispatch({ value: modelo.checkedFields, type: 'checkedFields' })
    dispatch({ value: modelo.group, type: 'savedTree' })
    dispatch({ value: modelo.options, type: 'options' })
    dispatch({ value: modelo.sum, type: 'somar' })

    //AGRUPAMENTO
    const grupo1 = []
    const grupo2 = []
    modelo.group.forEach((el) => {
      if (el.parent === 1) {
        grupo1.push(el.id)
      } else if (el.parent === 11) {
        grupo2.push(el.id)
      }
    })
    if (grupo2.length > 0) {
      dispatch({ value: [grupo1, grupo2], type: 'agrupamento' })
    } else if (grupo1.length > 0) {
      dispatch({ value: [grupo1], type: 'agrupamento' })
    } else {
      dispatch({ value: [], type: 'agrupamento' })
    }
  }

  async function fetchData() {
    setLoading(true)
    const res = await api.get(`${endPoint}?${filter}`)

    dispatch({ value: api, type: 'api' })
    setData(res.data.data)
    handleRefetch(res.data.data)
    setLoading(false)
  }

  async function fetchModelos() {
    const res = await api.get(`${defaultModelRoute}?endpoint=${endPoint}`)
    if (res.data.length > 0) {
      res.data.forEach((element) => {
        if (element.standard) {
          applyModelo(JSON.parse(element.configuration))
        }
      })
    }
  }

  useEffect(() => {
    handleFetch()
    fetchModelos()
  }, [api])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center'
  }))

  const handleFetch = () => {
    clearComponent()
    fetchData().catch((err) => {
      console.log(err)
      setError(true)
    })
  }

  const handleResumo = () => {
    setLoading(true)
    const newData = resumir(
      getFormattedData(data?.lines, fields),
      agrupamento,
      somar
    )

    setData(newData)
    handleRefetch(newData)
    setLoading(false)
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
    <Box sx={{ minWidth: '910px' }}>
      <Grid container spacing={2}>
        <Grid xs={4} sm={4} md={4} lg={3}>
          <Item sx={{ marginBottom: '8px' }}>
            <FieldsChecklist />
          </Item>

          <Item sx={{ marginBottom: '8px' }}>
            <ButtonList
              listOptions={reportOptions}
              resume={handleResumo}
              resumed={resumed}
              setResumed={setResumed}
              modelo={{ applyModelo, modeloStandard, setModeloStandard }}
            />
          </Item>
        </Grid>
        <Grid xs={8} sm={8} md={8} lg={9}>
          <Item>
            <DynaGrade conv={getFormattedData(data?.lines, fields)} />
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
