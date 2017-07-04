import React, { PropTypes } from 'react'
import Component from 'react-class'

import { Flex, Item } from 'react-flex'
import InlineBlock from 'react-inline-block'

import assign from 'object-assign'

import joinFunctions from './joinFunctions'
import join from './join'
import bemFactory from './bemFactory'

const bem = bemFactory('react-date-picker__footer')

const SPACER = <Item />

const buttonClassName = 'react-date-picker__footer-button'

const preventDefault = e => e.preventDefault()

export const Button = (props) => {
  const disabledClassName = props.disabled ?
    `${buttonClassName}--disabled` :
    ''

  const className = `${props.className || ''} ${buttonClassName} ${disabledClassName}`
  return <button
    tabIndex={-1}
    {...props}
    className={className}
  />
}

export default class Footer extends Component {

  render() {
    const props = this.p = assign({}, this.props)

    const className = join(props.className, bem(), bem(null, `theme-${props.theme}`))

    const todayButton = this.renderTodayButton()
    const clearButton = this.renderClearButton()

    const okButton = this.renderOkButton()
    const cancelButton = this.renderCancelButton()

    if (!todayButton && !clearButton && !okButton && !cancelButton) {
      return null
    }

    const middleSpacer = (okButton || cancelButton) ? SPACER : null

    const spacer = !props.centerButtons ?
      middleSpacer :
      null

    let children = [
      props.centerButtons && SPACER,

      todayButton,
      clearButton,

      spacer,

      okButton,
      cancelButton,
      props.centerButtons && SPACER
    ]

    if (props.renderChildren) {
      children = props.renderChildren(children, props)
    }

    const flexProps = assign({}, props)

    delete flexProps.actionEvent
    delete flexProps.buttonFactory
    delete flexProps.cancelButton
    delete flexProps.cancelButtonText
    delete flexProps.centerButtons
    delete flexProps.clearDate
    delete flexProps.cleanup
    delete flexProps.clearButton
    delete flexProps.clearButtonText
    delete flexProps.isDatePickerFooter
    delete flexProps.onCancelClick
    delete flexProps.onClearClick
    delete flexProps.onOkClick
    delete flexProps.onTodayClick
    delete flexProps.okButton
    delete flexProps.okButtonText
    delete flexProps.selectDate
    delete flexProps.theme
    delete flexProps.todayButton
    delete flexProps.todayButtonText

    if (typeof props.cleanup == 'function') {
      props.cleanup(flexProps)
    }

    return <Flex
      inline
      row
      {...flexProps}
      justifyContent="center"
      className={className}
      children={children}
    />
  }

  renderTodayButton() {
    if (!this.props.todayButton) {
      return null
    }
    return this.renderButton(this.props.todayButtonText, this.props.onTodayClick)
  }

  renderClearButton() {
    if (!this.props.clearButton) {
      return null
    }

    return this.renderButton({
      children: this.props.clearButtonText,
      disabled: this.props.clearDate === undefined
    }, this.props.onClearClick)
  }

  renderOkButton() {
    if (!this.props.okButton) {
      return null
    }
    return this.renderButton(this.props.okButtonText, this.props.onOkClick)
  }

  renderCancelButton() {
    if (!this.props.cancelButton) {
      return null
    }
    return this.renderButton(this.props.cancelButtonText, this.props.onCancelClick)
  }

  renderButton(props, fn) {
    let text = props.children
    let p = props

    if (typeof props == 'string') {
      p = {}
      text = props
    }

    if (typeof fn == 'function' && !p.onClick && !p.disabled) {
      p.onClick = fn
    }

    const Factory = this.props.buttonFactory

    const onMouseDown = p.onMouseDown ?
      joinFunctions(p.onMouseDown, preventDefault) :
      preventDefault

    return <Factory tabIndex={0} {...p} onMouseDown={onMouseDown}>{text}</Factory>
  }
}

Footer.defaultProps = {
  actionEvent: 'onClick',
  theme: 'default',

  buttonFactory: Button,

  todayButton: true,
  clearButton: true,
  okButton: true,
  cancelButton: true,

  todayButtonText: 'Today',
  clearButtonText: 'Clear',
  okButtonText: 'OK',
  cancelButtonText: 'Cancel',

  isDatePickerFooter: true,
}

Footer.propTypes = {
  theme: PropTypes.string,
  centerButtons: PropTypes.bool,

  cokButtonText: PropTypes.node,
  clearButtonText: PropTypes.node,
  cancelButtonText: PropTypes.node,
  todayButtonText: PropTypes.node,

  onTodayClick: PropTypes.func,
  onClearClick: PropTypes.func,
  onOkClick: PropTypes.func,
  onCancelClick: PropTypes.func
}
