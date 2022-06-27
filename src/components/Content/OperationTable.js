import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
import PageBase from  '../PageBase/PageBase';
import styles from './operationTable.module.css';

import CustomDataTable from '../CustomDataTable/CustomDataTable';

const handleDisplay = (display) =>{
    if(display===undefined)        
        return 'none'  
    else{
        return display? 'inline-flex': 'none'
    }
}
const OperationTable = (props) =>{

    const { onReportClick, onAddClick, deleteHandler, records, columnList, display, onClick } = props
     
    return(     
        <>      
            <PageBase>
                <div className={styles.operation_content_group}>
                    <Conteiner> 
                        <ConteinerItem className={`${styles.operation_content_header} ${styles.operation_content_header_search}`}>
                            <IconButton id="id_operation_content_search" style={{display: handleDisplay(display)}} className='icon-btn-blue' size="large" onClick={ onClick }>
                                <FilterAltIcon fontSize="inherit" />
                            </IconButton>
                        </ConteinerItem>
                        <ConteinerItem  className={`${styles.operation_content_header}`}>
                            <IconButton className='icon-btn-blue' size="large"style={{marginRight:'7px'}} onClick={ onReportClick } >
                                <PrintIcon fontSize="inherit" />
                            </IconButton>                            
                            <Button className='btn-blue' startIcon={<AddCircleOutlineIcon />} variant="contained" color="success" onClick={onAddClick}>
                                Incluir
                            </Button>
                        </ConteinerItem>
                    </Conteiner>                
                    <Conteiner>
                        <ConteinerItem className={`${styles.operation_content_data_table}`}>                        
                            <CustomDataTable
                                records={records}
                                columnList={columnList}/>                    
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
                    <Button style={{marginRight:'5px'}} variant="outlined" component="span" onClick={()=> deleteHandler.onCancelClick()}>
                        Cancelar
                    </Button>
                    <Button className='btn-red' variant="contained" startIcon={<DeleteIcon />} color="error" onClick={()=> deleteHandler.onDeleteClick()} autoFocus>
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>                    
        </> 
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
    records:  PropTypes.arrayOf(PropTypes.object),
    columnList: PropTypes.arrayOf(PropTypes.object),
    heigthDataTable: PropTypes.number,
    display: PropTypes.bool,
    onClick: PropTypes.func
};
  
OperationTable.defaultProp = {
    onReportClick: ()=> {},
    onAddClick: ()=> {},
    deleteHandler: {
        displayDelete: false,
        onCancelClick: ()=>{},
        onDeleteClick: ()=>{}
    },
    records:  [],
    columnList: [],
    heigthDataTable: 0,
    display: false,
    onClick: ()=> {}
};


export default React.memo(OperationTable);