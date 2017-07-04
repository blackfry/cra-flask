# empty

Utility that provides different types of empty objects. All objects returned by this library are immutable (made so using [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)) unless the `NODE_ENV` environment variable is set to `'production'`.

# Installation

The library is written for [CommonJS](http://www.commonjs.org/) environments such as [Node](https://nodejs.org/) and works beautifully in the browser using something like [Browserify](http://browserify.org/).

To install, make sure you have Node installed, then, in your project directory, run:

```
$ npm install empty
```

# API

```js
var empty = require('empty');
```

## `empty.object`

```js
var emptyObject = empty.object;

// or

var emptyObject = require('empty/object');

console.log(emptyObject);
// {}
```

## `empty.array`

```js
var emptyArray = empty.array;

// or

var emptyArray = require('empty/array');

console.log(emptyArray);
// []
```

## `empty.func`

```js
var emptyFunction = empty.func;

// or

var emptyFunction = require('empty/function');

console.log(emptyFunction);
// function () {}
```

## `empty.functionThatReturns`

```js
var functionThatReturns = empty.functionThatReturns;

// or

var functionThatReturns = require('empty/functionThatReturns');

console.log(functionThatReturns('foo')());
// 'foo'
```

## `empty.functionThatReturnsTrue`

```js
var functionThatReturnsTrue = empty.functionThatReturnsTrue;

// or

var functionThatReturnsTrue = require('empty/functionThatReturnsTrue');

console.log(functionThatReturnsTrue());
// true
```

## `empty.functionThatReturnsFalse`

```js
var functionThatReturnsFalse = empty.functionThatReturnsFalse;

// or

var functionThatReturnsFalse = require('empty/functionThatReturnsFalse');

console.log(functionThatReturnsFalse());
// false
```

## `empty.functionThatReturnsNull`

```js
var functionThatReturnsNull = empty.functionThatReturnsNull;

// or

var functionThatReturnsNull = require('empty/functionThatReturnsNull');

console.log(functionThatReturnsNull());
// null
```

## `empty.functionThatReturnsThis`

```js
var functionThatReturnsThis = empty.functionThatReturnsThis;

// or

var functionThatReturnsThis = require('empty/functionThatReturnsThis');

console.log(functionThatReturnsThis.call({a: 1}));
// {a: 1}
```

## `empty.functionThatReturnsArgument`

```js
var functionThatReturnsArgument = empty.functionThatReturnsArgument;

// or

var functionThatReturnsArgument = require('empty/functionThatReturnsArgument');

console.log(functionThatReturnsArgument('foo'));
// 'foo'
```

# Credits

Many thanks to [Arturo](https://github.com/acstll) for the name on [NPM](https://www.npmjs.com/package/empty). The original package repository can be found at [here](https://github.com/acstll/empty).
