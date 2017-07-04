import React, { PropTypes } from 'react'
import assign from 'object-assign'
import Component from 'react-class'

import join from './join'
import props2className from './props2className'
import cleanup from './cleanup'

class Flex extends Component {

  render(){
    const props = this.props
    const className = join('react-flex', props2className(props))

    const allProps = assign({}, props)

    cleanup(allProps)

    allProps.className = className

    if (props.factory){
      return props.factory(allProps)
    }

    return <div {...allProps} />
  }
}

Flex.defaultProps = {
  row: true,
  wrap: true,
  alignItems: 'center',
  display: 'flex'
}

Flex.propTypes = {

  flex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),

  display: PropTypes.oneOf([
    'flex',
    'inline-flex'
  ]),

  inline: PropTypes.bool,

  reverse: PropTypes.bool,

  row: PropTypes.bool,
  column: PropTypes.bool,
  wrap: PropTypes.bool,

  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  justifyContent: PropTypes.string
}

export default Flex