"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (range) {
  if (range[1] && range[0].isAfter(range[1])) {
    range = [range[1], range[0]];
  }

  return range;
};