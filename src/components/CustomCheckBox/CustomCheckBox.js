import React from "react"
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import './CustomCheckBox.scss'

const CustomCheckBox = ({ label, onChange, value }) => {
  return (
    <FormGroup className="custom-checkbox-content">
      <FormControlLabel checked={value} onChange={onChange} control={<Checkbox />} label={label} />
    </FormGroup>
  )
}
export default CustomCheckBox