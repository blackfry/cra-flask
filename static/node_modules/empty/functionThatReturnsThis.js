'use strict';

module.exports = function () {
  return this;
};

if ('production' != process.env.NODE_ENV) {
  Object.freeze(module.exports);
}
