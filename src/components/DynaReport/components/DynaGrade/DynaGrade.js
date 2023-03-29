import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import './DynaGrade.css'

import React, { useState, useMemo, useRef } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useSelectedRegisters } from '../../context/context'
import { Button } from 'primereact/button'

const style = {
  item: {
    fontSize: '0.9rem'
  }
}

export const DynaGrade = ({ conv }) => {
  const [registers, setRegisters] = useState([])
  const dt = useRef(null)

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

  const exportColumns = columnsOrder.map((col) => ({
    title: col,
    dataKey: col
  }))
  console.log(exportColumns)

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly })
  }

  const exportPdf = () => {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then(() => {
        const doc = new jsPDF.default(0, 0)

        doc.autoTable(exportColumns, registers)
        doc.save(`Relatrório simples ${new Date().toUTCString()}.pdf`)
      })
    })
  }

  const exportExcel = () => {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(registers)
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] }
      const excelBuffer = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      })

      saveAsExcelFile(excelBuffer, `export ${new Date().toUTCString()}`)
    })
  }

  const saveAsExcelFile = (buffer, fileName) => {
    import('file-saver').then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        let EXCEL_EXTENSION = '.xlsx'
        const data = new Blob([buffer], {
          type: EXCEL_TYPE
        })

        module.default.saveAs(
          data,
          fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
        )
      }
    })
  }

  const header = (
    <div className='flex align-items-center justify-content-end gap-2'>
      <Button
        type='button'
        icon='pi pi-file'
        onClick={() => exportCSV(false)}
        data-pr-tooltip='CSV'
      />
      <Button
        type='button'
        icon='pi pi-file-excel'
        severity='success'
        onClick={exportExcel}
        data-pr-tooltip='XLS'
      />
      <Button
        type='button'
        icon='pi pi-file-pdf'
        severity='warning'
        onClick={exportPdf}
        data-pr-tooltip='PDF'
        rounded
      />
    </div>
  )

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
      header={header}
      ref={dt}
    >
      <Column selectionMode='multiple' />
      {dynamicColumns}
    </DataTable>
  )
}

export default DynaGrade
