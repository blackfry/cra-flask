'use strict';

module.exports = function (argument) {
  return argument;
};

if ('production' != process.env.NODE_ENV) {
  Object.freeze(module.exports);
}
