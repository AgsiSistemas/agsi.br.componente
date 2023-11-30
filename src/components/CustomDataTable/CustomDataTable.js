import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Typography } from '@mui/material'
import './CustomDataTable.scss'

const CustomDataTable = (props) => {
  const {
    records,
    title,
    columnList,
    heigthDataTable,
    paginatorStep,
    displayBorder,
    paginator,
    displayExpander,
    onRowExpand,
    onRowCollapse,
    rowExpansionTemplate,
    paginatorButton,
    emptyMessage,
    loading
  } = props

  const rowsTable = paginatorStep ? paginatorStep : 5
  const pagArr = [rowsTable]

  const [expandedRows, setExpandedRows] = useState(null)

  const paginatorRight =
    paginatorButton !== undefined ? (
      <Button
        label={
          paginatorButton?.title !== undefined
            ? paginatorButton?.title
            : 'Carregar mais...'
        }
        type='button'
        icon='pi pi-refresh'
        className='p-button-text paginator-right'
        onClick={paginatorButton.onClick}
      />
    ) : (
      <React.Fragment />
    )

  const calPerPage = () => {
    var i = 0
    while (i < 2) {
      i++
      const inclement = pagArr[pagArr.length - 1] + rowsTable
      if (!pagArr.includes(inclement) || !inclement == 50) {
        pagArr.push(inclement)
      }
    }
    pagArr.push(50)
    return pagArr.sort(function (a, b) {
      return a - b
    })
  }

  return (
    <Fragment >
      {title &&
        <Typography className='title-table-custom'>
          {title}
        </Typography>
      }
      <DataTable
        className={
          displayBorder ?
            'content-data-table-display-border' :
            'custom-data-table-content'}
        value={records}
        style={{ width: '100%' }}
        loading={loading}
        scrollable
        paginator={paginator}
        paginatorRight={paginatorRight}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        onRowExpand={onRowExpand}
        onRowCollapse={onRowCollapse}
        rowExpansionTemplate={rowExpansionTemplate}
        selectionMode='single'
        responsiveLayout='scroll'
        paginatorTemplate='CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
        currentPageReportTemplate={
          'Mostrando {first} a {last} de {totalRecords}'
        }
        size='small'
        rows={rowsTable}
        emptyMessage={emptyMessage ? emptyMessage : 'Nenhum resultado encontrado'}
        rowsPerPageOptions={calPerPage()}
        scrollHeight={heigthDataTable}
      >
        {displayExpander && <Column expander style={{ width: '3em' }} />}
        {columnList?.map((item, index) => {
          if (item.body !== undefined)
            return (
              <Column
                key={index}
                style={item.style}
                sortable={item.sortable}
                body={item.body}
                header={item.header}
                frozen={item.frozen}
                alignFrozen={item.alignFrozen}
              />
            )
          else
            return (
              <Column
                key={index}
                style={item.style}
                sortable={item.sortable}
                field={item.field}
                header={item.header}
                frozen={item.frozen}
              />
            )
        })}
      </DataTable>
    </Fragment >
  )
}

CustomDataTable.propTypes = {
  title: PropTypes.string,
  records: PropTypes.arrayOf(PropTypes.object),
  columnList: PropTypes.arrayOf(PropTypes.object),
  heigthDataTable: PropTypes.number,
  displayBorder: PropTypes.bool,
  paginator: PropTypes.bool,
  displayExpander: PropTypes.bool,
  onRowExpand: PropTypes.func,
  onRowCollapse: PropTypes.func,
  paginatorButton: PropTypes.object,
  emptyMessage: PropTypes.string
}

CustomDataTable.defaultProp = {
  title: '',
  records: [],
  columnList: [],
  heigthDataTable: 0,
  displayBorder: false,
  paginator: false,
  displayExpander: false,
  onRowExpand: () => { },
  onRowCollapse: () => { },
  paginatorButton: {
    title: 'Carregar mais..',
    onClick: () => { }
  },
  emptyMessage: ''
}

export default React.memo(CustomDataTable)
