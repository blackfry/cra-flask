'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInsideTheEnabledArea = exports.evaluateDateProp = exports.getVisibleYears = exports.getVisibleDays = exports.getWeekdaysMin = exports.getArrayByBoundary = exports.daysInMonthCount = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _range = require('lodash/range');

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var daysInMonthCount = exports.daysInMonthCount = function daysInMonthCount(month, year) {
  return (0, _moment2.default)([year, month]).endOf('month').date();
};

var getArrayByBoundary = exports.getArrayByBoundary = function getArrayByBoundary(start, end) {
  return (0, _range2.default)(end - start).map(function (i) {
    return i + start;
  });
};

var getWeekdaysMin = exports.getWeekdaysMin = function getWeekdaysMin() {
  var offset = (0, _moment2.default)().localeData().firstDayOfWeek();
  var weekdaysMin = _moment2.default.weekdaysMin();

  (0, _range2.default)(offset).forEach(function () {
    var firstDay = weekdaysMin.shift();
    weekdaysMin.push(firstDay);
  });
  return weekdaysMin;
};

var getVisibleDays = exports.getVisibleDays = function getVisibleDays(month, year) {
  var offset = (0, _moment2.default)([year, month]).startOf('month').weekday();
  var previousMonth = month === 0 ? 11 : month - 1;
  var previousYear = month === 0 ? year - 1 : year;

  var currentMonthLength = daysInMonthCount(month, year) + 1;
  var previousMonthLength = daysInMonthCount(previousMonth, previousYear) + 1; // We need the last number too

  var previous = getArrayByBoundary(previousMonthLength - offset, previousMonthLength);
  var current = getArrayByBoundary(1, currentMonthLength);
  var following = getArrayByBoundary(1, 43 - previous.length - current.length);
  return {
    startCurrent: previous.length,
    endCurrent: previous.length + current.length - 1,
    days: previous.concat(current).concat(following)
  };
};

var getVisibleYears = exports.getVisibleYears = function getVisibleYears(year) {
  var startDecadeYear = parseInt(year / 10, 10) * 10;
  var endDecadeYear = startDecadeYear + 9;
  var previous = [startDecadeYear - 1];
  var current = getArrayByBoundary(startDecadeYear, endDecadeYear + 1);
  var following = [endDecadeYear + 1];
  return {
    startCurrent: previous.length,
    endCurrent: previous.length + current.length - 1,
    years: previous.concat(current).concat(following)
  };
};

var evaluateDateProp = exports.evaluateDateProp = function evaluateDateProp(props, propName, componentName) {
  var dateProp = props[propName];
  if (dateProp && typeof dateProp !== 'string' && !(dateProp instanceof Date) && !_moment2.default.isMoment(dateProp)) {
    return new Error(propName + ' validation failed in ' + componentName);
  }
};

var isInsideTheEnabledArea = exports.isInsideTheEnabledArea = function isInsideTheEnabledArea(date, mode, minDate, maxDate) {
  if (!minDate && !maxDate) {
    return true;
  }

  var minDateMoment = typeof minDate === 'string' ? (0, _moment2.default)(minDate, _moment2.default.ISO_8601, true) : (0, _moment2.default)(minDate);
  var maxDateMoment = typeof maxDate === 'string' ? (0, _moment2.default)(maxDate, _moment2.default.ISO_8601, true) : (0, _moment2.default)(maxDate);

  var format = void 0;
  switch (mode) {
    case 'day':
      format = 'YYYY/MM/DD';
      break;

    case 'month':
      format = 'YYYY/MM';
      break;

    case 'year':
      format = 'YYYY';
      break;
  }

  return (!minDate || date.format(format) >= minDateMoment.format(format)) && (!maxDate || date.format(format) <= maxDateMoment.format(format));
};