import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PrintIcon from '@mui/icons-material/Print';
import IconButton from '@mui/material/IconButton';
import { Conteiner, ConteinerItem } from '../Conteiner/Conteiner';
import PageBase from '../PageBase/PageBase';

const style = {
    operation_content_header: {
        textAlign: 'end',
        padding: '8px',

    },
    operation_content_justify_header: {
        justifyContent: 'space-between',
        borderBottom: 'solid 1px rgba(0, 0, 0, .125)',
    },
    operation_content_header_search: {
        textAlign: 'start',
        flex: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.125)'
    },
    operation_content_data_table: {
        overflowX: 'auto'
    },
    operation_content_group: {
        border: '1px solid rgba(0, 0, 0, .125)'
    }
}


const handleDisplay = (display) => {
    if (display === undefined)
        return 'none'
    else {
        return display ? 'inline-flex' : 'none'
    }
}
const OperationTable = (props) => {

    const { onReportClick, onAddClick, deleteHandler, records, columnList, heigthDataTable, display, onClick, paginatorStep, sortField, sortOrder } = props

    const rowsTable = paginatorStep ? paginatorStep : 5
    const pagArr = [rowsTable];
    const printIcon = props.printIcon == false ? props.printIcon : true

    // Check and set quantity of rows and rowsperpage
    const calPerPage = () => {
        var i = 0;

        while (i < 2) {
            i++;
            const inclement = pagArr[pagArr.length - 1] + rowsTable
            if (!pagArr.includes(inclement) || !inclement == 50) {
                pagArr.push(inclement);
            }
        }
        pagArr.push(50);

        return (pagArr.sort(function (a, b) { return a - b }));
    };

    return (
        <div>
            <PageBase>
                <div style={style.operation_content_group}>
                    <Conteiner style={style.operation_content_justify_header}>
                        <ConteinerItem style={style.operation_content_header_search}>
                            <IconButton id="id_operation_content_search" style={{ display: handleDisplay(display) }} className='icon-btn-blue' size="large" onClick={onClick}>
                                <Tooltip title='Filtros / Pesquisa'><FilterAltIcon fontSize="inherit" /></Tooltip>
                            </IconButton>
                        </ConteinerItem>
                        <ConteinerItem style={style.operation_content_header}>
                            {printIcon && <IconButton className='icon-btn-blue' size="large" style={{ marginRight: '7px' }} onClick={onReportClick} >
                                <Tooltip title='Imprimir'>
                                    <PrintIcon fontSize="inherit" />
                                </Tooltip>
                            </IconButton>}
                            {onAddClick &&
                                <Button className='btn-blue' startIcon={<AddCircleOutlineIcon />} variant="contained" color="success" onClick={onAddClick}>
                                    {props.onAddClickTitle ? props.onAddClickTitle : 'Incluir'}
                                </Button>
                            }
                        </ConteinerItem>
                    </Conteiner>
                    <Conteiner>
                        <ConteinerItem style={style.operation_content_data_table} >
                            <DataTable
                                value={records}
                                paginator
                                sortField={sortField}
                                sortOrder={sortOrder}
                                responsiveLayout="scroll"
                                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                                currentPageReportTemplate={"Mostrando {first} a {last} de {totalRecords}"}
                                size="small"
                                rows={rowsTable}
                                emptyMessage={"Nenhum resultado encontrado"}
                                rowsPerPageOptions={calPerPage()}
                                scrollHeight={heigthDataTable}>

                                {
                                    columnList.map((item, index) => {
                                        if (item.body !== undefined)
                                            return <Column key={index} style={item.style} sortable={item.sortable} body={item.body} header={item.header} frozen={item.frozen} alignFrozen={item.alignFrozen} dataType={item.dataType} />
                                        else
                                            return <Column key={index} style={item.style} sortable={item.sortable} field={item.field} header={item.header} frozen={item.frozen} dataType={item.dataType} />
                                    })
                                }
                            </DataTable>

                        </ConteinerItem>
                    </Conteiner>
                </div>
            </PageBase>

            <Dialog
                open={deleteHandler.displayDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Confirmação
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Tem certeza que deseja excluir ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button style={{ marginRight: '5px' }} variant="outlined" component="span" onClick={() => deleteHandler.onCancelClick()}>
                        Cancelar
                    </Button>
                    <Button className='btn-red' variant="contained" startIcon={<DeleteIcon />} color="error" onClick={() => deleteHandler.onDeleteClick()} autoFocus>
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
    printIcon: PropTypes.bool
};

OperationTable.defaultProp = {
    onReportClick: () => { },
    onAddClick: () => { },
    deleteHandler: {
        displayDelete: false,
        onCancelClick: () => { },
        onDeleteClick: () => { }
    },
    records: [],
    columnList: [],
    heigthDataTable: 0,
    display: false,
    onClick: () => { },
    printIcon: true,
};


export default React.memo(OperationTable);