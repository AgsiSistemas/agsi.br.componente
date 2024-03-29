import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@mui/material'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { Box } from '@mui/material'

const isNullValue = (value) => {
  return value === undefined || value === null || value === ''
}

const handleHelperText = (value, validation) => {
  return isNullValue(value) && validation ? 'Campo obrigatório' : ''
}

const handleError = (value, validation) => {
  return isNullValue(value) && validation
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}


const CustomInputSelect = ({
  title,
  options,
  loading,
  value,
  freeSolo,
  onChange,
  inputValue,
  onInputChange,
  validation,
  loadingListOptions,
  open,
  disabled,
  onKeyPress,
  onOpen,
  onblur,
  maxLength,
  ...other
}) => {


  const [internalInputValue, setInternalInputValue] = useState('')

  const handleInternalOnInputChange = (event, newValue) => {
    setInternalInputValue(newValue)
  }

  const handleIsLoading = () => {

    if (typeof (loading) == 'boolean') {
      return loading
    }
    if (typeof (loading) == 'number') {
      if (loading <= 0) {
        return true
      }
      else { return false }
    }

  }

  const returnLoadingText = () => {

    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress size={20} />
      </Box>
    )
  }

  return (
    <React.Fragment>
      <Autocomplete
        style={{ marginTop: '8px' }}
        size='small'
        margin='dense'
        variant='outlined'
        freeSolo={freeSolo}
        InputLabelProps={{ shrink: true }}
        fullWidth
        open={open}
        onOpen={onOpen}
        disabled={disabled}
        options={options || []}
        noOptionsText={'Nenhum Resultado.'}
        loading={handleIsLoading()}
        loadingText={returnLoadingText()}
        onBlur={onblur}
        value={value}
        onChange={onChange}
        inputValue={inputValue ? inputValue : internalInputValue}
        onInputChange={onInputChange ? onInputChange : handleInternalOnInputChange}
        onKeyPress={onKeyPress}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        // onKeyPress={onKeyPress ? onKeyPress :
        //     (e) => {
        //         console.log(e);
        //         if (e.key == 'Enter' && inputValue.length <= 2 && isNumber(inputValue)) {
        //             let values = options.filter(x => x.id == inputValue)
        //             onChange('mokEvent', values[0])
        //         }
        //     }
        // }
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{ ...params.inputProps, maxLength: maxLength }}
            error={handleError(value, validation)}
            helperText={handleHelperText(value, validation)}
            InputLabelProps={{ shrink: true }}
            label={title}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <React.Fragment>
                  {loadingListOptions ? (
                    <CircularProgress color='inherit' size={15} />
                  ) : null}
                  {params.InputProps.startAdornment}
                </React.Fragment>
              )
            }}
            onKeyDown={(e) => {
              if (
                inputValue &&
                (e.key == 'Enter' || e.key == 'Tab') &&
                inputValue.length <= 2 &&
                isNumber(inputValue)
              ) {
                let values = options.filter((x) => x.id == inputValue)
                onChange('mokEvent', values[0])
                return
              }
              if (
                internalInputValue &&
                (e.key == 'Enter' || e.key == 'Tab') &&
                internalInputValue.length <= 2 &&
                isNumber(internalInputValue)
              ) {
                let values = options.filter((x) => x.id == internalInputValue)
                onChange('mokEvent', values[0])
              }
            }}
            {...other}
          />
        )}
      />
    </React.Fragment>
  )
}

CustomInputSelect.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  options: PropTypes.arrayOf(PropTypes.any),
  freeSolo: PropTypes.bool,
  open: PropTypes.bool,
  loading: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onInputChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onblur: PropTypes.func,
  validation: PropTypes.bool,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  loadingListOptions: PropTypes.bool
}

CustomInputSelect.defaultProp = {
  title: '',
  options: [],
  freeSolo: false,
  open: false,
  loading: false,
  value: {},
  onChange: () => { },
  inputValue: {},
  onInputChange: () => { },
  onKeyPress: () => { },
  onblur: () => { },
  validation: false,
  maxLength: null,
  disabled: false,
  loadingListOptions: false
}

export default React.memo(CustomInputSelect)
