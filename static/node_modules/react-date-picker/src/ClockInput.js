import React from 'react'
import Component from 'react-class'

import throttle from 'lodash.throttle'
import assign from 'object-assign'

import { Flex } from 'react-flex'

import join from './join'
import toMoment from './toMoment'

import Clock from './Clock'
import DateFormatSpinnerInput from './DateFormatSpinnerInput'

export default class ClockInput extends Component {

  constructor(props) {
    super(props)

    const delay = props.changeDelay
    this.throttleSetValue = delay == -1 ? this.setValue : throttle(this.setValue, delay)

    this.state = {
      value: props.defaultValue || Date.now()
    }
  }

  getValue() {
    return this.value
  }

  render() {
    const props = this.props
    const format = props.dateFormat || props.format

    const dateFormat = format.substring(format.toLowerCase().indexOf('hh'))

    this.dateFormat = dateFormat

    this.value = props.value !== undefined ? props.value : this.state.value

    const className = join(
      props.className,
      'react-date-picker__clock-input',
      props.theme && `react-date-picker__clock-input--theme-${props.theme}`
    )

    const flexProps = assign({}, this.props)

    delete flexProps.changeDelay
    delete flexProps.cleanup
    delete flexProps.dateFormat
    delete flexProps.isClockInput
    delete flexProps.onEnterKey
    delete flexProps.onEscapeKey
    delete flexProps.onTimeChange
    delete flexProps.updateOnWheel
    delete flexProps.theme
    delete flexProps.viewIndex
    delete flexProps.wrapTime

    if (typeof this.props.cleanup == 'function') {
      this.props.cleanup(flexProps)
    }

    return <Flex
      column
      {...flexProps}
      value={null}
      defaultValue={null}
      className={className}
    >
      {this.renderClock()}
      {this.renderTimeInput()}
    </Flex>
  }

  renderTimeInput() {
    const props = this.props
    const dateInput = React.Children
                  .toArray(props.children)
                  .filter(child => child && child.props && child.props.isDateInput)[0]

    const dateInputProps = assign({}, this.props, {
      ref: (field) => { this.field = field },
      tabIndex: props.readOnly ? -1 : (props.tabIndex || 0),
      readOnly: props.readOnly,
      value: this.value,
      dateFormat: this.dateFormat,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      size: props.size || (this.dateFormat.length + 2)
    })

    if (dateInput) {
      return React.cloneElement(dateInput, dateInputProps)
    }

    return <DateFormatSpinnerInput {...dateInputProps} style={null} />
  }

  focus() {
    if (this.field) {
      this.field.focus()
    }
  }

  onKeyDown(event) {
    if (this.props.onEnterKey && event.key == 'Enter') {
      this.props.onEnterKey(event)
    }

    if (this.props.onEscapeKey && event.key == 'Escape') {
      this.props.onEscapeKey(event)
    }
  }

  onChange(value) {
    if (this.props.value === undefined) {
      this.setState({
        value
      })
    }

    if (this.props.onChange) {
      this.throttleSetValue(value)
    }
  }

  setValue(value) {
    if (this.props.value === undefined) {
      this.setState({
        value
      })
    }

    if (this.props.onChange) {
      this.props.onChange(value, this.dateFormat)
    }
  }

  renderClock() {
    const props = this.props
    const clock = React.Children
                  .toArray(props.children)
                  .filter(child => child && child.props && child.props.isDatePickerClock)[0]

    const dateFormat = this.dateFormat
    const time = toMoment(this.value, { dateFormat })

    const clockProps = {
      time,
      theme: props.theme,
      showMinutesHand: dateFormat.indexOf('mm') != -1,
      showSecondsHand: dateFormat.indexOf('ss') != -1
    }

    if (clock) {
      return React.cloneElement(clock, clockProps)
    }

    return <Clock {...clockProps} />
  }
}

ClockInput.defaultProps = {
  changeDelay: 50,

  dateFormat: 'YYYY-MM-DD',
  updateOnWheel: true,

  theme: 'default',

  wrapTime: false,
  isClockInput: true,

  onTimeChange: () => {}
}

ClockInput.propTypes = {
}
