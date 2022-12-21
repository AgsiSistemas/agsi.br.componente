import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from "prop-types";
// import { api } from '../../Services/Api/agsi-api'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, } from '@mui/material';
// import 'react-image-lightbox/style.css';
import { Image } from 'primereact/image';
// import './ArchivesContent.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: "80%",
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  overflow: 'hidden',
  textAlign: 'center',
  p: 4,
};
const styleButtonClose = {
  position: 'absolute',
  top: '2%',
  left: '95%',
  color: '#000',
}

const FilesContent = ({ filesList, editable, onDownload, onDelete, onUpload, acceptTypes }) => {

  const initialStateFileDelete = { confirm: '', file: '', fileId: '', openDialog: false }
  const [imgModal, setImgModal] = useState('')
  const [contentFileDelete, setContentFileDelete] = useState(initialStateFileDelete)
  const [openModal, setOpenModal] = useState(false)

  const acceptTypesProps = acceptTypes ? acceptTypes : ['jpg', 'jpeg', 'png', 'pdf']

  const handleCloseDialogDeleteFile = () => {
    setContentFileDelete({ confirm: '', file: '', fileId: '', openDialog: false })
  };

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);


  // Download Archives
  const handleGetDocumentApi = (id, nameArchive) => {
    onDownload({ id, nameArchive })

  }


  // View Archives
  const ShowArchives = (file) => {

    // Get Type archive of link
    function get_url_extension(url) {
      return url.split(/[#?]/)[0].split('.').pop().trim();
    }


    if (get_url_extension(file.fileLink) == 'pdf') {
      return (
        <Tooltip title='Visualizar PDF'>
          <IconButton >
            <VisibilityIcon onClick={() => showPdf(file.fileId, file.fileLink, file.fileName)} />
          </IconButton>
        </Tooltip>

      )
    }
    if (file.fileLink && acceptTypesProps.includes(get_url_extension(file.fileLink))) {
      return (
        <Tooltip title='Visualizar Imagem'>
          <IconButton >
            <VisibilityIcon onClick={() => showImg(file.fileId, file.fileLink, file.fileName)} />
          </IconButton>
        </Tooltip>
      )
    }
  }

  const showImg = (id, fileLink, fileName) => {
    if (fileLink) {
      setImgModal(fileLink)
      handleOpen()
    } else {
      downloadChange({ id, fileName, type: 'showimg' })
    }
  }

  const showPdf = (id, fileLink, fileName) => {
    if (fileLink) {
      window.open(fileLink, '_blank').focus();
    } else {

    }
  }

  // Delete Archives
  const deleteArchive = (id, fileName) => {
    setContentFileDelete({ confirm: '', file: fileName, fileId: id, openDialog: true })
  }
  useEffect(() => {
    if (contentFileDelete.confirm) {
      onDelete(contentFileDelete)
    }

  }, [contentFileDelete])


  // Add Archives
  const SendFiles = (e) => {
    onUpload(e)
  }

  return (
    <Fragment>
      <TableContainer className='conteiner-archive-component' component={Paper}>
        <Table className='' size="small" aria-label="a dense table">
          <TableHead className='table-header-archive-content'>
            <TableRow>
              <TableCell >Código</TableCell>
              <TableCell >Nome do Arquivo</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className='table-body'>
            {
              filesList && filesList.map((file) => (
                <TableRow key={file.fileId}>
                  <TableCell align="">{file.fileId}</TableCell>
                  <TableCell align="">{file.fileName}</TableCell>
                  <TableCell align="">
                    <Tooltip title='Baixar Arquivo'>
                      <IconButton >
                        <FileDownloadIcon onClick={() => handleGetDocumentApi(file.fileId, file.originName)} />
                      </IconButton>
                    </Tooltip>
                    {
                      ShowArchives(file)
                    }
                    {editable &&
                      <Tooltip title='Excluir Arquivo'>
                        <IconButton >
                          <DeleteIcon onClick={() => deleteArchive(file.fileId, file.fileName)} />
                        </IconButton>
                      </Tooltip>
                    }
                  </TableCell>
                </TableRow>
              )
              )
            }
          </TableBody>
        </Table>
        {editable &&
          <Fragment>
            <input
              accept=".pdf,image/*"
              style={{ display: 'none' }}
              id="raised-button-file"
              type="file"
              onChange={(e) => SendFiles(e)}
            />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span" sx={{ display: 'flex', color: '#6a6969' }}>
                Adicionar Novo Arquivo
              </Button>
            </label>
          </Fragment>
        }
      </TableContainer>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image src={imgModal} alt="Image" height='100%' />
          <Box sx={styleButtonClose}>
            <Tooltip title='Fechar'>
              <CloseIcon onClick={() => handleClose()} />
            </Tooltip>
          </Box>
        </Box>
      </Modal>
      <Dialog
        open={contentFileDelete.openDialog}
        onClose={handleCloseDialogDeleteFile}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tem Certeza que deseja Excluir: " + contentFileDelete.file}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            A exclusão será permanente!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogDeleteFile}>Cancelar</Button>
          <Button onClick={
            () => setContentFileDelete({ confirm: true, file: contentFileDelete.file, fileId: contentFileDelete.fileId, openDialog: false })
          } autoFocus>
            Confirmar Exclusão
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>)
}

FilesContent.propTypes = {
  filesList: PropTypes.object,
  filesList: PropTypes.shape({
    fileId: PropTypes.string,
    fileName: PropTypes.string,
    fileLink: PropTypes.string,
  }),
  editable: PropTypes.bool,

};

FilesContent.defaultProp = {
  filesList: [],
  editable: false,
};


export default FilesContent