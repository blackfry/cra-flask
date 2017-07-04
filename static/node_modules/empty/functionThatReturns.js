'use strict';

module.exports = function (value) {
  return function () {
    return value;
  };
};

if ('production' != process.env.NODE_ENV) {
  Object.freeze(module.exports);
}
