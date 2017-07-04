'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWeekDayNames;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_WEEK_START_DAY = (0, _moment2.default)().startOf('week').format('d') * 1;

function getWeekDayNames(startDay, locale) {
  var weekDays = void 0;

  if (locale) {
    var data = _moment2.default.localeData(locale);

    weekDays = data && data._weekdaysShort ? data._weekdaysShort : weekDays;
  }

  weekDays = (weekDays || _moment2.default.weekdaysShort()).concat();

  var names = weekDays;
  var index = startDay == null ? DEFAULT_WEEK_START_DAY : startDay;

  while (index > 0) {
    names.push(names.shift());
    index--;
  }

  return names;
}