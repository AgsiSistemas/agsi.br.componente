import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import  PropTypes from "prop-types";
import { Conteiner, ConteinerItem } from '../Conteiner/Conteiner';
import PushPinIcon from '@mui/icons-material/PushPin';
import IconButton from '@mui/material/IconButton';
import styles from './headerAccordion.module.css';

const style={
  header_accordion_conteiner:{
    width: '100%',
    flexDirection: 'row!important'  
},
header_accordion:{  
  alignItems: 'end',
  textAlign: 'end',
  zIndex: '99999'
},
header_accordion_pin: {
  fontSize: '1.2rem!important'
}
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  
  <MuiAccordionSummary
    expandIcon={!props.disableExpandedButton ? <ArrowForwardIosSharpIcon style={{color:'#008EBC'}} sx={{ fontSize: '0.9rem' }} />: <div></div>}
    {...props}
  />
))(({ theme }) => ({
  color:'#008EBC',
  backgroundColor: 'rgb(236, 245, 250)',
  flexDirection: 'row-reverse',
  display:'flex',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export function HeaderAccordion(props) {
  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleDisableExpand = (disabled, expanded)=>{ 
    if(disabled)
      return true
    else
      return expanded === 'panel'
  }

  return (
    <div>      
        <Accordion 
          id="header-accordion-conteiner" 
          style={style.header_accordion_conteiner}
          expanded={ handleDisableExpand(props.disableExpandedButton, expanded) }
          onChange={handleChange('panel')}
        >
          <AccordionSummary disableExpandedButton={ props.disableExpandedButton } aria-controls="paneld-content" id="paneld-header">          
            <Conteiner>
              <ConteinerItem>
                <Typography style={{fontSize:'1.2rem'}}>{ props.header }</Typography>
              </ConteinerItem>            
              <ConteinerItem style={style.header_accordion}>
                {!props.disableAttachButton &&
                <Tooltip title={props.titleTooltip}>
                  <IconButton style={style.header_accordion_pin} size="small" onClick={ props.onClick }>              
                    <PushPinIcon/>
                  </IconButton>           
                </Tooltip>}
              </ConteinerItem>            
            </Conteiner>
          </AccordionSummary>
          <AccordionDetails>
            { props.children }
          </AccordionDetails>
        </Accordion>
    </div>
  );
}

HeaderAccordion.propTypes = {
  header: PropTypes.object,
  titleTooltip: PropTypes.string,
  disableAttachButton: PropTypes.bool,
  disableExpandedButton: PropTypes.bool,
};

HeaderAccordion.defaultProp = {
  header: {},
  titleTooltip: '',
  disableAttachButton: false,
  disableExpandedButton: false
};

export default React.memo(HeaderAccordion);