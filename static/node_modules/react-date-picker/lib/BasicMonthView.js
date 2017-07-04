'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDaysInMonthView = exports.getWeekendStartDay = exports.getWeekStartMoment = exports.getWeekStartDay = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactFlex = require('react-flex');

var _format = require('./utils/format');

var _format2 = _interopRequireDefault(_format);

var _toMoment = require('./toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

var _getWeekDayNames = require('./utils/getWeekDayNames');

var _getWeekDayNames2 = _interopRequireDefault(_getWeekDayNames);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _bemFactory = require('./bemFactory');

var _bemFactory2 = _interopRequireDefault(_bemFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var CLASS_NAME = 'react-date-picker__basic-month-view';

var RENDER_DAY = function RENDER_DAY(props) {
  var divProps = (0, _objectAssign2.default)({}, props);

  delete divProps.date;
  delete divProps.dateMoment;
  delete divProps.day;
  delete divProps.timestamp;

  return _react2.default.createElement('div', divProps);
};

var getWeekStartDay = function getWeekStartDay(props) {
  var locale = props.locale;
  var weekStartDay = props.weekStartDay;

  if (weekStartDay == null) {
    var localeData = props.localeData || _moment2.default.localeData(locale);
    weekStartDay = localeData._week ? localeData._week.dow : null;
  }

  return weekStartDay;
};

/**
 * Gets the number for the first day of the weekend
 *
 * @param  {Object} props
 * @param  {Number/String} props.weekStartDay
 *
 * @return {Number}
 */
var getWeekendStartDay = function getWeekendStartDay(props) {
  var weekendStartDay = props.weekendStartDay;


  if (weekendStartDay == null) {
    return getWeekStartDay(props) + 5 % 7;
  }

  return weekendStartDay;
};

/**
 * Gets a moment that points to the first day of the week
 *
 * @param  {Moment/Date/String} value]
 * @param  {Object} props
 * @param  {String} props.dateFormat
 * @param  {String} props.locale
 * @param  {Number/String} props.weekStartDay
 *
 * @return {Moment}
 */
var getWeekStartMoment = function getWeekStartMoment(value, props) {
  var locale = props.locale;
  var dateFormat = props.dateFormat;

  var weekStartDay = getWeekStartDay(props);

  return (0, _toMoment2.default)(value, {
    locale: locale,
    dateFormat: dateFormat
  }).day(weekStartDay);
};

/**
 * Returns an array of moments with the days in the month of the value
 *
 * @param  {Moment/Date/String} value
 *
 * @param  {Object} props
 * @param  {String} props.locale
 * @param  {String} props.dateFormat
 * @param  {String} props.weekStartDay
 * @param  {Boolean} props.alwaysShowPrevWeek
 *
 * @return {Moment[]}
 */
var getDaysInMonthView = function getDaysInMonthView(value, props) {
  var locale = props.locale;
  var dateFormat = props.dateFormat;

  var toMomentParam = { locale: locale, dateFormat: dateFormat };

  var first = (0, _toMoment2.default)(value, toMomentParam).startOf('month');
  var beforeFirst = (0, _toMoment2.default)(value, toMomentParam).startOf('month').add(-1, 'days');

  var start = getWeekStartMoment(first, props);

  var result = [];

  var i = 0;

  if (beforeFirst.isBefore(start)
  // and it doesn't start with a full week before and the
  // week has at least 1 day from current month (default)
   && (props.alwaysShowPrevWeek || !start.isSame(first))) {
    start.add(-1, 'weeks');
  }

  for (; i < 42; i++) {
    result.push((0, _toMoment2.default)(start, toMomentParam));
    start.add(1, 'days');
  }

  return result;
};

/**
 * @param  {Object} props
 * @param  {String} props.locale
 * @param  {Number} props.weekStartDay
 * @param  {Array/Function} props.weekDayNames
 *
 * @return {String[]}
 */
var getWeekDayNames = function getWeekDayNames(props) {
  var weekStartDay = props.weekStartDay;
  var weekDayNames = props.weekDayNames;
  var locale = props.locale;


  var names = weekDayNames;

  if (typeof names == 'function') {
    names = names(weekStartDay, locale);
  } else if (Array.isArray(names)) {
    names = [].concat(_toConsumableArray(names));

    var index = weekStartDay;

    while (index > 0) {
      names.push(names.shift());
      index--;
    }
  }

  return names;
};

var BasicMonthView = function (_Component) {
  _inherits(BasicMonthView, _Component);

  function BasicMonthView() {
    _classCallCheck(this, BasicMonthView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BasicMonthView).apply(this, arguments));
  }

  _createClass(BasicMonthView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateBem(this.props);
      this.updateToMoment(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.defaultClassName != this.props.defaultClassName) {
        this.updateBem(nextProps);
      }

      this.updateToMoment(nextProps);
    }
  }, {
    key: 'updateBem',
    value: function updateBem(props) {
      this.bem = (0, _bemFactory2.default)(props.defaultClassName);
    }
  }, {
    key: 'updateToMoment',
    value: function updateToMoment(props) {
      this.toMoment = function (value, dateFormat) {
        return (0, _toMoment2.default)(value, {
          locale: props.locale,
          dateFormat: dateFormat || props.dateFormat
        });
      };
    }
  }, {
    key: 'prepareProps',
    value: function prepareProps(thisProps) {
      var props = (0, _objectAssign2.default)({}, thisProps);

      props.viewMoment = props.viewMoment || this.toMoment(props.viewDate);

      props.weekStartDay = getWeekStartDay(props);

      props.className = this.prepareClassName(props);

      return props;
    }
  }, {
    key: 'prepareClassName',
    value: function prepareClassName(props) {
      return (0, _join2.default)(props.className, CLASS_NAME + ' dp-month-view');
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.p = this.prepareProps(this.props);

      var viewMoment = props.viewMoment;


      var daysInView = props.daysInView || getDaysInMonthView(viewMoment, props);

      var children = [this.renderWeekDayNames(), this.renderDays(props, daysInView)];

      if (props.renderChildren) {
        children = props.renderChildren(children, props);
      }

      var flexProps = (0, _objectAssign2.default)({}, props);

      delete flexProps.alwaysShowPrevWeek;
      delete flexProps.cleanup;
      delete flexProps.dateFormat;
      delete flexProps.daysInView;
      delete flexProps.defaultClassName;
      delete flexProps.defaultDate;
      delete flexProps.defaultValue;
      delete flexProps.forceValidDate;
      delete flexProps.locale;
      delete flexProps.moment;
      delete flexProps.onClockEnterKey;
      delete flexProps.onClockEscapeKey;
      delete flexProps.onClockInputBlur;
      delete flexProps.onClockInputFocus;
      delete flexProps.onClockInputMouseDown;
      delete flexProps.onFooterCancelClick;
      delete flexProps.onFooterClearClick;
      delete flexProps.onFooterOkClick;
      delete flexProps.onFooterTodayClick;
      delete flexProps.onRenderDay;
      delete flexProps.renderChildren;
      delete flexProps.renderDay;
      delete flexProps.timestamp;
      delete flexProps.value;
      delete flexProps.viewDate;
      delete flexProps.viewMoment;
      delete flexProps.weekDayNames;
      delete flexProps.weekNumbers;
      delete flexProps.weekNumberName;
      delete flexProps.weekStartDay;

      if (typeof props.cleanup == 'function') {
        props.cleanup(flexProps);
      }

      return _react2.default.createElement(_reactFlex.Flex, _extends({
        column: true,
        wrap: false,
        inline: true,
        alignItems: 'stretch'
      }, flexProps, {

        children: children
      }));
    }

    /**
     * Render the week number cell
     * @param  {Moment[]} days The days in a week
     * @return {React.DOM}
     */

  }, {
    key: 'renderWeekNumber',
    value: function renderWeekNumber(props, days) {
      var firstDayOfWeek = days[0];
      var week = firstDayOfWeek.weeks();

      var weekNumberProps = {
        key: 'week',

        className: this.bem('cell') + ' ' + this.bem('week-number') + ' dp-cell dp-weeknumber',

        // week number
        week: week,

        // the days in this week
        days: days,

        date: firstDayOfWeek,

        children: week
      };

      var renderWeekNumber = props.renderWeekNumber;

      var result = void 0;

      if (renderWeekNumber) {
        result = renderWeekNumber(weekNumberProps);
      }

      if (result === undefined) {
        var divProps = (0, _objectAssign2.default)({}, weekNumberProps);

        delete divProps.date;
        delete divProps.days;
        delete divProps.week;

        result = _react2.default.createElement('div', divProps);
      }

      return result;
    }

    /**
     * Render the given array of days
     * @param  {Moment[]} days
     *
     * @return {React.DOM}
     */

  }, {
    key: 'renderDays',
    value: function renderDays(props, days) {
      var _this2 = this;

      var nodes = days.map(function (date) {
        return _this2.renderDay(props, date);
      });

      var len = days.length;
      var buckets = [];
      var bucketsLen = Math.ceil(len / 7);

      var i = 0;
      var weekStart = void 0;
      var weekEnd = void 0;

      for (; i < bucketsLen; i++) {
        weekStart = i * 7;
        weekEnd = (i + 1) * 7;

        buckets.push([props.weekNumbers && this.renderWeekNumber(props, days.slice(weekStart, weekEnd))].concat(nodes.slice(weekStart, weekEnd)));
      }

      return buckets.map(function (bucket, index) {
        return _react2.default.createElement('div', {
          key: 'row_' + index,
          className: _this2.bem('row') + ' dp-week dp-row',
          children: bucket
        });
      });
    }
  }, {
    key: 'renderDay',
    value: function renderDay(props, dateMoment) {
      var dayText = _format2.default.day(dateMoment, props.dayFormat);

      var classes = [this.bem('cell'), this.bem('day'), 'dp-cell dp-day'];

      var renderDayProps = {
        day: dayText,
        dateMoment: dateMoment,
        timestamp: +dateMoment,

        key: dayText,
        className: classes.join(' '),
        children: dayText
      };

      if (typeof props.onRenderDay === 'function') {
        renderDayProps = props.onRenderDay(renderDayProps);
      }

      var renderFunction = props.renderDay || RENDER_DAY;

      var result = renderFunction(renderDayProps);

      if (result === undefined) {
        result = RENDER_DAY(renderDayProps);
      }

      return result;
    }
  }, {
    key: 'renderWeekDayNames',
    value: function renderWeekDayNames() {
      var _this3 = this;

      var props = this.p;
      var weekNumbers = props.weekNumbers;
      var weekNumberName = props.weekNumberName;
      var weekDayNames = props.weekDayNames;
      var renderWeekDayNames = props.renderWeekDayNames;
      var renderWeekDayName = props.renderWeekDayName;
      var weekStartDay = props.weekStartDay;


      if (weekDayNames === false) {
        return null;
      }

      var names = weekNumbers ? [weekNumberName].concat(getWeekDayNames(props)) : getWeekDayNames(props);

      var className = this.bem('row') + ' ' + this.bem('week-day-names') + ' dp-row dp-week-day-names';

      var renderProps = {
        className: className,
        names: names
      };

      if (renderWeekDayNames) {
        return renderWeekDayNames(renderProps);
      }

      return _react2.default.createElement(
        'div',
        { className: className },
        names.map(function (name, index) {
          var props = {
            weekStartDay: weekStartDay,
            index: index,
            name: name,

            key: index,
            className: _this3.bem('cell') + ' ' + _this3.bem('week-day-name') + ' dp-week-day-name',
            children: name
          };

          if (renderWeekDayName) {
            return renderWeekDayName(props);
          }

          var divProps = (0, _objectAssign2.default)({}, props);

          delete divProps.index;
          delete divProps.weekStartDay;
          delete divProps.name;

          return _react2.default.createElement('div', divProps);
        })
      );
    }
  }]);

  return BasicMonthView;
}(_reactClass2.default);

BasicMonthView.propTypes = {
  viewDate: _react.PropTypes.any,
  viewMoment: _react.PropTypes.any,

  locale: _react.PropTypes.string,
  weekStartDay: _react.PropTypes.number, // 0 is Sunday in the English locale

  // boolean prop to show/hide week numbers
  weekNumbers: _react.PropTypes.bool,

  // the name to give to the week number column
  weekNumberName: _react.PropTypes.string,

  weekDayNames: function weekDayNames(props, propName) {
    var value = props[propName];

    if (typeof value != 'function' && value !== false && !Array.isArray(value)) {
      return new Error('"weekDayNames" should be a function, an array or the boolean "false"');
    }

    return undefined;
  },


  renderWeekDayNames: _react.PropTypes.func,
  renderWeekDayName: _react.PropTypes.func,

  renderWeekNumber: _react.PropTypes.func,
  renderDay: _react.PropTypes.func,
  onRenderDay: _react.PropTypes.func,

  alwaysShowPrevWeek: _react.PropTypes.bool
};

BasicMonthView.defaultProps = {

  defaultClassName: CLASS_NAME,

  dateFormat: 'YYYY-MM-DD',
  alwaysShowPrevWeek: false,
  weekNumbers: true,
  weekNumberName: null,

  weekDayNames: _getWeekDayNames2.default
};

exports.default = BasicMonthView;
exports.getWeekStartDay = getWeekStartDay;
exports.getWeekStartMoment = getWeekStartMoment;
exports.getWeekendStartDay = getWeekendStartDay;
exports.getDaysInMonthView = getDaysInMonthView;