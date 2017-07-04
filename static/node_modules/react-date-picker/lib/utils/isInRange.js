'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = function (moment, configOrRange) {

  var range = configOrRange;
  var inclusive = true;

  if (!Array.isArray(configOrRange) && (typeof configOrRange === 'undefined' ? 'undefined' : _typeof(configOrRange)) == 'object') {
    range = configOrRange.range;

    if (configOrRange.inclusive !== undefined) {
      inclusive = !!configOrRange.inclusive;
    }
  }

  var start = range[0];
  var end = range.length >= 2 && range[range.length - 1];

  if (!moment) {
    return false;
  }

  if (start && end) {
    var insideRange = start.isBefore(moment) && end.isAfter(moment);

    return inclusive ? insideRange || start.isSame(moment) || end.isSame(moment) : insideRange;
  }

  return false;
};