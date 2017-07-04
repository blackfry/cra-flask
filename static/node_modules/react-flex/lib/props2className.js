'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _join = require('./join');

var _join2 = _interopRequireDefault(_join);

var _props2flex = require('./props2flex');

var _props2flex2 = _interopRequireDefault(_props2flex);

var _prefix = require('./prefix');

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIX = _prefix2.default;

exports.default = function (props) {

  var column = !!props.column;
  var row = !column && !!props.row;
  var reverse = props.reverse ? '-reverse' : '';

  var flex = (0, _props2flex2.default)(props);

  var flexGrow = props.flexGrow;
  var flexShrink = props.flexShrink;
  var flexBasis = props.flexBasis;
  var display = props.inline ? 'inline-flex' : props.display;

  var className = (0, _join2.default)(props.className, props.alignItems ? PREFIX + '--align-items-' + props.alignItems : null, props.alignContent ? PREFIX + '--align-content-' + props.alignContent : null, props.justifyContent ? PREFIX + '--justify-content-' + props.justifyContent : null, props.wrap ? PREFIX + '--wrap' : null, props.alignSelf ? PREFIX + '--align-self-' + props.alignSelf : null, row ? PREFIX + '--row' + reverse : null, column ? PREFIX + '--column' + reverse : null,

  // more like flex item related
  flex != null ? PREFIX + '--flex-' + flex : null, flexGrow != null ? PREFIX + '--flex-grow-' + flexGrow : null, flexShrink != null ? PREFIX + '--flex-shrink-' + flexShrink : null, flexBasis != null ? PREFIX + '--flex-basis-' + flexBasis : null, display != null ? PREFIX + '--display-' + display : null);

  return className;
};