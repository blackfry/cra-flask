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

var _reactFlex = require('react-flex');

var _reactField = require('react-field');

var _reactField2 = _interopRequireDefault(_reactField);

var _DateFormatInput = require('../DateFormatInput');

var _DateFormatInput2 = _interopRequireDefault(_DateFormatInput);

var _reactInlineBlock = require('react-inline-block');

var _reactInlineBlock2 = _interopRequireDefault(_reactInlineBlock);

var _icons = require('./icons');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _join = require('../join');

var _join2 = _interopRequireDefault(_join);

var _toMoment2 = require('../toMoment');

var _toMoment3 = _interopRequireDefault(_toMoment2);

var _Calendar = require('../Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _joinFunctions = require('../joinFunctions');

var _joinFunctions2 = _interopRequireDefault(_joinFunctions);

var _assignDefined = require('../assignDefined');

var _assignDefined2 = _interopRequireDefault(_assignDefined);

var _forwardTime = require('../utils/forwardTime');

var _forwardTime2 = _interopRequireDefault(_forwardTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var POSITIONS = { top: 'top', bottom: 'bottom' };

var getPicker = function getPicker(props) {
  return _react2.default.Children.toArray(props.children).filter(function (c) {
    return c && c.props && c.props.isDatePicker;
  })[0] || _react2.default.createElement(_Calendar2.default, null);
};

var FIND_INPUT = function FIND_INPUT(c) {
  return c && (c.type === 'input' || c.props && c.isDateInput);
};

var preventDefault = function preventDefault(event) {
  event.preventDefault();
};

var DateField = function (_Component) {
  _inherits(DateField, _Component);

  function DateField(props) {
    _classCallCheck(this, DateField);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateField).call(this, props));

    _this.state = {
      value: props.defaultValue === undefined ? '' : props.defaultValue,
      expanded: props.defaultExpanded || false,
      focused: false
    };
    return _this;
  }

  _createClass(DateField, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unmounted = true;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.prepareProps(this.props);

      var flexProps = (0, _objectAssign2.default)({}, props);

      delete flexProps.activeDate;
      delete flexProps.cleanup;
      delete flexProps.clearIcon;
      delete flexProps.collapseOnDateClick;
      delete flexProps.date;
      delete flexProps.dateFormat;
      delete flexProps.expanded;
      delete flexProps.expandOnFocus;
      delete flexProps.footer;
      delete flexProps.forceValidDate;
      delete flexProps.locale;
      delete flexProps.onExpand;
      delete flexProps.onExpandChange;
      delete flexProps.onCollapse;
      delete flexProps.minDate;
      delete flexProps.maxDate;
      delete flexProps.pickerProps;
      delete flexProps.position;
      delete flexProps.showClock;
      delete flexProps.skipTodayTime;
      delete flexProps.strict;
      delete flexProps.valid;
      delete flexProps.validateOnBlur;
      delete flexProps.viewDate;
      delete flexProps.value;
      delete flexProps.text;
      delete flexProps.theme;
      delete flexProps.updateOnDateClick;

      if (typeof props.cleanup == 'function') {
        props.cleanup(flexProps);
      }

      return _react2.default.createElement(
        _reactFlex.Flex,
        _extends({
          inline: true,
          row: true,
          wrap: false
        }, flexProps),
        this.renderInput(),
        this.renderClearIcon(),
        this.renderCalendarIcon(),
        this.renderPicker()
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var props = this.p;
      var inputProps = this.prepareInputProps(props);

      var input = void 0;

      if (props.renderInput) {
        input = props.renderInput(inputProps);
      }

      if (input === undefined) {
        input = props.children.filter(FIND_INPUT)[0];

        var FieldInput = props.forceValidDate ? _DateFormatInput2.default : _reactField2.default;

        var propsForInput = (0, _objectAssign2.default)({}, inputProps);

        if (!props.forceValidDate) {
          delete propsForInput.date;
          delete propsForInput.maxDate;
          delete propsForInput.minDate;
          delete propsForInput.dateFormat;
        }

        input = input ? _react2.default.cloneElement(input, propsForInput) : _react2.default.createElement(FieldInput, propsForInput);
      }

      return input;
    }
  }, {
    key: 'renderClearIcon',
    value: function renderClearIcon() {
      var props = this.p;

      if (!props.clearIcon || props.forceValidDate || props.disabled) {
        return undefined;
      }

      var clearIcon = props.clearIcon === true ? _icons.CLEAR_ICON : props.clearIcon;

      var clearIconProps = {
        style: {
          visibility: props.text ? 'visible' : 'hidden'
        },
        className: 'react-date-field__clear-icon',
        onMouseDown: this.onClearMouseDown,
        children: clearIcon
      };

      var result = void 0;

      if (props.renderClearIcon) {
        result = props.renderClearIcon(clearIconProps);
      }

      if (result === undefined) {
        result = _react2.default.createElement(_reactInlineBlock2.default, clearIconProps);
      }

      return result;
    }
  }, {
    key: 'onClearMouseDown',
    value: function onClearMouseDown(event) {
      event.preventDefault();
      this.onFieldChange('');

      if (!this.isFocused()) {
        this.focus();
      }
    }
  }, {
    key: 'renderCalendarIcon',
    value: function renderCalendarIcon() {
      var result = void 0;
      var renderIcon = this.props.renderCalendarIcon;

      var calendarIconProps = {
        className: 'react-date-field__calendar-icon',
        onMouseDown: this.onCalendarIconMouseDown,
        children: _react2.default.createElement('div', { className: 'react-date-field__calendar-icon-inner' })
      };

      if (renderIcon) {
        result = renderIcon(calendarIconProps);
      }

      if (result === undefined) {
        result = _react2.default.createElement('div', calendarIconProps);
      }

      return result;
    }
  }, {
    key: 'onCalendarIconMouseDown',
    value: function onCalendarIconMouseDown(event) {
      if (this.props.disabled) {
        return;
      }
      event.preventDefault();

      if (!this.isFocused()) {
        this.focus();
      }

      this.toggleExpand();
    }
  }, {
    key: 'prepareExpanded',
    value: function prepareExpanded(props) {
      return props.expanded === undefined ? this.state.expanded : props.expanded;
    }
  }, {
    key: 'prepareDate',
    value: function prepareDate(props, pickerProps) {
      props = props || this.p;
      pickerProps = pickerProps || props.pickerProps;

      var locale = props.locale || pickerProps.locale;
      var dateFormat = props.dateFormat || pickerProps.dateFormat;

      var value = props.value === undefined ? this.state.value : props.value;

      var date = this.toMoment(value);
      var valid = date.isValid();

      if (value && typeof value != 'string' && valid) {
        value = this.format(date);
      }

      if (date && valid) {
        this.lastValidDate = date;
      } else {
        value = this.state.value;
      }

      var viewDate = this.state.viewDate || this.lastValidDate || new Date();
      var activeDate = this.state.activeDate || this.lastValidDate || new Date();

      return {
        viewDate: viewDate,
        activeDate: activeDate,
        dateFormat: dateFormat,
        locale: locale,
        valid: valid,
        date: date,
        value: value
      };
    }
  }, {
    key: 'preparePickerProps',
    value: function preparePickerProps(props) {
      var picker = getPicker(props, this);

      if (!picker) {
        return null;
      }

      return picker.props || {};
    }
  }, {
    key: 'prepareProps',
    value: function prepareProps(thisProps) {
      var props = this.p = (0, _objectAssign2.default)({}, thisProps);

      props.children = _react2.default.Children.toArray(props.children);

      props.expanded = this.prepareExpanded(props);
      props.pickerProps = this.preparePickerProps(props);

      var input = props.children.filter(FIND_INPUT)[0];

      if (input && input.type == 'input') {
        props.rawInput = true;
        props.forceValidDate = false;
      }

      var dateInfo = this.prepareDate(props, props.pickerProps);

      (0, _objectAssign2.default)(props, dateInfo);

      if (props.text === undefined) {
        props.text = this.state.text;

        if (props.text == null) {
          props.text = props.valid && props.date ? props.value : this.props.value;
        }
      }

      if (props.text === undefined) {
        props.text = '';
      }

      props.className = this.prepareClassName(props);

      return props;
    }
  }, {
    key: 'prepareClassName',
    value: function prepareClassName(props) {
      var position = POSITIONS[props.pickerProps.position || props.pickerPosition] || 'bottom';

      return (0, _join2.default)(['react-date-field', props.className, props.disabled && 'react-date-field--disabled', props.theme && 'react-date-field--theme-' + props.theme, 'react-date-field--picker-position-' + position, this.isLazyFocused() && (0, _join2.default)('react-date-field--focused', props.focusedClassName), this.isExpanded() && (0, _join2.default)('react-date-field--expanded', props.expandedClassName), !props.valid && (0, _join2.default)(props.invalidClassName, 'react-date-field--invalid')]);
    }
  }, {
    key: 'prepareInputProps',
    value: function prepareInputProps(props) {
      var _this2 = this;

      var input = props.children.filter(FIND_INPUT)[0];
      var inputProps = input && input.props || {};

      var onBlur = (0, _joinFunctions2.default)(inputProps.onBlur, this.onFieldBlur);
      var onFocus = (0, _joinFunctions2.default)(inputProps.onFocus, this.onFieldFocus);
      var onChange = (0, _joinFunctions2.default)(inputProps.onChange, this.onFieldChange);
      var onKeyDown = (0, _joinFunctions2.default)(inputProps.onKeyDown, this.onFieldKeyDown);

      var newInputProps = (0, _objectAssign2.default)({}, inputProps, {

        ref: function ref(f) {
          _this2.field = f;
        },
        date: props.date,

        onFocus: onFocus,
        onBlur: onBlur,
        onChange: onChange,

        dateFormat: props.dateFormat,
        value: props.text || '',

        onKeyDown: onKeyDown,

        className: (0, _join2.default)('react-date-field__input', inputProps.className)
      });

      (0, _assignDefined2.default)(newInputProps, {
        placeholder: props.placeholder,
        disabled: props.disabled,
        minDate: props.minDate,
        maxDate: props.maxDate
      });

      return newInputProps;
    }
  }, {
    key: 'renderPicker',
    value: function renderPicker() {
      var _this3 = this;

      var props = this.p;

      if (this.isExpanded()) {
        var newExpand = !this.picker;
        var picker = getPicker(props, this);

        var pickerProps = props.pickerProps;

        var onMouseDown = (0, _joinFunctions2.default)(pickerProps.onMouseDown, this.onPickerMouseDown);
        var onChange = (0, _joinFunctions2.default)(pickerProps.onChange, this.onPickerChange);

        var date = props.valid && props.date;
        var footer = pickerProps.footer !== undefined ? pickerProps.footer : props.footer;

        var viewDate = newExpand && date ? date : props.viewDate;
        var activeDate = newExpand && date ? date : props.activeDate;

        return _react2.default.cloneElement(picker, (0, _assignDefined2.default)({
          ref: function ref(p) {
            _this3.picker = _this3.pickerView = p;

            if (p && p.getView) {
              _this3.pickerView = p.getView();
            }

            if (!_this3.state.viewDate) {
              _this3.onViewDateChange(props.viewDate);
            }
          },

          footer: footer,

          focusOnNavMouseDown: false,
          focusOnFooterMouseDown: false,

          insideField: true,
          showClock: props.showClock,

          getTransitionTime: this.getTime,

          updateOnWheel: props.updateOnWheel,

          onClockInputBlur: this.onClockInputBlur,
          onClockEnterKey: this.onClockEnterKey,
          onClockEscapeKey: this.onClockEscapeKey,

          footerClearDate: props.clearDate || props.minDate,

          onFooterCancelClick: this.onFooterCancelClick,
          onFooterTodayClick: this.onFooterTodayClick,
          onFooterOkClick: this.onFooterOkClick,
          onFooterClearClick: this.onFooterClearClick,

          dateFormat: props.dateFormat,
          theme: props.theme || pickerProps.theme,
          arrows: props.navBarArrows,

          className: (0, _join2.default)(pickerProps.className, 'react-date-field__picker'),

          date: date || null,

          tabIndex: -1,

          viewDate: viewDate,
          activeDate: activeDate,
          locale: props.locale,

          onViewDateChange: this.onViewDateChange,
          onActiveDateChange: this.onActiveDateChange,
          onTimeChange: this.onTimeChange,

          onTransitionStart: this.onTransitionStart,

          onMouseDown: onMouseDown,
          onChange: onChange
        }, {
          minDate: props.minDate,
          maxDate: props.maxDate
        }));
      }

      this.time = null;

      return null;
    }
  }, {
    key: 'onTimeChange',
    value: function onTimeChange(value, timeFormat) {
      var timeMoment = this.toMoment(value, { dateFormat: timeFormat });

      var time = ['hour', 'minute', 'second', 'millisecond'].reduce(function (acc, part) {
        acc[part] = timeMoment.get(part);
        return acc;
      }, {});

      this.time = time;
    }
  }, {
    key: 'getTime',
    value: function getTime() {
      return this.time;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var dateMoment = this.toMoment(value);
      var dateString = this.format(dateMoment);

      this.setDate(dateString, (0, _objectAssign2.default)(config, { dateMoment: dateMoment }));
    }
  }, {
    key: 'onFooterOkClick',
    value: function onFooterOkClick() {
      var activeDate = this.p.activeDate;

      if (activeDate) {
        var date = this.toMoment(activeDate);

        (0, _forwardTime2.default)(this.time, date);

        this.setValue(date, { skipTime: !!this.time });
      }

      this.setExpanded(false);
    }
  }, {
    key: 'onFooterCancelClick',
    value: function onFooterCancelClick() {
      this.setExpanded(false);
    }
  }, {
    key: 'onFooterTodayClick',
    value: function onFooterTodayClick() {
      var today = this.toMoment(new Date()).startOf('day');

      this.onPickerChange(this.format(today), { dateMoment: today });
      this.onViewDateChange(today);
      this.onActiveDateChange(today);

      return false;
    }
  }, {
    key: 'onFooterClearClick',
    value: function onFooterClearClick() {
      var clearDate = this.props.clearDate === undefined ? this.props.minDate : this.props.clearDate;

      if (clearDate !== undefined) {
        this.setValue(clearDate, {
          skipTime: true
        });
      }

      this.setExpanded(false);

      return false;
    }
  }, {
    key: 'toMoment',
    value: function toMoment(value, props) {
      if (_moment2.default.isMoment(value)) {
        return value;
      }

      props = props || this.p;

      var date = (0, _toMoment3.default)(value, {
        strict: props.strict,
        locale: props.locale,
        dateFormat: props.displayFormat || props.dateFormat || this.p.dateFormat
      });

      if (!date.isValid() && props.displayFormat) {
        date = (0, _toMoment3.default)(value, {
          strict: props.strict,
          locale: props.locale,
          dateFormat: props.dateFormat || this.p.dateFormat
        });
      }

      return date;
    }
  }, {
    key: 'isValid',
    value: function isValid(text) {
      if (text === undefined) {
        text = this.p.text;
      }

      return this.toMoment(text).isValid();
    }
  }, {
    key: 'onViewDateChange',
    value: function onViewDateChange(viewDate) {
      this.setState({
        viewDate: viewDate
      });
    }
  }, {
    key: 'onActiveDateChange',
    value: function onActiveDateChange(activeDate) {
      this.setState({
        activeDate: activeDate
      });
    }
  }, {
    key: 'onViewKeyDown',
    value: function onViewKeyDown(event) {
      var key = event.key;

      if (this.pickerView) {
        // } && (key == 'Escape' || key == 'Enter' || (key in NAV_KEYS))) {
        this.pickerView.onViewKeyDown(event);
      }
    }
  }, {
    key: 'onPickerMouseDown',
    value: function onPickerMouseDown(event) {
      preventDefault(event);

      if (!this.isFocused()) {
        this.focus();
      }
    }
  }, {
    key: 'isHistoryViewVisible',
    value: function isHistoryViewVisible() {
      if (this.picker && this.picker.isHistoryViewVisible) {
        return this.picker.isHistoryViewVisible();
      }

      return false;
    }
  }, {
    key: 'onFieldKeyDown',
    value: function onFieldKeyDown(event) {
      var key = event.key;
      var expanded = this.isExpanded();
      var historyVisible = this.isHistoryViewVisible();

      if (key == 'Enter' && !historyVisible) {
        this.onViewKeyDown(event);
        this.toggleExpand();
        return false;
      }

      if (historyVisible && (key == 'Escape' || key == 'Enter')) {
        this.onViewKeyDown(event);
        return false;
      }

      if (key == 'Escape') {
        if (expanded) {
          this.setExpanded(false);
          return false;
        }
      }

      if (expanded) {
        if (key in _Calendar.NAV_KEYS) {
          this.onViewKeyDown(event);
          return false;
        }
        // if (!currentPosition || !currentPosition.time) {
        //   // the time has not changed, so it's safe to forward the event
        //   this.onViewKeyDown(event)
        //   return false
        // }
      }

      return true;
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      return (0, _reactDom.findDOMNode)(this.field);
    }
  }, {
    key: 'isFocused',
    value: function isFocused() {
      return this.state.focused;
    }
  }, {
    key: 'isLazyFocused',
    value: function isLazyFocused() {
      return this.isFocused() || this.isTimeInputFocused();
    }
  }, {
    key: 'isTimeInputFocused',
    value: function isTimeInputFocused() {
      if (this.pickerView && this.pickerView.isTimeInputFocused) {
        return this.pickerView.isTimeInputFocused();
      }

      return false;
    }
  }, {
    key: 'onFieldFocus',
    value: function onFieldFocus(event) {
      if (this.state.focused) {
        return;
      }

      this.setState({
        focused: true
      });

      if (this.props.expandOnFocus) {
        this.setExpanded(true);
      }

      this.props.onFocus(event);
    }
  }, {
    key: 'onFieldBlur',
    value: function onFieldBlur(event) {
      var _this4 = this;

      if (!this.isFocused()) {
        return;
      }

      this.setState({
        focused: false
      });

      this.props.onBlur(event);

      if (!this.pickerView || !this.pickerView.isTimeInputFocused) {
        this.onLazyBlur();
        return;
      }

      setTimeout(function () {
        return _this4.onLazyBlur();
      }, 0);
    }
  }, {
    key: 'onClockEnterKey',
    value: function onClockEnterKey() {
      if (!this.isFocused()) {
        this.focus();
      }

      this.onFooterOkClick();
    }
  }, {
    key: 'onClockEscapeKey',
    value: function onClockEscapeKey() {
      if (!this.isFocused()) {
        this.focus();
      }

      this.onFooterCancelClick();
    }
  }, {
    key: 'onClockInputBlur',
    value: function onClockInputBlur() {
      var _this5 = this;

      setTimeout(function () {
        if (!_this5.isFocused()) {
          _this5.onLazyBlur();
        }
      }, 0);
    }
  }, {
    key: 'onLazyBlur',
    value: function onLazyBlur() {
      var _this6 = this;

      if (this.unmounted) {
        return;
      }

      if (this.isTimeInputFocused()) {
        return;
      }

      this.setExpanded(false);

      if (!this.isValid() && this.props.validateOnBlur) {
        (function () {
          var value = _this6.lastValidDate && _this6.p.text != '' ? _this6.format(_this6.lastValidDate) : '';

          setTimeout(function () {
            _this6.onFieldChange(value);
          }, 0);
        })();
      }
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange() {}
  }, {
    key: 'isExpanded',
    value: function isExpanded() {
      return this.p.expanded;
    }
  }, {
    key: 'toggleExpand',
    value: function toggleExpand() {
      this.setExpanded(!this.p.expanded);
    }
  }, {
    key: 'setExpanded',
    value: function setExpanded(bool) {
      var _this7 = this;

      var props = this.p;

      if (bool === props.expanded) {
        return;
      }

      if (!bool) {
        this.onCollapse();
      } else {
        this.setState({}, function () {
          _this7.onExpand();
        });
      }

      if (bool && props.valid) {
        this.setState({
          // viewDate: props.date,
          activeDate: props.date
        });
      }

      if (this.props.expanded === undefined) {
        this.setState({
          expanded: bool
        });
      }

      this.props.onExpandChange(bool);
    }
  }, {
    key: 'onCollapse',
    value: function onCollapse() {
      this.props.onCollapse();
    }
  }, {
    key: 'onExpand',
    value: function onExpand() {
      this.props.onExpand();
    }
  }, {
    key: 'onFieldChange',
    value: function onFieldChange(value) {
      if (this.p.rawInput && typeof value != 'string') {
        var event = value;
        value = event.target.value;
      }

      var dateMoment = value == '' ? null : this.toMoment(value);

      if (dateMoment === null || dateMoment.isValid()) {
        this.onChange(dateMoment);
      }

      this.onTextChange(value);
    }
  }, {
    key: 'onTextChange',
    value: function onTextChange(text) {
      if (this.props.text === undefined && this.props.value === undefined) {
        this.setState({
          text: text
        });
      }

      if (this.props.onTextChange) {
        this.props.onTextChange(text);
      }
    }
  }, {
    key: 'onPickerChange',
    value: function onPickerChange(dateString, _ref, event) {
      var dateMoment = _ref.dateMoment;
      var forceUpdate = _ref.forceUpdate;

      var isEnter = event && event.key == 'Enter';
      var updateOnDateClick = forceUpdate ? true : this.props.updateOnDateClick || isEnter;

      if (updateOnDateClick) {
        (0, _forwardTime2.default)(this.time, dateMoment);

        this.setDate(dateString, { dateMoment: dateMoment });

        if (this.props.collapseOnDateClick || isEnter) {
          this.setExpanded(false);
        }
      }
    }
  }, {
    key: 'setDate',
    value: function setDate(dateString, _ref2) {
      var dateMoment = _ref2.dateMoment;
      var _ref2$skipTime = _ref2.skipTime;
      var skipTime = _ref2$skipTime === undefined ? false : _ref2$skipTime;

      var props = this.p;

      var currentDate = props.date;

      if (props.valid && currentDate) {
        var dateFormat = props.dateFormat.toLowerCase();

        var hasTime = dateFormat.indexOf('k') != -1 || dateFormat.indexOf('h') != -1;

        if (hasTime && !skipTime) {
          ['hour', 'minute', 'second', 'millisecond'].forEach(function (part) {
            dateMoment.set(part, currentDate.get(part));
          });
        }
      }

      this.onTextChange(this.format(dateMoment));
      this.onChange(dateMoment);
    }
  }, {
    key: 'onChange',
    value: function onChange(dateMoment) {
      if (dateMoment != null && !_moment2.default.isMoment(dateMoment)) {
        dateMoment = this.toMoment(dateMoment);
      }

      (0, _forwardTime2.default)(this.time, dateMoment);

      var newState = {};

      if (this.props.value === undefined) {
        (0, _objectAssign2.default)(newState, {
          text: null,
          value: dateMoment
        });
      }

      newState.activeDate = dateMoment;

      if (!this.pickerView || !this.pickerView.isInView || !this.pickerView.isInView(dateMoment)) {
        newState.viewDate = dateMoment;
      }

      if (this.props.onChange) {
        this.props.onChange(this.format(dateMoment), { dateMoment: dateMoment });
      }

      this.setState(newState);
    }
  }, {
    key: 'format',
    value: function format(mom, _format) {
      return mom == null ? '' : mom.format(_format || this.p.displayFormat || this.p.dateFormat);
    }
  }, {
    key: 'focusField',
    value: function focusField() {
      var input = (0, _reactDom.findDOMNode)(this.field);

      if (input) {
        input.focus();
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.focusField();
    }
  }]);

  return DateField;
}(_reactClass2.default);

exports.default = DateField;


DateField.defaultProps = {
  showClock: undefined,

  forceValidDate: false,
  strict: true,

  expandOnFocus: true,

  updateOnDateClick: false,
  collapseOnDateClick: false,

  theme: 'default',

  footer: true,

  onBlur: function onBlur() {},
  onFocus: function onFocus() {},

  clearIcon: true,
  validateOnBlur: true,

  onExpandChange: function onExpandChange() {},
  onCollapse: function onCollapse() {},
  onExpand: function onExpand() {},

  minDate: (0, _moment2.default)('1000-01-01', 'YYYY-MM-DD'),
  maxDate: (0, _moment2.default)('9999-12-31 HH:mm:ss', 'YYYY-MM-DD 23:59:59'),

  skipTodayTime: false
};

DateField.propTypes = {
  dateFormat: _react.PropTypes.string.isRequired
};