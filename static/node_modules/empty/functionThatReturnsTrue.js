'use strict';

module.exports = require('./functionThatReturns')(true);

if ('production' != process.env.NODE_ENV) {
  Object.freeze(module.exports);
}
