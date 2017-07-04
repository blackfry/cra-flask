'use strict';

var React = require('react');
var assign = require('object-assign');

var inlineBlockStyle = {
  display: 'inline-block'
};

module.exports = React.createClass({

  displayName: 'ReactInlineBlock',

  render: function render() {
    var style = assign({}, this.props.style, inlineBlockStyle);
    var props = assign({}, this.props, { style: style });

    return React.createElement('div', props);
  }
});