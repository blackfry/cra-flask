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

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _TimeInput = require('../TimeInput');

var _toMoment2 = require('../toMoment');

var _toMoment3 = _interopRequireDefault(_toMoment2);

var _parseFormat2 = require('./parseFormat');

var _parseFormat3 = _interopRequireDefault(_parseFormat2);

var _forwardTime = require('../utils/forwardTime');

var _forwardTime2 = _interopRequireDefault(_forwardTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var emptyFn = function emptyFn() {};

var BACKWARDS = {
  Backspace: 1,
  ArrowUp: 1,
  ArrowDown: 1,
  PageUp: 1,
  PageDown: 1
};

var DateFormatInput = function (_Component) {
  _inherits(DateFormatInput, _Component);

  function DateFormatInput(props) {
    _classCallCheck(this, DateFormatInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateFormatInput).call(this, props));

    var _parseFormat = (0, _parseFormat3.default)(props.dateFormat);

    var positions = _parseFormat.positions;
    var matches = _parseFormat.matches;

    var defaultValue = props.defaultValue || Date.now();

    var delay = props.changeDelay;
    _this.throttleSetValue = delay == -1 ? _this.setValue : (0, _lodash2.default)(_this.setValue, delay);

    var _this$getMinMax = _this.getMinMax(props);

    var minDate = _this$getMinMax.minDate;
    var maxDate = _this$getMinMax.maxDate;


    _this.state = {
      positions: positions,
      matches: matches,
      propsValue: props.value !== undefined,
      value: defaultValue,
      minDate: minDate,
      maxDate: maxDate
    };
    return _this;
  }

  _createClass(DateFormatInput, [{
    key: 'getMinMax',
    value: function getMinMax(props) {
      props = props || this.props;

      var minDate = null;

      if (props.minDate) {
        minDate = this.toMoment(props.minDate, props);
      }

      var maxDate = null;

      if (props.maxDate) {
        maxDate = this.toMoment(props.maxDate, props);
      }

      return {
        minDate: minDate, maxDate: maxDate
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _getMinMax = this.getMinMax(nextProps);

      var minDate = _getMinMax.minDate;
      var maxDate = _getMinMax.maxDate;


      this.setState({
        minDate: minDate, maxDate: maxDate
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.value !== undefined && this.caretPos && this.isFocused()) {
        this.setCaretPosition(this.caretPos);
      }
    }
  }, {
    key: 'toMoment',
    value: function toMoment(value, props) {
      props = props || this.props;

      return (0, _toMoment3.default)(value, {
        locale: props.locale,
        dateFormat: props.dateFormat || this.props.dateFormat
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;


      var value = this.state.propsValue ? props.value : this.state.value;

      var displayValue = this.displayValue = this.toMoment(value).format(props.dateFormat);

      var inputProps = (0, _objectAssign2.default)({}, props);

      delete inputProps.changeDelay;
      delete inputProps.date;
      delete inputProps.dateFormat;
      delete inputProps.isDateInput;
      delete inputProps.maxDate;
      delete inputProps.minDate;
      delete inputProps.stopPropagation;
      delete inputProps.updateOnWheel;

      if (typeof props.cleanup == 'function') {
        props.cleanup(inputProps);
      }

      return _react2.default.createElement('input', _extends({}, inputProps, {
        defaultValue: undefined,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        value: displayValue,
        onKeyDown: this.onKeyDown,
        onWheel: this.onWheel,
        onChange: this.onChange
      }));
    }
  }, {
    key: 'focus',
    value: function focus() {
      (0, _reactDom.findDOMNode)(this).focus();
    }
  }, {
    key: 'onFocus',
    value: function onFocus(event) {
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }

      this.setState({
        focused: true
      });
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }

      this.setState({
        focused: false
      });
    }
  }, {
    key: 'isFocused',
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      event.stopPropagation();
    }
  }, {
    key: 'onDirection',
    value: function onDirection(dir) {
      var event = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      this.onKeyDown({
        key: dir > 0 ? 'ArrowUp' : 'ArrowDown',
        type: event.type || 'unknown',
        stopPropagation: typeof event.stopPropagation == 'function' ? function () {
          return event.stopPropagation();
        } : emptyFn,
        preventDefault: typeof event.preventDefault == 'function' ? function () {
          return event.preventDefault();
        } : emptyFn
      });
    }
  }, {
    key: 'onWheel',
    value: function onWheel(event) {
      if (this.props.updateOnWheel && this.isFocused()) {
        this.onDirection(-event.deltaY, event);
        // this.onKeyDown({
        //   key: event.deltaY < 0 ? 'ArrowUp' : 'ArrowDown',
        //   type: event.type,
        //   stopPropagation: () => event.stopPropagation(),
        //   preventDefault: () => event.preventDefault()
        // })
      }

      if (this.props.onWheel) {
        this.props.onWheel(event);
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      var _this2 = this;

      var props = this.props;
      var key = event.key;
      var type = event.type;
      var which = event.which;


      if (key !== 'Unidentified' && which && which >= 65 && which <= 90) {
        key = ' ';
      }

      if (key != ' ' && key * 1 == key) {
        key = 'Unidentified';
      }

      if (props.stopPropagation) {
        event.stopPropagation();
      }

      var range = this.getSelectedRange();
      var selectedValue = this.getSelectedValue(range);
      var value = this.displayValue;

      var _state = this.state;
      var positions = _state.positions;
      var matches = _state.matches;

      var valueStr = '' + value;

      var currentPosition = positions[range.start];

      if (typeof currentPosition == 'string') {
        currentPosition = positions[range.start + (key in BACKWARDS ? -1 : 1)];
      }

      if (!currentPosition) {
        currentPosition = positions[range.start - 1];
      }

      if (props.onKeyDown && type == 'keydown') {
        if (props.onKeyDown(event, currentPosition) === false) {
          this.caretPos = range;
          return;
        }
      }

      var keyName = key;

      if (key == 'ArrowUp' || key == 'ArrowDown') {
        keyName = 'Arrow';
      }

      var handlerName = 'handle' + keyName;

      var preventDefault = void 0;
      var newValue = void 0;
      var newCaretPos = void 0;

      if (currentPosition && currentPosition[handlerName]) {
        var returnValue = currentPosition[handlerName](currentPosition, {
          range: range,
          selectedValue: selectedValue,
          value: value,
          positions: positions,
          currentValue: valueStr.substring(currentPosition.start, currentPosition.end + 1),
          matches: matches,
          event: event,
          key: key,
          input: this.getInput(),
          setCaretPosition: function setCaretPosition() {
            return _this2.setCaretPosition.apply(_this2, arguments);
          }
        });

        this.caretPos = range;

        if (returnValue && returnValue.value !== undefined) {
          newValue = valueStr.substring(0, currentPosition.start) + returnValue.value + valueStr.substring(currentPosition.end + 1);

          newCaretPos = returnValue.caretPos || range;
          if (newCaretPos === true) {
            newCaretPos = { start: currentPosition.start, end: currentPosition.end + 1 };
          }
          preventDefault = returnValue.preventDefault !== false;
        }
      }

      if (preventDefault || key == 'Backspace' || key == 'Delete' || key == ' ') {
        if (!preventDefault) {
          this.setCaretPosition(this.caretPos = {
            start: range.start + (key == 'Backspace' ? -1 : 1)
          });
        }
        preventDefault = true;
      }

      var config = {
        currentPosition: currentPosition,
        preventDefault: preventDefault,
        event: event,
        value: newValue,
        stop: false
      };

      if (this.props.afterKeyDown && type == 'keydown') {
        this.props.afterKeyDown(config);
      }

      if (!config.stop && newCaretPos !== undefined) {
        var updateCaretPos = function updateCaretPos() {
          return _this2.setCaretPosition(newCaretPos);
        };
        this.caretPos = newCaretPos;
        this.setStateValue(newValue, updateCaretPos, { key: key, oldValue: valueStr, currentPosition: currentPosition });
      }

      if (config.preventDefault) {
        event.preventDefault();
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
      if (dom) {
        (0, _TimeInput.setCaretPosition)(dom, pos);
      }
    }
  }, {
    key: 'format',
    value: function format(mom, _format) {
      return mom.format(_format || this.props.dateFormat);
    }
  }, {
    key: 'setStateValue',
    value: function setStateValue(value, callback, _ref) {
      var key = _ref.key;
      var oldValue = _ref.oldValue;
      var currentPosition = _ref.currentPosition;

      var dateMoment = this.toMoment(value);

      if (!dateMoment.isValid()) {
        var dir = key == 'ArrowUp' || key == 'PageUp' ? 1 : -1;

        if (currentPosition.format == 'MM') {
          // updating the month
          dateMoment = this.toMoment(oldValue).add(dir, 'month');
        } else {
          // updating the day
          dateMoment = dir > 0 ?
          // we've gone with +1 beyond max, so reset to 1
          this.toMoment(oldValue).date(1) :

          // we've gone with -1 beyond max, so reset to max of month
          this.toMoment(oldValue).endOf('month');
        }

        if (!dateMoment.isValid()) {
          return;
        }

        value = this.format(dateMoment);
      }

      var _state2 = this.state;
      var minDate = _state2.minDate;
      var maxDate = _state2.maxDate;


      if (minDate && dateMoment.isBefore(minDate)) {
        var clone = this.toMoment(dateMoment);

        // try with time
        dateMoment = (0, _forwardTime2.default)(clone, this.toMoment(minDate));

        if (dateMoment.isBefore(minDate)) {
          // try without time
          dateMoment = this.toMoment(minDate);
        }

        value = this.format(dateMoment);
      }

      if (maxDate && dateMoment.isAfter(maxDate)) {
        var _clone = this.toMoment(dateMoment);
        dateMoment = (0, _forwardTime2.default)(_clone, this.toMoment(maxDate));

        if (dateMoment.isAfter(maxDate)) {
          dateMoment = this.toMoment(maxDate);
        }

        value = this.format(dateMoment);
      }

      this.setState({
        value: value,
        propsValue: false
      }, typeof callback == 'function' && callback);

      // if (this.props.value !== undefined) {
      if (this.props.onChange) {
        this.throttleSetValue(value, dateMoment);
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value, dateMoment) {
      if (this.props.value === undefined) {
        this.setState({
          value: value,
          propsValue: false
        });
      } else {
        this.setState({
          propsValue: true,
          value: undefined
        });
      }

      if (this.props.onChange) {
        this.props.onChange(value, { dateMoment: dateMoment || this.toMoment(value) });
      }
    }
  }, {
    key: 'getSelectedRange',
    value: function getSelectedRange() {
      var dom = this.getInput();

      return {
        start: (0, _TimeInput.getSelectionStart)(dom),
        end: (0, _TimeInput.getSelectionEnd)(dom)
      };
    }
  }, {
    key: 'getSelectedValue',
    value: function getSelectedValue(range) {
      range = range || this.getSelectedRange();
      var value = this.displayValue;

      return value.substring(range.start, range.end);
    }
  }]);

  return DateFormatInput;
}(_reactClass2.default);

exports.default = DateFormatInput;


DateFormatInput.defaultProps = {
  isDateInput: true,
  stopPropagation: true,
  updateOnWheel: true,
  changeDelay: 100
};

DateFormatInput.propTypes = {
  dateFormat: _react.PropTypes.string.isRequired,
  value: function value(props, propName) {
    if (props[propName] !== undefined) {
      // console.warn('Due to performance considerations, TimeInput will only be uncontrolled.')
    }
  }
};