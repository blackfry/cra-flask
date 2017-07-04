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

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactFlex = require('react-flex');

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _toMoment = require('./toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

var _Clock = require('./Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _DateFormatSpinnerInput = require('./DateFormatSpinnerInput');

var _DateFormatSpinnerInput2 = _interopRequireDefault(_DateFormatSpinnerInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClockInput = function (_Component) {
  _inherits(ClockInput, _Component);

  function ClockInput(props) {
    _classCallCheck(this, ClockInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClockInput).call(this, props));

    var delay = props.changeDelay;
    _this.throttleSetValue = delay == -1 ? _this.setValue : (0, _lodash2.default)(_this.setValue, delay);

    _this.state = {
      value: props.defaultValue || Date.now()
    };
    return _this;
  }

  _createClass(ClockInput, [{
    key: 'getValue',
    value: function getValue() {
      return this.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var format = props.dateFormat || props.format;

      var dateFormat = format.substring(format.toLowerCase().indexOf('hh'));

      this.dateFormat = dateFormat;

      this.value = props.value !== undefined ? props.value : this.state.value;

      var className = (0, _join2.default)(props.className, 'react-date-picker__clock-input', props.theme && 'react-date-picker__clock-input--theme-' + props.theme);

      var flexProps = (0, _objectAssign2.default)({}, this.props);

      delete flexProps.changeDelay;
      delete flexProps.cleanup;
      delete flexProps.dateFormat;
      delete flexProps.isClockInput;
      delete flexProps.onEnterKey;
      delete flexProps.onEscapeKey;
      delete flexProps.onTimeChange;
      delete flexProps.updateOnWheel;
      delete flexProps.theme;
      delete flexProps.viewIndex;
      delete flexProps.wrapTime;

      if (typeof this.props.cleanup == 'function') {
        this.props.cleanup(flexProps);
      }

      return _react2.default.createElement(
        _reactFlex.Flex,
        _extends({
          column: true
        }, flexProps, {
          value: null,
          defaultValue: null,
          className: className
        }),
        this.renderClock(),
        this.renderTimeInput()
      );
    }
  }, {
    key: 'renderTimeInput',
    value: function renderTimeInput() {
      var _this2 = this;

      var props = this.props;
      var dateInput = _react2.default.Children.toArray(props.children).filter(function (child) {
        return child && child.props && child.props.isDateInput;
      })[0];

      var dateInputProps = (0, _objectAssign2.default)({}, this.props, {
        ref: function ref(field) {
          _this2.field = field;
        },
        tabIndex: props.readOnly ? -1 : props.tabIndex || 0,
        readOnly: props.readOnly,
        value: this.value,
        dateFormat: this.dateFormat,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        size: props.size || this.dateFormat.length + 2
      });

      if (dateInput) {
        return _react2.default.cloneElement(dateInput, dateInputProps);
      }

      return _react2.default.createElement(_DateFormatSpinnerInput2.default, _extends({}, dateInputProps, { style: null }));
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.field) {
        this.field.focus();
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (this.props.onEnterKey && event.key == 'Enter') {
        this.props.onEnterKey(event);
      }

      if (this.props.onEscapeKey && event.key == 'Escape') {
        this.props.onEscapeKey(event);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      if (this.props.value === undefined) {
        this.setState({
          value: value
        });
      }

      if (this.props.onChange) {
        this.throttleSetValue(value);
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (this.props.value === undefined) {
        this.setState({
          value: value
        });
      }

      if (this.props.onChange) {
        this.props.onChange(value, this.dateFormat);
      }
    }
  }, {
    key: 'renderClock',
    value: function renderClock() {
      var props = this.props;
      var clock = _react2.default.Children.toArray(props.children).filter(function (child) {
        return child && child.props && child.props.isDatePickerClock;
      })[0];

      var dateFormat = this.dateFormat;
      var time = (0, _toMoment2.default)(this.value, { dateFormat: dateFormat });

      var clockProps = {
        time: time,
        theme: props.theme,
        showMinutesHand: dateFormat.indexOf('mm') != -1,
        showSecondsHand: dateFormat.indexOf('ss') != -1
      };

      if (clock) {
        return _react2.default.cloneElement(clock, clockProps);
      }

      return _react2.default.createElement(_Clock2.default, clockProps);
    }
  }]);

  return ClockInput;
}(_reactClass2.default);

exports.default = ClockInput;


ClockInput.defaultProps = {
  changeDelay: 50,

  dateFormat: 'YYYY-MM-DD',
  updateOnWheel: true,

  theme: 'default',

  wrapTime: false,
  isClockInput: true,

  onTimeChange: function onTimeChange() {}
};

ClockInput.propTypes = {};