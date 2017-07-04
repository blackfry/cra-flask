"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;
function format(Component) {
  Component.prototype.getValueLink = function (_props) {
    var props = _props || this.props;
    return props.valueLink || {
      value: props.value,
      requestChange: props.onChange
    };
  };
}