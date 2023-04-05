import React from "react";
import './CustomSimpleModal.scss'
import { Box, Modal } from "@mui/material";
import PropTypes from 'prop-types'

const CustomSimpleModal = ({ open, onClose, children }) => {

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"

    >
      <Box className='modal-style'>
        {children}
      </Box>
    </Modal>
  )

}
CustomSimpleModal.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onClose: PropTypes.func,
}

CustomSimpleModal.defaultProp = {
  open: false,
  onClose: () => { },
}

export default CustomSimpleModal