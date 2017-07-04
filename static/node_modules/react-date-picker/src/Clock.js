import React from 'react'
import Component from 'react-class'

import assign from 'object-assign'

import { NotifyResize } from 'react-notify-resize'

import join from './join'
import toMoment from './toMoment'
import normalize from 'react-style-normalizer'

const MINUTES = Array.apply(null, new Array(60)).map((_, index) => index)

const toUpperFirst = (str) => {
  return str ?
    str.charAt(0).toUpperCase() + str.substr(1) :
    ''
}

const transformStyle = normalize({ transform: '' })

const rotateTickStyle = (tick, { width, height }, totalSize, offset) => {
  const result = assign({}, transformStyle)
  const deg = tick * 6

  const transform = `translate3d(${-width / 2}px, ${-height / 2}px, 0px) ` +
    `rotate(${deg}deg) translate3d(0px, -${offset}px, 0px)`

  Object.keys(result).forEach(name => {
    result[name] = transform
  })

  return result
}

export default class Clock extends Component {

  constructor(props) {
    super(props)

    let time
    let seconds

    if (props.defaultSeconds) {
      seconds = props.defaultSeconds == true ?
                  Date.now() / 1000 :
                 +props.defaultSeconds
    }

    if (props.defaultTime) {
      time = props.defaultTime == true ?
              Date.now() :
              +props.defaultTime
    }

    // if (time === undefined) {
    //   seconds = 0
    // }

    this.state = {}

    if (seconds !== undefined) {
      this.state.seconds = seconds
      this.state.defaultSeconds = seconds
    }

    if (time !== undefined) {
      this.state.time = time
      this.state.defaultTime = time
    }
  }

  shouldRun(props) {
    props = props || this.props

    if (props.run === false) {
      return false
    }

    return !!(props.defaultSeconds || props.defaultTime)
  }

  componentDidMount() {
    if (this.shouldRun(this.props)) {
      this.start()
    }

    if (this.props.size == 'auto') {
      this.setState({
        rendered: true
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentRun = this.shouldRun(this.props)
    const nextRun = this.shouldRun(nextProps)

    if (!currentRun && nextRun) {
      this.start()
    } else if (currentRun && !nextRun) {
      this.stop()
    }
  }

  start() {
    this.startTime = Date.now ? Date.now() : +new Date

    this.run()
  }

  stop() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  run() {
    this.timeoutId = setTimeout(() => {
      this.update()
      this.run()
    }, this.props.updateInterval || 1000)
  }

  update() {
    const now = Date.now ? Date.now() : +new Date
    const diff = now - this.startTime

    const seconds = this.getPropsSeconds()

    if (seconds !== undefined) {
      this.setSeconds(seconds + diff / 1000)
      return
    }

    const time = this.getPropsTime()

    this.setTime(time + diff)
  }

  setSeconds(seconds) {
    this.setState({
      seconds
    })

    if (this.props.onSecondsChange) {
      this.props.onSecondsChange(seconds)
    }
  }

  setTime(time) {
    this.setState({
      time
    })

    if (this.props.onTimeChange) {
      this.props.onTimeChange(time)
    }
  }

  getPropsTime() {
    return this.props.time || this.state.defaultTime || 0
  }

  getPropsSeconds() {
    return this.props.seconds || this.state.defaultSeconds
  }

  getSeconds() {
    return this.state.seconds || this.getPropsSeconds()
  }

  getTime() {
    return this.state.time || this.getPropsTime()
  }

  render() {
    const props = this.p = assign({}, this.props)
    let size = props.size

    if (size == 'auto') {
      this.ignoreRender = false
      if (!this.state.rendered) {
        this.ignoreRender = true
      }

      size = props.size = this.state.size
    }

    const valueSeconds = this.getSeconds()
    const valueTime = this.getTime()

    const width = size
    const height = size

    const className = join(
      props.className,
      'react-date-picker__clock',
      `react-date-picker__clock--theme-${props.theme}`
    )

    let seconds
    let minutes
    let hours

    if (valueSeconds != undefined) {
      seconds = Math.floor(valueSeconds % 60)
      minutes = valueSeconds / 60 % 60
      hours = (valueSeconds / 3600) % 24
    } else {
      const mom = toMoment(valueTime)

      seconds = mom.seconds()
      minutes = mom.minutes() + seconds / 60
      hours = (mom.hours() + minutes / 60)
    }

    hours *= 5

    const defaultStyle = {}

    if (props.color) {
      defaultStyle.borderColor = props.color
    }

    const style = assign(defaultStyle, props.style, {
      width, height, borderWidth: props.borderWidth
    })

    const divProps = assign({}, props)

    delete divProps.bigTickHeight
    delete divProps.bigTickOffset
    delete divProps.bigTickWidth
    delete divProps.borderColor
    delete divProps.borderWidth
    delete divProps.centerOverlaySize
    delete divProps.centerSize
    delete divProps.cleanup
    delete divProps.defaultSeconds
    delete divProps.defaultTime
    delete divProps.handHeight
    delete divProps.handOffset
    delete divProps.handWidth
    delete divProps.hourHandDiff
    delete divProps.isDatePickerClock
    delete divProps.minuteHandDiff
    delete divProps.seconds
    delete divProps.secondHandDiff
    delete divProps.secondHandWidth
    delete divProps.showHoursHand
    delete divProps.showMinutesHand
    delete divProps.showSecondsHand
    delete divProps.showSmallTicks
    delete divProps.smallTickHeight
    delete divProps.smallTickOffset
    delete divProps.smallTickWidth
    delete divProps.theme
    delete divProps.time
    delete divProps.tickHeight
    delete divProps.tickOffset
    delete divProps.tickWidth

    if (typeof props.cleanup == 'function') {
      props.cleanup(divProps)
    }

    return <div
      {...divProps}
      className={className}
      style={style}
    >
      {this.renderCenter()}

      {this.renderHourHand(hours)}
      {this.renderMinuteHand(minutes)}
      {this.renderSecondHand(seconds)}

      {this.renderCenterOverlay()}

      {MINUTES.map(this.renderTick)}
      {this.props.size == 'auto' && <NotifyResize notifyOnMount onResize={this.onResize} />}
    </div>
  }

  renderCenter() {
    const props = this.props
    const centerSize = props.centerSize || ((props.bigTickHeight || props.tickHeight) * 3)

    return <div
      className="react-date-picker__clock-center"
      style={{ width: centerSize, height: centerSize }}
    />
  }

  renderCenterOverlay() {
    const props = this.props
    const centerOverlaySize = props.centerOverlaySize || (props.handWidth * 4)

    return <div
      className="react-date-picker__clock-overlay"
      style={{
        width: centerOverlaySize,
        height: centerOverlaySize,
        borderWidth: props.handWidth
      }}
    />
  }

  onResize({ width, height }) {
    if (width != height) {
      console.warn('Clock width != height. Please make sure it\'s a square.')
    }

    this.setState({
      size: width
    })
  }

  renderSecondHand(value) {
    return this.props.showSecondsHand && this.renderHand('second', value)
  }

  renderMinuteHand(value) {
    return this.props.showMinutesHand && this.renderHand('minute', value)
  }

  renderHourHand(value) {
    return this.props.showHoursHand && this.renderHand('hour', value)
  }

  renderHand(name, value) {
    if (this.ignoreRender) {
      return null
    }

    const props = this.p
    const { size, borderWidth } = props

    const height = props[`${name}HandHeight`] ||
      props.handHeight || ((size / 2) - props[`${name}HandDiff`])

    const width = props[`${name}HandWidth`] || props.handWidth || props.tickWidth
    let offset = props[`${name}HandOffset`] || props.handOffset

    if (!offset && offset != 0) {
      offset = 5
    }

    const style = rotateTickStyle(value, { width, height }, size - borderWidth, height / 2 - offset)
    style.width = width
    style.height = height

    if (props.color) {
      style.background = props.color
    }

    const className = join(
      'react-date-picker__clock-hand',
      `react-date-picker__clock-hand-${name}`
    )

    const renderName = `render${toUpperFirst(name)}Hand`

    if (props[renderName]) {
      return props[renderName]({
        key: name,
        className,
        style
      })
    }

    return <div key={name} className={className} style={style} />
  }

  renderTick(tick) {
    if (this.ignoreRender) {
      return null
    }

    const {
      size,
      borderWidth,

      tickWidth,
      smallTickWidth,
      bigTickWidth,

      tickHeight,
      smallTickHeight,
      bigTickHeight,

      tickOffset,
      smallTickOffset,
      bigTickOffset
    } = this.p

    const small = !!(tick % 5)
    const sizeName = small ? 'small' : 'big'

    if (small && !this.props.showSmallTicks) {
      return false
    }

    const className = join(
      'react-date-picker__clock-tick',
      `react-date-picker__clock-tick--${sizeName}`
    )

    const offset = small ?
                    smallTickOffset || tickOffset :
                    bigTickOffset || tickOffset

    const tWidth = small ?
                    smallTickWidth || tickWidth :
                    bigTickWidth || tickWidth

    const tHeight = small ?
                      smallTickHeight || tickHeight :
                      bigTickHeight || tickHeight

    const totalSize = size - borderWidth
    const style = rotateTickStyle(tick, {
      width: tWidth,
      height: tHeight
    }, totalSize, totalSize / 2 - (tHeight / 2 + offset))

    style.height = tHeight
    style.width = tWidth

    if (this.props.color) {
      style.background = this.props.color
    }

    if (this.props.renderTick) {
      return this.props.renderTick({
        tick,
        className,
        style
      })
    }

    return <div key={tick} className={className} style={style} />
  }
}

Clock.defaultProps = {

  centerSize: null,
  centerOverlaySize: null,

  size: 150,
  theme: 'default',

  showSecondsHand: true,
  showHoursHand: true,
  showMinutesHand: true,

  handWidth: 2,
  secondHandWidth: 1,
  handOffset: 10,

  hourHandDiff: 35,
  minuteHandDiff: 25,
  secondHandDiff: 10,

  tickWidth: 1,
  bigTickWidth: 2,
  tickOffset: 2,

  smallTickHeight: 6,
  bigTickHeight: 10,

  color: '',
  borderWidth: 0,
  showSmallTicks: true,
  isDatePickerClock: true
}
