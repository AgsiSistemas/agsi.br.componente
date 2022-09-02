import React from 'react'
import PropTypes from "prop-types";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from 'date-fns/locale'
import { TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const style = {
  date_picker: {
    padding: '9px 9px 9px 15px !important'
  }
}
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            padding: '8px',
          }
        },
      },
    },
  },
});

const CustomDatePicker = ({ id, size, label, value, minDate, maxDate, dateFormat, onChange, placeHolder, helperText, disabled }) => {

  const [dateValidation, setDateValidation] = React.useState('')

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>

        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
          <DatePicker
            size={size}
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
                  // style: style.date_picker,
                }}
                id='custom-date-picker'
                sx={{ minWidth: '100px', marginTop: '5px' }}
                error={!value || dateValidation}
                helperText={!value || dateValidation ? helperText || "Data ou Hora Invalida!" : ""}
              />
            )}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

CustomDatePicker.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
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
  size: "",
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