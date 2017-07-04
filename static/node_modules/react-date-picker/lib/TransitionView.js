'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _toMoment2 = require('./toMoment');

var _toMoment3 = _interopRequireDefault(_toMoment2);

var _forwardTime = require('./utils/forwardTime');

var _forwardTime2 = _interopRequireDefault(_forwardTime);

var _getTransitionEnd = require('./getTransitionEnd');

var _getTransitionEnd2 = _interopRequireDefault(_getTransitionEnd);

var _assignDefined = require('./assignDefined');

var _assignDefined2 = _interopRequireDefault(_assignDefined);

var _MonthView = require('./MonthView');

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _reactFlex = require('react-flex');

var _times = require('./utils/times');

var _times2 = _interopRequireDefault(_times);

var _reactInlineBlock = require('react-inline-block');

var _reactInlineBlock2 = _interopRequireDefault(_reactInlineBlock);

var _reactStyleNormalizer = require('react-style-normalizer');

var _reactStyleNormalizer2 = _interopRequireDefault(_reactStyleNormalizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderHiddenNav = function renderHiddenNav(props) {
  return _react2.default.createElement(_reactInlineBlock2.default, _extends({}, props, { style: { visibility: 'hidden' } }));
};

var joinFunctions = function joinFunctions(a, b) {
  if (a && b) {
    return function () {
      a.apply(undefined, arguments);
      b.apply(undefined, arguments);
    };
  }

  return a || b;
};

var TRANSITION_DURATION = '0.4s';

var TransitionView = function (_Component) {
  _inherits(TransitionView, _Component);

  function TransitionView(props) {
    _classCallCheck(this, TransitionView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TransitionView).call(this, props));

    var child = _react2.default.Children.toArray(_this.props.children)[0];
    var childProps = child.props;

    var viewDate = props.viewDate || props.defaultViewDate || props.defaultDate || props.date || childProps.viewDate || childProps.defaultViewDate || childProps.defaultDate || childProps.date;

    var dateFormat = props.dateFormat || childProps.dateFormat;
    var locale = props.locale || childProps.locale;

    _this.state = {
      rendered: false,
      viewDate: _this.toMoment(viewDate, { dateFormat: dateFormat, locale: locale })
    };
    return _this;
  }

  _createClass(TransitionView, [{
    key: 'toMoment',
    value: function toMoment(value, props) {
      props = props || this.props;

      return (0, _toMoment3.default)(value, {
        locale: props.locale,
        dateFormat: props.dateFormat
      });
    }
  }, {
    key: 'format',
    value: function format(mom, props) {
      props = props || this.props;
      return mom.format(props.dateFormat);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        rendered: true
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.viewDate) {
        // this is in order to transition when the prop changes
        // if we were to simply do setState({ viewDate }) it wouldn't have had a transition
        this.transitionTo(nextProps.viewDate, nextProps);
      }
    }
  }, {
    key: 'transitionTo',
    value: function transitionTo(date, props) {
      props = props || this.props;

      var dateMoment = this.toMoment(date, props);

      this.doTransition(dateMoment);
    }
  }, {
    key: 'getViewChild',
    value: function getViewChild() {
      return _react2.default.Children.toArray(this.props.children).filter(function (c) {
        return c && c.props && c.props.isDatePicker;
      })[0];
    }
  }, {
    key: 'prepareChildProps',
    value: function prepareChildProps(child, extraProps) {
      if (this.view) {
        return this.view.p;
      }

      child = child || this.getViewChild();

      return (0, _objectAssign2.default)({}, child.props, extraProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;

      var child = this.child = this.getViewChild();

      var viewDate = this.state.viewDate || props.viewMoment || props.viewDate;

      var renderedChildProps = this.renderedChildProps = this.prepareChildProps(child, (0, _assignDefined2.default)({
        viewDate: viewDate
      }));

      viewDate = this.state.viewDate || renderedChildProps.viewMoment || renderedChildProps.viewDate;

      if (!this.state.transition) {
        this.viewDate = viewDate;
      }

      var multiView = !!(child.props.size && child.props.size >= 2);

      var onViewDateChange = joinFunctions(this.onViewDateChange, props.onViewDateChange);

      // TODO make transition view pass all props, as is to child component
      var newProps = {
        key: 'picker',
        ref: function ref(v) {
          _this2.view = v;
        },

        viewDate: this.viewDate,
        onViewDateChange: onViewDateChange,
        navigation: multiView,
        constrainActiveInView: props.constrainActiveInView,

        className: (0, _join2.default)(child.props.className, 'react-date-picker__center')
      };

      // only pass those down if they have been specified
      // as props on this TransitionView
      (0, _assignDefined2.default)(newProps, {
        // tabIndex: -1,
        range: props.range,
        date: props.date,
        activeDate: props.activeDate,
        footer: false,
        insideField: props.insideField,

        defaultRange: props.defaultRange,
        defaultDate: props.defaultDate,
        defaultActiveDate: props.defaultActiveDate,

        // this is here in order to ensure time changes are reflected
        // when using a TransitionView inside a DateField
        onTimeChange: props.onTimeChange,
        onClockInputBlur: props.onClockInputBlur,
        onClockInputFocus: props.onClockInputFocus,
        onClockEnterKey: props.onClockEnterKey,
        onClockEscapeKey: props.onClockEscapeKey,
        showClock: props.showClock,

        tabIndex: props.tabIndex,

        dateFormat: props.dateFormat,
        locale: props.locale,
        theme: props.theme,

        minDate: props.minDate,
        maxDate: props.maxDate,
        onKeyDown: this.onKeyDown,
        onBlur: this.onBlur
      });

      if (props.onChange) {
        newProps.onChange = joinFunctions(props.onChange, renderedChildProps.onChange);
      }
      if (props.onRangeChange) {
        newProps.onRangeChange = joinFunctions(props.onRangeChange, renderedChildProps.onRangeChange);
      }

      if (props.onActiveDateChange) {
        newProps.onActiveDateChange = joinFunctions(props.onActiveDateChange, renderedChildProps.onActiveDateChange);
      }

      if (this.state.transition) {
        this.transitionDurationStyle = (0, _reactStyleNormalizer2.default)({
          transitionDuration: props.transitionDuration || TRANSITION_DURATION
        });

        newProps.style = (0, _objectAssign2.default)({}, child.props.style, this.transitionDurationStyle);

        newProps.className = (0, _join2.default)(newProps.className, 'react-date-picker--transition', 'react-date-picker--transition-' + (this.state.transition == -1 ? 'left' : 'right'));
      }

      var navBar = void 0;

      var navBarProps = {
        minDate: props.minDate || renderedChildProps.minDate,
        maxDate: props.maxDate || renderedChildProps.maxDate,
        enableHistoryView: props.enableHistoryView === undefined ? renderedChildProps.enableHistoryView : props.enableHistoryView,
        secondary: true,
        viewDate: this.nextViewDate || this.viewDate,
        onViewDateChange: onViewDateChange,
        multiView: multiView
      };

      if (props.navigation) {
        navBar = this.renderNavBar((0, _objectAssign2.default)({}, navBarProps, { mainNavBar: true }));
      }

      var footer = void 0;

      if (props.footer) {
        footer = (0, _MonthView.renderFooter)(props, props.insideField ? props : this.view);
      }

      if (multiView) {
        newProps.renderNavBar = this.renderMultiViewNavBar.bind(this, navBarProps);
      }

      var clone = _react2.default.cloneElement(child, newProps);

      var flexProps = (0, _objectAssign2.default)({}, props);

      delete flexProps.constrainActiveInView;
      delete flexProps.enableHistoryView;
      delete flexProps.focusOnNavMouseDown;
      delete flexProps.focusOnTransitionEnd;
      delete flexProps.footerClearDate;
      delete flexProps.isDatePicker;
      delete flexProps.navigation;
      delete flexProps.onTransitionEnd;
      delete flexProps.onTransitionStart;
      delete flexProps.theme;

      return _react2.default.createElement(
        _reactFlex.Flex,
        _extends({
          column: true,
          inline: true,
          wrap: false,
          alignItems: 'stretch'
        }, flexProps, {
          className: (0, _join2.default)(props.className, 'react-date-picker__transition-month-view', props.theme && 'react-date-picker__transition-month-view--theme-' + props.theme)
        }),
        navBar,
        _react2.default.createElement(
          _reactFlex.Flex,
          { inline: true, row: true, style: { position: 'relative' } },
          this.renderAt(-1, { multiView: multiView, navBarProps: navBarProps }),
          clone,
          this.renderAt(1, { multiView: multiView, navBarProps: navBarProps })
        ),
        footer
      );
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
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      var initialKeyDown = this.child.onKeyDown;

      if (this.tryNavBarKeyDown(event)) {
        return false;
      }

      if (initialKeyDown) {
        return initialKeyDown(event);
      }
    }
  }, {
    key: 'isHistoryViewVisible',
    value: function isHistoryViewVisible() {
      if (this.navBar && this.navBar.isHistoryViewVisible) {
        return this.navBar.isHistoryViewVisible();
      }

      return false;
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
    key: 'onBlur',
    value: function onBlur(event) {
      var initialBlur = this.child.onBlur;

      this.hideHistoryView();

      if (initialBlur) {
        initialBlur(event);
      }

      return true;
    }

    /**
     * This method is only called when rendering the NavBar of the MonthViews
     * that are not on the first row of the MultiMonthView
     *
     * @param  {Object} navBarProps
     * @param  {Object} config
     * @return {ReactNode}
     */

  }, {
    key: 'renderMultiViewNavBar',
    value: function renderMultiViewNavBar(navBarProps, config) {
      var index = config.index;

      var count = this.child.props.perRow;

      if (index >= count) {
        var viewDate = this.toMoment(navBarProps.viewDate).add(index, 'month');

        return _react2.default.createElement(_NavBar2.default, _extends({}, navBarProps, {
          renderNavNext: renderHiddenNav,
          renderNavPrev: renderHiddenNav,
          onViewDateChange: null,
          viewDate: this.toMoment(viewDate)
        }));
      }

      return null;
    }
  }, {
    key: 'renderNavBar',
    value: function renderNavBar(navBarProps) {
      var _this3 = this;

      navBarProps = (0, _objectAssign2.default)({}, navBarProps);

      if (navBarProps.mainNavBar) {
        navBarProps.ref = function (navBar) {
          _this3.navBar = navBar;
        };
        navBarProps.onMouseDown = this.onNavMouseDown;
      }

      var props = this.props;
      var _navBarProps = navBarProps;
      var multiView = _navBarProps.multiView;


      var navBar = _react2.default.Children.toArray(props.children).filter(function (c) {
        return c && c.props && c.props.isDatePickerNavBar;
      })[0];

      var newProps = navBarProps;

      if (navBar) {
        newProps = (0, _objectAssign2.default)({}, navBarProps, navBar.props);

        // have viewDate & onViewDateChange win over initial navBar.props
        newProps.viewDate = navBarProps.viewDate;
        newProps.onViewDateChange = navBarProps.onViewDateChange;
      }

      if (multiView) {
        var _ret = function () {
          var count = _this3.child.props.perRow;
          var viewSize = _this3.getViewSize();

          var bars = (0, _times2.default)(count).map(function (index) {
            var onUpdate = function onUpdate(dateMoment, dir) {
              var mom = _this3.toMoment(newProps.viewDate);

              if (Math.abs(dir) == 1) {
                mom.add(dir * viewSize, 'month');
              } else {
                var sign = dir > 0 ? 1 : -1;

                mom.add(sign, 'year');
              }

              return mom;
            };

            var barProps = (0, _objectAssign2.default)({}, newProps, {
              onUpdate: onUpdate,
              renderNavNext: renderHiddenNav,
              renderNavPrev: renderHiddenNav,
              viewDate: _this3.toMoment(newProps.viewDate).add(index, 'month')
            });

            if (index == 0) {
              delete barProps.renderNavPrev;
            }
            if (index == count - 1) {
              delete barProps.renderNavNext;
            }

            return _react2.default.createElement(_NavBar2.default, _extends({ flex: true }, barProps));
          });

          return {
            v: _react2.default.createElement(_reactFlex.Flex, { row: true, children: bars })
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }

      return navBar ? _react2.default.cloneElement(navBar, newProps) : _react2.default.createElement(_NavBar2.default, newProps);
    }
  }, {
    key: 'getViewSize',
    value: function getViewSize() {
      return this.view && this.view.getViewSize ? this.view.getViewSize() || 1 : 1;
    }
  }, {
    key: 'renderAt',
    value: function renderAt(index, _ref) {
      var multiView = _ref.multiView;
      var navBarProps = _ref.navBarProps;

      if (!this.state.rendered || !this.view) {
        // || this.state.prepareTransition != -index ) {
        return null;
      }

      var viewSize = this.getViewSize();
      var viewDiff = viewSize * index;

      var childProps = this.child.props;
      var renderedProps = this.renderedChildProps;

      var viewDate = this.toMoment(this.viewDate).add(viewDiff, 'month');

      if (this.nextViewDate && this.state.prepareTransition == -index) {
        // we're transitioning to this viewDate, so make sure
        // it renders the date we'll need at the end of the transition
        viewDate = this.nextViewDate;
      }

      var date = renderedProps.date || renderedProps.moment;

      if (this.state.transitionTime) {
        date = (0, _forwardTime2.default)(this.state.transitionTime, this.toMoment(date));
        // console.log('date.format', date.format('HH:mm'));
      }

      var newProps = (0, _objectAssign2.default)({
        date: date,
        readOnly: true,
        range: renderedProps.range,
        activeDate: renderedProps.activeDate,
        dateFormat: renderedProps.dateFormat,
        locale: renderedProps.locale,
        tabIndex: -1,
        clockTabIndex: -1,
        navigation: multiView,
        viewDate: viewDate,
        key: index,
        footer: false,
        className: (0, _join2.default)(childProps.className, 'react-date-picker__' + (index == -1 ? 'prev' : 'next'))
      });

      (0, _assignDefined2.default)(newProps, {
        showClock: renderedProps.showClock,
        minDate: renderedProps.minDate,
        maxDate: renderedProps.maxDate
      });

      if (this.state.transition && this.state.transition != index) {
        newProps.style = (0, _objectAssign2.default)({}, childProps.style, this.transitionDurationStyle);
        newProps.className = (0, _join2.default)(newProps.className, 'react-date-picker--transition', 'react-date-picker--transition-' + (this.state.transition == -1 ? 'left' : 'right'));
      }

      if (multiView) {
        newProps.renderNavBar = this.renderMultiViewNavBar.bind(this, (0, _objectAssign2.default)({}, navBarProps, { viewDate: viewDate, onViewDateChange: null }));
      }

      return _react2.default.cloneElement(this.child, newProps);
    }
  }, {
    key: 'getView',
    value: function getView() {
      return this.view;
    }
  }, {
    key: 'isInView',
    value: function isInView() {
      var _view;

      return (_view = this.view).isInView.apply(_view, arguments);
    }
  }, {
    key: 'onViewDateChange',
    value: function onViewDateChange(dateString, _ref2) {
      var dateMoment = _ref2.dateMoment;

      this.doTransition(dateMoment);
    }
  }, {
    key: 'doTransition',
    value: function doTransition(dateMoment) {
      var _this4 = this;

      if (this.state.transition) {
        // this.nextViewDate = dateMoment
        return;
      }
      // to protect of null, which will default to current date
      dateMoment = this.toMoment(dateMoment);

      var newMoment = this.toMoment(dateMoment).startOf('month');
      var viewMoment = this.toMoment(this.viewDate).startOf('month');

      if (newMoment.format('YYYY-MM') == viewMoment.format('YYYY-MM')) {
        return;
      }

      var navNext = newMoment.isAfter(viewMoment);
      var transition = navNext ? -1 : 1;
      var viewSize = this.getViewSize();

      if (Math.abs(viewSize) > 1) {
        var temp = this.toMoment(viewMoment).add(viewSize * -transition, 'month');

        if (navNext) {
          dateMoment = dateMoment.isAfter(temp) ? dateMoment : temp;
        } else {
          dateMoment = dateMoment.isBefore(temp) ? dateMoment : temp;
        }
      }

      var transitionTime = this.props.getTransitionTime ? this.props.getTransitionTime() : null;

      this.setState({
        transitionTime: transitionTime,
        prepareTransition: transition
      }, function () {
        setTimeout(function () {
          // in order to allow this.view.p to update
          if (!(0, _reactDom.findDOMNode)(_this4.view)) {
            return;
          }

          _this4.nextViewDate = dateMoment;

          _this4.addTransitionEnd();

          _this4.setState({
            transition: transition
          });
        });
      });
    }
  }, {
    key: 'addTransitionEnd',
    value: function addTransitionEnd() {
      var dom = (0, _reactDom.findDOMNode)(this.view);

      if (dom) {
        dom.addEventListener((0, _getTransitionEnd2.default)(), this.onTransitionEnd, false);
      }
    }
  }, {
    key: 'removeTransitionEnd',
    value: function removeTransitionEnd(dom) {
      dom = dom || (0, _reactDom.findDOMNode)(this.view);

      if (dom) {
        dom.removeEventListener((0, _getTransitionEnd2.default)(), this.onTransitionEnd);
      }
    }
  }, {
    key: 'onTransitionEnd',
    value: function onTransitionEnd() {
      this.removeTransitionEnd();

      if (!this.nextViewDate) {
        return;
      }

      this.setState({
        viewDate: this.nextViewDate,
        transition: 0,
        prepareTransition: 0
      });

      if (this.props.focusOnTransitionEnd) {
        this.focus();
      }

      delete this.nextViewDate;
    }
  }, {
    key: 'onNavMouseDown',
    value: function onNavMouseDown() {
      if (this.props.focusOnNavMouseDown && !this.isFocused()) {
        this.focus();
      }
    }
  }, {
    key: 'isFocused',
    value: function isFocused() {
      var view = this.getView();

      if (view) {
        return view.isFocused();
      }

      return false;
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.getView().focus();
    }
  }]);

  return TransitionView;
}(_reactClass2.default);

exports.default = TransitionView;


TransitionView.propTypes = {
  children: _react2.default.PropTypes.node.isRequired
};

TransitionView.defaultProps = {
  focusOnNavMouseDown: true,

  onTransitionStart: function onTransitionStart() {},
  onTransitionEnd: function onTransitionEnd() {},

  footerClearDate: null,
  enableHistoryView: true,
  constrainActiveInView: false,
  focusOnTransitionEnd: false,
  navigation: true,
  theme: 'default',
  isDatePicker: true
};