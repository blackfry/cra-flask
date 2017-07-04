'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _tcombReact = require('tcomb-react');

var _utils = require('../utils');

var _model = require('../utils/model');

var _InvalidDate = require('../InvalidDate');

var _InvalidDate2 = _interopRequireDefault(_InvalidDate);

var _Picker = require('../Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _Row = require('../Row');

var _Row2 = _interopRequireDefault(_Row);

var _DateUtils = require('../utils/DateUtils');

var _range = require('lodash/range');

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COLUMNS = 4;
var ROWS = 3;

var MonthPickerBody = (_dec = (0, _utils.skinnable)(), _dec2 = (0, _tcombReact.props)({
  visibleDate: _model.MomentDate,
  date: _tcomb2.default.maybe(_model.Value),
  minDate: _tcomb2.default.maybe(_model.Value),
  maxDate: _tcomb2.default.maybe(_model.Value),
  onSelectDate: _tcomb2.default.Function,
  mode: _model.Mode
}), (0, _utils.pure)(_class = _dec(_class = _dec2(_class = function (_React$Component) {
  _inherits(MonthPickerBody, _React$Component);

  function MonthPickerBody() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MonthPickerBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MonthPickerBody.__proto__ || Object.getPrototypeOf(MonthPickerBody)).call.apply(_ref, [this].concat(args))), _this), _this.templateMonths = function (_ref2) {
      var pickers = _ref2.pickers;
      return pickers.map(function (p) {
        return _react2.default.createElement(_Picker2.default, p);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MonthPickerBody, [{
    key: 'getLocals',
    value: function getLocals(_ref3) {
      var date = _ref3.date,
          visibleDate = _ref3.visibleDate,
          minDate = _ref3.minDate,
          maxDate = _ref3.maxDate,
          onSelectDate = _ref3.onSelectDate,
          mode = _ref3.mode;

      if (!visibleDate.isValid()) {
        return _react2.default.createElement(_InvalidDate2.default, { invalidDate: visibleDate.format() });
      }
      var year = visibleDate.year();
      var selectedMonth = date ? date.month() : -1;
      var selectedYear = date ? date.year() : -1;
      var pickers = _moment2.default.months().map(function (_, index) {
        var date = (0, _moment2.default)([year, index, 1]);
        return {
          date: date,
          onSelectDate: onSelectDate,
          mode: mode,
          isCurrent: true,
          isSelected: selectedMonth === index && selectedYear === year,
          isEnabled: (0, _DateUtils.isInsideTheEnabledArea)(date, mode, minDate, maxDate),
          key: index
        };
      });

      return { pickers: pickers, mode: mode };
    }
  }, {
    key: 'template',
    value: function template(_ref4) {
      var pickers = _ref4.pickers,
          mode = _ref4.mode;

      var months = this.templateMonths({ pickers: pickers });
      var rows = (0, _range2.default)(ROWS).map(function (index) {
        return _react2.default.createElement(_Row2.default, {
          pickers: months.slice(COLUMNS * index, COLUMNS * (index + 1)),
          mode: mode,
          key: index
        });
      });

      return _react2.default.createElement(
        'div',
        { className: 'react-datepicker-body' },
        rows
      );
    }
  }]);

  return MonthPickerBody;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = MonthPickerBody;