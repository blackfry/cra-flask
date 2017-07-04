'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _tcombReact = require('tcomb-react');

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _reactFlexview = require('react-flexview');

var _reactFlexview2 = _interopRequireDefault(_reactFlexview);

var _skinnable = require('./utils/skinnable');

var _skinnable2 = _interopRequireDefault(_skinnable);

var _pure = require('./utils/pure');

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (_dec = (0, _skinnable2.default)(), _dec2 = (0, _tcombReact.props)({
  value: _tcomb2.default.maybe(_tcomb2.default.String),
  onInputChange: _tcomb2.default.Function,
  iconClearClassName: _tcomb2.default.String,
  iconClassName: _tcomb2.default.String,
  hasValue: _tcomb2.default.Boolean,
  active: _tcomb2.default.Boolean,
  small: _tcomb2.default.Boolean,
  onButtonClick: _tcomb2.default.maybe(_tcomb2.default.Function),
  onInputClick: _tcomb2.default.maybe(_tcomb2.default.Function),
  onInputClear: _tcomb2.default.maybe(_tcomb2.default.Function),
  onInputKeyUp: _tcomb2.default.Function
}, { strict: false }), (0, _pure2.default)(_class = _dec(_class = _dec2(_class = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'getLocals',
    value: function getLocals(props) {
      var value = props.value,
          iconClearClassName = props.iconClearClassName,
          iconClassName = props.iconClassName,
          hasValue = props.hasValue,
          active = props.active,
          small = props.small,
          onButtonClick = props.onButtonClick,
          onInputClick = props.onInputClick,
          onInputChange = props.onInputChange,
          onInputClear = props.onInputClear,
          onInputKeyUp = props.onInputKeyUp,
          inputProps = _objectWithoutProperties(props, ['value', 'iconClearClassName', 'iconClassName', 'hasValue', 'active', 'small', 'onButtonClick', 'onInputClick', 'onInputChange', 'onInputClear', 'onInputKeyUp']);

      return {
        className: (0, _classnames2.default)('react-datepicker-input', {
          'is-open': active,
          'has-value': hasValue,
          'is-small': small
        }),
        inputButtonProps: onButtonClick && {
          onButtonClick: onButtonClick, iconClassName: iconClassName,
          className: (0, _classnames2.default)('input-button', { active: active })
        },
        clearButtonProps: onInputClear && hasValue && {
          onInputClear: onInputClear, iconClearClassName: iconClearClassName
        },
        inputProps: _extends({
          value: value,
          onChange: onInputChange,
          onClick: onInputClick,
          onKeyUp: onInputKeyUp
        }, inputProps)
      };
    }
  }, {
    key: 'templateInputButton',
    value: function templateInputButton(_ref) {
      var className = _ref.className,
          onButtonClick = _ref.onButtonClick,
          iconClassName = _ref.iconClassName;

      return _react2.default.createElement(
        _reactFlexview2.default,
        { shrink: false, className: className, onClick: onButtonClick },
        _react2.default.createElement('i', { className: iconClassName })
      );
    }
  }, {
    key: 'templateClearButton',
    value: function templateClearButton(_ref2) {
      var onInputClear = _ref2.onInputClear,
          iconClearClassName = _ref2.iconClearClassName;

      return _react2.default.createElement(
        _reactFlexview2.default,
        { shrink: false, className: 'clear-button', onClick: onInputClear },
        _react2.default.createElement('i', { className: iconClearClassName })
      );
    }
  }, {
    key: 'template',
    value: function template(_ref3) {
      var className = _ref3.className,
          inputButtonProps = _ref3.inputButtonProps,
          clearButtonProps = _ref3.clearButtonProps,
          inputProps = _ref3.inputProps;

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('input', inputProps),
        _react2.default.createElement(
          _reactFlexview2.default,
          { className: 'button-wrapper', vAlignContent: 'center' },
          clearButtonProps && this.templateClearButton(clearButtonProps),
          inputButtonProps && this.templateInputButton(inputButtonProps)
        )
      );
    }
  }]);

  return Input;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = Input;