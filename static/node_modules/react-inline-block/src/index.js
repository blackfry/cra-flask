var React = require('react');
var assign = require('object-assign');

var inlineBlockStyle = {
  display: 'inline-block'
}

module.exports = React.createClass({

  displayName: 'ReactInlineBlock',

  render(){
    const style = assign({}, this.props.style, inlineBlockStyle)
    const props = assign({}, this.props, { style: style })

    return <div {...props}/>
  }
})