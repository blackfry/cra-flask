import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import assign from 'object-assign'

export default React.createClass({

  displayName: 'Field',

  propTypes: {
    type: PropTypes.string,
    stopChangePropagation: PropTypes.bool
  },

  getDefaultProps(){
    return {
      stopChangePropagation: true,
      type: 'text'
    }
  },

  render(){
    let onChange = null

    if (typeof this.props.onChange === 'function'){
      //only pass our onChange if the user provided one
      //so the React warning is still displayed if the user didn't provide onChange
      //but provided value
      onChange = this.onChange
    }

    const inputProps = assign({}, this.props)

    delete inputProps.stopChangePropagation

    return <input {...inputProps} onChange={onChange} ref="input"/>
  },

  focus(){
    findDOMNode(this.refs.input).focus()
  },

  onChange(event){
    if (this.props.stopChangePropagation){
      event.stopPropagation()
    }

    this.props.onChange(event.target.value, event)
  }
})
