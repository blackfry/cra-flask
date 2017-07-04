'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Value = exports.MomentDate = exports.Mode = undefined;

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mode = exports.Mode = _tcomb2.default.enums.of(['day', 'month', 'year']);

var MomentDate = exports.MomentDate = _tcomb2.default.irreducible('MomentDate', function (x) {
  return _moment2.default.isMoment(x);
});

var Value = exports.Value = _tcomb2.default.union([_tcomb2.default.String, _tcomb2.default.Date, MomentDate]);