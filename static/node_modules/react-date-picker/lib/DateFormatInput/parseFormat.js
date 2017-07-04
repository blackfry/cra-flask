'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _formats = require('./formats');

var _formats2 = _interopRequireDefault(_formats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SUGGESTIONS = {
  Y: ['YYYY', 'YY'],
  M: ['MM'],
  D: ['DD'],
  H: ['HH'],
  h: ['hh'],
  m: ['mm'],
  s: ['ss']
};

exports.default = function (format) {
  var index = 0;
  var positionIndex = 0;

  var suggestions = void 0;
  var suggestionMatch = void 0;

  var positions = [];
  var matches = [];

  while (index < format.length) {
    var char = format[index];
    var match = _formats2.default[char];
    var matchObject = void 0;

    suggestionMatch = null;
    suggestions = SUGGESTIONS[char];

    if (!match && !suggestions) {
      positions[positionIndex] = char;
      matches.push(char);
    } else {
      if (suggestions && suggestions.length) {
        // it might be a longer match
        suggestionMatch = suggestions.filter(function (s) {
          return format.substr(index, s.length) == s;
        })[0];
      }

      if (!suggestionMatch) {
        if (!_formats2.default[char]) {
          console.warn('Format ' + char + ' is not supported yet!');
          if (suggestions) {
            console.warn('Use one of ["' + suggestions.join(',') + '"]');
          }
          positions[positionIndex] = char;
          matches.push(char);
        } else {
          // we found a match, with no other suggestion

          var currentFormat = _formats2.default[char];
          var start = positionIndex;
          var end = positionIndex + (currentFormat.length || 1) - 1;

          matchObject = (0, _objectAssign2.default)({}, currentFormat, { format: char, start: start, end: end });

          for (; start <= end; start++) {
            positions[positionIndex] = matchObject;
            positionIndex++;
          }
          index++;
          matches.push(matchObject);
          continue; // to skip incrementing twice
        }
      } else {
          matchObject = (0, _objectAssign2.default)({}, _formats2.default[suggestionMatch], {
            format: suggestionMatch, start: positionIndex
          });
          matches.push(matchObject);

          var endIndex = positionIndex + suggestionMatch.length;

          matchObject.end = endIndex - 1;
          while (positionIndex < endIndex) {
            positions[positionIndex] = matchObject;
            positionIndex++;
            index++;
          }
          continue; // to skip incrementing index once more
        }
    }

    positionIndex++;
    index++;
  }

  return { positions: positions, matches: matches };
};