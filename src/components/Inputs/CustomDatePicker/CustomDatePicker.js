import React from 'react'
import PropTypes from "prop-types";
import './CustomDatePicker.scss'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { ptBR } from 'date-fns/locale'
import { TextField } from '@mui/material';

const CustomDatePicker = ({ label, value, minDate, validation, maxDate, dateFormat, onChange, placeHolder, helperText, disabled, noAlertNoneValue, ...other }) => {

  const [dateValidation, setDateValidation] = React.useState('')

  const handleHelperText = () => {
    if (!value && !noAlertNoneValue) return "Campo obrigatório!"
    if (dateValidation && helperText) return "Data ou Hora Invalida!"
    if (!value && validation) return "Campo obrigatório!"
    return ""
  }
  const handleError = () => {
    if (!value && !noAlertNoneValue) return true
    if (!value && validation) return true

    return false
  }

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ptBR'}>
        <DatePicker
          label={label}
          value={value}
          disabled={disabled}
          minDate={minDate ? new Date(minDate) : undefined}
          maxDate={maxDate ? new Date(maxDate) : undefined}
          dateFormat={dateFormat || "DD-MM-YYYY"}
          onError={(e) => setDateValidation(e)}
          onChange={onChange}
          renderInput={params => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder: placeHolder || "dd/mm/aaaa",
              }}
              size='small'
              sx={{ marginTop: '8px' }}
              id={'custom-date-picker'}
              error={handleError()}
              helperText={handleHelperText()}
              onKeyDown={(e) => e.preventDefault()}
              InputLabelProps={{ shrink: true }}
              {...other}
            />
          )}
        />
      </LocalizationProvider>
    </React.Fragment>
  )
}

CustomDatePicker.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  minDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  maxDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  noAlertNoneValue: PropTypes.bool,
};

CustomDatePicker.defaultProp = {
  id: "",
  label: "",
  value: {},
  minDate: undefined,
  maxDate: undefined,
  dateFormat: "DD-MM-YYYY",
  onChange: () => { },
  placeHolder: "DD/MM/AAAA",
  helperText: "Data ou Hora Invalida!",
  disabled: false,
  noAlertNoneValue: false
};

export default React.memo(CustomDatePicker)