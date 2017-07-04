'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _times = require('./utils/times');

var _times2 = _interopRequireDefault(_times);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _toMoment2 = require('./toMoment');

var _toMoment3 = _interopRequireDefault(_toMoment2);

var _reactFlex = require('react-flex');

var _bemFactory = require('./bemFactory');

var _bemFactory2 = _interopRequireDefault(_bemFactory);

var _DecadeView = require('./DecadeView');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bem = (0, _bemFactory2.default)('react-date-picker__year-view');

var NAV_KEYS = {
  ArrowUp: function ArrowUp(mom) {
    if (mom.get('month') >= 4) {
      mom.add(-4, 'month');
    }

    return mom;
  },
  ArrowDown: function ArrowDown(mom) {
    if (mom.get('month') <= 7) {
      mom.add(4, 'month');
    }

    return mom;
  },
  ArrowLeft: function ArrowLeft(mom) {
    if (mom.get('month') >= 1) {
      mom.add(-1, 'month');
    }

    return mom;
  },
  ArrowRight: function ArrowRight(mom) {
    if (mom.get('month') <= 10) {
      mom.add(1, 'month');
    }

    return mom;
  },
  Home: function Home(mom) {
    return mom.startOf('year').startOf('month');
  },
  End: function End(mom) {
    return mom.endOf('year').startOf('month');
  },
  PageUp: function PageUp(mom) {
    var month = mom.get('month') - 4;
    var extra4 = month - 4;

    if (month >= 0) {
      if (extra4 >= 0) {
        return mom.set('month', extra4);
      }

      return mom.set('month', month);
    }

    return mom;
  },
  PageDown: function PageDown(mom) {
    var month = mom.get('month') + 4;
    var extra4 = month + 4;

    if (month <= 11) {
      if (extra4 <= 11) {
        return mom.set('month', extra4);
      }

      return mom.set('month', month);
    }

    return mom;
  }
};

var YearView = function (_Component) {
  _inherits(YearView, _Component);

  function YearView(props) {
    _classCallCheck(this, YearView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(YearView).call(this, props));

    _this.state = (0, _DecadeView.getInitialState)(props);
    return _this;
  }

  /**
   * Returns all the days in the specified month.
   *
   * @param  {Moment/Date/Number} value
   * @return {Moment[]}
   */


  _createClass(YearView, [{
    key: 'getMonthsInYear',
    value: function getMonthsInYear(value) {
      var _this2 = this;

      var start = this.toMoment(value).startOf('year');

      return (0, _times2.default)(12).map(function (i) {
        return _this2.toMoment(start).add(i, 'month');
      });
    }
  }, {
    key: 'toMoment',
    value: function toMoment(date) {
      return (0, _toMoment3.default)(date, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.p = (0, _objectAssign2.default)({}, this.props);

      if (props.onlyCompareMonth) {
        // props.adjustDateStartOf = null
      }

      var dateProps = (0, _DecadeView.prepareDateProps)(props, this.state);

      (0, _objectAssign2.default)(props, dateProps);

      var className = (0, _join2.default)(props.className, bem(), props.theme && bem(null, 'theme-' + props.theme));

      var monthsInView = this.getMonthsInYear(props.viewMoment);

      var flexProps = (0, _objectAssign2.default)({}, props);

      delete flexProps.activeDate;
      delete flexProps.activeMoment;
      delete flexProps.adjustDateStartOf;
      delete flexProps.adjustMaxDateStartOf;
      delete flexProps.adjustMinDateStartOf;

      delete flexProps.cleanup;
      delete flexProps.constrainViewDate;

      delete flexProps.date;
      delete flexProps.dateFormat;

      delete flexProps.isYearView;

      delete flexProps.maxConstrained;
      delete flexProps.maxDate;
      delete flexProps.maxDateMoment;
      delete flexProps.minConstrained;
      delete flexProps.minDate;
      delete flexProps.minDateMoment;
      delete flexProps.moment;
      delete flexProps.monthFormat;

      delete flexProps.navKeys;

      delete flexProps.onActiveDateChange;
      delete flexProps.onViewDateChange;
      delete flexProps.onlyCompareMonth;

      delete flexProps.timestamp;
      delete flexProps.theme;

      delete flexProps.viewDate;
      delete flexProps.viewMoment;

      if (typeof props.cleanup == 'function') {
        props.cleanup(flexProps);
      }

      return _react2.default.createElement(
        _reactFlex.Flex,
        _extends({
          inline: true,
          column: true,
          alignItems: 'stretch',
          tabIndex: 0
        }, flexProps, {
          onKeyDown: this.onKeyDown,
          className: className
        }),
        this.renderMonths(props, monthsInView)
      );
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths(props, months) {
      var _this3 = this;

      var nodes = months.map(function (monthMoment) {
        return _this3.renderMonth(props, monthMoment);
      });

      var buckets = (0, _times2.default)(Math.ceil(nodes.length / 4)).map(function (i) {
        return nodes.slice(i * 4, (i + 1) * 4);
      });

      var className = bem('row');

      return buckets.map(function (bucket, i) {
        return _react2.default.createElement(
          _reactFlex.Flex,
          {
            alignItems: 'center',
            flex: true,
            row: true,
            inline: true,
            key: 'row_' + i,
            className: className
          },
          bucket
        );
      });
    }
  }, {
    key: 'format',
    value: function format(mom, _format) {
      _format = _format || this.props.monthFormat;

      return mom.format(_format);
    }
  }, {
    key: 'renderMonth',
    value: function renderMonth(props, dateMoment) {
      var index = dateMoment.get('month');

      var monthText = props.monthNames ? props.monthNames[index] || this.format(dateMoment) : this.format(dateMoment);

      var timestamp = +dateMoment;

      var isActiveDate = props.onlyCompareMonth && props.activeMoment ? dateMoment.get('month') == props.activeMoment.get('month') : timestamp === props.activeDate;

      var isValue = props.onlyCompareMonth && props.moment ? dateMoment.get('month') == props.moment.get('month') : timestamp === props.timestamp;

      var disabled = props.minDate != null && timestamp < props.minDate || props.maxDate != null && timestamp > props.maxDate;

      var className = (0, _join2.default)(bem('month'), !disabled && isActiveDate && bem('month', 'active'), isValue && bem('month', 'value'), disabled && bem('month', 'disabled'));

      var onClick = disabled ? null : this.handleClick.bind(this, {
        dateMoment: dateMoment,
        timestamp: timestamp
      });

      return _react2.default.createElement(
        _reactFlex.Item,
        {
          key: monthText,
          className: className,
          onClick: onClick
        },
        monthText
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick(_ref, event) {
      var timestamp = _ref.timestamp;
      var dateMoment = _ref.dateMoment;

      event.target.value = timestamp;

      this.select({ dateMoment: dateMoment, timestamp: timestamp }, event);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      return _DecadeView.onKeyDown.call(this, event);
    }
  }, {
    key: 'confirm',
    value: function confirm(date, event) {
      return _DecadeView.confirm.call(this, date, event);
    }
  }, {
    key: 'navigate',
    value: function navigate(direction, event) {
      return _DecadeView.navigate.call(this, direction, event);
    }
  }, {
    key: 'select',
    value: function select(_ref2, event) {
      var dateMoment = _ref2.dateMoment;
      var timestamp = _ref2.timestamp;

      return _DecadeView.select.call(this, { dateMoment: dateMoment, timestamp: timestamp }, event);
    }
  }, {
    key: 'onViewDateChange',
    value: function onViewDateChange(_ref3) {
      var dateMoment = _ref3.dateMoment;
      var timestamp = _ref3.timestamp;

      return _DecadeView.onViewDateChange.call(this, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'gotoViewDate',
    value: function gotoViewDate(_ref4) {
      var dateMoment = _ref4.dateMoment;
      var timestamp = _ref4.timestamp;

      return _DecadeView.gotoViewDate.call(this, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'onActiveDateChange',
    value: function onActiveDateChange(_ref5) {
      var dateMoment = _ref5.dateMoment;
      var timestamp = _ref5.timestamp;

      return _DecadeView.onActiveDateChange.call(this, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'onChange',
    value: function onChange(_ref6, event) {
      var dateMoment = _ref6.dateMoment;
      var timestamp = _ref6.timestamp;

      return _DecadeView.onChange.call(this, { dateMoment: dateMoment, timestamp: timestamp }, event);
    }
  }, {
    key: 'focus',
    value: function focus() {
      (0, _reactDom.findDOMNode)(this).focus();
    }
  }]);

  return YearView;
}(_reactClass2.default);

exports.default = YearView;


YearView.defaultProps = {
  isYearView: true,
  navKeys: NAV_KEYS,
  constrainViewDate: true,
  theme: 'default',
  monthFormat: 'MMM',
  dateFormat: 'YYYY-MM-DD',

  onlyCompareMonth: true,

  adjustDateStartOf: 'month',
  adjustMinDateStartOf: 'month',
  adjustMaxDateStartOf: 'month'
};