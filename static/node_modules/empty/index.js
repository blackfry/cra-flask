'use strict';

exports.object = require('./object');
exports.array = require('./array');
exports.func = require('./function');
exports.functionThatReturns = require('./functionThatReturns');
exports.functionThatReturnsTrue = require('./functionThatReturnsTrue');
exports.functionThatReturnsFalse = require('./functionThatReturnsFalse');
exports.functionThatReturnsNull = require('./functionThatReturnsNull');
exports.functionThatReturnsThis = require('./functionThatReturnsThis');
exports.functionThatReturnsArgument = require('./functionThatReturnsArgument');

if ('production' != process.env.NODE_ENV) {
  Object.freeze(exports);
}
