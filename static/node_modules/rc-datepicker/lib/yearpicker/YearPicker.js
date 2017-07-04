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

var _reactFlexview = require('react-flexview');

var _reactFlexview2 = _interopRequireDefault(_reactFlexview);

var _utils = require('../utils');

var _model = require('../utils/model');

var _YearPickerTop = require('./YearPickerTop');

var _YearPickerTop2 = _interopRequireDefault(_YearPickerTop);

var _YearPickerBody = require('./YearPickerBody');

var _YearPickerBody2 = _interopRequireDefault(_YearPickerBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YearPicker = (_dec = (0, _utils.skinnable)(), _dec2 = (0, _tcombReact.props)({
  changeYear: _tcomb2.default.Function,
  visibleDate: _model.MomentDate,
  date: _tcomb2.default.maybe(_model.Value),
  minDate: _tcomb2.default.maybe(_model.Value),
  maxDate: _tcomb2.default.maybe(_model.Value),
  onChangeVisibleDate: _tcomb2.default.Function,
  onSelectDate: _tcomb2.default.Function,
  onChangeMode: _tcomb2.default.Function,
  mode: _model.Mode,
  fixedMode: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  prevIconClassName: _tcomb2.default.String,
  nextIconClassName: _tcomb2.default.String
}), (0, _utils.pure)(_class = _dec(_class = _dec2(_class = function (_React$Component) {
  _inherits(YearPicker, _React$Component);

  function YearPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, YearPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = YearPicker.__proto__ || Object.getPrototypeOf(YearPicker)).call.apply(_ref, [this].concat(args))), _this), _this.onSelectDate = function (date) {
      var _this$props = _this.props,
          fixedMode = _this$props.fixedMode,
          onSelectDate = _this$props.onSelectDate,
          onChangeMode = _this$props.onChangeMode,
          onChangeVisibleDate = _this$props.onChangeVisibleDate;

      if (fixedMode) {
        onSelectDate(date);
      } else {
        onChangeVisibleDate(date);
        onChangeMode((0, _model.Mode)('month'));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(YearPicker, [{
    key: 'getLocals',
    value: function getLocals(_ref2) {
      var date = _ref2.date,
          visibleDate = _ref2.visibleDate,
          minDate = _ref2.minDate,
          maxDate = _ref2.maxDate,
          changeYear = _ref2.changeYear,
          mode = _ref2.mode,
          prevIconClassName = _ref2.prevIconClassName,
          nextIconClassName = _ref2.nextIconClassName;

      return {
        yearPickerTopProps: {
          visibleDate: visibleDate,
          changeYear: changeYear,
          prevIconClassName: prevIconClassName,
          nextIconClassName: nextIconClassName
        },
        yearPickerBodyProps: {
          date: date, visibleDate: visibleDate,
          minDate: minDate, maxDate: maxDate,
          mode: mode,
          onSelectDate: this.onSelectDate
        }
      };
    }
  }, {
    key: 'template',
    value: function template(_ref3) {
      var yearPickerTopProps = _ref3.yearPickerTopProps,
          yearPickerBodyProps = _ref3.yearPickerBodyProps;

      return _react2.default.createElement(
        _reactFlexview2.default,
        { column: true, className: 'react-datepicker-container year' },
        _react2.default.createElement(_YearPickerTop2.default, yearPickerTopProps),
        _react2.default.createElement(_YearPickerBody2.default, yearPickerBodyProps)
      );
    }
  }]);

  return YearPicker;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = YearPicker;