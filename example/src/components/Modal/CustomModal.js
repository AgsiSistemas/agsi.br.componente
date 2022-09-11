import * as React from 'react';
import  PropTypes from "prop-types";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { Conteiner, ConteinerItem } from '../Conteiner/Conteiner';

const CustomModal = (props) => {        
    const [scroll, setScroll] = React.useState('paper');
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
          <DialogTitle id="scroll-dialog-title-modal">{ props.title }</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <div>
              {props.children}
            </div>        
            </DialogContent>     
            <DialogActions>
              <Conteiner>
                <ConteinerItem>
                  <Button autoFocus onClick={props.onCloseDialog}>
                    Fechar
                  </Button>
                </ConteinerItem>
                {props.buttonAdditional !==null && props.buttonAdditional}
              </Conteiner>
            </DialogActions>                 
        </Dialog>
      </div>
    );
  }

CustomModal.propTypes = {
  displayModal: PropTypes.string,
  onClose: PropTypes.string,
  onCloseDialog: PropTypes.func,
  title: PropTypes.bool,
  buttonAdditional: PropTypes.object
};
  
CustomModal.defaultProp = {
  displayModal: false,
  onClose: ()=>{},
  onCloseDialog: ()=>{},
  title: "",
  buttonAdditional: null
};


export default React.memo(CustomModal);

