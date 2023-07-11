function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var Tooltip = _interopDefault(require('@mui/material/Tooltip'));
var styles = require('@mui/material/styles');
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
var datatable = require('primereact/datatable');
var column = require('primereact/column');
var DeleteIcon = _interopDefault(require('@mui/icons-material/Delete'));
var DialogContentText = _interopDefault(require('@mui/material/DialogContentText'));
var FilterAltIcon = _interopDefault(require('@mui/icons-material/FilterAlt'));
var PrintIcon = _interopDefault(require('@mui/icons-material/Print'));
var paginator = require('primereact/paginator');
var SaveOutlinedIcon = _interopDefault(require('@mui/icons-material/SaveOutlined'));
var CancelOutlinedIcon = _interopDefault(require('@mui/icons-material/CancelOutlined'));
var CloseIcon = _interopDefault(require('@mui/icons-material/Close'));
var button = require('primereact/button');
var LoadingButton = _interopDefault(require('@mui/lab/LoadingButton'));
var CheckIcon = _interopDefault(require('@mui/icons-material/Check'));
var reactRouterDom = require('react-router-dom');
var AppBar = _interopDefault(require('@mui/material/AppBar'));
var Box$1 = _interopDefault(require('@mui/material/Box'));
var Toolbar = _interopDefault(require('@mui/material/Toolbar'));
var MenuItem = _interopDefault(require('@mui/material/MenuItem'));
var Menu = _interopDefault(require('@mui/material/Menu'));
var MenuIcon = _interopDefault(require('@mui/icons-material/Menu'));
var AccountCircle = _interopDefault(require('@mui/icons-material/AccountCircle'));
var AppsIcon = _interopDefault(require('@mui/icons-material/Apps'));
var ListItemIcon = _interopDefault(require('@mui/material/ListItemIcon'));
var ExitToAppIcon = _interopDefault(require('@mui/icons-material/ExitToApp'));
require('@mui/icons-material/FolderShared');
var Divider = _interopDefault(require('@mui/material/Divider'));
var Badge = _interopDefault(require('@mui/material/Badge'));
var NotificationsIcon = _interopDefault(require('@mui/icons-material/Notifications'));
var material = require('@mui/material');
var FormControlLabel = _interopDefault(require('@mui/material/FormControlLabel'));
var Switch = _interopDefault(require('@mui/material/Switch'));
var InputBase = _interopDefault(require('@mui/material/InputBase'));
var ManageAccountsIcon = _interopDefault(require('@mui/icons-material/ManageAccounts'));
var TextField = _interopDefault(require('@mui/material/TextField'));
var Autocomplete = _interopDefault(require('@mui/material/Autocomplete'));
var NumberFormat = _interopDefault(require('react-number-format'));
var CircularProgress$1 = _interopDefault(require('@mui/material/CircularProgress'));
var AdapterDateFns = require('@mui/x-date-pickers/AdapterDateFns');
var LocalizationProvider = require('@mui/x-date-pickers/LocalizationProvider');
var TimePicker = require('@mui/x-date-pickers/TimePicker');
var locale = require('date-fns/locale');
var DatePicker = require('@mui/x-date-pickers/DatePicker');
var Backdrop = _interopDefault(require('@mui/material/Backdrop'));
var toast = require('primereact/toast');
var fileupload = require('primereact/fileupload');
var progressbar = require('primereact/progressbar');
var tag = require('primereact/tag');
var tooltip = require('primereact/tooltip');
var PictureAsPdfIcon = _interopDefault(require('@mui/icons-material/PictureAsPdf'));
var FileDownloadIcon = _interopDefault(require('@mui/icons-material/FileDownload'));
var VisibilityIcon = _interopDefault(require('@mui/icons-material/Visibility'));
var image = require('primereact/image');
var List = _interopDefault(require('@mui/material/List'));
var ListItem = _interopDefault(require('@mui/material/ListItem'));
var ListItemButton = _interopDefault(require('@mui/material/ListItemButton'));
var ListItemText = _interopDefault(require('@mui/material/ListItemText'));
var Checkbox = _interopDefault(require('@mui/material/Checkbox'));
var Grid = _interopDefault(require('@mui/material/Unstable_Grid2'));
var SearchIcon = _interopDefault(require('@mui/icons-material/Search'));
var DescriptionIcon = _interopDefault(require('@mui/icons-material/Description'));
var DataSaverOnIcon = _interopDefault(require('@mui/icons-material/DataSaverOn'));
var GroupWorkIcon = _interopDefault(require('@mui/icons-material/GroupWork'));
var jspdf = require('jspdf');
var autoTable = _interopDefault(require('jspdf-autotable'));
var reactDnd = require('react-dnd');
var reactDndTreeview = require('@minoru/react-dnd-treeview');
var FolderIcon = _interopDefault(require('@mui/icons-material/Folder'));
var ArrowRightIcon = _interopDefault(require('@mui/icons-material/ArrowRight'));
var RadioGroup = _interopDefault(require('@mui/material/RadioGroup'));
var Radio = _interopDefault(require('@mui/material/Radio'));
var FormGroup = _interopDefault(require('@mui/material/FormGroup'));
var FormLabel = _interopDefault(require('@mui/material/FormLabel'));
var Select = _interopDefault(require('@mui/material/Select'));
var InputLabel = _interopDefault(require('@mui/material/InputLabel'));
var FormControl = _interopDefault(require('@mui/material/FormControl'));
var Modal = _interopDefault(require('@mui/material/Modal'));
require('primeicons/primeicons.css');
require('primereact/resources/themes/lara-light-indigo/theme.css');
require('primereact/resources/primereact.css');
require('primeflex/primeflex.css');
var Paper = _interopDefault(require('@mui/material/Paper'));
var ErrorIcon = _interopDefault(require('@mui/icons-material/Error'));
var SaveIcon = _interopDefault(require('@mui/icons-material/Save'));
var DownloadDoneRoundedIcon = _interopDefault(require('@mui/icons-material/DownloadDoneRounded'));
var Tabs = _interopDefault(require('@mui/material/Tabs'));
var Tab = _interopDefault(require('@mui/material/Tab'));
var AddCircleOutlineRoundedIcon = _interopDefault(require('@mui/icons-material/AddCircleOutlineRounded'));
var PostAddRoundedIcon = _interopDefault(require('@mui/icons-material/PostAddRounded'));
var DeleteSweepIcon = _interopDefault(require('@mui/icons-material/DeleteSweep'));
require('react-is');
var emStyled = _interopDefault(require('@emotion/styled'));
require('@emotion/react');
var jsxRuntime = require('react/jsx-runtime');

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
    flexDirection: 'row!important',
    flexWrap: 'wrap'
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
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
Conteiner.defaultProp = {
  className: '',
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
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
ConteinerItem.defaultProp = {
  className: ''
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
var PageBase$1 = /*#__PURE__*/React__default.memo(PageBase);

var OperationDetail = function OperationDetail(props) {
  return /*#__PURE__*/React__default.createElement(PageBase$1, null, props.children);
};
var OperationDetail$1 = /*#__PURE__*/React__default.memo(OperationDetail);

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
var PageBase$3 = /*#__PURE__*/React__default.memo(PageBase$2);

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
var Accordion = styles.styled(function (props) {
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
var AccordionSummary = styles.styled(function (props) {
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
var AccordionDetails = styles.styled(MuiAccordionDetails)(function (_ref3) {
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
    style: style$3.header_accordion_conteiner,
    expanded: handleDisableExpand(props.disableExpandedButton, expanded),
    onChange: handleChange('panel')
  }, /*#__PURE__*/React.createElement(AccordionSummary, {
    disableExpandedButton: props.disableExpandedButton,
    "aria-controls": "paneld-content",
    id: "paneld-header"
  }, /*#__PURE__*/React.createElement(Conteiner, null, /*#__PURE__*/React.createElement(ConteinerItem, null, /*#__PURE__*/React.createElement(Typography, {
    style: {
      fontSize: '1.2rem'
    }
  }, props.header)), /*#__PURE__*/React.createElement(ConteinerItem, {
    style: style$3.header_accordion
  }, !props.disableAttachButton && /*#__PURE__*/React.createElement(Tooltip, {
    title: props.titleTooltip
  }, /*#__PURE__*/React.createElement(IconButton, {
    style: style$3.header_accordion_pin,
    size: "small",
    onClick: props.onClick
  }, /*#__PURE__*/React.createElement(PushPinIcon, null)))))), /*#__PURE__*/React.createElement(AccordionDetails, null, props.children)));
}
HeaderAccordion.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
var HeaderAccordion$1 = /*#__PURE__*/React.memo(HeaderAccordion);

var style$4 = {
  search_modal: {
    justifyContent: 'flex-end'
  },
  search_modal_item: {
    flex: 'none!important'
  }
};
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
  }, /*#__PURE__*/React.createElement("div", null, props.children)), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Conteiner, {
    style: style$4.search_modal
  }, /*#__PURE__*/React.createElement(ConteinerItem, {
    style: style$4.search_modal_item
  }, /*#__PURE__*/React.createElement(Button, {
    autoFocus: true,
    onClick: props.onCloseDialog
  }, "Fechar")), props.buttonAdditional !== null && props.buttonAdditional))));
};
CustomModal.propTypes = {
  displayModal: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClose: PropTypes.string,
  onCloseDialog: PropTypes.func,
  title: PropTypes.bool,
  buttonAdditional: PropTypes.object
};
CustomModal.defaultProp = {
  displayModal: false,
  onClose: function onClose() {},
  onCloseDialog: function onCloseDialog() {},
  title: '',
  buttonAdditional: null
};
var CustomModal$1 = /*#__PURE__*/React.memo(CustomModal);

var Alert = /*#__PURE__*/React.forwardRef(function Alert(props, ref) {
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
    severity: severity || 'success',
    sx: {
      width: '100%'
    }
  }, message)));
}

var style$5 = {
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
  return /*#__PURE__*/React__default.createElement("div", {
    className: props.className,
    style: props.style
  }, props.title && /*#__PURE__*/React__default.createElement("h2", {
    style: style$5.operation_header_title
  }, props.title), props.subTitle && /*#__PURE__*/React__default.createElement("h5", {
    style: style$5.operation_header_subtitle
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
  title: '',
  subTitle: '',
  onCloseDialog: function onCloseDialog() {},
  displayModal: false,
  disableAttachButton: false,
  disableExpandedButton: false,
  titleHeader: '',
  onClick: function onClick() {},
  buttonAdditional: null,
  toastMessages: {
    open: false,
    message: '',
    severity: '',
    handleClose: function handleClose() {}
  }
};
var OperationSection$1 = /*#__PURE__*/React__default.memo(OperationSection);

var style$6 = {
  operation_content_header: {
    textAlign: 'end',
    marginBottom: '5px',
    padding: '8px',
    minHeight: '68px',
    borderBottom: 'solid 1px rgba(0, 0, 0, .125)'
  },
  operation_content_header_search: {
    textAlign: 'start',
    padding: '8px',
    minHeight: '68px',
    marginBottom: '5px',
    borderBottom: 'solid 1px rgba(0, 0, 0, .125)'
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
  },
  loadingPaginator: {
    pointerEvents: 'none',
    borderRadius: 0,
    zIndex: 1000
  }
};
var handleDisplay$1 = function handleDisplay(display) {
  if (display === undefined) return 'none';else {
    return display ? 'inline-flex' : 'none';
  }
};
var OperationTable = function OperationTable(props) {
  var _pageableData$pageabl;
  var onReportClick = props.onReportClick,
    onAddClick = props.onAddClick,
    deleteHandler = props.deleteHandler,
    records = props.records,
    columnList = props.columnList,
    heigthDataTable = props.heigthDataTable,
    display = props.display,
    onClick = props.onClick,
    sortField = props.sortField,
    sortOrder = props.sortOrder,
    paginatorButton = props.paginatorButton,
    pageableData = props.pageableData;
  var printIcon = props.printIcon == false ? props.printIcon : true;
  var _useState = React.useState(false),
    loading = _useState[0],
    setLoading = _useState[1];
  var _useState2 = React.useState(0),
    first = _useState2[0],
    setFirst = _useState2[1];
  var _useState3 = React.useState(pageableData === null || pageableData === void 0 ? void 0 : (_pageableData$pageabl = pageableData.pageable) === null || _pageableData$pageabl === void 0 ? void 0 : _pageableData$pageabl.pageSize),
    rows = _useState3[0],
    setRows = _useState3[1];
  var totalRecords = pageableData === null || pageableData === void 0 ? void 0 : pageableData.totalElements;
  React.useEffect(function () {
    setLoading(false);
  }, [pageableData]);
  var onPageChange = function onPageChange(e) {
    setLoading(true);
    paginatorButton.onClick(e);
    setFirst(e.first);
    setRows(e.rows);
  };
  var template = {
    layout: 'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
  };
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(PageBase$3, null, /*#__PURE__*/React__default.createElement("div", {
    style: style$6.operation_content_group
  }, /*#__PURE__*/React__default.createElement(Conteiner, null, /*#__PURE__*/React__default.createElement(ConteinerItem, {
    style: style$6.operation_content_header_search
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
    style: style$6.operation_content_header
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
    style: style$6.operation_content_data_table
  }, /*#__PURE__*/React__default.createElement(datatable.DataTable, {
    value: records,
    paginatorTemplate: template,
    sortField: sortField,
    sortOrder: sortOrder,
    responsiveLayout: "scroll",
    loading: loading,
    size: "small",
    emptyMessage: 'Nenhum resultado encontrado',
    scrollHeight: heigthDataTable
  }, columnList.map(function (item, index) {
    if (item.body !== undefined) return /*#__PURE__*/React__default.createElement(column.Column, {
      key: index,
      style: item.style,
      sortable: item.sortable,
      field: item === null || item === void 0 ? void 0 : item.field,
      body: item.body,
      header: item.header,
      frozen: item.frozen,
      alignFrozen: item.alignFrozen,
      dataType: item.dataType
    });else return /*#__PURE__*/React__default.createElement(column.Column, {
      key: index,
      style: item.style,
      sortable: item.sortable,
      field: item === null || item === void 0 ? void 0 : item.field,
      header: item.header,
      frozen: item.frozen,
      dataType: item.dataType
    });
  })), pageableData && /*#__PURE__*/React__default.createElement(paginator.Paginator, {
    style: loading ? style$6.loadingPaginator : {},
    template: template,
    onPageChange: onPageChange,
    first: first,
    rows: rows,
    totalRecords: totalRecords,
    currentPageReportTemplate: 'Mostrando {first} a {last} de {totalRecords}',
    rowsPerPageOptions: [10, 20, 30, 50]
  }))))), /*#__PURE__*/React__default.createElement(Dialog, {
    open: deleteHandler === null || deleteHandler === void 0 ? void 0 : deleteHandler.displayDelete,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(DialogTitle, {
    id: "alert-dialog-title"
  }, "Confirma\xE7\xE3o"), /*#__PURE__*/React__default.createElement(DialogContent, null, /*#__PURE__*/React__default.createElement(DialogContentText, {
    id: "alert-dialog-description"
  }, "Tem certeza que deseja excluir ?")), /*#__PURE__*/React__default.createElement(DialogActions, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React__default.createElement(Button, {
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
    title: 'Carregar mais..',
    onClick: function onClick() {}
  }
};
var OperationTable$1 = /*#__PURE__*/React__default.memo(OperationTable);

var style$7 = {
  operation_modal_bottom_bar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  operation_modal_bottom_bar_item: {
    flex: '1'
  },
  operation_modal_bottom_bar_item_right_align: {
    flex: '1',
    textAlign: 'right'
  },
  right_align: {
    textAlign: 'right'
  }
};
var handleLoading = function handleLoading(text, isLoading) {
  return isLoading ? /*#__PURE__*/React.createElement(CircularProgress, null) : text;
};
var LoadingComponent = function LoadingComponent(_ref) {
  var display = _ref.display;
  if (display !== undefined) return handleLoading('', display);
};
var OperationModal = function OperationModal(props) {
  var _React$useState = React.useState('paper'),
    scroll = _React$useState[0];
  var _React$useState2 = React.useState({
      display: false,
      confirmed: false
    }),
    displayConfirm = _React$useState2[0],
    setDisplayConfirm = _React$useState2[1];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dialog, {
    maxWidth: true,
    open: props.displayModal,
    onClose: props.onClose,
    scroll: scroll,
    "aria-labelledby": "scroll-dialog-title",
    "aria-describedby": "scroll-dialog-description"
  }, /*#__PURE__*/React.createElement(DialogTitle, {
    id: "scroll-dialog-title"
  }, (props.editMode ? 'Editar' : 'Incluir') + " " + (props.title || '')), /*#__PURE__*/React.createElement(DialogContent, {
    dividers: scroll === 'paper'
  }, /*#__PURE__*/React.createElement("div", null, props.children)), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement("div", {
    style: style$7.operation_modal_bottom_bar
  }, /*#__PURE__*/React.createElement("div", {
    style: style$7.operation_modal_bottom_bar_item
  }, /*#__PURE__*/React.createElement(LoadingComponent, {
    display: props.displayLoadingSave
  })), /*#__PURE__*/React.createElement("div", {
    style: style$7.operation_modal_bottom_bar_item_right_align
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      marginRight: '8px'
    },
    variant: "contained",
    startIcon: /*#__PURE__*/React.createElement(CancelOutlinedIcon, null),
    onClick: props.onCancel
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    color: "success",
    variant: "contained",
    endIcon: /*#__PURE__*/React.createElement(SaveOutlinedIcon, null),
    onClick: function onClick() {
      return setDisplayConfirm({
        display: true,
        confirmed: false
      });
    }
  }, "Salvar"))))), /*#__PURE__*/React.createElement(Dialog, {
    open: displayConfirm.display,
    onClose: function onClose() {
      return setDisplayConfirm({
        display: false,
        confirmed: false
      });
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React.createElement(DialogTitle, {
    id: "alert-dialog-title"
  }, "Confirma\xE7\xE3o"), /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(DialogContentText, {
    id: "alert-dialog-description"
  }, "Confirma a grava\xE7\xE3o ?")), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    onClick: function onClick() {
      return setDisplayConfirm({
        display: false,
        confirmed: false
      });
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "success",
    onClick: function onClick() {
      setDisplayConfirm({
        display: false,
        confirmed: true
      });
      props.onSave();
    },
    autoFocus: true
  }, "Confirmar"))));
};
var OperationModal$1 = /*#__PURE__*/React.memo(OperationModal);

var _excluded = ["children", "onClose"];
var BootstrapDialog = styles.styled(Dialog)(function (_ref) {
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
  title: '',
  message: '',
  open: false
};
var CustomDialog$1 = /*#__PURE__*/React.memo(CustomDialog);

var style$8 = {
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
    paginatorButton = props.paginatorButton,
    loading = props.loading;
  var rowsTable = paginatorStep ? paginatorStep : 5;
  var pagArr = [rowsTable];
  var _useState = React.useState(null),
    expandedRows = _useState[0],
    setExpandedRows = _useState[1];
  var paginatorRight = paginatorButton !== undefined ? /*#__PURE__*/React__default.createElement(button.Button, {
    label: (paginatorButton === null || paginatorButton === void 0 ? void 0 : paginatorButton.title) !== undefined ? paginatorButton === null || paginatorButton === void 0 ? void 0 : paginatorButton.title : 'Carregar mais...',
    style: style$8.paginatorRight,
    type: "button",
    icon: "pi pi-refresh",
    className: "p-button-text",
    onClick: paginatorButton.onClick
  }) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null);
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
    style: displayBorder ? style$8.content_data_table_display_border : style$8.content_data_table
  }, /*#__PURE__*/React__default.createElement(datatable.DataTable, {
    value: records,
    loading: loading,
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
    currentPageReportTemplate: 'Mostrando {first} a {last} de {totalRecords}',
    size: "small",
    rows: rowsTable,
    emptyMessage: 'Nenhum resultado encontrado',
    rowsPerPageOptions: calPerPage(),
    scrollHeight: heigthDataTable
  }, displayExpander && /*#__PURE__*/React__default.createElement(column.Column, {
    expander: true,
    style: {
      width: '3em'
    }
  }), columnList === null || columnList === void 0 ? void 0 : columnList.map(function (item, index) {
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
    title: 'Carregar mais..',
    onClick: function onClick() {}
  }
};
var CustomDataTable$1 = /*#__PURE__*/React__default.memo(CustomDataTable);

var style$9 = {
  save_component: {
    textAlign: 'end',
    marginTop: '15px'
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
    style: style$9.save_component_item,
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
var SaveComponent = function SaveComponent(_ref2) {
  var onCancelClick = _ref2.onCancelClick,
    onSaveClick = _ref2.onSaveClick;
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
    style: style$9.save_component
  }, /*#__PURE__*/React__default.createElement(ConteinerItem, null, /*#__PURE__*/React__default.createElement(Button, {
    style: style$9.save_component_item,
    variant: "outlined",
    startIcon: /*#__PURE__*/React__default.createElement(CancelOutlinedIcon, null),
    onClick: onCancelClick
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
        return Promise.resolve(onSaveClick()).then(function () {
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
var SaveComponent$1 = /*#__PURE__*/React__default.memo(SaveComponent);

var style$a = {
  width: 85,
  height: 80,
  margin: '10px',
  borderRadius: '2px',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#DDF1FB',
    opacity: [0.9, 0.8, 0.7]
  }
};
function HeaderApp(_ref) {
  var title = _ref.title,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Box$1, {
    sx: style$a,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "box-menu"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/AgsiSistemas/agsi.br.componente/master/public/img/IconsModules/" + title.toUpperCase() + ".png",
    alt: title
  }), /*#__PURE__*/React.createElement("p", null, title)));
}

var authorities = {
  ROLE_ROOT: 'ROLE_ROOT',
  ROLE_BENEFICIARIO: 'ROLE_BENEFICIARIO'
};

var ToggleSideBar = function ToggleSideBar() {
  if (document.getElementById("layout-sidebar").style.display !== 'none') {
    document.getElementById("layout-sidebar").style.display = 'none';
  } else {
    document.getElementById("layout-sidebar").style.display = 'block';
  }
};
var Search = styles.styled('div')(function (_ref) {
  var _ref2;
  var theme = _ref.theme;
  return _ref2 = {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: styles.alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: styles.alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%'
  }, _ref2[theme.breakpoints.up('sm')] = {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }, _ref2;
});
var SearchIconWrapper = styles.styled('div')(function (_ref3) {
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
var StyledInputBase = styles.styled(InputBase)(function (_ref4) {
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
var removeToken = function removeToken() {
  return localStorage.removeItem('agsi-tk');
};
var setRememberMenuLocalStorage = function setRememberMenuLocalStorage(status) {
  localStorage.setItem('RememberMenu', status);
};
var getRememberMenuLocalStorage = function getRememberMenuLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem('RememberMenu'));
  } catch (_unused3) {
    return true;
  }
};
function roleUserBeneficiarie() {
  var agsiJwt = localStorage.getItem('agsi-tk') ? parseJwt(localStorage.getItem('agsi-tk')) : '';
  if (!agsiJwt) {
    return;
  }
  if (agsiJwt.authorities.includes(authorities.ROLE_BENEFICIARIO)) {
    console.log(agsiJwt.code);
    return {
      'wallet': agsiJwt.code
    };
  } else {
    return false;
  }
}
var roleUserAGSI = function roleUserAGSI() {
  var agsiJwt = localStorage.getItem('agsi-tk') ? parseJwt(localStorage.getItem('agsi-tk')) : '';
  if (!agsiJwt) return false;
  if (agsiJwt.code.trim() == 'AGSI') return true;
  return false;
};
var parseJwt = function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};
var getOperator = function getOperator() {
  try {
    var token = localStorage.getItem('agsi-tk');
    var decodedToken = parseJwt(token);
    return decodedToken.code.replace(/\s/g, '');
  } catch (_unused4) {
    return "";
  }
};

function MenuAppList(_ref) {
  var open = _ref.open,
    children = _ref.children;
  var _React$useState = React.useState(getRememberMenuLocalStorage()),
    switchDisplayMenu = _React$useState[0],
    setSwitchDisplayMenu = _React$useState[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "basic-menu",
    className: open ? 'menu-app-list' : 'menu-app-list-none'
  }, /*#__PURE__*/React.createElement("div", {
    id: "toggle-menu-apps",
    style: {
      textAlign: 'right',
      color: 'gray'
    }
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    label: /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: '14px'
      }
    }, "Fixar"),
    className: "menu-apps",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: switchDisplayMenu,
      className: "menu-apps",
      onChange: function onChange() {
        setSwitchDisplayMenu(!switchDisplayMenu);
        setRememberMenuLocalStorage(!switchDisplayMenu);
      }
    })
  })), /*#__PURE__*/React.createElement(Divider, {
    variant: "middle"
  }), children));
}

var BarMessageTest = function BarMessageTest() {
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "bar-test-message-content"
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("b", null, "Ambiente de Teste e Desenvolvimento!"), /*#__PURE__*/React__default.createElement("em", null, "\"Altera\xE7\xF5es N\xC3O fazem efeito no Banco de dados Produ\xE7\xE3o!\""))));
};

var Header = function Header(_ref) {
  var title = _ref.title,
    linkTitle = _ref.linkTitle,
    _ref$listApp = _ref.listApp,
    listApp = _ref$listApp === void 0 ? [] : _ref$listApp,
    loadingListApp = _ref.loadingListApp,
    notification = _ref.notification,
    manageAccess = _ref.manageAccess,
    barTest = _ref.barTest;
  var navigate = reactRouterDom.useNavigate();
  var _React$useState = React.useState(getRememberMenuLocalStorage()),
    openMenu = _React$useState[0],
    setOpenMenu = _React$useState[1];
  var _React$useState2 = React.useState(null),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];
  var _React$useState3 = React.useState(null),
    mobileMoreAnchorEl = _React$useState3[0],
    setMobileMoreAnchorEl = _React$useState3[1];
  var isMenuOpen = Boolean(anchorEl);
  var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  var handleClick = function handleClick(event) {
    var remember = getRememberMenuLocalStorage();
    setOpenMenu(remember ? remember : !openMenu);
  };
  window.addEventListener('mousedown', function (e) {
    var remember = getRememberMenuLocalStorage();
    var boxMenu = document.querySelector('.menu-app-list');
    var iconMenu = document.querySelector('#menu-apps');
    if (!boxMenu || !iconMenu) return;
    if (boxMenu.contains(e.target)) {
      return;
    }
    if (iconMenu.contains(e.target)) {
      return;
    }
    if (!remember && openMenu) setOpenMenu(false);
  });
  var handleProfileMenuOpen = function handleProfileMenuOpen(event) {
    var remember = getRememberMenuLocalStorage();
    if (!remember && openMenu) setOpenMenu(false);
    setAnchorEl(event.currentTarget);
  };
  var handleMobileMenuClose = function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  };
  var handleMenuClose = function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  var handleExit = function handleExit() {
    removeToken();
    navigate("/");
    window.location.reload();
  };
  var skeletonListApp = function skeletonListApp() {
    var n = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    if (!loadingListApp) return;
    if (loadingListApp) {
      return n.map(function () {
        return /*#__PURE__*/React.createElement("div", {
          className: "box-menu"
        }, /*#__PURE__*/React.createElement(Box$1, {
          sx: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '10px'
          }
        }, /*#__PURE__*/React.createElement(material.Skeleton, {
          sx: {
            marginBottom: '5px'
          },
          variant: "circular",
          width: 40,
          height: 40
        }), /*#__PURE__*/React.createElement(material.Skeleton, {
          variant: "rectangular",
          width: 60,
          height: 10
        })));
      });
    }
  };
  var menuId = 'primary-search-account-menu';
  var renderMenu = /*#__PURE__*/React.createElement(Menu, {
    onClose: handleMenuClose,
    anchorEl: anchorEl,
    open: isMenuOpen,
    id: menuId,
    keepMounted: true,
    style: {
      marginTop: '7px',
      marginLeft: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '200px'
    }
  }, /*#__PURE__*/React.createElement(MenuItem, {
    className: "header-component-current-operator"
  }, "Usu\xE1rio: " + getOperator()), /*#__PURE__*/React.createElement(Divider, {
    sx: {
      width: '90%',
      ml: 1
    }
  }), manageAccess && roleUserAGSI() && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuItem, {
    onClick: function onClick() {
      handleMenuClose();
      manageAccess.onClick();
    }
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(ManageAccountsIcon, {
    fontSize: "small"
  })), "Gerenciar Acessos"), /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: function onClick() {
      return handleExit();
    }
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(ExitToAppIcon, {
    fontSize: "small"
  })), "Sair")));
  var handleRedirectLinkNameMenu = function handleRedirectLinkNameMenu(link) {
    if (!link) return;
    navigate(link);
    window.location.reload();
  };
  var mobileMenuId = 'primary-search-account-menu-mobile';
  var renderMobileMenu = /*#__PURE__*/React.createElement(Menu, {
    onClose: handleMobileMenuClose,
    anchorEl: mobileMoreAnchorEl,
    open: isMobileMenuOpen,
    id: mobileMenuId,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    keepMounted: true
  }, /*#__PURE__*/React.createElement(MenuItem, {
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "small",
    "aria-haspopup": "true",
    color: "inherit"
  }, /*#__PURE__*/React.createElement(AppsIcon, null)), /*#__PURE__*/React.createElement("p", null, "M\xF3dulos")));
  return /*#__PURE__*/React.createElement(Box$1, {
    sx: {
      flexGrow: 1
    }
  }, barTest && /*#__PURE__*/React.createElement(BarMessageTest, null), /*#__PURE__*/React.createElement(AppBar, {
    sx: barTest && {
      top: '15px'
    },
    className: "header-app-bar",
    position: "fixed"
  }, /*#__PURE__*/React.createElement(Toolbar, null, linkTitle !== '/' && /*#__PURE__*/React.createElement(IconButton, {
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
  }, /*#__PURE__*/React.createElement(material.Tooltip, {
    title: "Menu"
  }, /*#__PURE__*/React.createElement(MenuIcon, null))), /*#__PURE__*/React.createElement(Box$1, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "h6",
    noWrap: true,
    component: "div",
    sx: {
      display: {
        xs: 'none',
        sm: 'block'
      },
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return linkTitle && handleRedirectLinkNameMenu(linkTitle);
    }
  }, title)), /*#__PURE__*/React.createElement(Box$1, {
    sx: {
      flexGrow: 1
    }
  }), /*#__PURE__*/React.createElement(Box$1, {
    sx: {
      display: {
        xs: 'none',
        md: 'flex'
      },
      marginRight: '15px'
    }
  }, notification && /*#__PURE__*/React.createElement(IconButton, {
    size: "large",
    "aria-label": "show more",
    "aria-haspopup": "true",
    color: "inherit"
  }, /*#__PURE__*/React.createElement(Badge, {
    color: "error",
    badgeContent: notification.notificationUnread
  }, /*#__PURE__*/React.createElement(material.Tooltip, {
    title: "Notifica\xE7\xF5es"
  }, /*#__PURE__*/React.createElement(NotificationsIcon, {
    onClick: notification.onClick
  }))))), /*#__PURE__*/React.createElement(Box$1, {
    id: "menu-apps",
    sx: {
      display: {
        xs: 'flex',
        md: 'flex'
      }
    }
  }, !roleUserBeneficiarie() && /*#__PURE__*/React.createElement(IconButton, {
    id: "app-menu",
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "M\xF3dulos",
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(material.Tooltip, {
    title: "Aplicativos"
  }, /*#__PURE__*/React.createElement(AppsIcon, null))), /*#__PURE__*/React.createElement(IconButton, {
    size: "large",
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "inherit"
  }, /*#__PURE__*/React.createElement(material.Tooltip, {
    title: "Usu\xE1rio"
  }, /*#__PURE__*/React.createElement(AccountCircle, null)))))), renderMobileMenu, renderMenu, /*#__PURE__*/React.createElement(MenuAppList, {
    open: openMenu
  }, /*#__PURE__*/React.createElement("section", {
    className: "grid grid-template-columns-4"
  }, skeletonListApp(), listApp.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Box$1, {
      key: index
    }, /*#__PURE__*/React.createElement(HeaderApp, {
      index: index,
      title: item.title,
      onClick: function onClick() {
        if (item.link.includes('http')) {
          window.open(item.link, "_blank");
        } else {
          navigate(item.link);
          window.location.reload();
        }
      }
    }));
  }))));
};
var Header$1 = /*#__PURE__*/React.memo(Header);

var _excluded$1 = ["title", "options", "loading", "value", "freeSolo", "onChange", "inputValue", "onInputChange", "validation", "loadingListOptions", "open", "disabled", "onKeyPress", "onOpen", "onblur", "maxLength"];
var isNullValue = function isNullValue(value) {
  return value === undefined || value === null || value === '';
};
var handleHelperText = function handleHelperText(value, validation) {
  return isNullValue(value) && validation ? 'Campo obrigatório' : '';
};
var handleError = function handleError(value, validation) {
  return isNullValue(value) && validation;
};
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var CustomInputSelect = function CustomInputSelect(_ref) {
  var title = _ref.title,
    options = _ref.options,
    loading = _ref.loading,
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
    onOpen = _ref.onOpen,
    onblur = _ref.onblur,
    maxLength = _ref.maxLength,
    other = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var _useState = React.useState(''),
    internalInputValue = _useState[0],
    setInternalInputValue = _useState[1];
  var handleInternalOnInputChange = function handleInternalOnInputChange(event, newValue) {
    setInternalInputValue(newValue);
  };
  var handleIsLoading = function handleIsLoading() {
    if (typeof loading == 'boolean') {
      return loading;
    }
    if (typeof loading == 'number') {
      if (loading <= 0) {
        return true;
      } else {
        return false;
      }
    }
  };
  var returnLoadingText = function returnLoadingText() {
    return /*#__PURE__*/React__default.createElement(material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React__default.createElement(material.CircularProgress, {
      size: 20
    }));
  };
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
    onOpen: onOpen,
    disabled: disabled,
    options: options || [],
    noOptionsText: 'Nenhum Resultado.',
    loading: handleIsLoading(),
    loadingText: returnLoadingText(),
    onBlur: onblur,
    value: value,
    onChange: onChange,
    inputValue: inputValue ? inputValue : internalInputValue,
    onInputChange: onInputChange ? onInputChange : handleInternalOnInputChange,
    onKeyPress: onKeyPress,
    isOptionEqualToValue: function isOptionEqualToValue(option, value) {
      return option.label === value.label;
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React__default.createElement(TextField, _extends({}, params, {
        inputProps: _extends({}, params.inputProps, {
          maxLength: maxLength
        }),
        error: handleError(value, validation),
        helperText: handleHelperText(value, validation),
        InputLabelProps: {
          shrink: true
        },
        label: title,
        InputProps: _extends({}, params.InputProps, {
          startAdornment: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, loadingListOptions ? /*#__PURE__*/React__default.createElement(material.CircularProgress, {
            color: "inherit",
            size: 15
          }) : null, params.InputProps.startAdornment)
        }),
        onKeyDown: function onKeyDown(e) {
          if (inputValue && (e.key == 'Enter' || e.key == 'Tab') && inputValue.length <= 2 && isNumber(inputValue)) {
            var values = options.filter(function (x) {
              return x.id == inputValue;
            });
            onChange('mokEvent', values[0]);
            return;
          }
          if (internalInputValue && (e.key == 'Enter' || e.key == 'Tab') && internalInputValue.length <= 2 && isNumber(internalInputValue)) {
            var _values = options.filter(function (x) {
              return x.id == internalInputValue;
            });
            onChange('mokEvent', _values[0]);
          }
        }
      }, other));
    }
  }));
};
CustomInputSelect.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  options: PropTypes.arrayOf(PropTypes.any),
  freeSolo: PropTypes.bool,
  open: PropTypes.bool,
  loading: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onInputChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onblur: PropTypes.func,
  validation: PropTypes.bool,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  loadingListOptions: PropTypes.bool
};
CustomInputSelect.defaultProp = {
  title: '',
  options: [],
  freeSolo: false,
  open: false,
  loading: false,
  value: {},
  onChange: function onChange() {},
  inputValue: {},
  onInputChange: function onInputChange() {},
  onKeyPress: function onKeyPress() {},
  onblur: function onblur() {},
  validation: false,
  maxLength: null,
  disabled: false,
  loadingListOptions: false
};
var CustomInputSelect$1 = /*#__PURE__*/React__default.memo(CustomInputSelect);

var handleLoading$1 = function handleLoading(text, isLoading) {
  return isLoading ? /*#__PURE__*/React__default.createElement(CircularProgress$1, null) : text;
};
var isNullValue$1 = function isNullValue(value) {
  return value === undefined || value === null || value === '';
};
function currencyFormatter(value) {
  if (!Number(value)) return;
  var amount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value / 100);
  return "" + amount;
}

var _excluded$2 = ["label", "id", "value", "type", "disabled", "onChange", "validation", "multiline", "rows", "inputProps"];
var isNullValue$2 = function isNullValue(value) {
  return value === undefined || value === null || value === '';
};
var handleHelperText$1 = function handleHelperText(validation) {
  return validation ? 'Campo obrigatório' : '';
};
var handleError$1 = function handleError(value, validation) {
  return isNullValue$2(value) && validation;
};
var CustomTextField = function CustomTextField(_ref) {
  var label = _ref.label,
    id = _ref.id,
    value = _ref.value,
    type = _ref.type,
    disabled = _ref.disabled,
    onChange = _ref.onChange,
    validation = _ref.validation,
    multiline = _ref.multiline,
    rows = _ref.rows,
    inputProps = _ref.inputProps,
    other = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  if (type && type == 'amount') {
    return /*#__PURE__*/React__default.createElement(NumberFormat, _extends({
      id: id,
      size: "small",
      label: label,
      style: {
        marginTop: '8px',
        marginBottom: '4px'
      },
      fullWidth: true,
      disabled: disabled,
      InputLabelProps: {
        shrink: true
      },
      value: value,
      onChange: onChange,
      error: handleError$1(value, validation),
      helperText: value ? '' : handleHelperText$1(validation),
      inputProps: inputProps,
      prefix: "R$ ",
      thousandSeparator: true,
      format: currencyFormatter,
      customInput: TextField
    }, other));
  }
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(TextField, _extends({
    size: "small",
    label: label,
    id: id,
    fullWidth: true,
    multiline: multiline,
    rows: rows,
    disabled: disabled,
    margin: "dense",
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    value: value,
    onChange: onChange,
    error: handleError$1(value, validation),
    helperText: value ? '' : handleHelperText$1(validation),
    inputProps: inputProps
  }, other)));
};
CustomTextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  onChange: PropTypes.func,
  validation: PropTypes.bool,
  type: PropTypes.string
};
CustomTextField.defaultProp = {
  label: '',
  id: '',
  value: {},
  multiline: false,
  rows: false,
  disabled: false,
  onChange: function onChange() {},
  validation: false,
  type: ''
};
var CustomTextField$1 = /*#__PURE__*/React__default.memo(CustomTextField);

var _excluded$3 = ["id", "label", "value", "mask", "onChange", "placeHolder", "ampm", "disabled"];
var CustomTimePicker = function CustomTimePicker(_ref) {
  var label = _ref.label,
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
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(LocalizationProvider.LocalizationProvider, {
    dateAdapter: AdapterDateFns.AdapterDateFns,
    adapterLocale: locale.ptBR
  }, /*#__PURE__*/React__default.createElement(TimePicker.TimePicker, {
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
      return /*#__PURE__*/React__default.createElement(material.TextField, _extends({}, params, {
        id: 'custom-time-picker',
        size: "small",
        sx: {
          marginTop: '8px'
        },
        inputProps: _extends({}, params.inputProps, {
          placeholder: placeHolder || "00:00"
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
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  mask: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  ampm: PropTypes.bool,
  disabled: PropTypes.bool
};
CustomTimePicker.defaultProp = {
  id: "",
  label: "",
  value: {},
  mask: "__:__",
  onChange: function onChange() {},
  placeHolder: "00:00",
  ampm: false,
  disabled: false
};
var CustomTimePicker$1 = /*#__PURE__*/React__default.memo(CustomTimePicker);

var _excluded$4 = ["label", "value", "minDate", "validation", "maxDate", "dateFormat", "onChange", "placeHolder", "helperText", "disabled", "noAlertNoneValue"];
var CustomDatePicker = function CustomDatePicker(_ref) {
  var label = _ref.label,
    value = _ref.value,
    minDate = _ref.minDate,
    validation = _ref.validation,
    maxDate = _ref.maxDate,
    dateFormat = _ref.dateFormat,
    onChange = _ref.onChange,
    placeHolder = _ref.placeHolder,
    helperText = _ref.helperText,
    disabled = _ref.disabled,
    noAlertNoneValue = _ref.noAlertNoneValue,
    other = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  var _React$useState = React__default.useState(''),
    dateValidation = _React$useState[0],
    setDateValidation = _React$useState[1];
  var handleHelperText = function handleHelperText() {
    if (!value && !noAlertNoneValue) return "Campo obrigatório!";
    if (dateValidation && helperText) return "Data ou Hora Invalida!";
    if (!value && validation) return "Campo obrigatório!";
    return "";
  };
  var handleError = function handleError() {
    if (!value && !noAlertNoneValue) return true;
    if (!value && validation) return true;
    return false;
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(LocalizationProvider.LocalizationProvider, {
    dateAdapter: AdapterDateFns.AdapterDateFns,
    adapterLocale: locale.ptBR
  }, /*#__PURE__*/React__default.createElement(DatePicker.DatePicker, {
    label: label,
    value: value,
    disabled: disabled,
    minDate: minDate ? new Date(minDate) : undefined,
    maxDate: maxDate ? new Date(maxDate) : undefined,
    dateFormat: dateFormat || "DD-MM-YYYY",
    onError: function onError(e) {
      return setDateValidation(e);
    },
    onChange: onChange,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React__default.createElement(material.TextField, _extends({}, params, {
        inputProps: _extends({}, params.inputProps, {
          placeholder: placeHolder || "dd/mm/aaaa"
        }),
        size: "small",
        sx: {
          marginTop: '8px'
        },
        id: 'custom-date-picker',
        error: handleError(),
        helperText: handleHelperText(),
        onKeyDown: function onKeyDown(e) {
          return e.preventDefault();
        },
        InputLabelProps: {
          shrink: true
        }
      }, other));
    }
  })));
};
CustomDatePicker.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  dateFormat: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  noAlertNoneValue: PropTypes.bool
};
CustomDatePicker.defaultProp = {
  id: "",
  label: "",
  value: {},
  minDate: undefined,
  maxDate: undefined,
  dateFormat: "DD-MM-YYYY",
  onChange: function onChange() {},
  placeHolder: "DD/MM/AAAA",
  helperText: "Data ou Hora Invalida!",
  disabled: false,
  noAlertNoneValue: false
};
var CustomDatePicker$1 = /*#__PURE__*/React__default.memo(CustomDatePicker);

var style$b = {
  appcontent: {
    transition: '0.4s',
    animation: 'fadeInAnimation ease 0.5s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
    paddingRight: '10px',
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
var AppContent$1 = /*#__PURE__*/React__default.memo(AppContent);

var FilesUpload = function FilesUpload(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    disabledChoose = _ref.disabledChoose,
    maxFileSizeMb = _ref.maxFileSizeMb,
    typeAcceptFile = _ref.typeAcceptFile;
  var maxSizeUpload = maxFileSizeMb ? maxFileSizeMb * 1000000 : 1 * 1000000;
  var _useState = React.useState(0),
    totalSize = _useState[0],
    setTotalSize = _useState[1];
  var toast$1 = React.useRef(null);
  var fileUploadRef = React.useRef(null);
  React.useEffect(function () {
    var _totalSize = totalSize;
    if (value) {
      value.map(function (file) {
        _totalSize += file.size;
        setTotalSize(_totalSize);
      });
    }
  }, []);
  function formatBytes(bytes, decimals) {
    if (bytes == 0) return '0 Bytes';
    var k = 1000,
      dm = decimals || 2,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  var onTemplateSelect = function onTemplateSelect(e) {
    var filesUpload = Array.from(e.files);
    var _totalSize = totalSize;
    var list = [].concat(value);
    var totalSizeToAdd = 0;
    filesUpload.map(function (file) {
      return totalSizeToAdd += file.size;
    });
    if (totalSizeToAdd > maxSizeUpload) {
      toast$1.current.show({
        severity: 'error',
        summary: 'Atenção:',
        detail: "Os Arquivos Selecionados Excedem o Tamanho Total de Arquivos. (" + formatBytes(maxSizeUpload) + ")"
      });
      return;
    }
    filesUpload.forEach(function (file) {
      if (totalSize + file.size > maxSizeUpload) {
        toast$1.current.show({
          severity: 'error',
          summary: 'Atenção:',
          detail: "Os Arquivos Selecionados Excedem o Tamanho Total de Arquivos. (" + formatBytes(maxSizeUpload) + ")"
        });
        return;
      }
      function isExistFileUpload(listContent) {
        return listContent.name === file.name;
      }
      if (!list.find(isExistFileUpload)) {
        _totalSize += file.size;
        console.log(file.size);
        list.push(file);
        onChange(list);
      } else {
        toast$1.current.show({
          severity: 'warn',
          summary: 'Aviso:',
          detail: file.name + " - Arquivo j\xE1 Adicionado!"
        });
      }
    });
    setTotalSize(_totalSize);
  };
  var onTemplateUpload = function onTemplateUpload(e) {
    var _totalSize = 0;
    e.files.forEach(function (file) {
      _totalSize += file.size || 0;
    });
    setTotalSize(_totalSize);
    toast$1.current.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded'
    });
  };
  var onTemplateClear = function onTemplateClear() {
    setTotalSize(0);
  };
  var headerTemplate = function headerTemplate(options) {
    var className = options.className,
      chooseButton = options.chooseButton;
    var valuePercent = totalSize / maxSizeUpload * 100;
    var formatedValue = totalSize > 0 ? formatBytes(totalSize) : '0 B';
    return /*#__PURE__*/React__default.createElement("div", {
      className: className,
      style: {
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center'
      }
    }, !disabledChoose && chooseButton, /*#__PURE__*/React__default.createElement(progressbar.ProgressBar, {
      value: valuePercent,
      displayValueTemplate: function displayValueTemplate() {
        return formatedValue + " / " + formatBytes(maxSizeUpload);
      },
      style: {
        width: '300px',
        height: '20px',
        marginLeft: 'auto'
      }
    }));
  };
  var chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: false,
    className: 'custom-choose-btn p-button-success p-button-rounded p-button-outlined'
  };
  var uploadOptions = {
    icon: 'pi pi-fw pi-cloud-upload',
    iconOnly: true,
    className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'
  };
  var cancelOptions = {
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'
  };
  var showPdf = function showPdf(file) {
    var blob = new Blob([file], {
      type: 'application/pdf'
    });
    var link = URL.createObjectURL(blob);
    window.open(link, '_blank');
  };
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(toast.Toast, {
    ref: toast$1,
    style: {
      marginTop: '40px'
    }
  }), /*#__PURE__*/React__default.createElement(tooltip.Tooltip, {
    target: ".custom-choose-btn",
    content: "Selecionar",
    position: "bottom"
  }), /*#__PURE__*/React__default.createElement(tooltip.Tooltip, {
    target: ".custom-cancel-btn",
    content: "Clear",
    position: "bottom"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React__default.createElement(fileupload.FileUpload, {
    ref: fileUploadRef,
    name: "FilesUpload",
    multiple: true,
    accept: typeAcceptFile ? typeAcceptFile : '.pdf,image/*',
    maxFileSize: maxSizeUpload,
    onUpload: onTemplateUpload,
    onSelect: onTemplateSelect,
    onError: onTemplateClear,
    onClear: onTemplateClear,
    headerTemplate: headerTemplate,
    chooseOptions: chooseOptions,
    uploadOptions: uploadOptions,
    cancelOptions: cancelOptions,
    chooseLabel: "Adicionar Arquivos..."
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "afterInput"
  }, value && value.map(function (file) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "item-row"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "item-img-fileName",
      style: {
        width: '40%'
      }
    }, file.type == 'application/pdf' && /*#__PURE__*/React__default.createElement(Tooltip, {
      title: "Visualizar PDF"
    }, /*#__PURE__*/React__default.createElement(PictureAsPdfIcon, {
      onClick: function onClick() {
        showPdf(file);
      },
      className: "dropzone-pdf-icon",
      fontSize: "large"
    })), file.type !== 'application/pdf' && /*#__PURE__*/React__default.createElement("img", {
      alt: file.name,
      role: "presentation",
      src: file.objectURL,
      width: 100
    }), /*#__PURE__*/React__default.createElement("span", {
      className: "file-name"
    }, file.name, /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("small", null, new Date().toLocaleDateString()))), /*#__PURE__*/React__default.createElement(tag.Tag, {
      value: formatBytes(file.size),
      severity: "warning",
      className: "px-3 py-2"
    }), /*#__PURE__*/React__default.createElement(button.Button, {
      type: "button",
      icon: "pi pi-times",
      className: "p-button-outlined p-button-rounded p-button-danger ml-auto",
      onClick: function onClick() {
        setTotalSize(totalSize - file.size);
        var list = value.filter(function (x) {
          return x.name !== file.name;
        });
        onChange(list);
      }
    }));
  }))));
};
FilesUpload.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabledChoose: PropTypes.bool,
  maxFileSizeMb: PropTypes.number,
  typeAcceptFile: PropTypes.string
};
FilesUpload.defaultProp = {
  value: [],
  onChange: {},
  disabledChoose: false,
  maxFileSizeMb: 1,
  typeAcceptFile: '.pdf,image/*'
};
var FilesUpload$1 = /*#__PURE__*/React__default.memo(FilesUpload);

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var maskText = function maskText(v) {
  var value = v;
  if (value.length > 150) value.preventDefault();
  value = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ \s]/gi, '').toUpperCase();
  return value;
};
var maskWallet = function maskWallet(v) {
  if (isNullValue$1(v)) return '';
  var value = v;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{4})(\d{2})/, '$1.$2');
  value = value.replace(/(\d{2})(\d{5})/, '$1.$2');
  value = value.replace(/(\d{5})(\d{2})(\d{1})/, '$1.$2-$3');
  return value;
};

var _CustomBeneficiarieFi;
var CustomBeneficiarieFields = function CustomBeneficiarieFields(_ref) {
  var label = _ref.label,
    valueId = _ref.valueId,
    onChangeId = _ref.onChangeId,
    onChangeData = _ref.onChangeData,
    valueName = _ref.valueName,
    onChangeName = _ref.onChangeName,
    validation = _ref.validation,
    api = _ref.api,
    disabled = _ref.disabled,
    required = _ref.required;
  var ResponseModel_v2 = {
    timestamp: '',
    status: 0,
    message: '',
    data: {
      content: []
    }
  };
  var _useState = React.useState(false),
    loadingBeneficiary = _useState[0],
    setLoadingBeneficiary = _useState[1];
  var _React$useState = React__default.useState(false),
    openBeneficiariesField = _React$useState[0],
    setOpenBeneficiariesField = _React$useState[1];
  var _React$useState2 = React__default.useState(false),
    openWalletField = _React$useState2[0],
    setOpenWalletField = _React$useState2[1];
  var _useState2 = React.useState(ResponseModel_v2),
    localBeneficiaries = _useState2[0],
    setLocalBeneficiaries = _useState2[1];
  var _useState3 = React.useState(''),
    beneficiarieWalletInputValue = _useState3[0],
    setBeneficiarieWalletInputValue = _useState3[1];
  var _useState4 = React.useState(''),
    beneficiariesNameInputValue = _useState4[0],
    setBeneficiariesNameInputValue = _useState4[1];
  var isRequired = function isRequired() {
    if (required) return ' *';else {
      return '';
    }
  };
  var handleOnChangeData = function handleOnChangeData(e) {
    if (onChangeData) {
      onChangeData(e);
    }
  };
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(ConteinerItem, {
    className: "custom-beneficiarie-component-wallet"
  }, /*#__PURE__*/React__default.createElement(CustomInputSelect$1, {
    title: handleLoading$1((!label ? 'Carteirinha' : label[0]) + isRequired(), loadingBeneficiary),
    freeSolo: true,
    open: openWalletField,
    options: localBeneficiaries.data.content.map(function (item, index) {
      return {
        label: "" + item.code,
        name: "" + item.name,
        id: index
      };
    }),
    disabled: disabled,
    value: valueId,
    onChange: function onChange(event, newInputValue) {
      onChangeId(newInputValue.label);
      if (isNullValue$1(newInputValue)) onChangeName('');
      if (newInputValue !== null && newInputValue.name) {
        onChangeName({
          label: newInputValue.name,
          id: newInputValue.id
        });
      }
      setOpenWalletField(false);
    },
    inputValue: beneficiarieWalletInputValue,
    onInputChange: function onInputChange(event, newInputValue) {
      if (newInputValue == '') {
        onChangeName('');
      }
      setBeneficiarieWalletInputValue(maskWallet(newInputValue));
    },
    onKeyUp: function onKeyUp(event) {
      try {
        return Promise.resolve(_catch(function () {
          var _temp = function () {
            if (event.key === 'Tab' || event.target.value.length > 15) {
              setLoadingBeneficiary(true);
              return Promise.resolve(api.http.get("" + api.addressCode(event.target.value))).then(function (response) {
                if (!isNullValue$1(response.data.data.code)) {
                  setLocalBeneficiaries({
                    data: {
                      content: [response.data.data]
                    }
                  });
                  setOpenWalletField(true);
                }
                setLoadingBeneficiary(false);
              });
            }
          }();
          if (_temp && _temp.then) return _temp.then(function () {});
        }, function () {
          setLoadingBeneficiary(false);
        }));
      } catch (e) {
        return Promise.reject(e);
      }
    },
    onBlur: function onBlur(event) {
      try {
        var _temp2 = _catch(function () {
          setLoadingBeneficiary(true);
          return Promise.resolve(api.http.get("" + api.addressCode(event.target.value))).then(function (response) {
            var _response$data$data;
            if ((_response$data$data = response.data.data) !== null && _response$data$data !== void 0 && _response$data$data.name) {
              var _response$data$data2, _response$data$data3, _response$data$data4;
              onChangeId((_response$data$data2 = response.data.data) === null || _response$data$data2 === void 0 ? void 0 : _response$data$data2.code);
              onChangeName({
                label: (_response$data$data3 = response.data.data) === null || _response$data$data3 === void 0 ? void 0 : _response$data$data3.name,
                id: (_response$data$data4 = response.data.data) === null || _response$data$data4 === void 0 ? void 0 : _response$data$data4.code
              });
            }
            setOpenWalletField(false);
            setLoadingBeneficiary(false);
          });
        }, function () {
          setOpenWalletField(false);
          setLoadingBeneficiary(false);
        });
        return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
      } catch (e) {
        return Promise.reject(e);
      }
    },
    maxLength: 18,
    validation: validation
  })), /*#__PURE__*/React__default.createElement(ConteinerItem, null, /*#__PURE__*/React__default.createElement(CustomInputSelect$1, {
    title: handleLoading$1((!label ? 'Nome Beneficiário' : label[1]) + isRequired(), loadingBeneficiary),
    freeSolo: true,
    open: openBeneficiariesField,
    options: localBeneficiaries.data.content.map(function (item, index) {
      return {
        label: "" + item.name,
        id: index
      };
    }),
    disabled: disabled,
    value: valueName,
    onChange: function onChange(event, newValue) {
      onChangeName(newValue);
    },
    inputValue: beneficiariesNameInputValue,
    onInputChange: function onInputChange(event, newInputValue) {
      try {
        var _temp4 = function _temp4() {
          var item = localBeneficiaries.data.content.filter(function (x) {
            return x.name === newInputValue;
          })[0];
          if (!isNullValue$1(item)) {
            onChangeId(item.code);
            handleOnChangeData(item);
            setOpenBeneficiariesField(false);
          }
        };
        if (newInputValue == '') {
          onChangeId('');
          handleOnChangeData('');
        }
        setBeneficiariesNameInputValue(maskText(newInputValue));
        var _temp3 = function () {
          if (newInputValue && event.target.value.length >= 3) {
            setLoadingBeneficiary(true);
            return Promise.resolve(api.http.get("" + api.addressName(maskText(event.target.value))).then(function (response) {
              setLocalBeneficiaries(response.data);
            })).then(function () {
              setLoadingBeneficiary(false);
              setOpenBeneficiariesField(true);
            });
          }
        }();
        return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(_temp4) : _temp4(_temp3));
      } catch (e) {
        return Promise.reject(e);
      }
    },
    onBlur: function onBlur() {
      return setOpenBeneficiariesField(false);
    },
    validation: validation
  })));
};
CustomBeneficiarieFields.propTypes = (_CustomBeneficiarieFi = {
  valueId: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  valueName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChangeId: PropTypes.func,
  onChangeName: PropTypes.func,
  validation: PropTypes.string,
  api: PropTypes.object
}, _CustomBeneficiarieFi["api"] = PropTypes.shape({
  addressCode: PropTypes.func,
  addressName: PropTypes.func,
  http: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}), _CustomBeneficiarieFi.disabled = PropTypes.bool, _CustomBeneficiarieFi.required = PropTypes.bool, _CustomBeneficiarieFi);
CustomBeneficiarieFields.defaultProp = {
  valueId: {},
  valueName: {},
  onChangeId: function onChangeId() {},
  onChangeName: function onChangeName() {},
  validation: '',
  api: {
    addressCode: function addressCode() {},
    addressName: function addressName() {}
  },
  disabled: false,
  required: false
};

var _ArchivesContent$prop;
var style$c = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  overflow: 'hidden',
  textAlign: 'center',
  p: 4
};
var styleButtonClose = {
  position: 'absolute',
  top: '2%',
  left: '95%',
  color: '#000'
};
var ArchivesContent = function ArchivesContent(_ref) {
  var filesList = _ref.filesList,
    editable = _ref.editable,
    onDownload = _ref.onDownload,
    onDelete = _ref.onDelete,
    onUpload = _ref.onUpload,
    onShowOnApi = _ref.onShowOnApi,
    api = _ref.api,
    maxFileSizeMb = _ref.maxFileSizeMb,
    acceptTypes = _ref.acceptTypes;
  var initialStateFileDelete = {
    confirm: '',
    file: '',
    fileId: '',
    openDialog: false
  };
  var maxSizeUpload = maxFileSizeMb ? maxFileSizeMb * 1000000 : 10 * 1000000;
  var _useState = React.useState(''),
    imgModal = _useState[0],
    setImgModal = _useState[1];
  var _useState2 = React.useState(initialStateFileDelete),
    contentFileDelete = _useState2[0],
    setContentFileDelete = _useState2[1];
  var _useState3 = React.useState(false),
    openModal = _useState3[0],
    setOpenModal = _useState3[1];
  var acceptTypesProps = acceptTypes ? acceptTypes : ['jpg', 'jpeg', 'png', 'pdf'];
  var handleCloseDialogDeleteFile = function handleCloseDialogDeleteFile() {
    setContentFileDelete({
      confirm: '',
      file: '',
      fileId: '',
      openDialog: false
    });
  };
  var handleOpen = function handleOpen() {
    return setOpenModal(true);
  };
  var handleClose = function handleClose() {
    return setOpenModal(false);
  };
  var handleGetDocumentApi = function handleGetDocumentApi(id, nameArchive) {
    onDownload({
      id: id,
      nameArchive: nameArchive
    });
  };
  var ShowArchives = function ShowArchives(file) {
    function get_url_extension(url) {
      if (url) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
      } else {
        return '';
      }
    }
    if (file !== null && file !== void 0 && file.fileLink && get_url_extension(file.fileLink) == 'pdf') {
      return /*#__PURE__*/React__default.createElement(material.Tooltip, {
        title: "Visualizar PDF"
      }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(VisibilityIcon, {
        onClick: function onClick() {
          return showPdf(file.fileId, file.fileLink);
        }
      })));
    }
    if (file.fileLink && acceptTypesProps.includes(get_url_extension(file.fileLink))) {
      return /*#__PURE__*/React__default.createElement(material.Tooltip, {
        title: "Visualizar Imagem"
      }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(VisibilityIcon, {
        onClick: function onClick() {
          return showImg(file.fileId, file.fileLink, file.fileName);
        }
      })));
    }
    if (onShowOnApi) {
      if (file.fileName.toLowerCase().includes('pdf')) {
        return /*#__PURE__*/React__default.createElement(material.Tooltip, {
          title: "Visualizar PDF"
        }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(VisibilityIcon, {
          onClick: function onClick() {
            return showOnApiPdf(file.fileId);
          }
        })));
      } else {
        return /*#__PURE__*/React__default.createElement(material.Tooltip, {
          title: "Visualizar Imagem"
        }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(VisibilityIcon, {
          onClick: function onClick() {
            return showOnApi(file.fileId);
          }
        })));
      }
    }
  };
  var showImg = function showImg(id, fileLink, fileName) {
    if (fileLink) {
      setImgModal(fileLink);
      handleOpen();
    } else {
      downloadChange({
        id: id,
        fileName: fileName,
        type: 'showimg'
      });
    }
  };
  var showOnApi = function showOnApi(id, nameArchive) {
    api.http.get("" + api.addressShow(id), {
      responseType: 'blob'
    }).then(function (response) {
      var blob = new Blob([response.data]);
      var link = URL.createObjectURL(blob);
      setImgModal(link);
      handleOpen();
    });
  };
  var showOnApiPdf = function showOnApiPdf(id, nameArchive) {
    api.http.get("" + api.addressShow(id), {
      responseType: 'blob'
    }).then(function (response) {
      var blob = new Blob([response.data], {
        type: 'application/pdf'
      });
      var link = URL.createObjectURL(blob);
      window.open(link, '_blank');
    });
  };
  var showPdf = function showPdf(id, fileLink, fileName) {
    if (fileLink) {
      window.open(fileLink, '_blank').focus();
    }
  };
  var deleteArchive = function deleteArchive(id, fileName) {
    setContentFileDelete({
      confirm: '',
      file: fileName,
      fileId: id,
      openDialog: true
    });
  };
  React.useEffect(function () {
    if (contentFileDelete.confirm) {
      onDelete(contentFileDelete);
    }
  }, [contentFileDelete]);
  var SendFiles = function SendFiles(e) {
    if (e.target.files[0].size > maxSizeUpload) {
      alert("O Arquivo \xE9 muito grande para o destino. Tamanho Maximo: " + (maxFileSizeMb ? maxFileSizeMb : '10') + " MB");
      return;
    }
    onUpload(e);
  };
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(material.TableContainer, {
    className: "conteiner-archive-component",
    component: material.Paper
  }, /*#__PURE__*/React__default.createElement(material.Table, {
    className: "",
    size: "small",
    "aria-label": "a dense table"
  }, /*#__PURE__*/React__default.createElement(material.TableHead, {
    className: "table-header-archive-content"
  }, /*#__PURE__*/React__default.createElement(material.TableRow, null, /*#__PURE__*/React__default.createElement(material.TableCell, null, "C\xF3digo"), /*#__PURE__*/React__default.createElement(material.TableCell, null, "Nome do Arquivo"), /*#__PURE__*/React__default.createElement(material.TableCell, {
    align: "center"
  }))), /*#__PURE__*/React__default.createElement(material.TableBody, {
    className: "table-body"
  }, filesList && filesList.map(function (file, index) {
    return /*#__PURE__*/React__default.createElement(material.TableRow, {
      key: file.fileId
    }, /*#__PURE__*/React__default.createElement(material.TableCell, {
      align: ""
    }, file.fileId), /*#__PURE__*/React__default.createElement(material.TableCell, {
      align: ""
    }, file.fileName), /*#__PURE__*/React__default.createElement(material.TableCell, {
      align: ""
    }, /*#__PURE__*/React__default.createElement(material.Tooltip, {
      title: "Baixar Arquivo"
    }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(FileDownloadIcon, {
      onClick: function onClick() {
        return handleGetDocumentApi(file.fileId, file.originName);
      }
    }))), ShowArchives(file), editable && /*#__PURE__*/React__default.createElement(material.Tooltip, {
      title: "Excluir Arquivo"
    }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(DeleteIcon, {
      onClick: function onClick() {
        return deleteArchive(file.fileId, file.fileName);
      }
    })))));
  }))), editable && /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("input", {
    accept: ".pdf,image/*",
    style: {
      display: 'none'
    },
    id: "raised-button-file",
    type: "file",
    onChange: function onChange(e) {
      return SendFiles(e);
    }
  }), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "raised-button-file"
  }, /*#__PURE__*/React__default.createElement(material.Button, {
    variant: "raised",
    component: "span",
    sx: {
      display: 'flex',
      color: '#6a6969'
    }
  }, "Adicionar Novo Arquivo")))), /*#__PURE__*/React__default.createElement(material.Modal, {
    open: openModal,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React__default.createElement(material.Box, {
    sx: style$c
  }, /*#__PURE__*/React__default.createElement(image.Image, {
    src: imgModal,
    alt: "Image",
    height: "100%"
  }), /*#__PURE__*/React__default.createElement(material.Box, {
    sx: styleButtonClose
  }, /*#__PURE__*/React__default.createElement(material.Tooltip, {
    title: "Fechar"
  }, /*#__PURE__*/React__default.createElement(CloseIcon, {
    onClick: function onClick() {
      return handleClose();
    }
  }))))), /*#__PURE__*/React__default.createElement(material.Dialog, {
    open: contentFileDelete.openDialog,
    onClose: handleCloseDialogDeleteFile,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(material.DialogTitle, {
    id: "alert-dialog-title"
  }, 'Tem Certeza que deseja Excluir: ' + contentFileDelete.file), /*#__PURE__*/React__default.createElement(material.DialogContent, null, /*#__PURE__*/React__default.createElement(material.DialogContentText, {
    id: "alert-dialog-description"
  }, "A exclus\xE3o ser\xE1 permanente!")), /*#__PURE__*/React__default.createElement(material.DialogActions, null, /*#__PURE__*/React__default.createElement(material.Button, {
    onClick: handleCloseDialogDeleteFile
  }, "Cancelar"), /*#__PURE__*/React__default.createElement(material.Button, {
    onClick: function onClick() {
      return setContentFileDelete({
        confirm: true,
        file: contentFileDelete.file,
        fileId: contentFileDelete.fileId,
        openDialog: false
      });
    },
    autoFocus: true
  }, "Confirmar Exclus\xE3o"))));
};
ArchivesContent.propTypes = (_ArchivesContent$prop = {
  filesList: PropTypes.object
}, _ArchivesContent$prop["filesList"] = PropTypes.shape({
  fileId: PropTypes.string,
  fileName: PropTypes.string,
  fileLink: PropTypes.string
}), _ArchivesContent$prop.editable = PropTypes.bool, _ArchivesContent$prop);
ArchivesContent.defaultProp = {
  filesList: [],
  editable: false
};

var _FilesContentApi$prop;
var FilesContentApi = function FilesContentApi(_ref) {
  var _fileList$;
  var acceptFileTypes = _ref.acceptFileTypes,
    fileList = _ref.fileList,
    editable = _ref.editable,
    api = _ref.api,
    maxFileSizeMb = _ref.maxFileSizeMb,
    solicitationId = _ref.solicitationId,
    onChange = _ref.onChange;
  var fileTypes = acceptFileTypes ? acceptFileTypes : ['jpg', 'jpeg', 'png', 'pdf'];
  var maxSizeUpload = maxFileSizeMb ? maxFileSizeMb * 1000000 : 10 * 1000000;
  var _useState = React.useState(false),
    openModal = _useState[0],
    setOpenModal = _useState[1];
  var solicitation = fileList && fileList.length !== 0 ? (_fileList$ = fileList[0]) === null || _fileList$ === void 0 ? void 0 : _fileList$.solicitationId : solicitationId;
  var _useState2 = React.useState(''),
    imgModal = _useState2[0],
    setImgModal = _useState2[1];
  var initialStateFileDelete = {
    confirm: '',
    file: '',
    fileId: '',
    openDialog: false
  };
  var _useState3 = React.useState(initialStateFileDelete),
    contentFileDelete = _useState3[0],
    setContentFileDelete = _useState3[1];
  var _useState4 = React.useState(fileList ? fileList : []),
    list = _useState4[0],
    setList = _useState4[1];
  var _useState5 = React.useState(false),
    loadChange = _useState5[0],
    setLoadChange = _useState5[1];
  React.useEffect(function () {
    if (onChange) onChange(list);
  }, [list]);
  var handleOpen = function handleOpen() {
    return setOpenModal(true);
  };
  var handleClose = function handleClose() {
    return setOpenModal(false);
  };
  var handleCloseDialogDeleteFile = function handleCloseDialogDeleteFile() {
    setContentFileDelete({
      confirm: '',
      file: '',
      fileId: '',
      openDialog: false
    });
  };
  var ShowArchives = function ShowArchives(file) {
    function get_url_extension(url) {
      if (url) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
      } else {
        return '';
      }
    }
    if (get_url_extension(file.fileName) == 'pdf') {
      return /*#__PURE__*/React__default.createElement(material.Tooltip, {
        title: "Visualizar PDF"
      }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(VisibilityIcon, {
        onClick: function onClick() {
          return showPdf(file.fileId);
        }
      })));
    }
    if (fileTypes.includes(get_url_extension(file.fileName))) {
      return /*#__PURE__*/React__default.createElement(material.Tooltip, {
        title: "Visualizar Imagem"
      }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(VisibilityIcon, {
        onClick: function onClick() {
          return showImg(file.fileId);
        }
      })));
    }
  };
  var showImg = function showImg(id, fileLink, fileName) {
    if (!api) {
      alert('Sem Rotas de API');
      return;
    }
    setLoadChange(true);
    api.http.get("" + api.addressApiFile(id), {
      responseType: 'blob'
    }).then(function (response) {
      var blob = new Blob([response.data]);
      var link = URL.createObjectURL(blob);
      setImgModal(link);
      handleOpen();
      setLoadChange(false);
    });
  };
  var showPdf = function showPdf(id, nameArchive) {
    if (!api) {
      alert('Sem Rotas de API');
      return;
    }
    setLoadChange(true);
    api.http.get("" + api.addressApiFile(id), {
      responseType: 'blob'
    }).then(function (response) {
      var blob = new Blob([response.data], {
        type: 'application/pdf'
      });
      var link = URL.createObjectURL(blob);
      setLoadChange(false);
      window.open(link, '_blank');
    })["catch"](function (e) {
      alert('Erro ao Solicitar Arquivo!');
      setLoadChange(false);
    });
  };
  var handleGetDocumentApi = function handleGetDocumentApi(id, nameArchive) {
    if (!api) {
      alert('Sem Rotas de API');
      return;
    }
    setLoadChange(true);
    api.http.get("" + api.addressApiFile(id), {
      responseType: 'blob'
    }).then(function (response) {
      var blob = new Blob([response.data]);
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = nameArchive;
      link.click();
      setLoadChange(false);
    })["catch"](function (error) {
      alert('Erro ao solicitar arquivo!');
      setLoadChange(false);
    });
  };
  var SendFiles = function SendFiles(e) {
    if (!api) {
      alert('Sem Rotas de API');
      return;
    }
    if (e.target.files[0].size > maxSizeUpload) {
      alert("O Arquivo \xE9 muito grande para o destino. Tamanho Maximo: " + (maxFileSizeMb ? maxFileSizeMb : '10') + " MB");
      return;
    }
    var fileToSend = e.target.files[0];
    var formData = new FormData();
    formData.append('file', fileToSend);
    setLoadChange(true);
    var headers = {
      'Content-Type': 'multipart/form-data'
    };
    api.http.post("" + api.addressApiFile('', '', solicitation), formData, {
      headers: headers
    }).then(function (response) {
      if (response.data.status == 201) {
        var addRowFile = {
          fileId: response.data.data,
          fileName: fileToSend.name,
          originName: fileToSend.name
        };
        setList(function (current) {
          return [].concat(current, [addRowFile]);
        });
        setLoadChange(false);
      } else {
        alert('Erro ao Enviar Arquivo.');
        setLoadChange(false);
      }
    })["catch"](function (e) {
      alert('Erro ao Enviar enviar Arquivo!');
      setLoadChange(false);
    });
  };
  var deleteArchive = function deleteArchive(id, fileName) {
    setContentFileDelete({
      confirm: '',
      file: fileName,
      fileId: id,
      openDialog: true
    });
  };
  React.useEffect(function () {
    if (contentFileDelete.confirm) {
      if (!api) {
        alert('Sem Rotas de API');
        setLoadChange(false);
        return;
      }
      api.http["delete"]("" + api.addressApiFile('', contentFileDelete.fileId, solicitation), {
        responseType: 'blob'
      }).then(function (response) {
        setContentFileDelete(initialStateFileDelete);
        setList(function (current) {
          return current.filter(function (listFiles) {
            return listFiles.fileId !== contentFileDelete.fileId;
          });
        });
        setLoadChange(false);
      })["catch"](function (error) {
        alert('Erro ao Excluir Arquivo.');
        setLoadChange(false);
      });
    }
  }, [contentFileDelete]);
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(material.TableContainer, {
    className: "conteiner-archive-component",
    component: material.Paper
  }, /*#__PURE__*/React__default.createElement(material.Table, {
    className: "",
    size: "small",
    "aria-label": "a dense table"
  }, /*#__PURE__*/React__default.createElement(material.TableHead, {
    className: "table-header-archive-content"
  }, /*#__PURE__*/React__default.createElement(material.TableRow, null, /*#__PURE__*/React__default.createElement(material.TableCell, null, "C\xF3digo"), /*#__PURE__*/React__default.createElement(material.TableCell, null, "Nome do Arquivo"), /*#__PURE__*/React__default.createElement(material.TableCell, {
    align: "center"
  }))), /*#__PURE__*/React__default.createElement(material.TableBody, {
    className: "table-body"
  }, list && list.map(function (file, index) {
    return /*#__PURE__*/React__default.createElement(material.TableRow, {
      key: file.fileId
    }, /*#__PURE__*/React__default.createElement(material.TableCell, {
      align: ""
    }, file.fileId), /*#__PURE__*/React__default.createElement(material.TableCell, {
      align: ""
    }, file.originName), /*#__PURE__*/React__default.createElement(material.TableCell, {
      align: ""
    }, /*#__PURE__*/React__default.createElement(material.Tooltip, {
      title: "Baixar Arquivo"
    }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(FileDownloadIcon, {
      onClick: function onClick() {
        return handleGetDocumentApi(file.fileId, file.originName);
      }
    }))), ShowArchives(file), editable && /*#__PURE__*/React__default.createElement(material.Tooltip, {
      title: "Excluir Arquivo"
    }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(DeleteIcon, {
      onClick: function onClick() {
        deleteArchive(file.fileId, file.fileName);
      }
    })))));
  }))), loadChange && /*#__PURE__*/React__default.createElement(material.LinearProgress, null), editable && /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("input", {
    accept: ".pdf,image/*",
    style: {
      display: 'none'
    },
    id: "raised-button-file",
    type: "file",
    onChange: function onChange(e) {
      SendFiles(e);
    }
  }), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "raised-button-file"
  }, /*#__PURE__*/React__default.createElement(material.Tooltip, {
    title: "Arquivos at\xE9 " + (maxFileSizeMb ? maxFileSizeMb : 10) + " mb"
  }, /*#__PURE__*/React__default.createElement(material.Button, {
    variant: "raised",
    component: "span",
    sx: {
      display: 'flex',
      color: '#6a6969'
    }
  }, "Adicionar Novo Arquivo"))))), /*#__PURE__*/React__default.createElement(material.Modal, {
    open: openModal,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React__default.createElement(material.Box, {
    className: "img-content-show"
  }, /*#__PURE__*/React__default.createElement(image.Image, {
    src: imgModal,
    alt: "Image",
    height: "100%"
  }), /*#__PURE__*/React__default.createElement(material.Box, {
    className: "dialog-button-close"
  }, /*#__PURE__*/React__default.createElement(material.Tooltip, {
    title: "Fechar"
  }, /*#__PURE__*/React__default.createElement(CloseIcon, {
    onClick: function onClick() {
      return handleClose();
    }
  }))))), /*#__PURE__*/React__default.createElement(material.Dialog, {
    open: contentFileDelete.openDialog,
    onClose: handleCloseDialogDeleteFile,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(material.DialogTitle, {
    id: "alert-dialog-title"
  }, 'Tem Certeza que deseja Excluir: ' + contentFileDelete.file), /*#__PURE__*/React__default.createElement(material.DialogContent, null, /*#__PURE__*/React__default.createElement(material.DialogContentText, {
    id: "alert-dialog-description"
  }, "A exclus\xE3o ser\xE1 permanente!")), /*#__PURE__*/React__default.createElement(material.DialogActions, null, /*#__PURE__*/React__default.createElement(material.Button, {
    onClick: handleCloseDialogDeleteFile
  }, "Cancelar"), /*#__PURE__*/React__default.createElement(material.Button, {
    onClick: function onClick() {
      setContentFileDelete({
        confirm: true,
        file: contentFileDelete.file,
        fileId: contentFileDelete.fileId,
        openDialog: false
      });
      setLoadChange(true);
    },
    autoFocus: true
  }, "Confirmar Exclus\xE3o"))));
};
FilesContentApi.propTypes = (_FilesContentApi$prop = {
  filesList: PropTypes.object
}, _FilesContentApi$prop["filesList"] = PropTypes.shape({
  fileId: PropTypes.string,
  fileName: PropTypes.string,
  fileLink: PropTypes.string
}), _FilesContentApi$prop.api = PropTypes.object, _FilesContentApi$prop["api"] = PropTypes.shape({
  http: PropTypes.string,
  addressApiFile: PropTypes.string
}), _FilesContentApi$prop.editable = PropTypes.bool, _FilesContentApi$prop.maxFileSizeMb = PropTypes.string, _FilesContentApi$prop.acceptFileTypes = PropTypes.string, _FilesContentApi$prop.solicitationId = PropTypes.string, _FilesContentApi$prop);
FilesContentApi.defaultProp = {
  filesList: [],
  editable: false,
  solicitationId: '',
  maxFileSizeMb: 10,
  acceptFileTypes: ['jpg', 'jpeg', 'png', 'pdf'],
  api: {
    http: 'api.http',
    addressApiFile: function addressApiFile(e) {
      return api.http.files(e);
    }
  }
};

var _FilesContent$propTyp;
var style$d = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  overflow: 'hidden',
  textAlign: 'center',
  p: 4
};
var styleButtonClose$1 = {
  position: 'absolute',
  top: '2%',
  left: '95%',
  color: '#000'
};
var FilesContent = function FilesContent(_ref) {
  var filesList = _ref.filesList,
    editable = _ref.editable,
    onDownload = _ref.onDownload,
    onDelete = _ref.onDelete,
    onUpload = _ref.onUpload,
    acceptTypes = _ref.acceptTypes;
  var initialStateFileDelete = {
    confirm: '',
    file: '',
    fileId: '',
    openDialog: false
  };
  var _useState = React.useState(''),
    imgModal = _useState[0],
    setImgModal = _useState[1];
  var _useState2 = React.useState(initialStateFileDelete),
    contentFileDelete = _useState2[0],
    setContentFileDelete = _useState2[1];
  var _useState3 = React.useState(false),
    openModal = _useState3[0],
    setOpenModal = _useState3[1];
  var acceptTypesProps = acceptTypes ? acceptTypes : ['jpg', 'jpeg', 'png', 'pdf'];
  var handleCloseDialogDeleteFile = function handleCloseDialogDeleteFile() {
    setContentFileDelete({
      confirm: '',
      file: '',
      fileId: '',
      openDialog: false
    });
  };
  var handleOpen = function handleOpen() {
    return setOpenModal(true);
  };
  var handleClose = function handleClose() {
    return setOpenModal(false);
  };
  var handleGetDocumentApi = function handleGetDocumentApi(id, nameArchive) {
    onDownload({
      id: id,
      nameArchive: nameArchive
    });
  };
  var ShowArchives = function ShowArchives(file) {
    function get_url_extension(url) {
      return url.split(/[#?]/)[0].split('.').pop().trim();
    }
    if (get_url_extension(file.fileLink) == 'pdf') {
      return /*#__PURE__*/React__default.createElement(material.Tooltip, {
        title: "Visualizar PDF"
      }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(VisibilityIcon, {
        onClick: function onClick() {
          return showPdf(file.fileId, file.fileLink);
        }
      })));
    }
    if (file.fileLink && acceptTypesProps.includes(get_url_extension(file.fileLink))) {
      return /*#__PURE__*/React__default.createElement(material.Tooltip, {
        title: "Visualizar Imagem"
      }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(VisibilityIcon, {
        onClick: function onClick() {
          return showImg(file.fileId, file.fileLink, file.fileName);
        }
      })));
    }
  };
  var showImg = function showImg(id, fileLink, fileName) {
    if (fileLink) {
      setImgModal(fileLink);
      handleOpen();
    } else {
      downloadChange({
        id: id,
        fileName: fileName,
        type: 'showimg'
      });
    }
  };
  var showPdf = function showPdf(id, fileLink, fileName) {
    if (fileLink) {
      window.open(fileLink, '_blank').focus();
    }
  };
  var deleteArchive = function deleteArchive(id, fileName) {
    setContentFileDelete({
      confirm: '',
      file: fileName,
      fileId: id,
      openDialog: true
    });
  };
  React.useEffect(function () {
    if (contentFileDelete.confirm) {
      onDelete(contentFileDelete);
    }
  }, [contentFileDelete]);
  var SendFiles = function SendFiles(e) {
    onUpload(e);
  };
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(material.TableContainer, {
    className: "conteiner-archive-component",
    component: material.Paper
  }, /*#__PURE__*/React__default.createElement(material.Table, {
    className: "",
    size: "small",
    "aria-label": "a dense table"
  }, /*#__PURE__*/React__default.createElement(material.TableHead, {
    className: "table-header-archive-content"
  }, /*#__PURE__*/React__default.createElement(material.TableRow, null, /*#__PURE__*/React__default.createElement(material.TableCell, null, "C\xF3digo"), /*#__PURE__*/React__default.createElement(material.TableCell, null, "Nome do Arquivo"), /*#__PURE__*/React__default.createElement(material.TableCell, {
    align: "center"
  }))), /*#__PURE__*/React__default.createElement(material.TableBody, {
    className: "table-body"
  }, filesList && filesList.map(function (file) {
    return /*#__PURE__*/React__default.createElement(material.TableRow, {
      key: file.fileId
    }, /*#__PURE__*/React__default.createElement(material.TableCell, {
      align: ""
    }, file.fileId), /*#__PURE__*/React__default.createElement(material.TableCell, {
      align: ""
    }, file.fileName), /*#__PURE__*/React__default.createElement(material.TableCell, {
      align: ""
    }, /*#__PURE__*/React__default.createElement(material.Tooltip, {
      title: "Baixar Arquivo"
    }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(FileDownloadIcon, {
      onClick: function onClick() {
        return handleGetDocumentApi(file.fileId, file.originName);
      }
    }))), ShowArchives(file), editable && /*#__PURE__*/React__default.createElement(material.Tooltip, {
      title: "Excluir Arquivo"
    }, /*#__PURE__*/React__default.createElement(material.IconButton, null, /*#__PURE__*/React__default.createElement(DeleteIcon, {
      onClick: function onClick() {
        return deleteArchive(file.fileId, file.fileName);
      }
    })))));
  }))), editable && /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("input", {
    accept: ".pdf,image/*",
    style: {
      display: 'none'
    },
    id: "raised-button-file",
    type: "file",
    onChange: function onChange(e) {
      return SendFiles(e);
    }
  }), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "raised-button-file"
  }, /*#__PURE__*/React__default.createElement(material.Button, {
    variant: "raised",
    component: "span",
    sx: {
      display: 'flex',
      color: '#6a6969'
    }
  }, "Adicionar Novo Arquivo")))), /*#__PURE__*/React__default.createElement(material.Modal, {
    open: openModal,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React__default.createElement(material.Box, {
    sx: style$d
  }, /*#__PURE__*/React__default.createElement(image.Image, {
    src: imgModal,
    alt: "Image",
    height: "100%"
  }), /*#__PURE__*/React__default.createElement(material.Box, {
    sx: styleButtonClose$1
  }, /*#__PURE__*/React__default.createElement(material.Tooltip, {
    title: "Fechar"
  }, /*#__PURE__*/React__default.createElement(CloseIcon, {
    onClick: function onClick() {
      return handleClose();
    }
  }))))), /*#__PURE__*/React__default.createElement(material.Dialog, {
    open: contentFileDelete.openDialog,
    onClose: handleCloseDialogDeleteFile,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(material.DialogTitle, {
    id: "alert-dialog-title"
  }, 'Tem Certeza que deseja Excluir: ' + contentFileDelete.file), /*#__PURE__*/React__default.createElement(material.DialogContent, null, /*#__PURE__*/React__default.createElement(material.DialogContentText, {
    id: "alert-dialog-description"
  }, "A exclus\xE3o ser\xE1 permanente!")), /*#__PURE__*/React__default.createElement(material.DialogActions, null, /*#__PURE__*/React__default.createElement(material.Button, {
    onClick: handleCloseDialogDeleteFile
  }, "Cancelar"), /*#__PURE__*/React__default.createElement(material.Button, {
    onClick: function onClick() {
      return setContentFileDelete({
        confirm: true,
        file: contentFileDelete.file,
        fileId: contentFileDelete.fileId,
        openDialog: false
      });
    },
    autoFocus: true
  }, "Confirmar Exclus\xE3o"))));
};
FilesContent.propTypes = (_FilesContent$propTyp = {
  filesList: PropTypes.object
}, _FilesContent$propTyp["filesList"] = PropTypes.shape({
  fileId: PropTypes.string,
  fileName: PropTypes.string,
  fileLink: PropTypes.string
}), _FilesContent$propTyp.editable = PropTypes.bool, _FilesContent$propTyp);
FilesContent.defaultProp = {
  filesList: [],
  editable: false
};

var DynaContext = /*#__PURE__*/React.createContext();
function contextReducer(state, action) {
  if (action.type === 'selecteds') {
    return _extends({}, state, {
      selecteds: action.value
    });
  } else if (action.type === 'columnsOrder') {
    return _extends({}, state, {
      columnsOrder: action.value
    });
  } else if (action.type === 'fields') {
    return _extends({}, state, {
      fields: action.value
    });
  } else if (action.type === 'checkedFields') {
    return _extends({}, state, {
      checkedFields: action.value
    });
  } else if (action.type === 'agrupamento') {
    return _extends({}, state, {
      agrupamento: action.value
    });
  } else if (action.type === 'options') {
    return _extends({}, state, {
      options: action.value
    });
  } else if (action.type === 'somar') {
    return _extends({}, state, {
      somar: action.value
    });
  } else if (action.type === 'summableFields') {
    return _extends({}, state, {
      summableFields: action.value
    });
  } else if (action.type === 'savedTree') {
    return _extends({}, state, {
      savedTree: action.value
    });
  } else if (action.type === 'title') {
    return _extends({}, state, {
      title: action.value
    });
  } else if (action.type === 'api') {
    return _extends({}, state, {
      api: action.value
    });
  } else if (action.type === 'endpoint') {
    return _extends({}, state, {
      endpoint: action.value
    });
  }
}
function DynaProvider(_ref) {
  var children = _ref.children;
  var _React$useReducer = React.useReducer(contextReducer, {
      selecteds: [],
      columnsOrder: [],
      fields: [],
      checkedFields: [],
      agrupamento: [],
      savedTree: [{
        id: 1,
        parent: 0,
        droppable: true,
        text: 'Grupo 01'
      }],
      options: [],
      somar: [],
      summableFields: [],
      title: '',
      api: {},
      endpoint: ''
    }),
    state = _React$useReducer[0],
    dispatch = _React$useReducer[1];
  var value = {
    state: state,
    dispatch: dispatch
  };
  return /*#__PURE__*/React.createElement(DynaContext.Provider, {
    value: value
  }, children);
}
function useSelectedRegisters() {
  var context = React.useContext(DynaContext);
  if (context === undefined) {
    throw new Error('useSelectedRegisters must be used within a DynaProvider');
  }
  return context;
}

function FieldsChecklist() {
  var _useSelectedRegisters = useSelectedRegisters(),
    _useSelectedRegisters2 = _useSelectedRegisters.state,
    fields = _useSelectedRegisters2.fields,
    checkedFields = _useSelectedRegisters2.checkedFields,
    dispatch = _useSelectedRegisters.dispatch;
  var handleToggle = function handleToggle(value) {
    return function () {
      var currentIndex = checkedFields.indexOf(value);
      var newChecked = [].concat(checkedFields);
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      dispatch({
        value: newChecked,
        type: 'checkedFields'
      });
    };
  };
  return /*#__PURE__*/React.createElement(Box$1, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "h5",
    gutterBottom: true,
    sx: {
      color: '#455a64'
    }
  }, "Campos disponiveis"), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(List, {
    sx: {
      width: '100%',
      maxWidth: 360
    }
  }, fields.map(function (value) {
    var labelId = "checkbox-list-label-" + value;
    return /*#__PURE__*/React.createElement(ListItem, {
      key: value,
      secondaryAction: /*#__PURE__*/React.createElement(IconButton, {
        edge: "end",
        "aria-label": "comments"
      }),
      disablePadding: true
    }, /*#__PURE__*/React.createElement(ListItemButton, {
      role: undefined,
      onClick: handleToggle(value),
      dense: true,
      sx: {
        height: '36px'
      }
    }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(Checkbox, {
      edge: "start",
      checked: checkedFields.indexOf(value) !== -1,
      tabIndex: -1,
      disableRipple: true,
      inputProps: {
        'aria-labelledby': labelId
      }
    })), /*#__PURE__*/React.createElement(ListItemText, {
      id: labelId,
      primary: value
    })));
  })));
}

var startPageY = 130;
var tableWidth = 0;
var setTableWidth = function setTableWidth(newWidth) {
  tableWidth = newWidth;
};
var mainHeaderStyle = {
  fillColor: [41, 89, 129],
  textColor: [255, 255, 255],
  fontStyle: 'bold'
};
var getColumnStyles = function getColumnStyles(qtdColumns) {
  var tempWidth = tableWidth / qtdColumns;
  var tempObj = {};
  for (var index = 0; index < qtdColumns; index++) {
    tempObj[index] = _extends({
      cellWidth: tempWidth
    }, mainHeaderStyle);
  }
  return tempObj;
};
var getHeaderStyles = function getHeaderStyles(qtdColumns) {
  var tempWidth = tableWidth / qtdColumns;
  var tempObj = {};
  for (var index = 0; index < qtdColumns; index++) {
    tempObj[index] = {
      cellWidth: tempWidth,
      fontStyle: 'bold',
      fillColor: [236, 245, 250]
    };
  }
  return tempObj;
};
var isArrayInArray = function isArrayInArray(arr, item) {
  var asString = JSON.stringify(item);
  var contains = arr.some(function (ele) {
    return JSON.stringify(ele) === asString;
  });
  return contains;
};
var getGroupHeader = function getGroupHeader(agrupamento, grupos) {
  var text = '';
  agrupamento.forEach(function (element, i) {
    text = text + (element.trim() + ": " + grupos[i].trim());
    if (i < agrupamento.length - 1) text = text + ', ';
  });
  return text;
};
var addSum = function addSum(Y, header, content, doc, autoTable) {
  var tempWidth = tableWidth / content.length;
  var tempObj = {};
  for (var index = 0; index < content.length; index++) {
    tempObj[index] = {
      cellWidth: tempWidth,
      textColor: [0, 0, 0],
      fillColor: [180, 180, 180],
      lineColor: [0, 0, 0],
      lineWidth: typeof content[index] === 'number' && index > 0 || index === 0 && content[index].length > 1 ? {
        top: 0.5,
        right: 0,
        bottom: 0,
        left: 0
      } : 0
    };
  }
  autoTable(doc, {
    body: [content],
    head: header,
    startY: Y,
    pageBreak: 'avoid',
    columnStyles: tempObj
  });
};
var addCount = function addCount(Y, header, content, doc, autoTable) {
  autoTable(doc, {
    body: [content],
    head: header,
    startY: Y,
    pageBreak: 'avoid',
    columnStyles: {
      0: {
        cellWidth: tableWidth,
        textColor: [0, 0, 0],
        fillColor: [180, 180, 180],
        lineColor: [0, 0, 0]
      }
    }
  });
};
var getFilteredHeader = function getFilteredHeader(fields, agrupamento, hideGroupField) {
  var temp = fields.slice();
  if (hideGroupField) {
    agrupamento.forEach(function (grupo) {
      if (temp.includes(grupo)) {
        var index = temp.indexOf(grupo);
        temp.splice(index, 1);
      }
    });
  }
  return temp;
};
var pageUpd = function pageUpd(Y, doc, page, max) {
  if (max === void 0) {
    max = 780;
  }
  if (page < doc.internal.getCurrentPageInfo().pageNumber) {
    page++;
  }
  if (Y > max) {
    doc.addPage();
    return startPageY;
  } else {
    return Y;
  }
};
var addheader = function addheader(doc, autoTable, fields, agrupamento, title, hideGroupField, addHeader) {
  if (addHeader === void 0) {
    addHeader = true;
  }
  var pageCount = doc.internal.getNumberOfPages();
  for (var i = 0; i < pageCount; i++) {
    var fullWidth = doc.internal.pageSize.getWidth();
    doc.setLineWidth(1);
    doc.setPage(i);
    doc.line(20, 30, fullWidth - 20, 30);
    doc.setFontSize(9);
    doc.text(fullWidth - 20, 39, 'Página ' + doc.internal.getCurrentPageInfo().pageNumber + '/' + pageCount, {
      align: 'right'
    });
    doc.setFontSize(18);
    doc.text(fullWidth / 2, 45, title[0], {
      align: 'center'
    });
    doc.setFontSize(12);
    doc.text(fullWidth / 2, 63, title[1], {
      align: 'center'
    });
    doc.text(fullWidth / 2, 78, title[2], {
      align: 'center'
    });
    doc.line(20, 95, fullWidth - 20, 95);
    doc.setFontSize(9);
    var today = new Date();
    doc.text(fullWidth - 20, 92, today.toLocaleString(), {
      align: 'right'
    });
    var filteredHeader = getFilteredHeader(fields, agrupamento, hideGroupField);
    if (addHeader) {
      doc.setDrawColor(0);
      doc.setFillColor(49, 88, 130);
      doc.rect(40, 96, fullWidth - 80, 33, 'F');
      autoTable(doc, {
        startY: 96,
        pageBreak: 'avoid',
        body: [filteredHeader],
        columnStyles: getColumnStyles(filteredHeader.length)
      });
    }
  }
};
var resumirDadosNvl1 = function resumirDadosNvl1(registroBase, agrupamento, somar) {
  var groupSections1 = [];
  var selectedsClone = [].concat(registroBase);
  var agrupamentoNivel1 = [].concat(agrupamento[0]);
  var newRegister = [];
  selectedsClone.forEach(function (element) {
    var tempGrupo = [];
    agrupamentoNivel1.forEach(function (grupo) {
      tempGrupo.push(element[grupo]);
    });
    if (!isArrayInArray(groupSections1, tempGrupo)) {
      groupSections1.push(tempGrupo);
    }
  });
  groupSections1.forEach(function (section1) {
    var tempDataSection1 = [];
    var tempResume = [];
    selectedsClone.forEach(function (register) {
      var addToGroup = true;
      section1.forEach(function (element, index) {
        if (register[agrupamentoNivel1[index]] !== element) {
          addToGroup = false;
        }
      });
      if (addToGroup) {
        tempDataSection1.push(register);
      }
    });
    agrupamentoNivel1.forEach(function (grupo, index) {
      tempResume.push(section1[index]);
    });
    somar.forEach(function (soma) {
      var sum = tempDataSection1.reduce(function (accumulator, object) {
        return accumulator + Number(object[soma]);
      }, 0);
      tempResume.push(sum);
    });
    newRegister.push(tempResume);
  });
  return {
    lines: newRegister,
    columns: [].concat(agrupamentoNivel1, somar).filter(function (item, index) {
      return [].concat(agrupamentoNivel1, somar).indexOf(item) === index;
    }),
    summableFields: somar
  };
};
var resumirDadosNvl2 = function resumirDadosNvl2(registroBase, agrupamento, somar) {
  var groupSections1 = [];
  var selectedsClone = [].concat(registroBase);
  var agrupamentoNivel1 = [].concat(agrupamento[0]);
  var agrupamentoNivel2 = [].concat(agrupamento[1]);
  var newRegister = [];
  selectedsClone.forEach(function (element) {
    var tempGrupo = [];
    agrupamentoNivel1.forEach(function (grupo) {
      tempGrupo.push(element[grupo]);
    });
    if (!isArrayInArray(groupSections1, tempGrupo)) {
      groupSections1.push(tempGrupo);
    }
  });
  groupSections1.forEach(function (section1) {
    var tempDataSection1 = [];
    selectedsClone.forEach(function (register) {
      var addToGroup = true;
      section1.forEach(function (element, index) {
        if (register[agrupamentoNivel1[index]] !== element) {
          addToGroup = false;
        }
      });
      if (addToGroup) {
        tempDataSection1.push(register);
      }
    });
    var groupSections2 = [];
    tempDataSection1.forEach(function (element) {
      var tempGrupo = [];
      agrupamentoNivel2.forEach(function (grupo) {
        tempGrupo.push(element[grupo]);
      });
      if (!isArrayInArray(groupSections2, tempGrupo)) {
        groupSections2.push(tempGrupo);
      }
    });
    groupSections2.forEach(function (section2) {
      var tempDataSection2 = [];
      var tempResume = [];
      tempDataSection1.forEach(function (register) {
        var addToGroup = true;
        section2.forEach(function (element, index) {
          if (register[agrupamentoNivel2[index]] !== element) {
            addToGroup = false;
          }
        });
        if (addToGroup) {
          tempDataSection2.push(register);
        }
      });
      agrupamentoNivel1.forEach(function (grupo, index) {
        tempResume.push(section1[index]);
      });
      agrupamentoNivel2.forEach(function (grupo, index) {
        tempResume.push(section2[index]);
      });
      somar.forEach(function (soma) {
        var sum = tempDataSection2.reduce(function (accumulator, object) {
          return accumulator + Number(object[soma]);
        }, 0);
        tempResume.push(sum);
      });
      newRegister.push(tempResume);
    });
  });
  return {
    lines: newRegister,
    columns: [].concat(agrupamentoNivel1, agrupamentoNivel2, somar).filter(function (item, index) {
      return [].concat(agrupamentoNivel1, agrupamentoNivel2, somar).indexOf(item) === index;
    }),
    summableFields: somar
  };
};
var getFormattedData = function getFormattedData(_data, fields) {
  var newData = [];
  _data === null || _data === void 0 ? void 0 : _data.forEach(function (register, i) {
    var temp = {};
    fields === null || fields === void 0 ? void 0 : fields.forEach(function (field, j) {
      temp[field] = register[j];
    });
    temp.id = i;
    newData.push(temp);
  });
  return newData;
};
var resumir = function resumir(registroBase, agrupamento, somar) {
  return agrupamento.length > 1 ? resumirDadosNvl2(registroBase, agrupamento, somar) : resumirDadosNvl1(registroBase, agrupamento, somar);
};
var defaultModelRoute = '/app-control/report-models';

var PDFNivel1 = function PDFNivel1(selecteds, fields, options, agrupamento, somar, title) {
  if (agrupamento === void 0) {
    agrupamento = [];
  }
  if (somar === void 0) {
    somar = [];
  }
  var isHorizontal = options.includes('Horizontal (paisagem)');
  var isCounting = options.includes('Contador de registros');
  var maxLength = isHorizontal ? '461' : '750';
  var doc = new jspdf.jsPDF(isHorizontal ? 'l' : 'p', 'pt', 'a4');
  var page = 1;
  var hideGroupField = !options.includes('Mostrar campo de agrupamento');
  var addSumFooter = function addSumFooter(dataSection) {
    var somaContent = [];
    var filteredHeader = getFilteredHeader(fields, agrupamento, hideGroupField);
    filteredHeader.forEach(function (element) {
      if (somar.includes(element)) {
        var sumWithInitial = dataSection.reduce(function (acc, data) {
          return acc + Number(data[element]);
        }, 0);
        somaContent.push(somaContent.length === 0 ? "\u03A3 " + sumWithInitial : sumWithInitial);
      } else {
        somaContent.push(somaContent.length === 0 ? "\u03A3" : null);
      }
    });
    addSum(doc.lastAutoTable.finalY, null, somaContent, doc, autoTable);
  };
  var addCountFooter = function addCountFooter(dataSection) {
    var contadorContent = ["Reg:  " + dataSection.length];
    addCount(doc.lastAutoTable.finalY, null, contadorContent, doc, autoTable);
  };
  var addPrimeiroNivel = function addPrimeiroNivel(Y, header, content) {
    autoTable(doc, {
      startY: Y > startPageY ? Y : startPageY,
      head: header ? [header] : [],
      pageBreak: 'avoid',
      margin: {
        top: startPageY
      },
      body: content
    });
  };
  var addtable = function addtable(data) {
    var cellWidth = tableWidth / (fields.length - (hideGroupField ? agrupamento.length : 0));
    data.forEach(function (el, index) {
      var tempContent = [];
      for (var _i = 0, _Object$entries = Object.entries(el); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _Object$entries[_i],
          value = _Object$entries$_i[1];
        tempContent.push({
          content: typeof value === 'string' ? value.trim() : value,
          styles: {
            fillColor: index % 2 === 0 ? [252, 252, 252] : [245, 245, 245],
            cellWidth: cellWidth
          }
        });
      }
      var Y = pageUpd(doc.lastAutoTable.finalY, doc, page, maxLength);
      addPrimeiroNivel(Y, null, [tempContent]);
    });
  };
  autoTable(doc, {
    startY: startPageY
  });
  if (agrupamento.length > 0) {
    var groupSections = [];
    var selectedsClone = [].concat(selecteds);
    selectedsClone.forEach(function (element) {
      var tempGrupo = [];
      agrupamento.forEach(function (grupo) {
        tempGrupo.push(element[grupo]);
      });
      if (!isArrayInArray(groupSections, tempGrupo)) {
        groupSections.push(tempGrupo);
      }
    });
    groupSections.forEach(function (section) {
      var Y = doc.lastAutoTable.finalY;
      var tempDataSection = [];
      selectedsClone.forEach(function (register) {
        var addToGroup = true;
        section.forEach(function (element, index) {
          if (register[agrupamento[index]] !== element) {
            addToGroup = false;
          }
        });
        if (addToGroup) {
          if (hideGroupField) {
            agrupamento.forEach(function (grupo) {
              delete register[grupo];
            });
          }
          tempDataSection.push(register);
        }
      });
      Y = pageUpd(Y, doc, page, maxLength);
      autoTable(doc, {
        body: [[getGroupHeader(agrupamento, section)]],
        startY: Y,
        pageBreak: 'avoid',
        columnStyles: {
          0: {
            fillColor: [205, 214, 236],
            textColor: [0, 0, 0],
            fontStyle: 'bold'
          }
        }
      });
      addtable(tempDataSection);
      if (somar.length > 0) addSumFooter(tempDataSection);
      if (isCounting) addCountFooter(tempDataSection);
      autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 2
      });
    });
  } else {
    addtable(selecteds);
    if (somar.length > 0) addSumFooter(selecteds);
    if (isCounting) addCountFooter(selecteds);
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 2
    });
  }
  addheader(doc, autoTable, fields, agrupamento, title, hideGroupField);
  doc.save((title[0] === '' ? 'Título não definido' : title[0]) + ".pdf");
};

var PDFNivel2 = function PDFNivel2(selecteds, fields, options, agrupamento, somar, title) {
  if (agrupamento === void 0) {
    agrupamento = [];
  }
  if (somar === void 0) {
    somar = [];
  }
  var isHorizontal = options.includes('Horizontal (paisagem)');
  var isCounting = options.includes('Contador de registros');
  var maxLength = isHorizontal ? '461' : '750';
  var doc = new jspdf.jsPDF(isHorizontal ? 'l' : 'p', 'pt', 'a4');
  var page = 1;
  var hideGroupField = !options.includes('Mostrar campo de agrupamento');
  var addSumFooter = function addSumFooter(dataSection) {
    var somaContent = [];
    var filteredHeader = fields.slice();
    agrupamento.forEach(function (grupo) {
      filteredHeader = getFilteredHeader(filteredHeader, grupo, hideGroupField);
    });
    filteredHeader.forEach(function (element) {
      if (somar.includes(element)) {
        var sumWithInitial = dataSection.reduce(function (acc, data) {
          return acc + Number(data[element]);
        }, 0);
        somaContent.push(somaContent.length === 0 ? "\u03A3 " + sumWithInitial : sumWithInitial);
      } else {
        somaContent.push(somaContent.length === 0 ? "\u03A3" : null);
      }
    });
    addSum(doc.lastAutoTable.finalY, null, somaContent, doc, autoTable);
  };
  var addCountFooter = function addCountFooter(dataSection) {
    var contadorContent = ["Reg:  " + dataSection.length];
    addCount(doc.lastAutoTable.finalY, null, contadorContent, doc, autoTable);
  };
  var addPrimeiroNivel = function addPrimeiroNivel(Y, header, content) {
    autoTable(doc, {
      startY: Y > startPageY ? Y : startPageY,
      head: header ? [header] : [],
      pageBreak: 'avoid',
      margin: {
        top: startPageY
      },
      body: content
    });
  };
  var addtable = function addtable(data) {
    var cellWidth = tableWidth / (fields.length - (hideGroupField ? agrupamento[0].length + agrupamento[1].length : 0));
    data.forEach(function (el, index) {
      var tempContent = [];
      for (var _i = 0, _Object$entries = Object.entries(el); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _Object$entries[_i],
          value = _Object$entries$_i[1];
        tempContent.push({
          content: value.trim(),
          styles: {
            fillColor: index % 2 === 0 ? [252, 252, 252] : [245, 245, 245],
            cellWidth: cellWidth
          }
        });
      }
      var Y = pageUpd(doc.lastAutoTable.finalY, doc, page, maxLength);
      addPrimeiroNivel(Y, null, [tempContent]);
    });
  };
  autoTable(doc, {
    startY: startPageY
  });
  var groupSections1 = [];
  var selectedsClone = [].concat(selecteds);
  var agrupamentoNivel1 = agrupamento[0];
  var agrupamentoNivel2 = agrupamento[1];
  selectedsClone.forEach(function (element) {
    var tempGrupo = [];
    agrupamentoNivel1.forEach(function (grupo) {
      tempGrupo.push(element[grupo]);
    });
    if (!isArrayInArray(groupSections1, tempGrupo)) {
      groupSections1.push(tempGrupo);
    }
  });
  groupSections1.forEach(function (section1) {
    var Y = doc.lastAutoTable.finalY;
    var tempDataSection1 = [];
    selectedsClone.forEach(function (register) {
      var addToGroup = true;
      section1.forEach(function (element, index) {
        if (register[agrupamentoNivel1[index]] !== element) {
          addToGroup = false;
        }
      });
      if (addToGroup) {
        if (hideGroupField) {
          agrupamentoNivel1.forEach(function (grupo) {
            delete register[grupo];
          });
        }
        tempDataSection1.push(register);
      }
    });
    Y = pageUpd(Y, doc, page, maxLength);
    autoTable(doc, {
      body: [[getGroupHeader(agrupamentoNivel1, section1)]],
      startY: Y,
      pageBreak: 'avoid',
      columnStyles: {
        0: {
          fillColor: [205, 214, 236],
          textColor: [0, 0, 0],
          fontStyle: 'bold'
        }
      }
    });
    var groupSections2 = [];
    tempDataSection1.forEach(function (element) {
      var tempGrupo = [];
      agrupamentoNivel2.forEach(function (grupo) {
        tempGrupo.push(element[grupo]);
      });
      if (!isArrayInArray(groupSections2, tempGrupo)) {
        groupSections2.push(tempGrupo);
      }
    });
    groupSections2.forEach(function (section2) {
      var tempDataSection2 = [];
      Y = pageUpd(doc.lastAutoTable.finalY, doc, page, maxLength);
      autoTable(doc, {
        body: [agrupamentoNivel2],
        startY: Y,
        pageBreak: 'avoid',
        columnStyles: getHeaderStyles(section2.length)
      });
      autoTable(doc, {
        body: [section2],
        startY: doc.lastAutoTable.finalY,
        pageBreak: 'avoid',
        columnStyles: getHeaderStyles(section2.length)
      });
      tempDataSection1.forEach(function (register) {
        var addToGroup = true;
        section2.forEach(function (element, index) {
          if (register[agrupamentoNivel2[index]] !== element) {
            addToGroup = false;
          }
        });
        if (addToGroup) {
          if (hideGroupField) {
            agrupamentoNivel2.forEach(function (grupo) {
              delete register[grupo];
            });
          }
          tempDataSection2.push(register);
        }
      });
      addtable(tempDataSection2);
      if (somar.length > 0) addSumFooter(tempDataSection2);
      if (isCounting) addCountFooter(tempDataSection2);
      autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 2
      });
    });
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 2
    });
  });
  addheader(doc, autoTable, fields, agrupamento.flat(), title, hideGroupField);
  doc.save((title[0] === '' ? 'Título não definido' : title[0]) + ".pdf");
};

function OptionsChecklist(_ref) {
  var listOptions = _ref.listOptions,
    title = _ref.title;
  var _useSelectedRegisters = useSelectedRegisters(),
    options = _useSelectedRegisters.state.options,
    dispatch = _useSelectedRegisters.dispatch;
  var handleToggle = function handleToggle(value) {
    return function () {
      var currentIndex = options.indexOf(value);
      var newChecked = [].concat(options);
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      dispatch({
        value: newChecked,
        type: 'options'
      });
    };
  };
  return /*#__PURE__*/React.createElement(Box$1, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "h5",
    gutterBottom: true,
    sx: {
      color: '#455a64'
    }
  }, title), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(List, {
    sx: {
      width: '100%',
      maxWidth: 360
    }
  }, listOptions.map(function (value) {
    var labelId = "checkbox-list-label-" + value;
    return /*#__PURE__*/React.createElement(ListItem, {
      key: value,
      secondaryAction: /*#__PURE__*/React.createElement(IconButton, {
        edge: "end",
        "aria-label": "comments"
      }),
      disablePadding: true
    }, /*#__PURE__*/React.createElement(ListItemButton, {
      role: undefined,
      onClick: handleToggle(value),
      dense: true,
      sx: {
        height: '36px'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      edge: "start",
      checked: options.indexOf(value) !== -1,
      tabIndex: -1,
      disableRipple: true,
      inputProps: {
        'aria-labelledby': labelId
      }
    }), /*#__PURE__*/React.createElement(ListItemText, {
      id: labelId,
      primary: value
    })));
  })));
}

const TEXT = '__NATIVE_TEXT__';

var TypeIcon = function TypeIcon(props) {
  if (props.droppable) {
    return /*#__PURE__*/React__default.createElement(FolderIcon, null);
  }
  return /*#__PURE__*/React__default.createElement(DescriptionIcon, null);
};

var ExternalNode = function ExternalNode(props) {
  var droppable = props.node.droppable;
  var handleDragStart = function handleDragStart(e) {
    e.dataTransfer.setData('text', JSON.stringify(props.node));
  };
  return /*#__PURE__*/React__default.createElement("div", {
    draggable: true,
    className: undefined.root,
    onDragStart: handleDragStart
  }, /*#__PURE__*/React__default.createElement("div", {
    className: undefined.filetype
  }, /*#__PURE__*/React__default.createElement(TypeIcon, {
    droppable: droppable || false
  })), /*#__PURE__*/React__default.createElement("div", {
    className: undefined.label
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body2"
  }, props.node.text)));
};

var CustomNode = function CustomNode(props) {
  var droppable = props.node.droppable;
  var indent = props.depth * 24;
  var handleToggle = function handleToggle(e) {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: "tree-node " + undefined.root,
    style: {
      paddingInlineStart: indent
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: undefined.expandIconWrapper + " " + (props.isOpen ? undefined.isOpen : '')
  }, props.node.droppable && /*#__PURE__*/React__default.createElement("div", {
    onClick: handleToggle
  }, /*#__PURE__*/React__default.createElement(ArrowRightIcon, null))), /*#__PURE__*/React__default.createElement(TypeIcon, {
    droppable: droppable || false
  }), /*#__PURE__*/React__default.createElement("div", {
    className: undefined.labelGridItem
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body2"
  }, props.node.text)));
};

var CustomDragPreview = function CustomDragPreview(props) {
  var item = props.monitorProps.item;
  return /*#__PURE__*/React__default.createElement("div", {
    className: undefined.root
  }, /*#__PURE__*/React__default.createElement("div", {
    className: undefined.icon
  }, /*#__PURE__*/React__default.createElement(TypeIcon, {
    droppable: item.droppable || false
  })), /*#__PURE__*/React__default.createElement("div", {
    className: undefined.label
  }, item.text));
};

var formatExternalNodes = function formatExternalNodes(nodes, group) {
  var newExternalNodes = [];
  nodes.forEach(function (element, i) {
    if (!group.map(function (a) {
      return a.id;
    }).includes(element)) {
      newExternalNodes.push({
        id: element,
        parent: 0,
        droppable: false,
        text: element
      });
    }
  });
  return newExternalNodes;
};
var Agrupamento = function Agrupamento(_ref) {
  var handleClose = _ref.handleClose;
  var _useSelectedRegisters = useSelectedRegisters(),
    _useSelectedRegisters2 = _useSelectedRegisters.state,
    checkedFields = _useSelectedRegisters2.checkedFields,
    savedTree = _useSelectedRegisters2.savedTree,
    dispatch = _useSelectedRegisters.dispatch;
  var _useState = React.useState(savedTree),
    tree = _useState[0],
    setTree = _useState[1];
  var _useState2 = React.useState(savedTree.some(function (obj) {
      return obj.id === 11;
    })),
    secondLevel = _useState2[0],
    setSecondLevel = _useState2[1];
  var _useState3 = React.useState(formatExternalNodes(checkedFields, savedTree)),
    externalNodes = _useState3[0],
    setExternalNodes = _useState3[1];
  React.useEffect(function () {
    return setExternalNodes(formatExternalNodes(checkedFields, savedTree));
  }, [checkedFields, savedTree]);
  React.useEffect(function () {
    return setTree(savedTree);
  }, [savedTree]);
  var handleDrop = function handleDrop(newTree, options) {
    var dropTargetId = options.dropTargetId,
      monitor = options.monitor;
    var itemType = monitor.getItemType();
    if (itemType === TEXT) {
      var nodeJson = monitor.getItem().text;
      var node = JSON.parse(nodeJson);
      node.parent = dropTargetId;
      setTree([].concat(newTree, [node]));
      setExternalNodes(externalNodes.filter(function (exnode) {
        return exnode.id !== node.id;
      }));
      return;
    }
    setTree(newTree);
  };
  var handleSalvar = function handleSalvar() {
    var grupo1 = [];
    var grupo2 = [];
    tree.forEach(function (el) {
      if (el.parent === 1) {
        grupo1.push(el.id);
      } else if (el.parent === 11) {
        grupo2.push(el.id);
      }
    });
    if (grupo2.length > 0) {
      dispatch({
        value: [grupo1, grupo2],
        type: 'agrupamento'
      });
    } else if (grupo1.length > 0) {
      dispatch({
        value: [grupo1],
        type: 'agrupamento'
      });
    } else {
      dispatch({
        value: [],
        type: 'agrupamento'
      });
    }
    dispatch({
      value: tree,
      type: 'savedTree'
    });
    handleClose();
  };
  var handleLimpar = function handleLimpar() {
    setSecondLevel(false);
    setTree([{
      id: 1,
      parent: 0,
      droppable: true,
      text: 'Grupo 01'
    }]);
    setExternalNodes(formatExternalNodes(checkedFields, [{
      id: 1,
      parent: 0,
      droppable: true,
      text: 'Grupo 01'
    }]));
  };
  var handleNewGroup = function handleNewGroup() {
    setSecondLevel(true);
    setTree([].concat(tree, [{
      id: 11,
      parent: 0,
      droppable: true,
      text: 'Grupo 02'
    }]));
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Stack, {
    direction: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    spacing: 0,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h5",
    gutterBottom: true,
    sx: {
      padding: '8px 12px'
    }
  }, "Op\xE7\xF5es de Agrupamento"), /*#__PURE__*/React__default.createElement(Divider, null)), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    direction: "row",
    xs: 12,
    className: undefined.rootGrid
  }, /*#__PURE__*/React__default.createElement("div", {
    className: undefined.externalContainer
  }, /*#__PURE__*/React__default.createElement("div", null, externalNodes === null || externalNodes === void 0 ? void 0 : externalNodes.map(function (node) {
    return /*#__PURE__*/React__default.createElement(ExternalNode, {
      key: node.id,
      node: node
    });
  }))), /*#__PURE__*/React__default.createElement(Grid, null, /*#__PURE__*/React__default.createElement(reactDnd.DndProvider, {
    backend: reactDndTreeview.MultiBackend,
    options: reactDndTreeview.getBackendOptions(),
    debugMode: true
  }, /*#__PURE__*/React__default.createElement(reactDndTreeview.Tree, {
    rootId: 0,
    tree: tree,
    extraAcceptTypes: [TEXT],
    initialOpen: true,
    classes: {
      root: undefined.treeRoot,
      draggingSource: undefined.draggingSource,
      dropTarget: undefined.dropTarget
    },
    render: function render(node, options) {
      return /*#__PURE__*/React__default.createElement(CustomNode, _extends({
        node: node
      }, options));
    },
    dragPreviewRender: function dragPreviewRender(monitorProps) {
      return /*#__PURE__*/React__default.createElement(CustomDragPreview, {
        monitorProps: monitorProps
      });
    },
    onDrop: handleDrop
  })))), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 12,
    container: true,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: {
      xs: 'column',
      sm: 'row'
    },
    spacing: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    xs: 6,
    justifyContent: "flex-start",
    style: {
      padding: '8px'
    }
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "outlined",
    disabled: secondLevel,
    onClick: handleNewGroup
  }, "Novo grupo")), /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "outlined",
    onClick: handleLimpar
  }, "Limpar"))), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    xs: 6,
    justifyContent: "flex-end",
    style: {
      padding: '8px'
    }
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    onClick: handleClose,
    startIcon: /*#__PURE__*/React__default.createElement(CancelOutlinedIcon, null)
  }, "Cancelar")), /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    onClick: handleSalvar,
    startIcon: /*#__PURE__*/React__default.createElement(SaveOutlinedIcon, null),
    color: "success"
  }, "Salvar"))))));
};

var Somar = function Somar(_ref) {
  var handleClose = _ref.handleClose;
  var _useState = React.useState([]),
    selecteds = _useState[0],
    setSelecteds = _useState[1];
  var _useSelectedRegisters = useSelectedRegisters(),
    _useSelectedRegisters2 = _useSelectedRegisters.state,
    somar = _useSelectedRegisters2.somar,
    summableFields = _useSelectedRegisters2.summableFields,
    dispatch = _useSelectedRegisters.dispatch;
  var handleSalvar = function handleSalvar() {
    dispatch({
      value: selecteds,
      type: 'somar'
    });
    handleClose();
  };
  var handleLimpar = function handleLimpar() {
    setSelecteds([]);
  };
  var handleToggle = function handleToggle(value) {
    return function () {
      var currentIndex = selecteds.indexOf(value);
      var newChecked = [].concat(selecteds);
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setSelecteds(newChecked);
    };
  };
  React.useEffect(function () {
    setSelecteds(somar);
  }, []);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Stack, {
    direction: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    spacing: 0,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h5",
    gutterBottom: true,
    sx: {
      padding: '8px 12px'
    }
  }, "Op\xE7\xF5es de Soma"), /*#__PURE__*/React__default.createElement(Divider, null)), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    direction: "row",
    xs: 12,
    style: {
      overflowY: 'auto',
      height: '100%',
      padding: '2px'
    }
  }, /*#__PURE__*/React__default.createElement(List, {
    sx: {
      width: '100%',
      maxWidth: 360
    }
  }, summableFields.map(function (value) {
    var labelId = "checkbox-list-label-" + value;
    return /*#__PURE__*/React__default.createElement(ListItem, {
      key: value,
      secondaryAction: /*#__PURE__*/React__default.createElement(IconButton, {
        edge: "end",
        "aria-label": "comments"
      }),
      disablePadding: true
    }, /*#__PURE__*/React__default.createElement(ListItemButton, {
      role: undefined,
      onClick: handleToggle(value),
      dense: true,
      sx: {
        height: '36px'
      }
    }, /*#__PURE__*/React__default.createElement(ListItemIcon, null, /*#__PURE__*/React__default.createElement(Checkbox, {
      edge: "start",
      checked: selecteds.indexOf(value) !== -1,
      tabIndex: -1,
      disableRipple: true,
      inputProps: {
        'aria-labelledby': labelId
      }
    })), /*#__PURE__*/React__default.createElement(ListItemText, {
      id: labelId,
      primary: value
    })));
  }))), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 12,
    container: true,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: {
      xs: 'column',
      sm: 'row'
    },
    spacing: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    xs: 6,
    justifyContent: "flex-start",
    style: {
      padding: '8px'
    }
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "outlined",
    onClick: handleLimpar
  }, "Limpar"))), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    xs: 6,
    justifyContent: "flex-end",
    style: {
      padding: '8px'
    }
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    onClick: handleClose,
    startIcon: /*#__PURE__*/React__default.createElement(CancelOutlinedIcon, null)
  }, "Cancelar")), /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    onClick: handleSalvar,
    startIcon: /*#__PURE__*/React__default.createElement(SaveOutlinedIcon, null),
    color: "success"
  }, "Salvar"))))));
};

var Modelos = function Modelos(_ref) {
  var _modelosList$value;
  var fetchData = function fetchData() {
    try {
      return Promise.resolve(api.get(defaultModelRoute + "?endpoint=" + endpoint)).then(function (res) {
        setModelosList(res.data);
        if (modeloStandard) {
          setValue(modeloStandard);
        } else if (res.data.length > 0) {
          res.data.forEach(function (element) {
            if (element.standard) {
              setValue(String(element.id));
            }
          });
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var handleClose = _ref.handleClose,
    applyModelo = _ref.applyModelo,
    modeloStandard = _ref.modeloStandard,
    updateModeloStandard = _ref.updateModeloStandard;
  var _useSelectedRegisters = useSelectedRegisters(),
    _useSelectedRegisters2 = _useSelectedRegisters.state,
    api = _useSelectedRegisters2.api,
    endpoint = _useSelectedRegisters2.endpoint;
  var _useState = React.useState(false),
    resumeConfirmation = _useState[0],
    setResumeConfirmation = _useState[1];
  var handleOpenConfirmation = function handleOpenConfirmation() {
    return setResumeConfirmation(true);
  };
  var handleCloseConfirmation = function handleCloseConfirmation() {
    return setResumeConfirmation(false);
  };
  var _useState2 = React.useState(''),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = React.useState([]),
    modelosList = _useState3[0],
    setModelosList = _useState3[1];
  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };
  React.useEffect(function () {
    fetchData();
  }, []);
  var handleSalvar = function handleSalvar() {
    updateModeloStandard(value);
    applyModelo(JSON.parse(modelosList.find(function (obj) {
      return String(obj.id) === value;
    }).configuration));
    handleClose();
  };
  var handleDelete = function handleDelete() {
    try {
      api["delete"](defaultModelRoute + "/" + value).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
      fetchData();
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Stack, {
    direction: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    spacing: 0,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h5",
    gutterBottom: true,
    sx: {
      padding: '8px 12px'
    }
  }, "Modelos"), /*#__PURE__*/React__default.createElement(Divider, null)), /*#__PURE__*/React__default.createElement(Typography, {
    sx: {
      padding: '8px 0px'
    }
  }, "Selecione um modelo para aplicar no relat\xF3rio atual:"), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    direction: "row",
    xs: 12,
    style: {
      overflowY: 'auto',
      height: '100%',
      padding: '2px'
    }
  }, /*#__PURE__*/React__default.createElement(RadioGroup, {
    "aria-labelledby": "demo-controlled-radio-buttons-group",
    name: "controlled-radio-buttons-group",
    value: value,
    onChange: handleChange
  }, modelosList === null || modelosList === void 0 ? void 0 : modelosList.map(function (modelo) {
    return /*#__PURE__*/React__default.createElement(FormControlLabel, {
      key: modelo.name,
      value: modelo.id,
      control: /*#__PURE__*/React__default.createElement(Radio, null),
      label: modelo.standard ? /*#__PURE__*/React__default.createElement(Fragment, null, modelo.name, /*#__PURE__*/React__default.createElement(Typography, {
        variant: "caption",
        sx: {
          padding: '8px 12px'
        }
      }, "(padr\xE3o)")) : modelo.name
    });
  }))), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 12,
    container: true,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: {
      xs: 'column',
      sm: 'row'
    },
    spacing: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    xs: 5,
    justifyContent: "flex-start",
    style: {
      padding: '8px'
    }
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "outlined",
    onClick: handleOpenConfirmation,
    startIcon: /*#__PURE__*/React__default.createElement(DeleteIcon, null)
  }, "Remover modelo"))), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    xs: 7,
    justifyContent: "flex-end",
    style: {
      padding: '8px'
    }
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    onClick: handleClose,
    startIcon: /*#__PURE__*/React__default.createElement(CancelOutlinedIcon, null)
  }, "Cancelar")), /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    onClick: handleSalvar,
    startIcon: /*#__PURE__*/React__default.createElement(SaveOutlinedIcon, null),
    color: "success"
  }, "Carregar"))))), /*#__PURE__*/React__default.createElement(Dialog, {
    open: resumeConfirmation,
    onClose: handleCloseConfirmation,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(DialogTitle, {
    id: "alert-dialog-title"
  }, "Deseja remover o modelo ", (_modelosList$value = modelosList[value]) === null || _modelosList$value === void 0 ? void 0 : _modelosList$value.name, "?"), /*#__PURE__*/React__default.createElement(DialogContent, null, /*#__PURE__*/React__default.createElement(DialogContentText, {
    id: "alert-dialog-description"
  }, "N\xE3o ser\xE1 poss\xEDvel recuper\xE1-lo")), /*#__PURE__*/React__default.createElement(DialogActions, null, /*#__PURE__*/React__default.createElement(Button, {
    onClick: handleCloseConfirmation,
    variant: "contained"
  }, "Cancelar"), /*#__PURE__*/React__default.createElement(Button, {
    onClick: function onClick() {
      handleDelete();
      handleCloseConfirmation();
    },
    autoFocus: true,
    variant: "contained",
    color: "error"
  }, "Remover"))));
};

var NovoModelo = function NovoModelo(_ref) {
  var handleClose = _ref.handleClose,
    options = _ref.options;
  var _useState = React.useState(''),
    value = _useState[0],
    setValue = _useState[1];
  var _React$useState = React__default.useState(false),
    checked = _React$useState[0],
    setChecked = _React$useState[1];
  var handleChangePadrao = function handleChangePadrao(event) {
    setChecked(event.target.checked);
  };
  var _useSelectedRegisters = useSelectedRegisters(),
    _useSelectedRegisters2 = _useSelectedRegisters.state,
    checkedFields = _useSelectedRegisters2.checkedFields,
    columnsOrder = _useSelectedRegisters2.columnsOrder,
    savedTree = _useSelectedRegisters2.savedTree,
    somar = _useSelectedRegisters2.somar,
    api = _useSelectedRegisters2.api,
    endpoint = _useSelectedRegisters2.endpoint;
  var handleSalvar = function handleSalvar() {
    try {
      return Promise.resolve(api.post(defaultModelRoute, {
        endpoint: endpoint,
        name: value,
        standard: checked,
        configuration: JSON.stringify({
          options: options,
          group: savedTree,
          columnsOrder: columnsOrder,
          checkedFields: checkedFields,
          sum: somar
        })
      }).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      })).then(function () {
        handleClose();
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Stack, {
    direction: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    spacing: 0,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h5",
    gutterBottom: true,
    sx: {
      padding: '8px 12px'
    }
  }, "Adicionar novo modelo"), /*#__PURE__*/React__default.createElement(Divider, null)), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    direction: "row",
    xs: 12,
    style: {
      overflowY: 'auto',
      height: '100%',
      padding: '2px'
    },
    justifyContent: "space-between"
  }, /*#__PURE__*/React__default.createElement(Grid, {
    xs: 12
  }, /*#__PURE__*/React__default.createElement(Grid, {
    style: {
      padding: '8px',
      margin: '8px'
    }
  }, /*#__PURE__*/React__default.createElement(Box$1, {
    sx: {
      paddingTop: 1
    }
  }, /*#__PURE__*/React__default.createElement(TextField, {
    id: "nome-arquivo",
    label: "Informe o nome do modelo",
    variant: "outlined",
    fullWidth: true,
    value: value,
    InputLabelProps: {
      shrink: true
    },
    onChange: function onChange(event) {
      setValue(event.target.value);
    }
  })), /*#__PURE__*/React__default.createElement(Box$1, {
    sx: {
      paddingTop: 1
    }
  }, /*#__PURE__*/React__default.createElement(FormGroup, null, /*#__PURE__*/React__default.createElement(FormControlLabel, {
    control: /*#__PURE__*/React__default.createElement(Switch, {
      checked: checked,
      onChange: handleChangePadrao,
      inputProps: {
        'aria-label': 'modelo-padrao'
      }
    }),
    label: "Padr\xE3o"
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "caption",
    display: "block",
    gutterBottom: true,
    sx: {
      padding: '8px 12px'
    }
  }, "*Salvando como padr\xE3o o modelo (op\xE7\xF5es, agrupamentos, ordena\xE7\xE3o de colunas, campos, e somas) ser\xE1 pr\xE9 carregado na pr\xF3xima vez que acessar esse relat\xF3rio.")))))), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 12,
    container: true,
    justifyContent: "flex-end",
    flexDirection: {
      xs: 'column',
      sm: 'row'
    },
    spacing: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    onClick: handleClose,
    startIcon: /*#__PURE__*/React__default.createElement(CancelOutlinedIcon, null)
  }, "Cancelar")), /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    onClick: handleSalvar,
    startIcon: /*#__PURE__*/React__default.createElement(SaveOutlinedIcon, null),
    color: "success"
  }, "Salvar")))));
};

var tiposExportacao = ['Excel', 'Texto', 'Word', 'Calc (BrOffice)', 'CSV'];
var tiposDatas = ['DDMMYY', 'MMDDYY', 'MMYY', 'DDMMYYYY'];
var opcoesExportacao = ['Nova pasta', 'Exportar cabeçalho', 'manter Excel Visível'];
var Exportacao = function Exportacao(_ref) {
  var handleClose = _ref.handleClose;
  var _useSelectedRegisters = useSelectedRegisters();
  var _useState = React.useState(''),
    extensao = _useState[0],
    setExtensao = _useState[1];
  var _useState2 = React.useState(''),
    selectedData = _useState2[0],
    setSelectedData = _useState2[1];
  var _useState3 = React.useState(''),
    fileName = _useState3[0],
    setFileName = _useState3[1];
  var _useState4 = React.useState([]),
    selecteds = _useState4[0],
    setSelecteds = _useState4[1];
  var handleToggleOpcao = function handleToggleOpcao(value) {
    return function () {
      var currentIndex = selecteds.indexOf(value);
      var newChecked = [].concat(selecteds);
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setSelecteds(newChecked);
    };
  };
  var handleChangeExtensao = function handleChangeExtensao(event) {
    setExtensao(event.target.value);
  };
  var handleSalvar = function handleSalvar() {
    handleClose();
  };
  var handleChangeData = function handleChangeData(event) {
    setSelectedData(event.target.value);
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Stack, {
    direction: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    spacing: 0,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h5",
    gutterBottom: true,
    sx: {
      padding: '8px 12px'
    }
  }, "Exporta\xE7\xE3o"), /*#__PURE__*/React__default.createElement(Divider, null)), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    direction: "row",
    xs: 12,
    style: {
      overflowY: 'auto',
      height: '100%',
      padding: '2px'
    },
    justifyContent: "space-between"
  }, /*#__PURE__*/React__default.createElement(Grid, {
    xs: 8
  }, /*#__PURE__*/React__default.createElement(Grid, {
    style: {
      padding: '8px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      borderRadius: '4px',
      margin: '8px'
    }
  }, /*#__PURE__*/React__default.createElement(FormLabel, {
    id: "controlled-radio-buttons-group2"
  }, "Op\xE7\xF5es de formata\xE7\xE3o"), /*#__PURE__*/React__default.createElement(Box$1, {
    sx: {
      paddingTop: 1
    }
  }, /*#__PURE__*/React__default.createElement(FormControl, {
    fullWidth: true
  }, /*#__PURE__*/React__default.createElement(InputLabel, {
    id: "simple-select-label",
    shrink: true
  }, "Formato de data"), /*#__PURE__*/React__default.createElement(Select, {
    labelId: "simple-select-label",
    id: "simple-select",
    value: selectedData,
    label: "Formato de data",
    onChange: handleChangeData,
    notched: true
  }, tiposDatas.map(function (tipo) {
    return /*#__PURE__*/React__default.createElement(MenuItem, {
      key: tipo,
      value: tipo
    }, tipo);
  })))), /*#__PURE__*/React__default.createElement(Box$1, {
    sx: {
      paddingTop: 1
    }
  }, /*#__PURE__*/React__default.createElement(TextField, {
    id: "nome-arquivo",
    label: "Nome do arquivo",
    variant: "outlined",
    fullWidth: true,
    value: fileName,
    InputLabelProps: {
      shrink: true
    },
    onChange: function onChange(event) {
      setFileName(event.target.value);
    }
  })), /*#__PURE__*/React__default.createElement(List, {
    sx: {
      width: '100%',
      maxWidth: 360
    }
  }, opcoesExportacao.map(function (opcao) {
    var labelId = "checkbox-list-label-" + opcao;
    return /*#__PURE__*/React__default.createElement(ListItem, {
      key: opcao,
      secondaryAction: /*#__PURE__*/React__default.createElement(IconButton, {
        edge: "end",
        "aria-label": "comments"
      }),
      disablePadding: true
    }, /*#__PURE__*/React__default.createElement(ListItemButton, {
      role: undefined,
      onClick: handleToggleOpcao(opcao),
      dense: true,
      sx: {
        height: '36px'
      }
    }, /*#__PURE__*/React__default.createElement(ListItemIcon, null, /*#__PURE__*/React__default.createElement(Checkbox, {
      edge: "start",
      checked: selecteds.indexOf(opcao) !== -1,
      tabIndex: -1,
      disableRipple: true,
      inputProps: {
        'aria-labelledby': labelId
      }
    })), /*#__PURE__*/React__default.createElement(ListItemText, {
      id: labelId,
      primary: opcao
    })));
  })))), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 4
  }, /*#__PURE__*/React__default.createElement(Grid, {
    style: {
      paddingTop: '8px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      borderRadius: '4px',
      margin: '8px'
    }
  }, /*#__PURE__*/React__default.createElement(FormLabel, {
    id: "controlled-radio-buttons-group",
    sx: {
      paddingLeft: '8px'
    }
  }, "Exportar para"), /*#__PURE__*/React__default.createElement(RadioGroup, {
    "aria-labelledby": "controlled-radio-buttons-group",
    name: "controlled-radio-buttons-group",
    value: extensao,
    onChange: handleChangeExtensao
  }, tiposExportacao.map(function (tipo) {
    return /*#__PURE__*/React__default.createElement(FormControlLabel, {
      key: tipo,
      value: tipo,
      sx: {
        paddingLeft: 2,
        '& .MuiRadio-root': {
          padding: '4px'
        }
      },
      control: /*#__PURE__*/React__default.createElement(Radio, {
        size: "small",
        sx: {
          '& .MuiSvgIcon-root': {
            fontSize: 24
          }
        }
      }),
      label: tipo
    });
  }))))), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 12,
    container: true,
    justifyContent: "flex-end",
    flexDirection: {
      xs: 'column',
      sm: 'row'
    },
    spacing: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    onClick: handleClose,
    startIcon: /*#__PURE__*/React__default.createElement(CancelOutlinedIcon, null)
  }, "Cancelar")), /*#__PURE__*/React__default.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    onClick: handleSalvar,
    startIcon: /*#__PURE__*/React__default.createElement(FileDownloadIcon, null),
    color: "success"
  }, "Exportar")))));
};

var style$e = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 580,
  height: 500,
  bgcolor: '#fff',
  borderRadius: '5px',
  boxShadow: 24,
  p: 2
};
function ButtonsList(_ref) {
  var listOptions = _ref.listOptions,
    resume = _ref.resume,
    resumed = _ref.resumed,
    setResumed = _ref.setResumed,
    modelo = _ref.modelo;
  var applyModelo = modelo.applyModelo,
    modeloStandard = modelo.modeloStandard,
    setModeloStandard = modelo.setModeloStandard;
  var _useState = React.useState(false),
    openAgrupamento = _useState[0],
    setOpenAgrupamento = _useState[1];
  var handleOpenAgrupamento = function handleOpenAgrupamento() {
    return setOpenAgrupamento(true);
  };
  var handleCloseAgrupamento = function handleCloseAgrupamento() {
    return setOpenAgrupamento(false);
  };
  var _useState2 = React.useState(false),
    openSomar = _useState2[0],
    setOpenSomar = _useState2[1];
  var handleOpenSomar = function handleOpenSomar() {
    return setOpenSomar(true);
  };
  var handleCloseSomar = function handleCloseSomar() {
    return setOpenSomar(false);
  };
  var _useState3 = React.useState(false),
    openModelos = _useState3[0],
    setOpenModelos = _useState3[1];
  var handleOpenModelos = function handleOpenModelos() {
    return setOpenModelos(true);
  };
  var handleCloseModelos = function handleCloseModelos() {
    return setOpenModelos(false);
  };
  var _useState4 = React.useState(false),
    openNovoModelo = _useState4[0],
    setOpenNovoModelo = _useState4[1];
  var handleOpenNovoModelo = function handleOpenNovoModelo() {
    return setOpenNovoModelo(true);
  };
  var handleCloseNovoModelo = function handleCloseNovoModelo() {
    return setOpenNovoModelo(false);
  };
  var _useState5 = React.useState(false),
    openExportacao = _useState5[0],
    setOpenExportacao = _useState5[1];
  var handleOpenExportacao = function handleOpenExportacao() {
    return setOpenExportacao(true);
  };
  var handleCloseExportacao = function handleCloseExportacao() {
    return setOpenExportacao(false);
  };
  var _useState6 = React.useState(false),
    resumeConfirmation = _useState6[0],
    setResumeConfirmation = _useState6[1];
  var handleOpenConfirmation = function handleOpenConfirmation() {
    return setResumeConfirmation(true);
  };
  var handleCloseConfirmation = function handleCloseConfirmation() {
    return setResumeConfirmation(false);
  };
  var _useSelectedRegisters = useSelectedRegisters(),
    _useSelectedRegisters2 = _useSelectedRegisters.state,
    selecteds = _useSelectedRegisters2.selecteds,
    checkedFields = _useSelectedRegisters2.checkedFields,
    options = _useSelectedRegisters2.options,
    agrupamento = _useSelectedRegisters2.agrupamento,
    somar = _useSelectedRegisters2.somar,
    title = _useSelectedRegisters2.title,
    columnsOrder = _useSelectedRegisters2.columnsOrder;
  var convertData = function convertData(dataToConvert, orderedFields) {
    var filteredArr = [];
    var objModel = {};
    orderedFields.forEach(function (field, index) {
      objModel[field] = index;
    });
    dataToConvert.forEach(function (element) {
      var newObj = Object.keys(element).filter(function (key) {
        return orderedFields.includes(key);
      }).reduce(function (obj, key) {
        var _element$key;
        if (checkedFields.includes(key)) obj[key] = (_element$key = element[key]) != null ? _element$key : '';
        return obj;
      }, {});
      filteredArr.push(newObj);
    });
    var formattedSelecteds = filteredArr.map(function (o) {
      return Object.assign.apply(Object, [{}].concat(Object.keys(o).sort(function (a, b) {
        return objModel[a] - objModel[b];
      }).map(function (x) {
        var _ref2;
        return _ref2 = {}, _ref2[x] = o[x], _ref2;
      })));
    });
    return formattedSelecteds;
  };
  var generatePDFNivel1 = function generatePDFNivel1() {
    try {
      var orderedFields = [].concat(columnsOrder.filter(function (n) {
        return checkedFields.includes(n);
      })).slice();
      var newSelecteds = convertData(selecteds, orderedFields);
      setTableWidth(options.includes('Horizontal (paisagem)') ? '761.89' : '515.3');
      var _temp2 = function () {
        if (options.includes('Sintético') && agrupamento.length > 0) {
          handleResume();
        } else {
          var _temp3 = function () {
            if (agrupamento.length > 1) {
              return Promise.resolve(PDFNivel2(newSelecteds, orderedFields, options, agrupamento, somar, title)).then(function () {});
            } else {
              return Promise.resolve(PDFNivel1(newSelecteds, orderedFields, options, agrupamento[0], somar, title)).then(function () {});
            }
          }();
          if (_temp3 && _temp3.then) return _temp3.then(function () {});
        }
      }();
      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var handleResume = function handleResume() {
    try {
      var newData = resumir(selecteds, agrupamento, somar);
      var newSelecteds = convertData(getFormattedData(newData.lines, newData.columns), newData.columns);
      return Promise.resolve(PDFNivel1(newSelecteds, newData.columns, options, agrupamento.length > 1 ? agrupamento[0] : [], somar, title)).then(function () {});
    } catch (e) {
      return Promise.reject(e);
    }
  };
  return /*#__PURE__*/React__default.createElement(Box$1, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "h5",
    gutterBottom: true,
    sx: {
      color: '#455a64'
    }
  }, "Op\xE7\xF5es"), /*#__PURE__*/React__default.createElement(Divider, null), /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    rowSpacing: 1
  }, /*#__PURE__*/React__default.createElement(Tooltip, {
    title: /*#__PURE__*/React__default.createElement("div", null, "\xC9 necess\xE1rio selecionar ao menos um registro para visualizar o relat\xF3rio", /*#__PURE__*/React__default.createElement("br", null), "Para op\xE7\xE3o de relat\xF3rio sint\xE9tico informe ao menos um agrupamento"),
    arrow: true,
    placement: "top"
  }, /*#__PURE__*/React__default.createElement(Grid, {
    xs: 6
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    startIcon: /*#__PURE__*/React__default.createElement(SearchIcon, null),
    style: {
      width: '100%'
    },
    onClick: function onClick() {
      return generatePDFNivel1();
    },
    disabled: selecteds.length < 1,
    size: "small"
  }, "Visualizar"))), /*#__PURE__*/React__default.createElement(Tooltip, {
    title: "O resumo utiliza os agrupamentos e somas para recriar os dados da tabela ou seja \xE9 necess\xE1rio informar ao menos um agrupamento para prosseguir",
    arrow: true,
    placement: "top"
  }, /*#__PURE__*/React__default.createElement(Grid, {
    xs: 6
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "contained",
    startIcon: /*#__PURE__*/React__default.createElement(DescriptionIcon, null),
    style: {
      width: '100%'
    },
    onClick: handleOpenConfirmation,
    disabled: agrupamento.length < 1,
    size: "small"
  }, "Resumir"))), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 6
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "outlined",
    startIcon: /*#__PURE__*/React__default.createElement(DataSaverOnIcon, null),
    style: {
      width: '100%'
    },
    onClick: handleOpenSomar,
    size: "small"
  }, "Somar")), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 6
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "outlined",
    startIcon: /*#__PURE__*/React__default.createElement(GroupWorkIcon, null),
    style: {
      width: '100%'
    },
    onClick: handleOpenAgrupamento,
    size: "small"
  }, "Agrupar")), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 6
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "outlined",
    style: {
      width: '100%'
    },
    onClick: handleOpenModelos,
    size: "small"
  }, "Modelos")), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 6
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "outlined",
    onClick: handleOpenNovoModelo,
    style: {
      width: '100%'
    },
    size: "small",
    disabled: resumed
  }, "Novo Modelo")), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 12
  }, /*#__PURE__*/React__default.createElement(Button, {
    variant: "outlined",
    onClick: handleOpenExportacao,
    style: {
      width: '100%'
    },
    size: "small",
    startIcon: /*#__PURE__*/React__default.createElement(FileDownloadIcon, null)
  }, "Exportar")), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 12
  }, /*#__PURE__*/React__default.createElement(OptionsChecklist, {
    title: "Detalhes do relat\xF3rio",
    listOptions: listOptions
  }))), /*#__PURE__*/React__default.createElement(Modal, {
    open: openAgrupamento,
    onClose: handleCloseAgrupamento,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React__default.createElement(Box$1, {
    sx: style$e
  }, /*#__PURE__*/React__default.createElement(Agrupamento, {
    setOpen: setOpenAgrupamento,
    handleClose: handleCloseAgrupamento
  }))), /*#__PURE__*/React__default.createElement(Modal, {
    open: openNovoModelo,
    onClose: handleCloseNovoModelo,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React__default.createElement(Box$1, {
    sx: style$e
  }, /*#__PURE__*/React__default.createElement(NovoModelo, {
    setOpen: setOpenNovoModelo,
    handleClose: handleCloseNovoModelo,
    options: options
  }))), /*#__PURE__*/React__default.createElement(Modal, {
    open: openSomar,
    onClose: handleCloseSomar,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React__default.createElement(Box$1, {
    sx: style$e
  }, /*#__PURE__*/React__default.createElement(Somar, {
    handleClose: handleCloseSomar
  }))), /*#__PURE__*/React__default.createElement(Modal, {
    open: openModelos,
    onClose: handleCloseModelos,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React__default.createElement(Box$1, {
    sx: style$e
  }, /*#__PURE__*/React__default.createElement(Modelos, {
    handleClose: handleCloseModelos,
    applyModelo: applyModelo,
    modeloStandard: modeloStandard,
    updateModeloStandard: setModeloStandard
  }))), /*#__PURE__*/React__default.createElement(Modal, {
    open: openExportacao,
    onClose: handleCloseExportacao,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React__default.createElement(Box$1, {
    sx: style$e
  }, /*#__PURE__*/React__default.createElement(Exportacao, {
    handleClose: handleCloseExportacao
  }))), /*#__PURE__*/React__default.createElement(Dialog, {
    open: resumeConfirmation,
    onClose: handleCloseConfirmation,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React__default.createElement(DialogTitle, {
    id: "alert-dialog-title"
  }, "Deseja resumir as informa\xE7\xF5es?"), /*#__PURE__*/React__default.createElement(DialogContent, null, /*#__PURE__*/React__default.createElement(DialogContentText, {
    id: "alert-dialog-description"
  }, "O resumo de informa\xE7\xF5es leva em considera\xE7\xE3o a configura\xE7\xE3o de agrupamento e de soma para resumir as informa\xE7\xF5es da tabela", /*#__PURE__*/React__default.createElement("br", null), "Para restaurar os dados originais ser\xE1 necess\xE1rio solicitar um novo relat\xF3rio")), /*#__PURE__*/React__default.createElement(DialogActions, null, /*#__PURE__*/React__default.createElement(Button, {
    onClick: handleCloseConfirmation,
    variant: "contained"
  }, "Recusar"), /*#__PURE__*/React__default.createElement(Button, {
    onClick: function onClick() {
      setResumed(true);
      resume();
      handleCloseConfirmation();
    },
    autoFocus: true,
    variant: "contained",
    color: "success"
  }, "Aceitar"))));
}

var style$f = {
  item: {
    fontSize: '0.9rem'
  }
};
var DynaGrade = function DynaGrade(_ref) {
  var conv = _ref.conv;
  var _useState = React.useState([]),
    registers = _useState[0],
    setRegisters = _useState[1];
  var _useSelectedRegisters = useSelectedRegisters(),
    _useSelectedRegisters2 = _useSelectedRegisters.state,
    selecteds = _useSelectedRegisters2.selecteds,
    checkedFields = _useSelectedRegisters2.checkedFields,
    columnsOrder = _useSelectedRegisters2.columnsOrder,
    dispatch = _useSelectedRegisters.dispatch;
  React.useMemo(function () {
    setRegisters(conv);
  }, [conv]);
  var onSelectRegister = function onSelectRegister(e) {
    dispatch({
      value: e.sort(function (a, b) {
        return a.id - b.id;
      }),
      type: 'selecteds'
    });
  };
  var _onColReorder = function onColReorder(e) {
    var temp = [];
    e.columns.forEach(function (e) {
      temp.push(e.props.field);
    });
    dispatch({
      value: temp,
      type: 'columnsOrder'
    });
  };
  var dynamicColumns = columnsOrder.map(function (field) {
    if (checkedFields.includes(field)) {
      return /*#__PURE__*/React__default.createElement(column.Column, {
        key: field,
        columnKey: field,
        field: field,
        header: field,
        filter: true,
        filterPlaceholder: "Search by " + field,
        sortable: true,
        style: style$f.item
      });
    } else {
      return null;
    }
  });
  return /*#__PURE__*/React__default.createElement(datatable.DataTable, {
    className: "mypanel",
    value: registers,
    reorderableColumns: true,
    resizableColumns: true,
    onColReorder: function onColReorder(e) {
      return _onColReorder(e);
    },
    responsiveLayout: "scroll",
    selection: selecteds,
    onSelectionChange: function onSelectionChange(e) {
      return onSelectRegister(e.value);
    },
    dataKey: "id",
    paginator: true,
    rows: 50,
    size: "small",
    showGridlines: true,
    stripedRows: true,
    sortMode: "multiple",
    emptyMessage: "Nenhum resultado encontrado"
  }, /*#__PURE__*/React__default.createElement(column.Column, {
    selectionMode: "multiple"
  }), dynamicColumns);
};

var reportOptions = ['Horizontal (paisagem)', 'Contador de registros', 'Mostrar campo de agrupamento', 'Sintético'];
var Principal = function Principal(_ref) {
  var fetchModelos = function fetchModelos() {
    try {
      return Promise.resolve(api.get(defaultModelRoute + "?endpoint=" + endPoint)).then(function (res) {
        if (res.data.length > 0) {
          res.data.forEach(function (element) {
            if (element.standard) {
              applyModelo(JSON.parse(element.configuration));
            }
          });
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var fetchData = function fetchData() {
    try {
      setLoading(true);
      return Promise.resolve(api.get(endPoint + "?" + filter)).then(function (res) {
        dispatch({
          value: api,
          type: 'api'
        });
        setData(res.data.data);
        handleRefetch(res.data.data);
        setLoading(false);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var api = _ref.api,
    filter = _ref.filter,
    endPoint = _ref.endPoint,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$subTitle = _ref.subTitle,
    subTitle = _ref$subTitle === void 0 ? null : _ref$subTitle,
    _ref$text = _ref.text,
    text = _ref$text === void 0 ? null : _ref$text;
  var _useState = React.useState(null),
    data = _useState[0],
    setData = _useState[1];
  var _useState2 = React.useState(false),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = React.useState(false),
    error = _useState3[0],
    setError = _useState3[1];
  var _useState4 = React.useState(false),
    resumed = _useState4[0],
    setResumed = _useState4[1];
  var _useState5 = React.useState(null),
    modeloStandard = _useState5[0],
    setModeloStandard = _useState5[1];
  var _useSelectedRegisters = useSelectedRegisters(),
    _useSelectedRegisters2 = _useSelectedRegisters.state,
    fields = _useSelectedRegisters2.fields,
    agrupamento = _useSelectedRegisters2.agrupamento,
    somar = _useSelectedRegisters2.somar,
    dispatch = _useSelectedRegisters.dispatch;
  var clearComponent = function clearComponent() {
    setData(null);
    setError(false);
    dispatch({
      value: [],
      type: 'fields'
    });
    dispatch({
      value: [],
      type: 'checkedFields'
    });
    dispatch({
      value: [],
      type: 'columnsOrder'
    });
  };
  var handleRefetch = function handleRefetch(newdata) {
    dispatch({
      value: [String(title != null ? title : ''), String(subTitle != null ? subTitle : ''), String(text != null ? text : '')],
      type: 'title'
    });
    dispatch({
      value: newdata.columns,
      type: 'fields'
    });
    dispatch({
      value: newdata.columns,
      type: 'checkedFields'
    });
    dispatch({
      value: [null].concat(newdata.columns),
      type: 'columnsOrder'
    });
    dispatch({
      value: newdata.summableFields,
      type: 'somar'
    });
    dispatch({
      value: newdata.summableFields,
      type: 'summableFields'
    });
    dispatch({
      value: endPoint,
      type: 'endpoint'
    });
  };
  var applyModelo = function applyModelo(modelo) {
    dispatch({
      value: modelo.columnsOrder,
      type: 'columnsOrder'
    });
    dispatch({
      value: modelo.checkedFields,
      type: 'checkedFields'
    });
    dispatch({
      value: modelo.group,
      type: 'savedTree'
    });
    dispatch({
      value: modelo.options,
      type: 'options'
    });
    dispatch({
      value: modelo.sum,
      type: 'somar'
    });
    var grupo1 = [];
    var grupo2 = [];
    modelo.group.forEach(function (el) {
      if (el.parent === 1) {
        grupo1.push(el.id);
      } else if (el.parent === 11) {
        grupo2.push(el.id);
      }
    });
    if (grupo2.length > 0) {
      dispatch({
        value: [grupo1, grupo2],
        type: 'agrupamento'
      });
    } else if (grupo1.length > 0) {
      dispatch({
        value: [grupo1],
        type: 'agrupamento'
      });
    } else {
      dispatch({
        value: [],
        type: 'agrupamento'
      });
    }
  };
  React.useEffect(function () {
    handleFetch();
    fetchModelos();
  }, [api]);
  var Item = styles.styled(Paper)(function (_ref2) {
    var theme = _ref2.theme;
    return _extends({
      backgroundColor: '#fff'
    }, theme.typography.body2, {
      padding: theme.spacing(1),
      textAlign: 'center'
    });
  });
  var handleFetch = function handleFetch() {
    clearComponent();
    fetchData()["catch"](function (err) {
      console.log(err);
      setError(true);
    });
  };
  var handleResumo = function handleResumo() {
    setLoading(true);
    var newData = resumir(getFormattedData(data === null || data === void 0 ? void 0 : data.lines, fields), agrupamento, somar);
    setData(newData);
    handleRefetch(newData);
    setLoading(false);
  };
  if (error) {
    return /*#__PURE__*/React__default.createElement(Grid, {
      sx: {
        textAlign: 'center',
        paddingY: '8px',
        backgroundColor: 'rgb(236, 245, 250)'
      }
    }, /*#__PURE__*/React__default.createElement(ErrorIcon, {
      fontSize: "large"
    }), /*#__PURE__*/React__default.createElement(material.Typography, null, "N\xE3o foi poss\xEDvel se comunicar com o servidor"), /*#__PURE__*/React__default.createElement(Button, {
      onClick: handleFetch
    }, "Tentar novamente"));
  }
  return /*#__PURE__*/React__default.createElement(Box$1, {
    sx: {
      minWidth: '910px'
    }
  }, /*#__PURE__*/React__default.createElement(Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React__default.createElement(Grid, {
    xs: 4,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/React__default.createElement(Item, {
    sx: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React__default.createElement(FieldsChecklist, null)), /*#__PURE__*/React__default.createElement(Item, {
    sx: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React__default.createElement(ButtonsList, {
    listOptions: reportOptions,
    resume: handleResumo,
    resumed: resumed,
    setResumed: setResumed,
    modelo: {
      applyModelo: applyModelo,
      modeloStandard: modeloStandard,
      setModeloStandard: setModeloStandard
    }
  }))), /*#__PURE__*/React__default.createElement(Grid, {
    xs: 8,
    sm: 8,
    md: 8,
    lg: 9
  }, /*#__PURE__*/React__default.createElement(Item, null, /*#__PURE__*/React__default.createElement(DynaGrade, {
    conv: getFormattedData(data === null || data === void 0 ? void 0 : data.lines, fields)
  })))), /*#__PURE__*/React__default.createElement(Backdrop, {
    sx: {
      color: '#fff',
      zIndex: function zIndex(theme) {
        return theme.zIndex.drawer + 1;
      }
    },
    open: loading
  }, /*#__PURE__*/React__default.createElement(CircularProgress$1, {
    color: "inherit"
  })));
};

function DynaReport(props) {
  return /*#__PURE__*/React__default.createElement(DynaProvider, null, /*#__PURE__*/React__default.createElement(Principal, props));
}

var OperationConfirmModal = function OperationConfirmModal(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    title = _ref.title,
    onCancel = _ref.onCancel,
    onConfirm = _ref.onConfirm,
    mode = _ref.mode;
  var handleDefaultConfirm = {
    message: 'Deseja Continuar com essa Operação ?',
    titleButton: 'Confirmar'
  };
  var handleDelete = {
    message: 'Tem certeza que deseja excluir ?',
    titleButton: 'Excluir'
  };
  var handleEdit = {
    message: 'Tem certeza que deseja continuar com a alteração ?',
    titleButton: 'Salvar'
  };
  var ButtonMode = function ButtonMode() {
    if (mode == 'edit') {
      return /*#__PURE__*/React.createElement(Button, {
        className: "btn-green",
        variant: "contained",
        startIcon: /*#__PURE__*/React.createElement(SaveIcon, null),
        color: "success",
        onClick: function onClick() {
          return onConfirm();
        },
        autoFocus: true
      }, handleEdit.titleButton);
    }
    if (mode == 'delete') {
      return /*#__PURE__*/React.createElement(Button, {
        className: "btn-red",
        variant: "contained",
        startIcon: /*#__PURE__*/React.createElement(DeleteIcon, null),
        color: "error",
        onClick: function onClick() {
          return onConfirm();
        },
        autoFocus: true
      }, handleDelete.titleButton);
    }
    if (!mode) {
      return /*#__PURE__*/React.createElement(Button, {
        className: "btn-success",
        variant: "contained",
        startIcon: /*#__PURE__*/React.createElement(DownloadDoneRoundedIcon, null),
        color: "success",
        onClick: function onClick() {
          return onConfirm();
        },
        autoFocus: true
      }, handleDefaultConfirm.titleButton);
    }
  };
  var descriptionMode = function descriptionMode() {
    switch (mode) {
      case 'edit':
        return handleEdit.message;
      case 'delete':
        return handleDelete.message;
      default:
        return handleDefaultConfirm.message;
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React.createElement(DialogTitle, {
    id: "alert-dialog-title"
  }, title ? title : 'Confirmação'), /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(DialogContentText, {
    id: "alert-dialog-description"
  }, descriptionMode())), /*#__PURE__*/React.createElement(DialogActions, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      marginRight: '5px'
    },
    variant: "outlined",
    component: "span",
    onClick: function onClick() {
      if (onCancel) onCancel();
      onClose();
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement(ButtonMode, null))));
};
var OperationConfirmModal$1 = /*#__PURE__*/React.memo(OperationConfirmModal);

var CustomSimpleModal = function CustomSimpleModal(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    children = _ref.children,
    title = _ref.title,
    footer = _ref.footer,
    exitClick = _ref.exitClick,
    exitTitle = _ref.exitTitle,
    exitIcon = _ref.exitIcon,
    exitVariant = _ref.exitVariant,
    exitClassName = _ref.exitClassName,
    confirmClick = _ref.confirmClick,
    confirmTitle = _ref.confirmTitle,
    confirmIcon = _ref.confirmIcon,
    confirmVariant = _ref.confirmVariant,
    confirmClassName = _ref.confirmClassName;
  return /*#__PURE__*/React__default.createElement(material.Modal, {
    open: open,
    onClose: onClose,
    "aria-labelledby": "child-modal-title",
    "aria-describedby": "child-modal-description"
  }, /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(material.Box, {
    className: "modal-style"
  }, title && /*#__PURE__*/React__default.createElement(material.Typography, {
    className: "simple-modal-title"
  }, title), /*#__PURE__*/React__default.createElement(material.Box, {
    className: "simple-modal-children-content"
  }, children), footer && /*#__PURE__*/React__default.createElement(material.Box, {
    className: "simple-modal-footer-content"
  }, exitClick && /*#__PURE__*/React__default.createElement(material.Button, {
    className: "simple-modal-button-footer " + exitClassName,
    startIcon: exitIcon && exitIcon,
    variant: exitVariant && exitVariant,
    onClick: exitClick
  }, exitTitle ? exitTitle : 'Fechar'), confirmClick && /*#__PURE__*/React__default.createElement(material.Button, {
    className: "simple-modal-button-footer " + confirmClassName,
    startIcon: confirmIcon && confirmIcon,
    variant: confirmVariant && confirmVariant,
    onClick: confirmClick
  }, confirmTitle ? confirmTitle : 'Salvar')))));
};
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
};
CustomSimpleModal.defaultProp = {
  open: false,
  onClose: function onClose() {},
  title: '',
  footer: false,
  exitClick: function exitClick() {},
  exitTitle: '',
  exitIcon: /*#__PURE__*/React__default.createElement(React.Fragment, null),
  exitVariant: '',
  exitClassName: '',
  confirmClick: function confirmClick() {},
  confirmTitle: '',
  confirmIcon: /*#__PURE__*/React__default.createElement(React.Fragment, null),
  confirmVariant: '',
  confirmClassName: ''
};

var _excluded$5 = ["label", "type", "value", "onChange", "labelValue", "onChangeLabelValue", "optionsLabel", "noAlertNoneValue", "maxDate"];
var CustomLabelField = function CustomLabelField(_ref) {
  var label = _ref.label,
    type = _ref.type,
    value = _ref.value,
    onChange = _ref.onChange,
    labelValue = _ref.labelValue,
    onChangeLabelValue = _ref.onChangeLabelValue,
    optionsLabel = _ref.optionsLabel,
    noAlertNoneValue = _ref.noAlertNoneValue,
    maxDate = _ref.maxDate,
    other = _objectWithoutPropertiesLoose(_ref, _excluded$5);
  var _useState = React.useState(null),
    anchorEl = _useState[0],
    setAnchorEl = _useState[1];
  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
  };
  if (!labelValue && optionsLabel) {
    onChangeLabelValue(optionsLabel[0]);
  }
  if (type == 'date') {
    return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(CustomDatePicker$1, _extends({
      size: "small",
      label: /*#__PURE__*/React__default.createElement(material.Tooltip, {
        title: "Alterar",
        followCursor: true
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "custom-field-dinamic-label-content-label link-style",
        "aria-describedby": id,
        onClick: handleClick
      }, label, /*#__PURE__*/React__default.createElement("div", {
        className: "custom-field-dinamic-label-value"
      }, " ( " + labelValue + " )"), /*#__PURE__*/React__default.createElement("i", {
        className: "pi pi-pencil release-exams-date-type-label"
      }))),
      maxDate: maxDate,
      onKeyDown: function onKeyDown(e) {
        return e.preventDefault();
      },
      value: value,
      onChange: onChange,
      noAlertNoneValue: noAlertNoneValue
    }, other)), /*#__PURE__*/React__default.createElement(material.Popover, {
      id: id,
      open: open,
      anchorEl: anchorEl,
      onClose: handleClose,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      }
    }, /*#__PURE__*/React__default.createElement(material.ButtonGroup, {
      variant: "outlined",
      "aria-label": "outlined button group"
    }, optionsLabel === null || optionsLabel === void 0 ? void 0 : optionsLabel.map(function (item) {
      return /*#__PURE__*/React__default.createElement(material.Button, {
        onClick: function onClick() {
          onChangeLabelValue(item);
          handleClose();
        }
      }, item);
    }))));
  } else {
    return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(CustomTextField$1, _extends({
      label: /*#__PURE__*/React__default.createElement(material.Tooltip, {
        title: "Alterar",
        followCursor: true
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "custom-field-dinamic-label-content-label link-style",
        "aria-describedby": id,
        onClick: handleClick
      }, label, /*#__PURE__*/React__default.createElement("div", {
        className: "custom-field-dinamic-label-value"
      }, " ( " + labelValue + " )"), /*#__PURE__*/React__default.createElement("i", {
        className: "pi pi-pencil release-exams-date-type-label"
      }))),
      value: value,
      onChange: onChange
    }, other)), /*#__PURE__*/React__default.createElement(material.Popover, {
      id: id,
      open: open,
      anchorEl: anchorEl,
      onClose: handleClose,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      }
    }, /*#__PURE__*/React__default.createElement(material.ButtonGroup, {
      variant: "outlined",
      "aria-label": "outlined button group"
    }, optionsLabel === null || optionsLabel === void 0 ? void 0 : optionsLabel.map(function (item) {
      return /*#__PURE__*/React__default.createElement(material.Button, {
        onClick: function onClick() {
          onChangeLabelValue(item);
          handleClose();
        }
      }, item);
    }))));
  }
};

var _excluded$6 = ["children", "value", "index"];
function TabPanel(props) {
  var children = props.children,
    value = props.value,
    index = props.index,
    other = _objectWithoutPropertiesLoose(props, _excluded$6);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-" + index,
    "aria-labelledby": "simple-tab-" + index
  }, other), value === index && /*#__PURE__*/React.createElement(Box$1, {
    sx: {
      paddingTop: 1
    }
  }, /*#__PURE__*/React.createElement(Typography, null, children)));
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};
function a11yProps(index) {
  return {
    id: "simple-tab-" + index,
    'aria-controls': "simple-tabpanel-" + index
  };
}
var OperationTab = function OperationTab(_ref) {
  var menuList = _ref.menuList,
    childrenList = _ref.childrenList,
    footer = _ref.footer;
  var _React$useState = React.useState(0),
    value = _React$useState[0],
    setValue = _React$useState[1];
  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };
  return /*#__PURE__*/React.createElement(Box$1, {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Box$1, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    onChange: handleChange,
    "aria-label": "basic tabs example"
  }, menuList === null || menuList === void 0 ? void 0 : menuList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Tab, _extends({
      label: item.title
    }, a11yProps(index)));
  }))), childrenList === null || childrenList === void 0 ? void 0 : childrenList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TabPanel, {
      value: value,
      index: index
    }, item);
  }), /*#__PURE__*/React.createElement(Box$1, {
    sx: {
      paddingTop: '15px'
    }
  }, footer && footer));
};

var CustomCheckBox = function CustomCheckBox(_ref) {
  var label = _ref.label,
    onChange = _ref.onChange,
    value = _ref.value;
  return /*#__PURE__*/React__default.createElement(material.FormGroup, {
    className: "custom-checkbox-content"
  }, /*#__PURE__*/React__default.createElement(material.FormControlLabel, {
    checked: value,
    onChange: onChange,
    control: /*#__PURE__*/React__default.createElement(material.Checkbox, null),
    label: label
  }));
};

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends$1.apply(this, arguments);
}

function isPlainObject(item) {
  return item !== null && typeof item === 'object' && item.constructor === Object;
}
function deepClone(source) {
  if (!isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach(key => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends$1({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@mui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose
  /* eslint-disable prefer-template */
  let url = 'https://mui.com/production-error/?code=' + code;
  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }
  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/** @license MUI v5.11.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled(tag, options) {
  const stylesFactory = emStyled(tag, options);
  if (process.env.NODE_ENV !== 'production') {
    return (...styles) => {
      const component = typeof tag === 'string' ? `"${tag}"` : 'component';
      if (styles.length === 0) {
        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join('\n'));
      } else if (styles.some(style => style === undefined)) {
        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
      }
      return stylesFactory(...styles);
    };
  }
  return stylesFactory;
}

const responsivePropType = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};

function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.
  });
}

// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen
};

const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // key is breakpoint
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style);
}

function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  // Check if CSS variables are used
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split('.').reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style$g(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? {
    [prop]: responsivePropType
  } : {};
  fn.filterProps = [prop];
  return fn;
}

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce((acc, style) => Object.assign(acc, style.propTypes), {}) : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === 'number') {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (typeof abs !== 'number') {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`);
        }
      }
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` + `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join('\n'));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join('\n'));
        }
      }
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (process.env.NODE_ENV !== 'production') {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, 'It should be a number, an array or a function.'].join('\n'));
  }
  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  const abs = Math.abs(propValue);
  const transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === 'number') {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style$h(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}
function margin(props) {
  return style$h(props, marginKeys);
}
margin.propTypes = process.env.NODE_ENV !== 'production' ? marginKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style$h(props, paddingKeys);
}
padding.propTypes = process.env.NODE_ENV !== 'production' ? paddingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
function spacing(props) {
  return style$h(props, spacingKeys);
}
spacing.propTypes = process.env.NODE_ENV !== 'production' ? spacingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
spacing.filterProps = spacingKeys;

function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
const border = style$g({
  prop: 'border',
  themeKey: 'borders',
  transform: borderTransform
});
const borderTop = style$g({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: borderTransform
});
const borderRight = style$g({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: borderTransform
});
const borderBottom = style$g({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: borderTransform
});
const borderLeft = style$g({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: borderTransform
});
const borderColor = style$g({
  prop: 'borderColor',
  themeKey: 'palette'
});
const borderTopColor = style$g({
  prop: 'borderTopColor',
  themeKey: 'palette'
});
const borderRightColor = style$g({
  prop: 'borderRightColor',
  themeKey: 'palette'
});
const borderBottomColor = style$g({
  prop: 'borderBottomColor',
  themeKey: 'palette'
});
const borderLeftColor = style$g({
  prop: 'borderLeftColor',
  themeKey: 'palette'
});

// false positive
// eslint-disable-next-line react/function-component-definition
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    const styleFromPropValue = propValue => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
  borderRadius: responsivePropType
} : {};
borderRadius.filterProps = ['borderRadius'];
const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);

// false positive
// eslint-disable-next-line react/function-component-definition
const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'gap');
    const styleFromPropValue = propValue => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = process.env.NODE_ENV !== 'production' ? {
  gap: responsivePropType
} : {};
gap.filterProps = ['gap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'columnGap');
    const styleFromPropValue = propValue => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  columnGap: responsivePropType
} : {};
columnGap.filterProps = ['columnGap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'rowGap');
    const styleFromPropValue = propValue => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  rowGap: responsivePropType
} : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style$g({
  prop: 'gridColumn'
});
const gridRow = style$g({
  prop: 'gridRow'
});
const gridAutoFlow = style$g({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = style$g({
  prop: 'gridAutoColumns'
});
const gridAutoRows = style$g({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = style$g({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = style$g({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = style$g({
  prop: 'gridTemplateAreas'
});
const gridArea = style$g({
  prop: 'gridArea'
});
const grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
const color = style$g({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
const bgcolor = style$g({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const backgroundColor = style$g({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const palette = compose(color, bgcolor, backgroundColor);

function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style$g({
  prop: 'width',
  transform: sizingTransform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values[propValue];
      return {
        maxWidth: breakpoint || sizingTransform(propValue)
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style$g({
  prop: 'minWidth',
  transform: sizingTransform
});
const height = style$g({
  prop: 'height',
  transform: sizingTransform
});
const maxHeight = style$g({
  prop: 'maxHeight',
  transform: sizingTransform
});
const minHeight = style$g({
  prop: 'minHeight',
  transform: sizingTransform
});
const sizeWidth = style$g({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
const sizeHeight = style$g({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
const boxSizing = style$g({
  prop: 'boxSizing'
});
const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

const defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: 'typography'
  },
  fontSize: {
    themeKey: 'typography'
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography'
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style
    } = options;
    if (val == null) {
      return null;
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style) {
      return style(props);
    }
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx(props) {
    var _theme$unstable_sxCon;
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }

    const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig;

    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== 'object') {
        // value
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css = emptyBreakpoints;
      Object.keys(sxObject).forEach(styleKey => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== undefined) {
          if (typeof value === 'object') {
            if (config[styleKey]) {
              css = merge(css, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, x => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme
                });
              } else {
                css = merge(css, breakpointsValues);
              }
            }
          } else {
            css = merge(css, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      return removeUnusedBreakpoints(breakpointsKeys, css);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];

function _objectWithoutPropertiesLoose$1(source, excluded) {
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

const _excluded$7 = ["sx"];
const splitProps = props => {
  var _props$theme$unstable, _props$theme;
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config = (_props$theme$unstable = props == null ? void 0 : (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig;
  Object.keys(props).forEach(prop => {
    if (config[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const {
      sx: inSx
    } = props,
    other = _objectWithoutPropertiesLoose$1(props, _excluded$7);
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return _extends$1({}, systemProps, result);
    };
  } else {
    finalSx = _extends$1({}, systemProps, inSx);
  }
  return _extends$1({}, otherProps, {
    sx: finalSx
  });
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const _excluded$8 = ["values", "unit", "step"];
const sortBreakpointsValues = values => {
  const breakpointsAsArray = Object.keys(values).map(key => ({
    key,
    val: values[key]
  })) || [];
  // Sort in ascending order
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return _extends$1({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536 // large screen
      },

      unit = 'px',
      step = 5
    } = breakpoints,
    other = _objectWithoutPropertiesLoose$1(breakpoints, _excluded$8);
  const sortedValues = sortBreakpointsValues(values);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return _extends$1({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}

const shape = {
  borderRadius: 4
};

/* tslint:enable:unified-signatures */

function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }

  // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://m2.material.io/design/layout/understanding-layout.html
  const transform = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing = (...argsInput) => {
    if (process.env.NODE_ENV !== 'production') {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };
  spacing.mui = true;
  return spacing;
}

const _excluded$9 = ["breakpoints", "palette", "spacing", "shape"];
function createTheme(options = {}, ...args) {
  const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {}
    } = options,
    other = _objectWithoutPropertiesLoose$1(options, _excluded$9);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: _extends$1({
      mode: 'light'
    }, paletteInput),
    spacing,
    shape: _extends$1({}, shape, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}

const ThemeContext = /*#__PURE__*/React.createContext(null);
if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

function useTheme() {
  const theme = React.useContext(ThemeContext);
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }
  return theme;
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$1(defaultTheme = null) {
  const contextTheme = useTheme();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}

const systemDefaultTheme = createTheme();
function useTheme$2(defaultTheme = systemDefaultTheme) {
  return useTheme$1(defaultTheme);
}

const _excluded$a = ["className", "component"];
function createBox(options = {}) {
  const {
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName
  } = options;
  const BoxRoot = styled('div', {
    shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
  })(styleFunctionSx);
  const Box = /*#__PURE__*/React.forwardRef(function Box(inProps, ref) {
    const theme = useTheme$2(defaultTheme);
    const _extendSxProp = extendSxProp(inProps),
      {
        className,
        component = 'div'
      } = _extendSxProp,
      other = _objectWithoutPropertiesLoose$1(_extendSxProp, _excluded$a);
    return /*#__PURE__*/jsxRuntime.jsx(BoxRoot, _extends$1({
      as: component,
      ref: ref,
      className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: theme
    }, other));
  });
  return Box;
}

const Box = createBox();
process.env.NODE_ENV !== "production" ? Box.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

var CustomInputSelectComboList = function CustomInputSelectComboList(_ref) {
  var titleInput = _ref.titleInput,
    options = _ref.options,
    columnListTable = _ref.columnListTable,
    getRecordsTable = _ref.getRecordsTable,
    disabled = _ref.disabled;
  var _useState = React.useState(null),
    customInputValue = _useState[0],
    setCustomInputValue = _useState[1];
  var _useState2 = React.useState(null),
    inputCustomInputValue = _useState2[0],
    setInputCustomInputValue = _useState2[1];
  var _useState3 = React.useState([]),
    customTableList = _useState3[0],
    setCustomTableList = _useState3[1];
  getRecordsTable(customTableList);
  var handleAddTableList = function handleAddTableList() {
    if (!customInputValue) return;
    if (customTableList.find(function (x) {
      return x.id == customInputValue.id;
    })) {
      setCustomInputValue(null);
      return;
    }
    setCustomTableList(function (current) {
      return [].concat(current, [customInputValue]);
    });
    setCustomInputValue(null);
  };
  var handleAddAllTableList = function handleAddAllTableList() {
    setCustomTableList([]);
    var AllList = options;
    setCustomTableList(AllList);
    setCustomInputValue(null);
  };
  var handleRemoveTableList = function handleRemoveTableList(event, index) {
    setCustomTableList(function (current) {
      var newArr = [].concat(current).filter(function (x) {
        return x.id !== event.id;
      });
      return newArr;
    });
  };
  var columnAction = {
    style: {
      textAlign: 'right',
      width: '100px'
    },
    sortable: false,
    frozen: true,
    alignFrozen: "left",
    body: function body(e, index) {
      return /*#__PURE__*/React__default.createElement(material.Tooltip, {
        title: "Remover da Lista"
      }, /*#__PURE__*/React__default.createElement(material.IconButton, {
        "aria-label": "Delete"
      }, /*#__PURE__*/React__default.createElement(DeleteIcon, {
        onClick: function onClick() {
          return handleRemoveTableList(e);
        }
      })));
    }
  };
  var handleClearTable = function handleClearTable() {
    setCustomTableList([]);
    setCustomInputValue(null);
  };
  return /*#__PURE__*/React__default.createElement(ConteinerItem, {
    className: "custom-input-select-combo-list-conteiner"
  }, /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React__default.createElement(ConteinerItem, {
    className: "custom-input-select-combo-list-add-input"
  }, /*#__PURE__*/React__default.createElement(CustomInputSelect$1, {
    title: titleInput,
    options: options || [],
    disabled: disabled,
    value: customInputValue,
    onChange: function onChange(event, newValue) {
      return setCustomInputValue(newValue);
    },
    inputValue: inputCustomInputValue,
    onInputChange: function onInputChange(event, newValue) {
      return setInputCustomInputValue(newValue);
    }
  })), /*#__PURE__*/React__default.createElement(ConteinerItem, null, /*#__PURE__*/React__default.createElement(material.Tooltip, {
    title: "Adicionar " + titleInput
  }, /*#__PURE__*/React__default.createElement(material.IconButton, {
    onClick: function onClick() {
      return handleAddTableList();
    },
    disabled: disabled
  }, /*#__PURE__*/React__default.createElement(AddCircleOutlineRoundedIcon, null))), /*#__PURE__*/React__default.createElement(material.Tooltip, {
    title: "Adicionar Todos(as) " + titleInput + "(s)"
  }, /*#__PURE__*/React__default.createElement(material.IconButton, {
    onClick: function onClick() {
      return handleAddAllTableList();
    },
    disabled: disabled
  }, /*#__PURE__*/React__default.createElement(PostAddRoundedIcon, null))), customTableList.length > 1 && /*#__PURE__*/React__default.createElement(material.Tooltip, {
    title: "Limpar Tudo"
  }, /*#__PURE__*/React__default.createElement(material.IconButton, {
    onClick: function onClick() {
      return handleClearTable();
    },
    disabled: disabled
  }, /*#__PURE__*/React__default.createElement(DeleteSweepIcon, null))))), /*#__PURE__*/React__default.createElement(Box, {
    className: disabled && 'custom-input-select-combo-list-disabled',
    sx: {
      maxHeight: '200px',
      overflow: 'scroll'
    }
  }, /*#__PURE__*/React__default.createElement(CustomDataTable$1, {
    records: customTableList || [],
    columnList: [].concat(columnListTable, [columnAction]) || []
  })));
};

var CustomContentReport = function CustomContentReport(_ref) {
  var id = _ref.id,
    _onClick = _ref.onClick,
    titleReport = _ref.titleReport,
    children = _ref.children,
    toastMessages = _ref.toastMessages,
    loading = _ref.loading;
  var HandleSearchButton = function HandleSearchButton() {
    return /*#__PURE__*/React__default.createElement(material.Button, {
      className: "btn-blue",
      id: id ? id : 'button-generate-report',
      startIcon: /*#__PURE__*/React__default.createElement(PrintIcon, null),
      variant: "contained",
      color: "primary",
      onClick: function onClick() {
        return _onClick();
      }
    }, "Gerar Relat\xF3rio");
  };
  return /*#__PURE__*/React__default.createElement(AppContent$1, {
    loading: loading
  }, /*#__PURE__*/React__default.createElement(OperationSection$1, {
    titleHeader: titleReport,
    disableExpandedButton: true,
    disableAttachButton: true,
    displayModal: false,
    display: true,
    toastMessages: toastMessages
  }, /*#__PURE__*/React__default.createElement(React.Fragment, null, children), /*#__PURE__*/React__default.createElement(ConteinerItem, {
    className: "report-generator-button"
  }, /*#__PURE__*/React__default.createElement(HandleSearchButton, null))));
};
CustomContentReport.propTypes = {
  id: PropTypes.string,
  titleReport: PropTypes.string,
  toastMessages: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

exports.AppContent = AppContent$1;
exports.ArchivesContent = ArchivesContent;
exports.Conteiner = Conteiner;
exports.ConteinerItem = ConteinerItem;
exports.CustomBeneficiarieFields = CustomBeneficiarieFields;
exports.CustomCheckBox = CustomCheckBox;
exports.CustomContentReport = CustomContentReport;
exports.CustomDataTable = CustomDataTable$1;
exports.CustomDatePicker = CustomDatePicker$1;
exports.CustomDialog = CustomDialog$1;
exports.CustomInputSelect = CustomInputSelect$1;
exports.CustomInputSelectComboList = CustomInputSelectComboList;
exports.CustomLabelField = CustomLabelField;
exports.CustomModal = CustomModal$1;
exports.CustomSimpleModal = CustomSimpleModal;
exports.CustomTextField = CustomTextField$1;
exports.CustomTimePicker = CustomTimePicker$1;
exports.DynaReport = DynaReport;
exports.FilesContent = FilesContent;
exports.FilesContentApi = FilesContentApi;
exports.FilesUpload = FilesUpload$1;
exports.Header = Header$1;
exports.HeaderAccordion = HeaderAccordion$1;
exports.OperationConfirmModal = OperationConfirmModal$1;
exports.OperationDetail = OperationDetail$1;
exports.OperationModal = OperationModal$1;
exports.OperationSection = OperationSection$1;
exports.OperationTab = OperationTab;
exports.OperationTable = OperationTable$1;
exports.SaveComponent = SaveComponent$1;
//# sourceMappingURL=index.js.map
