function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$1 = require('react');
var React$1__default = _interopDefault(React$1);
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
var CloseIcon = _interopDefault(require('@mui/icons-material/Close'));
var button = require('primereact/button');
var LoadingButton = _interopDefault(require('@mui/lab/LoadingButton'));
var CancelOutlinedIcon = _interopDefault(require('@mui/icons-material/CancelOutlined'));
var SaveOutlinedIcon = _interopDefault(require('@mui/icons-material/SaveOutlined'));
require('@mui/icons-material/ArrowBack');
require('@mui/icons-material/DeleteOutline');
var CheckIcon = _interopDefault(require('@mui/icons-material/Check'));
var reactRouterDom = require('react-router-dom');
var AppBar = _interopDefault(require('@mui/material/AppBar'));
var Box = _interopDefault(require('@mui/material/Box'));
var Toolbar = _interopDefault(require('@mui/material/Toolbar'));
var MenuItem = _interopDefault(require('@mui/material/MenuItem'));
var Menu = _interopDefault(require('@mui/material/Menu'));
var MenuIcon = _interopDefault(require('@mui/icons-material/Menu'));
var AccountCircle = _interopDefault(require('@mui/icons-material/AccountCircle'));
require('@mui/icons-material/MoreVert');
var AppsIcon = _interopDefault(require('@mui/icons-material/Apps'));
var ListItemIcon = _interopDefault(require('@mui/material/ListItemIcon'));
var ExitToAppIcon = _interopDefault(require('@mui/icons-material/ExitToApp'));
var FolderSharedIcon = _interopDefault(require('@mui/icons-material/FolderShared'));
var Divider = _interopDefault(require('@mui/material/Divider'));
require('@mui/icons-material/Widgets');
var Badge = _interopDefault(require('@mui/material/Badge'));
var NotificationsIcon = _interopDefault(require('@mui/icons-material/Notifications'));
var material = require('@mui/material');
var FormControlLabel = _interopDefault(require('@mui/material/FormControlLabel'));
var Switch = _interopDefault(require('@mui/material/Switch'));
var InputBase = _interopDefault(require('@mui/material/InputBase'));
var TextField = _interopDefault(require('@mui/material/TextField'));
var Autocomplete = _interopDefault(require('@mui/material/Autocomplete'));
var AdapterDateFns = require('@mui/x-date-pickers/AdapterDateFns');
var LocalizationProvider = require('@mui/x-date-pickers/LocalizationProvider');
var TimePicker = require('@mui/x-date-pickers/TimePicker');
var locale = require('date-fns/locale');
var DatePicker = require('@mui/x-date-pickers/DatePicker');
var Backdrop = _interopDefault(require('@mui/material/Backdrop'));
var CircularProgress = _interopDefault(require('@mui/material/CircularProgress'));
var toast = require('primereact/toast');
var fileupload = require('primereact/fileupload');
var progressbar = require('primereact/progressbar');
var tag = require('primereact/tag');
var tooltip = require('primereact/tooltip');
var PictureAsPdfIcon = _interopDefault(require('@mui/icons-material/PictureAsPdf'));
var FileDownloadIcon = _interopDefault(require('@mui/icons-material/FileDownload'));
var VisibilityIcon = _interopDefault(require('@mui/icons-material/Visibility'));
var image = require('primereact/image');

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
  return /*#__PURE__*/React$1__default.createElement("div", {
    style: _extends({}, style.conteiner, props.style || {}),
    className: "" + ((props === null || props === void 0 ? void 0 : props.className) || '')
  }, props === null || props === void 0 ? void 0 : props.children);
};
Conteiner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
Conteiner.defaultProp = {
  className: "",
  children: {}
};
var ConteinerItem = function ConteinerItem(props) {
  return /*#__PURE__*/React$1__default.createElement("div", {
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
  className: ""
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
  return /*#__PURE__*/React$1__default.createElement("div", {
    id: props.id,
    style: _extends({}, style$1.page_base_content, props.style || {})
  }, props.header !== undefined && /*#__PURE__*/React$1__default.createElement("div", {
    style: _extends({}, style$1.page_base_header, props.style || {})
  }, /*#__PURE__*/React$1__default.createElement("label", null, props.header)), props.children);
};

var PageBase$1 = React$1__default.memo(PageBase);

var OperationDetail = function OperationDetail(props) {
  return /*#__PURE__*/React$1__default.createElement(PageBase$1, null, props.children);
};

var OperationDetail$1 = React$1__default.memo(OperationDetail);

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
  return /*#__PURE__*/React$1__default.createElement("div", {
    id: props.id,
    style: _extends({}, style$2.page_base_content, props.style || {})
  }, props.header !== undefined && /*#__PURE__*/React$1__default.createElement("div", {
    style: _extends({}, style$2.page_base_header, props.style || {})
  }, /*#__PURE__*/React$1__default.createElement("label", null, props.header)), props.children);
};

var PageBase$3 = React$1__default.memo(PageBase$2);

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
  return /*#__PURE__*/React$1.createElement(MuiAccordion, _extends({
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
  return /*#__PURE__*/React$1.createElement(MuiAccordionSummary, _extends({
    expandIcon: !props.disableExpandedButton ? /*#__PURE__*/React$1.createElement(ArrowForwardIosSharpIcon, {
      style: {
        color: '#008EBC'
      },
      sx: {
        fontSize: '0.9rem'
      }
    }) : /*#__PURE__*/React$1.createElement("div", null)
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
  var _React$useState = React$1.useState('panel'),
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

  return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement(Accordion, {
    id: "header-accordion-conteiner",
    style: style$3.header_accordion_conteiner,
    expanded: handleDisableExpand(props.disableExpandedButton, expanded),
    onChange: handleChange('panel')
  }, /*#__PURE__*/React$1.createElement(AccordionSummary, {
    disableExpandedButton: props.disableExpandedButton,
    "aria-controls": "paneld-content",
    id: "paneld-header"
  }, /*#__PURE__*/React$1.createElement(Conteiner, null, /*#__PURE__*/React$1.createElement(ConteinerItem, null, /*#__PURE__*/React$1.createElement(Typography, {
    style: {
      fontSize: '1.2rem'
    }
  }, props.header)), /*#__PURE__*/React$1.createElement(ConteinerItem, {
    style: style$3.header_accordion
  }, !props.disableAttachButton && /*#__PURE__*/React$1.createElement(Tooltip, {
    title: props.titleTooltip
  }, /*#__PURE__*/React$1.createElement(IconButton, {
    style: style$3.header_accordion_pin,
    size: "small",
    onClick: props.onClick
  }, /*#__PURE__*/React$1.createElement(PushPinIcon, null)))))), /*#__PURE__*/React$1.createElement(AccordionDetails, null, props.children)));
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
var HeaderAccordion$1 = React$1.memo(HeaderAccordion);

var style$4 = {
  search_modal: {
    justifyContent: 'flex-end'
  },
  search_modal_item: {
    flex: 'none!important'
  }
};

var CustomModal = function CustomModal(props) {
  var _React$useState = React$1.useState('paper'),
      scroll = _React$useState[0];

  return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement(Dialog, {
    maxWidth: true,
    open: props.displayModal,
    onClose: props.onClose,
    scroll: scroll,
    "aria-labelledby": "scroll-dialog-title",
    "aria-describedby": "scroll-dialog-description"
  }, /*#__PURE__*/React$1.createElement(DialogTitle, {
    id: "scroll-dialog-title-modal"
  }, props.title), /*#__PURE__*/React$1.createElement(DialogContent, {
    dividers: scroll === 'paper'
  }, /*#__PURE__*/React$1.createElement("div", null, props.children)), /*#__PURE__*/React$1.createElement(DialogActions, null, /*#__PURE__*/React$1.createElement(Conteiner, {
    style: style$4.search_modal
  }, /*#__PURE__*/React$1.createElement(ConteinerItem, {
    style: style$4.search_modal_item
  }, /*#__PURE__*/React$1.createElement(Button, {
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
  title: "",
  buttonAdditional: null
};
var CustomModal$1 = React$1.memo(CustomModal);

var Alert = React$1.forwardRef(function Alert(props, ref) {
  return /*#__PURE__*/React$1.createElement(MuiAlert, _extends({
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
  return /*#__PURE__*/React$1.createElement(Stack, {
    spacing: 2,
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/React$1.createElement(Snackbar, {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/React$1.createElement(Alert, {
    onClose: handleClose,
    severity: severity || "success",
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

  return /*#__PURE__*/React$1__default.createElement("div", null, /*#__PURE__*/React$1__default.createElement("h2", {
    style: style$5.operation_header_title
  }, props.title), /*#__PURE__*/React$1__default.createElement("h5", {
    style: style$5.operation_header_subtitle
  }, props.subTitle), /*#__PURE__*/React$1__default.createElement(CustomModal$1, {
    displayModal: props.displayModal,
    onCloseDialog: props.onCloseDialog,
    buttonAdditional: props.buttonAdditional
  }, /*#__PURE__*/React$1__default.createElement(PageBase$3, {
    style: {
      display: handleDisplayModal(props.displayModal)
    },
    id: "operation-header"
  }, /*#__PURE__*/React$1__default.createElement(HeaderAccordion$1, {
    disableAttachButton: props.disableAttachButton,
    disableExpandedButton: props.disableExpandedButton,
    titleTooltip: "Fixar",
    header: props.titleHeader,
    onClick: props.onClick
  }, props.children))), /*#__PURE__*/React$1__default.createElement(PageBase$3, {
    style: {
      display: handleDisplay(props.display)
    },
    id: "operation-header"
  }, /*#__PURE__*/React$1__default.createElement(HeaderAccordion$1, {
    disableAttachButton: props.disableAttachButton,
    disableExpandedButton: props.disableExpandedButton,
    titleTooltip: "Desafixar",
    header: props.titleHeader,
    onClick: props.onClick
  }, props.children)), /*#__PURE__*/React$1__default.createElement(CustomToastMessage, {
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
var OperationSection$1 = React$1__default.memo(OperationSection);

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

  var _useState = React$1.useState(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = React$1.useState(0),
      first = _useState2[0],
      setFirst = _useState2[1];

  var _useState3 = React$1.useState(pageableData === null || pageableData === void 0 ? void 0 : (_pageableData$pageabl = pageableData.pageable) === null || _pageableData$pageabl === void 0 ? void 0 : _pageableData$pageabl.pageSize),
      rows = _useState3[0],
      setRows = _useState3[1];

  var totalRecords = pageableData === null || pageableData === void 0 ? void 0 : pageableData.totalElements;
  React$1.useEffect(function () {
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
  return /*#__PURE__*/React$1__default.createElement("div", null, /*#__PURE__*/React$1__default.createElement(PageBase$3, null, /*#__PURE__*/React$1__default.createElement("div", {
    style: style$6.operation_content_group
  }, /*#__PURE__*/React$1__default.createElement(Conteiner, null, /*#__PURE__*/React$1__default.createElement(ConteinerItem, {
    style: style$6.operation_content_header_search
  }, /*#__PURE__*/React$1__default.createElement(IconButton, {
    id: "id_operation_content_search",
    style: {
      display: handleDisplay$1(display)
    },
    className: "icon-btn-blue",
    size: "large",
    onClick: onClick
  }, /*#__PURE__*/React$1__default.createElement(Tooltip, {
    title: "Filtros / Pesquisa"
  }, /*#__PURE__*/React$1__default.createElement(FilterAltIcon, {
    fontSize: "inherit"
  })))), /*#__PURE__*/React$1__default.createElement(ConteinerItem, {
    style: style$6.operation_content_header
  }, printIcon && /*#__PURE__*/React$1__default.createElement(IconButton, {
    className: "icon-btn-blue",
    size: "large",
    style: {
      marginRight: '7px'
    },
    onClick: onReportClick
  }, /*#__PURE__*/React$1__default.createElement(Tooltip, {
    title: "Imprimir"
  }, /*#__PURE__*/React$1__default.createElement(PrintIcon, {
    fontSize: "inherit"
  }))), onAddClick && /*#__PURE__*/React$1__default.createElement(Button, {
    className: "btn-blue",
    startIcon: /*#__PURE__*/React$1__default.createElement(AddCircleOutlineIcon, null),
    variant: "contained",
    color: "success",
    onClick: onAddClick
  }, props.onAddClickTitle ? props.onAddClickTitle : 'Incluir'))), /*#__PURE__*/React$1__default.createElement(Conteiner, null, /*#__PURE__*/React$1__default.createElement(ConteinerItem, {
    style: style$6.operation_content_data_table
  }, /*#__PURE__*/React$1__default.createElement(datatable.DataTable, {
    value: records,
    paginatorTemplate: template,
    sortField: sortField,
    sortOrder: sortOrder,
    responsiveLayout: "scroll",
    loading: loading,
    size: "small",
    emptyMessage: "Nenhum resultado encontrado",
    scrollHeight: heigthDataTable
  }, columnList.map(function (item, index) {
    if (item.body !== undefined) return /*#__PURE__*/React$1__default.createElement(column.Column, {
      key: index,
      style: item.style,
      sortable: item.sortable,
      body: item.body,
      header: item.header,
      frozen: item.frozen,
      alignFrozen: item.alignFrozen,
      dataType: item.dataType
    });else return /*#__PURE__*/React$1__default.createElement(column.Column, {
      key: index,
      style: item.style,
      sortable: item.sortable,
      field: item.field,
      header: item.header,
      frozen: item.frozen,
      dataType: item.dataType
    });
  })), pageableData && /*#__PURE__*/React$1__default.createElement(paginator.Paginator, {
    style: loading ? style$6.loadingPaginator : {},
    template: template,
    onPageChange: onPageChange,
    first: first,
    rows: rows,
    totalRecords: totalRecords,
    currentPageReportTemplate: "Mostrando {first} a {last} de {totalRecords}",
    rowsPerPageOptions: [10, 20, 30, 50]
  }))))), /*#__PURE__*/React$1__default.createElement(Dialog, {
    open: deleteHandler === null || deleteHandler === void 0 ? void 0 : deleteHandler.displayDelete,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React$1__default.createElement(DialogTitle, {
    id: "alert-dialog-title"
  }, "Confirma\xE7\xE3o"), /*#__PURE__*/React$1__default.createElement(DialogContent, null, /*#__PURE__*/React$1__default.createElement(DialogContentText, {
    id: "alert-dialog-description"
  }, "Tem certeza que deseja excluir ?")), /*#__PURE__*/React$1__default.createElement(DialogActions, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React$1__default.createElement(Button, {
    style: {
      marginRight: '5px'
    },
    variant: "outlined",
    component: "span",
    onClick: function onClick() {
      return deleteHandler.onCancelClick();
    }
  }, "Cancelar"), /*#__PURE__*/React$1__default.createElement(Button, {
    className: "btn-red",
    variant: "contained",
    startIcon: /*#__PURE__*/React$1__default.createElement(DeleteIcon, null),
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
var OperationTable$1 = React$1__default.memo(OperationTable);

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

  return /*#__PURE__*/React$1.createElement(DialogTitle, _extends({
    sx: {
      m: 0,
      p: 2
    }
  }, other), children, onClose ? /*#__PURE__*/React$1.createElement(IconButton, {
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
  }, /*#__PURE__*/React$1.createElement(CloseIcon, null)) : null);
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
  return /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement(BootstrapDialog, {
    onClose: onClose,
    "aria-labelledby": "customized-dialog-title",
    open: open
  }, /*#__PURE__*/React$1.createElement(BootstrapDialogTitle, {
    id: "customized-dialog-title",
    onClose: onClose
  }, title), /*#__PURE__*/React$1.createElement(DialogContent, {
    dividers: true
  }, /*#__PURE__*/React$1.createElement(Typography, {
    gutterBottom: true
  }, "\xA0\xA0\xA0\xA0\xA0", message, "\xA0\xA0\xA0\xA0\xA0")), /*#__PURE__*/React$1.createElement(DialogActions, null, /*#__PURE__*/React$1.createElement(Button, {
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
var CustomDialog$1 = React$1.memo(CustomDialog);

var Alert$1 = React$1.forwardRef(function Alert(props, ref) {
  return /*#__PURE__*/React$1.createElement(MuiAlert, _extends({
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
  return /*#__PURE__*/React$1.createElement(Stack, {
    spacing: 2,
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/React$1.createElement(Snackbar, {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/React$1.createElement(Alert$1, {
    onClose: handleClose,
    severity: severity || "success",
    sx: {
      width: '100%'
    }
  }, message)));
}

var style$7 = {
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

  var _useState = React$1.useState(null),
      expandedRows = _useState[0],
      setExpandedRows = _useState[1];

  var paginatorRight = paginatorButton !== undefined ? /*#__PURE__*/React$1__default.createElement(button.Button, {
    label: (paginatorButton === null || paginatorButton === void 0 ? void 0 : paginatorButton.title) !== undefined ? paginatorButton === null || paginatorButton === void 0 ? void 0 : paginatorButton.title : 'Carregar mais...',
    style: style$7.paginatorRight,
    type: "button",
    icon: "pi pi-refresh",
    className: "p-button-text",
    onClick: paginatorButton.onClick
  }) : /*#__PURE__*/React$1__default.createElement(React$1__default.Fragment, null);

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

  return /*#__PURE__*/React$1__default.createElement("div", {
    style: displayBorder ? style$7.content_data_table_display_border : style$7.content_data_table
  }, /*#__PURE__*/React$1__default.createElement(datatable.DataTable, {
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
    currentPageReportTemplate: "Mostrando {first} a {last} de {totalRecords}",
    size: "small",
    rows: rowsTable,
    emptyMessage: "Nenhum resultado encontrado",
    rowsPerPageOptions: calPerPage(),
    scrollHeight: heigthDataTable
  }, displayExpander && /*#__PURE__*/React$1__default.createElement(column.Column, {
    expander: true,
    style: {
      width: '3em'
    }
  }), columnList.map(function (item, index) {
    if (item.body !== undefined) return /*#__PURE__*/React$1__default.createElement(column.Column, {
      key: index,
      style: item.style,
      sortable: item.sortable,
      body: item.body,
      header: item.header,
      frozen: item.frozen,
      alignFrozen: item.alignFrozen
    });else return /*#__PURE__*/React$1__default.createElement(column.Column, {
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
var CustomDataTable$1 = React$1__default.memo(CustomDataTable);

var style$8 = {
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
  return /*#__PURE__*/React$1__default.createElement(Dialog, {
    open: display,
    onClose: onClose,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React$1__default.createElement(DialogTitle, {
    id: "alert-dialog-title"
  }, "Confirma\xE7\xE3o"), /*#__PURE__*/React$1__default.createElement(DialogContent, null, /*#__PURE__*/React$1__default.createElement(DialogContentText, {
    id: "alert-dialog-description"
  }, "Confirma a grava\xE7\xE3o ?")), /*#__PURE__*/React$1__default.createElement(DialogActions, null, /*#__PURE__*/React$1__default.createElement(Button, {
    variant: "outlined",
    style: style$8.save_component_item,
    onClick: onCancelClick,
    startIcon: /*#__PURE__*/React$1__default.createElement(CancelOutlinedIcon, null)
  }, "Cancelar"), /*#__PURE__*/React$1__default.createElement(Button, {
    variant: "contained",
    className: "btn-green",
    color: "success",
    onClick: onConfirmClick,
    endIcon: /*#__PURE__*/React$1__default.createElement(CheckIcon, null),
    autoFocus: true
  }, "Confirmar")));
};

var SaveComponent = function SaveComponent(_ref2) {
  var onCancelClick = _ref2.onCancelClick,
      onSaveClick = _ref2.onSaveClick;

  var _React$useState = React$1__default.useState({
    display: false,
    confirmed: false
  }),
      displayConfirm = _React$useState[0],
      setDisplayConfirm = _React$useState[1];

  var _React$useState2 = React$1__default.useState(false),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  return /*#__PURE__*/React$1__default.createElement("div", null, /*#__PURE__*/React$1__default.createElement(Conteiner, {
    style: style$8.save_component
  }, /*#__PURE__*/React$1__default.createElement(ConteinerItem, null, /*#__PURE__*/React$1__default.createElement(Button, {
    style: style$8.save_component_item,
    variant: "outlined",
    startIcon: /*#__PURE__*/React$1__default.createElement(CancelOutlinedIcon, null),
    onClick: onCancelClick
  }, "Cancelar"), /*#__PURE__*/React$1__default.createElement(LoadingButton, {
    loading: loading,
    loadingPosition: "end",
    color: "success",
    variant: "contained",
    className: "btn-green",
    endIcon: /*#__PURE__*/React$1__default.createElement(SaveOutlinedIcon, null),
    onClick: function onClick() {
      if (loading) return;
      setDisplayConfirm({
        display: true,
        confirmed: false
      });
    }
  }, "Salvar"))), /*#__PURE__*/React$1__default.createElement(MessageConfirmation, {
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
var SaveComponent$1 = React$1__default.memo(SaveComponent);

var style$9 = {
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
  return /*#__PURE__*/React$1.createElement(Box, {
    sx: style$9,
    onClick: onClick
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "box-menu"
  }, /*#__PURE__*/React$1.createElement("img", {
    src: "img/IconsModules/" + title.toUpperCase() + ".png",
    alt: title
  }), /*#__PURE__*/React$1.createElement("p", null, title)));
}

var authorities = {
  ROLE_ROOT: "ROLE_ROOT",
  ROLE_BENEFICIARIO: "ROLE_BENEFICIARIO"
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
    return /*#__PURE__*/React.createElement(AccessDenied, null);
  }

  if (agsiJwt.authorities.includes(authorities.ROLE_BENEFICIARIO)) {
    return {
      'wallet': agsiJwt.code
    };
  } else {
    return false;
  }
}
var parseJwt = function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

function MenuAppList(_ref) {
  var open = _ref.open,
      children = _ref.children;

  var _React$useState = React$1.useState(getRememberMenuLocalStorage()),
      switchDisplayMenu = _React$useState[0],
      setSwitchDisplayMenu = _React$useState[1];

  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("div", {
    id: "basic-menu",
    className: open ? 'menu-app-list' : 'menu-app-list-none'
  }, /*#__PURE__*/React$1.createElement("div", {
    id: "toggle-menu-apps",
    style: {
      textAlign: 'right',
      color: 'gray'
    }
  }, /*#__PURE__*/React$1.createElement(FormControlLabel, {
    label: /*#__PURE__*/React$1.createElement("label", {
      style: {
        fontSize: '14px'
      }
    }, "Fixar"),
    className: "menu-apps",
    control: /*#__PURE__*/React$1.createElement(Switch, {
      checked: switchDisplayMenu,
      className: "menu-apps",
      onChange: function onChange() {
        setSwitchDisplayMenu(!switchDisplayMenu);
        setRememberMenuLocalStorage(!switchDisplayMenu);
      }
    })
  })), /*#__PURE__*/React$1.createElement(Divider, {
    variant: "middle"
  }), children));
}

var Header = function Header(_ref) {
  var title = _ref.title,
      _ref$listApp = _ref.listApp,
      listApp = _ref$listApp === void 0 ? [] : _ref$listApp,
      notification = _ref.notification;
  var navigate = reactRouterDom.useNavigate();

  var _React$useState = React$1.useState(getRememberMenuLocalStorage()),
      openMenu = _React$useState[0],
      setOpenMenu = _React$useState[1];

  var _React$useState2 = React$1.useState(null),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var _React$useState3 = React$1.useState(null),
      mobileMoreAnchorEl = _React$useState3[0],
      setMobileMoreAnchorEl = _React$useState3[1];

  var isMenuOpen = Boolean(anchorEl);
  var isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  var handleClick = function handleClick(event) {
    var remember = getRememberMenuLocalStorage();
    setOpenMenu(remember ? remember : !openMenu);
  };

  window.addEventListener('click', function (e) {
    var remember = getRememberMenuLocalStorage();
    var listIds = [];
    e.path.map(function (i) {
      if (i.id) {
        listIds.push(i.id);
      }
    });

    if (listIds.includes('menu-apps')) {
      return;
    }

    if (listIds.includes('basic-menu')) {
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

  var menuId = 'primary-search-account-menu';
  var renderMenu = /*#__PURE__*/React$1.createElement(Menu, {
    onClose: handleMenuClose,
    anchorEl: anchorEl,
    open: isMenuOpen,
    id: menuId,
    keepMounted: true,
    style: {
      marginTop: '7px',
      marginLeft: '10px'
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    style: {
      minWidth: '200px'
    }
  }, /*#__PURE__*/React$1.createElement(MenuItem, {
    onClick: handleMenuClose
  }, /*#__PURE__*/React$1.createElement(ListItemIcon, null, /*#__PURE__*/React$1.createElement(FolderSharedIcon, {
    fontSize: "small"
  })), "Perfil"), /*#__PURE__*/React$1.createElement(Divider, null), /*#__PURE__*/React$1.createElement(MenuItem, {
    onClick: function onClick() {
      return handleExit();
    }
  }, /*#__PURE__*/React$1.createElement(ListItemIcon, null, /*#__PURE__*/React$1.createElement(ExitToAppIcon, {
    fontSize: "small"
  })), "Sair")));
  var mobileMenuId = 'primary-search-account-menu-mobile';
  var renderMobileMenu = /*#__PURE__*/React$1.createElement(Menu, {
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
  }, /*#__PURE__*/React$1.createElement(MenuItem, {
    onClick: handleProfileMenuOpen
  }, /*#__PURE__*/React$1.createElement(IconButton, {
    size: "small",
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    color: "inherit"
  }, /*#__PURE__*/React$1.createElement(AccountCircle, null)), /*#__PURE__*/React$1.createElement("p", null, "Perfil")), /*#__PURE__*/React$1.createElement(MenuItem, {
    onClick: handleClick
  }, /*#__PURE__*/React$1.createElement(IconButton, {
    size: "small",
    "aria-haspopup": "true",
    color: "inherit"
  }, /*#__PURE__*/React$1.createElement(AppsIcon, null)), /*#__PURE__*/React$1.createElement("p", null, "M\xF3dulos")));
  return /*#__PURE__*/React$1.createElement(Box, {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React$1.createElement(AppBar, {
    className: "header-app-bar",
    position: "fixed"
  }, /*#__PURE__*/React$1.createElement(Toolbar, null, /*#__PURE__*/React$1.createElement(IconButton, {
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
  }, /*#__PURE__*/React$1.createElement(material.Tooltip, {
    title: "Menu"
  }, /*#__PURE__*/React$1.createElement(MenuIcon, null))), /*#__PURE__*/React$1.createElement(Typography, {
    variant: "h6",
    noWrap: true,
    component: "div",
    sx: {
      display: {
        xs: 'none',
        sm: 'block'
      }
    }
  }, title), /*#__PURE__*/React$1.createElement(Box, {
    sx: {
      flexGrow: 1
    }
  }), /*#__PURE__*/React$1.createElement(Box, {
    sx: {
      display: {
        xs: 'none',
        md: 'flex'
      },
      marginRight: '15px'
    }
  }, notification && /*#__PURE__*/React$1.createElement(IconButton, {
    size: "large",
    "aria-label": "show more",
    "aria-haspopup": "true",
    color: "inherit"
  }, /*#__PURE__*/React$1.createElement(Badge, {
    color: "error",
    badgeContent: notification.notificationUnread
  }, /*#__PURE__*/React$1.createElement(material.Tooltip, {
    title: "Notifica\xE7\xF5es"
  }, /*#__PURE__*/React$1.createElement(NotificationsIcon, {
    onClick: notification.onClick
  }))))), /*#__PURE__*/React$1.createElement(Box, {
    id: "menu-apps",
    sx: {
      display: {
        xs: 'flex',
        md: 'flex'
      }
    }
  }, !roleUserBeneficiarie() && /*#__PURE__*/React$1.createElement(IconButton, {
    id: "app-menu",
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "M\xF3dulos",
    onClick: handleClick
  }, /*#__PURE__*/React$1.createElement(material.Tooltip, {
    title: "Aplicativos"
  }, /*#__PURE__*/React$1.createElement(AppsIcon, null))), /*#__PURE__*/React$1.createElement(IconButton, {
    size: "large",
    edge: "end",
    "aria-label": "account of current user",
    "aria-controls": menuId,
    "aria-haspopup": "true",
    onClick: handleProfileMenuOpen,
    color: "inherit"
  }, /*#__PURE__*/React$1.createElement(material.Tooltip, {
    title: "Usu\xE1rio"
  }, /*#__PURE__*/React$1.createElement(AccountCircle, null)))))), renderMobileMenu, renderMenu, /*#__PURE__*/React$1.createElement(MenuAppList, {
    open: openMenu
  }, /*#__PURE__*/React$1.createElement("section", {
    className: "grid grid-template-columns-4"
  }, listApp.map(function (item, index) {
    return /*#__PURE__*/React$1.createElement(Box, {
      key: index
    }, /*#__PURE__*/React$1.createElement(HeaderApp, {
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

var Header$1 = React$1.memo(Header);

var _excluded$1 = ["title", "options", "loading", "value", "freeSolo", "onChange", "inputValue", "onInputChange", "validation", "loadingListOptions", "open", "disabled", "onKeyPress", "onblur", "maxLength"];

var isNullValue = function isNullValue(value) {
  return value === undefined || value === null || value === "";
};

var handleHelperText = function handleHelperText(value, validation) {
  return isNullValue(value) && validation ? "Campo obrigatório" : "";
};

var handleError = function handleError(value, validation) {
  return isNullValue(value) && validation;
};

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
      onblur = _ref.onblur,
      maxLength = _ref.maxLength,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return /*#__PURE__*/React$1__default.createElement(React$1__default.Fragment, null, /*#__PURE__*/React$1__default.createElement(Autocomplete, {
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
    loading: loading,
    loadingText: "Carregando...",
    onBlur: onblur,
    value: value,
    onChange: onChange,
    inputValue: inputValue,
    onInputChange: onInputChange,
    onKeyPress: onKeyPress,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React$1__default.createElement(TextField, _extends({}, params, {
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
          startAdornment: /*#__PURE__*/React$1__default.createElement(React$1__default.Fragment, null, loadingListOptions ? /*#__PURE__*/React$1__default.createElement(material.CircularProgress, {
            color: "inherit",
            size: 15
          }) : null, params.InputProps.startAdornment)
        })
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
  title: "",
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
var CustomInputSelect$1 = React$1__default.memo(CustomInputSelect);

var _excluded$2 = ["label", "id", "value", "disabled", "onChange", "validation", "multiline", "rows"];

var isNullValue$1 = function isNullValue(value) {
  return value === undefined || value === null || value === "";
};

var handleHelperText$1 = function handleHelperText(validation) {
  return validation ? "Campo obrigatório" : "";
};

var handleError$1 = function handleError(value, validation) {
  return isNullValue$1(value) && validation;
};

var CustomTextField = function CustomTextField(_ref) {
  var label = _ref.label,
      id = _ref.id,
      value = _ref.value,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      validation = _ref.validation,
      multiline = _ref.multiline,
      rows = _ref.rows,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return /*#__PURE__*/React$1__default.createElement(React$1__default.Fragment, null, /*#__PURE__*/React$1__default.createElement(TextField, _extends({
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
    helperText: value ? "" : handleHelperText$1(validation)
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
  validation: PropTypes.bool
};
CustomTextField.defaultProp = {
  label: "",
  id: "",
  value: {},
  multiline: false,
  rows: false,
  disabled: false,
  onChange: function onChange() {},
  validation: false
};
var CustomTextField$1 = React$1__default.memo(CustomTextField);

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

  var _React$useState = React$1__default.useState(''),
      dateValidation = _React$useState[0],
      setDateValidation = _React$useState[1];

  return /*#__PURE__*/React$1__default.createElement(React$1__default.Fragment, null, /*#__PURE__*/React$1__default.createElement(LocalizationProvider.LocalizationProvider, {
    dateAdapter: AdapterDateFns.AdapterDateFns,
    locale: locale.ptBR
  }, /*#__PURE__*/React$1__default.createElement(TimePicker.TimePicker, {
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
      return /*#__PURE__*/React$1__default.createElement(material.TextField, _extends({}, params, {
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
var CustomTimePicker$1 = React$1__default.memo(CustomTimePicker);

var _excluded$4 = ["label", "value", "minDate", "maxDate", "dateFormat", "onChange", "placeHolder", "helperText", "disabled", "noAlertNoneValue"];

var CustomDatePicker = function CustomDatePicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      dateFormat = _ref.dateFormat,
      onChange = _ref.onChange,
      placeHolder = _ref.placeHolder,
      helperText = _ref.helperText,
      disabled = _ref.disabled,
      noAlertNoneValue = _ref.noAlertNoneValue,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$4);

  var _React$useState = React$1__default.useState(''),
      dateValidation = _React$useState[0],
      setDateValidation = _React$useState[1];

  return /*#__PURE__*/React$1__default.createElement(React$1__default.Fragment, null, /*#__PURE__*/React$1__default.createElement(LocalizationProvider.LocalizationProvider, {
    dateAdapter: AdapterDateFns.AdapterDateFns,
    locale: locale.ptBR
  }, /*#__PURE__*/React$1__default.createElement(DatePicker.DatePicker, {
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
      return /*#__PURE__*/React$1__default.createElement(material.TextField, _extends({}, params, {
        inputProps: _extends({}, params.inputProps, {
          placeholder: placeHolder || "dd/mm/aaaa"
        }),
        size: "small",
        sx: {
          marginTop: '8px'
        },
        id: 'custom-date-picker',
        error: !value && !noAlertNoneValue || dateValidation,
        helperText: !value && !noAlertNoneValue || dateValidation ? helperText || "Data ou Hora Invalida!" : "",
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
var CustomDatePicker$1 = React$1__default.memo(CustomDatePicker);

var style$a = {
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
  return /*#__PURE__*/React$1__default.createElement("div", {
    style: style$a.appcontent
  }, /*#__PURE__*/React$1__default.createElement(Backdrop, {
    sx: {
      color: '#fff',
      zIndex: function zIndex(theme) {
        return theme.zIndex.drawer + 1;
      }
    },
    open: props.loading
  }, /*#__PURE__*/React$1__default.createElement(CircularProgress, {
    color: "inherit"
  })), props.children);
};

AppContent.propTypes = {
  loading: PropTypes.bool
};
AppContent.defaultProp = {
  loading: false
};
var AppContent$1 = React$1__default.memo(AppContent);

var FilesUpload = function FilesUpload(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      disabledChoose = _ref.disabledChoose,
      maxFileSizeMb = _ref.maxFileSizeMb,
      typeAcceptFile = _ref.typeAcceptFile;
  var maxSizeUpload = maxFileSizeMb ? maxFileSizeMb * 1000000 : 1 * 1000000;

  var _useState = React$1.useState(0),
      totalSize = _useState[0],
      setTotalSize = _useState[1];

  var toast$1 = React$1.useRef(null);
  var fileUploadRef = React$1.useRef(null);
  React$1.useEffect(function () {
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
      severity: "info",
      summary: "Success",
      detail: "File Uploaded"
    });
  };

  var onTemplateClear = function onTemplateClear() {
    setTotalSize(0);
  };

  var headerTemplate = function headerTemplate(options) {
    var className = options.className,
        chooseButton = options.chooseButton;
    var valuePercent = totalSize / maxSizeUpload * 100;
    var formatedValue = totalSize > 0 ? formatBytes(totalSize) : "0 B";
    return /*#__PURE__*/React$1__default.createElement("div", {
      className: className,
      style: {
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center"
      }
    }, !disabledChoose && chooseButton, /*#__PURE__*/React$1__default.createElement(progressbar.ProgressBar, {
      value: valuePercent,
      displayValueTemplate: function displayValueTemplate() {
        return formatedValue + " / " + formatBytes(maxSizeUpload);
      },
      style: {
        width: "300px",
        height: "20px",
        marginLeft: "auto"
      }
    }));
  };

  var chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: false,
    className: "custom-choose-btn p-button-success p-button-rounded p-button-outlined"
  };
  var uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className: "custom-upload-btn p-button-success p-button-rounded p-button-outlined"
  };
  var cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className: "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined"
  };

  var showPdf = function showPdf(file) {
    var blob = new Blob([file], {
      type: 'application/pdf'
    });
    var link = URL.createObjectURL(blob);
    window.open(link, '_blank');
  };

  return /*#__PURE__*/React$1__default.createElement("div", null, /*#__PURE__*/React$1__default.createElement(toast.Toast, {
    ref: toast$1,
    style: {
      marginTop: '40px'
    }
  }), /*#__PURE__*/React$1__default.createElement(tooltip.Tooltip, {
    target: ".custom-choose-btn",
    content: "Selecionar",
    position: "bottom"
  }), /*#__PURE__*/React$1__default.createElement(tooltip.Tooltip, {
    target: ".custom-cancel-btn",
    content: "Clear",
    position: "bottom"
  }), /*#__PURE__*/React$1__default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React$1__default.createElement(fileupload.FileUpload, {
    ref: fileUploadRef,
    name: "FilesUpload",
    multiple: true,
    accept: typeAcceptFile ? typeAcceptFile : ".pdf,image/*",
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
  }), /*#__PURE__*/React$1__default.createElement("div", {
    className: "afterInput"
  }, value && value.map(function (file) {
    return /*#__PURE__*/React$1__default.createElement("div", {
      className: "item-row"
    }, /*#__PURE__*/React$1__default.createElement("div", {
      className: "item-img-fileName",
      style: {
        width: "40%"
      }
    }, file.type == 'application/pdf' && /*#__PURE__*/React$1__default.createElement(Tooltip, {
      title: "Visualizar PDF"
    }, /*#__PURE__*/React$1__default.createElement(PictureAsPdfIcon, {
      onClick: function onClick() {
        showPdf(file);
      },
      className: "dropzone-pdf-icon",
      fontSize: "large"
    })), file.type !== 'application/pdf' && /*#__PURE__*/React$1__default.createElement("img", {
      alt: file.name,
      role: "presentation",
      src: file.objectURL,
      width: 100
    }), /*#__PURE__*/React$1__default.createElement("span", {
      className: "file-name"
    }, file.name, /*#__PURE__*/React$1__default.createElement("br", null), /*#__PURE__*/React$1__default.createElement("small", null, new Date().toLocaleDateString()))), /*#__PURE__*/React$1__default.createElement(tag.Tag, {
      value: formatBytes(file.size),
      severity: "warning",
      className: "px-3 py-2"
    }), /*#__PURE__*/React$1__default.createElement(button.Button, {
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
var FilesUpload$1 = React$1__default.memo(FilesUpload);

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

var handleLoading = function handleLoading(text, isLoading) {
  return isLoading ? /*#__PURE__*/React$1__default.createElement(CircularProgress, null) : text;
};
var isNullValue$2 = function isNullValue(value) {
  return value === undefined || value === null || value === "";
};

var maskText = function maskText(v) {
  var value = v;
  if (value.length > 150) value.preventDefault();
  value = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ \s]/gi, '').toUpperCase();
  return value;
};
var maskWallet = function maskWallet(v) {
  if (isNullValue$2(v)) return '';
  var value = v;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{4})(\d{2})/, '$1.$2');
  value = value.replace(/(\d{2})(\d{5})/, '$1.$2');
  value = value.replace(/(\d{5})(\d{2})(\d{1})/, "$1.$2-$3");
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
    "timestamp": "",
    "status": 0,
    "message": "",
    "data": {
      "content": []
    }
  };

  var _useState = React$1.useState(false),
      loadingBeneficiary = _useState[0],
      setLoadingBeneficiary = _useState[1];

  var _React$useState = React$1__default.useState(false),
      openBeneficiariesField = _React$useState[0],
      setOpenBeneficiariesField = _React$useState[1];

  var _React$useState2 = React$1__default.useState(false),
      openWalletField = _React$useState2[0],
      setOpenWalletField = _React$useState2[1];

  var _useState2 = React$1.useState(ResponseModel_v2),
      localBeneficiaries = _useState2[0],
      setLocalBeneficiaries = _useState2[1];

  var _useState3 = React$1.useState(''),
      beneficiarieWalletInputValue = _useState3[0],
      setBeneficiarieWalletInputValue = _useState3[1];

  var _useState4 = React$1.useState(''),
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

  return /*#__PURE__*/React$1__default.createElement(React$1.Fragment, null, /*#__PURE__*/React$1__default.createElement(ConteinerItem, {
    className: "custom-beneficiarie-component-wallet"
  }, /*#__PURE__*/React$1__default.createElement(CustomInputSelect$1, {
    title: handleLoading((!label ? "Carteirinha" : label[0]) + isRequired(), loadingBeneficiary),
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
      onChangeId(newInputValue);
      if (isNullValue$2(newInputValue)) onChangeName('');

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
      setBeneficiarieWalletInputValue(maskWallet(newInputValue));
    },
    onKeyUp: function onKeyUp(event) {
      try {
        return Promise.resolve(_catch(function () {
          var _temp = function () {
            if (event.key === 'Tab' || event.target.value.length > 15) {
              setLoadingBeneficiary(true);
              return Promise.resolve(api.http.get("" + api.addressCode(event.target.value))).then(function (response) {
                if (!isNullValue$2(response.data.data.code)) {
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
    onblur: function onblur() {
      return setOpenWalletField(false);
    },
    maxLength: 18,
    validation: validation
  })), /*#__PURE__*/React$1__default.createElement(ConteinerItem, null, /*#__PURE__*/React$1__default.createElement(CustomInputSelect$1, {
    title: handleLoading((!label ? "Nome Beneficiário" : label[1]) + isRequired(), loadingBeneficiary),
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
      setBeneficiariesNameInputValue(maskText(newInputValue));

      if (newInputValue == '') {
        onChangeId('');
        handleOnChangeData('');
      }

      var item = localBeneficiaries.data.content.filter(function (x) {
        return x.name === newInputValue;
      })[0];

      if (!isNullValue$2(item)) {
        onChangeId(item.code);
        handleOnChangeData(item);
        setOpenBeneficiariesField(false);
      }
    },
    onKeyDown: function onKeyDown(event) {
      try {
        return Promise.resolve(_catch(function () {
          var _temp2 = function () {
            if (event.key === 'Enter' || event.key === 'Tab' || event.target.value.length > 1) {
              setLoadingBeneficiary(true);
              return Promise.resolve(api.http.get("" + api.addressName(beneficiariesNameInputValue))).then(function (response) {
                setLocalBeneficiaries(response.data);
                setLoadingBeneficiary(false);
                setOpenBeneficiariesField(true);
              });
            }
          }();

          if (_temp2 && _temp2.then) return _temp2.then(function () {});
        }, function () {
          setLoadingBeneficiary(false);
        }));
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
var style$b = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: "80%",
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

  var _useState = React$1.useState(''),
      imgModal = _useState[0],
      setImgModal = _useState[1];

  var _useState2 = React$1.useState(initialStateFileDelete),
      contentFileDelete = _useState2[0],
      setContentFileDelete = _useState2[1];

  var _useState3 = React$1.useState(false),
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
      return /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
        title: "Visualizar PDF"
      }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(VisibilityIcon, {
        onClick: function onClick() {
          return showPdf(file.fileId, file.fileLink);
        }
      })));
    }

    if (file.fileLink && acceptTypesProps.includes(get_url_extension(file.fileLink))) {
      return /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
        title: "Visualizar Imagem"
      }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(VisibilityIcon, {
        onClick: function onClick() {
          return showImg(file.fileId, file.fileLink, file.fileName);
        }
      })));
    }

    if (onShowOnApi) {
      if (file.fileName.toLowerCase().includes('pdf')) {
        return /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
          title: "Visualizar PDF"
        }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(VisibilityIcon, {
          onClick: function onClick() {
            return showOnApiPdf(file.fileId);
          }
        })));
      } else {
        return /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
          title: "Visualizar Imagem"
        }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(VisibilityIcon, {
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

  React$1.useEffect(function () {
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

  return /*#__PURE__*/React$1__default.createElement(React$1.Fragment, null, /*#__PURE__*/React$1__default.createElement(material.TableContainer, {
    className: "conteiner-archive-component",
    component: material.Paper
  }, /*#__PURE__*/React$1__default.createElement(material.Table, {
    className: "",
    size: "small",
    "aria-label": "a dense table"
  }, /*#__PURE__*/React$1__default.createElement(material.TableHead, {
    className: "table-header-archive-content"
  }, /*#__PURE__*/React$1__default.createElement(material.TableRow, null, /*#__PURE__*/React$1__default.createElement(material.TableCell, null, "C\xF3digo"), /*#__PURE__*/React$1__default.createElement(material.TableCell, null, "Nome do Arquivo"), /*#__PURE__*/React$1__default.createElement(material.TableCell, {
    align: "center"
  }))), /*#__PURE__*/React$1__default.createElement(material.TableBody, {
    className: "table-body"
  }, filesList && filesList.map(function (file, index) {
    return /*#__PURE__*/React$1__default.createElement(material.TableRow, {
      key: file.fileId
    }, /*#__PURE__*/React$1__default.createElement(material.TableCell, {
      align: ""
    }, file.fileId), /*#__PURE__*/React$1__default.createElement(material.TableCell, {
      align: ""
    }, file.fileName), /*#__PURE__*/React$1__default.createElement(material.TableCell, {
      align: ""
    }, /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
      title: "Baixar Arquivo"
    }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(FileDownloadIcon, {
      onClick: function onClick() {
        return handleGetDocumentApi(file.fileId, file.originName);
      }
    }))), ShowArchives(file), editable && /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
      title: "Excluir Arquivo"
    }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(DeleteIcon, {
      onClick: function onClick() {
        return deleteArchive(file.fileId, file.fileName);
      }
    })))));
  }))), editable && /*#__PURE__*/React$1__default.createElement(React$1.Fragment, null, /*#__PURE__*/React$1__default.createElement("input", {
    accept: ".pdf,image/*",
    style: {
      display: 'none'
    },
    id: "raised-button-file",
    type: "file",
    onChange: function onChange(e) {
      return SendFiles(e);
    }
  }), /*#__PURE__*/React$1__default.createElement("label", {
    htmlFor: "raised-button-file"
  }, /*#__PURE__*/React$1__default.createElement(material.Button, {
    variant: "raised",
    component: "span",
    sx: {
      display: 'flex',
      color: '#6a6969'
    }
  }, "Adicionar Novo Arquivo")))), /*#__PURE__*/React$1__default.createElement(material.Modal, {
    open: openModal,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React$1__default.createElement(material.Box, {
    sx: style$b
  }, /*#__PURE__*/React$1__default.createElement(image.Image, {
    src: imgModal,
    alt: "Image",
    height: "100%"
  }), /*#__PURE__*/React$1__default.createElement(material.Box, {
    sx: styleButtonClose
  }, /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
    title: "Fechar"
  }, /*#__PURE__*/React$1__default.createElement(CloseIcon, {
    onClick: function onClick() {
      return handleClose();
    }
  }))))), /*#__PURE__*/React$1__default.createElement(material.Dialog, {
    open: contentFileDelete.openDialog,
    onClose: handleCloseDialogDeleteFile,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React$1__default.createElement(material.DialogTitle, {
    id: "alert-dialog-title"
  }, "Tem Certeza que deseja Excluir: " + contentFileDelete.file), /*#__PURE__*/React$1__default.createElement(material.DialogContent, null, /*#__PURE__*/React$1__default.createElement(material.DialogContentText, {
    id: "alert-dialog-description"
  }, "A exclus\xE3o ser\xE1 permanente!")), /*#__PURE__*/React$1__default.createElement(material.DialogActions, null, /*#__PURE__*/React$1__default.createElement(material.Button, {
    onClick: handleCloseDialogDeleteFile
  }, "Cancelar"), /*#__PURE__*/React$1__default.createElement(material.Button, {
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

  var _useState = React$1.useState(false),
      openModal = _useState[0],
      setOpenModal = _useState[1];

  var solicitation = fileList && fileList.length !== 0 ? (_fileList$ = fileList[0]) === null || _fileList$ === void 0 ? void 0 : _fileList$.solicitationId : solicitationId;

  var _useState2 = React$1.useState(''),
      imgModal = _useState2[0],
      setImgModal = _useState2[1];

  var initialStateFileDelete = {
    confirm: '',
    file: '',
    fileId: '',
    openDialog: false
  };

  var _useState3 = React$1.useState(initialStateFileDelete),
      contentFileDelete = _useState3[0],
      setContentFileDelete = _useState3[1];

  var _useState4 = React$1.useState(fileList ? fileList : []),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = React$1.useState(false),
      loadChange = _useState5[0],
      setLoadChange = _useState5[1];

  React$1.useEffect(function () {
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
      return /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
        title: "Visualizar PDF"
      }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(VisibilityIcon, {
        onClick: function onClick() {
          return showPdf(file.fileId);
        }
      })));
    }

    if (fileTypes.includes(get_url_extension(file.fileName))) {
      return /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
        title: "Visualizar Imagem"
      }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(VisibilityIcon, {
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
      "Content-Type": "multipart/form-data"
    };
    api.http.post("" + api.addressApiFile('', '', solicitation), formData, {
      headers: headers
    }).then(function (response) {
      if (response.data.status == 201) {
        var addRowFile = {
          'fileId': response.data.data,
          'fileName': fileToSend.name,
          'originName': fileToSend.name
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

  React$1.useEffect(function () {
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
  return /*#__PURE__*/React$1__default.createElement(React$1.Fragment, null, /*#__PURE__*/React$1__default.createElement(material.TableContainer, {
    className: "conteiner-archive-component",
    component: material.Paper
  }, /*#__PURE__*/React$1__default.createElement(material.Table, {
    className: "",
    size: "small",
    "aria-label": "a dense table"
  }, /*#__PURE__*/React$1__default.createElement(material.TableHead, {
    className: "table-header-archive-content"
  }, /*#__PURE__*/React$1__default.createElement(material.TableRow, null, /*#__PURE__*/React$1__default.createElement(material.TableCell, null, "C\xF3digo"), /*#__PURE__*/React$1__default.createElement(material.TableCell, null, "Nome do Arquivo"), /*#__PURE__*/React$1__default.createElement(material.TableCell, {
    align: "center"
  }))), /*#__PURE__*/React$1__default.createElement(material.TableBody, {
    className: "table-body"
  }, list && list.map(function (file, index) {
    return /*#__PURE__*/React$1__default.createElement(material.TableRow, {
      key: file.fileId
    }, /*#__PURE__*/React$1__default.createElement(material.TableCell, {
      align: ""
    }, file.fileId), /*#__PURE__*/React$1__default.createElement(material.TableCell, {
      align: ""
    }, file.originName), /*#__PURE__*/React$1__default.createElement(material.TableCell, {
      align: ""
    }, /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
      title: "Baixar Arquivo"
    }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(FileDownloadIcon, {
      onClick: function onClick() {
        return handleGetDocumentApi(file.fileId, file.originName);
      }
    }))), ShowArchives(file), editable && /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
      title: "Excluir Arquivo"
    }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(DeleteIcon, {
      onClick: function onClick() {
        deleteArchive(file.fileId, file.fileName);
      }
    })))));
  }))), loadChange && /*#__PURE__*/React$1__default.createElement(material.LinearProgress, null), editable && /*#__PURE__*/React$1__default.createElement(React$1.Fragment, null, /*#__PURE__*/React$1__default.createElement("input", {
    accept: ".pdf,image/*",
    style: {
      display: 'none'
    },
    id: "raised-button-file",
    type: "file",
    onChange: function onChange(e) {
      SendFiles(e);
    }
  }), /*#__PURE__*/React$1__default.createElement("label", {
    htmlFor: "raised-button-file"
  }, /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
    title: "Arquivos at\xE9 " + (maxFileSizeMb ? maxFileSizeMb : 10) + " mb"
  }, /*#__PURE__*/React$1__default.createElement(material.Button, {
    variant: "raised",
    component: "span",
    sx: {
      display: 'flex',
      color: '#6a6969'
    }
  }, "Adicionar Novo Arquivo"))))), /*#__PURE__*/React$1__default.createElement(material.Modal, {
    open: openModal,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React$1__default.createElement(material.Box, {
    className: "img-content-show"
  }, /*#__PURE__*/React$1__default.createElement(image.Image, {
    src: imgModal,
    alt: "Image",
    height: "100%"
  }), /*#__PURE__*/React$1__default.createElement(material.Box, {
    className: "dialog-button-close"
  }, /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
    title: "Fechar"
  }, /*#__PURE__*/React$1__default.createElement(CloseIcon, {
    onClick: function onClick() {
      return handleClose();
    }
  }))))), /*#__PURE__*/React$1__default.createElement(material.Dialog, {
    open: contentFileDelete.openDialog,
    onClose: handleCloseDialogDeleteFile,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React$1__default.createElement(material.DialogTitle, {
    id: "alert-dialog-title"
  }, "Tem Certeza que deseja Excluir: " + contentFileDelete.file), /*#__PURE__*/React$1__default.createElement(material.DialogContent, null, /*#__PURE__*/React$1__default.createElement(material.DialogContentText, {
    id: "alert-dialog-description"
  }, "A exclus\xE3o ser\xE1 permanente!")), /*#__PURE__*/React$1__default.createElement(material.DialogActions, null, /*#__PURE__*/React$1__default.createElement(material.Button, {
    onClick: handleCloseDialogDeleteFile
  }, "Cancelar"), /*#__PURE__*/React$1__default.createElement(material.Button, {
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
var style$c = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: "80%",
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

  var _useState = React$1.useState(''),
      imgModal = _useState[0],
      setImgModal = _useState[1];

  var _useState2 = React$1.useState(initialStateFileDelete),
      contentFileDelete = _useState2[0],
      setContentFileDelete = _useState2[1];

  var _useState3 = React$1.useState(false),
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
      return /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
        title: "Visualizar PDF"
      }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(VisibilityIcon, {
        onClick: function onClick() {
          return showPdf(file.fileId, file.fileLink);
        }
      })));
    }

    if (file.fileLink && acceptTypesProps.includes(get_url_extension(file.fileLink))) {
      return /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
        title: "Visualizar Imagem"
      }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(VisibilityIcon, {
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

  React$1.useEffect(function () {
    if (contentFileDelete.confirm) {
      onDelete(contentFileDelete);
    }
  }, [contentFileDelete]);

  var SendFiles = function SendFiles(e) {
    onUpload(e);
  };

  return /*#__PURE__*/React$1__default.createElement(React$1.Fragment, null, /*#__PURE__*/React$1__default.createElement(material.TableContainer, {
    className: "conteiner-archive-component",
    component: material.Paper
  }, /*#__PURE__*/React$1__default.createElement(material.Table, {
    className: "",
    size: "small",
    "aria-label": "a dense table"
  }, /*#__PURE__*/React$1__default.createElement(material.TableHead, {
    className: "table-header-archive-content"
  }, /*#__PURE__*/React$1__default.createElement(material.TableRow, null, /*#__PURE__*/React$1__default.createElement(material.TableCell, null, "C\xF3digo"), /*#__PURE__*/React$1__default.createElement(material.TableCell, null, "Nome do Arquivo"), /*#__PURE__*/React$1__default.createElement(material.TableCell, {
    align: "center"
  }))), /*#__PURE__*/React$1__default.createElement(material.TableBody, {
    className: "table-body"
  }, filesList && filesList.map(function (file) {
    return /*#__PURE__*/React$1__default.createElement(material.TableRow, {
      key: file.fileId
    }, /*#__PURE__*/React$1__default.createElement(material.TableCell, {
      align: ""
    }, file.fileId), /*#__PURE__*/React$1__default.createElement(material.TableCell, {
      align: ""
    }, file.fileName), /*#__PURE__*/React$1__default.createElement(material.TableCell, {
      align: ""
    }, /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
      title: "Baixar Arquivo"
    }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(FileDownloadIcon, {
      onClick: function onClick() {
        return handleGetDocumentApi(file.fileId, file.originName);
      }
    }))), ShowArchives(file), editable && /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
      title: "Excluir Arquivo"
    }, /*#__PURE__*/React$1__default.createElement(material.IconButton, null, /*#__PURE__*/React$1__default.createElement(DeleteIcon, {
      onClick: function onClick() {
        return deleteArchive(file.fileId, file.fileName);
      }
    })))));
  }))), editable && /*#__PURE__*/React$1__default.createElement(React$1.Fragment, null, /*#__PURE__*/React$1__default.createElement("input", {
    accept: ".pdf,image/*",
    style: {
      display: 'none'
    },
    id: "raised-button-file",
    type: "file",
    onChange: function onChange(e) {
      return SendFiles(e);
    }
  }), /*#__PURE__*/React$1__default.createElement("label", {
    htmlFor: "raised-button-file"
  }, /*#__PURE__*/React$1__default.createElement(material.Button, {
    variant: "raised",
    component: "span",
    sx: {
      display: 'flex',
      color: '#6a6969'
    }
  }, "Adicionar Novo Arquivo")))), /*#__PURE__*/React$1__default.createElement(material.Modal, {
    open: openModal,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React$1__default.createElement(material.Box, {
    sx: style$c
  }, /*#__PURE__*/React$1__default.createElement(image.Image, {
    src: imgModal,
    alt: "Image",
    height: "100%"
  }), /*#__PURE__*/React$1__default.createElement(material.Box, {
    sx: styleButtonClose$1
  }, /*#__PURE__*/React$1__default.createElement(material.Tooltip, {
    title: "Fechar"
  }, /*#__PURE__*/React$1__default.createElement(CloseIcon, {
    onClick: function onClick() {
      return handleClose();
    }
  }))))), /*#__PURE__*/React$1__default.createElement(material.Dialog, {
    open: contentFileDelete.openDialog,
    onClose: handleCloseDialogDeleteFile,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, /*#__PURE__*/React$1__default.createElement(material.DialogTitle, {
    id: "alert-dialog-title"
  }, "Tem Certeza que deseja Excluir: " + contentFileDelete.file), /*#__PURE__*/React$1__default.createElement(material.DialogContent, null, /*#__PURE__*/React$1__default.createElement(material.DialogContentText, {
    id: "alert-dialog-description"
  }, "A exclus\xE3o ser\xE1 permanente!")), /*#__PURE__*/React$1__default.createElement(material.DialogActions, null, /*#__PURE__*/React$1__default.createElement(material.Button, {
    onClick: handleCloseDialogDeleteFile
  }, "Cancelar"), /*#__PURE__*/React$1__default.createElement(material.Button, {
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

exports.AppContent = AppContent$1;
exports.ArchivesContent = ArchivesContent;
exports.Conteiner = Conteiner;
exports.ConteinerItem = ConteinerItem;
exports.CustomBeneficiarieFields = CustomBeneficiarieFields;
exports.CustomDataTable = CustomDataTable$1;
exports.CustomDatePicker = CustomDatePicker$1;
exports.CustomDialog = CustomDialog$1;
exports.CustomInputSelect = CustomInputSelect$1;
exports.CustomModal = CustomModal$1;
exports.CustomTextField = CustomTextField$1;
exports.CustomTimePicker = CustomTimePicker$1;
exports.CustomToastMessage = CustomToastMessage$1;
exports.FilesContent = FilesContent;
exports.FilesContentApi = FilesContentApi;
exports.FilesUpload = FilesUpload$1;
exports.Header = Header$1;
exports.HeaderAccordion = HeaderAccordion$1;
exports.OperationDetail = OperationDetail$1;
exports.OperationSection = OperationSection$1;
exports.OperationTable = OperationTable$1;
exports.PageBase = PageBase$3;
exports.SaveComponent = SaveComponent$1;
//# sourceMappingURL=index.js.map
