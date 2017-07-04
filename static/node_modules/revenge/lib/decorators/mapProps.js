'use strict';

exports.__esModule = true;
exports['default'] = mapProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _isReactComponent = require('../isReactComponent');

var _isReactComponent2 = _interopRequireDefault(_isReactComponent);

function mapProps(map) {

  if (process.env.NODE_ENV !== 'production') {
    _tcomb2['default'].assert(_tcomb2['default'].Function.is(map), '@mapProps requires a map fn');
  }

  return function (Component) {
    if (process.env.NODE_ENV !== 'production') {
      _tcomb2['default'].assert(_isReactComponent2['default'](Component), '@mapProps decorator can only be applied to React.Component(s)');
    }

    var MapPropsWrapper = (function (_React$Component) {
      _inherits(MapPropsWrapper, _React$Component);

      function MapPropsWrapper() {
        _classCallCheck(this, MapPropsWrapper);

        _React$Component.apply(this, arguments);
      }

      MapPropsWrapper.prototype.render = function render() {
        return _react2['default'].createElement(Component, map(this.props));
      };

      return MapPropsWrapper;
    })(_react2['default'].Component);

    return MapPropsWrapper;
  };
}

module.exports = exports['default'];