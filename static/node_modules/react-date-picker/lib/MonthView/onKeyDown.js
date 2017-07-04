'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event) {
  var key = event.key;

  if (this.props.onKeyDown) {
    if (this.props.onKeyDown(event) === false) {
      return;
    }
  }

  if (key == 'Enter' && this.p.activeDate) {
    this.confirm(this.p.activeDate, event);
  }

  var navKeys = this.p.navKeys || _navKeys2.default;
  var dir = navKeys[key];

  if (!dir) {
    return;
  }

  event.preventDefault();
  this.navigate(dir, event);
};

var _navKeys = require('./navKeys');

var _navKeys2 = _interopRequireDefault(_navKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }