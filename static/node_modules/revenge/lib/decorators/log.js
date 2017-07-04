'use strict';

exports.__esModule = true;
exports['default'] = log;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _stringify = require('../stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function log(namespace) {

  if (process.env.NODE_ENV === 'production') {
    return function (target, name, descriptor) {
      return target[name] = descriptor.value; //eslint-disable-line no-return-assign
    };
  }

  var logger = _debug2['default'](namespace || 'revenge:@log');
  return function (target, name, descriptor) {
    var f = descriptor.value;
    return target[name] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      //eslint-disable-line no-return-assign
      var ret = f.apply(this, args);
      var message = name + '(' + args.map(_stringify2['default']).join(', ') + ') => ' + _stringify2['default'](ret);
      logger(message);
      return ret;
    };
  };
}

module.exports = exports['default'];