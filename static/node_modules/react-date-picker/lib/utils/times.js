"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var times = function times(count) {
  return (count >= 0 ? [].concat(_toConsumableArray(new Array(count))) : []).map(function (v, i) {
    return i;
  });
};
exports.default = times;