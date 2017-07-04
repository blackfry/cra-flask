"use strict";

exports.__esModule = true;
exports["default"] = stringify;

function stringify(x) {
  try {
    // handle "Converting circular structure to JSON" error
    return JSON.stringify(x);
  } catch (e) {
    return String(x);
  }
}

module.exports = exports["default"];