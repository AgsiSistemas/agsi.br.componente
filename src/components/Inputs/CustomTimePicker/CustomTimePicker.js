import React from 'react'
import PropTypes from "prop-types";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ptBR } from 'date-fns/locale'
import { TextField } from '@mui/material';

const style = {
  date_picker: {
    padding: '9px 9px 9px 15px !important'
  }
}

const CustomTimePicker = ({ id, size, label, value, mask, onChange, placeHolder, ampm, disabled, ...other }) => {

  const [dateValidation, setDateValidation] = React.useState('')

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
        <TimePicker
          id={'custom-time-picker'}
          size={size}
          label={label}
          value={value}
          disabled={disabled}
          type="datetime-local"
          ampm={ampm || false}
          mask={mask || "__:__"}
          onError={(e) => setDateValidation(e)}
          onChange={onChange}
          renderInput={(params) =>
            <TextField
              {...params}
              sx={{ maxWidth: '120px' }}
              inputProps={{
                ...params.inputProps,
                placeholder: placeHolder || "00:00",
                style: style.date_picker
              }}
              error={!value || dateValidation}
            />}
          {...other}
        />
      </LocalizationProvider>
    </React.Fragment>
  )
}

CustomTimePicker.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.object,
  mask: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  ampm: PropTypes.bool,
  disabled: PropTypes.bool,
};

CustomTimePicker.defaultProp = {
  id: "",
  size: '',
  label: "",
  value: {},
  mask: "__:__",
  onChange: () => { },
  placeHolder: "00:00",
  ampm: false,
  disabled: false,
};

export default React.memo(CustomTimePicker)