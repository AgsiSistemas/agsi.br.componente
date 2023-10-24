import React from "react";
import PropTypes from 'prop-types'
import './CustomRadioGroup.scss'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const CustomRadioGroup = ({ title, value, onChange, defaultValue, itemsList, row, className, classNameGroup }) => {

  return (
    <FormControl
      className={className}
    >
      {title &&
        <FormLabel id="radio-buttons-group-label">{title}</FormLabel>
      }
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        className={classNameGroup}
        defaultValue={defaultValue}
        name="radio-buttons-group"
        value={value}
        onChange={onChange}
        row={row}
      >
        {itemsList?.map((item) => {
          return (
            <FormControlLabel
              value={item?.value}
              className={
                `custom-radio-group-radio-button${item?.inputPosition &&
                `-` + item.inputPosition} ${item?.className}`
              }
              labelPlacement={item?.labelPlacement}
              control={<Radio />}
              label={item?.label}
              disabled={item.disabled}
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
}

CustomRadioGroup.propTypes = {

  title: PropTypes.string,
  className: PropTypes.string,
  classNameGroup: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  itemsList: PropTypes.array,
  row: PropTypes.bool
}

CustomRadioGroup.defaultProp = {
  title: 'Titulo',
  className: '',
  classNameGroup: '',
  value: '',
  onChange: () => { },
  defaultValue: '',
  itemsList: [],
  row: false
}


export default CustomRadioGroup