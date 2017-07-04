'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function will be used to convert a date to a moment.
 *
 * It accepts input as sring, date or moment
 *
 * @param  {String/Date/Moment} value
 *
 * @param  {String} [dateFormat] if value is string, it will be parsed to a moment
 * using this format.
 * You can skip this argument and only specify the config instead,
 * where you can have a dateFormat property
 *
 * @param  {Object} [config]
 * @param  {String} [config.dateFormat] a dateFormat string
 * @param  {String} [config.locale] a locale
 * @param  {Boolean} [config.strict] whether to perform strict parsing on strings
 *
 * @return {Moment}
 */

exports.default = function (value, dateFormat, config) {
  if ((typeof dateFormat === 'undefined' ? 'undefined' : _typeof(dateFormat)) === 'object') {
    config = dateFormat;
    dateFormat = null;
  }

  var strict = !!(config && config.strict);
  var locale = config && config.locale;

  dateFormat = dateFormat || config && config.dateFormat || 'YYYY-MM-DD';

  if (typeof value == 'string') {
    return (0, _moment2.default)(value, dateFormat, locale, strict);
  }

  value = value == null ? new Date() : value;

  return (0, _moment2.default)(value, undefined, locale, strict);
};