'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getSelectionEnd;
var document = global.document;

function getSelectionEnd(o) {
    if (o.createTextRange && !global.getSelection) {
        var r = document.selection.createRange().duplicate();
        r.moveStart('character', -o.value.length);
        return r.text.length;
    } else return o.selectionEnd;
}