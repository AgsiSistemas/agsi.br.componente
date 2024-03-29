import CustomDatePicker from '../CustomDatePicker/CustomDatePicker.js'
import CustomTextField from '../CustomTextField/CustomTextField.js'
import CustomInputSelect from '../CustomInputSelect/CustomInputSelect.js'
import { Button, ButtonGroup, Popover, Tooltip } from "@mui/material"
import React, { Fragment, useState } from "react"
import './CustomLabelField.scss'

const CustomLabelField = ({ label, type, value, onChange, labelValue, onChangeLabelValue, optionsLabel, noAlertNoneValue, maxDate, options, ...other }) => {

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!labelValue && optionsLabel) {
    onChangeLabelValue(optionsLabel[0])
  }

  if (type == 'select') {
    return (
      <div className='custom-label-field-content-input'>
        <CustomInputSelect
          label={
            <Tooltip title='Alterar' followCursor={true}>
              <div className='custom-field-dinamic-label-content-label link-style' aria-describedby={id} onClick={handleClick}>
                {label}
                <div className="custom-field-dinamic-label-value">{` ( ${labelValue} )`}</div>
                <i className="pi pi-pencil release-exams-date-type-label" />
              </div>
            </Tooltip>
          }
          value={value}
          onChange={onChange}
          options={options}
          {...other}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            {optionsLabel?.map(item => {
              return (
                <Button onClick={() => {
                  onChangeLabelValue(item)
                  handleClose()
                }}>{item}</Button>
              )
            })}
          </ButtonGroup>
        </Popover>
      </div>
    )
  }

  if (type == 'date') {
    return (
      <div className='custom-label-field-content-input'>

        <CustomDatePicker
          size="small"
          label={
            <Tooltip title='Alterar' followCursor={true}>
              <div className='custom-field-dinamic-label-content-label link-style' aria-describedby={id} onClick={handleClick}>
                {label}
                <div className="custom-field-dinamic-label-value">{` ( ${labelValue} )`}</div>
                <i className="pi pi-pencil release-exams-date-type-label" />
              </div>
            </Tooltip>
          }
          maxDate={maxDate}
          onKeyDown={(e) => e.preventDefault()}
          value={value}
          onChange={onChange}
          noAlertNoneValue={noAlertNoneValue}
          {...other}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            {optionsLabel?.map(item => {
              return (
                <Button onClick={() => {
                  onChangeLabelValue(item)
                  handleClose()
                }}>{item}</Button>
              )
            })}
          </ButtonGroup>
        </Popover>
      </div >
    )

  }

  return (
    <div className='custom-label-field-content-input'>
      <CustomTextField
        label={
          <Tooltip title='Alterar' followCursor={true}>
            <div className='custom-field-dinamic-label-content-label link-style' aria-describedby={id} onClick={handleClick}>
              {label}
              <div className="custom-field-dinamic-label-value">{` ( ${labelValue} )`}</div>
              <i className="pi pi-pencil release-exams-date-type-label" />
            </div>
          </Tooltip>
        }
        value={value}
        onChange={onChange}
        {...other}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {optionsLabel?.map(item => {
            return (
              <Button onClick={() => {
                onChangeLabelValue(item)
                handleClose()
              }}>{item}</Button>
            )
          })}
        </ButtonGroup>
      </Popover>
    </div>
  )

}

export default CustomLabelField