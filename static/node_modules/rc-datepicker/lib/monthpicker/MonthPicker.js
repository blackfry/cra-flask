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

var _MonthPickerTop = require('./MonthPickerTop');

var _MonthPickerTop2 = _interopRequireDefault(_MonthPickerTop);

var _MonthPickerBody = require('./MonthPickerBody');

var _MonthPickerBody2 = _interopRequireDefault(_MonthPickerBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthPicker = (_dec = (0, _utils.skinnable)(), _dec2 = (0, _tcombReact.props)({
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
  _inherits(MonthPicker, _React$Component);

  function MonthPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MonthPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MonthPicker.__proto__ || Object.getPrototypeOf(MonthPicker)).call.apply(_ref, [this].concat(args))), _this), _this.onSelectDate = function (date) {
      var _this$props = _this.props,
          fixedMode = _this$props.fixedMode,
          onSelectDate = _this$props.onSelectDate,
          onChangeMode = _this$props.onChangeMode,
          onChangeVisibleDate = _this$props.onChangeVisibleDate;

      if (fixedMode) {
        onSelectDate(date);
      } else {
        onChangeVisibleDate(date);
        onChangeMode((0, _model.Mode)('day'));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MonthPicker, [{
    key: 'getLocals',
    value: function getLocals(_ref2) {
      var date = _ref2.date,
          visibleDate = _ref2.visibleDate,
          minDate = _ref2.minDate,
          maxDate = _ref2.maxDate,
          changeYear = _ref2.changeYear,
          onChangeMode = _ref2.onChangeMode,
          mode = _ref2.mode,
          fixedMode = _ref2.fixedMode,
          prevIconClassName = _ref2.prevIconClassName,
          nextIconClassName = _ref2.nextIconClassName;

      return {
        monthPickerTopProps: {
          visibleDate: visibleDate,
          changeYear: changeYear,
          onChangeMode: onChangeMode,
          fixedMode: fixedMode,
          prevIconClassName: prevIconClassName,
          nextIconClassName: nextIconClassName
        },
        monthPickerBodyProps: {
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
      var monthPickerTopProps = _ref3.monthPickerTopProps,
          monthPickerBodyProps = _ref3.monthPickerBodyProps;

      return _react2.default.createElement(
        'div',
        { className: 'react-datepicker-container month' },
        _react2.default.createElement(_MonthPickerTop2.default, monthPickerTopProps),
        _react2.default.createElement(_MonthPickerBody2.default, monthPickerBodyProps)
      );
    }
  }]);

  return MonthPicker;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = MonthPicker;