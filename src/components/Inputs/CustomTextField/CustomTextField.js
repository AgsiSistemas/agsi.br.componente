import React from 'react';
import  PropTypes from "prop-types";
import { CircularProgress } from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const isNullValue = (value) =>{
    return ((value===undefined) || (value===null) || (value===""))    
}

const handleHelperText = (validation) =>{
    return validation? "Campo obrigatório": ""
}

const handleError = (value, validation) =>{
    return isNullValue(value) && validation
}


const CustomTextField = ({ label, id, value, disabled, onChange}) =>{ 

    return(  
        <React.Fragment>
            <TextField
                size="small"
                label={ label }
                id={ id }                            
                fullWidth                            
                disabled={ disabled }
                margin="dense"
                variant="outlined"                                                                         
                InputLabelProps={{shrink: true}}                    
                value={ value }
                onChange={ onChange }
            />             
        </React.Fragment>
           
    )
}


CustomTextField.propTypes = {
    label: PropTypes.string, 
    id: PropTypes.string, 
    value: PropTypes.object, 
    disabled: PropTypes.bool, 
    onChange: PropTypes.func
};
  
CustomTextField.defaultProp = {
    label: "", 
    id: "", 
    value: {}, 
    disabled: false, 
    onChange: ()=>{}
};


export default React.memo(CustomTextField);