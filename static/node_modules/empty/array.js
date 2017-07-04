'use strict';

module.exports = [];

if ('production' != process.env.NODE_ENV) {
  Object.freeze(module.exports);
}
