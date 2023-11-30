import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@mui/material'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { NumericFormat } from 'react-number-format';
import { currencyFormatter } from '../../../Utils/Utils.js'

const isNullValue = (value) => {
  return value === undefined || value === null || value === ''
}

const handleHelperText = (validation) => {
  return validation ? 'Campo obrigatório' : ''
}

const handleError = (value, validation) => {
  return isNullValue(value) && validation
}

const CustomTextField = ({
  label,
  id,
  value,
  type,
  disabled,
  onChange,
  validation,
  multiline,
  rows,
  inputProps,
  ...other
}) => {
  if (type && type == 'amount') {
    return (
      <NumericFormat
        id={id}
        size='small'
        label={label}
        style={{ marginTop: '8px', marginBottom: '4px' }}
        fullWidth
        disabled={disabled}
        InputLabelProps={{ shrink: true }}
        value={value}
        onChange={onChange}
        error={handleError(value, validation)}
        helperText={value ? '' : handleHelperText(validation)}
        inputProps={inputProps}
        prefix='R$ '
        thousandSeparator={true}
        format={currencyFormatter}
        customInput={TextField}
        {...other}
      />
    )
  }
  return (
    <React.Fragment>
      <TextField
        size='small'
        label={label}
        id={id}
        fullWidth
        multiline={multiline}
        rows={rows}
        disabled={disabled}
        margin='dense'
        variant='outlined'
        InputLabelProps={{ shrink: true }}
        value={value}
        onChange={onChange}
        error={handleError(value, validation)}
        helperText={value ? '' : handleHelperText(validation)}
        inputProps={inputProps}
        {...other}
      />
    </React.Fragment>
  )
}

CustomTextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  onChange: PropTypes.func,
  validation: PropTypes.bool,
  type: PropTypes.string,
}

CustomTextField.defaultProp = {
  label: '',
  id: '',
  value: {},
  multiline: false,
  rows: false,
  disabled: false,
  onChange: () => { },
  validation: false,
  type: ''
}

export default React.memo(CustomTextField)
