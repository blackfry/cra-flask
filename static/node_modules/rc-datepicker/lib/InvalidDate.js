'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _tcombReact = require('tcomb-react');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidDate = (_dec = (0, _utils.skinnable)(), _dec2 = (0, _tcombReact.props)({
  invalidDate: _tcomb2.default.maybe(_tcomb2.default.String)
}), (0, _utils.pure)(_class = _dec(_class = _dec2(_class = function (_React$Component) {
  _inherits(InvalidDate, _React$Component);

  function InvalidDate() {
    _classCallCheck(this, InvalidDate);

    return _possibleConstructorReturn(this, (InvalidDate.__proto__ || Object.getPrototypeOf(InvalidDate)).apply(this, arguments));
  }

  _createClass(InvalidDate, [{
    key: 'template',
    value: function template(_ref) {
      var invalidDate = _ref.invalidDate;

      return _react2.default.createElement(
        'div',
        { className: 'react-datepicker-body' },
        _react2.default.createElement(
          'h3',
          { className: 'invalid-date' },
          invalidDate
        )
      );
    }
  }]);

  return InvalidDate;
}(_react2.default.Component)) || _class) || _class) || _class);
exports.default = InvalidDate;