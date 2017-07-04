'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var filter = function filter(object) {
  return Object.keys(object).reduce(function (acc, prop) {
    var value = object[prop];

    if (value !== undefined) {
      acc[prop] = value;
    }

    return acc;
  }, {});
};

exports.default = function (target) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _objectAssign2.default.apply(undefined, [target].concat(_toConsumableArray(args.map(filter))));
};