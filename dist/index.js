function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var Tooltip = _interopDefault(require('@mui/material/Tooltip'));
var styles$8 = require('@mui/material/styles');
var ArrowForwardIosSharpIcon = _interopDefault(require('@mui/icons-material/ArrowForwardIosSharp'));
var MuiAccordion = _interopDefault(require('@mui/material/Accordion'));
var MuiAccordionSummary = _interopDefault(require('@mui/material/AccordionSummary'));
var MuiAccordionDetails = _interopDefault(require('@mui/material/AccordionDetails'));
var Typography = _interopDefault(require('@mui/material/Typography'));
var PushPinIcon = _interopDefault(require('@mui/icons-material/PushPin'));
var IconButton = _interopDefault(require('@mui/material/IconButton'));
var Dialog = _interopDefault(require('@mui/material/Dialog'));
var DialogContent = _interopDefault(require('@mui/material/DialogContent'));
var DialogTitle = _interopDefault(require('@mui/material/DialogTitle'));
var Button = _interopDefault(require('@mui/material/Button'));
var DialogActions = _interopDefault(require('@mui/material/DialogActions'));
var Stack = _interopDefault(require('@mui/material/Stack'));
var Snackbar = _interopDefault(require('@mui/material/Snackbar'));
var MuiAlert = _interopDefault(require('@mui/material/Alert'));
var AddCircleOutlineIcon = _interopDefault(require('@mui/icons-material/AddCircleOutline'));
var DeleteIcon = _interopDefault(require('@mui/icons-material/Delete'));
var DialogContentText = _interopDefault(require('@mui/material/DialogContentText'));
var FilterAltIcon = _interopDefault(require('@mui/icons-material/FilterAlt'));
var PrintIcon = _interopDefault(require('@mui/icons-material/Print'));
var datatable = require('primereact/datatable');
var column = require('primereact/column');
var CloseIcon = _interopDefault(require('@mui/icons-material/Close'));
var LoadingButton = _interopDefault(require('@mui/lab/LoadingButton'));
var CancelOutlinedIcon = _interopDefault(require('@mui/icons-material/CancelOutlined'));
var SaveOutlinedIcon = _interopDefault(require('@mui/icons-material/SaveOutlined'));
require('@mui/icons-material/ArrowBack');
require('@mui/icons-material/DeleteOutline');
var CheckIcon = _interopDefault(require('@mui/icons-material/Check'));
var AppBar = _interopDefault(require('@mui/material/AppBar'));
var Box = _interopDefault(require('@mui/material/Box'));
var Toolbar = _interopDefault(require('@mui/material/Toolbar'));
var InputBase = _interopDefault(require('@mui/material/InputBase'));
var Badge = _interopDefault(require('@mui/material/Badge'));
var MenuItem = _interopDefault(require('@mui/material/MenuItem'));
var Menu = _interopDefault(require('@mui/material/Menu'));
require('@mui/icons-material/Menu');
var SearchIcon = _interopDefault(require('@mui/icons-material/Search'));
var AccountCircle = _interopDefault(require('@mui/icons-material/AccountCircle'));
var MailIcon = _interopDefault(require('@mui/icons-material/Mail'));
var NotificationsIcon = _interopDefault(require('@mui/icons-material/Notifications'));
var MoreIcon = _interopDefault(require('@mui/icons-material/MoreVert'));
var AppsIcon = _interopDefault(require('@mui/icons-material/Apps'));

var styles = {"conteiner":"_Rj4Dd","conteiner_item":"_2LNxe","Conteiner_column_direction":"_2LqOX"};

var Conteiner = function Conteiner(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.conteiner
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
    className: " " + styles.conteiner_item + " " + styles.conteiner_item + " "
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

var styles$1 = {"page_base_content":"_4c6cY","page_base_header":"_3GZv7","agsi_theme_1":"_XSQoQ"};

var PageBase = function PageBase(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    id: props.id,
    style: props.style,
    className: styles$1.page_base_content
  }, props.header !== undefined && /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.page_base_header + " " + styles$1.agsi_theme_1
  }, /*#__PURE__*/React__default.createElement("label", null, props.header)), props.children);
};

var PageBase$1 = React__default.memo(PageBase);

var OperationDetail = function OperationDetail(props) {
  return /*#__PURE__*/React__default.createElement(PageBase$1, null, props.children);
};

var OperationDetail$1 = React__default.memo(OperationDetail);

var styles$2 = {"page_base_content":"_25FqD","page_base_header":"_173bO","agsi_theme_1":"_1li5A"};

var PageBase$2 = function PageBase(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    id: props.id,
    style: props.style,
    className: styles$2.page_base_content
  }, props.header !== undefined && /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.page_base_header + " " + styles$2.agsi_theme_1
  }, /*#__PURE__*/React__default.createElement("label", null, props.header)), props.children);
};

var PageBase$3 = React__default.memo(PageBase$2);

var styles$3 = {"operation_header_title":"_3eIUT","operation_header_subtitle":"_156PL"};

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

var styles$4 = {"header_accordion_conteiner":"_1eis1","header_accordion":"_14JJV","header_accordion_pin":"_1GTGO","css-i4bv87-MuiSvgIcon-root":"_2L0Q7"};

var Accordion = styles$8.styled(function (props) {
  return /*#__PURE__*/React.createElement(MuiAccordion, _extends({
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
var AccordionSummary = styles$8.styled(function (props) {
  return /*#__PURE__*/React.createElement(MuiAccordionSummary, _extends({
    expandIcon: !props.disableExpandedButton ? /*#__PURE__*/React.createElement(ArrowForwardIosSharpIcon, {
      style: {
        color: '#008EBC'
      },
      sx: {
        fontSize: '0.9rem'
      }
    }) : /*#__PURE__*/React.createElement("div", null)
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
var AccordionDetails = styles$8.styled(MuiAccordionDetails)(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)'
  };
});
function HeaderAccordion(props) {
  var _React$useState = React.useState('panel'),
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

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Accordion, {
    id: "header-accordion-conteiner",
    className: styles$4.header_accordion_conteiner,
    expanded: handleDisableExpand(props.disableExpandedButton, expanded),
    onChange: handleChange('panel')
  }, /*#__PURE__*/React.createElement(AccordionSummary, {
    disableExpandedButton: props.disableExpandedButton,
    "aria-controls": "paneld-content",
    id: "paneld-header"
  }, /*#__PURE__*/React.createElement(Conteiner, {
    className: styles$4.header_accordion_conteiner
  }, /*#__PURE__*/React.createElement(ConteinerItem, null, /*#__PURE__*/React.createElement(Typography, {
    style: {
      fontSize: '1.2rem'
    }
  }, props.header)), /*#__PURE__*/React.createElement(ConteinerItem, {
    className: styles$4.header_accordion
  }, !props.disableAttachButton && /*#__PURE__*/React.createElement(Tooltip, {
    title: props.titleTooltip
  }, /*#__PURE__*/React.createElement(IconButton, {
    className: styles$4.header_accordion_pin,
    size: "small",
    onClick: props.onClick
  }, /*#__PURE__*/React.createElement(PushPinIcon, null)))))), /*#__PURE__*/React.createElement(AccordionDetails, null, props.children)));
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
var HeaderAccordion$1 = React.memo(HeaderAccordion);

var CustomModal = function CustomModal(props) {
  var _React$useState = React.useState('paper'),
      scroll = _React$useState[0];

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dialog, {
    maxWidth: true,
    open: props.displayModal,
    onClose: props.onClose,
    scroll: scroll,
    "aria-labelledby": "scroll-dialog-title",
    "aria-describedby": "scroll-dialog-description"
  }, /*#__PURE__*/React.createElement(DialogTitle, {
    id: "scroll-dialog-title-modal"
  }, props.title), /*#__PURE__*/React.createElement(DialogContent, {
    dividers: scroll === 'paper'
  }, /*#__PURE__*/React.createElement("div", null, props.children)), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Conteiner, null, /*#__PURE__*/React.createElement(ConteinerItem, null, /*#__PURE__*/React.createElement(Button, {
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
var CustomModal$1 = React.memo(CustomModal);

var Alert = React.forwardRef(function Alert(props, ref) {
  return /*#__PURE__*/React.createElement(MuiAlert, _extends({
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
  return /*#__PURE__*/React.createElement(Stack, {
    spacing: 2,
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Snackbar, {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/React.createElement(Alert, {
    onClose: handleClose,
    severity: severity || "success",
    sx: {
      width: '100%'
    }
  }, message)));
}

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
    className: "" + styles$3.operation_header_title
  }, props.title), /*#__PURE__*/React__default.createElement("h5", {
    className: "" + styles$3.operation_header_subtitle
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

var styles$5 = {"operation_content_header":"_2VjIs","operation_content_header_search":"_20YGj","operation_content_data_table":"_3d57P","operation_content_group":"_j2w68"};

var styles$6 = {"content_data_table":"_2OVuW","display_border":"_Sl48w","p-datatable-row-expansion":"_3Dn5P"};

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
      rowExpansionTemplate = props.rowExpansionTemplate;
  var rowsTable = paginatorStep ? paginatorStep : 5;
  var pagArr = [rowsTable];

  var _useState = React.useState(null),
      expandedRows = _useState[0],
      setExpandedRows = _useState[1];

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
    className: styles$6.content_data_table + " " + (displayBorder ? "" + styles$6.display_border : '')
  }, /*#__PURE__*/React__default.createElement(datatable.DataTable, {
    value: records,
    paginator: paginator,
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
  }, displayExpander && /*#__PURE__*/React__default.createElement(column.Column, {
    expander: true,
    style: {
      width: '3em'
    }
  }), columnList.map(function (item, index) {
    if (item.body !== undefined) return /*#__PURE__*/React__default.createElement(column.Column, {
      key: index,
      style: item.style,
      sortable: item.sortable,
      body: item.body,
      header: item.header,
      frozen: item.frozen,
      alignFrozen: item.alignFrozen
    });else return /*#__PURE__*/React__default.createElement(column.Column, {
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
  onRowCollapse: PropTypes.func
};
CustomDataTable.defaultProp = {
  records: [],
  columnList: [],
  heigthDataTable: 0,
  displayBorder: false,
  paginator: false,
  displayExpander: false,
  onRowExpand: function onRowExpand() {},
  onRowCollapse: function onRowCollapse() {}
};
var CustomDataTable$1 = React__default.memo(CustomDataTable);

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
      columnList = props.columnList,
      display = props.display,
      onClick = props.onClick;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(PageBase$3, null, /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.operation_content_group
  }, /*#__PURE__*/React__default.createElement(Conteiner, null, /*#__PURE__*/React__default.createElement(ConteinerItem, {
    className: styles$5.operation_content_header + " " + styles$5.operation_content_header_search
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    id: "id_operation_content_search",
    style: {
      display: handleDisplay$1(display)
    },
    className: "icon-btn-blue",
    size: "large",
    onClick: onClick
  }, /*#__PURE__*/React__default.createElement(FilterAltIcon, {
    fontSize: "inherit"
  }))), /*#__PURE__*/React__default.createElement(ConteinerItem, {
    className: "" + styles$5.operation_content_header
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    className: "icon-btn-blue",
    size: "large",
    style: {
      marginRight: '7px'
    },
    onClick: onReportClick
  }, /*#__PURE__*/React__default.createElement(PrintIcon, {
    fontSize: "inherit"
  })), /*#__PURE__*/React__default.createElement(Button, {
    className: "btn-blue",
    startIcon: /*#__PURE__*/React__default.createElement(AddCircleOutlineIcon, null),
    variant: "contained",
    color: "success",
    onClick: onAddClick
  }, "Incluir"))), /*#__PURE__*/React__default.createElement(Conteiner, null, /*#__PURE__*/React__default.createElement(ConteinerItem, {
    className: "" + styles$5.operation_content_data_table
  }, /*#__PURE__*/React__default.createElement(CustomDataTable$1, {
    records: records,
    columnList: columnList
  }))))), /*#__PURE__*/React__default.createElement(Dialog, {
    open: deleteHandler.displayDelete,
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
  deleteHandler: PropTypes.shape({
    displayDelete: PropTypes.bool,
    onCancelClick: PropTypes.func,
    onDeleteClick: PropTypes.func
  }),
  records: PropTypes.arrayOf(PropTypes.object),
  columnList: PropTypes.arrayOf(PropTypes.object),
  heigthDataTable: PropTypes.number,
  display: PropTypes.bool,
  onClick: PropTypes.func
};
OperationTable.defaultProp = {
  onReportClick: function onReportClick() {},
  onAddClick: function onAddClick() {},
  deleteHandler: {
    displayDelete: false,
    onCancelClick: function onCancelClick() {},
    onDeleteClick: function onDeleteClick() {}
  },
  records: [],
  columnList: [],
  heigthDataTable: 0,
  display: false,
  onClick: function onClick() {}
};
var OperationTable$1 = React__default.memo(OperationTable);

var _excluded = ["children", "onClose"];
var BootstrapDialog = styles$8.styled(Dialog)(function (_ref) {
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

  return /*#__PURE__*/React.createElement(DialogTitle, _extends({
    sx: {
      m: 0,
      p: 2
    }
  }, other), children, onClose ? /*#__PURE__*/React.createElement(IconButton, {
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
  }, /*#__PURE__*/React.createElement(CloseIcon, null)) : null);
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BootstrapDialog, {
    onClose: onClose,
    "aria-labelledby": "customized-dialog-title",
    open: open
  }, /*#__PURE__*/React.createElement(BootstrapDialogTitle, {
    id: "customized-dialog-title",
    onClose: onClose
  }, title), /*#__PURE__*/React.createElement(DialogContent, {
    dividers: true
  }, /*#__PURE__*/React.createElement(Typography, {
    gutterBottom: true
  }, "\xA0\xA0\xA0\xA0\xA0", message, "\xA0\xA0\xA0\xA0\xA0")), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
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
var CustomDialog$1 = React.memo(CustomDialog);

var Alert$1 = React.forwardRef(function Alert(props, ref) {
  return /*#__PURE__*/React.createElement(MuiAlert, _extends({
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
  return /*#__PURE__*/React.createElement(Stack, {
    spacing: 2,
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Snackbar, {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/React.createElement(Alert$1, {
    onClose: handleClose,
    severity: severity || "success",
    sx: {
      width: '100%'
    }
  }, message)));
}

var stiles = {"save_component":"_2J9-W","save_component_item":"_3RCKk"};

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
    className: stiles.save_component_item,
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
    className: stiles.save_component
  }, /*#__PURE__*/React__default.createElement(ConteinerItem, null, /*#__PURE__*/React__default.createElement(Button, {
    className: stiles.save_component_item,
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

var styles$7 = {"topbar":"_37MjK","header_conteiner":"_3_CKL","header_item":"_1AuIN","grow_1":"_16YA5","grow_2":"_1scyM","grow_4":"_2LBlT","title_header":"_1Vdri","header_search_color":"_3wcm0","p_input_icon_left":"_3x7LE","title_header_search_margin":"_2u2NL","header_app_bar":"_2XRo0"};

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

var Search = styles$8.styled('div')(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: styles$8.alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: styles$8.alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%'
  }, _ref2[theme.breakpoints.up('sm')] = {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }, _ref2;
});
var SearchIconWrapper = styles$8.styled('div')(function (_ref3) {
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
var StyledInputBase = styles$8.styled(InputBase)(function (_ref4) {
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

  var _React$useState = React.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = React.useState(null),
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
  var renderMenu = /*#__PURE__*/React.createElement(Menu, {
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
  }, /*#__PURE__*/React.createElement(MenuItem, {
    onClick: handleMenuClose
  }, "Profile"), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: handleMenuClose
  }, "My account"));
  var mobileMenuId = 'primary-search-account-menu-mobile';
  var renderMobileMenu = /*#__PURE__*/React.createElement(Menu, {
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
  }, /*#__PURE__*/React.createElement(MenuItem, null, /*#__PURE__*/React.createElement(IconButton, {
    size: "large",
    "aria-label": "show 4 new mails",
    color: "inherit"
  }, /*#__PURE__*/React.createElement(Badge, {
    badgeContent: 4,
    color: "error"
  }, /*#__PURE__*/React.createElement(MailIcon, null))), /*#__PURE__*/React.createElement("p", null, "Messages")), /*#__PURE__*/React.createElement(MenuItem, null, /*#__PURE__*/React.createElement(IconButton, {
    size: "large",
    "aria-label": "show 17 new notifications",
    color: "inherit"
  }, /*#__PURE__*/React.createElement(Badge, {
    badgeContent: 17,
    color: "error"
  }, /*#__PURE__*/React.createElement(NotificationsIcon, null))), /*#__PURE__*/React.createElement("p", null, "Notifications")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: handleProfileMenuOpen
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "large",
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit"
  }, /*#__PURE__*/React.createElement(AccountCircle, null)), /*#__PURE__*/React.createElement("p", null, "Profile")));
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(AppBar, {
    className: styles$7.header_app_bar,
    position: "fixed"
  }, /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement(IconButton, {
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
  }, /*#__PURE__*/React.createElement(AppsIcon, null)), /*#__PURE__*/React.createElement(Typography, {
    variant: "h6",
    noWrap: true,
    component: "div",
    sx: {
      display: {
        xs: 'none',
        sm: 'block'
      }
    }
  }, title), /*#__PURE__*/React.createElement(Search, null, /*#__PURE__*/React.createElement(SearchIconWrapper, null, /*#__PURE__*/React.createElement(SearchIcon, null)), /*#__PURE__*/React.createElement(StyledInputBase, {
    placeholder: "Pesquisar...",
    inputProps: {
      'aria-label': 'search'
    }
  })), /*#__PURE__*/React.createElement(Box, {
    sx: {
      flexGrow: 1
    }
  }), /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: {
        xs: 'none',
        md: 'flex'
      }
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "large",
    "aria-label": "show 4 new mails",
    color: "inherit"
  }, /*#__PURE__*/React.createElement(Badge, {
    badgeContent: 4,
    color: "error"
  }, /*#__PURE__*/React.createElement(MailIcon, null))), /*#__PURE__*/React.createElement(IconButton, {
    size: "large",
    "aria-label": "show 17 new notifications",
    color: "inherit"
  }, /*#__PURE__*/React.createElement(Badge, {
    badgeContent: 17,
    color: "error"
  }, /*#__PURE__*/React.createElement(NotificationsIcon, null))), /*#__PURE__*/React.createElement(IconButton, {
    size: "large",
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "inherit"
  }, /*#__PURE__*/React.createElement(AccountCircle, null))), /*#__PURE__*/React.createElement(Box, {
    sx: {
      display: {
        xs: 'flex',
        md: 'none'
      }
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "large",
    "aria-label": "show more",
    "aria-controls": mobileMenuId,
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "inherit"
  }, /*#__PURE__*/React.createElement(MoreIcon, null))))), renderMobileMenu, renderMenu);
};

var Header$1 = React.memo(Header);

var StatusRecord = function StatusRecord(_ref) {
  var editing = _ref.editing;
  if (editing) return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("i", {
    className: "fas fa-edit"
  }), " Altera\xE7\xE3o");else return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("i", {
    className: "fas fa-plus-circle"
  }), " Inclus\xE3o");
};

var StatusRecord$1 = React__default.memo(StatusRecord);

exports.Conteiner = Conteiner;
exports.ConteinerItem = ConteinerItem;
exports.CustomDataTable = CustomDataTable$1;
exports.CustomDialog = CustomDialog$1;
exports.CustomModal = CustomModal$1;
exports.CustomToastMessage = CustomToastMessage$1;
exports.Header = Header$1;
exports.HeaderAccordion = HeaderAccordion$1;
exports.OperationDetail = OperationDetail$1;
exports.OperationSection = OperationSection$1;
exports.OperationTable = OperationTable$1;
exports.PageBase = PageBase$3;
exports.SaveComponent = SaveComponent$1;
exports.StatusRecord = StatusRecord$1;
//# sourceMappingURL=index.js.map
