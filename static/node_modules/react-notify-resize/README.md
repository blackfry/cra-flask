# react-notify-resize

> Get resize notifications on any React element

## Install

```sh
$ npm install --save react-notify-resize
```

## Intro

React Component that notifies you whenever it is resized - by any means.

It can be used as a standalone Component inside the HTML element you want to detect resize on.

Or it can be used as a higher-order function that takes your component and returns a `NotifyResize` wrapped component.

## Usage

#### NotifyResize component

```jsx
import React, { Component } from 'react'
import { NotifyResize } from 'react-notify-resize'

class MyComponent extends Component {
  render(){
    return <div style={{position: 'relative'}}>
      <NotifyResize onResize={this.onResize.bind(this)} />
    </div>
  }

  onResize({ width, height }){
    //you get notified when the component div is resized
    //the only condition is that it has a relative or absolute position
  }
}
```

##### Props

 * `onResize({ width, height }): Function`
 * `notifyOnMount: Boolean` - if true, calls the `onResize` prop on component mount. Defaults to `false`
 * `measureSize: Function` - a custom function to measure HTMLElement size, if you want to provide one. It needs to return an object with `{width, height}`. By default `node.offsetWidth` and `node.offsetHeight` are used for measuring element size.

#### NotifyResize higher-order function

```jsx
import notifyResize from 'react-notify-resize'

class MyComponent extends React.Component {

  render(){
    // the element you want to listen for resize must have position relative
    return <div style={{position: 'relative'}}>
      {
        // Include this helper inside the element you want to listen for resize
        this.props.resizeTool
      }
    </div>
  }

  // will be called on resize if it is defined
  onResize({ width, height }){
    // do something on resize
  }
}

const MyNotifiedComponent =  notifyResize(MyComponent)

class App extends React.Component {
  render(){
    return <MyNotifiedComponent onResize={/* called when element changes dimension */} ref="notifier"/>
  }
}
```

Notice that in this case, both the `onResize` instance function is called, if it exists, and the `onResize` prop is called, if it is a function.

You can nest the `resizeTool` prop wherever you want, as long as its parent has a `relative` or `absolute` position.

If you want to get a reference to your actual component, you can access that using `.component`. In the example above, you can use:

```jsx
//if you have a reference to the `app` component
app.refs.notifier.component
````

Not the most elegant access chain, but you can always use the plain component instead of the higher-order function.

## License

#### MIT