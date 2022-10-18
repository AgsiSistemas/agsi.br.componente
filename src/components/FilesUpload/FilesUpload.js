import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import TooltipMui from "@mui/material/Tooltip";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import './FilesUpload.scss'

const FilesUpload = ({ value, onChange, disabledChoose, maxFileSizeMb, typeAcceptFile }) => {

  const maxSizeUpload = maxFileSizeMb ? maxFileSizeMb * 1000000 : 1 * 1000000
  const [totalSize, setTotalSize] = useState(0);
  const toast = useRef(null);
  const fileUploadRef = useRef(null);

  useEffect(() => {
    let _totalSize = totalSize;
    value.map((file) => {
      _totalSize += file.size;
      setTotalSize(_totalSize);
    })
  }, [])

  function formatBytes(bytes, decimals) {
    if (bytes == 0) return '0 Bytes';
    var k = 1000,
      dm = decimals || 2,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  const onTemplateSelect = (e) => {

    const filesUpload = Array.from(e.files)

    let _totalSize = totalSize;
    let list = [...value]

    // Check Total select files not overtake maxSizeUpload
    let totalSizeToAdd = 0
    filesUpload.map(file => (totalSizeToAdd += file.size))
    if (totalSizeToAdd > maxSizeUpload) {
      toast.current.show({ severity: 'error', summary: 'Atenção:', detail: `Os Arquivos Selecionados Excedem o Tamanho Total de Arquivos. (${formatBytes(maxSizeUpload)})` });
      return

    }

    filesUpload.forEach((file) => {

      // Check sizeTotal before add one item
      if (totalSize + file.size > maxSizeUpload) {
        toast.current.show({ severity: 'error', summary: 'Atenção:', detail: `Os Arquivos Selecionados Excedem o Tamanho Total de Arquivos. (${formatBytes(maxSizeUpload)})` });
        return
      }

      function isExistFileUpload(listContent) {
        return listContent.name === file.name;
      }

      if (!list.find(isExistFileUpload)) {
        _totalSize += file.size;
        console.log(file.size);
        list.push(file)
        onChange(list)
      } else {
        toast.current.show({ severity: 'warn', summary: 'Aviso:', detail: `${file.name} - Arquivo já Adicionado!` });
      }

    });

    setTotalSize(_totalSize);

  };

  const onTemplateUpload = (e) => {
    let _totalSize = 0;
    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded"
    });
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    let list = value.filter(x => x.name !== file.name)
    onChange(list)

    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const valuePercent = totalSize / maxSizeUpload * 100
    const formatedValue =
      totalSize > 0
        ? formatBytes(totalSize)
        : "0 B";

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center"
        }}
      >
        {!disabledChoose && chooseButton}
        <ProgressBar
          value={valuePercent}
          displayValueTemplate={() => `${formatedValue} / ${formatBytes(maxSizeUpload)}`}
          style={{ width: "300px", height: "20px", marginLeft: "auto" }}
        ></ProgressBar>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: false,
    className: "custom-choose-btn p-button-success p-button-rounded p-button-outlined"
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined"
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined"
  };

  const showPdf = (file) => {
    let blob = new Blob([file], { type: 'application/pdf' })
    let link = URL.createObjectURL(blob)
    window.open(link, '_blank');
  }

  return (
    <div>
      <Toast ref={toast} style={{ marginTop: '40px' }}></Toast>
      <Tooltip target=".custom-choose-btn" content="Selecionar" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

      <div className="card">
        <FileUpload
          ref={fileUploadRef}
          name="FilesUpload"
          multiple
          accept={typeAcceptFile ? typeAcceptFile : ".pdf,image/*"}
          maxFileSize={maxSizeUpload}
          onUpload={onTemplateUpload}
          onSelect={onTemplateSelect}
          onError={onTemplateClear}
          onClear={onTemplateClear}
          headerTemplate={headerTemplate}
          chooseOptions={chooseOptions}
          uploadOptions={uploadOptions}
          cancelOptions={cancelOptions}
          chooseLabel="Adicionar Arquivos..."
        />
        <div className="afterInput">
          {value && value.map((file) => {
            return (
              <div className="item-row">
                <div className="item-img-fileName" style={{ width: "40%" }}>
                  {file.type == 'application/pdf' &&
                    <TooltipMui title='Visualizar PDF'>
                      <PictureAsPdfIcon onClick={() => { showPdf(file) }} className="dropzone-pdf-icon" fontSize="large" />
                    </TooltipMui>
                  }
                  {file.type !== 'application/pdf' &&

                    <img
                      alt={file.name}
                      role="presentation"
                      src={file.objectURL}
                      width={100}
                    />
                  }
                  <span className="file-name">
                    {file.name}
                    <br />
                    <small>{new Date().toLocaleDateString()}</small>
                  </span>
                </div>
                <Tag
                  value={formatBytes(file.size)}
                  severity="warning"
                  className="px-3 py-2"
                />
                <Button
                  type="button"
                  icon="pi pi-times"
                  className="p-button-outlined p-button-rounded p-button-danger ml-auto"
                  onClick={() => {
                    setTotalSize(totalSize - file.size);
                    let list = value.filter(x => x.name !== file.name)
                    onChange(list)
                  }}
                />
              </div>
            )
          })
          }
        </div>
      </div>
    </div >
  );
};

FilesUpload.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabledChoose: PropTypes.bool,
  maxFileSizeMb: PropTypes.number,
  typeAcceptFile: PropTypes.string
};

FilesUpload.defaultProp = {
  value: [],
  onChange: () => { },
  disabledChoose: false,
  maxFileSizeMb: 1,
  typeAcceptFile: '.pdf,image/*',
};

export default React.memo(FilesUpload);