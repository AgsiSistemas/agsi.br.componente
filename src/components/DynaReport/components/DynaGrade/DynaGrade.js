import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import './DynaGrade.css'

import React, { useState, useMemo } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useSelectedRegisters } from '../../context/context'
const style = {
  item: {
    fontSize: '0.9rem'
  }
}

export const DynaGrade = ({ conv }) => {
  const [registers, setRegisters] = useState([])

  const {
    state: { selecteds, checkedFields, columnsOrder },
    dispatch
  } = useSelectedRegisters()

  useMemo(() => {
    setRegisters(conv)
  }, [conv])

  const onSelectRegister = (e) => {
    dispatch({
      value: e.sort((a, b) => {
        return a.id - b.id
      }),
      type: 'selecteds'
    })
  }

  const onColReorder = (e) => {
    const temp = []
    e.columns.forEach((e) => {
      temp.push(e.props.field)
    })
    dispatch({ value: temp, type: 'columnsOrder' })
  }

  const dynamicColumns = columnsOrder.map((field) => {
    if (checkedFields.includes(field)) {
      return (
        <Column
          key={field}
          columnKey={field}
          field={field}
          header={field}
          filter
          filterPlaceholder={`Search by ${field}`}
          sortable
          style={style.item}
        />
      )
    } else {
      return null
    }
  })

  return (
    <DataTable
      className='mypanel'
      value={registers}
      reorderableColumns
      resizableColumns
      onColReorder={(e) => onColReorder(e)}
      responsiveLayout='scroll'
      selection={selecteds}
      onSelectionChange={(e) => onSelectRegister(e.value)}
      dataKey='id'
      paginator
      rows={50}
      size='small'
      showGridlines
      stripedRows
      sortMode='multiple'
      emptyMessage='Nenhum resultado encontrado'
    >
      <Column selectionMode='multiple' />
      {dynamicColumns}
    </DataTable>
  )
}

export default DynaGrade
