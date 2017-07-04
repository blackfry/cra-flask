"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (a, b) {
  if (a && b) {
    return function () {
      a.apply(undefined, arguments);
      b.apply(undefined, arguments);
    };
  }

  return a || b;
};