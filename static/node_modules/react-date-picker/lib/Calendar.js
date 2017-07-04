'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NAV_KEYS = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _assignDefined = require('./assignDefined');

var _assignDefined2 = _interopRequireDefault(_assignDefined);

var _MonthView = require('./MonthView');

var _MonthView2 = _interopRequireDefault(_MonthView);

var _toMoment = require('./toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _ClockInput = require('./ClockInput');

var _ClockInput2 = _interopRequireDefault(_ClockInput);

var _forwardTime = require('./utils/forwardTime');

var _forwardTime2 = _interopRequireDefault(_forwardTime);

var _reactFlex = require('react-flex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Calendar).call(this, props));

    _this.state = {
      timeFocused: false
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: 'prepareDate',
    value: function prepareDate(props) {
      return (0, _toMoment2.default)(props.date, props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.p = (0, _objectAssign2.default)({}, this.props);
      var dateFormat = props.dateFormat.toLowerCase();

      props.date = this.prepareDate(props);
      if (props.showClock === undefined) {
        props.showClock = dateFormat.indexOf('k') != -1 || dateFormat.indexOf('h') != -1;
      }

      var timeFormat = dateFormat.substring(dateFormat.toLowerCase().indexOf('hh'));

      props.timeFormat = timeFormat;

      var className = (0, _join2.default)(props.className, 'react-date-picker__calendar', props.theme && 'react-date-picker__calendar--theme-' + props.theme);

      var monthViewProps = (0, _objectAssign2.default)({}, this.props);

      delete monthViewProps.onTimeChange;
      delete monthViewProps.showClock;
      delete monthViewProps.updateOnWheel;
      delete monthViewProps.wrapTime;

      if (typeof this.props.cleanup == 'function') {
        this.props.cleanup(monthViewProps);
      }

      var monthView = _react2.default.createElement(_MonthView2.default, _extends({}, monthViewProps, {
        onChange: this.onChange,
        className: null,
        style: null,
        ref: function ref(view) {
          _this2.view = view;
        },
        renderChildren: this.renderChildren
      }));

      return _react2.default.createElement(
        _reactFlex.Flex,
        { inline: true, row: true, wrap: false, className: className, style: props.style },
        monthView
      );
    }
  }, {
    key: 'isHistoryViewVisible',
    value: function isHistoryViewVisible() {
      if (this.view && this.view.isHistoryViewVisible) {
        return this.view.isHistoryViewVisible();
      }

      return false;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(_ref) {
      var _ref2 = _slicedToArray(_ref, 3);

      var navBar = _ref2[0];
      var inner = _ref2[1];
      var footer = _ref2[2];

      var props = this.p;
      var clockInput = props.showClock && this.renderClockInput();

      var children = [navBar, _react2.default.createElement(
        _reactFlex.Flex,
        { justifyContent: 'center', wrap: this.props.wrap || this.props.wrapTime },
        _react2.default.createElement(_reactFlex.Flex, {
          flexGrow: '1',
          flexShrink: '0',
          flexBasis: 'auto',
          column: true,
          wrap: false,
          alignItems: 'stretch',
          children: inner
        }),
        clockInput
      ), footer];

      return _react2.default.createElement(_reactFlex.Flex, {
        column: true,
        wrap: false,
        alignItems: 'stretch',
        children: children
      });
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.view) {
        this.view.focus();
      }
    }
  }, {
    key: 'isFocused',
    value: function isFocused() {
      if (this.view) {
        return this.view.isFocused();
      }

      return false;
    }
  }, {
    key: 'onViewKeyDown',
    value: function onViewKeyDown() {
      if (this.view) {
        var _view;

        (_view = this.view).onViewKeyDown.apply(_view, arguments);
      }
    }
  }, {
    key: 'isTimeInputFocused',
    value: function isTimeInputFocused() {
      return this.state.timeFocused;
    }
  }, {
    key: 'renderClockInput',
    value: function renderClockInput() {
      var _this3 = this,
          _clockInputProps;

      var clockInput = null;

      var readOnly = this.props.readOnly;

      var clockInputProps = (_clockInputProps = {
        ref: function ref(clkInput) {
          _this3.clockInput = clkInput;
        },
        viewIndex: this.props.viewIndex,
        dateFormat: this.p.dateFormat
      }, _defineProperty(_clockInputProps, readOnly ? 'value' : 'defaultValue', this.p.date), _defineProperty(_clockInputProps, 'onFocus', this.onClockInputFocus), _defineProperty(_clockInputProps, 'onBlur', this.onClockInputBlur), _defineProperty(_clockInputProps, 'onChange', this.onTimeChange), _defineProperty(_clockInputProps, 'onMouseDown', this.onClockInputMouseDown), _clockInputProps);

      (0, _assignDefined2.default)(clockInputProps, {
        onEnterKey: this.props.onClockEnterKey,
        onEscapeKey: this.props.onClockEscapeKey,
        readOnly: readOnly,
        tabIndex: readOnly ? null : this.props.clockTabIndex,
        theme: this.props.theme,
        updateOnWheel: this.props.updateOnWheel
      });

      if (clockInput) {
        return _react2.default.cloneElement(clockInput, clockInputProps);
      }

      return _react2.default.createElement(_ClockInput2.default, clockInputProps);
    }
  }, {
    key: 'onClockInputFocus',
    value: function onClockInputFocus() {
      this.setState({
        timeFocused: true
      });

      this.props.onClockInputFocus();
    }
  }, {
    key: 'onClockInputBlur',
    value: function onClockInputBlur() {
      this.setState({
        timeFocused: false
      });

      this.props.onClockInputBlur();
    }
  }, {
    key: 'onClockInputMouseDown',
    value: function onClockInputMouseDown(event) {
      event.stopPropagation();
      if (event.target && event.target.type != 'text') {
        // in order not to blur - in case we're in a date field
        event.preventDefault();
      }

      this.clockInput.focus();
    }
  }, {
    key: 'onTimeChange',
    value: function onTimeChange(value, timeFormat) {
      this.time = value;
      this.props.onTimeChange(value, timeFormat);

      var view = this.view;
      var moment = view.p.moment;

      if (moment == null) {
        return;
      }

      view.onChange({
        dateMoment: moment,
        timestamp: +moment
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(dateString, _ref3, event) {
      var dateMoment = _ref3.dateMoment;
      var timestamp = _ref3.timestamp;

      var props = this.p;

      if (props.showClock) {
        var time = (0, _toMoment2.default)(this.time || this.clockInput.getValue(), {
          dateFormat: props.timeFormat,
          locale: props.locale
        });

        (0, _forwardTime2.default)(time, dateMoment);
        timestamp = +dateMoment;
        dateString = this.view.format(dateMoment);
      }

      if (this.props.onChange) {
        this.props.onChange(dateString, { dateMoment: dateMoment, timestamp: timestamp, dateString: dateString }, event);
      }
    }
  }]);

  return Calendar;
}(_reactClass2.default);

exports.default = Calendar;


Calendar.defaultProps = {
  dateFormat: 'YYYY-MM-DD',

  theme: 'default',

  isDatePicker: true,
  wrapTime: false,

  onTimeChange: function onTimeChange() {},

  onClockEnterKey: function onClockEnterKey() {},
  onClockInputBlur: function onClockInputBlur() {},
  onClockInputFocus: function onClockInputFocus() {},

  onFooterTodayClick: function onFooterTodayClick() {},
  onFooterCancelClick: function onFooterCancelClick() {},
  onFooterClearClick: function onFooterClearClick() {},
  onFooterOkClick: function onFooterOkClick() {}
};

Calendar.propTypes = {};

exports.NAV_KEYS = _MonthView.NAV_KEYS;