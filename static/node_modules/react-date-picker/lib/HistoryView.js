'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactFlex = require('react-flex');

var _toMoment2 = require('./toMoment');

var _toMoment3 = _interopRequireDefault(_toMoment2);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _joinFunctions = require('./joinFunctions');

var _joinFunctions2 = _interopRequireDefault(_joinFunctions);

var _bemFactory = require('./bemFactory');

var _bemFactory2 = _interopRequireDefault(_bemFactory);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _YearView = require('./YearView');

var _YearView2 = _interopRequireDefault(_YearView);

var _assignDefined = require('./assignDefined');

var _assignDefined2 = _interopRequireDefault(_assignDefined);

var _DecadeView = require('./DecadeView');

var _DecadeView2 = _interopRequireDefault(_DecadeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bem = (0, _bemFactory2.default)('react-date-picker__history-view');

var preventDefault = function preventDefault(e) {
  e.preventDefault();
};

var HistoryView = function (_Component) {
  _inherits(HistoryView, _Component);

  function HistoryView(props) {
    _classCallCheck(this, HistoryView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HistoryView).call(this, props));

    _this.state = (0, _DecadeView.getInitialState)(props);
    return _this;
  }

  _createClass(HistoryView, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unmounted = true;
    }
  }, {
    key: 'toMoment',
    value: function toMoment(date, format) {
      return (0, _toMoment3.default)(date, format, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dateProps = (0, _DecadeView.prepareDateProps)(this.props, this.state);

      var props = this.p = (0, _objectAssign2.default)({}, this.props, dateProps);

      props.children = _react2.default.Children.toArray(props.children);

      var className = (0, _join2.default)(props.className, bem(), props.theme && bem(null, 'theme-' + props.theme));

      var commonProps = (0, _assignDefined2.default)({}, {
        locale: props.locale,
        theme: props.theme,
        minDate: props.minDate,
        maxDate: props.maxDate,

        viewDate: props.viewMoment,
        activeDate: props.activeDate,
        date: props.date,

        dateFormat: props.dateFormat
      });

      var yearViewProps = (0, _objectAssign2.default)({}, commonProps);

      var decadeViewProps = (0, _objectAssign2.default)({}, commonProps, {
        ref: function ref(view) {
          _this2.decadeView = view;
        }
      });

      var flexProps = (0, _objectAssign2.default)({}, this.props);

      delete flexProps.activeDate;
      delete flexProps.adjustDateStartOf;
      delete flexProps.adjustMaxDateStartOf;
      delete flexProps.adjustMinDateStartOf;

      delete flexProps.cleanup;

      delete flexProps.date;
      delete flexProps.dateFormat;
      delete flexProps.defaultDate;
      delete flexProps.defaultViewDate;

      delete flexProps.focusDecadeView;
      delete flexProps.focusYearView;
      delete flexProps.footer;

      delete flexProps.locale;

      delete flexProps.maxDate;
      delete flexProps.minDate;

      delete flexProps.onOkClick;
      delete flexProps.onCancelClick;
      delete flexProps.okOnEnter;

      delete flexProps.navigation;

      delete flexProps.theme;

      delete flexProps.viewMoment;

      if (typeof props.cleanup == 'function') {
        props.cleanup(flexProps);
      }

      return _react2.default.createElement(
        _reactFlex.Flex,
        _extends({
          inline: true,
          column: true,
          alignItems: 'stretch'
        }, flexProps, {
          className: className
        }),
        this.renderYearView(yearViewProps),
        this.renderDecadeView(decadeViewProps),
        this.renderFooter()
      );
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      var props = this.p;
      var children = props.children;

      if (!props.footer) {
        return null;
      }

      var footerChild = children.filter(function (c) {
        return c && c.props && c.props.isDatePickerFooter;
      })[0];

      if (footerChild) {
        var newFooterProps = {
          onOkClick: (0, _joinFunctions2.default)(this.onOkClick, footerChild.props.onOkClick),
          onCancelClick: (0, _joinFunctions2.default)(this.onCancelClick, footerChild.props.onCancelClick)
        };

        if (footerChild.props.centerButtons === undefined) {
          newFooterProps.centerButtons = true;
        }
        if (footerChild.props.todayButton === undefined) {
          newFooterProps.todayButton = false;
        }
        if (footerChild.props.clearButton === undefined) {
          newFooterProps.clearButton = false;
        }

        return _react2.default.cloneElement(footerChild, newFooterProps);
      }

      return _react2.default.createElement(_Footer2.default, {
        todayButton: false,
        clearButton: false,
        onOkClick: this.onOkClick,
        onCancelClick: this.onCancelClick,
        centerButtons: true
      });
    }
  }, {
    key: 'onOkClick',
    value: function onOkClick() {
      if (this.props.onOkClick) {
        var dateMoment = this.p.activeMoment;
        var dateString = this.format(dateMoment);
        var timestamp = +dateMoment;

        this.props.onOkClick(dateString, { dateMoment: dateMoment, timestamp: timestamp });
      }
    }
  }, {
    key: 'onCancelClick',
    value: function onCancelClick() {
      if (this.props.onCancelClick) {
        this.props.onCancelClick();
      }
    }
  }, {
    key: 'renderYearView',
    value: function renderYearView(yearViewProps) {
      var props = this.p;
      var children = props.children;

      var yearViewChild = children.filter(function (c) {
        return c && c.props && c.props.isYearView;
      })[0];
      var yearViewChildProps = yearViewChild ? yearViewChild.props : {};

      var tabIndex = yearViewChildProps.tabIndex == null ? null : yearViewChildProps.tabIndex;

      yearViewProps.tabIndex = tabIndex;

      if (props.focusYearView === false || tabIndex == null) {
        yearViewProps.tabIndex = null;
        yearViewProps.onFocus = this.onYearViewFocus;
        yearViewProps.onMouseDown = this.onYearViewMouseDown;
      }

      (0, _objectAssign2.default)(yearViewProps, {
        // viewDate: props.moment || props.viewDate,
        onViewDateChange: (0, _joinFunctions2.default)(this.onViewDateChange, yearViewChildProps.onViewDateChange),
        onActiveDateChange: (0, _joinFunctions2.default)(this.onActiveDateChange, yearViewChildProps.onActiveDateChange),
        onChange: (0, _joinFunctions2.default)(this.handleYearViewOnChange, yearViewChildProps.onChange)
      });

      if (yearViewChild) {
        return _react2.default.cloneElement(yearViewChild, yearViewProps);
      }

      return _react2.default.createElement(_YearView2.default, yearViewProps);
    }
  }, {
    key: 'renderDecadeView',
    value: function renderDecadeView(decadeViewProps) {
      var props = this.p;
      var children = props.children;
      var decadeViewChild = children.filter(function (c) {
        return c && c.props && c.props.isDecadeView;
      })[0];

      var decadeViewChildProps = decadeViewChild ? decadeViewChild.props : {};

      var tabIndex = decadeViewChildProps.tabIndex == null ? null : decadeViewChildProps.tabIndex;

      decadeViewProps.tabIndex = tabIndex;

      if (props.focusDecadeView === false || tabIndex == null) {
        decadeViewProps.tabIndex = null;
        decadeViewProps.onMouseDown = this.onDecadeViewMouseDown;
      }

      (0, _objectAssign2.default)(decadeViewProps, {
        onConfirm: (0, _joinFunctions2.default)(this.handleDecadeViewOnConfirm, decadeViewChildProps.onConfirm),
        onViewDateChange: (0, _joinFunctions2.default)(this.handleDecadeOnViewDateChange, decadeViewChildProps.onViewDateChange),
        onActiveDateChange: (0, _joinFunctions2.default)(this.handleDecadeOnActiveDateChange, decadeViewChildProps.onActiveDateChange),
        onChange: (0, _joinFunctions2.default)(this.handleDecadeOnChange, decadeViewChildProps.onChange)
      });

      if (decadeViewChild) {
        return _react2.default.cloneElement(decadeViewChild, decadeViewProps);
      }

      return _react2.default.createElement(_DecadeView2.default, decadeViewProps);
    }
  }, {
    key: 'onYearViewFocus',
    value: function onYearViewFocus() {
      if (this.props.focusYearView === false) {
        this.focus();
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.decadeView && this.props.focusDecadeView) {
        this.decadeView.focus();
      }
    }
  }, {
    key: 'onYearViewMouseDown',
    value: function onYearViewMouseDown(e) {
      preventDefault(e);

      this.focus();
    }
  }, {
    key: 'onDecadeViewMouseDown',
    value: function onDecadeViewMouseDown(e) {
      preventDefault(e);
    }
  }, {
    key: 'format',
    value: function format(mom, _format) {
      _format = _format || this.props.dateFormat;

      return mom.format(_format);
    }
  }, {
    key: 'handleDecadeViewOnConfirm',
    value: function handleDecadeViewOnConfirm() {
      if (this.props.okOnEnter) {
        this.onOkClick();
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.key == 'Escape') {
        return this.onCancelClick();
      }

      if (this.decadeView) {
        this.decadeView.onKeyDown(event);
      }

      return undefined;
    }
  }, {
    key: 'confirm',
    value: function confirm(date, event) {
      return _DecadeView.confirm.call(this, date, event);
    }
  }, {
    key: 'navigate',
    value: function navigate(direction, event) {
      return _DecadeView.navigate.call(this, direction, event);
    }
  }, {
    key: 'select',
    value: function select(_ref, event) {
      var dateMoment = _ref.dateMoment;
      var timestamp = _ref.timestamp;

      return _DecadeView.select.call(this, { dateMoment: dateMoment, timestamp: timestamp }, event);
    }
  }, {
    key: 'handleDecadeOnViewDateChange',
    value: function handleDecadeOnViewDateChange(dateString, _ref2) {
      var dateMoment = _ref2.dateMoment;
      var timestamp = _ref2.timestamp;

      var props = this.p;
      var currentViewMoment = props.viewMoment;

      if (currentViewMoment) {
        dateMoment.set('month', currentViewMoment.get('month'));
        dateString = this.format(dateMoment);
        timestamp = +dateMoment;
      }

      this.onViewDateChange(dateString, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'handleDecadeOnActiveDateChange',
    value: function handleDecadeOnActiveDateChange(dateString, _ref3) {
      var dateMoment = _ref3.dateMoment;
      var timestamp = _ref3.timestamp;

      var props = this.p;
      var currentViewMoment = props.viewMoment;

      if (currentViewMoment) {
        dateMoment.set('month', currentViewMoment.get('month'));
        dateString = this.format(dateMoment);
        timestamp = +dateMoment;
      }

      this.onActiveDateChange(dateString, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'handleDecadeOnChange',
    value: function handleDecadeOnChange(dateString, _ref4, event) {
      var dateMoment = _ref4.dateMoment;
      var timestamp = _ref4.timestamp;

      var props = this.p;
      var currentViewMoment = props.viewMoment;

      if (currentViewMoment) {
        dateMoment.set('month', currentViewMoment.get('month'));
        dateString = this.format(dateMoment);
        timestamp = +dateMoment;
      }

      this.onChange(dateString, { dateMoment: dateMoment, timestamp: timestamp }, event);
    }
  }, {
    key: 'handleYearViewOnChange',
    value: function handleYearViewOnChange(dateString, _ref5, event) {
      var dateMoment = _ref5.dateMoment;
      var timestamp = _ref5.timestamp;

      var props = this.p;
      var currentMoment = props.moment;

      if (currentMoment) {
        dateMoment.set('year', currentMoment.get('year'));
        dateString = this.format(dateMoment);
        timestamp = +dateMoment;
      }

      this.onChange(dateString, { dateMoment: dateMoment, timestamp: timestamp }, event);
    }
  }, {
    key: 'onViewDateChange',
    value: function onViewDateChange(dateString, _ref6) {
      var dateMoment = _ref6.dateMoment;
      var timestamp = _ref6.timestamp;

      return _DecadeView.onViewDateChange.call(this, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'gotoViewDate',
    value: function gotoViewDate(_ref7) {
      var dateMoment = _ref7.dateMoment;
      var timestamp = _ref7.timestamp;

      return _DecadeView.gotoViewDate.call(this, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'onActiveDateChange',
    value: function onActiveDateChange(dateString, _ref8) {
      var dateMoment = _ref8.dateMoment;
      var timestamp = _ref8.timestamp;

      return _DecadeView.onActiveDateChange.call(this, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'onChange',
    value: function onChange(dateString, _ref9, event) {
      var dateMoment = _ref9.dateMoment;
      var timestamp = _ref9.timestamp;

      return _DecadeView.onChange.call(this, { dateMoment: dateMoment, timestamp: timestamp }, event);
    }
  }]);

  return HistoryView;
}(_reactClass2.default);

exports.default = HistoryView;


HistoryView.defaultProps = {
  okOnEnter: true,

  footer: true,
  theme: 'default',
  navigation: true,

  focusYearView: false,
  focusDecadeView: true,

  dateFormat: 'YYYY-MM-DD',

  adjustDateStartOf: 'month',
  adjustMinDateStartOf: 'month',
  adjustMaxDateStartOf: 'month'
};