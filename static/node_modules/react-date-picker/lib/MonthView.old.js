'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _format = require('./utils/format');

var _format2 = _interopRequireDefault(_format);

var _asConfig = require('./utils/asConfig');

var _asConfig2 = _interopRequireDefault(_asConfig);

var _onEnter = require('./onEnter');

var _onEnter2 = _interopRequireDefault(_onEnter);

var _toMoment = require('./toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

var _isInRange = require('./utils/isInRange');

var _isInRange2 = _interopRequireDefault(_isInRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TODAY = void 0;

var emptyFn = function emptyFn() {};

var MonthView = function (_Component) {
  _inherits(MonthView, _Component);

  function MonthView(props) {
    _classCallCheck(this, MonthView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MonthView).call(this, props));

    _this.state = {
      range: null
    };
    return _this;
  }

  /**
   * Formats the given date in the specified format.
   * @method format
   *
   * @param  {Date/String/Moment} value
   * @param  {String} [format] If none specified, #dateFormat will be used
   *
   * @return {String}
   */

  _createClass(MonthView, [{
    key: 'formatAsDay',
    value: function formatAsDay(moment, dayDisplayFormat) {
      return moment.format(dayDisplayFormat || 'D');
    }
  }, {
    key: 'getWeekStartMoment',
    value: function getWeekStartMoment(value) {
      var weekStartDay = this.weekStartDay;
      var clone = this.toMoment(value).day(weekStartDay);

      return clone;
    }

    /**
     * Returns all the days in the specified month.
     *
     * @param  {Moment/Date/Number} value
     * @return {Moment[]}
     */

  }, {
    key: 'getDaysInMonth',
    value: function getDaysInMonth(value) {
      var first = this.toMoment(value).startOf('month');
      var beforeFirst = this.toMoment(value).startOf('month').add(-1, 'days');

      var start = this.getWeekStartMoment(first);

      var result = [];

      var i = 0;

      if (beforeFirst.isBefore(start)
      // and it doesn't start with a full week before and the week has at least 1 day from current month (default)
       && (this.props.alwaysShowPrevWeek || !start.isSame(first))) {
        start.add(-1, 'weeks');
      }

      for (; i < 42; i++) {
        result.push(this.toMoment(start));
        start.add(1, 'days');
      }

      return result;
    }
  }, {
    key: 'render',
    value: function render() {

      var props = (0, _objectAssign2.default)({}, this.props);

      this.toMoment = function (value, dateFormat) {
        return (0, _toMoment2.default)(value, dateFormat || props.dateFormat, { locale: props.locale });
      };

      TODAY = +this.toMoment().startOf('day');

      var dateFormat = props.dateFormat;
      var viewMoment = props.viewMoment = this.toMoment(props.viewDate, dateFormat);

      var weekStartDay = props.weekStartDay;

      if (weekStartDay == null) {
        weekStartDay = props.localeData._week ? props.localeData._week.dow : null;
      }

      this.weekStartDay = props.weekStartDay = weekStartDay;

      if (props.minDate && _moment2.default.isMoment(props.minDate)) {
        props.minDate.startOf('day');
      }

      props.minDate && (props.minDate = +this.toMoment(props.minDate, dateFormat));
      props.maxDate && (props.maxDate = +this.toMoment(props.maxDate, dateFormat));

      this.monthFirst = this.toMoment(viewMoment).startOf('month');
      this.monthLast = this.toMoment(viewMoment).endOf('month');

      if (props.date) {
        props.moment = this.props.range ? null : this.toMoment(props.date).startOf('day');
      }

      var daysInView = this.getDaysInMonth(viewMoment);

      return _react2.default.createElement(
        'div',
        { className: 'dp-table dp-month-view', onMouseLeave: props.highlightRangeOnMouseMove && this.handleViewMouseLeave },
        this.renderWeekDayNames(),
        this.renderDays(props, daysInView)
      );
    }
  }, {
    key: 'handleViewMouseLeave',
    value: function handleViewMouseLeave() {
      this.state.range && this.setState({ range: null });
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
      var dateTimestamp = +firstDayOfWeek;

      var weekNumberProps = {
        key: 'week',
        className: 'dp-cell dp-weeknumber',

        //week number
        week: week,

        //the days in this week
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
        result = _react2.default.createElement('div', weekNumberProps);
      }

      return result;
    }

    /**
     * Render the given array of days
     * @param  {Moment[]} days
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

      return buckets.map(function (bucket, i) {
        return _react2.default.createElement(
          'div',
          { key: "row" + i, className: 'dp-week dp-row' },
          bucket
        );
      });
    }
  }, {
    key: 'renderDay',
    value: function renderDay(props, date) {
      var dayText = _format2.default.day(date, props.dayFormat);
      var classes = ["dp-cell dp-day"];

      var dateTimestamp = +date;
      var mom = this.toMoment(date);
      var onClick = this.handleClick.bind(this, props, date, dateTimestamp);

      var range = this.state.range || this.props.range;

      var beforeMinDate = void 0;

      if (dateTimestamp == TODAY) {
        classes.push('dp-current');
      } else if (dateTimestamp < this.monthFirst) {
        classes.push('dp-prev');
      } else if (dateTimestamp > this.monthLast) {
        classes.push('dp-next');
      }

      if (props.minDate && date < props.minDate) {
        classes.push('dp-disabled dp-before-min');
        beforeMinDate = true;
      }

      var afterMaxDate = void 0;
      if (props.maxDate && date > props.maxDate) {
        classes.push('dp-disabled dp-after-max');
        afterMaxDate = true;
      }

      if (dateTimestamp == props.moment) {
        classes.push('dp-value');
      }

      if (range) {
        var start = mom;
        var end = (0, _moment2.default)(start).endOf('day');

        var _range = _slicedToArray(range, 2);

        var rangeStart = _range[0];
        var rangeEnd = _range[1];

        if ((0, _isInRange2.default)(start, range) || (0, _isInRange2.default)(end, range) || rangeStart && (0, _isInRange2.default)(rangeStart, [start, end]) || rangeEnd && (0, _isInRange2.default)(rangeEnd, [start, end])) {
          classes.push('dp-in-range');
        }
      }

      var weekDay = mom.day();

      if (weekDay === 0 /* Sunday */ || weekDay === 6 /* Saturday */) {
          classes.push('dp-weekend');
          props.highlightWeekends && classes.push('dp-weekend-highlight');
        }

      var renderDayProps = {
        role: 'link',
        tabIndex: 1,
        key: dayText,
        text: dayText,
        date: mom,
        moment: mom,
        className: classes.join(' '),
        style: {},
        onClick: onClick,
        onKeyUp: (0, _onEnter2.default)(onClick),
        children: dayText
      };

      if (props.range && props.highlightRangeOnMouseMove) {
        renderDayProps.onMouseEnter = this.handleDayMouseEnter.bind(this, renderDayProps);
      }

      if (beforeMinDate) {
        renderDayProps.isDisabled = true;
        renderDayProps.beforeMinDate = true;
      }
      if (afterMaxDate) {
        renderDayProps.isDisabled = true;
        renderDayProps.afterMaxDate = true;
      }

      if (typeof props.onRenderDay === 'function') {
        renderDayProps = props.onRenderDay(renderDayProps);
      }

      var defaultRenderFunction = _react2.default.DOM.div;
      var renderFunction = props.renderDay || defaultRenderFunction;

      var result = renderFunction(renderDayProps);

      if (result === undefined) {
        result = defaultRenderFunction(renderDayProps);
      }

      return result;
    }
  }, {
    key: 'handleDayMouseEnter',
    value: function handleDayMouseEnter(dayProps) {
      var range = this.props.range;

      if (range && range.length == 1) {
        var _range2 = _slicedToArray(range, 1);

        var start = _range2[0];


        this.setState({
          range: [start, dayProps.date].sort(function (a, b) {
            return a - b;
          })
        });
      } else if (this.state.range) {
        this.setState({
          range: null
        });
      }
    }
  }, {
    key: 'getWeekDayNames',
    value: function getWeekDayNames(props) {
      props = props || this.props;

      var names = props.weekDayNames;
      var weekStartDay = this.weekStartDay;

      if (typeof names == 'function') {
        names = names(weekStartDay, props.locale);
      } else if (Array.isArray(names)) {

        names = [].concat(names);

        var index = weekStartDay;

        while (index > 0) {
          names.push(names.shift());
          index--;
        }
      }

      return names;
    }
  }, {
    key: 'renderWeekDayNames',
    value: function renderWeekDayNames() {
      var weekNumber = this.props.weekNumbers ? [this.props.weekNumberName] : [];
      var names = weekNumber.concat(this.getWeekDayNames());

      return _react2.default.createElement(
        'div',
        { className: 'dp-row dp-week-day-names' },
        names.map(function (name, index) {
          return _react2.default.createElement(
            'div',
            { key: index, className: 'dp-cell dp-week-day-name' },
            name
          );
        })
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick(props, date, timestamp, event) {
      if (props.minDate && timestamp < props.minDate) {
        return;
      }

      if (props.maxDate && timestamp > props.maxDate) {
        return;
      }

      event.target.value = date;(props.onChange || emptyFn)(date, event);
    }
  }]);

  return MonthView;
}(_reactClass2.default);

exports.default = MonthView;


MonthView.defaultProps = (0, _asConfig2.default)();

MonthView.getHeaderText = function (moment, props) {
  return (0, _toMoment2.default)(moment, null, { locale: props.locale }).format('MMMM YYYY');
};