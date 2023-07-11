import React, { useState } from 'react'
import { ConteinerItem } from '../Conteiner/Conteiner.js'
import CustomDataTable from '../CustomDataTable/CustomDataTable.js'
import CustomInputSelect from '../Inputs/CustomInputSelect/CustomInputSelect.js'
import { IconButton, Tooltip } from "@mui/material"
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { Box } from "@mui/system"
import './CustomInputSelectComboList.scss'

const CustomInputSelectComboList = ({ titleInput, options, columnListTable, getRecordsTable, disabled }) => {

  const [customInputValue, setCustomInputValue] = useState(null)
  const [inputCustomInputValue, setInputCustomInputValue] = useState(null)
  const [customTableList, setCustomTableList] = useState([])

  getRecordsTable(customTableList)

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
      {/* <Typography>Empresa</Typography> */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ConteinerItem className='custom-input-select-combo-list-add-input'>
          <CustomInputSelect
            title={titleInput}
            options={options || []}
            disabled={disabled}
            value={customInputValue}
            onChange={(event, newValue) => setCustomInputValue(newValue)}
            inputValue={inputCustomInputValue}
            onInputChange={(event, newValue) => setInputCustomInputValue(newValue)}
          />
        </ConteinerItem>
        <ConteinerItem>
          <Tooltip title={`Adicionar ${titleInput}`}>
            <IconButton
              onClick={() => handleAddTableList()}
              disabled={disabled}
            >
              <AddCircleOutlineRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={`Adicionar Todos(as) ${titleInput}(s)`}>
            <IconButton
              onClick={() => handleAddAllTableList()}
              disabled={disabled}
            >
              <PostAddRoundedIcon />
            </IconButton>
          </Tooltip>
          {customTableList.length > 1 &&
            <Tooltip title={`Limpar Tudo`}>
              <IconButton
                onClick={() => handleClearTable()}
                disabled={disabled}
              >
                <DeleteSweepIcon />
              </IconButton>
            </Tooltip>
          }
        </ConteinerItem>

      </Box>
      <Box className={disabled && 'custom-input-select-combo-list-disabled'} sx={{ maxHeight: '200px', overflow: 'scroll' }}>
        <CustomDataTable
          records={customTableList || []}
          columnList={[...columnListTable, columnAction] || []}
        />
      </Box>
    </ConteinerItem>
  )
}
export default CustomInputSelectComboList