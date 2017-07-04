import React, { PropTypes } from 'react'
import Component from 'react-class'

const notifyResizeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
    display: 'block',
    pointerEvents: 'none',
    opacity: 0,
}

const expandToolStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
}

const contractToolStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
}

const contractToolInnerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '200%',
  height: '200%',
}

class NotifyResize extends Component {
  constructor(props){
    super(props)

    this.state = {
      notifyResizeWidth: 0,
      notifyResizeHeight: 0,

      expandToolWidth: 0,
      expandToolHeight: 0,

      contractToolWidth: 0,
      contractToolHeight: 0,
    }

  }

  componentDidMount(){
    if (typeof this.props.onMount === 'function'){
      this.props.onMount(this)
    }

    this.resetResizeTool()

    if (this.props.notifyOnMount){

      const { notifyResizeWidth: width, notifyResizeHeight: height } = this.notifyResizeSize
      this.onResize({ width, height })
    }
  }

  render() {
    return <div
      ref="notifyResize"
      style={notifyResizeStyle}
      onScroll={this.checkResize}
    >
      {this.renderExpandTool()}
      {this.renderContractTool()}
    </div>
  }

  renderExpandTool(){
    return <div
      ref="expandTool"
      className="expandTool"
      style={expandToolStyle}
    >
      <div
        ref="expandToolInner"
        className="expandToolInner"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: this.state.expandToolWidth,
          height: this.state.expandToolHeight,
        }}
      />
    </div>
  }

  renderContractTool(){
    return <div
      ref="contractTool"
      className="contractTool"
      style={contractToolStyle}
      onScroll={this.checkResize}
    >
      <div ref="contractInner" style={contractToolInnerStyle} />
    </div>
  }

  resetResizeTool(){
    this.setDimensions()
    this.scrollToBottomExpandTool()
  }

  setDimensions(){
    const {
      notifyResizeWidth,
      notifyResizeHeight
    } = this.notifyResizeSize = this.getDimensions()

    // Resize tool will be bigger than it's parent by 1 pixel in each direction
    this.setState({
      notifyResizeWidth,
      notifyResizeHeight,
      expandToolWidth: notifyResizeWidth + 1,
      expandToolHeight: notifyResizeHeight + 1
    })
  }

  getDimensions(){
    const notifyResize = this.refs.notifyResize
    const node = notifyResize.parentElement || notifyResize

    let size

    if (typeof this.props.measureSize == 'function'){
      size = this.props.measureSize(node, notifyResize)
    } else {
      size = {
        width: node.offsetWidth,
        height: node.offsetHeight
      }
    }

    return {
      notifyResizeWidth: size.width,
      notifyResizeHeight: size.height
    }
  }

  scrollToBottomExpandTool(){
    // so the scroll moves when element resizes

    if (this.refs.notifyResize) {
      setTimeout(() => {
        // scroll to bottom
        const expandTool = this.refs.expandTool

        if (expandTool){
          expandTool.scrollTop = expandTool.scrollHeight
          expandTool.scrollLeft = expandTool.scrollWidth
        }

        const contractTool = this.refs.contractTool
        if (contractTool){
          contractTool.scrollTop = contractTool.scrollHeight
          contractTool.scrollLeft = contractTool.scrollWidth
        }

      }, 0)
    }
  }

  checkResize(){
    const {
      notifyResizeWidth,
      notifyResizeHeight
    } = this.getDimensions()

    if (
      notifyResizeWidth !== this.state.notifyResizeWidth ||
      notifyResizeHeight !== this.state.notifyResizeHeight
      ) {
      // reset resizeToolDimensions
      this.onResize({
        width: notifyResizeWidth,
        height: notifyResizeHeight
      })
      this.resetResizeTool()
    }
  }

  onResize({ width, height }){
    if (typeof this.props.onResize === 'function') {
      this.props.onResize({ width, height })
    }
  }
}

NotifyResize.propTypes = {
  onResize: PropTypes.func,
  onMount: PropTypes.func,
  notifyOnMount: PropTypes.bool
}

const notifyResize = Component => class NotifyResizeWrapper extends Component {
  componentDidMount(){
    const component = this.component = this.refs.component

    // check if they are mounted
    if(!this.notifyResize) {
      console.warn(
        'For notifyResize to work you must render resizeTool from {props.resizeTool}'
      )
    }
  }

  onNotifyResizeMount(notifier){
    this.notifyResize = notifier
  }

  render() {

    const resizeTool = <NotifyResize
      onResize={this.onResize}
      onMount={this.onNotifyResizeMount}

      notifyOnMount={this.props.notifyOnMount}
    />

    return <Component ref="component" {...this.props} resizeTool={resizeTool}/>
  }

  onResize(...args){
    if (typeof this.props.onResize === 'function'){
      this.props.onResize(...args)
    }

    if (typeof this.refs.component.onResize === 'function'){
      this.refs.component.onResize(...args)
    }
  }
}

export default notifyResize

export {
  NotifyResize
}
