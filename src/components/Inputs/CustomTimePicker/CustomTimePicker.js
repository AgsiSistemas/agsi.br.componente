import React from 'react'
import PropTypes from "prop-types";
import './CustomTimePicker.scss'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { ptBR } from 'date-fns/locale'
import { TextField } from '@mui/material';

const CustomTimePicker = ({ id, label, value, mask, onChange, placeHolder, ampm, disabled, ...other }) => {

  const [dateValidation, setDateValidation] = React.useState('')

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ptBR'}>
        <TimePicker
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
              id={'custom-time-picker'}
              size='small'
              sx={{ marginTop: '8px' }}
              inputProps={{
                ...params.inputProps,
                placeholder: placeHolder || "00:00",
              }}
              error={!value || dateValidation}
              onKeyDown={(e) => e.preventDefault()}
              {...other}
            />}
        />
      </LocalizationProvider>
    </React.Fragment>
  )
}

CustomTimePicker.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  mask: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  ampm: PropTypes.bool,
  disabled: PropTypes.bool,
};

CustomTimePicker.defaultProp = {
  id: "",
  label: "",
  value: {},
  mask: "__:__",
  onChange: () => { },
  placeHolder: "00:00",
  ampm: false,
  disabled: false,
};

export default React.memo(CustomTimePicker)