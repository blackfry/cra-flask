'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _TimeInput = require('./TimeInput');

var _TimeInput2 = _interopRequireDefault(_TimeInput);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _toMoment = require('./toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _Clock = require('./Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _reactFlex = require('react-flex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimePicker = function (_Component) {
  _inherits(TimePicker, _Component);

  function TimePicker(props) {
    _classCallCheck(this, TimePicker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TimePicker).call(this, props));

    _this.state = {};
    return _this;
  }

  // prepareDate(props){
  //   return toMoment(props.date, props)
  // }

  _createClass(TimePicker, [{
    key: 'render',
    value: function render() {

      var props = this.p = (0, _objectAssign2.default)({}, this.props);
      props.children = _react2.default.Children.toArray(props.children);

      var timeFormat = props.timeFormat.toLowerCase();

      // props.date = this.prepareDate(props)
      props.hasTime = props.hasTime || timeFormat.indexOf('k') != -1 || timeFormat.indexOf('h') != -1;

      var className = (0, _join2.default)(props.className, 'react-date-picker__time-picker', props.theme && 'react-date-picker__time-picker--theme-' + props.theme);

      return _react2.default.createElement(
        _reactFlex.Flex,
        _extends({
          inline: true,
          column: true,
          wrap: false
        }, this.props, {
          className: className }),
        this.renderClock(),
        this.renderInput()
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      return _react2.default.createElement(_TimeInput2.default, {
        className: 'react-date-picker__time-picker-input',
        format: this.props.timeFormat || this.props.format,
        defaultValue: this.props.value || this.props.defaultValue,
        onChange: this.onTimeChange
      });
    }
  }, {
    key: 'onTimeChange',
    value: function onTimeChange(value) {
      var time = value.split(':');

      var seconds = time[0] * 3600 + parseInt(time[1], 10) * 60;

      if (time[2]) {
        seconds += parseInt(time[2], 10);
      }

      this.setState({
        seconds: seconds
      });

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: 'renderClock',
    value: function renderClock() {

      var props = this.p;
      var clock = props.children.filter(function (child) {
        return child && child.props && child.props.isTimePickerClock;
      })[0];

      var clockProps = {
        seconds: this.state.seconds,
        showSecondsHand: true
      };

      if (clock) {
        return _react2.default.cloneElement(clock, clockProps);
      }

      return _react2.default.createElement(_Clock2.default, clockProps);
    }
  }]);

  return TimePicker;
}(_reactClass2.default);

exports.default = TimePicker;


TimePicker.defaultProps = {
  format: 'HH:mm:ss a',
  theme: 'default',
  isTimePicker: true
};

TimePicker.propTypes = {};