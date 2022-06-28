import * as React from 'react';
import styles from './operationModal.module.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const style={
  operation_modal_bottom_bar:{
    display: 'flex',
    flexDirection: 'row',
    width:'100%'
  },  
  operation_modal_bottom_bar_item:{
    flex: '1'    
  },  
  operation_modal_bottom_bar_item_right_align:{
    flex: '1',
    textAlign: 'right'
  },  
  right_align:{
    textAlign: 'right'
  }  
}

const handleLoading = (text, isLoading) =>{
  return isLoading ? <CircularProgress />: text 
}

const LoadingComponent = ({display}) =>{ 
  if(display!==undefined) 
  return handleLoading('', display)  
}

const OperationModal = (props) => {
        
    const [scroll, setScroll] = React.useState('paper');
    const [displayConfirm, setDisplayConfirm] = React.useState({display:false, confirmed: false});
    
    return (
      <div>        
        <Dialog
          maxWidth={true}
          open={props.displayModal}
          onClose={props.onClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">{  `${props.editMode? "Editar": "Incluir"} ${props.title || ''}` }</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <div>
              {props.children}
            </div>        
            </DialogContent>            
          <DialogActions>        
            <div style={style.operation_modal_bottom_bar}>
              <div style={style.operation_modal_bottom_bar_item}>
               <LoadingComponent display={props.displayLoadingSave}/>
              </div>
              <div style={style.operation_modal_bottom_bar_item_right_align}>
                <Button style={{marginRight:'8px'}} variant="contained" startIcon={<CancelOutlinedIcon />} onClick={props.onCancel}>Cancelar</Button>
                <Button 
                  color="success" 
                  variant="contained" 
                  endIcon={<SaveOutlinedIcon />} 
                  onClick={ ()=>setDisplayConfirm({display:true, confirmed: false})}
                >              
                  Salvar
                </Button>
              </div>
            </div>
          </DialogActions>
        </Dialog>
        
        <Dialog
            open={displayConfirm.display}
            onClose={()=>setDisplayConfirm({display:false, confirmed: false})}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
              Confirmação
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Confirma a gravação ?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={()=>setDisplayConfirm({display:false, confirmed: false})}>Cancelar</Button>
              <Button variant="contained" color="success" onClick={()=>{
                setDisplayConfirm({display:false, confirmed: true})
                props.onSave()                    
              }} autoFocus>
                Confirmar
              </Button>
            </DialogActions>
        </Dialog>        
      </div>
    );
  }


export default React.memo(OperationModal);

