import React, { Fragment, useEffect, useState } from "react"
import PropTypes from "prop-types";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, LinearProgress, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, } from '@mui/material';
import './FilesContentApi.scss'

import { Image } from 'primereact/image';

const FilesContentApi = ({ acceptFileTypes, fileList, editable, api, maxFileSizeMb, solicitationId, onChange }) => {

  const fileTypes = acceptFileTypes ? acceptFileTypes : ['jpg', 'jpeg', 'png', 'pdf']
  const maxSizeUpload = maxFileSizeMb ? maxFileSizeMb * 1000000 : 10 * 1000000
  const [openModal, setOpenModal] = useState(false)
  const solicitation = fileList && fileList.length !== 0 ? fileList[0]?.solicitationId : solicitationId
  // const solicitation = fileList && fileList.length !== 0 ? fileList[0]?.solicitationId : solicitationId
  const [imgModal, setImgModal] = useState('')
  const initialStateFileDelete = { confirm: '', file: '', fileId: '', openDialog: false }
  const [contentFileDelete, setContentFileDelete] = useState(initialStateFileDelete)
  const [list, setList] = useState(fileList ? fileList : [])
  const [loadChange, setLoadChange] = useState(false)


  useEffect(() => {
    if (onChange) onChange(list)

  }, [list])

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleCloseDialogDeleteFile = () => {
    setContentFileDelete({ confirm: '', file: '', fileId: '', openDialog: false })
  };

  // View Archives
  const ShowArchives = (file) => {

    // Get Type archive of link
    function get_url_extension(url) {
      if (url) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
      } else {
        return ''
      }
    }


    if (get_url_extension(file.fileName) == 'pdf') {
      return (
        <Tooltip title='Visualizar PDF'>
          <IconButton >
            <VisibilityIcon onClick={() => showPdf(file.fileId, file.fileLink, file.fileName)} />
          </IconButton>
        </Tooltip>

      )
    }
    if (fileTypes.includes(get_url_extension(file.fileName))) {
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
    if (!api) {
      alert('Sem Rotas de API')
      return
    }
    setLoadChange(true)
    api.http.get(`${api.addressApiFile(id)}`, { responseType: 'blob' })
      .then(function (response) {
        let blob = new Blob([response.data])
        let link = URL.createObjectURL(blob)
        setImgModal(link)
        handleOpen()
        setLoadChange(false)
      })
  }
  const showPdf = (id, nameArchive) => {
    if (!api) {
      alert('Sem Rotas de API')
      return
    }
    setLoadChange(true)
    api.http.get(`${api.addressApiFile(id)}`, { responseType: 'blob' })
      .then(function (response) {
        let blob = new Blob([response.data], { type: 'application/pdf' })
        let link = URL.createObjectURL(blob)
        setLoadChange(false)
        window.open(link, '_blank');
      }).catch(
        e => {
          alert('Erro ao Solicitar Arquivo!')
          setLoadChange(false)
        })
  }

  // GET FILE
  const handleGetDocumentApi = (id, nameArchive) => {
    if (!api) {
      alert('Sem Rotas de API')
      return
    }
    setLoadChange(true)
    api.http.get(`${api.addressApiFile(id)}`, { responseType: 'blob' })
      .then(function (response) {
        let blob = new Blob([response.data])
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = nameArchive
        link.click()
        setLoadChange(false)
      }).catch(error => {
        alert('Erro ao solicitar arquivo!')
        setLoadChange(false)
      })
  }

  // POST Files
  const SendFiles = (e) => {
    if (!api) {
      alert('Sem Rotas de API')
      return
    }
    if (e.target.files[0].size > maxSizeUpload) {
      alert(`O Arquivo é muito grande para o destino. Tamanho Maximo: ${maxFileSizeMb ? maxFileSizeMb : '10'} MB`)
      return
    }
    var fileToSend = e.target.files[0]
    const formData = new FormData()

    formData.append('file', fileToSend)
    setLoadChange(true)
    const headers = {
      "Content-Type": "multipart/form-data"
    }
    api.http.post(`${api.addressApiFile('', '', solicitation)}`,
      formData,
      { headers: headers })
      .then(function (response) {
        if (response.data.status == 201) {

          const addRowFile = {
            'fileId': response.data.data,
            'fileName': fileToSend.name,
            'originName': fileToSend.name,
          }

          setList(current => [...current, addRowFile])
          setLoadChange(false)

        } else {
          alert('Erro ao Enviar Arquivo.')
          setLoadChange(false)
        }
      }).catch(e => {
        alert('Erro ao Enviar enviar Arquivo!')
        setLoadChange(false)
      })
  }

  // DELETE Files
  const deleteArchive = (id, fileName) => {
    setContentFileDelete({ confirm: '', file: fileName, fileId: id, openDialog: true })

  }
  useEffect(() => {
    if (contentFileDelete.confirm) {
      if (!api) {
        alert('Sem Rotas de API')
        setLoadChange(false)
        return
      }
      api.http.delete(`${api.addressApiFile('', contentFileDelete.fileId, solicitation)}`, { responseType: 'blob' })
        .then(function (response) {
          setContentFileDelete(initialStateFileDelete)
          setList(current =>
            current.filter(listFiles => {
              return listFiles.fileId !== contentFileDelete.fileId;
            }),
          );
          setLoadChange(false)
        }).catch(error => {
          alert('Erro ao Excluir Arquivo.')
          setLoadChange(false)
        })
    }

  }, [contentFileDelete])

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
              list && list.map((file, index) => (
                <TableRow key={file.fileId}>
                  <TableCell align="">{file.fileId}</TableCell>
                  <TableCell align="">{file.originName}</TableCell>
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
                          <DeleteIcon onClick={() => {
                            deleteArchive(file.fileId, file.fileName)
                          }} />
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
        {loadChange &&
          <LinearProgress />
        }
        {editable &&
          <Fragment>
            <input
              accept=".pdf,image/*"
              style={{ display: 'none' }}
              id="raised-button-file"
              type="file"
              onChange={(e) => {
                SendFiles(e)

              }
              }
            />
            <label htmlFor="raised-button-file">
              <Tooltip title={`Arquivos até ${maxFileSizeMb ? maxFileSizeMb : 10} mb`}>
                <Button variant="raised" component="span" sx={{ display: 'flex', color: '#6a6969' }}>
                  Adicionar Novo Arquivo
                </Button>
              </Tooltip>
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
        <Box className='img-content-show'>
          <Image src={imgModal} alt="Image" height='100%' />
          <Box className='dialog-button-close'>
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
            () => {
              setContentFileDelete({ confirm: true, file: contentFileDelete.file, fileId: contentFileDelete.fileId, openDialog: false })
              setLoadChange(true)
            }
          } autoFocus>
            Confirmar Exclusão
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>)

}

FilesContentApi.propTypes = {
  filesList: PropTypes.object,
  filesList: PropTypes.shape({
    fileId: PropTypes.string,
    fileName: PropTypes.string,
    fileLink: PropTypes.string,
  }),
  api: PropTypes.object,
  api: PropTypes.shape({
    http: PropTypes.string,
    addressApiFile: PropTypes.string,
  }),
  editable: PropTypes.bool,
  maxFileSizeMb: PropTypes.string,
  acceptFileTypes: PropTypes.string,
  solicitationId: PropTypes.string,

};

FilesContentApi.defaultProp = {
  filesList: [],
  editable: false,
  solicitationId: '',
  maxFileSizeMb: 10,
  acceptFileTypes: ['jpg', 'jpeg', 'png', 'pdf'],
  api: {
    http: 'api.http',
    addressApiFile: (e) => api.http.files(e)
  }
};

export default FilesContentApi