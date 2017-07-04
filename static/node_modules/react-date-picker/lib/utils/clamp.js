"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var clamp = function clamp(value, _ref) {
  var min = _ref.min;
  var max = _ref.max;
  var _ref$circular = _ref.circular;
  var circular = _ref$circular === undefined ? true : _ref$circular;

  return value < min ? circular ? max : min : value > max ? circular ? min : max : value;
};

var clampHour = exports.clampHour = function clampHour(value, _ref2) {
  var max = _ref2.max;
  var min = _ref2.min;
  var circular = _ref2.circular;

  return clamp(value, { min: min || 0, max: max || 23, circular: circular });
};

var clampMinute = exports.clampMinute = function clampMinute(value, _ref3) {
  var circular = _ref3.circular;

  return clamp(value, { min: 0, max: 59, circular: circular });
};

var clampSecond = exports.clampSecond = function clampSecond(value, _ref4) {
  var circular = _ref4.circular;

  return clamp(value, { min: 0, max: 59, circular: circular });
};

var MAP = {
  second: clampSecond,
  seconds: clampSecond,
  minute: clampMinute,
  minutes: clampMinute,
  hour: clampHour,
  hours: clampHour
};

var clampNamed = exports.clampNamed = function clampNamed(name, value, _ref5) {
  var circular = _ref5.circular;
  var max = _ref5.max;
  var min = _ref5.min;

  return MAP[name](value, { circular: circular, max: max, min: min });
};

exports.default = clamp;