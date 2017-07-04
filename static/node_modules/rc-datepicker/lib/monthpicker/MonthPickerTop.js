'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _tcombReact = require('tcomb-react');

var _utils = require('../utils');

var _model = require('../utils/model');

var _PickerTop = require('../PickerTop');

var _PickerTop2 = _interopRequireDefault(_PickerTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthPickerTop = (_dec = (0, _utils.skinnable)(), _dec2 = (0, _tcombReact.props)({
  visibleDate: _model.MomentDate,
  onChangeMode: _tcomb2.default.Function,
  changeYear: _tcomb2.default.Function,
  fixedMode: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  prevIconClassName: _tcomb2.default.String,
  nextIconClassName: _tcomb2.default.String
}), (0, _utils.pure)(_class = _dec(_class = _dec2(_class = function (_React$Component) {
  _inherits(MonthPickerTop, _React$Component);

  function MonthPickerTop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MonthPickerTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MonthPickerTop.__proto__ || Object.getPrototypeOf(MonthPickerTop)).call.apply(_ref, [this].concat(args))), _this), _this.onChangeMode = function () {
      if (!_this.props.fixedMode) {
        _this.props.onChangeMode((0, _model.Mode)('year'));
      }
    }, _this.getYear = function () {
      return _this.props.visibleDate.year();
    }, _this.previousDate = function () {
      return _this.props.changeYear(_this.getYear() - 1);
    }, _this.nextDate = function () {
      return _this.props.changeYear(_this.getYear() + 1);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MonthPickerTop, [{
    key: 'getLocals',
    value: function getLocals(_ref2) {
      var fixedMode = _ref2.fixedMode;

      return {
        prevIconClassName: this.props.prevIconClassName,
        nextIconClassName: this.props.nextIconClassName,
        fixed: !!fixedMode,
        value: this.getYear(),
        handleClick: this.onChangeMode,
        previousDate: this.previousDate,
        nextDate: this.nextDate
      };
    }
  }, {
    key: 'template',
    value: function template(locales) {
      return _react2.default.createElement(_PickerTop2.default, locales);
    }
  }]);

  return MonthPickerTop;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = MonthPickerTop;