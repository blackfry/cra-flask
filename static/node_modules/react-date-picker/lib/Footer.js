'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _reactFlex = require('react-flex');

var _reactInlineBlock = require('react-inline-block');

var _reactInlineBlock2 = _interopRequireDefault(_reactInlineBlock);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _joinFunctions = require('./joinFunctions');

var _joinFunctions2 = _interopRequireDefault(_joinFunctions);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _bemFactory = require('./bemFactory');

var _bemFactory2 = _interopRequireDefault(_bemFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bem = (0, _bemFactory2.default)('react-date-picker__footer');

var SPACER = _react2.default.createElement(_reactFlex.Item, null);

var buttonClassName = 'react-date-picker__footer-button';

var preventDefault = function preventDefault(e) {
  return e.preventDefault();
};

var Button = exports.Button = function Button(props) {
  var disabledClassName = props.disabled ? buttonClassName + '--disabled' : '';

  var className = (props.className || '') + ' ' + buttonClassName + ' ' + disabledClassName;
  return _react2.default.createElement('button', _extends({
    tabIndex: -1
  }, props, {
    className: className
  }));
};

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var props = this.p = (0, _objectAssign2.default)({}, this.props);

      var className = (0, _join2.default)(props.className, bem(), bem(null, 'theme-' + props.theme));

      var todayButton = this.renderTodayButton();
      var clearButton = this.renderClearButton();

      var okButton = this.renderOkButton();
      var cancelButton = this.renderCancelButton();

      if (!todayButton && !clearButton && !okButton && !cancelButton) {
        return null;
      }

      var middleSpacer = okButton || cancelButton ? SPACER : null;

      var spacer = !props.centerButtons ? middleSpacer : null;

      var children = [props.centerButtons && SPACER, todayButton, clearButton, spacer, okButton, cancelButton, props.centerButtons && SPACER];

      if (props.renderChildren) {
        children = props.renderChildren(children, props);
      }

      var flexProps = (0, _objectAssign2.default)({}, props);

      delete flexProps.actionEvent;
      delete flexProps.buttonFactory;
      delete flexProps.cancelButton;
      delete flexProps.cancelButtonText;
      delete flexProps.centerButtons;
      delete flexProps.clearDate;
      delete flexProps.cleanup;
      delete flexProps.clearButton;
      delete flexProps.clearButtonText;
      delete flexProps.isDatePickerFooter;
      delete flexProps.onCancelClick;
      delete flexProps.onClearClick;
      delete flexProps.onOkClick;
      delete flexProps.onTodayClick;
      delete flexProps.okButton;
      delete flexProps.okButtonText;
      delete flexProps.selectDate;
      delete flexProps.theme;
      delete flexProps.todayButton;
      delete flexProps.todayButtonText;

      if (typeof props.cleanup == 'function') {
        props.cleanup(flexProps);
      }

      return _react2.default.createElement(_reactFlex.Flex, _extends({
        inline: true,
        row: true
      }, flexProps, {
        justifyContent: 'center',
        className: className,
        children: children
      }));
    }
  }, {
    key: 'renderTodayButton',
    value: function renderTodayButton() {
      if (!this.props.todayButton) {
        return null;
      }
      return this.renderButton(this.props.todayButtonText, this.props.onTodayClick);
    }
  }, {
    key: 'renderClearButton',
    value: function renderClearButton() {
      if (!this.props.clearButton) {
        return null;
      }

      return this.renderButton({
        children: this.props.clearButtonText,
        disabled: this.props.clearDate === undefined
      }, this.props.onClearClick);
    }
  }, {
    key: 'renderOkButton',
    value: function renderOkButton() {
      if (!this.props.okButton) {
        return null;
      }
      return this.renderButton(this.props.okButtonText, this.props.onOkClick);
    }
  }, {
    key: 'renderCancelButton',
    value: function renderCancelButton() {
      if (!this.props.cancelButton) {
        return null;
      }
      return this.renderButton(this.props.cancelButtonText, this.props.onCancelClick);
    }
  }, {
    key: 'renderButton',
    value: function renderButton(props, fn) {
      var text = props.children;
      var p = props;

      if (typeof props == 'string') {
        p = {};
        text = props;
      }

      if (typeof fn == 'function' && !p.onClick && !p.disabled) {
        p.onClick = fn;
      }

      var Factory = this.props.buttonFactory;

      var onMouseDown = p.onMouseDown ? (0, _joinFunctions2.default)(p.onMouseDown, preventDefault) : preventDefault;

      return _react2.default.createElement(
        Factory,
        _extends({ tabIndex: 0 }, p, { onMouseDown: onMouseDown }),
        text
      );
    }
  }]);

  return Footer;
}(_reactClass2.default);

exports.default = Footer;


Footer.defaultProps = {
  actionEvent: 'onClick',
  theme: 'default',

  buttonFactory: Button,

  todayButton: true,
  clearButton: true,
  okButton: true,
  cancelButton: true,

  todayButtonText: 'Today',
  clearButtonText: 'Clear',
  okButtonText: 'OK',
  cancelButtonText: 'Cancel',

  isDatePickerFooter: true
};

Footer.propTypes = {
  theme: _react.PropTypes.string,
  centerButtons: _react.PropTypes.bool,

  cokButtonText: _react.PropTypes.node,
  clearButtonText: _react.PropTypes.node,
  cancelButtonText: _react.PropTypes.node,
  todayButtonText: _react.PropTypes.node,

  onTodayClick: _react.PropTypes.func,
  onClearClick: _react.PropTypes.func,
  onOkClick: _react.PropTypes.func,
  onCancelClick: _react.PropTypes.func
};