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

var _capitalize = require('lodash/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _tcombReact = require('tcomb-react');

var _reactFlexview = require('react-flexview');

var _reactFlexview2 = _interopRequireDefault(_reactFlexview);

var _utils = require('../utils');

var _model = require('../utils/model');

var _DateUtils = require('../utils/DateUtils.js');

var _PickerTop = require('../PickerTop');

var _PickerTop2 = _interopRequireDefault(_PickerTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayPickerTop = (_dec = (0, _utils.skinnable)(), _dec2 = (0, _tcombReact.props)({
  changeMonth: _tcomb2.default.Function,
  visibleDate: _model.MomentDate,
  onChangeMode: _tcomb2.default.Function,
  fixedMode: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  prevIconClassName: _tcomb2.default.String,
  nextIconClassName: _tcomb2.default.String
}), (0, _utils.pure)(_class = _dec(_class = _dec2(_class = function (_React$Component) {
  _inherits(DayPickerTop, _React$Component);

  function DayPickerTop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DayPickerTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DayPickerTop.__proto__ || Object.getPrototypeOf(DayPickerTop)).call.apply(_ref, [this].concat(args))), _this), _this.onChangeMode = function () {
      if (!_this.props.fixedMode) {
        _this.props.onChangeMode((0, _model.Mode)('month'));
      }
    }, _this.getMonth = function () {
      return _this.props.visibleDate.month();
    }, _this.previousDate = function () {
      return _this.props.changeMonth(_this.getMonth() - 1);
    }, _this.nextDate = function () {
      return _this.props.changeMonth(_this.getMonth() + 1);
    }, _this.templateWeekDays = function (_ref2) {
      var weekDays = _ref2.weekDays;
      return _react2.default.createElement(
        _reactFlexview2.default,
        { className: 'week-days', shrink: false },
        weekDays.map(function (dayMin, i) {
          return _react2.default.createElement(
            _reactFlexview2.default,
            {
              className: 'week-day', basis: '100%', shrink: true,
              hAlignContent: 'center', vAlignContent: 'center',
              key: i
            },
            dayMin
          );
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DayPickerTop, [{
    key: 'getLocals',
    value: function getLocals(_ref3) {
      var visibleDate = _ref3.visibleDate,
          fixedMode = _ref3.fixedMode,
          prevIconClassName = _ref3.prevIconClassName,
          nextIconClassName = _ref3.nextIconClassName;

      return {
        fixed: !!fixedMode,
        value: (0, _capitalize2.default)(visibleDate.format('MMMM YYYY')),
        handleClick: this.onChangeMode,
        previousDate: this.previousDate,
        nextDate: this.nextDate,
        weekDays: (0, _DateUtils.getWeekdaysMin)(),
        prevIconClassName: prevIconClassName,
        nextIconClassName: nextIconClassName
      };
    }
  }, {
    key: 'template',
    value: function template(_ref4) {
      var weekDays = _ref4.weekDays,
          locales = _objectWithoutProperties(_ref4, ['weekDays']);

      return _react2.default.createElement(_PickerTop2.default, _extends({}, locales, {
        weekDays: this.templateWeekDays({ weekDays: weekDays })
      }));
    }
  }]);

  return DayPickerTop;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = DayPickerTop;