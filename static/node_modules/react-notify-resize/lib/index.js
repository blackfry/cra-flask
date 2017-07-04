'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotifyResize = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var notifyResizeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  overflow: 'hidden',
  display: 'block',
  pointerEvents: 'none',
  opacity: 0
};

var expandToolStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto'
};

var contractToolStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto'
};

var contractToolInnerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '200%',
  height: '200%'
};

var NotifyResize = function (_Component) {
  _inherits(NotifyResize, _Component);

  function NotifyResize(props) {
    _classCallCheck(this, NotifyResize);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NotifyResize).call(this, props));

    _this.state = {
      notifyResizeWidth: 0,
      notifyResizeHeight: 0,

      expandToolWidth: 0,
      expandToolHeight: 0,

      contractToolWidth: 0,
      contractToolHeight: 0
    };

    return _this;
  }

  _createClass(NotifyResize, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof this.props.onMount === 'function') {
        this.props.onMount(this);
      }

      this.resetResizeTool();

      if (this.props.notifyOnMount) {
        var _notifyResizeSize = this.notifyResizeSize;
        var width = _notifyResizeSize.notifyResizeWidth;
        var height = _notifyResizeSize.notifyResizeHeight;

        this.onResize({ width: width, height: height });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          ref: 'notifyResize',
          style: notifyResizeStyle,
          onScroll: this.checkResize
        },
        this.renderExpandTool(),
        this.renderContractTool()
      );
    }
  }, {
    key: 'renderExpandTool',
    value: function renderExpandTool() {
      return _react2.default.createElement(
        'div',
        {
          ref: 'expandTool',
          className: 'expandTool',
          style: expandToolStyle
        },
        _react2.default.createElement('div', {
          ref: 'expandToolInner',
          className: 'expandToolInner',
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: this.state.expandToolWidth,
            height: this.state.expandToolHeight
          }
        })
      );
    }
  }, {
    key: 'renderContractTool',
    value: function renderContractTool() {
      return _react2.default.createElement(
        'div',
        {
          ref: 'contractTool',
          className: 'contractTool',
          style: contractToolStyle,
          onScroll: this.checkResize
        },
        _react2.default.createElement('div', { ref: 'contractInner', style: contractToolInnerStyle })
      );
    }
  }, {
    key: 'resetResizeTool',
    value: function resetResizeTool() {
      this.setDimensions();
      this.scrollToBottomExpandTool();
    }
  }, {
    key: 'setDimensions',
    value: function setDimensions() {
      var _notifyResizeSize2 = this.notifyResizeSize = this.getDimensions();

      var notifyResizeWidth = _notifyResizeSize2.notifyResizeWidth;
      var notifyResizeHeight = _notifyResizeSize2.notifyResizeHeight;

      // Resize tool will be bigger than it's parent by 1 pixel in each direction

      this.setState({
        notifyResizeWidth: notifyResizeWidth,
        notifyResizeHeight: notifyResizeHeight,
        expandToolWidth: notifyResizeWidth + 1,
        expandToolHeight: notifyResizeHeight + 1
      });
    }
  }, {
    key: 'getDimensions',
    value: function getDimensions() {
      var notifyResize = this.refs.notifyResize;
      var node = notifyResize.parentElement || notifyResize;

      var size = void 0;

      if (typeof this.props.measureSize == 'function') {
        size = this.props.measureSize(node, notifyResize);
      } else {
        size = {
          width: node.offsetWidth,
          height: node.offsetHeight
        };
      }

      return {
        notifyResizeWidth: size.width,
        notifyResizeHeight: size.height
      };
    }
  }, {
    key: 'scrollToBottomExpandTool',
    value: function scrollToBottomExpandTool() {
      var _this2 = this;

      // so the scroll moves when element resizes

      if (this.refs.notifyResize) {
        setTimeout(function () {
          // scroll to bottom
          var expandTool = _this2.refs.expandTool;

          if (expandTool) {
            expandTool.scrollTop = expandTool.scrollHeight;
            expandTool.scrollLeft = expandTool.scrollWidth;
          }

          var contractTool = _this2.refs.contractTool;
          if (contractTool) {
            contractTool.scrollTop = contractTool.scrollHeight;
            contractTool.scrollLeft = contractTool.scrollWidth;
          }
        }, 0);
      }
    }
  }, {
    key: 'checkResize',
    value: function checkResize() {
      var _getDimensions = this.getDimensions();

      var notifyResizeWidth = _getDimensions.notifyResizeWidth;
      var notifyResizeHeight = _getDimensions.notifyResizeHeight;


      if (notifyResizeWidth !== this.state.notifyResizeWidth || notifyResizeHeight !== this.state.notifyResizeHeight) {
        // reset resizeToolDimensions
        this.onResize({
          width: notifyResizeWidth,
          height: notifyResizeHeight
        });
        this.resetResizeTool();
      }
    }
  }, {
    key: 'onResize',
    value: function onResize(_ref) {
      var width = _ref.width;
      var height = _ref.height;

      if (typeof this.props.onResize === 'function') {
        this.props.onResize({ width: width, height: height });
      }
    }
  }]);

  return NotifyResize;
}(_reactClass2.default);

NotifyResize.propTypes = {
  onResize: _react.PropTypes.func,
  onMount: _react.PropTypes.func,
  notifyOnMount: _react.PropTypes.bool
};

var notifyResize = function notifyResize(Component) {
  return function (_Component2) {
    _inherits(NotifyResizeWrapper, _Component2);

    function NotifyResizeWrapper() {
      _classCallCheck(this, NotifyResizeWrapper);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(NotifyResizeWrapper).apply(this, arguments));
    }

    _createClass(NotifyResizeWrapper, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var component = this.component = this.refs.component;

        // check if they are mounted
        if (!this.notifyResize) {
          console.warn('For notifyResize to work you must render resizeTool from {props.resizeTool}');
        }
      }
    }, {
      key: 'onNotifyResizeMount',
      value: function onNotifyResizeMount(notifier) {
        this.notifyResize = notifier;
      }
    }, {
      key: 'render',
      value: function render() {

        var resizeTool = _react2.default.createElement(NotifyResize, {
          onResize: this.onResize,
          onMount: this.onNotifyResizeMount,

          notifyOnMount: this.props.notifyOnMount
        });

        return _react2.default.createElement(Component, _extends({ ref: 'component' }, this.props, { resizeTool: resizeTool }));
      }
    }, {
      key: 'onResize',
      value: function onResize() {
        if (typeof this.props.onResize === 'function') {
          var _props;

          (_props = this.props).onResize.apply(_props, arguments);
        }

        if (typeof this.refs.component.onResize === 'function') {
          var _refs$component;

          (_refs$component = this.refs.component).onResize.apply(_refs$component, arguments);
        }
      }
    }]);

    return NotifyResizeWrapper;
  }(Component);
};

exports.default = notifyResize;
exports.NotifyResize = NotifyResize;