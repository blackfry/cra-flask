'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormats = undefined;

var _leftPad = require('../utils/leftPad');

var _leftPad2 = _interopRequireDefault(_leftPad);

var _clamp = require('../utils/clamp');

var _clamp2 = _interopRequireDefault(_clamp);

var _times = require('../utils/times');

var _times2 = _interopRequireDefault(_times);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isValid = function isValid(value, format) {
  value *= 1;
  return value >= format.min && value <= format.max;
};

var replaceAt = function replaceAt(_ref) {
  var value = _ref.value;
  var index = _ref.index;
  var _ref$len = _ref.len;
  var len = _ref$len === undefined ? 1 : _ref$len;
  var str = _ref.str;

  return value.substring(0, index) + str + value.substring(index + len);
};

var handleArrow = function handleArrow(format, _ref2) {
  var currentValue = _ref2.currentValue;
  var key = _ref2.key;
  var dir = _ref2.dir;

  dir = dir || (key == 'ArrowUp' ? 1 : -1);

  return {
    value: (0, _clamp2.default)(currentValue * 1 + dir, {
      min: format.min,
      max: format.max,
      circular: true
    }),
    caretPos: true
  };
};

var handleArrowLeftPad = function handleArrowLeftPad(format, config) {
  var _handleArrow = handleArrow(format, config);

  var value = _handleArrow.value;
  var caretPos = _handleArrow.caretPos;


  return {
    value: (0, _leftPad2.default)(value),
    caretPos: caretPos
  };
};

var handlePage = function handlePage(format, config) {
  config.dir = config.dir || (config.key == 'PageUp' ? 10 : -10);

  return handleArrow(format, config);
};

var handlePageLeftPad = function handlePageLeftPad(format, config) {
  config.dir = config.dir || (config.key == 'PageUp' ? 10 : -10);

  return handleArrowLeftPad(format, config);
};

var handleUpdate = function handleUpdate(value, format, _ref3) {
  var range = _ref3.range;

  value *= 1;

  var len = range.end - range.start + 1;
  var pow10 = ('1' + (0, _times2.default)(3 - len).map(function () {
    return '0';
  }).join('')) * 1;
  var modLen = value % pow10;

  var newValue = (0, _clamp2.default)(value, { min: format.min, max: format.max, circular: false });

  if (pow10 > 1 && value % pow10 == 0) {
    // the user is modifying the millenium or century
    newValue += modLen;
    // so we try to keep the century
    newValue = (0, _clamp2.default)(newValue, { min: format.min, max: format.max, circular: false });
  }

  return newValue;
};

var handleUnidentified = function handleUnidentified(format, _ref4) {
  var event = _ref4.event;
  var currentValue = _ref4.currentValue;
  var range = _ref4.range;

  var newChar = String.fromCharCode(event.which);
  var index = range.start - format.start;

  var caretPos = { start: range.start + 1 };

  if (newChar * 1 != newChar) {
    return {
      preventDefault: false,
      value: currentValue
    };
  }

  // caretPos
  var value = void 0;
  var valid = void 0;

  value = replaceAt({ value: currentValue, index: index, str: newChar });
  valid = isValid(value, format);

  if (!valid && index == 0 && newChar == ('' + format.max)[0]) {
    valid = true;
    value = format.max;
    caretPos.start++;
  }

  if (!valid) {
    do {
      value = (0, _times2.default)(index).map(function () {
        return '0';
      }).join('') + replaceAt({ value: currentValue, index: index, str: newChar }).substring(index);

      valid = isValid(value, format);
      index++;

      if (!valid) {
        caretPos.start++;
      }
    } while (!valid && index <= format.end);
  }

  if (valid) {
    value = handleUpdate(value, format, { range: range });
  } else {
    var defaultValue = format.default;
    value = 1 * replaceAt({ value: defaultValue, index: defaultValue.length - 1, str: newChar });

    if (isValid(value, format)) {
      caretPos.start = format.start + defaultValue.length;
    } else {
      caretPos.start = range.start + 1;
      value = currentValue;
    }
  }

  return {
    value: value,
    caretPos: caretPos
  };
};

var handleUnidentifiedLeftPad = function handleUnidentifiedLeftPad(format, config) {
  var _handleUnidentified = handleUnidentified(format, config);

  var value = _handleUnidentified.value;
  var caretPos = _handleUnidentified.caretPos;
  var preventDefault = _handleUnidentified.preventDefault;


  return {
    value: (0, _leftPad2.default)(value),
    caretPos: caretPos,
    preventDefault: preventDefault
  };
};

var handleYearUnidentified = handleUnidentified;

var handleDelete = function handleDelete(format, _ref5) {
  var range = _ref5.range;
  var currentValue = _ref5.currentValue;
  var dir = _ref5.dir;

  dir = dir || 0;

  if (range.start <= format.start && range.end >= format.end) {
    return {
      value: format.default,
      caretPos: true
    };
  }

  var len = range.end - range.start + 1;
  var str = (0, _times2.default)(len).map(function () {
    return '0';
  }).join('');
  var index = range.start - format.start + dir;

  var value = replaceAt({ value: currentValue, index: index, str: str, len: len }) * 1;

  value = (0, _leftPad2.default)(handleUpdate(value, format, { range: range }));

  return {
    value: value,
    caretPos: { start: range.start + (dir < 0 ? -1 : 1) }
  };
};

var handleBackspace = function handleBackspace(format, config) {
  config.dir = -1;
  return handleDelete(format, config);
};

var toggleMeridiem = function toggleMeridiem(_ref6) {
  var upper = _ref6.upper;
  var value = _ref6.value;

  if (upper) {
    return value == 'AM' ? 'PM' : 'AM';
  }

  return value == 'am' ? 'pm' : 'am';
};

var handleMeridiemArrow = function handleMeridiemArrow(format, _ref7) {
  var currentValue = _ref7.currentValue;

  return {
    value: toggleMeridiem({ upper: format.upper, value: currentValue }),
    caretPos: true
  };
};

var handleMeridiemDelete = function handleMeridiemDelete(format, _ref8) {
  var dir = _ref8.dir;
  var range = _ref8.range;

  dir = dir || 0;

  if (range.start <= format.start && range.end >= format.end) {
    return {
      value: format.default,
      caretPos: true
    };
  }

  return {
    value: format.upper ? 'AM' : 'am',
    caretPos: { start: range.start + (dir < 0 ? -1 : 1) }
  };
};

var handleMeridiemBackspace = function handleMeridiemBackspace(format, config) {
  config.dir = -1;
  return handleMeridiemDelete(format, config);
};

var getFormats = function getFormats() {
  return {
    YYYY: {
      min: 100,
      max: 9999,
      default: '0100',
      handleDelete: handleDelete,
      handleBackspace: handleBackspace,
      handleArrow: handleArrow,
      handlePageUp: handlePage,
      handlePageDown: handlePage,
      handleUnidentified: handleYearUnidentified
    },

    // YY: {
    //   default: '00'
    // },

    // M: { min: 1, max: 12, default: '1', maxLen: 2 },
    MM: {
      min: 1,
      max: 12,
      default: '01',
      handleDelete: handleDelete,
      handleBackspace: handleBackspace,
      handlePageUp: handlePageLeftPad,
      handlePageDown: handlePageLeftPad,
      handleUnidentified: handleUnidentifiedLeftPad,
      handleArrow: handleArrowLeftPad
    },

    // D: { min: 1, max: 31, default: '1', maxLen: 2 },
    DD: {
      min: 1,
      max: 31,
      default: '01',
      handlePageUp: handlePageLeftPad,
      handlePageDown: handlePageLeftPad,
      handleDelete: handleDelete,
      handleBackspace: handleBackspace,
      handleUnidentified: handleUnidentifiedLeftPad,
      handleArrow: handleArrowLeftPad
    },

    // H: {
    //   min: 0, max: 23, default: '0', maxLen: 2,
    //   handleDelete,
    //   handleBackspace,
    //   handleArrow: handleArrowLeftPad,
    //   handlePageUp: handlePageLeftPad,
    //   handlePageDown: handlePageLeftPad
    // },
    HH: {
      time: true,
      min: 0, max: 23, default: '00',
      handleDelete: handleDelete,
      handleBackspace: handleBackspace,
      handleUnidentified: handleUnidentifiedLeftPad,
      handleArrow: handleArrowLeftPad,
      handlePageUp: handlePageLeftPad,
      handlePageDown: handlePageLeftPad
    },

    // h: { min: 1, max: 12, default: '1', maxLen: 2,
    //   handleArrow: handleArrowLeftPad,
    //   handlePageUp: handlePageLeftPad,
    //   handlePageDown: handlePageLeftPad
    // },
    hh: { min: 1, max: 12, default: '01',
      time: true,
      handleDelete: handleDelete,
      handleBackspace: handleBackspace,
      handleUnidentified: handleUnidentifiedLeftPad,
      handleArrow: handleArrowLeftPad,
      handlePageUp: handlePageLeftPad,
      handlePageDown: handlePageLeftPad
    },

    a: {
      time: true,
      length: 2,
      default: 'am',
      handleArrow: handleMeridiemArrow,
      handlePageUp: handleMeridiemArrow,
      handlePageDown: handleMeridiemArrow,
      handleDelete: handleMeridiemDelete,
      handleBackspace: handleMeridiemBackspace
    },
    A: {
      length: 2,
      time: true,
      default: 'AM', upper: true,
      handleArrow: handleMeridiemArrow,
      handlePageUp: handleMeridiemArrow,
      handlePageDown: handleMeridiemArrow,
      handleDelete: handleMeridiemDelete,
      handleBackspace: handleMeridiemBackspace
    },

    // m: { min: 0, max: 59, default: '0', maxLen: 2 },
    mm: { min: 0, max: 59, default: '00',
      time: true,
      handleDelete: handleDelete,
      handleBackspace: handleBackspace,
      handleUnidentified: handleUnidentifiedLeftPad,
      handleArrow: handleArrowLeftPad,
      handlePageUp: handlePageLeftPad,
      handlePageDown: handlePageLeftPad
    },

    // s: { min: 0, max: 59, default: '0' },
    ss: {
      time: true,
      min: 0, max: 59, default: '00',
      handleDelete: handleDelete,
      handleBackspace: handleBackspace,
      handleUnidentified: handleUnidentifiedLeftPad,
      handleArrow: handleArrowLeftPad,
      handlePageUp: handlePageLeftPad,
      handlePageDown: handlePageLeftPad
    }
  };
};

exports.getFormats = getFormats;
exports.default = getFormats();