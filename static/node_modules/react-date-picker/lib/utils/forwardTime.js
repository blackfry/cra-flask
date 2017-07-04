'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (from, to) {
  if (from) {
    ['hour', 'minute', 'second', 'millisecond'].forEach(function (part) {
      to.set(part, from.get ? from.get(part) : from[part]);
    });
  }

  return to;
};