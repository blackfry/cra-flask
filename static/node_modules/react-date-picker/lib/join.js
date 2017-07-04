'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length == 1 && Array.isArray(args[0])) {
    args = args[0];
  }

  return args.filter(function (x) {
    return !!x;
  }).join(' ');
};