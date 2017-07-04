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

var YearPickerTop = (_dec = (0, _utils.skinnable)(), _dec2 = (0, _tcombReact.props)({
  visibleDate: _model.MomentDate,
  changeYear: _tcomb2.default.Function,
  prevIconClassName: _tcomb2.default.String,
  nextIconClassName: _tcomb2.default.String
}), (0, _utils.pure)(_class = _dec(_class = _dec2(_class = function (_React$Component) {
  _inherits(YearPickerTop, _React$Component);

  function YearPickerTop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, YearPickerTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = YearPickerTop.__proto__ || Object.getPrototypeOf(YearPickerTop)).call.apply(_ref, [this].concat(args))), _this), _this.getYear = function () {
      return _this.props.visibleDate.year();
    }, _this.previousDate = function () {
      return _this.props.changeYear(_this.getYear() - 10);
    }, _this.nextDate = function () {
      return _this.props.changeYear(_this.getYear() + 10);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(YearPickerTop, [{
    key: 'getLocals',
    value: function getLocals(_ref2) {
      var prevIconClassName = _ref2.prevIconClassName,
          nextIconClassName = _ref2.nextIconClassName;

      var year = this.getYear();
      var startDecadeYear = parseInt(year / 10, 10) * 10;
      var endDecadeYear = startDecadeYear + 9;

      return {
        prevIconClassName: prevIconClassName,
        nextIconClassName: nextIconClassName,
        fixed: true,
        previousDate: this.previousDate,
        nextDate: this.nextDate,
        value: startDecadeYear + '-' + endDecadeYear
      };
    }
  }, {
    key: 'template',
    value: function template(locals) {
      return _react2.default.createElement(_PickerTop2.default, locals);
    }
  }]);

  return YearPickerTop;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = YearPickerTop;