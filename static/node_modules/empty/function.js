'use strict';

module.exports = function () {};

if ('production' != process.env.NODE_ENV) {
  Object.freeze(module.exports);
}
