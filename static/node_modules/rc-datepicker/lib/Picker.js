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

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _tcombReact = require('tcomb-react');

var _reactFlexview = require('react-flexview');

var _reactFlexview2 = _interopRequireDefault(_reactFlexview);

var _utils = require('./utils');

var _model = require('./utils/model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Picker = (_dec = (0, _utils.skinnable)(), _dec2 = (0, _tcombReact.props)({
  date: _model.MomentDate,
  minDate: _tcomb2.default.maybe(_model.Value),
  maxDate: _tcomb2.default.maybe(_model.Value),
  isSelected: _tcomb2.default.Boolean,
  isCurrent: _tcomb2.default.Boolean,
  isEnabled: _tcomb2.default.Boolean,
  isDisabled: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  onSelectDate: _tcomb2.default.Function,
  mode: _model.Mode
}), (0, _utils.pure)(_class = _dec(_class = _dec2(_class = function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Picker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Picker.__proto__ || Object.getPrototypeOf(Picker)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      e.preventDefault();
      if (_this.props.isEnabled) {
        _this.props.onSelectDate(_this.props.date);
      }
    }, _this.getFormat = function (mode) {
      switch (mode) {
        case (0, _model.Mode)('day'):
          return 'D';
        case (0, _model.Mode)('month'):
          return 'MMM';
        case (0, _model.Mode)('year'):
          return 'YYYY';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Picker, [{
    key: 'getLocals',
    value: function getLocals(_ref2) {
      var _cx;

      var date = _ref2.date,
          mode = _ref2.mode,
          isCurrent = _ref2.isCurrent,
          isSelected = _ref2.isSelected,
          isEnabled = _ref2.isEnabled;

      var string = date.format(this.getFormat(mode));

      return {
        value: string.charAt(0).toUpperCase() + string.slice(1), // first letter always uppercase
        className: (0, _classnames2.default)('react-datepicker-picker', (_cx = {}, _defineProperty(_cx, mode, true), _defineProperty(_cx, 'current', isCurrent), _defineProperty(_cx, 'selected', isSelected), _defineProperty(_cx, 'disabled', !isEnabled), _cx)),
        onClick: this.onClick
      };
    }
  }, {
    key: 'template',
    value: function template(_ref3) {
      var className = _ref3.className,
          onClick = _ref3.onClick,
          value = _ref3.value;

      return _react2.default.createElement(
        _reactFlexview2.default,
        _extends({ className: className, onClick: onClick }, {
          hAlignContent: 'center', vAlignContent: 'center',
          basis: '100%', shrink: true, height: '100%'
        }),
        _react2.default.createElement(
          'span',
          null,
          value
        )
      );
    }
  }]);

  return Picker;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = Picker;