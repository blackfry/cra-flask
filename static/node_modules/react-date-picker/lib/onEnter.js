'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (fn) {
  return function (event) {
    if (event.key == 'Enter') {
      fn(event);
    }
  };
};