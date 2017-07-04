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

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactNotifyResize = require('react-notify-resize');

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _toMoment = require('./toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

var _reactStyleNormalizer = require('react-style-normalizer');

var _reactStyleNormalizer2 = _interopRequireDefault(_reactStyleNormalizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MINUTES = Array.apply(null, new Array(60)).map(function (_, index) {
  return index;
});

var toUpperFirst = function toUpperFirst(str) {
  return str ? str.charAt(0).toUpperCase() + str.substr(1) : '';
};

var transformStyle = (0, _reactStyleNormalizer2.default)({ transform: '' });

var rotateTickStyle = function rotateTickStyle(tick, _ref, totalSize, offset) {
  var width = _ref.width;
  var height = _ref.height;

  var result = (0, _objectAssign2.default)({}, transformStyle);
  var deg = tick * 6;

  var transform = 'translate3d(' + -width / 2 + 'px, ' + -height / 2 + 'px, 0px) ' + ('rotate(' + deg + 'deg) translate3d(0px, -' + offset + 'px, 0px)');

  Object.keys(result).forEach(function (name) {
    result[name] = transform;
  });

  return result;
};

var Clock = function (_Component) {
  _inherits(Clock, _Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Clock).call(this, props));

    var time = void 0;
    var seconds = void 0;

    if (props.defaultSeconds) {
      seconds = props.defaultSeconds == true ? Date.now() / 1000 : +props.defaultSeconds;
    }

    if (props.defaultTime) {
      time = props.defaultTime == true ? Date.now() : +props.defaultTime;
    }

    // if (time === undefined) {
    //   seconds = 0
    // }

    _this.state = {};

    if (seconds !== undefined) {
      _this.state.seconds = seconds;
      _this.state.defaultSeconds = seconds;
    }

    if (time !== undefined) {
      _this.state.time = time;
      _this.state.defaultTime = time;
    }
    return _this;
  }

  _createClass(Clock, [{
    key: 'shouldRun',
    value: function shouldRun(props) {
      props = props || this.props;

      if (props.run === false) {
        return false;
      }

      return !!(props.defaultSeconds || props.defaultTime);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.shouldRun(this.props)) {
        this.start();
      }

      if (this.props.size == 'auto') {
        this.setState({
          rendered: true
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var currentRun = this.shouldRun(this.props);
      var nextRun = this.shouldRun(nextProps);

      if (!currentRun && nextRun) {
        this.start();
      } else if (currentRun && !nextRun) {
        this.stop();
      }
    }
  }, {
    key: 'start',
    value: function start() {
      this.startTime = Date.now ? Date.now() : +new Date();

      this.run();
    }
  }, {
    key: 'stop',
    value: function stop() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    }
  }, {
    key: 'run',
    value: function run() {
      var _this2 = this;

      this.timeoutId = setTimeout(function () {
        _this2.update();
        _this2.run();
      }, this.props.updateInterval || 1000);
    }
  }, {
    key: 'update',
    value: function update() {
      var now = Date.now ? Date.now() : +new Date();
      var diff = now - this.startTime;

      var seconds = this.getPropsSeconds();

      if (seconds !== undefined) {
        this.setSeconds(seconds + diff / 1000);
        return;
      }

      var time = this.getPropsTime();

      this.setTime(time + diff);
    }
  }, {
    key: 'setSeconds',
    value: function setSeconds(seconds) {
      this.setState({
        seconds: seconds
      });

      if (this.props.onSecondsChange) {
        this.props.onSecondsChange(seconds);
      }
    }
  }, {
    key: 'setTime',
    value: function setTime(time) {
      this.setState({
        time: time
      });

      if (this.props.onTimeChange) {
        this.props.onTimeChange(time);
      }
    }
  }, {
    key: 'getPropsTime',
    value: function getPropsTime() {
      return this.props.time || this.state.defaultTime || 0;
    }
  }, {
    key: 'getPropsSeconds',
    value: function getPropsSeconds() {
      return this.props.seconds || this.state.defaultSeconds;
    }
  }, {
    key: 'getSeconds',
    value: function getSeconds() {
      return this.state.seconds || this.getPropsSeconds();
    }
  }, {
    key: 'getTime',
    value: function getTime() {
      return this.state.time || this.getPropsTime();
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.p = (0, _objectAssign2.default)({}, this.props);
      var size = props.size;

      if (size == 'auto') {
        this.ignoreRender = false;
        if (!this.state.rendered) {
          this.ignoreRender = true;
        }

        size = props.size = this.state.size;
      }

      var valueSeconds = this.getSeconds();
      var valueTime = this.getTime();

      var width = size;
      var height = size;

      var className = (0, _join2.default)(props.className, 'react-date-picker__clock', 'react-date-picker__clock--theme-' + props.theme);

      var seconds = void 0;
      var minutes = void 0;
      var hours = void 0;

      if (valueSeconds != undefined) {
        seconds = Math.floor(valueSeconds % 60);
        minutes = valueSeconds / 60 % 60;
        hours = valueSeconds / 3600 % 24;
      } else {
        var mom = (0, _toMoment2.default)(valueTime);

        seconds = mom.seconds();
        minutes = mom.minutes() + seconds / 60;
        hours = mom.hours() + minutes / 60;
      }

      hours *= 5;

      var defaultStyle = {};

      if (props.color) {
        defaultStyle.borderColor = props.color;
      }

      var style = (0, _objectAssign2.default)(defaultStyle, props.style, {
        width: width, height: height, borderWidth: props.borderWidth
      });

      var divProps = (0, _objectAssign2.default)({}, props);

      delete divProps.bigTickHeight;
      delete divProps.bigTickOffset;
      delete divProps.bigTickWidth;
      delete divProps.borderColor;
      delete divProps.borderWidth;
      delete divProps.centerOverlaySize;
      delete divProps.centerSize;
      delete divProps.cleanup;
      delete divProps.defaultSeconds;
      delete divProps.defaultTime;
      delete divProps.handHeight;
      delete divProps.handOffset;
      delete divProps.handWidth;
      delete divProps.hourHandDiff;
      delete divProps.isDatePickerClock;
      delete divProps.minuteHandDiff;
      delete divProps.seconds;
      delete divProps.secondHandDiff;
      delete divProps.secondHandWidth;
      delete divProps.showHoursHand;
      delete divProps.showMinutesHand;
      delete divProps.showSecondsHand;
      delete divProps.showSmallTicks;
      delete divProps.smallTickHeight;
      delete divProps.smallTickOffset;
      delete divProps.smallTickWidth;
      delete divProps.theme;
      delete divProps.time;
      delete divProps.tickHeight;
      delete divProps.tickOffset;
      delete divProps.tickWidth;

      if (typeof props.cleanup == 'function') {
        props.cleanup(divProps);
      }

      return _react2.default.createElement(
        'div',
        _extends({}, divProps, {
          className: className,
          style: style
        }),
        this.renderCenter(),
        this.renderHourHand(hours),
        this.renderMinuteHand(minutes),
        this.renderSecondHand(seconds),
        this.renderCenterOverlay(),
        MINUTES.map(this.renderTick),
        this.props.size == 'auto' && _react2.default.createElement(_reactNotifyResize.NotifyResize, { notifyOnMount: true, onResize: this.onResize })
      );
    }
  }, {
    key: 'renderCenter',
    value: function renderCenter() {
      var props = this.props;
      var centerSize = props.centerSize || (props.bigTickHeight || props.tickHeight) * 3;

      return _react2.default.createElement('div', {
        className: 'react-date-picker__clock-center',
        style: { width: centerSize, height: centerSize }
      });
    }
  }, {
    key: 'renderCenterOverlay',
    value: function renderCenterOverlay() {
      var props = this.props;
      var centerOverlaySize = props.centerOverlaySize || props.handWidth * 4;

      return _react2.default.createElement('div', {
        className: 'react-date-picker__clock-overlay',
        style: {
          width: centerOverlaySize,
          height: centerOverlaySize,
          borderWidth: props.handWidth
        }
      });
    }
  }, {
    key: 'onResize',
    value: function onResize(_ref2) {
      var width = _ref2.width;
      var height = _ref2.height;

      if (width != height) {
        console.warn('Clock width != height. Please make sure it\'s a square.');
      }

      this.setState({
        size: width
      });
    }
  }, {
    key: 'renderSecondHand',
    value: function renderSecondHand(value) {
      return this.props.showSecondsHand && this.renderHand('second', value);
    }
  }, {
    key: 'renderMinuteHand',
    value: function renderMinuteHand(value) {
      return this.props.showMinutesHand && this.renderHand('minute', value);
    }
  }, {
    key: 'renderHourHand',
    value: function renderHourHand(value) {
      return this.props.showHoursHand && this.renderHand('hour', value);
    }
  }, {
    key: 'renderHand',
    value: function renderHand(name, value) {
      if (this.ignoreRender) {
        return null;
      }

      var props = this.p;
      var size = props.size;
      var borderWidth = props.borderWidth;


      var height = props[name + 'HandHeight'] || props.handHeight || size / 2 - props[name + 'HandDiff'];

      var width = props[name + 'HandWidth'] || props.handWidth || props.tickWidth;
      var offset = props[name + 'HandOffset'] || props.handOffset;

      if (!offset && offset != 0) {
        offset = 5;
      }

      var style = rotateTickStyle(value, { width: width, height: height }, size - borderWidth, height / 2 - offset);
      style.width = width;
      style.height = height;

      if (props.color) {
        style.background = props.color;
      }

      var className = (0, _join2.default)('react-date-picker__clock-hand', 'react-date-picker__clock-hand-' + name);

      var renderName = 'render' + toUpperFirst(name) + 'Hand';

      if (props[renderName]) {
        return props[renderName]({
          key: name,
          className: className,
          style: style
        });
      }

      return _react2.default.createElement('div', { key: name, className: className, style: style });
    }
  }, {
    key: 'renderTick',
    value: function renderTick(tick) {
      if (this.ignoreRender) {
        return null;
      }

      var _p = this.p;
      var size = _p.size;
      var borderWidth = _p.borderWidth;
      var tickWidth = _p.tickWidth;
      var smallTickWidth = _p.smallTickWidth;
      var bigTickWidth = _p.bigTickWidth;
      var tickHeight = _p.tickHeight;
      var smallTickHeight = _p.smallTickHeight;
      var bigTickHeight = _p.bigTickHeight;
      var tickOffset = _p.tickOffset;
      var smallTickOffset = _p.smallTickOffset;
      var bigTickOffset = _p.bigTickOffset;


      var small = !!(tick % 5);
      var sizeName = small ? 'small' : 'big';

      if (small && !this.props.showSmallTicks) {
        return false;
      }

      var className = (0, _join2.default)('react-date-picker__clock-tick', 'react-date-picker__clock-tick--' + sizeName);

      var offset = small ? smallTickOffset || tickOffset : bigTickOffset || tickOffset;

      var tWidth = small ? smallTickWidth || tickWidth : bigTickWidth || tickWidth;

      var tHeight = small ? smallTickHeight || tickHeight : bigTickHeight || tickHeight;

      var totalSize = size - borderWidth;
      var style = rotateTickStyle(tick, {
        width: tWidth,
        height: tHeight
      }, totalSize, totalSize / 2 - (tHeight / 2 + offset));

      style.height = tHeight;
      style.width = tWidth;

      if (this.props.color) {
        style.background = this.props.color;
      }

      if (this.props.renderTick) {
        return this.props.renderTick({
          tick: tick,
          className: className,
          style: style
        });
      }

      return _react2.default.createElement('div', { key: tick, className: className, style: style });
    }
  }]);

  return Clock;
}(_reactClass2.default);

exports.default = Clock;


Clock.defaultProps = {

  centerSize: null,
  centerOverlaySize: null,

  size: 150,
  theme: 'default',

  showSecondsHand: true,
  showHoursHand: true,
  showMinutesHand: true,

  handWidth: 2,
  secondHandWidth: 1,
  handOffset: 10,

  hourHandDiff: 35,
  minuteHandDiff: 25,
  secondHandDiff: 10,

  tickWidth: 1,
  bigTickWidth: 2,
  tickOffset: 2,

  smallTickHeight: 6,
  bigTickHeight: 10,

  color: '',
  borderWidth: 0,
  showSmallTicks: true,
  isDatePickerClock: true
};