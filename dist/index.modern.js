import React__default, { memo, createElement, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import { styled, alpha } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PushPinIcon from '@mui/icons-material/PushPin';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogContentText from '@mui/material/DialogContentText';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PrintIcon from '@mui/icons-material/Print';
import { Button as Button$1 } from 'primereact/button';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import '@mui/icons-material/ArrowBack';
import '@mui/icons-material/DeleteOutline';
import CheckIcon from '@mui/icons-material/Check';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';
import { CircularProgress, TextField as TextField$1 } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ptBR } from 'date-fns/locale';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress$1 from '@mui/material/CircularProgress';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var style = {
  conteiner: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row!important'
  },
  conteiner_item: {
    flex: '1',
    padding: '3px'
  }
};
var Conteiner = function Conteiner(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    style: _extends({}, style.conteiner, props.style || {}),
    className: "" + ((props === null || props === void 0 ? void 0 : props.className) || '')
  }, props === null || props === void 0 ? void 0 : props.children);
};
Conteiner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.object
};
Conteiner.defaultProp = {
  className: "",
  children: {}
};
var ConteinerItem = function ConteinerItem(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    id: props === null || props === void 0 ? void 0 : props.id,
    style: _extends({}, style.conteiner_item, props.style || {}),
    className: "" + ((props === null || props === void 0 ? void 0 : props.className) || '')
  }, props.children);
};
ConteinerItem.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.object
};
ConteinerItem.defaultProp = {
  className: "",
  children: {}
};

var style$1 = {
  page_base_content: {
    marginBottom: '20px',
    padding: '5px 5px 5px 5px',
    backgroundColor: 'white'
  },
  page_base_header: {
    color: 'white',
    padding: '10px 10px 10px 15px',
    textAlign: 'center',
    fontSize: '17px',
    fontWeight: 'bold',
    borderRadius: '2px',
    backgroundColor: 'rgb(236, 245, 250)!important'
  },
  agsi_theme_1: {
    backgroundColor: 'rgb(236, 245, 250)!important'
  }
};

var PageBase = function PageBase(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    id: props.id,
    style: _extends({}, style$1.page_base_content, props.style || {})
  }, props.header !== undefined && /*#__PURE__*/React__default.createElement("div", {
    style: _extends({}, style$1.page_base_header, props.style || {})
  }, /*#__PURE__*/React__default.createElement("label", null, props.header)), props.children);
};

var PageBase$1 = React__default.memo(PageBase);

var OperationDetail = function OperationDetail(props) {
  return /*#__PURE__*/React__default.createElement(PageBase$1, null, props.children);
};

var OperationDetail$1 = React__default.memo(OperationDetail);

var style$2 = {
  page_base_content: {
    marginBottom: '20px',
    padding: '5px 5px 5px 5px',
    backgroundColor: 'white'
  },
  page_base_header: {
    color: 'white',
    padding: '10px 10px 10px 15px',
    textAlign: 'center',
    fontSize: '17px',
    fontWeight: 'bold',
    borderRadius: '2px',
    backgroundColor: 'rgb(236, 245, 250)!important'
  },
  agsi_theme_1: {
    backgroundColor: 'rgb(236, 245, 250)!important'
  }
};

var PageBase$2 = function PageBase(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    id: props.id,
    style: _extends({}, style$2.page_base_content, props.style || {})
  }, props.header !== undefined && /*#__PURE__*/React__default.createElement("div", {
    style: _extends({}, style$2.page_base_header, props.style || {})
  }, /*#__PURE__*/React__default.createElement("label", null, props.header)), props.children);
};

var PageBase$3 = React__default.memo(PageBase$2);

var style$3 = {
  header_accordion_conteiner: {
    width: '100%',
    flexDirection: 'row'
  },
  header_accordion: {
    alignItems: 'end',
    textAlign: 'end',
    zIndex: '99999',
    fontSize: '1.2rem'
  },
  header_accordion_pin: {
    fontSize: '1.2rem'
  }
};
var Accordion = styled(function (props) {
  return /*#__PURE__*/createElement(MuiAccordion, _extends({
    disableGutters: true,
    elevation: 0,
    square: true
  }, props));
})(function (_ref) {
  var theme = _ref.theme;
  return {
    border: "1px solid " + theme.palette.divider,
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    }
  };
});
var AccordionSummary = styled(function (props) {
  return /*#__PURE__*/createElement(MuiAccordionSummary, _extends({
    expandIcon: !props.disableExpandedButton ? /*#__PURE__*/createElement(ArrowForwardIosSharpIcon, {
      style: {
        color: '#008EBC'
      },
      sx: {
        fontSize: '0.9rem'
      }
    }) : /*#__PURE__*/createElement("div", null)
  }, props));
})(function (_ref2) {
  var theme = _ref2.theme;
  return {
    color: '#008EBC',
    backgroundColor: 'rgb(236, 245, 250)',
    flexDirection: 'row-reverse',
    display: 'flex',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1)
    }
  };
});
var AccordionDetails = styled(MuiAccordionDetails)(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)'
  };
});
function HeaderAccordion(props) {
  var _React$useState = useState('panel'),
      expanded = _React$useState[0],
      setExpanded = _React$useState[1];

  var handleChange = function handleChange(panel) {
    return function (event, newExpanded) {
      setExpanded(newExpanded ? panel : false);
    };
  };

  var handleDisableExpand = function handleDisableExpand(disabled, expanded) {
    if (disabled) return true;else return expanded === 'panel';
  };

  return /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Accordion, {
    id: "header-accordion-conteiner",
    style: style$3.header_accordion_conteiner,
    expanded: handleDisableExpand(props.disableExpandedButton, expanded),
    onChange: handleChange('panel')
  }, /*#__PURE__*/createElement(AccordionSummary, {
    disableExpandedButton: props.disableExpandedButton,
    "aria-controls": "paneld-content",
    id: "paneld-header"
  }, /*#__PURE__*/createElement(Conteiner, null, /*#__PURE__*/createElement(ConteinerItem, null, /*#__PURE__*/createElement(Typography, {
    style: {
      fontSize: '1.2rem'
    }
  }, props.header)), /*#__PURE__*/createElement(ConteinerItem, {
    style: style$3.header_accordion
  }, !props.disableAttachButton && /*#__PURE__*/createElement(Tooltip, {
    title: props.titleTooltip
  }, /*#__PURE__*/createElement(IconButton, {
    style: style$3.header_accordion_pin,
    size: "small",
    onClick: props.onClick
  }, /*#__PURE__*/createElement(PushPinIcon, null)))))), /*#__PURE__*/createElement(AccordionDetails, null, props.children)));
}
HeaderAccordion.propTypes = {
  header: PropTypes.object,
  titleTooltip: PropTypes.string,
  disableAttachButton: PropTypes.bool,
  disableExpandedButton: PropTypes.bool
};
HeaderAccordion.defaultProp = {
  header: {},
  titleTooltip: '',
  disableAttachButton: false,
  disableExpandedButton: false
};
var HeaderAccordion$1 = memo(HeaderAccordion);

var CustomModal = function CustomModal(props) {
  var _React$useState = useState('paper'),
      scroll = _React$useState[0];

  return /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Dialog, {
    maxWidth: true,
    open: props.displayModal,
    onClose: props.onClose,
    scroll: scroll,
    "aria-labelledby": "scroll-dialog-title",
    "aria-describedby": "scroll-dialog-description"
  }, /*#__PURE__*/createElement(DialogTitle, {
    id: "scroll-dialog-title-modal"
  }, props.title), /*#__PURE__*/createElement(DialogContent, {
    dividers: scroll === 'paper'
  }, /*#__PURE__*/createElement("div", null, props.children)), /*#__PURE__*/createElement(DialogActions, null, /*#__PURE__*/createElement(Conteiner, null, /*#__PURE__*/createElement(ConteinerItem, null, /*#__PURE__*/createElement(Button, {
    autoFocus: true,
    onClick: props.onCloseDialog
  }, "Fechar")), props.buttonAdditional !== null && props.buttonAdditional))));
};

CustomModal.propTypes = {
  displayModal: PropTypes.string,
  onClose: PropTypes.string,
  onCloseDialog: PropTypes.func,
  title: PropTypes.bool,
  buttonAdditional: PropTypes.object
};
CustomModal.defaultProp = {
  displayModal: false,
  onClose: function onClose() {},
  onCloseDialog: function onCloseDialog() {},
  title: "",
  buttonAdditional: null
};
var CustomModal$1 = memo(CustomModal);

var Alert = forwardRef(function Alert(props, ref) {
  return /*#__PURE__*/createElement(MuiAlert, _extends({
    elevation: 6,
    ref: ref,
    variant: "filled"
  }, props));
});
function CustomToastMessage(_ref) {
  var open = _ref.open,
      message = _ref.message,
      severity = _ref.severity,
      handleClose = _ref.handleClose;
  return /*#__PURE__*/createElement(Stack, {
    spacing: 2,
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/createElement(Snackbar, {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/createElement(Alert, {
    onClose: handleClose,
    severity: severity || "success",
    sx: {
      width: '100%'
    }
  }, message)));
}

var style$4 = {
  operation_header_title: {
    marginBottom: '5px'
  },
  operation_header_subtitle: {
    marginTop: '2px'
  }
};

var handleDisplay = function handleDisplay(display) {
  if (display === undefined) return 'none';else {
    return display ? 'block' : 'none';
  }
};

var handleDisplayModal = function handleDisplayModal(displayModal) {
  if (displayModal === undefined) return 'none';else {
    return displayModal ? 'block' : 'none';
  }
};

var OperationSection = function OperationSection(props) {
  var _props$toastMessages, _props$toastMessages2, _props$toastMessages3;

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h2", {
    style: style$4.operation_header_title
  }, props.title), /*#__PURE__*/React__default.createElement("h5", {
    style: style$4.operation_header_subtitle
  }, props.subTitle), /*#__PURE__*/React__default.createElement(CustomModal$1, {
    displayModal: props.displayModal,
    onCloseDialog: props.onCloseDialog,
    buttonAdditional: props.buttonAdditional
  }, /*#__PURE__*/React__default.createElement(PageBase$3, {
    style: {
      display: handleDisplayModal(props.displayModal)
    },
    id: "operation-header"
  }, /*#__PURE__*/React__default.createElement(HeaderAccordion$1, {
    disableAttachButton: props.disableAttachButton,
    disableExpandedButton: props.disableExpandedButton,
    titleTooltip: "Fixar",
    header: props.titleHeader,
    onClick: props.onClick
  }, props.children))), /*#__PURE__*/React__default.createElement(PageBase$3, {
    style: {
      display: handleDisplay(props.display)
    },
    id: "operation-header"
  }, /*#__PURE__*/React__default.createElement(HeaderAccordion$1, {
    disableAttachButton: props.disableAttachButton,
    disableExpandedButton: props.disableExpandedButton,
    titleTooltip: "Desafixar",
    header: props.titleHeader,
    onClick: props.onClick
  }, props.children)), /*#__PURE__*/React__default.createElement(CustomToastMessage, {
    open: (_props$toastMessages = props.toastMessages) === null || _props$toastMessages === void 0 ? void 0 : _props$toastMessages.open,
    message: (_props$toastMessages2 = props.toastMessages) === null || _props$toastMessages2 === void 0 ? void 0 : _props$toastMessages2.message,
    severity: (_props$toastMessages3 = props.toastMessages) === null || _props$toastMessages3 === void 0 ? void 0 : _props$toastMessages3.severity,
    handleClose: function handleClose(event, reason) {
      props.toastMessages.handleClose();
      if (reason === 'clickaway') return;
    }
  }));
};

OperationSection.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  onCloseDialog: PropTypes.func,
  displayModal: PropTypes.bool,
  disableAttachButton: PropTypes.bool,
  disableExpandedButton: PropTypes.bool,
  titleHeader: PropTypes.string,
  onClick: PropTypes.func,
  buttonAdditional: PropTypes.object,
  toastMessages: PropTypes.shape({
    open: PropTypes.bool,
    message: PropTypes.string,
    severity: PropTypes.string,
    handleClose: PropTypes.func
  })
};
OperationSection.defaultProp = {
  title: "",
  subTitle: "",
  onCloseDialog: function onCloseDialog() {},
  displayModal: false,
  disableAttachButton: false,
  disableExpandedButton: false,
  titleHeader: "",
  onClick: function onClick() {},
  buttonAdditional: null,
  toastMessages: {
    open: false,
    message: "",
    severity: "",
    handleClose: function handleClose() {}
  }
};
var OperationSection$1 = React__default.memo(OperationSection);

var style$5 = {
  operation_content_header: {
    textAlign: 'end',
    padding: '8px'
  },
  operation_content_justify_header: {
    justifyContent: 'space-between',
    borderBottom: 'solid 1px rgba(0, 0, 0, .125)',
    alignItems: 'center'
  },
  operation_content_header_search: {
    textAlign: 'start',
    flex: 'none'
  },
  operation_content_data_table: {
    overflowX: 'auto'
  },
  operation_content_group: {
    border: '1px solid rgba(0, 0, 0, .125)'
  },
  paginatorRight: {
    fontSize: '12px',
    color: '#69ABEC',
    fontWeight: 'normal'
  }
};

var handleDisplay$1 = function handleDisplay(display) {
  if (display === undefined) return 'none';else {
    return display ? 'inline-flex' : 'none';
  }
};

var OperationTable = function OperationTable(props) {
  var onReportClick = props.onReportClick,
      onAddClick = props.onAddClick,
      deleteHandler = props.deleteHandler,
      records = props.records,
      paginator = props.paginator,
      columnList = props.columnList,
      heigthDataTable = props.heigthDataTable,
      display = props.display,
      onClick = props.onClick,
      paginatorStep = props.paginatorStep,
      sortField = props.sortField,
      sortOrder = props.sortOrder,
      paginatorButton = props.paginatorButton;
  var rowsTable = paginatorStep ? paginatorStep : 5;
  var pagArr = [rowsTable];
  var printIcon = props.printIcon == false ? props.printIcon : true;

  var calPerPage = function calPerPage() {
    var i = 0;

    while (i < 2) {
      i++;
      var inclement = pagArr[pagArr.length - 1] + rowsTable;

      if (!pagArr.includes(inclement) || !inclement == 50) {
        pagArr.push(inclement);
      }
    }

    pagArr.push(50);
    return pagArr.sort(function (a, b) {
      return a - b;
    });
  };

  var paginatorRight = paginatorButton !== undefined ? /*#__PURE__*/React__default.createElement(Button$1, {
    label: (paginatorButton === null || paginatorButton === void 0 ? void 0 : paginatorButton.title) !== undefined ? paginatorButton === null || paginatorButton === void 0 ? void 0 : paginatorButton.title : 'Carregar mais...',
    style: style$5.paginatorRight,
    type: "button",
    icon: "pi pi-refresh",
    className: "p-button-text",
    onClick: paginatorButton.onClick
  }) : /*#__PURE__*/React__default.createElement(Fragment, null);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(PageBase$3, null, /*#__PURE__*/React__default.createElement("div", {
    style: style$5.operation_content_group
  }, /*#__PURE__*/React__default.createElement(Conteiner, {
    style: style$5.operation_content_justify_header
  }, /*#__PURE__*/React__default.createElement(ConteinerItem, {
    style: style$5.operation_content_header_search
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    id: "id_operation_content_search",
    style: {
      display: handleDisplay$1(display)
    },
    className: "icon-btn-blue",
    size: "large",
    onClick: onClick
  }, /*#__PURE__*/React__default.createElement(Tooltip, {
    title: "Filtros / Pesquisa"
  }, /*#__PURE__*/React__default.createElement(FilterAltIcon, {
    fontSize: "inherit"
  })))), /*#__PURE__*/React__default.createElement(ConteinerItem, {
    style: style$5.operation_content_header
  }, printIcon && /*#__PURE__*/React__default.createElement(IconButton, {
    className: "icon-btn-blue",
    size: "large",
    style: {
      marginRight: '7px'
    },
    onClick: onReportClick
  }, /*#__PURE__*/React__default.createElement(Tooltip, {
    title: "Imprimir"
  }, /*#__PURE__*/React__default.createElement(PrintIcon, {
    fontSize: "inherit"
  }))), onAddClick && /*#__PURE__*/React__default.createElement(Button, {
    className: "btn-blue",
    startIcon: /*#__PURE__*/React__default.createElement(AddCircleOutlineIcon, null),
    variant: "contained",
    color: "success",
    onClick: onAddClick
  }, props.onAddClickTitle ? props.onAddClickTitle : 'Incluir'))), /*#__PURE__*/React__default.createElement(Conteiner, null, /*#__PURE__*/React__default.createElement(ConteinerItem, {
    style: style$5.operation_content_data_table
  }, /*#__PURE__*/React__default.createElement(DataTable, {
    value: records,
    paginator: paginator,
    paginatorRight: paginatorRight,
    sortField: sortField,
    sortOrder: sortOrder,
    responsiveLayout: "scroll",
    paginatorTemplate: "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
    currentPageReportTemplate: "Mostrando {first} a {last} de {totalRecords}",
    size: "small",
    rows: rowsTable,
    emptyMessage: "Nenhum resultado encontrado",
    rowsPerPageOptions: calPerPage(),
    scrollHeight: heigthDataTable
  }, columnList.map(function (item, index) {
    if (item.body !== undefined) return /*#__PURE__*/React__default.createElement(Column, {
      key: index,
      style: item.style,
      sortable: item.sortable,
      body: item.body,
      header: item.header,
      frozen: item.frozen,
      alignFrozen: item.alignFrozen,
      dataType: item.dataType
    });else return /*#__PURE__*/React__default.createElement(Column, {
      key: index,
      style: item.style,
      sortable: item.sortable,
      field: item.field,
      header: item.header,
      frozen: item.frozen,
      dataType: item.dataType
    });
  })))))), /*#__PURE__*/React__default.createElement(Dialog, {
    open: deleteHandler === null || deleteHandler === void 0 ? void 0 : deleteHandler.displayDelete,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(DialogTitle, {
    id: "alert-dialog-title"
  }, "Confirma\xE7\xE3o"), /*#__PURE__*/React__default.createElement(DialogContent, null, /*#__PURE__*/React__default.createElement(DialogContentText, {
    id: "alert-dialog-description"
  }, "Tem certeza que deseja excluir ?")), /*#__PURE__*/React__default.createElement(DialogActions, null, /*#__PURE__*/React__default.createElement(Button, {
    style: {
      marginRight: '5px'
    },
    variant: "outlined",
    component: "span",
    onClick: function onClick() {
      return deleteHandler.onCancelClick();
    }
  }, "Cancelar"), /*#__PURE__*/React__default.createElement(Button, {
    className: "btn-red",
    variant: "contained",
    startIcon: /*#__PURE__*/React__default.createElement(DeleteIcon, null),
    color: "error",
    onClick: function onClick() {
      return deleteHandler.onDeleteClick();
    },
    autoFocus: true
  }, "Excluir"))));
};

OperationTable.propTypes = {
  onReportClick: PropTypes.func,
  onAddClick: PropTypes.func,
  paginator: PropTypes.bool,
  deleteHandler: PropTypes.shape({
    displayDelete: PropTypes.bool,
    onCancelClick: PropTypes.func,
    onDeleteClick: PropTypes.func
  }),
  records: PropTypes.arrayOf(PropTypes.object),
  columnList: PropTypes.arrayOf(PropTypes.object),
  heigthDataTable: PropTypes.number,
  display: PropTypes.bool,
  onClick: PropTypes.func,
  printIcon: PropTypes.bool,
  paginatorButton: PropTypes.object
};
OperationTable.defaultProp = {
  onReportClick: function onReportClick() {},
  onAddClick: function onAddClick() {},
  paginator: false,
  deleteHandler: {
    displayDelete: false,
    onCancelClick: function onCancelClick() {},
    onDeleteClick: function onDeleteClick() {}
  },
  records: [],
  columnList: [],
  heigthDataTable: 0,
  display: false,
  onClick: function onClick() {},
  printIcon: true,
  paginatorButton: {
    title: "Carregar mais..",
    onClick: function onClick() {}
  }
};
var OperationTable$1 = React__default.memo(OperationTable);

var _excluded = ["children", "onClose"];
var BootstrapDialog = styled(Dialog)(function (_ref) {
  var theme = _ref.theme;
  return {
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
      width: '400px'
    }
  };
});

var BootstrapDialogTitle = function BootstrapDialogTitle(props) {
  var children = props.children,
      onClose = props.onClose,
      other = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/createElement(DialogTitle, _extends({
    sx: {
      m: 0,
      p: 2
    }
  }, other), children, onClose ? /*#__PURE__*/createElement(IconButton, {
    "aria-label": "close",
    onClick: onClose,
    sx: {
      position: 'absolute',
      right: 8,
      top: 8,
      color: function color(theme) {
        return theme.palette.grey[500];
      }
    }
  }, /*#__PURE__*/createElement(CloseIcon, null)) : null);
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

var CustomDialog = function CustomDialog(_ref2) {
  var title = _ref2.title,
      message = _ref2.message,
      open = _ref2.open,
      onClose = _ref2.onClose;
  return /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(BootstrapDialog, {
    onClose: onClose,
    "aria-labelledby": "customized-dialog-title",
    open: open
  }, /*#__PURE__*/createElement(BootstrapDialogTitle, {
    id: "customized-dialog-title",
    onClose: onClose
  }, title), /*#__PURE__*/createElement(DialogContent, {
    dividers: true
  }, /*#__PURE__*/createElement(Typography, {
    gutterBottom: true
  }, "\xA0\xA0\xA0\xA0\xA0", message, "\xA0\xA0\xA0\xA0\xA0")), /*#__PURE__*/createElement(DialogActions, null, /*#__PURE__*/createElement(Button, {
    autoFocus: true,
    onClick: onClose
  }, "Ok"))));
};

CustomDialog.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func
};
CustomDialog.defaultProp = {
  title: "",
  message: "",
  open: false
};
var CustomDialog$1 = memo(CustomDialog);

var Alert$1 = forwardRef(function Alert(props, ref) {
  return /*#__PURE__*/createElement(MuiAlert, _extends({
    elevation: 6,
    ref: ref,
    variant: "filled"
  }, props));
});
function CustomToastMessage$1(_ref) {
  var open = _ref.open,
      message = _ref.message,
      severity = _ref.severity,
      handleClose = _ref.handleClose;
  return /*#__PURE__*/createElement(Stack, {
    spacing: 2,
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/createElement(Snackbar, {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/createElement(Alert$1, {
    onClose: handleClose,
    severity: severity || "success",
    sx: {
      width: '100%'
    }
  }, message)));
}

var style$6 = {
  content_data_table: {
    overflowX: 'auto'
  },
  content_data_table_display_border: {
    overflowX: 'auto',
    border: 'solid 1px #ADADAD',
    borderRadius: '3px',
    padding: '8px'
  },
  p_datatable_row_expansion: {
    background: '#F5F5F5!important'
  },
  paginatorRight: {
    fontSize: '12px',
    color: '#69ABEC',
    fontWeight: 'normal'
  }
};

var CustomDataTable = function CustomDataTable(props) {
  var records = props.records,
      columnList = props.columnList,
      heigthDataTable = props.heigthDataTable,
      paginatorStep = props.paginatorStep,
      displayBorder = props.displayBorder,
      paginator = props.paginator,
      displayExpander = props.displayExpander,
      onRowExpand = props.onRowExpand,
      onRowCollapse = props.onRowCollapse,
      rowExpansionTemplate = props.rowExpansionTemplate,
      paginatorButton = props.paginatorButton;
  var rowsTable = paginatorStep ? paginatorStep : 5;
  var pagArr = [rowsTable];

  var _useState = useState(null),
      expandedRows = _useState[0],
      setExpandedRows = _useState[1];

  var paginatorRight = paginatorButton !== undefined ? /*#__PURE__*/React__default.createElement(Button$1, {
    label: (paginatorButton === null || paginatorButton === void 0 ? void 0 : paginatorButton.title) !== undefined ? paginatorButton === null || paginatorButton === void 0 ? void 0 : paginatorButton.title : 'Carregar mais...',
    style: style$6.paginatorRight,
    type: "button",
    icon: "pi pi-refresh",
    className: "p-button-text",
    onClick: paginatorButton.onClick
  }) : /*#__PURE__*/React__default.createElement(Fragment, null);

  var calPerPage = function calPerPage() {
    var i = 0;

    while (i < 2) {
      i++;
      var inclement = pagArr[pagArr.length - 1] + rowsTable;

      if (!pagArr.includes(inclement) || !inclement == 50) {
        pagArr.push(inclement);
      }
    }

    pagArr.push(50);
    return pagArr.sort(function (a, b) {
      return a - b;
    });
  };

  return /*#__PURE__*/React__default.createElement("div", {
    style: displayBorder ? style$6.content_data_table_display_border : style$6.content_data_table
  }, /*#__PURE__*/React__default.createElement(DataTable, {
    value: records,
    paginator: paginator,
    paginatorRight: paginatorRight,
    expandedRows: expandedRows,
    onRowToggle: function onRowToggle(e) {
      return setExpandedRows(e.data);
    },
    onRowExpand: onRowExpand,
    onRowCollapse: onRowCollapse,
    rowExpansionTemplate: rowExpansionTemplate,
    selectionMode: "single",
    responsiveLayout: "scroll",
    paginatorTemplate: "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
    currentPageReportTemplate: "Mostrando {first} a {last} de {totalRecords}",
    size: "small",
    rows: rowsTable,
    emptyMessage: "Nenhum resultado encontrado",
    rowsPerPageOptions: calPerPage(),
    scrollHeight: heigthDataTable
  }, displayExpander && /*#__PURE__*/React__default.createElement(Column, {
    expander: true,
    style: {
      width: '3em'
    }
  }), columnList.map(function (item, index) {
    if (item.body !== undefined) return /*#__PURE__*/React__default.createElement(Column, {
      key: index,
      style: item.style,
      sortable: item.sortable,
      body: item.body,
      header: item.header,
      frozen: item.frozen,
      alignFrozen: item.alignFrozen
    });else return /*#__PURE__*/React__default.createElement(Column, {
      key: index,
      style: item.style,
      sortable: item.sortable,
      field: item.field,
      header: item.header,
      frozen: item.frozen
    });
  })));
};

CustomDataTable.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object),
  columnList: PropTypes.arrayOf(PropTypes.object),
  heigthDataTable: PropTypes.number,
  displayBorder: PropTypes.bool,
  paginator: PropTypes.bool,
  displayExpander: PropTypes.bool,
  onRowExpand: PropTypes.func,
  onRowCollapse: PropTypes.func,
  paginatorButton: PropTypes.object
};
CustomDataTable.defaultProp = {
  records: [],
  columnList: [],
  heigthDataTable: 0,
  displayBorder: false,
  paginator: false,
  displayExpander: false,
  onRowExpand: function onRowExpand() {},
  onRowCollapse: function onRowCollapse() {},
  paginatorButton: {
    title: "Carregar mais..",
    onClick: function onClick() {}
  }
};
var CustomDataTable$1 = React__default.memo(CustomDataTable);

var style$7 = {
  save_component: {
    textAlign: 'end'
  },
  save_component_item: {
    marginRight: '5px'
  }
};

var MessageConfirmation = function MessageConfirmation(_ref) {
  var display = _ref.display,
      onClose = _ref.onClose,
      onCancelClick = _ref.onCancelClick,
      onConfirmClick = _ref.onConfirmClick;
  return /*#__PURE__*/React__default.createElement(Dialog, {
    open: display,
    onClose: onClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(DialogTitle, {
    id: "alert-dialog-title"
  }, "Confirma\xE7\xE3o"), /*#__PURE__*/React__default.createElement(DialogContent, null, /*#__PURE__*/React__default.createElement(DialogContentText, {
    id: "alert-dialog-description"
  }, "Confirma a grava\xE7\xE3o ?")), /*#__PURE__*/React__default.createElement(DialogActions, null, /*#__PURE__*/React__default.createElement(Button, {
    variant: "outlined",
    style: style$7.save_component_item,
    onClick: onCancelClick,
    startIcon: /*#__PURE__*/React__default.createElement(CancelOutlinedIcon, null)
  }, "Cancelar"), /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    className: "btn-green",
    color: "success",
    onClick: onConfirmClick,
    endIcon: /*#__PURE__*/React__default.createElement(CheckIcon, null),
    autoFocus: true
  }, "Confirmar")));
};

var SaveComponent = function SaveComponent(props) {
  var _React$useState = React__default.useState({
    display: false,
    confirmed: false
  }),
      displayConfirm = _React$useState[0],
      setDisplayConfirm = _React$useState[1];

  var _React$useState2 = React__default.useState(false),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Conteiner, {
    style: style$7.save_component
  }, /*#__PURE__*/React__default.createElement(ConteinerItem, null, /*#__PURE__*/React__default.createElement(Button, {
    style: style$7.save_component_item,
    variant: "outlined",
    startIcon: /*#__PURE__*/React__default.createElement(CancelOutlinedIcon, null),
    onClick: props.onCancelClick
  }, "Cancelar"), /*#__PURE__*/React__default.createElement(LoadingButton, {
    loading: loading,
    loadingPosition: "end",
    color: "success",
    variant: "contained",
    className: "btn-green",
    endIcon: /*#__PURE__*/React__default.createElement(SaveOutlinedIcon, null),
    onClick: function onClick() {
      if (loading) return;
      setDisplayConfirm({
        display: true,
        confirmed: false
      });
    }
  }, "Salvar"))), /*#__PURE__*/React__default.createElement(MessageConfirmation, {
    display: displayConfirm.display,
    onClose: function onClose() {
      return setDisplayConfirm({
        display: false,
        confirmed: false
      });
    },
    onCancelClick: function onCancelClick() {
      return setDisplayConfirm({
        display: false,
        confirmed: false
      });
    },
    onConfirmClick: function onConfirmClick() {
      try {
        setDisplayConfirm({
          display: false,
          confirmed: true
        });
        setLoading(true);
        return Promise.resolve(props.onSaveClick()).then(function () {
          setLoading(false);
        });
      } catch (e) {
        return Promise.reject(e);
      }
    }
  }));
};

SaveComponent.propTypes = {
  onCancelClick: PropTypes.func,
  onSaveClick: PropTypes.func
};
SaveComponent.defaultProp = {
  onCancelClick: function onCancelClick() {},
  onSaveClick: function onSaveClick() {}
};
var SaveComponent$1 = React__default.memo(SaveComponent);

var style$8 = {
  header_app_bar: {
    minHeight: '52px!important',
    maxHeight: '55px!important',
    backgroundColor: '#008EBC!important'
  }
};

var ToggleSideBar = function ToggleSideBar() {
  if (document.getElementById("layout-sidebar").style.display === 'none') {
    document.getElementById("layout-sidebar").style.display = 'block';
  } else {
    if (document.getElementsByClassName("layout-reduce")[0] === undefined) {
      document.getElementById("layout-sidebar").classList.add("layout-reduce");
      document.getElementById("sidebar").classList.add("sidebar-reduce");
    } else {
      document.getElementById("layout-sidebar").classList.remove("layout-reduce");
      document.getElementById("sidebar").classList.remove("sidebar-reduce");
    }
  }
};

var Search = styled('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%'
  }, _ref2[theme.breakpoints.up('sm')] = {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }, _ref2;
});
var SearchIconWrapper = styled('div')(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
});
var StyledInputBase = styled(InputBase)(function (_ref4) {
  var _MuiInputBaseInpu;

  var theme = _ref4.theme;
  return {
    color: 'inherit',
    '& .MuiInputBase-input': (_MuiInputBaseInpu = {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: "calc(1em + " + theme.spacing(4) + ")",
      transition: theme.transitions.create('width'),
      width: '100%'
    }, _MuiInputBaseInpu[theme.breakpoints.up('md')] = {
      width: '20ch'
    }, _MuiInputBaseInpu)
  };
});

var Header = function Header(props) {
  var title = props.title;

  var _React$useState = useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = useState(null),
      mobileMoreAnchorEl = _React$useState2[0],
      setMobileMoreAnchorEl = _React$useState2[1];

  var isMenuOpen = Boolean(anchorEl);
  var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  var handleProfileMenuOpen = function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleMobileMenuClose = function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  };

  var handleMenuClose = function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  var handleMobileMenuOpen = function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  var menuId = 'primary-search-account-menu';
  var renderMenu = /*#__PURE__*/createElement(Menu, {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: menuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMenuOpen,
    onClose: handleMenuClose
  }, /*#__PURE__*/createElement(MenuItem, {
    onClick: handleMenuClose
  }, "Profile"), /*#__PURE__*/createElement(MenuItem, {
    onClick: handleMenuClose
  }, "My account"));
  var mobileMenuId = 'primary-search-account-menu-mobile';
  var renderMobileMenu = /*#__PURE__*/createElement(Menu, {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose
  }, /*#__PURE__*/createElement(MenuItem, null, /*#__PURE__*/createElement(IconButton, {
    size: "large",
    "aria-label": "show 4 new mails",
    color: "inherit"
  }, /*#__PURE__*/createElement(Badge, {
    badgeContent: 4,
    color: "error"
  }, /*#__PURE__*/createElement(MailIcon, null))), /*#__PURE__*/createElement("p", null, "Messages")), /*#__PURE__*/createElement(MenuItem, null, /*#__PURE__*/createElement(IconButton, {
    size: "large",
    "aria-label": "show 17 new notifications",
    color: "inherit"
  }, /*#__PURE__*/createElement(Badge, {
    badgeContent: 17,
    color: "error"
  }, /*#__PURE__*/createElement(NotificationsIcon, null))), /*#__PURE__*/createElement("p", null, "Notifications")), /*#__PURE__*/createElement(MenuItem, {
    onClick: handleProfileMenuOpen
  }, /*#__PURE__*/createElement(IconButton, {
    size: "large",
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit"
  }, /*#__PURE__*/createElement(AccountCircle, null)), /*#__PURE__*/createElement("p", null, "Profile")));
  return /*#__PURE__*/createElement(Box, {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/createElement(AppBar, {
    style: style$8.header_app_bar,
    position: "fixed"
  }, /*#__PURE__*/createElement(Toolbar, null, /*#__PURE__*/createElement(IconButton, {
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    sx: {
      mr: 2
    },
    onClick: function onClick() {
      return ToggleSideBar();
    }
  }, /*#__PURE__*/createElement(AppsIcon, null)), /*#__PURE__*/createElement(Typography, {
    variant: "h6",
    noWrap: true,
    component: "div",
    sx: {
      display: {
        xs: 'none',
        sm: 'block'
      }
    }
  }, title), /*#__PURE__*/createElement(Search, null, /*#__PURE__*/createElement(SearchIconWrapper, null, /*#__PURE__*/createElement(SearchIcon, null)), /*#__PURE__*/createElement(StyledInputBase, {
    placeholder: "Pesquisar...",
    inputProps: {
      'aria-label': 'search'
    }
  })), /*#__PURE__*/createElement(Box, {
    sx: {
      flexGrow: 1
    }
  }), /*#__PURE__*/createElement(Box, {
    sx: {
      display: {
        xs: 'none',
        md: 'flex'
      }
    }
  }, /*#__PURE__*/createElement(IconButton, {
    size: "large",
    "aria-label": "show 4 new mails",
    color: "inherit"
  }, /*#__PURE__*/createElement(Badge, {
    badgeContent: 4,
    color: "error"
  }, /*#__PURE__*/createElement(MailIcon, null))), /*#__PURE__*/createElement(IconButton, {
    size: "large",
    "aria-label": "show 17 new notifications",
    color: "inherit"
  }, /*#__PURE__*/createElement(Badge, {
    badgeContent: 17,
    color: "error"
  }, /*#__PURE__*/createElement(NotificationsIcon, null))), /*#__PURE__*/createElement(IconButton, {
    size: "large",
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "inherit"
  }, /*#__PURE__*/createElement(AccountCircle, null))), /*#__PURE__*/createElement(Box, {
    sx: {
      display: {
        xs: 'flex',
        md: 'none'
      }
    }
  }, /*#__PURE__*/createElement(IconButton, {
    size: "large",
    "aria-label": "show more",
    "aria-controls": mobileMenuId,
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "inherit"
  }, /*#__PURE__*/createElement(MoreIcon, null))))), renderMobileMenu, renderMenu);
};

var Header$1 = memo(Header);

var _excluded$1 = ["title", "options", "value", "freeSolo", "onChange", "inputValue", "onInputChange", "validation", "loadingListOptions", "open", "disabled", "onKeyPress", "onblur"];

var isNullValue = function isNullValue(value) {
  return value === undefined || value === null || value === "";
};

var handleHelperText = function handleHelperText(validation) {
  return validation ? "Campo obrigatório" : "";
};

var handleError = function handleError(value, validation) {
  return isNullValue(value) && validation;
};

var CustomInputSelect = function CustomInputSelect(_ref) {
  var title = _ref.title,
      options = _ref.options,
      value = _ref.value,
      freeSolo = _ref.freeSolo,
      onChange = _ref.onChange,
      inputValue = _ref.inputValue,
      onInputChange = _ref.onInputChange,
      validation = _ref.validation,
      loadingListOptions = _ref.loadingListOptions,
      open = _ref.open,
      disabled = _ref.disabled,
      onKeyPress = _ref.onKeyPress,
      onblur = _ref.onblur,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Autocomplete, {
    style: {
      marginTop: '8px'
    },
    size: "small",
    margin: "dense",
    variant: "outlined",
    freeSolo: freeSolo,
    InputLabelProps: {
      shrink: true
    },
    fullWidth: true,
    open: open,
    disabled: disabled,
    options: options,
    loading: options,
    loadingText: "Carregando...",
    onBlur: onblur,
    value: value,
    onChange: onChange,
    inputValue: inputValue,
    onInputChange: onInputChange,
    onKeyPress: onKeyPress,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React__default.createElement(TextField, _extends({}, params, {
        error: handleError(inputValue, validation),
        helperText: inputValue ? "" : handleHelperText(validation),
        InputLabelProps: {
          shrink: true
        },
        label: title,
        InputProps: _extends({}, params.InputProps, {
          startAdornment: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, loadingListOptions ? /*#__PURE__*/React__default.createElement(CircularProgress, {
            color: "inherit",
            size: 15
          }) : null, params.InputProps.startAdornment)
        })
      }, other));
    }
  }));
};

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
  onChange: function onChange() {},
  inputValue: {},
  onInputChange: function onInputChange() {},
  onKeyPress: function onKeyPress() {},
  onblur: function onblur() {},
  validation: false,
  disabled: false,
  loadingListOptions: false
};
var CustomInputSelect$1 = React__default.memo(CustomInputSelect);

var _excluded$2 = ["label", "id", "value", "disabled", "onChange"];

var CustomTextField = function CustomTextField(_ref) {
  var label = _ref.label,
      id = _ref.id,
      value = _ref.value,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(TextField, _extends({
    size: "small",
    label: label,
    id: id,
    fullWidth: true,
    disabled: disabled,
    margin: "dense",
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    value: value,
    onChange: onChange
  }, other)));
};

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
  onChange: function onChange() {}
};
var CustomTextField$1 = React__default.memo(CustomTextField);

var _excluded$3 = ["id", "size", "label", "value", "mask", "onChange", "placeHolder", "ampm", "disabled"];
var style$9 = {
  date_picker: {
    padding: '9px 9px 9px 15px !important'
  }
};

var CustomTimePicker = function CustomTimePicker(_ref) {
  var size = _ref.size,
      label = _ref.label,
      value = _ref.value,
      mask = _ref.mask,
      onChange = _ref.onChange,
      placeHolder = _ref.placeHolder,
      ampm = _ref.ampm,
      disabled = _ref.disabled,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var _React$useState = React__default.useState(''),
      dateValidation = _React$useState[0],
      setDateValidation = _React$useState[1];

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(LocalizationProvider, {
    dateAdapter: AdapterDateFns,
    locale: ptBR
  }, /*#__PURE__*/React__default.createElement(TimePicker, {
    size: size,
    label: label,
    value: value,
    disabled: disabled,
    type: "datetime-local",
    ampm: ampm || false,
    mask: mask || "__:__",
    onError: function onError(e) {
      return setDateValidation(e);
    },
    onChange: onChange,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React__default.createElement(TextField$1, _extends({}, params, {
        id: "custom-time-picker",
        sx: {
          maxWidth: '120px'
        },
        inputProps: _extends({}, params.inputProps, {
          placeholder: placeHolder || "00:00",
          style: style$9.date_picker
        }),
        error: !value || dateValidation,
        onKeyDown: function onKeyDown(e) {
          return e.preventDefault();
        }
      }, other));
    }
  })));
};

CustomTimePicker.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.object,
  mask: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  ampm: PropTypes.bool,
  disabled: PropTypes.bool
};
CustomTimePicker.defaultProp = {
  id: "",
  size: '',
  label: "",
  value: {},
  mask: "__:__",
  onChange: function onChange() {},
  placeHolder: "00:00",
  ampm: false,
  disabled: false
};
var CustomTimePicker$1 = React__default.memo(CustomTimePicker);

var _excluded$4 = ["id", "size", "label", "value", "minDate", "maxDate", "dateFormat", "onChange", "placeHolder", "helperText", "disabled"];
var style$a = {
  date_picker: {
    padding: '9px 9px 9px 15px !important'
  }
};

var CustomDatePicker = function CustomDatePicker(_ref) {
  var size = _ref.size,
      label = _ref.label,
      value = _ref.value,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      dateFormat = _ref.dateFormat,
      onChange = _ref.onChange,
      placeHolder = _ref.placeHolder,
      helperText = _ref.helperText,
      disabled = _ref.disabled,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$4);

  var _React$useState = React__default.useState(''),
      dateValidation = _React$useState[0],
      setDateValidation = _React$useState[1];

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(LocalizationProvider, {
    dateAdapter: AdapterDateFns,
    locale: ptBR
  }, /*#__PURE__*/React__default.createElement(DatePicker, {
    size: size,
    label: label,
    value: value,
    disabled: disabled,
    minDate: minDate ? new Date(minDate) : undefined,
    maxDate: maxDate ? new Date(maxDate) : undefined,
    dateFormat: dateFormat || "MM-DD-YYYY",
    onError: function onError(e) {
      return setDateValidation(e);
    },
    onChange: onChange,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React__default.createElement(TextField$1, _extends({}, params, {
        inputProps: _extends({}, params.inputProps, {
          placeholder: placeHolder || "DD/MM/AAAA",
          style: style$a.date_picker
        }),
        id: "custom-date-picker",
        sx: {
          minWidth: '100px',
          marginTop: '5px'
        },
        error: !value || dateValidation,
        helperText: !value || dateValidation ? helperText || "Data ou Hora Invalida!" : "",
        onKeyDown: function onKeyDown(e) {
          return e.preventDefault();
        }
      }, other));
    }
  })));
};

CustomDatePicker.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.object,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool
};
CustomDatePicker.defaultProp = {
  id: "",
  size: "",
  label: "",
  value: {},
  minDate: undefined,
  maxDate: undefined,
  dateFormat: "MM-DD-YYYY",
  onChange: function onChange() {},
  placeHolder: "DD/MM/AAAA",
  helperText: "Data ou Hora Invalida!",
  disabled: false
};
var CustomDatePicker$1 = React__default.memo(CustomDatePicker);

var style$b = {
  appcontent: {
    transition: '0.4s',
    animation: 'fadeInAnimation ease 0.5s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '80px',
    maxWidth: '1195px'
  }
};

var AppContent = function AppContent(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    style: style$b.appcontent
  }, /*#__PURE__*/React__default.createElement(Backdrop, {
    sx: {
      color: '#fff',
      zIndex: function zIndex(theme) {
        return theme.zIndex.drawer + 1;
      }
    },
    open: props.loading
  }, /*#__PURE__*/React__default.createElement(CircularProgress$1, {
    color: "inherit"
  })), props.children);
};

AppContent.propTypes = {
  loading: PropTypes.bool
};
AppContent.defaultProp = {
  loading: false
};
var AppContent$1 = React__default.memo(AppContent);

export { AppContent$1 as AppContent, Conteiner, ConteinerItem, CustomDataTable$1 as CustomDataTable, CustomDatePicker$1 as CustomDatePicker, CustomDialog$1 as CustomDialog, CustomInputSelect$1 as CustomInputSelect, CustomModal$1 as CustomModal, CustomTextField$1 as CustomTextField, CustomTimePicker$1 as CustomTimePicker, CustomToastMessage$1 as CustomToastMessage, Header$1 as Header, HeaderAccordion$1 as HeaderAccordion, OperationDetail$1 as OperationDetail, OperationSection$1 as OperationSection, OperationTable$1 as OperationTable, PageBase$3 as PageBase, SaveComponent$1 as SaveComponent };
//# sourceMappingURL=index.modern.js.map
