'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// to be passed as template to @skinnable
// e.g @skinnable(contains(Component))

exports['default'] = function (Component) {
  return function (locals) {
    return locals === null ? null : _react2['default'].createElement(Component, locals);
  };
};

//eslint-disable-line react/display-name
module.exports = exports['default'];