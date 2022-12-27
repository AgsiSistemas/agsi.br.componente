import * as React from 'react';
import Box from '@mui/material/Box';
import WidgetsIcon from '@mui/icons-material/Widgets';
import './Header.css';

const style = {
  width: 85,
  height: 80,
  margin: '10px',
  borderRadius: '2px',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#DDF1FB',
    opacity: [0.9, 0.8, 0.7],
  }
}

export default function HeaderApp({ title, onClick, index }) {
  return (
    <Box sx={style} onClick={onClick}>
      <div className='box-menu'>
        <WidgetsIcon className="box-menu-icon" sx={{ fontSize: 30 }} />
        {/* <i className="pi pi-th-large box-menu-icon"/> */}
        <p>{title}</p>
      </div>
    </Box>
  );
}