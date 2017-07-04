'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref10) {
  var oldValue = _ref10.oldValue;
  var range = _ref10.range;
  var event = _ref10.event;
  var _ref10$separator = _ref10.separator;
  var separator = _ref10$separator === undefined ? ':' : _ref10$separator;
  var incrementNext = _ref10.incrementNext;
  var circular = _ref10.circular;
  var propagate = _ref10.propagate;
  var hours24 = _ref10.hours24;
  var meridiem = _ref10.meridiem;


  var newChar = String.fromCharCode(event.which);
  var start = range.start;
  var end = range.end;
  var key = event.key;


  if (key == 'Delete' || key == 'Backspace') {
    return getValueOnDelete({
      key: key,
      oldValue: oldValue,
      range: range,
      separator: separator,
      meridiem: meridiem
    });
  }

  var dir = ARROWS[key];

  if (dir) {
    return getValueOnDirection({
      hours24: hours24,
      meridiem: meridiem,
      dir: dir,
      oldValue: oldValue,
      range: range,
      circular: circular,
      propagate: propagate,
      separator: separator,
      incrementNext: incrementNext
    });
  }

  if (key == 'Unidentified' && newChar * 1 == newChar) {
    return getValueOnNumber({
      num: newChar * 1,
      circular: circular,
      separator: separator,
      oldValue: oldValue,
      range: range,
      meridiem: meridiem
    });
  }

  return {
    value: oldValue
  };
};

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _toTimeValue = require('./toTimeValue');

var _toTimeValue2 = _interopRequireDefault(_toTimeValue);

var _leftPad = require('../utils/leftPad');

var _leftPad2 = _interopRequireDefault(_leftPad);

var _clamp = require('../utils/clamp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeAt = function removeAt(_ref) {
  var value = _ref.value;
  var index = _ref.index;
  var _ref$len = _ref.len;
  var len = _ref$len === undefined ? 1 : _ref$len;

  return value.substring(0, index) + value.substring(index + len);
};

var replaceAt = function replaceAt(_ref2) {
  var value = _ref2.value;
  var index = _ref2.index;
  var _ref2$len = _ref2.len;
  var len = _ref2$len === undefined ? 1 : _ref2$len;
  var str = _ref2.str;

  return value.substring(0, index) + str + value.substring(index + len);
};

var replaceBetween = function replaceBetween(_ref3) {
  var value = _ref3.value;
  var start = _ref3.start;
  var end = _ref3.end;
  var str = _ref3.str;

  return (value.substring(0, start) || '') + str + (value.substring(end) || '');
};

var toggleMeridiem = function toggleMeridiem(meridiem) {
  return {
    am: 'pm',
    AM: 'PM',
    pm: 'am',
    PM: 'pm'
  }[meridiem];
};

var getValueOnDelete = function getValueOnDelete(_ref4) {
  var oldValue = _ref4.oldValue;
  var range = _ref4.range;
  var key = _ref4.key;
  var separator = _ref4.separator;
  var meridiem = _ref4.meridiem;
  var start = range.start;
  var end = range.end;


  var selectedValue = oldValue.substring(start, end);

  var value = void 0;

  if (selectedValue) {

    var replacement = selectedValue.split('').map(function (c) {
      if (c == separator || c == ' ') {
        return c;
      }

      if (meridiem && c * 1 != c) {
        return c == 'p' ? 'a' : c == 'P' ? 'A' : c;
      }

      return 0;
    }).join('');

    value = replaceBetween({ value: oldValue, start: start, end: end, str: replacement });

    return {
      value: value,
      update: value != oldValue,
      caretPos: key == 'Backspace' ? start : end
    };
  } else {

    var back = key == 'Backspace';
    var index = start + (back ? -1 : 0);
    var caretPos = start + (back ? -1 : 1);

    if (index < 0) {
      return {
        value: oldValue,
        update: false
      };
    }

    var char = oldValue[index];

    value = oldValue;

    var _replacement = char == separator || char == ' ' ? char : 0;

    if (char && char * 1 != char && _replacement === 0 && meridiem) {
      if (char == 'p') {
        _replacement = 'a';
      } else if (char == 'P') {
        _replacement = 'A';
      } else if (char == 'M' || char == 'm' || char == 'a' || char == 'A') {
        _replacement = char;
      }
    }

    value = replaceAt({ value: oldValue, index: index, str: _replacement });

    return {
      update: value != oldValue,
      value: value,
      caretPos: caretPos
    };
  }
};

var ARROWS = {
  ArrowUp: 1,
  ArrowDown: -1,
  PageUp: 10,
  PageDown: -10
};

var TIME_PARTS = {
  24: [{ start: 0, end: 2, name: 'hours', max: 23 }, { start: 3, end: 5, name: 'minutes', max: 59 }, { start: 6, end: 8, name: 'seconds', max: 59 }],
  12: [{ start: 0, end: 2, name: 'hours', max: 12, min: 1 }, { start: 3, end: 5, name: 'minutes', max: 59 }, { start: 6, end: 8, name: 'seconds', max: 59 }]
};

var getActiveTimePartIndex = function getActiveTimePartIndex(_ref5) {
  var value = _ref5.value;
  var timeValue = _ref5.timeValue;
  var separator = _ref5.separator;
  var range = _ref5.range;
  var hours24 = _ref5.hours24;
  var meridiem = _ref5.meridiem;
  var start = range.start;

  var timeParts = TIME_PARTS[hours24 ? 24 : 12];

  var partIndex = 0;
  var currentPart = void 0;

  while (currentPart = timeParts[partIndex]) {

    if (currentPart.name == 'seconds' && timeValue && !timeValue.seconds) {
      return 4; //the index of the meridiem
    }
    if (start >= currentPart.start && start <= currentPart.end) {
      return partIndex;
    }

    partIndex++;
  }

  return 4;
};

var getTimePartAt = function getTimePartAt(index, _ref6) {
  var hours24 = _ref6.hours24;

  return (0, _objectAssign2.default)({}, TIME_PARTS[hours24 ? 24 : 12][index]);
};

var getActiveTimePart = function getActiveTimePart(_ref7) {
  var value = _ref7.value;
  var timeValue = _ref7.timeValue;
  var separator = _ref7.separator;
  var range = _ref7.range;
  var hours24 = _ref7.hours24;
  var meridiem = _ref7.meridiem;


  var index = getActiveTimePartIndex({ value: value, timeValue: timeValue, separator: separator, range: range, hours24: hours24 });

  if (index == 4 && meridiem) {
    var timePart = {
      start: 6, end: 8, name: 'meridiem'
    };

    if (timeValue.seconds) {
      timePart.start += 3;
      timePart.end += 3;
    }

    return timePart;
  }

  return getTimePartAt(index, { hours24: hours24 });
};

var getValueOnDirection = function getValueOnDirection(_ref8) {
  var oldValue = _ref8.oldValue;
  var range = _ref8.range;
  var separator = _ref8.separator;
  var dir = _ref8.dir;
  var incrementNext = _ref8.incrementNext;
  var circular = _ref8.circular;
  var propagate = _ref8.propagate;
  var hours24 = _ref8.hours24;
  var meridiem = _ref8.meridiem;
  var start = range.start;
  var end = range.end;


  var value = void 0;

  var timeValue = (0, _toTimeValue2.default)({ value: oldValue, separator: separator, meridiem: meridiem });
  var activeTimePart = getActiveTimePart({ value: oldValue, timeValue: timeValue, separator: separator, range: range, hours24: hours24, meridiem: meridiem });

  if (activeTimePart.name != 'meridiem') {
    timeValue[activeTimePart.name] = dir + timeValue[activeTimePart.name] * 1;
  }

  var hours = timeValue.hours;
  var minutes = timeValue.minutes;
  var seconds = timeValue.seconds;


  var toggleMeridiemValue = false;

  hours *= 1;
  minutes *= 1;

  if (seconds) {
    seconds *= 1;
  }

  if (activeTimePart.name != 'meridiem') {

    if (seconds && (seconds > 59 || seconds < 0)) {

      if (propagate) {
        minutes += seconds > 59 ? 1 : -1;
      }

      if (circular) {
        seconds %= 60;

        if (seconds < 0) {
          seconds = 60 + seconds;
        }
      }
    }

    if (minutes && (minutes > 59 || minutes < 0)) {
      if (propagate) {
        hours += minutes > 59 ? 1 : -1;
      }

      if (circular) {
        minutes %= 60;

        if (minutes < 0) {
          minutes = 60 + minutes;
        }
      }
    }

    if (meridiem && circular && (hours > 12 || hours < 1)) {
      toggleMeridiemValue = true;
    }
  }

  hours = (0, _leftPad2.default)((0, _clamp.clampHour)(hours * 1, { circular: circular, max: activeTimePart.max, min: activeTimePart.min }));
  minutes = (0, _leftPad2.default)((0, _clamp.clampMinute)(minutes * 1, { circular: circular }));

  if (seconds != undefined) {
    seconds = (0, _leftPad2.default)((0, _clamp.clampSecond)(seconds * 1, { circular: circular }));
  }

  value = hours + separator + minutes;

  if (seconds) {
    value += separator + seconds;
  }

  if (activeTimePart.name == 'meridiem') {
    toggleMeridiemValue = true;
  }

  if (meridiem) {
    value += ' ' + (toggleMeridiemValue ? toggleMeridiem(timeValue.meridiem) : timeValue.meridiem);
  }

  return {
    value: value,
    caretPos: activeTimePart || range.start,
    update: oldValue != value
  };
};

var getValueOnNumber = function getValueOnNumber(_ref9) {
  var oldValue = _ref9.oldValue;
  var num = _ref9.num;
  var range = _ref9.range;
  var separator = _ref9.separator;
  var circular = _ref9.circular;
  var hours24 = _ref9.hours24;
  var meridiem = _ref9.meridiem;

  var activeTimePartIndex = getActiveTimePartIndex({ value: oldValue, separator: separator, range: range, hours24: hours24 });
  var activeTimePart = getTimePartAt(activeTimePartIndex, { hours24: hours24 });

  if (activeTimePart && range.start == range.end && activeTimePart.end == range.end) {
    activeTimePart = getTimePartAt(activeTimePartIndex + 1, { hours24: hours24 });
  }

  if (!activeTimePart) {
    return {
      value: value,
      update: false
    };
  }

  var name = activeTimePart.name;
  var timeParts = (0, _toTimeValue2.default)({ value: oldValue, separator: separator, meridiem: meridiem });

  var timePartValue = timeParts[name] + '';

  var caretPos = void 0;

  if (range.start <= activeTimePart.start) {
    var maxFirstChar = (activeTimePart.max + '').charAt(0) * 1;

    caretPos = range.start + (num > maxFirstChar ? 3 : range.start < activeTimePart.start ? 2 : 1);
    timeParts[name] = num > maxFirstChar ? '0' + num : num + timeParts[name].charAt(1);
  } else {
    caretPos = range.start + 2;
    timeParts[name] = (0, _clamp.clampNamed)(name, replaceAt({ value: timePartValue, index: 1, str: num }) * 1, { circular: circular });
  }

  var hours = timeParts.hours;
  var minutes = timeParts.minutes;
  var seconds = timeParts.seconds;


  var value = hours + separator + minutes;

  if (seconds) {
    value += separator + seconds;
  }

  if (meridiem) {
    value += ' ' + timeParts.meridiem;
  }

  return {
    value: value,
    caretPos: caretPos,
    update: true
  };
};