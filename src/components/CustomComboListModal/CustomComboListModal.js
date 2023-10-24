import React, { useState } from 'react'
import { Conteiner, ConteinerItem } from '../Conteiner/Conteiner.js'
import CustomDataTable from '../CustomDataTable/CustomDataTable.js'
import { IconButton, Tooltip, Typography } from "@mui/material"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Box } from "@mui/system"
import SaveAsIcon from '@mui/icons-material/SaveAs';
import './CustomComboListModal.scss'
import CustomSimpleModal from '../Modal/CustomSimpleModal/CustomSimpleModal.js';

const CustomComboListModal = ({ title, options, columnNameTable, getRecordsTable, childrenModal, confirmClickModal, disabled }) => {

  let columnListTable = columnNameTable || []

  const [customInputValue, setCustomInputValue] = useState(null)
  const [customTableList, setCustomTableList] = useState([])
  const [modalIncludeEdit, setModalIncludeEdit] = useState(false)

  getRecordsTable && getRecordsTable(customTableList)

  const handleAddTableList = () => {

    if (!customInputValue) return
    if (customTableList.find(x => x.id == customInputValue.id)) {
      setCustomInputValue(null)
      return
    }

    setCustomTableList((current) => [...current, customInputValue])
    setCustomInputValue(null)

  }

  const handleAddAllTableList = () => {
    setCustomTableList([])
    let AllList = options
    setCustomTableList(AllList)
    setCustomInputValue(null)
  }

  const handleRemoveTableList = (event, index) => {

    setCustomTableList((current) => {
      const newArr = [...current].filter(x => x.id !== event.id)
      return newArr
    })
  }

  const columnAction = {
    style: { textAlign: 'right', width: '100px' },
    sortable: false,
    frozen: true,
    alignFrozen: "left",
    body: (e, index) => {
      return (
        <Tooltip title='Remover da Lista'>
          <IconButton aria-label="Delete">
            <DeleteIcon onClick={() => handleRemoveTableList(e, index.rowIndex)} />
          </IconButton>
        </Tooltip>
      )
    }
  }

  const handleClearTable = () => {
    setCustomTableList([])
    setCustomInputValue(null)
  }

  return (
    <ConteinerItem className='custom-input-select-combo-list-conteiner'>

      <Conteiner>
        <ConteinerItem>
          <Typography className='title-table-custom'>{title}</Typography>
          <CustomDataTable
            records={customTableList || []}
            columnList={[...columnListTable, columnAction]}
          />
        </ConteinerItem>
        <ConteinerItem className='flex-none custom-combo-list-modal-buttons-content'>
          <Tooltip title='Incluir'>
            <IconButton
              onClick={() => setModalIncludeEdit(true)}
              disabled={disabled}
            >
              <AddCircleOutlineRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Pesquisar'>
            <IconButton
              disabled={disabled}
            >
              <ManageSearchIcon />
            </IconButton>
          </Tooltip>
        </ConteinerItem>
      </Conteiner>
      <CustomSimpleModal
        open={modalIncludeEdit}
        onClose={() => setModalIncludeEdit(false)}
        title={`Inclusão / Edição - ${title}`}
        footer
        confirmTitle='Gravar'
        confirmClick={confirmClickModal}
        confirmClassName='btn-blue'
        confirmIcon={<SaveAsIcon />}
        exitClick={() => setModalIncludeEdit(false)}
        exitTitle='Sair'
        exitClassName='btn-blue'
      >
        {childrenModal && childrenModal}
      </CustomSimpleModal>
    </ConteinerItem>
  )
}
export default CustomComboListModal