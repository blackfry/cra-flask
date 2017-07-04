'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toMoment = require('../toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONFIG = {
  // the format in which days should be displayed in month view
  dayFormat: 'D',

  // the format in which months should be displayed in year view
  monthFormat: 'MMMM',

  // the format in which years should be displayed in decade view
  yearFormat: 'YYYY'
};

var f = function f(mom, format) {
  return (0, _toMoment2.default)(mom).format(format);
};

exports.default = {
  day: function day(mom, format) {
    return f(mom, format || CONFIG.dayFormat);
  },
  month: function month(mom, format) {
    return f(mom, format || CONFIG.monthFormat);
  },
  year: function year(mom, format) {
    return f(mom, format || CONFIG.yearFormat);
  }
};