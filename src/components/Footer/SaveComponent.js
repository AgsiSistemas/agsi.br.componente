import React from 'react';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import PropTypes from "prop-types";
import { Conteiner, ConteinerItem } from '../Conteiner/Conteiner';
import CheckIcon from '@mui/icons-material/Check';

const style = {
    save_component: {
        textAlign: 'end',
        marginTop: '15px'
    },
    save_component_item: {
        marginRight: '5px'
    }
}

export const validationModel = {
    error: false,
    helperText: ""
}

const MessageConfirmation = ({ display, onClose, onCancelClick, onConfirmClick }) => {

    return (
        <Dialog
            open={display}
            onClose={onClose}
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
                <Button variant="outlined" style={style.save_component_item} onClick={onCancelClick} startIcon={<CancelOutlinedIcon />} >Cancelar</Button>
                <Button variant="contained" className='btn-green' color="success" onClick={onConfirmClick} endIcon={<CheckIcon />} autoFocus>
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    )
}


const SaveComponent = (props) => {

    const [displayConfirm, setDisplayConfirm] = React.useState({ display: false, confirmed: false });
    const [loading, setLoading] = React.useState(false);

    return (
        <div>
            <Conteiner style={style.save_component}>
                <ConteinerItem>
                    <Button
                        style={style.save_component_item}
                        variant="outlined"
                        startIcon={<CancelOutlinedIcon />}
                        onClick={props.onCancelClick}
                    >
                        Cancelar
                    </Button>
                    <LoadingButton
                        loading={loading}
                        loadingPosition="end"
                        color="success"
                        variant="contained"
                        className='btn-green'
                        endIcon={<SaveOutlinedIcon />}
                        onClick={() => {
                            if (loading) return
                            setDisplayConfirm({ display: true, confirmed: false })
                        }
                        }
                    >
                        Salvar
                    </LoadingButton>
                </ConteinerItem>
            </Conteiner>
            <MessageConfirmation
                display={displayConfirm.display}
                onClose={() => setDisplayConfirm({ display: false, confirmed: false })}
                onCancelClick={() => setDisplayConfirm({ display: false, confirmed: false })}
                onConfirmClick={async () => {
                    setDisplayConfirm({ display: false, confirmed: true })
                    setLoading(true)
                    await props.onSaveClick()
                    setLoading(false)
                }}

            />
        </div>
    )
}


SaveComponent.propTypes = {
    onCancelClick: PropTypes.func,
    onSaveClick: PropTypes.func
};

SaveComponent.defaultProp = {
    onCancelClick: () => { },
    onSaveClick: () => { }
};


export default React.memo(SaveComponent);