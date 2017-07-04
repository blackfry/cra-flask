'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactClass = require('react-class');

var _reactClass2 = _interopRequireDefault(_reactClass);

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _props2className = require('./props2className');

var _props2className2 = _interopRequireDefault(_props2className);

var _cleanup = require('./cleanup');

var _cleanup2 = _interopRequireDefault(_cleanup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flex = function (_Component) {
  _inherits(Flex, _Component);

  function Flex() {
    _classCallCheck(this, Flex);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Flex).apply(this, arguments));
  }

  _createClass(Flex, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var className = (0, _join2.default)('react-flex', (0, _props2className2.default)(props));

      var allProps = (0, _objectAssign2.default)({}, props);

      (0, _cleanup2.default)(allProps);

      allProps.className = className;

      if (props.factory) {
        return props.factory(allProps);
      }

      return _react2.default.createElement('div', allProps);
    }
  }]);

  return Flex;
}(_reactClass2.default);

Flex.defaultProps = {
  row: true,
  wrap: true,
  alignItems: 'center',
  display: 'flex'
};

Flex.propTypes = {

  flex: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.bool]),

  display: _react.PropTypes.oneOf(['flex', 'inline-flex']),

  inline: _react.PropTypes.bool,

  reverse: _react.PropTypes.bool,

  row: _react.PropTypes.bool,
  column: _react.PropTypes.bool,
  wrap: _react.PropTypes.bool,

  alignItems: _react.PropTypes.string,
  alignContent: _react.PropTypes.string,
  justifyContent: _react.PropTypes.string
};

exports.default = Flex;