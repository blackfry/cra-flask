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

var _DayPickerTop = require('./DayPickerTop');

var _DayPickerTop2 = _interopRequireDefault(_DayPickerTop);

var _DayPickerBody = require('./DayPickerBody');

var _DayPickerBody2 = _interopRequireDefault(_DayPickerBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayPicker = (_dec = (0, _utils.skinnable)(), _dec2 = (0, _tcombReact.props)({
  changeMonth: _tcomb2.default.Function,
  visibleDate: _model.MomentDate,
  date: _tcomb2.default.maybe(_model.Value),
  minDate: _tcomb2.default.maybe(_model.Value),
  maxDate: _tcomb2.default.maybe(_model.Value),
  onSelectDate: _tcomb2.default.Function,
  onChangeMode: _tcomb2.default.Function,
  mode: _model.Mode,
  fixedMode: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  prevIconClassName: _tcomb2.default.String,
  nextIconClassName: _tcomb2.default.String
}), (0, _utils.pure)(_class = _dec(_class = _dec2(_class = function (_React$Component) {
  _inherits(DayPicker, _React$Component);

  function DayPicker() {
    _classCallCheck(this, DayPicker);

    return _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).apply(this, arguments));
  }

  _createClass(DayPicker, [{
    key: 'getLocals',
    value: function getLocals(_ref) {
      var date = _ref.date,
          visibleDate = _ref.visibleDate,
          onSelectDate = _ref.onSelectDate,
          minDate = _ref.minDate,
          maxDate = _ref.maxDate,
          changeMonth = _ref.changeMonth,
          onChangeMode = _ref.onChangeMode,
          mode = _ref.mode,
          fixedMode = _ref.fixedMode,
          prevIconClassName = _ref.prevIconClassName,
          nextIconClassName = _ref.nextIconClassName;

      return {
        dayPickerTopProps: {
          visibleDate: visibleDate,
          changeMonth: changeMonth,
          onChangeMode: onChangeMode,
          fixedMode: fixedMode,
          prevIconClassName: prevIconClassName,
          nextIconClassName: nextIconClassName
        },
        dayPickerBodyProps: {
          date: date, visibleDate: visibleDate,
          minDate: minDate, maxDate: maxDate,
          onSelectDate: onSelectDate,
          mode: mode
        }
      };
    }
  }, {
    key: 'template',
    value: function template(_ref2) {
      var dayPickerTopProps = _ref2.dayPickerTopProps,
          dayPickerBodyProps = _ref2.dayPickerBodyProps;

      return _react2.default.createElement(
        _reactFlexview2.default,
        { column: true, className: 'react-datepicker-container day' },
        _react2.default.createElement(_DayPickerTop2.default, dayPickerTopProps),
        _react2.default.createElement(_DayPickerBody2.default, dayPickerBodyProps)
      );
    }
  }]);

  return DayPicker;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = DayPicker;