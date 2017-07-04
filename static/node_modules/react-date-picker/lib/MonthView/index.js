'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderFooter = exports.NAV_KEYS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _clampRange = require('../clampRange');

var _clampRange2 = _interopRequireDefault(_clampRange);

var _toMoment = require('../toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

var _join = require('../join');

var _join2 = _interopRequireDefault(_join);

var _isInRange = require('../utils/isInRange');

var _isInRange2 = _interopRequireDefault(_isInRange);

var _NavBar = require('../NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Footer = require('../Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _bemFactory = require('../bemFactory');

var _bemFactory2 = _interopRequireDefault(_bemFactory);

var _joinFunctions = require('../joinFunctions');

var _joinFunctions2 = _interopRequireDefault(_joinFunctions);

var _assignDefined = require('../assignDefined');

var _assignDefined2 = _interopRequireDefault(_assignDefined);

var _BasicMonthView = require('../BasicMonthView');

var _BasicMonthView2 = _interopRequireDefault(_BasicMonthView);

var _onKeyDown = require('./onKeyDown');

var _onKeyDown2 = _interopRequireDefault(_onKeyDown);

var _navKeys = require('./navKeys');

var _navKeys2 = _interopRequireDefault(_navKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TODAY = void 0;

var RENDER_DAY = function RENDER_DAY(props) {
  var divProps = (0, _objectAssign2.default)({}, props);

  delete divProps.date;
  delete divProps.dateMoment;
  delete divProps.day;
  delete divProps.isAfterMaxDate;
  delete divProps.isBeforeMinDate;
  delete divProps.inRange;
  delete divProps.timestamp;

  return _react2.default.createElement('div', divProps);
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

var _isValidActiveDate = function _isValidActiveDate(timestamp, props) {
  if (!props) {
    throw new Error('props is mandatory in isValidActiveDate');
  }

  var dayProps = props.dayPropsMap[timestamp];

  if (dayProps && dayProps.disabled) {
    return false;
  }

  return isDateInMinMax(timestamp, props);
};

var _isInView = function _isInView(mom, props) {
  if (!props) {
    throw new Error('props is mandatory in isInView');
  }

  var daysInView = props.daysInView;

  return (0, _isInRange2.default)(mom, { range: daysInView, inclusive: true });
};

var prepareViewDate = function prepareViewDate(props, state) {
  var viewDate = props.viewDate === undefined ? state.viewDate : props.viewDate;

  if (!viewDate && props.moment) {
    return (0, _toMoment2.default)(props.moment);
  }

  return viewDate;
};

var prepareDate = function prepareDate(props, state) {
  if (props.range) {
    return null;
  }

  return props.date === undefined ? state.date : props.date;
};

var prepareRange = function prepareRange(props, state) {
  if (props.moment) {
    return null;
  }

  return props.partialRange ? props.range || state.range : state.range || props.range;
};

var prepareActiveDate = function prepareActiveDate(props, state) {
  var fallbackDate = prepareDate(props, state) || (prepareRange(props, state) || [])[0];

  var activeDate = props.activeDate === undefined ?
  // only fallback to date if activeDate not specified
  state.activeDate || fallbackDate : props.activeDate;

  var daysInView = props.daysInView;

  if (activeDate && daysInView && props.constrainActiveInView) {
    var activeMoment = this.toMoment(activeDate);

    if (!_isInView(activeMoment, props)) {
      var date = fallbackDate;
      var dateMoment = this.toMoment(date);

      if (date && _isInView(dateMoment, props) && _isValidActiveDate(+dateMoment, props)) {
        return date;
      }

      return null;
    }
  }

  return _isValidActiveDate(+activeDate, props) ? activeDate : null;
};

var _renderFooter = function renderFooter(props, buttonHandlers) {
  if (!props.footer) {
    return null;
  }

  buttonHandlers = buttonHandlers || props;

  var renderFooter = props.renderFooter;

  var footerFnProps = {
    onTodayClick: buttonHandlers.onFooterTodayClick,
    onClearClick: buttonHandlers.onFooterClearClick,
    onOkClick: buttonHandlers.onFooterOkClick,
    onCancelClick: buttonHandlers.onFooterCancelClick
  };

  var childFooter = _react2.default.Children.toArray(props.children).filter(function (c) {
    return c && c.props && c.props.isDatePickerFooter;
  })[0];

  var childFooterProps = childFooter ? childFooter.props : null;

  if (childFooterProps) {
    // also take into account the props on childFooter
    // so we merge those with the other props already built
    Object.keys(footerFnProps).forEach(function (key) {
      if (childFooter.props[key]) {
        footerFnProps[key] = (0, _joinFunctions2.default)(footerFnProps[key], childFooter.props[key]);
      }
    });
  }

  var footerProps = (0, _assignDefined2.default)({}, footerFnProps, {
    todayButton: props.todayButton,
    todayButtonText: props.todayButtonText,
    clearButton: props.clearButton,
    clearButtonText: props.clearButtonText,

    okButton: props.okButton === undefined && !props.insideField ? false : props.okButton,

    okButtonText: props.okButtonText,

    cancelButton: props.cancelButton === undefined && !props.insideField ? false : props.cancelButton,

    cancelButtonText: props.cancelButtonText,

    clearDate: props.clearDate || props.footerClearDate,

    selectDate: props.selectDate
  });

  if (childFooter) {
    if (renderFooter) {
      return renderFooter((0, _objectAssign2.default)({}, childFooter.props, footerProps));
    }

    return _react2.default.cloneElement(childFooter, footerProps);
  }

  if (renderFooter) {
    return renderFooter(footerProps);
  }

  return _react2.default.createElement(_Footer2.default, footerProps);
};

var MonthView = function (_Component) {
  _inherits(MonthView, _Component);

  _createClass(MonthView, [{
    key: 'isInView',
    value: function isInView(mom, props) {
      return _isInView(mom, props || this.p);
    }
  }]);

  function MonthView(props) {
    _classCallCheck(this, MonthView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MonthView).call(this, props));

    _this.state = {
      range: props.defaultRange,
      date: props.defaultDate,
      hoverRange: props.defaultHoverRange,
      activeDate: props.defaultActiveDate,
      viewDate: props.defaultViewDate
    };
    return _this;
  }

  _createClass(MonthView, [{
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

      TODAY = +this.toMoment().startOf('day');
    }
  }, {
    key: 'prepareClassName',
    value: function prepareClassName(props) {
      return (0, _join2.default)(props.className, this.bem(), this.bem(null, 'theme-' + props.theme));
    }
  }, {
    key: 'prepareProps',
    value: function prepareProps(thisProps, state) {
      var _this2 = this;

      var props = this.p = (0, _objectAssign2.default)({}, thisProps);

      state = state || this.state;

      props.hoverRange = props.hoverRange === undefined ? this.state.hoverRange : props.hoverRange;

      props.dayPropsMap = {};
      props.className = this.prepareClassName && this.prepareClassName(props);

      var minDate = props.minDate;
      var maxDate = props.maxDate;


      if (minDate) {
        props.minDateMoment = this.toMoment(props.minDate).startOf('day');
        props.minDate = +props.minDateMoment;
      }

      if (maxDate) {
        props.maxDateMoment = this.toMoment(props.maxDate);
        props.maxDate = +props.maxDateMoment;
      }

      var date = prepareDate(props, state);

      if (date) {
        props.moment = props.moment || (props.range ? null : this.toMoment(date).startOf('day'));
        props.timestamp = props.moment ? +props.moment : null;
      }

      props.viewMoment = props.viewMoment || this.toMoment(prepareViewDate(props, state));

      if (props.constrainViewDate && props.minDate && props.viewMoment.isBefore(props.minDate)) {
        props.minConstrained = true;
        props.viewMoment = this.toMoment(props.minDate);
      }

      if (props.constrainViewDate && props.maxDate && props.viewMoment.isAfter(props.maxDate)) {
        props.maxConstrained = true;
        props.viewMoment = this.toMoment(props.maxDate);
      }

      props.viewMonthStart = this.toMoment(props.viewMoment).startOf('month');
      props.viewMonthEnd = this.toMoment(props.viewMoment).endOf('month');

      var range = prepareRange(props, state);

      if (range) {
        props.range = range.map(function (d) {
          return _this2.toMoment(d).startOf('day');
        });
        props.rangeStart = state.rangeStart || (props.range.length == 1 ? props.range[0] : null);
      }

      props.daysInView = (0, _BasicMonthView.getDaysInMonthView)(props.viewMoment, props);

      var activeDate = prepareActiveDate.call(this, props, state);

      if (activeDate) {
        props.activeDate = +this.toMoment(activeDate).startOf('day');
      }

      return props;
    }
  }, {
    key: 'getViewMoment',
    value: function getViewMoment() {
      return this.p.viewMoment;
    }
  }, {
    key: 'getViewSize',
    value: function getViewSize() {
      return 1;
    }

    // handleViewMouseLeave(){
    //   this.state.range && this.setState({ range: null })
    // }

  }, {
    key: 'preparePrevNextClassName',
    value: function preparePrevNextClassName(timestamp, props) {
      var viewMonthStart = props.viewMonthStart;
      var viewMonthEnd = props.viewMonthEnd;


      var before = timestamp < viewMonthStart;
      var after = timestamp > viewMonthEnd;

      var thisMonth = !before && !after;

      return (0, _join2.default)(timestamp == TODAY && this.bem('day--today'), props.highlightToday && timestamp == TODAY && this.bem('day--today-highlight'), before && this.bem('day--prev-month'), before && !props.showDaysBeforeMonth && this.bem('day--hidden'), after && this.bem('day--next-month'), after && !props.showDaysAfterMonth && this.bem('day--hidden'), thisMonth && this.bem('day--this-month'));
    }
  }, {
    key: 'prepareMinMaxProps',
    value: function prepareMinMaxProps(timestamp, props) {
      var classes = [];

      var isBeforeMinDate = false;
      var isAfterMaxDate = false;

      var minDate = props.minDate;
      var maxDate = props.maxDate;


      if (minDate && timestamp < minDate) {
        classes.push(this.bem('day--disabled-min'));
        isBeforeMinDate = true;
      }

      if (maxDate && timestamp > maxDate) {
        classes.push(this.bem('day--disabled-max'));
        isAfterMaxDate = true;
      }

      return {
        className: (0, _join2.default)(classes),
        isBeforeMinDate: isBeforeMinDate,
        isAfterMaxDate: isAfterMaxDate,
        disabled: isBeforeMinDate || isAfterMaxDate
      };
    }
  }, {
    key: 'prepareWeekendClassName',
    value: function prepareWeekendClassName(dateMoment, _ref) {
      var highlightWeekends = _ref.highlightWeekends;

      // const props = this.p
      var weekDay = dateMoment.day();

      // const weekendStartDay = getWeekendStartDay(props)

      if (weekDay === 0 /* Sunday */ || weekDay === 6 /* Saturday */) {
          // if (weekDay === weekendStartDay || weekDay === weekendStartDay + 1) {
          return (0, _join2.default)(this.bem('day--weekend'), highlightWeekends && this.bem('day--weekend-highlight'));
        }

      return '';
    }
  }, {
    key: 'prepareRangeProps',
    value: function prepareRangeProps(dateMoment, props) {
      var inRange = false;

      var className = [];

      var hoverRange = props.hoverRange;
      var range = props.range;


      if (range) {
        var _range = _slicedToArray(range, 2);

        var rangeStart = _range[0];
        var rangeEnd = _range[1];


        if (!range.length) {
          rangeStart = props.rangeStart;
        }

        // const rangeName = !props.partialRange ? 'hover-range' : 'range'
        var rangeName = 'range'; //hoverRange ? 'range' : 'hover-range'

        if (rangeStart && dateMoment.isSame(rangeStart)) {
          className.push(this.bem('day--' + rangeName + '-start'));
          className.push(this.bem('day--in-' + rangeName));

          if (!rangeEnd) {
            className.push(this.bem('day--' + rangeName + '-end'));
          }

          inRange = true;
        }

        if (rangeEnd && dateMoment.isSame(rangeEnd)) {
          className.push(this.bem('day--' + rangeName + '-end'));
          className.push(this.bem('day--in-' + rangeName));

          inRange = true;
        }

        if (!inRange && (0, _isInRange2.default)(dateMoment, range)) {
          className.push(this.bem('day--in-' + rangeName));

          inRange = true;
        }
      }

      if (range && range.length < 2 && hoverRange && (0, _isInRange2.default)(dateMoment, hoverRange)) {
        className.push(this.bem('day--in-hover-range'));

        if (dateMoment.isSame(hoverRange[0])) {
          className.push(this.bem('day--hover-range-start'));
        }

        if (dateMoment.isSame(hoverRange[1])) {
          className.push(this.bem('day--hover-range-end'));
        }
      }

      return {
        inRange: inRange,
        className: (0, _join2.default)(className)
      };
    }
  }, {
    key: 'prepareDayProps',
    value: function prepareDayProps(renderDayProps, props) {
      var timestamp = renderDayProps.timestamp;
      var dateMoment = renderDayProps.dateMoment;
      var className = renderDayProps.className;


      props = props || this.p;
      var result = {};

      var minMaxProps = this.prepareMinMaxProps(timestamp, props);
      var rangeProps = this.prepareRangeProps(dateMoment, props);

      var weekendClassName = this.prepareWeekendClassName(dateMoment, props);
      var prevNextClassName = this.preparePrevNextClassName(timestamp, props);

      var currentTimestamp = props.timestamp;

      (0, _objectAssign2.default)(result, minMaxProps, rangeProps, {
        children: _react2.default.createElement(
          'div',
          { className: this.bem('day-text') },
          renderDayProps.day
        ),
        className: (0, _join2.default)([minMaxProps.className, rangeProps.className, prevNextClassName, weekendClassName, timestamp == currentTimestamp ? this.bem('day--value') : null, timestamp == props.activeDate ? this.bem('day--active') : null, className])
      });

      if (!result.disabled && props.isDisabledDay) {
        result.disabled = props.isDisabledDay(renderDayProps, props);
      }

      return result;
    }
  }, {
    key: 'focus',
    value: function focus() {
      var domNode = (0, _reactDom.findDOMNode)(this);

      if (domNode) {
        domNode.focus();
      }
    }
  }, {
    key: 'onDayTextMouseEnter',
    value: function onDayTextMouseEnter(_ref2) {
      var dateMoment = _ref2.dateMoment;
      var timestamp = _ref2.timestamp;

      if (!this.state.focused) {
        this.focus();
      }

      this.onActiveDateChange({ dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'renderDay',
    value: function renderDay(renderProps) {
      var _this3 = this;

      var props = this.p;

      var _renderProps = renderProps;
      var dateMoment = _renderProps.dateMoment;
      var timestamp = _renderProps.timestamp;


      (0, _objectAssign2.default)(renderProps, this.prepareDayProps(renderProps, props));

      if (props.range && props.highlightRangeOnMouseMove) {
        renderProps.onMouseEnter = this.handleDayMouseEnter.bind(this, renderProps);
      }

      if (typeof props.onRenderDay === 'function') {
        renderProps = props.onRenderDay(renderProps);
      }

      if (renderProps.disabled) {
        renderProps.className = (0, _join2.default)(this.bem('day--disabled'), renderProps.className);
      } else {
        (function () {
          var eventParam = { dateMoment: dateMoment, timestamp: timestamp };

          var onClick = _this3.handleClick.bind(_this3, eventParam);
          var prevOnClick = renderProps.onClick;

          renderProps.onClick = prevOnClick ? function () {
            prevOnClick.apply(undefined, arguments);
            onClick.apply(undefined, arguments);
          } : onClick;

          if (props.activateOnHover && _this3.props.activeDate !== null) {
            (function () {
              var onMouseEnter = _this3.onDayTextMouseEnter.bind(_this3, eventParam);
              var prevOnMouseEnter = renderProps.onMouseEnter;

              renderProps.onMouseEnter = prevOnMouseEnter ? function () {
                prevOnMouseEnter.apply(undefined, arguments);
                onMouseEnter.apply(undefined, arguments);
              } : onMouseEnter;
            })();
          }
        })();
      }

      props.dayPropsMap[timestamp] = renderProps;

      var renderFunction = props.renderDay || RENDER_DAY;

      var result = renderFunction(renderProps);

      if (result === undefined) {
        result = RENDER_DAY(renderProps);
      }

      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.p = this.prepareProps(this.props);

      var basicViewProps = (0, _objectAssign2.default)({}, props);

      delete basicViewProps.activeDate;
      delete basicViewProps.activateOnHover;
      delete basicViewProps.arrows;

      delete basicViewProps.cleanup;
      delete basicViewProps.clockTabIndex;
      delete basicViewProps.constrainViewDate;
      delete basicViewProps.constrainActiveInView;
      delete basicViewProps.dayPropsMap;
      delete basicViewProps.date;
      delete basicViewProps.defaultActiveDate;
      delete basicViewProps.defaultDate;
      delete basicViewProps.defaultRange;
      delete basicViewProps.defaultViewDate;

      delete basicViewProps.enableHistoryView;

      delete basicViewProps.focusOnFooterMouseDown;
      delete basicViewProps.focusOnNavMouseDown;
      delete basicViewProps.footer;
      delete basicViewProps.footerClearDate;

      delete basicViewProps.getTransitionTime;

      delete basicViewProps.highlightRangeOnMouseMove;
      delete basicViewProps.highlightToday;
      delete basicViewProps.highlightWeekends;
      delete basicViewProps.hoverRange;

      delete basicViewProps.index;
      delete basicViewProps.insideField;
      delete basicViewProps.insideMultiView;
      delete basicViewProps.isDatePicker;
      delete basicViewProps.isDisabledDay;

      delete basicViewProps.maxConstrained;
      delete basicViewProps.maxDate;
      delete basicViewProps.maxDateMoment;
      delete basicViewProps.minConstrained;
      delete basicViewProps.minDate;
      delete basicViewProps.minDateMoment;

      delete basicViewProps.navBarArrows;
      delete basicViewProps.navNext;
      delete basicViewProps.navigation;
      delete basicViewProps.navigate;
      delete basicViewProps.navOnDateClick;
      delete basicViewProps.navPrev;
      delete basicViewProps.onActiveDateChange;
      delete basicViewProps.onChange;
      delete basicViewProps.onHoverRangeChange;
      delete basicViewProps.onRangeChange;
      delete basicViewProps.onViewDateChange;
      delete basicViewProps.onTransitionStart;

      delete basicViewProps.partialRange;
      delete basicViewProps.range;
      delete basicViewProps.rangeStart;
      delete basicViewProps.renderNavBar;

      delete basicViewProps.select;
      delete basicViewProps.showDaysAfterMonth;
      delete basicViewProps.showDaysBeforeMonth;

      delete basicViewProps.theme;

      delete basicViewProps.viewDate;
      delete basicViewProps.viewMonthEnd;
      delete basicViewProps.viewMonthStart;

      if (typeof props.cleanup == 'function') {
        props.cleanup(basicViewProps);
      }

      return _react2.default.createElement(_BasicMonthView2.default, _extends({
        tabIndex: 0
      }, basicViewProps, {

        renderChildren: this.renderChildren,

        onKeyDown: this.onViewKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur,

        renderDay: this.renderDay,
        viewMoment: props.viewMoment,
        onMouseLeave: props.highlightRangeOnMouseMove && this.handleViewMouseLeave
      }));
    }
  }, {
    key: 'handleViewMouseLeave',
    value: function handleViewMouseLeave(event) {
      if (this.props.onMouseLeave) {
        this.props.onMouseLeave(event);
      }

      if (this.state.hoverRange) {
        this.setHoverRange(null);
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(children) {
      var props = this.p;
      var navBar = this.renderNavBar(props);
      var footer = this.renderFooter(props);

      var result = [navBar, children, footer];

      if (props.renderChildren) {
        return props.renderChildren(result);
      }

      return result;
    }
  }, {
    key: 'focusFromFooter',
    value: function focusFromFooter() {
      if (!this.isFocused() && this.props.focusOnFooterMouseDown) {
        this.focus();
      }
    }
  }, {
    key: 'onFooterTodayClick',
    value: function onFooterTodayClick() {
      this.focusFromFooter();

      if (this.props.onFooterTodayClick) {
        if (this.props.onFooterTodayClick() === false) {
          return;
        }
      }

      this.select({ dateMoment: this.toMoment(Date.now()) });
    }
  }, {
    key: 'onFooterClearClick',
    value: function onFooterClearClick() {
      this.focusFromFooter();

      if (this.props.onFooterClearClick) {
        if (this.props.onFooterClearClick() === false) {
          return;
        }
      }

      this.select({ dateMoment: null });
    }
  }, {
    key: 'onFooterOkClick',
    value: function onFooterOkClick() {
      this.focusFromFooter();

      if (this.props.onFooterOkClick) {
        this.props.onFooterOkClick();
      }
    }
  }, {
    key: 'onFooterCancelClick',
    value: function onFooterCancelClick() {
      if (this.props.onFooterCancelClick) {
        this.props.onFooterCancelClick();
      }
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter(props) {
      return _renderFooter((0, _objectAssign2.default)({}, props, {
        selectDate: this.select,
        owner: this
      }), this);
    }
  }, {
    key: 'renderNavBar',
    value: function renderNavBar(props) {
      var _this4 = this;

      var theme = props.theme;

      var childNavBar = _react2.default.Children.toArray(props.children).filter(function (c) {
        return c && c.props && c.props.isDatePickerNavBar;
      })[0];

      var ref = function ref(navBar) {
        _this4.navBar = navBar;
      };

      if (!childNavBar) {
        if (props.navigation || props.renderNavBar) {
          return this.renderNavBarComponent((0, _assignDefined2.default)({
            // prevDisabled,
            // nextDisabled,
            minDate: props.minDate,
            maxDate: props.maxDate,
            theme: theme,
            secondary: true,
            date: props.moment,
            viewMoment: props.viewMoment,
            onViewDateChange: this.onNavViewDateChange,
            onMouseDown: this.onNavMouseDown,
            arrows: props.navBarArrows,
            ref: ref
          }, {
            enableHistoryView: props.enableHistoryView
          }));
        }

        return null;
      }

      var navBarProps = (0, _objectAssign2.default)({}, childNavBar.props, (0, _assignDefined2.default)({
        viewMoment: props.viewMoment,
        date: props.moment,
        theme: theme,
        ref: ref,
        minDate: props.minDate,
        maxDate: props.maxDate
      }, {
        enableHistoryView: props.enableHistoryView
      }));

      var prevOnViewDateChange = navBarProps.onViewDateChange;
      var onViewDateChange = this.onViewDateChange;

      if (prevOnViewDateChange) {
        onViewDateChange = function onViewDateChange() {
          prevOnViewDateChange.apply(undefined, arguments);
          _this4.onNavViewDateChange.apply(_this4, arguments);
        };
      }

      navBarProps.onViewDateChange = onViewDateChange;

      var prevOnMouseDown = navBarProps.onMouseDown;
      var onMouseDown = this.onNavMouseDown;

      if (prevOnMouseDown) {
        onMouseDown = function onMouseDown() {
          prevOnMouseDown.apply(undefined, arguments);
          _this4.onNavMouseDown.apply(_this4, arguments);
        };
      }

      navBarProps.onMouseDown = onMouseDown;

      if (navBarProps) {
        return this.renderNavBarComponent(navBarProps);
      }

      return null;
    }
  }, {
    key: 'onNavMouseDown',
    value: function onNavMouseDown(event) {
      if (this.props.focusOnNavMouseDown && !this.isFocused()) {
        this.focus();
      }
    }
  }, {
    key: 'renderNavBarComponent',
    value: function renderNavBarComponent(navBarProps) {
      if (this.props.renderNavBar) {
        return this.props.renderNavBar(navBarProps);
      }

      return _react2.default.createElement(_NavBar2.default, navBarProps);
    }
  }, {
    key: 'isFocused',
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: 'onFocus',
    value: function onFocus(event) {
      this.setState({
        focused: true
      });

      this.props.onFocus(event);
    }
  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      this.setState({
        focused: false
      });

      this.hideHistoryView();

      this.props.onBlur(event);
    }
  }, {
    key: 'showHistoryView',
    value: function showHistoryView() {
      if (this.navBar) {
        this.navBar.showHistoryView();
      }
    }
  }, {
    key: 'hideHistoryView',
    value: function hideHistoryView() {
      if (this.navBar) {
        this.navBar.hideHistoryView();
      }
    }
  }, {
    key: 'isHistoryViewVisible',
    value: function isHistoryViewVisible() {
      if (this.navBar) {
        return this.navBar.isHistoryViewVisible();
      }

      return false;
    }
  }, {
    key: 'tryNavBarKeyDown',
    value: function tryNavBarKeyDown(event) {
      if (this.navBar && this.navBar.getHistoryView) {
        var historyView = this.navBar.getHistoryView();

        if (historyView && historyView.onKeyDown) {
          historyView.onKeyDown(event);
          return true;
        }
      }

      return false;
    }
  }, {
    key: 'onViewKeyDown',
    value: function onViewKeyDown(event) {
      if (this.tryNavBarKeyDown(event)) {
        return;
      }

      return _onKeyDown2.default.call(this, event);
    }
  }, {
    key: 'confirm',
    value: function confirm(date, event) {
      event.preventDefault();

      if (this.props.confirm) {
        return this.props.confirm(date, event);
      }

      var dateMoment = this.toMoment(date);

      this.select({ dateMoment: dateMoment, timestamp: +dateMoment }, event);

      return undefined;
    }
  }, {
    key: 'navigate',
    value: function navigate(dir, event) {
      var _this5 = this;

      var props = this.p;

      var getNavigationDate = function getNavigationDate(dir, date, dateFormat) {
        var mom = _moment2.default.isMoment(date) ? date : _this5.toMoment(date, dateFormat);

        return typeof dir == 'function' ? dir(mom) : mom.add(dir, 'day');
      };

      if (props.navigate) {
        return props.navigate(dir, event, getNavigationDate);
      }

      event.preventDefault();

      if (props.activeDate) {
        var nextMoment = getNavigationDate(dir, props.activeDate);

        this.gotoViewDate({ dateMoment: nextMoment });
      }

      return undefined;
    }
  }, {
    key: 'handleDayMouseEnter',
    value: function handleDayMouseEnter(dayProps) {
      var props = this.p;

      var rangeStart = props.rangeStart;
      var range = props.range;


      var partial = !!(rangeStart && range.length < 2);

      if (partial) {
        this.setHoverRange((0, _clampRange2.default)([rangeStart, dayProps.dateMoment]));
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(_ref3, event) {
      var timestamp = _ref3.timestamp;
      var dateMoment = _ref3.dateMoment;

      var props = this.p;

      if (props.minDate && timestamp < props.minDate) {
        return;
      }

      if (props.maxDate && timestamp > props.maxDate) {
        return;
      }

      event.target.value = timestamp;

      this.select({ dateMoment: dateMoment, timestamp: timestamp }, event);
    }
  }, {
    key: 'select',
    value: function select(_ref4, event) {
      var dateMoment = _ref4.dateMoment;
      var timestamp = _ref4.timestamp;

      if (dateMoment && timestamp === undefined) {
        timestamp = +dateMoment;
      }

      if (this.props.select) {
        return this.props.select({ dateMoment: dateMoment, timestamp: timestamp }, event);
      }

      if (!timestamp) {
        timestamp = +dateMoment;
      }

      this.gotoViewDate({ dateMoment: dateMoment, timestamp: timestamp });

      var props = this.p;
      var range = props.range;

      if (range) {
        this.selectRange({ dateMoment: dateMoment, timestamp: timestamp }, event);
      } else {
        this.onChange({ dateMoment: dateMoment, timestamp: timestamp }, event);
      }

      return undefined;
    }
  }, {
    key: 'selectRange',
    value: function selectRange(_ref5, event) {
      var dateMoment = _ref5.dateMoment;
      var timestamp = _ref5.timestamp;

      var props = this.p;
      var range = props.range;
      var rangeStart = props.rangeStart;

      if (dateMoment == null) {
        this.setState({
          rangeStart: null
        });
        this.onRangeChange([], event);
        return;
      }

      if (!rangeStart) {
        this.setState({
          rangeStart: dateMoment
        });

        if (range.length == 2) {
          this.onRangeChange([], event);
        }
      } else {
        this.setState({
          rangeStart: null
        });

        this.onRangeChange((0, _clampRange2.default)([rangeStart, dateMoment]), event);
      }
    }
  }, {
    key: 'format',
    value: function format(mom) {
      return mom == null ? '' : mom.format(this.props.dateFormat);
    }
  }, {
    key: 'setHoverRange',
    value: function setHoverRange(hoverRange) {
      if (this.props.hoverRange === undefined) {
        this.setState({
          hoverRange: hoverRange
        });
      }

      if (this.props.onHoverRangeChange) {
        this.props.onHoverRangeChange(hoverRange);
      }
    }
  }, {
    key: 'onRangeChange',
    value: function onRangeChange(range, event) {
      var _this6 = this;

      this.setState({
        range: this.props.range === undefined ? range : null
      });

      this.setHoverRange(null);

      if (this.props.onRangeChange) {
        var newRange = range.map(function (m) {
          var dateMoment = _this6.toMoment(m);

          return {
            dateString: dateMoment.format(_this6.props.dateFormat),
            dateMoment: dateMoment,
            timestamp: +dateMoment
          };
        });

        var formatted = newRange.map(function (o) {
          return o.dateString;
        });

        this.props.onRangeChange(formatted, newRange, event);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(_ref6, event) {
      var dateMoment = _ref6.dateMoment;
      var timestamp = _ref6.timestamp;

      if (this.props.date === undefined) {
        this.setState({
          date: timestamp
        });
      }

      if (this.props.onChange) {
        var dateString = this.format(dateMoment);
        this.props.onChange(dateString, { dateMoment: dateMoment, timestamp: timestamp, dateString: dateString }, event);
      }
    }
  }, {
    key: 'onNavViewDateChange',
    value: function onNavViewDateChange(dateString, _ref7) {
      var dateMoment = _ref7.dateMoment;
      var timestamp = _ref7.timestamp;

      this.onViewDateChange({ dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'onViewDateChange',
    value: function onViewDateChange(_ref8) {
      var dateMoment = _ref8.dateMoment;
      var timestamp = _ref8.timestamp;

      var minDate = void 0;
      var maxDate = void 0;

      if (this.p.minDateMoment) {
        minDate = +this.toMoment(this.p.minDateMoment).startOf('month');
      }
      if (this.p.maxDateMoment) {
        maxDate = +this.toMoment(this.p.maxDateMoment).endOf('month');
      }
      if (this.props.constrainViewDate && !isDateInMinMax(timestamp, {
        minDate: minDate,
        maxDate: maxDate
      })) {
        return;
      }

      if (this.props.viewDate === undefined && this.props.navOnDateClick) {
        this.setState({
          viewDate: timestamp
        });
      }

      if (this.props.onViewDateChange) {
        var dateString = this.format(dateMoment);

        this.props.onViewDateChange(dateString, { dateMoment: dateMoment, dateString: dateString, timestamp: timestamp });
      }
    }
  }, {
    key: 'isValidActiveDate',
    value: function isValidActiveDate(date, props) {
      return _isValidActiveDate(date, props || this.p);
    }
  }, {
    key: 'onActiveDateChange',
    value: function onActiveDateChange(_ref9) {
      var dateMoment = _ref9.dateMoment;
      var timestamp = _ref9.timestamp;

      if (!_isValidActiveDate(timestamp, this.p)) {
        return;
      }

      var props = this.p;
      var range = props.range;

      if (range && props.rangeStart) {
        var newRange = (0, _clampRange2.default)([props.rangeStart, dateMoment]);

        if (props.partialRange) {
          this.onRangeChange(newRange);
        }

        this.setState({
          rangeStart: props.rangeStart,
          range: newRange
        });
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
    }
  }, {
    key: 'gotoViewDate',
    value: function gotoViewDate(_ref10) {
      var dateMoment = _ref10.dateMoment;
      var timestamp = _ref10.timestamp;

      if (!timestamp) {
        timestamp = dateMoment == null ? null : +dateMoment;
      }

      this.onViewDateChange({ dateMoment: dateMoment, timestamp: timestamp });
      this.onActiveDateChange({ dateMoment: dateMoment, timestamp: timestamp });
    }
  }]);

  return MonthView;
}(_reactClass2.default);

exports.default = MonthView;


MonthView.defaultProps = {
  defaultClassName: 'react-date-picker__month-view',
  dateFormat: 'YYYY-MM-DD',

  theme: 'default',

  onBlur: function onBlur() {},
  onFocus: function onFocus() {},

  footerClearDate: null,

  partialRange: true,

  activateOnHover: false,
  constrainActiveInView: false,

  showDaysBeforeMonth: true,
  showDaysAfterMonth: true,

  highlightWeekends: true,
  highlightToday: true,

  navOnDateClick: true,
  navigation: true,

  constrainViewDate: true,
  highlightRangeOnMouseMove: false,

  isDatePicker: true,

  enableHistoryView: true,
  focusOnNavMouseDown: true,
  focusOnFooterMouseDown: true
};

MonthView.propTypes = {
  navOnDateClick: _react.PropTypes.bool,
  isDisabledDay: _react.PropTypes.func,

  onChange: _react.PropTypes.func,
  onViewDateChange: _react.PropTypes.func,
  onActiveDateChange: _react.PropTypes.func
};

exports.NAV_KEYS = _navKeys2.default;
exports.renderFooter = _renderFooter;