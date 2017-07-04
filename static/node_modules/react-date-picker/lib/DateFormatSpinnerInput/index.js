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

var _reactFlex = require('react-flex');

var _DateFormatInput = require('../DateFormatInput');

var _DateFormatInput2 = _interopRequireDefault(_DateFormatInput);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _joinFunctions = require('../joinFunctions');

var _joinFunctions2 = _interopRequireDefault(_joinFunctions);

var _assignDefined = require('../assignDefined');

var _assignDefined2 = _interopRequireDefault(_assignDefined);

var _join = require('../join');

var _join2 = _interopRequireDefault(_join);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateFormatSpinnerInput = function (_Component) {
  _inherits(DateFormatSpinnerInput, _Component);

  function DateFormatSpinnerInput(props) {
    _classCallCheck(this, DateFormatSpinnerInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateFormatSpinnerInput).call(this, props));

    _this.state = {
      focused: false
    };
    return _this;
  }

  _createClass(DateFormatSpinnerInput, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.started = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var children = _react2.default.Children.toArray(props.children);

      var input = this.inputChild = children.filter(function (c) {
        return c && c.type == 'input';
      })[0];
      var inputProps = input ? (0, _objectAssign2.default)({}, input.props) : {};

      var onKeyDown = (0, _joinFunctions2.default)(props.onKeyDown, inputProps.onKeyDown);
      var onChange = (0, _joinFunctions2.default)(props.onChange, inputProps.onChange);
      var disabled = props.disabled || inputProps.disabled;

      (0, _assignDefined2.default)(inputProps, {
        size: props.size || inputProps.size,
        minDate: props.minDate || inputProps.minDate,
        maxDate: props.maxDate || inputProps.maxDate,

        changeDelay: props.changeDelay === undefined ? inputProps.changeDelay : props.changeDelay,

        tabIndex: props.tabIndex,

        onKeyDown: onKeyDown,
        onChange: onChange,
        disabled: disabled,

        dateFormat: props.dateFormat === undefined ? inputProps.dateFormat : props.dateFormat,
        stopPropagation: props.stopPropagation,
        updateOnWheel: props.updateOnWheel,

        onBlur: this.onBlur,
        onFocus: this.onFocus
      });

      this.inputProps = inputProps;

      var arrowSize = this.props.arrowSize;

      this.arrows = {
        1: _react2.default.createElement(
          'svg',
          { height: arrowSize, viewBox: '0 0 24 24', width: arrowSize },
          _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
        ),

        '-1': _react2.default.createElement(
          'svg',
          { height: arrowSize, viewBox: '0 0 24 24', width: arrowSize },
          _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
        )
      };

      var className = (0, _join2.default)(props.className, 'react-date-picker__date-format-spinner', disabled && 'react-date-picker__date-format-spinner--disabled', this.isFocused() && 'react-date-picker__date-format-spinner--focused', 'react-date-picker__date-format-spinner--theme-' + props.theme);

      return _react2.default.createElement(
        _reactFlex.Flex,
        {
          inline: true,
          row: true,
          className: className,
          disabled: props.disabled
        },
        _react2.default.createElement(_DateFormatInput2.default, _extends({
          ref: function ref(inputDOM) {
            _this2.input = inputDOM;
          },
          value: props.value
        }, inputProps)),
        this.renderArrows()
      );
    }
  }, {
    key: 'renderArrows',
    value: function renderArrows() {
      if (this.props.renderArrows) {
        return this.props.renderArrows(this.props);
      }

      return _react2.default.createElement(
        _reactFlex.Flex,
        {
          column: true,
          inline: true
        },
        this.renderArrow(1),
        this.renderArrow(-1)
      );
    }
  }, {
    key: 'renderArrow',
    value: function renderArrow(dir) {
      return _react2.default.createElement(
        _reactFlex.Item,
        {
          flexShrink: 1,
          className: 'react-date-picker__date-format-spinner-arrow',
          style: { overflow: 'hidden', height: this.props.arrowSize },
          onMouseDown: this.onMouseDown.bind(this, dir),
          onMouseUp: this.stop,
          onMouseLeave: this.stop
        },
        this.arrows[dir]
      );
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(dir, event) {
      var _this3 = this;

      if (this.props.disabled) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      if (this.isFocused()) {
        this.start(dir);
      } else {
        this.focus();

        setTimeout(function () {
          _this3.increment(dir);
        }, 1);
      }
    }
  }, {
    key: 'start',
    value: function start(dir) {
      var _this4 = this;

      this.started = true;
      this.startTime = Date.now();

      this.step(dir);

      this.timeoutId = setTimeout(function () {
        _this4.step(dir);

        _this4.timeoutId = setTimeout(function () {
          var lazyStep = function lazyStep() {
            var delay = _this4.props.stepDelay - (Date.now() - _this4.startTime) / 500;
            _this4.step(dir, lazyStep, delay);
          };

          lazyStep();
        }, _this4.props.secondStepDelay);
      }, this.props.firstStepDelay);
    }
  }, {
    key: 'isStarted',
    value: function isStarted() {
      return !!(this.started && this.input);
    }
  }, {
    key: 'increment',
    value: function increment(dir) {
      this.input.onDirection(dir);
    }
  }, {
    key: 'step',
    value: function step(dir, callback, delay) {
      var _this5 = this;

      if (this.isStarted()) {
        this.increment(dir);

        if (typeof callback == 'function') {
          this.timeoutId = setTimeout(function () {
            if (_this5.isStarted()) {
              callback();
            }
          }, delay === undefined ? this.props.stepDelay : delay);
        }
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.started = false;
      if (this.timeoutId) {
        global.clearTimeout(this.timeoutId);
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.input) {
        this.input.focus();
      }
    }
  }, {
    key: 'isFocused',
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      var props = this.props;

      var onBlur = (0, _joinFunctions2.default)(props.onBlur, this.inputChild && this.inputChild.props && this.inputChild.props.onBlur);

      if (onBlur) {
        onBlur(event);
      }

      this.setState({
        focused: false
      });
    }
  }, {
    key: 'onFocus',
    value: function onFocus(event) {
      var props = this.props;

      var onFocus = (0, _joinFunctions2.default)(props.onFocus, this.inputChild && this.inputChild.props && this.inputChild.props.onFocus);

      if (onFocus) {
        onFocus(event);
      }

      this.setState({
        focused: true
      });
    }
  }]);

  return DateFormatSpinnerInput;
}(_reactClass2.default);

exports.default = DateFormatSpinnerInput;


DateFormatSpinnerInput.defaultProps = {
  firstStepDelay: 150,
  secondStepDelay: 100,
  stepDelay: 50,

  changeDelay: undefined,

  theme: 'default',

  disabled: false,
  arrowSize: 15,
  isDateInput: true,
  stopPropagation: true,
  updateOnWheel: true
};