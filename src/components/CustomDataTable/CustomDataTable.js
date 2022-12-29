import React, { useState } from 'react';
import PropTypes from "prop-types";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const style = {
    content_data_table: {
        overflowX: 'auto'
    },
    content_data_table_display_border: {
        overflowX: 'auto',
        border: 'solid 1px #ADADAD',
        borderRadius: '3px',
        padding: '8px'
    },
    p_datatable_row_expansion: {
        background: '#F5F5F5!important'
    },
    paginatorRight: {
        fontSize: '12px',
        color: '#69ABEC',
        fontWeight: 'normal'
    }
}
const CustomDataTable = (props) => {

    const { records, columnList, heigthDataTable, paginatorStep, displayBorder, paginator, displayExpander, onRowExpand, onRowCollapse, rowExpansionTemplate, paginatorButton, loading } = props

    const rowsTable = paginatorStep ? paginatorStep : 5
    const pagArr = [rowsTable];

    const [expandedRows, setExpandedRows] = useState(null);

    const paginatorRight = paginatorButton !== undefined
        ? <Button
            label={paginatorButton?.title !== undefined ? paginatorButton?.title : 'Carregar mais...'}
            style={style.paginatorRight}
            type="button"
            icon="pi pi-refresh"
            className="p-button-text"
            onClick={paginatorButton.onClick}
        />
        : <React.Fragment />


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
        <div style={displayBorder ? style.content_data_table_display_border : style.content_data_table} >
            <DataTable
                value={records}
                loading={loading}
                paginator={paginator}
                paginatorRight={paginatorRight}
                expandedRows={expandedRows}
                onRowToggle={(e) => setExpandedRows(e.data)}
                onRowExpand={onRowExpand}
                onRowCollapse={onRowCollapse}
                rowExpansionTemplate={rowExpansionTemplate}
                selectionMode="single"
                responsiveLayout="scroll"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate={"Mostrando {first} a {last} de {totalRecords}"}
                size="small"
                rows={rowsTable}
                emptyMessage={"Nenhum resultado encontrado"}
                rowsPerPageOptions={calPerPage()}
                scrollHeight={heigthDataTable}>
                {displayExpander &&
                    <Column expander style={{ width: '3em' }} />
                }
                {
                    columnList.map((item, index) => {
                        if (item.body !== undefined)
                            return <Column key={index} style={item.style} sortable={item.sortable} body={item.body} header={item.header} frozen={item.frozen} alignFrozen={item.alignFrozen} />
                        else
                            return <Column key={index} style={item.style} sortable={item.sortable} field={item.field} header={item.header} frozen={item.frozen} />
                    })
                }
            </DataTable>
        </div>
    )
}


CustomDataTable.propTypes = {
    records: PropTypes.arrayOf(PropTypes.object),
    columnList: PropTypes.arrayOf(PropTypes.object),
    heigthDataTable: PropTypes.number,
    displayBorder: PropTypes.bool,
    paginator: PropTypes.bool,
    displayExpander: PropTypes.bool,
    onRowExpand: PropTypes.func,
    onRowCollapse: PropTypes.func,
    paginatorButton: PropTypes.object
};

CustomDataTable.defaultProp = {
    records: [],
    columnList: [],
    heigthDataTable: 0,
    displayBorder: false,
    paginator: false,
    displayExpander: false,
    onRowExpand: () => { },
    onRowCollapse: () => { },
    paginatorButton: {
        title: "Carregar mais..",
        onClick: () => { }
    }
};


export default React.memo(CustomDataTable)