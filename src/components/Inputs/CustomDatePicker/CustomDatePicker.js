import React from 'react'
import PropTypes from "prop-types";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from 'date-fns/locale'
import { TextField } from '@mui/material';

const CustomDatePicker = ({ id, label, value, minDate, maxDate, dateFormat, onChange, placeHolder, helperText, disabled, ...other }) => {

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
          dateFormat={dateFormat || "MM-DD-YYYY"}
          onError={(e) => setDateValidation(e)}
          onChange={onChange}
          renderInput={params => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder: placeHolder || "DD/MM/AAAA",
              }}
              size='small'
              id='custom-date-picker'
              sx={{ minWidth: '100px', marginTop: '5px' }}
              error={!value || dateValidation}
              helperText={!value || dateValidation ? helperText || "Data ou Hora Invalida!" : ""}
              onKeyDown={(e) => e.preventDefault()}
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
  value: PropTypes.object,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
};

CustomDatePicker.defaultProp = {
  id: "",
  label: "",
  value: {},
  minDate: undefined,
  maxDate: undefined,
  dateFormat: "MM-DD-YYYY",
  onChange: () => { },
  placeHolder: "DD/MM/AAAA",
  helperText: "Data ou Hora Invalida!",
  disabled: false
};

export default React.memo(CustomDatePicker)