# React Loading Order With Animation

Animate components in order.

[DEMO](http://keske.github.io/react-loading-order-with-animation/)


## Installation

`npm install react-loading-order-with-animation`

## Usage

`import LoadingOrderAnimation from 'react-loading-order-with-animation';`


```javascript
<LoadingOrderAnimation animation="fade-in"
                       move="from-bottom-to-top"
                       distance={30}
                       speed={1000}
                       wait={300}>
  <div>
    Children component
  </div>
</LoadingOrderAnimation>
```

### Props
- `animation` _(String)_ - effect, values: `fade-in`, default: `fade-in`
- `move` _(String)_ - direction, values: `from-top-to-bottom`, `from-bottom-to-top`, `from-left-to-right`, `from-right-to-left`, default: `none`
- `distance` _(Number)_ - direction distance in px, default: `0`
- `speed` _(Number)_ - animation speed in ms, default: `700`
- `wait` _(Number)_ - wait before animation, after, default: `100`
- `block` _(String)_ - css style, values: `inline`, `block`, default: `block`



## Development
```
$ npm install
```

## Run app
```
$ npm start
```
And open in browser: [http://localhost:4000](http://localhost:4000)

## Build
```
$ npm run build
```