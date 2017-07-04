'use strict';

exports.__esModule = true;
exports['default'] = isReactComponent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

function isReactComponent(x) {
  return _tcomb2['default'].Func.is(x) && x.prototype instanceof _react2['default'].Component;
}

module.exports = exports['default'];