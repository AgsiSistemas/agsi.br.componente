import React from 'react';
import PropTypes from "prop-types";
import { CircularProgress } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const isNullValue = (value) => {
    return ((value === undefined) || (value === null) || (value === ""))
}

const handleHelperText = (value, validation) => {
    return isNullValue(value) && validation ? "Campo obrigatório" : ""
}

const handleError = (value, validation) => {
    return isNullValue(value) && validation
}


const CustomInputSelect = ({ title, options, value, freeSolo, onChange, inputValue, onInputChange, validation, loadingListOptions, open, disabled, onKeyPress, onblur, ...other }) => {

    console.log(!isNullValue(value) || validation);
    return (
        <React.Fragment>
            <Autocomplete
                style={{ marginTop: '8px' }}
                size="small"
                margin="dense"
                variant="outlined"
                freeSolo={freeSolo}
                InputLabelProps={{ shrink: true }}
                fullWidth
                open={open}
                disabled={disabled}
                options={options}
                loading={options}
                loadingText='Carregando...'
                onBlur={onblur}
                value={value}
                onChange={onChange}
                inputValue={inputValue}
                onInputChange={onInputChange}
                onKeyPress={onKeyPress}
                renderInput={params => (
                    <TextField
                        {...params}
                        error={handleError(value, validation)}
                        helperText={handleHelperText(value, validation)}
                        InputLabelProps={{ shrink: true }}
                        label={title}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <React.Fragment>
                                    {loadingListOptions ? (
                                        <CircularProgress color="inherit" size={15} />
                                    ) : null}
                                    {params.InputProps.startAdornment}
                                </React.Fragment>
                            )
                        }}
                        {...other}
                    />
                )}
            />
        </React.Fragment>

    )
}


CustomInputSelect.propTypes = {
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.any),
    freeSolo: PropTypes.bool,
    open: PropTypes.bool,
    value: PropTypes.object,
    onChange: PropTypes.func,
    inputValue: PropTypes.object,
    onInputChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    onblur: PropTypes.func,
    validation: PropTypes.bool,
    disabled: PropTypes.bool,
    loadingListOptions: PropTypes.bool
};

CustomInputSelect.defaultProp = {
    title: "",
    options: [],
    freeSolo: false,
    open: false,
    value: {},
    onChange: () => { },
    inputValue: {},
    onInputChange: () => { },
    onKeyPress: () => { },
    onblur: () => { },
    validation: false,
    disabled: false,
    loadingListOptions: false
};


export default React.memo(CustomInputSelect);