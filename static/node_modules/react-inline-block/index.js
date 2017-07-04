var InlineBlock = require('./src');
var React = require('react');

console.log('here');
React.render(<div>
  <InlineBlock style={{height: 300, border: '1px solid blue'}}>this is inline block</InlineBlock>
  <InlineBlock style={{width: 200, border: '1px solid red'}}> this is also inline block</InlineBlock>
</div>, document.getElementById('content'))