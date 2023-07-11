import React, { Fragment } from 'react'
import PropTypes from "prop-types";
import AppContent from "../Content/AppContent.js";
import { ConteinerItem } from "../Conteiner/Conteiner.js";
import OperationSection from "../Content/OperationSection.js";
import { Button } from "@mui/material"
import PrintIcon from '@mui/icons-material/Print';
import './CustomContentReport.scss'


const CustomContentReport = ({ id, onClick, titleReport, children, toastMessages, loading }) => {

  const HandleSearchButton = () => {
    return (
      <Button
        className='btn-blue'
        id={id ? id : 'button-generate-report'}
        startIcon={<PrintIcon />}
        variant="contained"
        color="primary"
        onClick={() => onClick()}
      >Gerar Relatório</Button>
    )
  }

  return (
    <AppContent loading={loading}>
      <OperationSection
        titleHeader={titleReport}
        disableExpandedButton={true}
        disableAttachButton={true}
        displayModal={false}
        display={true}
        toastMessages={toastMessages}
      >
        <Fragment>
          {children}
        </Fragment>
        <ConteinerItem className="report-generator-button">
          <HandleSearchButton />
        </ConteinerItem>
      </OperationSection>

    </AppContent>
  )
}

CustomContentReport.propTypes = {
  id: PropTypes.string,
  titleReport: PropTypes.string,
  toastMessages: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

// CustomContentReport.defaultProp = {
//   id: "",
//   titleReport: "",
//   value: {},
//   minDate: undefined,
//   maxDate: undefined,
//   dateFormat: "DD-MM-YYYY",
//   onChange: () => { },
//   placeHolder: "DD/MM/AAAA",
//   helperText: "Data ou Hora Invalida!",
//   disabled: false,
//   noAlertNoneValue: false
// };

export default CustomContentReport