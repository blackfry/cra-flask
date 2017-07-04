'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderNavBar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _reactFlex = require('react-flex');

var _reactInlineBlock = require('react-inline-block');

var _reactInlineBlock2 = _interopRequireDefault(_reactInlineBlock);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _clampRange = require('./clampRange');

var _clampRange2 = _interopRequireDefault(_clampRange);

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _toMoment = require('./toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _isInRange2 = require('./utils/isInRange');

var _isInRange3 = _interopRequireDefault(_isInRange2);

var _BasicMonthView = require('./BasicMonthView');

var _MonthView = require('./MonthView');

var _MonthView2 = _interopRequireDefault(_MonthView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var times = function times(count) {
  return [].concat(_toConsumableArray(new Array(count))).map(function (v, i) {
    return i;
  });
};

var prepareDate = function prepareDate(props, state) {
  if (props.range) {
    return null;
  }

  return props.date === undefined ? state.date : props.date;
};

var prepareViewDate = function prepareViewDate(props, state) {
  return props.viewDate === undefined ? state.viewDate : state.propViewDate || props.viewDate;
};

var prepareRange = function prepareRange(props, state) {
  return props.range && props.range.length ? props.range : state.range;
};

var prepareActiveDate = function prepareActiveDate(props, state) {
  var fallbackDate = prepareDate(props, state) || (prepareRange(props, state) || [])[0];

  var activeDate = props.activeDate === undefined ?
  // only fallback to date if activeDate not specified
  state.activeDate || fallbackDate : props.activeDate;

  if (activeDate && props.inViewStart && props.inViewEnd && props.constrainActiveInView) {
    var activeMoment = this.toMoment(activeDate);

    if (!(0, _isInRange3.default)(activeMoment, [props.inViewStart, props.inViewEnd])) {
      var date = fallbackDate;
      var dateMoment = this.toMoment(date);

      if (date && (0, _isInRange3.default)(dateMoment, [props.inViewStart, props.inViewEnd])) {
        return date;
      }

      return null;
    }
  }

  return activeDate;
};

var prepareViews = function prepareViews(props) {
  var daysInView = [];

  var viewMoments = [];

  var viewMoment = props.viewMoment;

  var index = 0;
  var size = props.size;

  while (index < size) {
    var mom = this.toMoment(viewMoment).startOf('day').add(index, 'month');
    var days = (0, _BasicMonthView.getDaysInMonthView)(mom, props);

    viewMoments.push(mom);
    daysInView.push(days);

    index++;
  }

  props.daysInView = daysInView;
  props.viewMoments = viewMoments;

  var lastViewDays = daysInView[size - 1];

  props.inViewStart = daysInView[0][0];
  props.inViewEnd = lastViewDays[lastViewDays.length - 1];
};

var _renderNavBar = function _renderNavBar(config, navBarProps) {
  var props = this.props;
  var index = config.index;
  var viewMoment = config.viewMoment;


  navBarProps = (0, _objectAssign2.default)({}, navBarProps, {
    secondary: true,

    minDate: config.minDate || props.minDate,
    maxDate: config.maxDate || props.maxDate,

    renderNavNext: config.renderHiddenNav || this.renderHiddenNav,
    renderNavPrev: config.renderHiddenNav || this.renderHiddenNav,

    viewMoment: viewMoment,

    onViewDateChange: config.onViewDateChange || this.onNavViewDateChange,
    onUpdate: config.onUpdate || this.updateViewMoment,

    enableHistoryView: props.enableHistoryView
  });

  if (index == 0) {
    delete navBarProps.renderNavPrev;
  }

  if (index == props.perRow - 1) {
    delete navBarProps.renderNavNext;
  }

  return _react2.default.createElement(_NavBar2.default, navBarProps);
};

exports.renderNavBar = _renderNavBar;

var MultiMonthView = function (_Component) {
  _inherits(MultiMonthView, _Component);

  function MultiMonthView(props) {
    _classCallCheck(this, MultiMonthView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MultiMonthView).call(this, props));

    _this.state = {
      hoverRange: null,
      range: props.defaultRange,
      date: props.defaultDate,
      activeDate: props.defaultActiveDate,
      viewDate: props.defaultViewDate
    };
    return _this;
  }

  _createClass(MultiMonthView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateToMoment(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.locale != this.props.locale || nextProps.dateFormat != this.props.dateFormat) {
        this.updateToMoment(nextProps);
      }

      // if (nextProps.viewDate && !nextProps.forceViewUpdate){

      //   //this is here in order not to change view if already in view
      //   const viewMoment = this.toMoment(nextProps.viewDate)

      //   if (this.isInRange(viewMoment) && !nextProps.forceViewUpdate){
      //     console.log(this.format(viewMoment), this.format(this.p.viewStart),
      // this.format(this.p.viewEnd))
      //     this.setState({
      //       propViewDate: this.p.viewMoment
      //     })
      //   } else {
      //     debugger
      //     this.setState({
      //       propViewDate: null
      //     })
      //   }
      // }
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
    value: function prepareProps(thisProps, state) {
      var _this2 = this;

      var props = (0, _objectAssign2.default)({}, thisProps);
      state = state || this.state;

      props.viewMoment = this.toMoment(prepareViewDate(props, state));

      // viewStart is the first day of the first month displayed
      // viewEnd is the last day of the last month displayed
      props.viewStart = this.toMoment(props.viewMoment).startOf('month');
      props.viewEnd = this.toMoment(props.viewStart).add(props.size - 1, 'month').endOf('month');

      // but we also have inViewStart, which can be a day before viewStart
      // which is in displayed as belonging to the prev month
      // but is displayed in the current view since it's on the same week
      // as viewStart
      //
      // same for inViewEnd, which is a day after viewEnd - the last day in the same week
      prepareViews.call(this, props);

      var activeDate = prepareActiveDate.call(this, props, state);

      if (activeDate) {
        props.activeDate = +this.toMoment(activeDate);
      }

      props.date = prepareDate(props, state);

      if (!props.date) {
        var range = prepareRange(props, state);

        if (range) {
          props.range = range.map(function (d) {
            return _this2.toMoment(d).startOf('day');
          });
          props.rangeStart = state.rangeStart || (props.range.length == 1 ? props.range[0] : null);
        }
      }

      return props;
    }
  }, {
    key: 'render',
    value: function render() {
      this.views = [];
      var props = this.p = this.prepareProps(this.props, this.state);
      var size = props.size;

      var rowCount = Math.ceil(size / props.perRow);
      var children = times(rowCount).map(this.renderRow).filter(function (x) {
        return !!x;
      });

      var className = (0, _join2.default)(props.className, 'react-date-picker__multi-month-view', props.theme && 'react-date-picker__multi-month-view--theme-' + props.theme);

      var footer = (0, _MonthView.renderFooter)(props, this);

      if (footer) {
        children.push(footer);
      }

      var flexProps = (0, _objectAssign2.default)({}, props);

      delete flexProps.activeDate;
      delete flexProps.clockTabIndex;
      delete flexProps.constrainActiveInView;
      delete flexProps.constrainViewDate;
      delete flexProps.date;
      delete flexProps.dateFormat;
      delete flexProps.daysInView;
      delete flexProps.defaultRange;
      delete flexProps.enableHistoryView;
      delete flexProps.footer;
      delete flexProps.footerClearDate;
      delete flexProps.forceViewUpdate;
      delete flexProps.highlightRangeOnMouseMove;
      delete flexProps.inViewEnd;
      delete flexProps.inViewStart;
      delete flexProps.isDatePicker;
      delete flexProps.locale;
      delete flexProps.navigation;
      delete flexProps.onViewDateChange;
      delete flexProps.perRow;
      delete flexProps.range;
      delete flexProps.rangeStart;
      delete flexProps.renderNavBar;
      delete flexProps.theme;
      delete flexProps.viewDate;
      delete flexProps.viewEnd;
      delete flexProps.viewMoment;
      delete flexProps.viewMoments;
      delete flexProps.viewStart;

      return _react2.default.createElement(_reactFlex.Flex, _extends({
        column: true,
        inline: true,
        alignItems: 'stretch',
        wrap: false
      }, flexProps, {
        className: className,
        children: children
      }));
    }
  }, {
    key: 'renderRow',
    value: function renderRow(rowIndex) {
      var _this3 = this;

      var props = this.p;
      var viewProps = (0, _objectAssign2.default)({}, this.p);

      delete viewProps.forceViewUpdate;
      delete viewProps.index;
      delete viewProps.inViewEnd;
      delete viewProps.inViewStart;
      delete viewProps.navigate;
      delete viewProps.perRow;
      delete viewProps.viewEnd;
      delete viewProps.viewMoments;
      delete viewProps.viewStart;

      var children = times(props.perRow).map(function (i) {
        var index = rowIndex * props.perRow + i;

        if (index >= props.size) {
          return null;
        }

        return _this3.renderView(viewProps, index, props.size);
      });

      return _react2.default.createElement(_reactFlex.Flex, { inline: true, row: true, wrap: false, children: children });
    }
  }, {
    key: 'renderView',
    value: function renderView(viewProps, index, size) {
      var _this4 = this;

      var props = this.p;
      var viewMoment = props.viewMoments[index];

      var range = void 0;

      if (props.range) {
        range = props.rangeStart && props.range.length == 0 ? [props.rangeStart] : props.range;
      }

      return _react2.default.createElement(_MonthView2.default, _extends({
        ref: function ref(view) {
          _this4.views[index] = view;
        },
        constrainViewDate: false
      }, viewProps, {

        className: null,

        index: index,

        footer: false,
        constrainActiveInView: false,

        navigate: this.onMonthNavigate.bind(this, index),
        hoverRange: this.state.hoverRange,
        onHoverRangeChange: this.setHoverRange,

        activeDate: props.activeDate,

        onActiveDateChange: this.onActiveDateChange,
        onViewDateChange: this.onAdjustViewDateChange,

        date: props.date,
        defaultDate: null,
        onChange: this.onChange,

        range: range,
        defaultRange: null,
        onRangeChange: this.onRangeChange,

        viewMoment: viewMoment,

        insideMultiView: true,

        daysInView: props.daysInView[index],

        showDaysBeforeMonth: index == 0,
        showDaysAfterMonth: index == size - 1,

        select: this.select,

        renderNavBar: this.props.navigation && (this.props.renderNavBar || this.renderNavBar).bind(this, { index: index, viewMoment: viewMoment })
      }));
    }
  }, {
    key: 'onFooterTodayClick',
    value: function onFooterTodayClick() {
      this.views[0].onFooterTodayClick();
    }
  }, {
    key: 'onFooterClearClick',
    value: function onFooterClearClick() {
      this.views[0].onFooterClearClick();
    }
  }, {
    key: 'onFooterOkClick',
    value: function onFooterOkClick() {
      this.views[0].onFooterOkClick();
    }
  }, {
    key: 'onFooterCancelClick',
    value: function onFooterCancelClick() {
      this.views[0].onFooterCancelClick();
    }
  }, {
    key: 'isFocused',
    value: function isFocused() {
      var firstView = this.views[0];

      if (firstView) {
        return firstView.isFocused();
      }

      return false;
    }
  }, {
    key: 'focus',
    value: function focus() {
      var firstView = this.views[0];

      if (firstView) {
        firstView.focus();
      }
    }
  }, {
    key: 'setHoverRange',
    value: function setHoverRange(hoverRange) {
      this.setState({
        hoverRange: hoverRange
      });
    }
  }, {
    key: 'select',
    value: function select(_ref) {
      var dateMoment = _ref.dateMoment;
      var timestamp = _ref.timestamp;

      // if (!dateMoment) {
      //   return
      // }

      var props = this.p;

      var visibleRange = [props.inViewStart, props.inViewEnd];

      // TODO check why this was needed
      // if (!isInRange(dateMoment, { range: visibleRange, inclusive: true })) {
      //   return
      // }

      this.onAdjustViewDateChange({ dateMoment: dateMoment, timestamp: timestamp });
      this.onActiveDateChange({ dateMoment: dateMoment, timestamp: timestamp });

      var range = props.range;

      if (range) {
        this.selectRange({ dateMoment: dateMoment, timestamp: timestamp });
      } else {
        this.onChange({ dateMoment: dateMoment, timestamp: timestamp }, event);
      }
    }
  }, {
    key: 'selectRange',
    value: function selectRange(_ref2) {
      var dateMoment = _ref2.dateMoment;
      var timestamp = _ref2.timestamp;

      return _MonthView2.default.prototype.selectRange.call(this, { dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'onRangeChange',
    value: function onRangeChange(range) {
      return _MonthView2.default.prototype.onRangeChange.call(this, range);
    }
  }, {
    key: 'onViewKeyDown',
    value: function onViewKeyDown() {
      var view = this.views[0];
      if (view) {
        view.onViewKeyDown.apply(view, arguments);
      }
    }
  }, {
    key: 'renderNavBar',
    value: function renderNavBar(config, navBarProps) {
      return _renderNavBar.call(this, config, navBarProps);
    }
  }, {
    key: 'onMonthNavigate',
    value: function onMonthNavigate(index, dir, event, getNavigationDate) {
      var props = this.p;

      event.preventDefault();

      if (!props.activeDate) {
        return;
      }

      var key = event.key;

      var homeEndDate = key == 'Home' ? props.viewStart : props.viewEnd;

      var mom = key == 'Home' || key == 'End' ? homeEndDate : props.activeDate;

      var nextMoment = getNavigationDate(dir, this.toMoment(mom));

      var viewMoment = this.toMoment(nextMoment);

      this.onActiveDateChange({
        dateMoment: nextMoment,
        timestamp: +nextMoment
      });

      if (this.isInRange(viewMoment)) {
        return;
      }

      if (viewMoment.isAfter(props.viewEnd)) {
        viewMoment.add(-props.size + 1, 'month');
      }

      this.onViewDateChange({
        dateMoment: viewMoment,
        timestamp: +viewMoment
      });
    }
  }, {
    key: 'onAdjustViewDateChange',
    value: function onAdjustViewDateChange(_ref3) {
      var dateMoment = _ref3.dateMoment;
      var timestamp = _ref3.timestamp;

      var props = this.p;

      var update = dateMoment == null;

      if (dateMoment && dateMoment.isAfter(props.viewEnd)) {
        dateMoment = this.toMoment(dateMoment).add(-props.size + 1, 'month');
        timestamp = +dateMoment;
        update = true;
      } else if (dateMoment && dateMoment.isBefore(props.viewStart)) {
        update = true;
      }

      if (update) {
        this.onViewDateChange({ dateMoment: dateMoment, timestamp: timestamp });
      }
    }
  }, {
    key: 'updateViewMoment',
    value: function updateViewMoment(dateMoment, dir) {
      var sign = dir < 0 ? -1 : 1;
      var abs = Math.abs(dir);

      var newMoment = this.toMoment(this.p.viewStart);

      newMoment.add(sign, abs == 1 ? 'month' : 'year');

      return newMoment;
    }
  }, {
    key: 'renderHiddenNav',
    value: function renderHiddenNav(props) {
      return _react2.default.createElement(_reactInlineBlock2.default, _extends({}, props, { style: { visibility: 'hidden' } }));
    }
  }, {
    key: 'isInRange',
    value: function isInRange(moment) {
      return (0, _isInRange3.default)(moment, [this.p.viewStart, this.p.viewEnd]);
    }
  }, {
    key: 'isInView',
    value: function isInView(moment) {
      return this.isInRange(moment);
    }
  }, {
    key: 'onNavViewDateChange',
    value: function onNavViewDateChange(dateString, _ref4) {
      var dateMoment = _ref4.dateMoment;
      var timestamp = _ref4.timestamp;

      this.onViewDateChange({ dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'onViewDateChange',
    value: function onViewDateChange(_ref5) {
      var dateMoment = _ref5.dateMoment;
      var timestamp = _ref5.timestamp;

      if (this.props.viewDate === undefined) {
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
    key: 'onActiveDateChange',
    value: function onActiveDateChange(_ref6) {
      var dateMoment = _ref6.dateMoment;
      var timestamp = _ref6.timestamp;

      var valid = this.views.reduce(function (isValid, view) {
        return isValid && view.isValidActiveDate(timestamp);
      }, true);

      if (!valid) {
        return;
      }

      var props = this.p;
      var range = props.range;

      if (range && props.rangeStart) {
        this.setState({
          rangeStart: props.rangeStart,
          range: (0, _clampRange2.default)([props.rangeStart, dateMoment])
        });
      }

      if (this.props.activeDate === undefined) {
        this.setState({
          activeDate: timestamp
        });
      }

      if (this.props.onActiveDateChange) {
        var dateString = this.format(dateMoment);
        this.props.onActiveDateChange(dateString, { dateMoment: dateMoment, dateString: dateString, timestamp: timestamp });
      }
    }
  }, {
    key: 'gotoViewDate',
    value: function gotoViewDate(_ref7) {
      var dateMoment = _ref7.dateMoment;
      var timestamp = _ref7.timestamp;

      if (!timestamp) {
        timestamp = +dateMoment;
      }

      this.onViewDateChange({ dateMoment: dateMoment, timestamp: timestamp });
      this.onActiveDateChange({ dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'format',
    value: function format(mom) {
      return mom == null ? '' : mom.format(this.props.dateFormat);
    }
  }, {
    key: 'onChange',
    value: function onChange(_ref8, event) {
      var dateMoment = _ref8.dateMoment;
      var timestamp = _ref8.timestamp;

      if (this.props.date === undefined) {
        this.setState({
          date: timestamp
        });
      }

      if (this.props.onChange) {
        var dateString = this.format(dateMoment);
        this.props.onChange(dateString, { dateMoment: dateMoment, dateString: dateString, timestamp: timestamp }, event);
      }
    }
  }, {
    key: 'getViewSize',
    value: function getViewSize() {
      return this.props.size;
    }
  }]);

  return MultiMonthView;
}(_reactClass2.default);

exports.default = MultiMonthView;


MultiMonthView.defaultProps = {
  perRow: 2,
  size: 2,

  enableHistoryView: true,

  footerClearDate: null,

  isDatePicker: true,
  forceViewUpdate: false,

  navigation: true,
  theme: 'default',

  constrainActiveInView: true,

  dateFormat: 'YYYY-MM-DD'
};

MultiMonthView.propTypes = {};