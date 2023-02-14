import React from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from "prop-types";

const style = {
  appcontent: {
    transition: '0.4s',
    animation: 'fadeInAnimation ease 0.5s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
    paddingRight: '10px',
    marginRight: 'auto',
    marginLeft: 'auto',
    // marginTop: '80px',
    maxWidth: '1195px'

  }
}

const AppContent = (props) => {

  return (
    <div style={style.appcontent}>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={props.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {props.children}
    </div>
  )
}


AppContent.propTypes = {
  loading: PropTypes.bool
};

AppContent.defaultProp = {
  loading: false
};

export default React.memo(AppContent)