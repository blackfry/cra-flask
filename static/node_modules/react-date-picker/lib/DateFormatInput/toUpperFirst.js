'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (str) {
  return str ? str.charAt(0).toUpperCase() + str.substr(1) : '';
};