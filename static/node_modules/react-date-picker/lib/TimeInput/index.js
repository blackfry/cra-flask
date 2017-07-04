'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toTimeValue = exports.setCaretPosition = exports.getNewValue = exports.getSelectionEnd = exports.getSelectionStart = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _toMoment = require('../toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

var _join = require('../join');

var _join2 = _interopRequireDefault(_join);

var _Clock = require('../Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _reactFlex = require('react-flex');

var _getSelectionStart = require('./getSelectionStart');

var _getSelectionStart2 = _interopRequireDefault(_getSelectionStart);

var _getSelectionEnd = require('./getSelectionEnd');

var _getSelectionEnd2 = _interopRequireDefault(_getSelectionEnd);

var _setCaretPosition2 = require('./setCaretPosition');

var _setCaretPosition3 = _interopRequireDefault(_setCaretPosition2);

var _getNewValue2 = require('./getNewValue');

var _getNewValue3 = _interopRequireDefault(_getNewValue2);

var _toTimeValue = require('./toTimeValue');

var _toTimeValue2 = _interopRequireDefault(_toTimeValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.getSelectionStart = _getSelectionStart2.default;
exports.getSelectionEnd = _getSelectionEnd2.default;
exports.getNewValue = _getNewValue3.default;
exports.setCaretPosition = _setCaretPosition3.default;
exports.toTimeValue = _toTimeValue2.default;

var TimeInput = function (_Component) {
  _inherits(TimeInput, _Component);

  function TimeInput(props) {
    _classCallCheck(this, TimeInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TimeInput).call(this, props));

    var format = props.format || props.timeFormat;

    if (format.indexOf('hh') != 0 && format.indexOf('HH') != 0) {
      console.warn('Please start your time format with 2 digit hours.');
    }

    var hours24 = true;
    var meridiem = format.indexOf('a') != -1 || format.indexOf('A') != -1;

    if (format.indexOf('hh') == 0) {
      hours24 = false;
    }

    var separator = props.separator || format && format.length > 2 ? format.charAt(2) : ':';
    var hasSeconds = format.indexOf('ss') != -1;

    if (hasSeconds && format.charAt(5) != separator) {
      console.warn('Expected minutes-seconds separator to be same as hours-minutes separator. (at position 5)');
    }

    var defaultValue = '00' + separator + '00';

    if (hasSeconds) {
      defaultValue += separator + '00';
    }
    if (meridiem) {
      defaultValue += ' am';
    }

    _this.state = {
      valueRange: props.valueRange || 0,
      separator: separator,
      hours24: hours24,
      meridiem: meridiem,
      value: props.defaultValue || defaultValue
    };
    return _this;
  }

  _createClass(TimeInput, [{
    key: 'render',
    value: function render() {

      var props = this.p = (0, _objectAssign2.default)({}, this.props);

      props.value = this.state.value; //props.value !== undefined?
      // props.value:
      // this.state.value

      return _react2.default.createElement('input', _extends({}, props, {
        defaultValue: undefined,
        value: props.value,
        onKeyDown: this.onKeyDown,
        onChange: this.onChange
      }));
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      event.stopPropagation();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      var _this2 = this;

      var value = this.p.value;

      var valueRange = this.state.valueRange;

      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }

      var range = this.getSelectedRange();
      var separator = this.props.separator || this.state.separator || ':';

      var _getNewValue = (0, _getNewValue3.default)({
        range: range,
        event: event,

        circular: this.props.circular,
        propagate: this.props.propagate,

        oldValue: value,
        separator: separator,
        meridiem: this.state.meridiem,
        hours24: this.state.hours24,
        incrementNext: this.props.incrementNext

      });

      var newValue = _getNewValue.value;
      var update = _getNewValue.update;
      var caretPos = _getNewValue.caretPos;


      var updateCaretPos = function updateCaretPos() {
        if (caretPos != undefined) {
          _this2.setCaretPosition(caretPos);
        }
      };

      if (update || caretPos) {
        event.preventDefault();
      }

      if (update) {
        this.setValue(newValue, updateCaretPos);
      } else {
        (0, _raf2.default)(updateCaretPos);
      }
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      return (0, _reactDom.findDOMNode)(this);
    }
  }, {
    key: 'setCaretPosition',
    value: function setCaretPosition(pos) {
      var dom = this.getInput();
      dom && (0, _setCaretPosition3.default)(dom, pos);
    }
  }, {
    key: 'setValue',
    value: function setValue(value, callback) {
      // if (this.props.value === undefined){
      this.setState({
        now: Date.now(),
        value: value
      }, typeof callback == 'function' && callback);
      // } else {
      //   this.updateCallback = callback
      // }

      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.updateCallback) {
        this.updateCallback();
        this.updateCallback = null;
      }
    }
  }, {
    key: 'getSelectedRange',
    value: function getSelectedRange() {
      var dom = this.getInput();

      return {
        start: (0, _getSelectionStart2.default)(dom),
        end: (0, _getSelectionEnd2.default)(dom)
      };
    }
  }, {
    key: 'getSelectedValue',
    value: function getSelectedValue() {
      var range = this.getSelectedRange();
      var value = this.p.value;

      return value.substring(range.start, range.end);
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      var value = event.target.value;
    }
  }, {
    key: 'onTimeChange',
    value: function onTimeChange(value) {
      var time = value.split(':');

      this.setState({
        minutes: time[0] * 60 + time[1]
      });
    }
  }, {
    key: 'renderClock',
    value: function renderClock() {

      var props = this.p;
      var clock = props.children.filter(function (child) {
        return child && child.props && child.props.isTimePickerClock;
      })[0];

      var clockProps = {
        time: this.state.minutes || props.date,
        showSecondsHand: true
      };

      if (clock) {
        return _react2.default.cloneElement(clock, clockProps);
      }

      return _react2.default.createElement(_Clock2.default, clockProps);
    }
  }]);

  return TimeInput;
}(_reactClass2.default);

exports.default = TimeInput;


TimeInput.defaultProps = {
  theme: 'default',

  circular: true,
  propagate: true,
  incrementNext: true
};

TimeInput.propTypes = {
  format: _react.PropTypes.string,
  value: function value(props, propName) {
    if (props[propName] !== undefined) {
      console.warn('Due to performance considerations, TimeInput will only be uncontrolled.');
    }
  }
};