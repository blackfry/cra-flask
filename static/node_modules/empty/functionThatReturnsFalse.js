'use strict';

module.exports = require('./functionThatReturns')(false);

if ('production' != process.env.NODE_ENV) {
  Object.freeze(module.exports);
}
