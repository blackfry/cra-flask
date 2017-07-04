import React, { PropTypes } from 'react'
import assign from 'object-assign'
import Component from 'react-class'

import join from './join'
import props2className from './props2className'
import cleanup from './cleanup'

class FlexItem extends Component {

  render(){

    const props = this.props
    const className = join(
      'react-flex-item',
      props2className(props)
    )

    const allProps = assign({}, props)

    cleanup(allProps)

    allProps.className = className

    if (props.factory){
      return props.factory(allProps);
    }

    return <div {...allProps} />
  }
}

FlexItem.defaultProps = {
  flex: 1
}

FlexItem.propTypes = {
  display: PropTypes.oneOf([
    'flex',
    'inline-flex'
  ]),
  inline: (props, propName) => {
    if (props[propName] !== undefined){
      return new Error(`"inline" prop should not be used on "Item". Use "display='inline-flex'" instead`)
    }
  },

  flex: PropTypes.any,
  flexGrow: PropTypes.any,
  flexShrink: PropTypes.any,
  flexBasis: PropTypes.any
}

export default FlexItem