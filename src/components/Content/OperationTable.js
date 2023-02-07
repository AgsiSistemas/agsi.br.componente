import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import DeleteIcon from '@mui/icons-material/Delete'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import PrintIcon from '@mui/icons-material/Print'
import IconButton from '@mui/material/IconButton'
import { Conteiner, ConteinerItem } from '../Conteiner/Conteiner'
import PageBase from '../PageBase/PageBase'
import { Paginator } from 'primereact/paginator'

const style = {
  operation_content_header: {
    textAlign: 'end',
    marginBottom: '5px',
    padding: '8px',
    minHeight: '68px',
    borderBottom: 'solid 1px rgba(0, 0, 0, .125)'
  },
  operation_content_header_search: {
    textAlign: 'start',
    padding: '8px',
    minHeight: '68px',
    marginBottom: '5px',
    borderBottom: 'solid 1px rgba(0, 0, 0, .125)'
  },
  operation_content_data_table: {
    overflowX: 'auto'
  },
  operation_content_group: {
    border: '1px solid rgba(0, 0, 0, .125)'
  },
  paginatorRight: {
    fontSize: '12px',
    color: '#69ABEC',
    fontWeight: 'normal'
  },
  loadingPaginator: {
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    pointerEvents: 'none',
    borderRadius: 0,
    zIndex: 1000
  }
}

const handleDisplay = (display) => {
  if (display === undefined) return 'none'
  else {
    return display ? 'inline-flex' : 'none'
  }
}

const OperationTable = (props) => {
  const {
    onReportClick,
    onAddClick,
    deleteHandler,
    records,
    paginator,
    columnList,
    heigthDataTable,
    display,
    onClick,
    paginatorStep,
    sortField,
    sortOrder,
    paginatorButton,
    pageableData
  } = props

  const rowsTable = paginatorStep ? paginatorStep : 5
  const pagArr = [rowsTable]
  const printIcon = props.printIcon == false ? props.printIcon : true

  const [loading, setLoading] = useState(false)
  const [first, setFirst] = useState(0)
  const [rows, setRows] = useState(pageableData?.pageable?.pageSize)
  const totalRecords = pageableData?.totalElements

  useEffect(() => {
    setLoading(false)
  }, [pageableData])

  const onPageChange = (e) => {
    setLoading(true)
    paginatorButton.onClick(e)
    setFirst(e.first)
    setRows(e.rows)
  }
  const template = {
    layout:
      'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
  }

  return (
    <div>
      <PageBase>
        <div style={style.operation_content_group}>
          <Conteiner>
            <ConteinerItem style={style.operation_content_header_search}>
              <IconButton
                id='id_operation_content_search'
                style={{ display: handleDisplay(display) }}
                className='icon-btn-blue'
                size='large'
                onClick={onClick}
              >
                <Tooltip title='Filtros / Pesquisa'>
                  <FilterAltIcon fontSize='inherit' />
                </Tooltip>
              </IconButton>
            </ConteinerItem>
            <ConteinerItem style={style.operation_content_header}>
              {printIcon && (
                <IconButton
                  className='icon-btn-blue'
                  size='large'
                  style={{ marginRight: '7px' }}
                  onClick={onReportClick}
                >
                  <Tooltip title='Imprimir'>
                    <PrintIcon fontSize='inherit' />
                  </Tooltip>
                </IconButton>
              )}
              {onAddClick && (
                <Button
                  className='btn-blue'
                  startIcon={<AddCircleOutlineIcon />}
                  variant='contained'
                  color='success'
                  onClick={onAddClick}
                >
                  {props.onAddClickTitle ? props.onAddClickTitle : 'Incluir'}
                </Button>
              )}
            </ConteinerItem>
          </Conteiner>
          <Conteiner>
            <ConteinerItem style={style.operation_content_data_table}>
              <DataTable
                value={records}
                paginatorTemplate={template}
                sortField={sortField}
                sortOrder={sortOrder}
                responsiveLayout='scroll'
                loading={loading}
                size='small'
                emptyMessage={'Nenhum resultado encontrado'}
                scrollHeight={heigthDataTable}
              >
                {columnList.map((item, index) => {
                  if (item.body !== undefined)
                    return (
                      <Column
                        key={index}
                        style={item.style}
                        sortable={item.sortable}
                        field={item.field}
                        body={item.body}
                        header={item.header}
                        frozen={item.frozen}
                        alignFrozen={item.alignFrozen}
                        dataType={item.dataType}
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
                        dataType={item.dataType}
                      />
                    )
                })}
              </DataTable>
              {pageableData && (
                <Paginator
                  style={loading ? style.loadingPaginator : {}}
                  template={template}
                  onPageChange={onPageChange}
                  first={first}
                  rows={rows}
                  totalRecords={totalRecords}
                  currentPageReportTemplate={
                    'Mostrando {first} a {last} de {totalRecords}'
                  }
                  rowsPerPageOptions={[10, 20, 30, 50]}
                ></Paginator>
              )}
            </ConteinerItem>
          </Conteiner>
        </div>
      </PageBase>

      <Dialog
        open={deleteHandler?.displayDelete}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Confirmação</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Tem certeza que deseja excluir ?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{ marginRight: '5px' }}
            variant='outlined'
            component='span'
            onClick={() => deleteHandler.onCancelClick()}
          >
            Cancelar
          </Button>
          <Button
            className='btn-red'
            variant='contained'
            startIcon={<DeleteIcon />}
            color='error'
            onClick={() => deleteHandler.onDeleteClick()}
            autoFocus
          >
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

OperationTable.propTypes = {
  onReportClick: PropTypes.func,
  onAddClick: PropTypes.func,
  paginator: PropTypes.bool,
  deleteHandler: PropTypes.shape({
    displayDelete: PropTypes.bool,
    onCancelClick: PropTypes.func,
    onDeleteClick: PropTypes.func
  }),
  records: PropTypes.arrayOf(PropTypes.object),
  columnList: PropTypes.arrayOf(PropTypes.object),
  heigthDataTable: PropTypes.number,
  display: PropTypes.bool,
  onClick: PropTypes.func,
  printIcon: PropTypes.bool,
  paginatorButton: PropTypes.object
}

OperationTable.defaultProp = {
  onReportClick: () => {},
  onAddClick: () => {},
  paginator: false,
  deleteHandler: {
    displayDelete: false,
    onCancelClick: () => {},
    onDeleteClick: () => {}
  },
  records: [],
  columnList: [],
  heigthDataTable: 0,
  display: false,
  onClick: () => {},
  printIcon: true,
  paginatorButton: {
    title: 'Carregar mais..',
    onClick: () => {}
  }
}

export default React.memo(OperationTable)
