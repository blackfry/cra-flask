'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getSelectionStart;
var document = global.document;

//from http://javascript.nwbox.com/cursor_position/, but added the !window.getSelection check, which
//is needed for newer versions of IE, which adhere to standards
function getSelectionStart(o) {
    if (o.createTextRange && !global.getSelection) {
        var r = document.selection.createRange().duplicate();
        r.moveEnd('character', o.value.length);
        if (r.text == '') return o.value.length;
        return o.value.lastIndexOf(r.text);
    } else return o.selectionStart;
}