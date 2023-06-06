import React, { Fragment } from "react";
import './CustomSimpleModal.scss'
import { Box, Button, Modal, Typography } from "@mui/material";
import PropTypes from 'prop-types'

const CustomSimpleModal = ({ open, onClose, children, title, footer, exitClick, exitTitle, exitIcon, exitVariant, exitClassName, confirmClick, confirmTitle, confirmIcon, confirmVariant, confirmClassName }) => {

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"

    ><Fragment>
        <Box className='modal-style'>
          {title &&
            <Typography className="simple-modal-title">{title}</Typography>
          }
          <Box className='simple-modal-children-content'>
            {children}
          </Box>
          {footer &&
            <Box className='simple-modal-footer-content'>
              {exitClick &&
                <Button
                  className={`simple-modal-button-footer ${exitClassName}`}
                  startIcon={exitIcon && exitIcon}
                  variant={exitVariant && exitVariant}
                  onClick={exitClick}>
                  {exitTitle ? exitTitle : 'Fechar'}
                </Button>
              }
              {confirmClick &&
                <Button
                  className={`simple-modal-button-footer ${confirmClassName}`}
                  startIcon={confirmIcon && confirmIcon}
                  variant={confirmVariant && confirmVariant}
                  onClick={confirmClick}>
                  {confirmTitle ? confirmTitle : 'Salvar'}
                </Button>
              }
            </Box>
          }
        </Box>
      </Fragment>
    </Modal >
  )

}
CustomSimpleModal.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onClose: PropTypes.func,
  title: PropTypes.string,
  footer: PropTypes.bool,
  exitClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.func]),
  exitTitle: PropTypes.string,
  exitIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  exitVariant: PropTypes.string,
  exitClassName: PropTypes.string,
  confirmClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.func]),
  confirmTitle: PropTypes.string,
  confirmIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  confirmVariant: PropTypes.string,
  confirmClassName: PropTypes.string
}

CustomSimpleModal.defaultProp = {
  open: false,
  onClose: () => { },
  title: '',
  footer: false,
  exitClick: () => { },
  exitTitle: '',
  exitIcon: <></>,
  exitVariant: '',
  exitClassName: '',
  confirmClick: () => { },
  confirmTitle: '',
  confirmIcon: <></>,
  confirmVariant: '',
  confirmClassName: ''
}

export default CustomSimpleModal