'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setCaretPosition;
function setCaretPosition(elem, caretPos) {
  var start = caretPos;
  var end = caretPos;

  if (caretPos && (caretPos.start != undefined || caretPos.end != undefined)) {
    start = caretPos.start || 0;
    end = caretPos.end || start;
  }

  if (elem != null) {
    if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.moveStart('character', start);
      range.moveEnd('character', end);
      range.select();
    } else {
      elem.focus();
      elem.setSelectionRange(start, end);
    }
  }
}