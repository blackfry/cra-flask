'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialState = exports.isValidActiveDate = exports.isDateInMinMax = exports.prepareDate = exports.prepareDateProps = exports.prepareMinMax = exports.prepareViewDate = exports.prepareActiveDate = exports.onKeyDown = exports.navigate = exports.gotoViewDate = exports.confirm = exports.select = exports.onActiveDateChange = exports.onViewDateChange = exports.onChange = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactFlex = require('react-flex');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _times = require('./utils/times');

var _times2 = _interopRequireDefault(_times);

var _toMoment2 = require('./toMoment');

var _toMoment3 = _interopRequireDefault(_toMoment2);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _bemFactory = require('./bemFactory');

var _bemFactory2 = _interopRequireDefault(_bemFactory);

var _onKeyDown = require('./MonthView/onKeyDown');

var _onKeyDown2 = _interopRequireDefault(_onKeyDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bem = (0, _bemFactory2.default)('react-date-picker__decade-view');

var ARROWS = {
  prev: _react2.default.createElement(
    'svg',
    { height: '24', viewBox: '0 0 24 24', width: '24' },
    _react2.default.createElement('path', { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' }),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  ),

  next: _react2.default.createElement(
    'svg',
    { height: '24', viewBox: '0 0 24 24', width: '24' },
    _react2.default.createElement('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' }),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
  )
};

var getDecadeStartYear = function getDecadeStartYear(mom) {
  var year = mom.get('year');

  return year - year % 10;
};

var getDecadeEndYear = function getDecadeEndYear(mom) {
  return getDecadeStartYear(mom) + 9;
};

var NAV_KEYS = {
  ArrowUp: function ArrowUp(mom) {
    return mom.add(-5, 'year');
  },
  ArrowDown: function ArrowDown(mom) {
    return mom.add(5, 'year');
  },
  ArrowLeft: function ArrowLeft(mom) {
    return mom.add(-1, 'year');
  },
  ArrowRight: function ArrowRight(mom) {
    return mom.add(1, 'year');
  },
  Home: function Home(mom) {
    return mom.set('year', getDecadeStartYear(mom));
  },
  End: function End(mom) {
    return mom.set('year', getDecadeEndYear(mom));
  },
  PageUp: function PageUp(mom) {
    return mom.add(-10, 'year');
  },
  PageDown: function PageDown(mom) {
    return mom.add(10, 'year');
  }
};

var isDateInMinMax = function isDateInMinMax(timestamp, props) {
  if (props.minDate && timestamp < props.minDate) {
    return false;
  }

  if (props.maxDate && timestamp > props.maxDate) {
    return false;
  }

  return true;
};

var isValidActiveDate = function isValidActiveDate(timestamp, props) {
  if (!props) {
    throw new Error('props is mandatory in isValidActiveDate');
  }

  return isDateInMinMax(timestamp, props);
};

var _select = function _select(_ref, event) {
  var dateMoment = _ref.dateMoment;
  var timestamp = _ref.timestamp;

  if (this.props.select) {
    return this.props.select({ dateMoment: dateMoment, timestamp: timestamp }, event);
  }

  if (!timestamp) {
    timestamp = +dateMoment;
  }

  this.gotoViewDate({ dateMoment: dateMoment, timestamp: timestamp });
  this.onChange({ dateMoment: dateMoment, timestamp: timestamp }, event);

  return undefined;
};

var _confirm = function _confirm(date, event) {
  event.preventDefault();

  if (this.props.confirm) {
    return this.props.confirm(date, event);
  }

  var dateMoment = this.toMoment(date);
  var timestamp = +dateMoment;

  this.select({ dateMoment: dateMoment, timestamp: timestamp }, event);

  if (this.props.onConfirm) {
    this.props.onConfirm({ dateMoment: dateMoment, timestamp: timestamp });
  }

  return undefined;
};

var _onActiveDateChange = function _onActiveDateChange(_ref2) {
  var dateMoment = _ref2.dateMoment;
  var timestamp = _ref2.timestamp;

  if (!isValidActiveDate(timestamp, this.p)) {
    return;
  }

  if (this.props.activeDate === undefined) {
    this.setState({
      activeDate: timestamp
    });
  }

  if (this.props.onActiveDateChange) {
    var dateString = this.format(dateMoment);
    this.props.onActiveDateChange(dateString, { dateMoment: dateMoment, timestamp: timestamp, dateString: dateString });
  }
};

var _onViewDateChange = function _onViewDateChange(_ref3) {
  var dateMoment = _ref3.dateMoment;
  var timestamp = _ref3.timestamp;

  if (dateMoment && timestamp === undefined) {
    timestamp = +dateMoment;
  }

  if (this.props.constrainViewDate && !isDateInMinMax(timestamp, this.p)) {
    return;
  }

  if (this.props.viewDate === undefined) {
    this.setState({
      viewDate: timestamp
    });
  }

  if (this.props.onViewDateChange) {
    var dateString = this.format(dateMoment);
    this.props.onViewDateChange(dateString, { dateMoment: dateMoment, dateString: dateString, timestamp: timestamp });
  }
};

var _onChange = function _onChange(_ref4, event) {
  var dateMoment = _ref4.dateMoment;
  var timestamp = _ref4.timestamp;

  if (this.props.date === undefined) {
    this.setState({
      date: timestamp
    });
  }

  if (this.props.onChange) {
    var dateString = this.format(dateMoment);
    this.props.onChange(dateString, { dateMoment: dateMoment, timestamp: timestamp, dateString: dateString }, event);
  }
};

var _navigate = function _navigate(direction, event) {
  var _this = this;

  var props = this.p;

  var getNavigationDate = function getNavigationDate(dir, date, dateFormat) {
    var mom = _moment2.default.isMoment(date) ? date : _this.toMoment(date, dateFormat);

    if (typeof dir == 'function') {
      return dir(mom);
    }

    return mom;
  };

  if (props.navigate) {
    return props.navigate(direction, event, getNavigationDate);
  }

  event.preventDefault();

  if (props.activeDate) {
    var nextMoment = getNavigationDate(direction, props.activeDate);

    this.gotoViewDate({ dateMoment: nextMoment });
  }

  return undefined;
};

var _gotoViewDate = function _gotoViewDate(_ref5) {
  var dateMoment = _ref5.dateMoment;
  var timestamp = _ref5.timestamp;

  if (!timestamp) {
    timestamp = dateMoment == null ? null : +dateMoment;
  }

  this.onViewDateChange({ dateMoment: dateMoment, timestamp: timestamp });
  this.onActiveDateChange({ dateMoment: dateMoment, timestamp: timestamp });
};

var prepareDate = function prepareDate(props, state) {
  return props.date === undefined ? state.date : props.date;
};

var prepareViewDate = function prepareViewDate(props, state) {
  var viewDate = props.viewDate === undefined ? state.viewDate : props.viewDate;

  if (!viewDate && props.date) {
    return props.date;
  }

  return viewDate;
};

var prepareActiveDate = function prepareActiveDate(props, state) {
  var activeDate = props.activeDate === undefined ? state.activeDate || prepareDate(props, state) : props.activeDate;

  return activeDate;
};

var prepareMinMax = function prepareMinMax(props) {
  var minDate = props.minDate;
  var maxDate = props.maxDate;


  var result = {};

  if (minDate != null) {
    result.minDateMoment = (0, _toMoment3.default)(props.minDate, props).startOf(props.adjustMinDateStartOf);

    result.minDate = +result.minDateMoment;
  }

  if (maxDate != null) {
    result.maxDateMoment = (0, _toMoment3.default)(props.maxDate, props).endOf(props.adjustMaxDateStartOf);

    result.maxDate = +result.maxDateMoment;
  }

  return result;
};

var prepareDateProps = function prepareDateProps(props, state) {
  var result = {};

  (0, _objectAssign2.default)(result, prepareMinMax(props));

  result.date = prepareDate(props, state);
  result.viewDate = prepareViewDate(props, state);

  var activeDate = prepareActiveDate(props, state);

  if (result.date != null) {
    result.moment = (0, _toMoment3.default)(result.date, props);
    if (props.adjustDateStartOf) {
      result.moment.startOf(props.adjustDateStartOf);
    }
    result.timestamp = +result.moment;
  }

  if (activeDate) {
    result.activeMoment = (0, _toMoment3.default)(activeDate, props);
    if (props.adjustDateStartOf) {
      result.activeMoment.startOf(props.adjustDateStartOf);
    }
    result.activeDate = +result.activeMoment;
  }

  var viewMoment = (0, _toMoment3.default)(result.viewDate, props);

  if (props.constrainViewDate && result.minDate != null && viewMoment.isBefore(result.minDate)) {
    result.minConstrained = true;
    viewMoment = (0, _toMoment3.default)(result.minDate, props);
  }

  if (props.constrainViewDate && result.maxDate != null && viewMoment.isAfter(result.maxDate)) {
    result.maxConstrained = true;
    viewMoment = (0, _toMoment3.default)(result.maxDate, props);
  }

  if (props.adjustDateStartOf) {
    viewMoment.startOf(props.adjustDateStartOf);
  }

  result.viewMoment = viewMoment;

  return result;
};

var getInitialState = function getInitialState(props) {
  return {
    date: props.defaultDate,
    activeDate: props.defaultActiveDate,
    viewDate: props.defaultViewDate
  };
};

var DecadeView = function (_Component) {
  _inherits(DecadeView, _Component);

  function DecadeView(props) {
    _classCallCheck(this, DecadeView);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DecadeView).call(this, props));

    _this2.state = getInitialState(props);
    return _this2;
  }

  _createClass(DecadeView, [{
    key: 'getYearsInDecade',
    value: function getYearsInDecade(value) {
      var _this3 = this;

      var year = getDecadeStartYear(this.toMoment(value));

      var start = this.toMoment('' + year, 'YYYY').startOf('year');

      return (0, _times2.default)(10).map(function (i) {
        return _this3.toMoment(start).add(i, 'year');
      });
    }
  }, {
    key: 'toMoment',
    value: function toMoment(date, format) {
      return (0, _toMoment3.default)(date, format, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.p = (0, _objectAssign2.default)({}, this.props);

      if (props.onlyCompareYear) {
        // props.adjustDateStartOf = null
      }

      var dateProps = prepareDateProps(props, this.state);

      (0, _objectAssign2.default)(props, dateProps);

      var yearsInView = this.getYearsInDecade(props.viewMoment);

      var className = (0, _join2.default)(props.className, bem(), props.theme && bem(null, 'theme-' + props.theme));

      var children = this.renderYears(props, yearsInView);
      var align = 'stretch';
      var column = true;

      if (props.navigation) {
        column = false;
        align = 'center';

        children = [this.renderNav(-1), _react2.default.createElement(_reactFlex.Flex, { inline: true, flex: true, column: true, alignItems: 'stretch', children: children }), this.renderNav(1)];
      }

      var flexProps = (0, _objectAssign2.default)({}, this.props);

      delete flexProps.activeDate;
      delete flexProps.adjustDateStartOf;
      delete flexProps.adjustMaxDateStartOf;
      delete flexProps.adjustMinDateStartOf;
      delete flexProps.arrows;
      delete flexProps.cleanup;
      delete flexProps.constrainViewDate;
      delete flexProps.date;
      delete flexProps.dateFormat;
      delete flexProps.isDecadeView;
      delete flexProps.maxDate;
      delete flexProps.minDate;
      delete flexProps.navigation;
      delete flexProps.navKeys;
      delete flexProps.onActiveDateChange;
      delete flexProps.onConfirm;
      delete flexProps.onlyCompareYear;
      delete flexProps.onViewDateChange;
      delete flexProps.perRow;
      delete flexProps.theme;
      delete flexProps.viewDate;
      delete flexProps.yearFormat;

      if (typeof props.cleanup == 'function') {
        props.cleanup(flexProps);
      }

      return _react2.default.createElement(_reactFlex.Flex, _extends({
        inline: true,
        column: column,
        alignItems: align,
        tabIndex: 0
      }, flexProps, {
        onKeyDown: this.onKeyDown,
        className: className,
        children: children
      }));
    }
  }, {
    key: 'renderNav',
    value: function renderNav(dir) {
      var _this4 = this;

      var props = this.p;

      var name = dir == -1 ? 'prev' : 'next';
      var navMoment = this.toMoment(props.viewMoment).add(dir * 10, 'year');

      var disabled = dir == -1 ? props.minDateMoment && getDecadeEndYear(navMoment) < getDecadeEndYear(props.minDateMoment) : props.maxDateMoment && getDecadeEndYear(navMoment) > getDecadeEndYear(props.maxDateMoment);

      var className = (0, _join2.default)(bem('arrow'), bem('arrow--' + name), disabled && bem('arrow--disabled'));

      var arrow = props.arrows[name] || ARROWS[name];

      var arrowProps = {
        className: className,
        onClick: !disabled ? function () {
          return _this4.onViewDateChange({ dateMoment: navMoment });
        } : null,
        children: arrow,
        disabled: disabled
      };

      if (props.renderNavigation) {
        return props.renderNavigation(arrowProps, props);
      }

      return _react2.default.createElement('div', arrowProps);
    }
  }, {
    key: 'renderYears',
    value: function renderYears(props, years) {
      var nodes = years.map(this.renderYear);

      var perRow = props.perRow;
      var buckets = (0, _times2.default)(Math.ceil(nodes.length / perRow)).map(function (i) {
        return nodes.slice(i * perRow, (i + 1) * perRow);
      });

      return buckets.map(function (bucket, i) {
        return _react2.default.createElement(
          _reactFlex.Flex,
          {
            alignItems: 'center',
            flex: true,
            row: true,
            inline: true,
            key: 'row_' + i,
            className: 'dp-row'
          },
          bucket
        );
      });
    }
  }, {
    key: 'renderYear',
    value: function renderYear(dateMoment) {
      var props = this.p;
      var yearText = this.format(dateMoment);

      var timestamp = +dateMoment;

      var isActiveDate = props.onlyCompareYear && props.activeMoment ? dateMoment.get('year') == props.activeMoment.get('year') : timestamp === props.activeDate;

      var isValue = props.onlyCompareYear && props.moment ? dateMoment.get('year') == props.moment.get('year') : timestamp === props.timestamp;

      var className = (0, _join2.default)(bem('year'), isActiveDate && bem('year', 'active'), isValue && bem('year', 'value'), props.minDate != null && timestamp < props.minDate && bem('year', 'disabled'), props.maxDate != null && timestamp > props.maxDate && bem('year', 'disabled'));

      var onClick = this.handleClick.bind(this, {
        dateMoment: dateMoment,
        timestamp: timestamp
      });

      return _react2.default.createElement(
        _reactFlex.Item,
        {
          key: yearText,
          className: className,
          onClick: onClick
        },
        yearText
      );
    }
  }, {
    key: 'format',
    value: function format(mom, _format) {
      _format = _format || this.props.yearFormat;

      return mom.format(_format);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(_ref6, event) {
      var timestamp = _ref6.timestamp;
      var dateMoment = _ref6.dateMoment;

      event.target.value = timestamp;

      var props = this.p;
      if (props.minDate && timestamp < props.minDate) {
        return;
      }

      if (props.maxDate && timestamp > props.maxDate) {
        return;
      }

      this.select({ dateMoment: dateMoment, timestamp: timestamp }, event);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      return _onKeyDown2.default.call(this, event);
    }
  }, {
    key: 'confirm',
    value: function confirm(date, event) {
      return _confirm.call(this, date, event);
    }
  }, {
    key: 'navigate',
    value: function navigate(direction, event) {
      return _navigate.call(this, direction, event);
    }
  }, {
    key: 'select',
    value: function select(_ref7, event) {
      var dateMoment = _ref7.dateMoment;
      var timestamp = _ref7.timestamp;

      return _select.call(this, { dateMoment: dateMoment, timestamp: timestamp }, event);
    }
  }, {
    key: 'onViewDateChange',
    value: function onViewDateChange(_ref8) {
      var dateMoment = _ref8.dateMoment;
      var timestamp = _ref8.timestamp;

      return _onViewDateChange.call(this, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'gotoViewDate',
    value: function gotoViewDate(_ref9) {
      var dateMoment = _ref9.dateMoment;
      var timestamp = _ref9.timestamp;

      return _gotoViewDate.call(this, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'onActiveDateChange',
    value: function onActiveDateChange(_ref10) {
      var dateMoment = _ref10.dateMoment;
      var timestamp = _ref10.timestamp;

      return _onActiveDateChange.call(this, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'onChange',
    value: function onChange(_ref11, event) {
      var dateMoment = _ref11.dateMoment;
      var timestamp = _ref11.timestamp;

      return _onChange.call(this, { dateMoment: dateMoment, timestamp: timestamp }, event);
    }
  }, {
    key: 'focus',
    value: function focus() {
      (0, _reactDom.findDOMNode)(this).focus();
    }
  }]);

  return DecadeView;
}(_reactClass2.default);

exports.default = DecadeView;


DecadeView.defaultProps = {
  isDecadeView: true,
  arrows: {},
  navigation: true,
  constrainViewDate: true,
  navKeys: NAV_KEYS,
  theme: 'default',
  yearFormat: 'YYYY',
  dateFormat: 'YYYY-MM-DD',
  perRow: 5,

  onlyCompareYear: true,

  adjustDateStartOf: 'year',
  adjustMinDateStartOf: 'year',
  adjustMaxDateStartOf: 'year'
};

exports.onChange = _onChange;
exports.onViewDateChange = _onViewDateChange;
exports.onActiveDateChange = _onActiveDateChange;
exports.select = _select;
exports.confirm = _confirm;
exports.gotoViewDate = _gotoViewDate;
exports.navigate = _navigate;
exports.onKeyDown = _onKeyDown2.default;
exports.prepareActiveDate = prepareActiveDate;
exports.prepareViewDate = prepareViewDate;
exports.prepareMinMax = prepareMinMax;
exports.prepareDateProps = prepareDateProps;
exports.prepareDate = prepareDate;
exports.isDateInMinMax = isDateInMinMax;
exports.isValidActiveDate = isValidActiveDate;
exports.getInitialState = getInitialState;