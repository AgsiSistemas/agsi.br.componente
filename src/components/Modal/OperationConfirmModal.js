import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import DownloadDoneRoundedIcon from '@mui/icons-material/DownloadDoneRounded';

const OperationConfirmModal = ({ open, onClose, title, onCancel, onConfirm, mode, children }) => {

  const handleDefaultConfirm = { message: 'Deseja Continuar com essa Operação ?', titleButton: 'Confirmar' }
  const handleDelete = { message: 'Tem certeza que deseja excluir ?', titleButton: 'Excluir' }
  const handleEdit = { message: 'Tem certeza que deseja continuar com a alteração ?', titleButton: 'Salvar' }

  const ButtonMode = () => {
    if (mode == 'edit') {
      return (
        <Button
          className='btn-green'
          variant='contained'
          startIcon={<SaveIcon />}
          color='success'
          onClick={() => onConfirm()}
          autoFocus
        >
          {handleEdit.titleButton}
        </Button>
      )
    }
    if (mode == 'delete') {
      return (
        <Button
          className='btn-red'
          variant='contained'
          startIcon={<DeleteIcon />}
          color='error'
          onClick={() => onConfirm()}
          autoFocus
        >
          {handleDelete.titleButton}
        </Button>
      )
    }
    if (!mode) {
      return (
        <Button
          className='btn-success'
          variant='contained'
          startIcon={<DownloadDoneRoundedIcon />}
          color='success'
          onClick={() => onConfirm()}
          autoFocus
        >
          {handleDefaultConfirm.titleButton}
        </Button>
      )
    }
  }

  const descriptionMode = () => {
    switch (mode) {
      case 'edit':
        return handleEdit.message
        break;
      case 'delete':
        return handleDelete.message
        break;
      default:
        return handleDefaultConfirm.message
    }
  }

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title ? title : 'Confirmação'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {descriptionMode()}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{ marginRight: '5px' }}
            variant='outlined'
            component='span'
            onClick={() => {
              if (onCancel)
                onCancel()
              onClose()

            }}
          >
            Cancelar
          </Button>
          <ButtonMode />
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default React.memo(OperationConfirmModal)
