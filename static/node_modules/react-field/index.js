import React from 'react'
import Field from './src'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      value: 'test'
    }
  }

  render(){
    return <Field value={this.state.value} onChange={(value) => this.setState({value})}/>
  }
}
React.render(<App />, document.getElementById('content'))
