'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (className) {

  return function (element, modifier) {
    var el = element ? '-' + element : '';
    var mod = modifier ? '--' + modifier : '';

    return '' + className + el + mod;
  };
};