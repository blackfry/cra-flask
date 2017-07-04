'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _assignDefined = require('./assignDefined');

var _assignDefined2 = _interopRequireDefault(_assignDefined);

var _toMoment2 = require('./toMoment');

var _toMoment3 = _interopRequireDefault(_toMoment2);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _bemFactory = require('./bemFactory');

var _bemFactory2 = _interopRequireDefault(_bemFactory);

var _HistoryView = require('./HistoryView');

var _HistoryView2 = _interopRequireDefault(_HistoryView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var bem = (0, _bemFactory2.default)('react-date-picker__nav-bar');

var NavBar = function (_Component) {
  _inherits(NavBar, _Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavBar).call(this, props));

    _this.state = {
      viewDate: props.defaultViewDate
    };
    return _this;
  }

  _createClass(NavBar, [{
    key: 'prepareViewDate',
    value: function prepareViewDate(props) {
      return props.viewDate === undefined ? this.state.viewDate : props.viewDate;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.p = (0, _objectAssign2.default)({}, this.props);

      var viewMoment = props.viewMoment = props.viewMoment || this.toMoment(this.prepareViewDate(props));

      props.historyViewEnabled = props.expandedHistoryView || props.enableHistoryView;

      var secondary = props.secondary;

      var className = (0, _join2.default)(props.className, bem(), bem(null, 'theme-' + props.theme), props.historyViewEnabled && bem(null, 'with-history-view'));

      var historyView = props.historyViewEnabled ? this.renderHistoryView() : null;

      var flexProps = (0, _objectAssign2.default)({}, props);

      delete flexProps.arrows;
      delete flexProps.date;
      delete flexProps.enableHistoryView;
      delete flexProps.historyViewEnabled;
      delete flexProps.isDatePickerNavBar;
      delete flexProps.minDate;
      delete flexProps.maxDate;
      delete flexProps.mainNavBar;
      delete flexProps.multiView;
      delete flexProps.navDateFormat;
      delete flexProps.onNavClick;
      delete flexProps.onUpdate;
      delete flexProps.onViewDateChange;
      delete flexProps.renderNavNext;
      delete flexProps.renderNavPrev;
      delete flexProps.secondary;
      delete flexProps.theme;
      delete flexProps.viewDate;
      delete flexProps.viewMoment;

      if (typeof props.cleanup == 'function') {
        props.cleanup(flexProps);
      }

      return _react2.default.createElement(
        _reactFlex.Flex,
        _extends({ inline: true, row: true }, flexProps, { className: className }),
        secondary && this.renderNav(-2, viewMoment),
        this.renderNav(-1, viewMoment),
        _react2.default.createElement(
          _reactFlex.Item,
          {
            className: bem('date'),
            style: { textAlign: 'center' },
            onMouseDown: props.historyViewEnabled ? this.toggleHistoryView : null
          },
          this.renderNavDate(viewMoment)
        ),
        this.renderNav(1, viewMoment),
        secondary && this.renderNav(2, viewMoment),
        historyView
      );
    }
  }, {
    key: 'renderHistoryView',
    value: function renderHistoryView() {
      var _this2 = this;

      if (!this.state.historyView) {
        return null;
      }

      var className = bem('history-view');
      var _p = this.p;
      var viewMoment = _p.viewMoment;
      var theme = _p.theme;
      var minDate = _p.minDate;
      var maxDate = _p.maxDate;


      var historyViewProps = (0, _assignDefined2.default)({
        defaultViewDate: viewMoment,
        defaultDate: viewMoment,

        ref: function ref(view) {
          _this2.historyView = view;
        },
        focusDecadeView: false,

        className: className,
        theme: theme,

        onOkClick: this.onHistoryViewOk,
        onCancelClick: this.onHistoryViewCancel
      }, {
        minDate: minDate,
        maxDate: maxDate
      });

      if (this.props.renderHistoryView) {
        return this.props.renderHistoryView(historyViewProps);
      }

      return _react2.default.createElement(_HistoryView2.default, historyViewProps);
    }
  }, {
    key: 'toggleHistoryView',
    value: function toggleHistoryView(event) {
      if (this.isHistoryViewVisible()) {
        this.hideHistoryView(event);
      } else {
        this.showHistoryView(event);
      }
    }
  }, {
    key: 'getHistoryView',
    value: function getHistoryView() {
      return this.historyView;
    }
  }, {
    key: 'isHistoryViewVisible',
    value: function isHistoryViewVisible() {
      return !!this.historyView;
    }
  }, {
    key: 'onHistoryViewOk',
    value: function onHistoryViewOk(dateString, _ref) {
      var dateMoment = _ref.dateMoment;
      var timestamp = _ref.timestamp;

      this.hideHistoryView();
      this.onViewDateChange({ dateMoment: dateMoment, timestamp: timestamp });
    }
  }, {
    key: 'onHistoryViewCancel',
    value: function onHistoryViewCancel() {
      this.hideHistoryView();
    }
  }, {
    key: 'showHistoryView',
    value: function showHistoryView(event) {
      event.preventDefault();

      this.setState({
        historyView: true
      });

      if (this.props.onShowHistoryView) {
        this.props.onShowHistoryView();
      }
    }
  }, {
    key: 'hideHistoryView',
    value: function hideHistoryView(event) {
      if (event && event.preventDefault) {
        event.preventDefault();
      }

      this.setState({
        historyView: false
      });

      if (this.props.onHideHistoryView) {
        this.props.onHideHistoryView();
      }
    }
  }, {
    key: 'toMoment',
    value: function toMoment(value, props) {
      props = props || this.props;

      return (0, _toMoment3.default)(value, {
        locale: props.locale,
        dateFormat: props.dateFormat
      });
    }
  }, {
    key: 'renderNav',
    value: function renderNav(dir, viewMoment) {
      var props = this.p;

      var name = dir < 0 ? 'prev' : 'next';
      var disabled = dir < 0 ? props.prevDisabled : props.nextDisabled;
      var secondary = Math.abs(dir) == 2;

      if (dir < 0 && props.minDate) {
        var gotoMoment = this.getGotoMoment(dir, viewMoment).endOf('month');

        if (gotoMoment.isBefore(this.toMoment(props.minDate))) {
          disabled = true;
        }
      }

      if (dir > 0 && props.maxDate) {
        var _gotoMoment = this.getGotoMoment(dir, viewMoment).startOf('month');

        if (_gotoMoment.isAfter(this.toMoment(props.maxDate))) {
          disabled = true;
        }
      }

      if (this.state.historyView) {
        disabled = true;
      }

      var className = [bem('arrow'), bem('arrow--' + name), secondary && bem('secondary-arrow'), disabled && bem('arrow--disabled')];

      var arrow = props.arrows[dir] || props.arrows[name] || ARROWS[name];

      var children = void 0;

      if (secondary) {
        var dirArrow = props.arrows[dir];

        if (dirArrow) {
          children = dirArrow;
        } else {
          var secondArrow = _react2.default.createElement(
            _reactInlineBlock2.default,
            { style: _defineProperty({ position: 'absolute' }, dir < 0 ? 'left' : 'left', 7) },
            arrow
          );
          children = dir < 0 ? [secondArrow, arrow] : [secondArrow, arrow];
        }
      } else {
        children = arrow;
      }

      var navProps = {
        dir: dir,
        name: name,
        disabled: disabled,
        className: (0, _join2.default)(className),
        onClick: !disabled && this.onNavClick.bind(this, dir, viewMoment),
        children: children
      };

      if (props.renderNav) {
        return props.renderNav(navProps);
      }

      if (dir < 0 && props.renderNavPrev) {
        return props.renderNavPrev(navProps);
      }

      if (dir > 0 && props.renderNavNext) {
        return props.renderNavNext(navProps);
      }

      return _react2.default.createElement(_reactInlineBlock2.default, _extends({}, navProps, {
        disabled: null,
        name: null
      }));
    }
  }, {
    key: 'getGotoMoment',
    value: function getGotoMoment(dir, viewMoment) {
      viewMoment = viewMoment || this.p.viewMoment;

      var sign = dir < 0 ? -1 : 1;
      var abs = Math.abs(dir);

      var mom = this.toMoment(viewMoment);

      mom.add(sign, abs == 1 ? 'month' : 'year');

      return mom;
    }
  }, {
    key: 'onNavClick',
    value: function onNavClick(dir, viewMoment, event) {
      var props = this.props;

      var dateMoment = this.toMoment(viewMoment);

      if (props.onUpdate) {
        dateMoment = props.onUpdate(dateMoment, dir);
      } else {
        var sign = dir < 0 ? -1 : 1;
        var abs = Math.abs(dir);

        dateMoment.add(sign, abs == 1 ? 'month' : 'year');
      }

      var timestamp = +dateMoment;

      props.onNavClick(dir, viewMoment, event);

      var disabled = dir < 0 ? props.prevDisabled : props.nextDisabled;

      if (disabled) {
        return;
      }

      this.onViewDateChange({
        dateMoment: dateMoment,
        timestamp: timestamp
      });
    }
  }, {
    key: 'renderNavDate',
    value: function renderNavDate(viewMoment) {
      var props = this.props;
      var text = viewMoment.format(props.navDateFormat);

      if (props.renderNavDate) {
        return props.renderNavDate(viewMoment, text);
      }

      return text;
    }
  }, {
    key: 'onViewDateChange',
    value: function onViewDateChange(_ref3) {
      var dateMoment = _ref3.dateMoment;
      var timestamp = _ref3.timestamp;

      if (this.props.viewDate === undefined) {
        this.setState({
          viewDate: timestamp
        });
      }

      if (this.props.onViewDateChange) {
        var dateString = dateMoment.format(this.props.dateFormat);
        this.props.onViewDateChange(dateString, { dateString: dateString, dateMoment: dateMoment, timestamp: timestamp });
      }
    }
  }]);

  return NavBar;
}(_reactClass2.default);

exports.default = NavBar;


NavBar.defaultProps = {
  arrows: {},

  theme: 'default',

  isDatePickerNavBar: true,

  navDateFormat: 'MMM YYYY',
  enableHistoryView: true,
  onNavClick: function onNavClick(dir, viewMoment) {},

  onViewDateChange: function onViewDateChange() {}
};

NavBar.propTypes = {
  secondary: _react.PropTypes.bool,

  renderNav: _react.PropTypes.func,
  renderNavPrev: _react.PropTypes.func,
  renderNavNext: _react.PropTypes.func,

  arrows: _react.PropTypes.object,
  navDateFormat: _react.PropTypes.string,

  onUpdate: _react.PropTypes.func,
  onNavClick: _react.PropTypes.func,
  onViewDateChange: _react.PropTypes.func
};