'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _leftPad = require('../utils/leftPad');

var _leftPad2 = _interopRequireDefault(_leftPad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var value = _ref.value;
  var _ref$separator = _ref.separator;
  var separator = _ref$separator === undefined ? ':' : _ref$separator;
  var meridiem = _ref.meridiem;

  var parts = value.split(separator);

  var hours = parts[0];
  var minutes = parts[1];
  var seconds = parts[2];

  var result = { hours: hours, minutes: minutes };

  if (typeof seconds == 'string' && seconds.length) {
    result.seconds = seconds;
  }

  if (meridiem && seconds !== undefined && seconds * 1 != seconds) {
    result.seconds = (0, _leftPad2.default)(parseInt(seconds, 10));
  }

  if (meridiem && seconds === undefined && minutes * 1 != minutes) {
    result.minutes = (0, _leftPad2.default)(parseInt(minutes, 10));
  }

  if (meridiem) {
    (function () {
      var meridiems = ['am', 'AM', 'pm', 'PM'];
      var indexes = meridiems.map(function (m) {
        return (seconds || minutes).indexOf(m);
      });

      indexes.forEach(function (indexOf, i) {
        if (indexOf != -1) {
          result.meridiem = meridiems[i];
        }
      });
    })();
  }

  return result;
};