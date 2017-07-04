'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function format(Component) {

  Component.prototype.getDisplayFormat = function (props) {
    var _ref = props || this.props,
        displayFormat = _ref.displayFormat,
        fixedMode = _ref.fixedMode,
        startMode = _ref.startMode;

    if (displayFormat) {
      return displayFormat;
    }
    if (fixedMode) {
      switch (startMode) {
        case 'day':
          return 'DD';
        case 'month':
          return 'MMMM';
        case 'year':
          return 'YYYY';
      }
    }

    return 'L';
  };

  Component.prototype.formatReturnedDate = function (date, props) {
    var _ref2 = props || this.props,
        returnFormat = _ref2.returnFormat;

    return date.format(returnFormat);
  };

  Component.prototype.formatDisplayedDate = function (date, props) {
    return date.format(this.getDisplayFormat(props));
  };

  Component.prototype.parsePropDateString = function (dateString, props) {
    var _ref3 = props || this.props,
        returnFormat = _ref3.returnFormat;

    if (!returnFormat) {
      return (0, _moment2.default)(dateString);
    } else {
      return (0, _moment2.default)(dateString, returnFormat, true);
    }
  };

  Component.prototype.parseInputDateString = function (dateString, props) {
    var format = this.getDisplayFormat(props);
    if (!format) {
      return (0, _moment2.default)(dateString);
    } else {
      return (0, _moment2.default)(dateString, format, true);
    }
  };
}