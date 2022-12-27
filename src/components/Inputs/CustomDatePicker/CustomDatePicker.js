import React from 'react'
import PropTypes from "prop-types";
import './CustomDatePicker.scss'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from 'date-fns/locale'
import { TextField } from '@mui/material';

const CustomDatePicker = ({ label, value, minDate, maxDate, dateFormat, onChange, placeHolder, helperText, disabled, noAlertNoneValue, ...other }) => {

  const [dateValidation, setDateValidation] = React.useState('')

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
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
              error={(!value && !noAlertNoneValue) || dateValidation}
              helperText={(!value && !noAlertNoneValue) || dateValidation ? helperText || "Data ou Hora Invalida!" : ""}
              // onKeyDown={(e) => e.preventDefault()}
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