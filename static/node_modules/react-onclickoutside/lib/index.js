'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = onClickOutsideHOC;

var _react = require('react');

var _reactDom = require('react-dom');

var _generateOutsideCheck = require('./generateOutsideCheck');

var _generateOutsideCheck2 = _interopRequireDefault(_generateOutsideCheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A higher-order-component for handling onClickOutside for React components.
 */
var registeredComponents = [];
var handlers = [];

/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */
function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(onClickOutside, _Component);

    function onClickOutside() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, onClickOutside);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = onClickOutside.__proto__ || Object.getPrototypeOf(onClickOutside)).call.apply(_ref, [this].concat(args))), _this), _this.__outsideClickHandler = null, _this.enableOnClickOutside = function () {
        var fn = _this.__outsideClickHandler;
        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;
          if (!events.forEach) {
            events = [events];
          }
          events.forEach(function (eventName) {
            var handlerOptions = !_this.props.preventDefault && ['touchstart', 'touchmove'].indexOf(eventName) !== -1 ? { passive: true } : null;
            document.addEventListener(eventName, fn, handlerOptions);
          });
        }
      }, _this.disableOnClickOutside = function () {
        var fn = _this.__outsideClickHandler;
        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;
          if (!events.forEach) {
            events = [events];
          }
          events.forEach(function (eventName) {
            return document.removeEventListener(eventName, fn);
          });
        }
      }, _this.getRef = function (ref) {
        return _this.instanceRef = ref;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(onClickOutside, [{
      key: 'getInstance',


      /**
       * Access the WrappedComponent's instance.
       */
      value: function getInstance() {
        if (!WrappedComponent.prototype.isReactComponent) {
          return this;
        }
        var ref = this.instanceRef;
        return ref.getInstance ? ref.getInstance() : ref;
      }

      // this is given meaning in componentDidMount/componentDidUpdate

    }, {
      key: 'componentDidMount',


      /**
       * Add click listeners to the current document,
       * linked to this component's state.
       */
      value: function componentDidMount() {
        // If we are in an environment without a DOM such
        // as shallow rendering or snapshots then we exit
        // early to prevent any unhandled errors being thrown.
        if (typeof document === 'undefined' || !document.createElement) {
          return;
        }

        var instance = this.getInstance();

        if (config && typeof config.handleClickOutside === 'function') {
          this.__clickOutsideHandlerProp = config.handleClickOutside(instance);
          if (typeof this.__clickOutsideHandlerProp !== 'function') {
            throw new Error('WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option.');
          }
        } else if (typeof instance.handleClickOutside === 'function') {
          if (_react.Component.prototype.isPrototypeOf(instance)) {
            this.__clickOutsideHandlerProp = instance.handleClickOutside.bind(instance);
          } else {
            this.__clickOutsideHandlerProp = instance.handleClickOutside;
          }
        } else if (typeof instance.props.handleClickOutside === 'function') {
          this.__clickOutsideHandlerProp = instance.props.handleClickOutside;
        } else {
          throw new Error('WrappedComponent lacks a handleClickOutside(event) function for processing outside click events.');
        }

        // TODO: try to get rid of this, could be done with function ref, might be problematic for SFC though, they do not expose refs
        if ((0, _reactDom.findDOMNode)(instance) === null) {
          return;
        }

        this.addOutsideClickHandler();
      }

      /**
      * Track for disableOnClickOutside props changes and enable/disable click outside
      */

    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.disableOnClickOutside && !nextProps.disableOnClickOutside) {
          this.enableOnClickOutside();
        } else if (!this.props.disableOnClickOutside && nextProps.disableOnClickOutside) {
          this.disableOnClickOutside();
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var componentNode = (0, _reactDom.findDOMNode)(this.getInstance());

        if (componentNode === null && this.__outsideClickHandler) {
          this.removeOutsideClickHandler();
          return;
        }

        if (componentNode !== null && !this.__outsideClickHandler) {
          this.addOutsideClickHandler();
          return;
        }
      }

      /**
       * Remove all document's event listeners for this component
       */

    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeOutsideClickHandler();
      }

      /**
       * Can be called to explicitly enable event listening
       * for clicks and touches outside of this element.
       */


      /**
       * Can be called to explicitly disable event listening
       * for clicks and touches outside of this element.
       */

    }, {
      key: 'addOutsideClickHandler',
      value: function addOutsideClickHandler() {
        var fn = this.__outsideClickHandler = (0, _generateOutsideCheck2.default)((0, _reactDom.findDOMNode)(this.getInstance()), this.__clickOutsideHandlerProp, this.props.outsideClickIgnoreClass, this.props.excludeScrollbar, this.props.preventDefault, this.props.stopPropagation);

        var pos = registeredComponents.length;
        registeredComponents.push(this);
        handlers[pos] = fn;

        // If there is a truthy disableOnClickOutside property for this
        // component, don't immediately start listening for outside events.
        if (!this.props.disableOnClickOutside) {
          this.enableOnClickOutside();
        }
      }
    }, {
      key: 'removeOutsideClickHandler',
      value: function removeOutsideClickHandler() {
        this.disableOnClickOutside();
        this.__outsideClickHandler = false;

        var pos = registeredComponents.indexOf(this);

        if (pos > -1) {
          // clean up so we don't leak memory
          if (handlers[pos]) {
            handlers.splice(pos, 1);
          }
          registeredComponents.splice(pos, 1);
        }
      }
    }, {
      key: 'render',


      /**
       * Pass-through render
       */
      value: function render() {
        var _this2 = this;

        var props = Object.keys(this.props).filter(function (prop) {
          return prop !== 'excludeScrollbar';
        }).reduce(function (props, prop) {
          props[prop] = _this2.props[prop];
          return props;
        }, {});

        if (WrappedComponent.prototype.isReactComponent) {
          props.ref = this.getRef;
        } else {
          props.wrappedRef = this.getRef;
        }

        props.disableOnClickOutside = this.disableOnClickOutside;
        props.enableOnClickOutside = this.enableOnClickOutside;

        return (0, _react.createElement)(WrappedComponent, props);
      }
    }]);

    return onClickOutside;
  }(_react.Component), _class.displayName = 'OnClickOutside(' + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ')', _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: 'ignore-react-onclickoutside',
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp2;
}