(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/radu/code/react-flex/node_modules/browserify/lib/_empty.js":[function(require,module,exports){

},{}],"/home/radu/code/react-flex/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],"/home/radu/code/react-flex/node_modules/i-s/index.js":[function(require,module,exports){
module.exports = require('./src')
},{"./src":"/home/radu/code/react-flex/node_modules/i-s/src/index.js"}],"/home/radu/code/react-flex/node_modules/i-s/src/arguments.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(value){
    return objectToString.apply(value) === '[object Arguments]' || !!value.callee
}
},{}],"/home/radu/code/react-flex/node_modules/i-s/src/array.js":[function(require,module,exports){
'use strict'

module.exports = function(value){
    return Array.isArray(value)
}
},{}],"/home/radu/code/react-flex/node_modules/i-s/src/boolean.js":[function(require,module,exports){
'use strict'

module.exports = function(value){
    return typeof value == 'boolean'
}
},{}],"/home/radu/code/react-flex/node_modules/i-s/src/date.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(value){
    return objectToString.apply(value) === '[object Date]'
}
},{}],"/home/radu/code/react-flex/node_modules/i-s/src/float.js":[function(require,module,exports){
'use strict'

var number = require('./number')

module.exports = function(value){
    return number(value) && (value === parseFloat(value, 10)) && !(value === parseInt(value, 10))
}
},{"./number":"/home/radu/code/react-flex/node_modules/i-s/src/number.js"}],"/home/radu/code/react-flex/node_modules/i-s/src/function.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(value){
    return objectToString.apply(value) === '[object Function]'
}
},{}],"/home/radu/code/react-flex/node_modules/i-s/src/index.js":[function(require,module,exports){
'use strict'

module.exports = {
    'numeric'  : require('./numeric'),
    'number'   : require('./number'),
    'int'      : require('./int'),
    'float'    : require('./float'),
    'string'   : require('./string'),
    'function' : require('./function'),
    'object'   : require('./object'),
    'arguments': require('./arguments'),
    'boolean'  : require('./boolean'),
    'date'     : require('./date'),
    'regexp'   : require('./regexp'),
    'array'    : require('./array')
}
},{"./arguments":"/home/radu/code/react-flex/node_modules/i-s/src/arguments.js","./array":"/home/radu/code/react-flex/node_modules/i-s/src/array.js","./boolean":"/home/radu/code/react-flex/node_modules/i-s/src/boolean.js","./date":"/home/radu/code/react-flex/node_modules/i-s/src/date.js","./float":"/home/radu/code/react-flex/node_modules/i-s/src/float.js","./function":"/home/radu/code/react-flex/node_modules/i-s/src/function.js","./int":"/home/radu/code/react-flex/node_modules/i-s/src/int.js","./number":"/home/radu/code/react-flex/node_modules/i-s/src/number.js","./numeric":"/home/radu/code/react-flex/node_modules/i-s/src/numeric.js","./object":"/home/radu/code/react-flex/node_modules/i-s/src/object.js","./regexp":"/home/radu/code/react-flex/node_modules/i-s/src/regexp.js","./string":"/home/radu/code/react-flex/node_modules/i-s/src/string.js"}],"/home/radu/code/react-flex/node_modules/i-s/src/int.js":[function(require,module,exports){
'use strict'

var number = require('./number')

module.exports = function(value){
    return number(value) && (value === parseInt(value, 10))
}
},{"./number":"/home/radu/code/react-flex/node_modules/i-s/src/number.js"}],"/home/radu/code/react-flex/node_modules/i-s/src/number.js":[function(require,module,exports){
'use strict'

module.exports = function(value){
    return typeof value === 'number' && isFinite(value)
}
},{}],"/home/radu/code/react-flex/node_modules/i-s/src/numeric.js":[function(require,module,exports){
'use strict'

module.exports = function(value){
    return !isNaN( parseFloat( value ) ) && isFinite( value )
}
},{}],"/home/radu/code/react-flex/node_modules/i-s/src/object.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(value){
    return objectToString.apply(value) === '[object Object]'
}
},{}],"/home/radu/code/react-flex/node_modules/i-s/src/regexp.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(value){
    return objectToString.apply(value) === '[object RegExp]'
}
},{}],"/home/radu/code/react-flex/node_modules/i-s/src/string.js":[function(require,module,exports){
'use strict'

module.exports = function(value){
    return typeof value == 'string'
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/index.js":[function(require,module,exports){
'use strict'

module.exports = {
   prefixProperties: require('./src/prefixProperties') ,
   object: require('./src/toStyleObject'),
   string: require('./src/toStyleString')
}
},{"./src/prefixProperties":"/home/radu/code/react-flex/node_modules/to-style/src/prefixProperties.js","./src/toStyleObject":"/home/radu/code/react-flex/node_modules/to-style/src/toStyleObject.js","./src/toStyleString":"/home/radu/code/react-flex/node_modules/to-style/src/toStyleString.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/index.js":[function(require,module,exports){
module.exports = {
    toLowerFirst     : require('./src/toLowerFirst'),
    toUpperFirst     : require('./src/toUpperFirst'),
    separate         : require('./src/separate'),
    stripWhitespace  : require('./src/stripWhitespace'),
    compactWhitespace: require('./src/compactWhitespace'),
    camelize         : require('./src/camelize'),
    humanize         : require('./src/humanize'),
    hyphenate        : require('./src/hyphenate'),

    is: require('./src/is')
}
},{"./src/camelize":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/camelize.js","./src/compactWhitespace":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/compactWhitespace.js","./src/humanize":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/humanize.js","./src/hyphenate":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/hyphenate.js","./src/is":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/index.js","./src/separate":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/separate.js","./src/stripWhitespace":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/stripWhitespace.js","./src/toLowerFirst":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/toLowerFirst.js","./src/toUpperFirst":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/toUpperFirst.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/functionally/index.js":[function(require,module,exports){
    /**
     * Utility methods for working with functions.
     * These methods augment the Function prototype.
     *
     * Using {@link #before}
     *
     *      function log(m){
     *          console.log(m)
     *      }
     *
     *      var doLog = function (m){
     *          console.log('LOG ')
     *      }.before(log)
     *
     *      doLog('test')
     *      //will log
     *      //"LOG "
     *      //and then
     *      //"test"
     *
     *
     *
     * Using {@link #bindArgs}:
     *
     *      //returns the sum of all arguments
     *      function add(){
     *          var sum = 0
     *          [].from(arguments).forEach(function(n){
     *              sum += n
     *          })
     *
     *          return sum
     *      }
     *
     *      var add1 = add.bindArgs(1)
     *
     *      add1(2, 3) == 6
     *
     * Using {@link #lockArgs}:
     *
     *      function add(){
     *          var sum = 0
     *          [].from(arguments).forEach(function(n){
     *              sum += n
     *          })
     *
     *          return sum
     *      }
     *
     *      var add1_2   = add.lockArgs(1,2)
     *      var add1_2_3 = add.lockArgs(1,2,3)
     *
     *      add1_2(3,4)  == 3 //args are locked to only be 1 and 2
     *      add1_2_3(6)  == 6 //args are locked to only be 1, 2 and 3
     *
     *
     *
     * Using {@link #compose}:
     *
     *      function multiply(a,b){
     *          return a* b
     *      }
     *
     *      var multiply2 = multiply.curry()(2)
     *
     *      Function.compose(multiply2( add(5,6) )) == multiply2( add(5,6) )
     *
     *
     * @class Function
     */

    var SLICE = Array.prototype.slice

    var composeTwo = function(f, g) {
            return function () {
                return f(g.apply(this, arguments))
            }
        },

        curry = function(fn, n){
            if (typeof n !== 'number'){
                n = fn.length
            }

            function getCurryClosure(prevArgs){

                function curryClosure() {

                    var len  = arguments.length,
                        args = [].concat(prevArgs)

                    if (len){
                        args.push.apply(args, arguments)
                    }

                    if (args.length < n){
                        return getCurryClosure(args)
                    }

                    return fn.apply(this, args)
                }

                return curryClosure
            }

            return getCurryClosure([])
        },

        find = curry(function(fn, target){
            if (typeof target.find == 'function'){
                return target.find(fn)
            }

            if (Array.isArray(target)){
                var i   = 0
                var len = target.length
                var it

                for(; i < len; i++){
                    it = target[i]
                    if (fn(it, i, target)){
                        return it
                    }
                }

                return
            }

            if (typeof target == 'object'){
                var keys = Object.keys(target)
                var i = 0
                var len = keys.length
                var k
                var it

                for( ; i < len; i++){
                    k  = keys[i]
                    it = target[k]

                    if (fn(it, k, target)){
                        return it
                    }
                }
            }
        }),

        bindFunctionsOf = function(obj) {
            Object.keys(obj).forEach(function(k){
                if (typeof obj[k] == 'function'){
                    obj[k] = obj[k].bind(obj)
                }
            })

            return obj
        },

        /*
         * @param {Function...} an enumeration of functions, each consuming the result of the following function.
         *
         * For example: compose(c, b, a)(1,4) == c(b(a(1,4)))
         *
         * @return the result of the first function in the enumeration
         */
        compose = function(){

            var args = arguments
            var len  = args.length
            var i    = 0
            var f    = args[0]

            while (++i < len) {
                f = composeTwo(f, args[i])
            }

            return f
        },

        chain = function(where, fn, secondFn){
            var fns = [
                where === 'before'? secondFn: fn,
                where !== 'before'? secondFn: fn
            ]

            return function(){
                if (where === 'before'){
                    secondFn.apply(this, arguments)
                }

                var result = fn.apply(this, arguments)

                if (where !== 'before'){
                    secondFn.apply(this, arguments)
                }

                return result
            }
        },

        forward = function(fn, scope){
            return fn.bind?
                       fn.bind(scope):
                       function(){
                            return fn.apply(scope, arguments)
                       }
        },

        once = function(fn, scope){
            var called = false,
                result

            return function(){
                if (called){
                    return result
                }

                called = true

                return result = fn.call(scope || this)
            }
        },

        bindArgsArray = function(fn, args){
            return function(){
                var thisArgs = SLICE.call(args || [])

                if (arguments.length){
                    thisArgs.push.apply(thisArgs, arguments)
                }

                return fn.apply(this, thisArgs)
            }
        },

        bindArgs = function(fn){
            return bindArgsArray(fn, SLICE.call(arguments,1))
        },

        lock = function(fn, scope){
            var args = SLICE.call(arguments, 2)

            return function(){
                return fn.apply(scope, args)
            }
        },

        lockArgsArray = function(fn, args){

            return function(){
                if (!Array.isArray(args)){
                    args = SLICE.call(args || [])
                }

                return fn.apply(this, args)
            }
        },

        lockArgs = function(fn){
            return lockArgsArray(fn, SLICE.call(arguments, 1) )
        },

        skipArgs = function(fn, count){
            return function(){
                var args = SLICE.call(arguments, count || 0)

                return fn.apply(this, args)
            }
        },

        intercept = function(interceptedFn, interceptingFn, withStopArg){

            return function(){
                var args    = [].from(arguments),
                    stopArg = { stop: false }

                if (withStopArg){
                    args.push(stopArg)
                }

                var result = interceptingFn.apply(this, args)

                if (withStopArg){
                    if (stopArg.stop === true){
                        return result
                    }

                } else {
                    if (result === false){
                        return result
                    }
                }

                //the interception was not stopped
                return interceptedFn.apply(this, arguments)
            }

        },

        delay = function(fn, delay, scope){

            var delayIsNumber = delay * 1 == delay

            if (arguments.length == 2 && !delayIsNumber){
                scope = delay
                delay = 0
            } else {
                if (!delayIsNumber){
                    delay = 0
                }
            }

            return function(){
                var self = scope || this,
                    args = arguments

                if (delay < 0){
                    fn.apply(self, args)
                    return
                }

                if (delay || !setImmediate){
                    setTimeout(function(){
                        fn.apply(self, args)
                    }, delay)

                } else {
                    setImmediate(function(){
                        fn.apply(self, args)
                    })
                }
            }
        },

        defer = function(fn, scope){
            return delay(fn, 0, scope)
        },

        buffer = function(fn, delay, scope){

            var timeoutId = -1

            return function(){

                var self = scope || this,
                    args = arguments

                if (delay < 0){
                    fn.apply(self, args)
                    return
                }

                var withTimeout = delay || !setImmediate,
                    clearFn = withTimeout?
                                clearTimeout:
                                clearImmediate,
                    setFn   = withTimeout?
                                setTimeout:
                                setImmediate

                if (timeoutId !== -1){
                    clearFn(timeoutId)
                }

                timeoutId = setFn(function(){
                    fn.apply(self, args)
                    self = null
                }, delay)

            }

        },

        throttle = function(fn, delay, scope) {
            var timeoutId = -1,
                self,
                args

            return function () {

                self = scope || this
                args = arguments

                if (timeoutId !== -1) {
                    //the function was called once again in the delay interval
                } else {
                    timeoutId = setTimeout(function () {
                        fn.apply(self, args)

                        self = null
                        timeoutId = -1
                    }, delay)
                }

            }

        },

        maxArgs = function(fn, count){
            return function(){
                return fn.apply(this, SLICE.call(arguments, 0, count))
            }
        },

        spread = function(fn, delay, scope){

            var timeoutId       = -1
            var callCount       = 0
            var executeCount    = 0
            var nextArgs        = {}
            var increaseCounter = true
            var resultingFnUnbound
            var resultingFn

            resultingFn = resultingFnUnbound = function(){

                var args = arguments,
                    self = scope || this

                if (increaseCounter){
                    nextArgs[callCount++] = {args: args, scope: self}
                }

                if (timeoutId !== -1){
                    //the function was called once again in the delay interval
                } else {
                    timeoutId = setTimeout(function(){
                        fn.apply(self, args)

                        timeoutId = -1
                        executeCount++

                        if (callCount !== executeCount){
                            resultingFn = bindArgsArray(resultingFnUnbound, nextArgs[executeCount].args).bind(nextArgs[executeCount].scope)
                            delete nextArgs[executeCount]

                            increaseCounter = false
                            resultingFn.apply(self)
                            increaseCounter = true
                        } else {
                            nextArgs = {}
                        }
                    }, delay)
                }

            }

            return resultingFn
        },

        /*
         * @param {Array} args the array for which to create a cache key
         * @param {Number} [cacheParamNumber] the number of args to use for the cache key. Use this to limit the args that area actually used for the cache key
         */
        getCacheKey = function(args, cacheParamNumber){
            if (cacheParamNumber == null){
                cacheParamNumber = -1
            }

            var i        = 0,
                len      = Math.min(args.length, cacheParamNumber),
                cacheKey = [],
                it

            for ( ; i < len; i++){
                it = args[i]

                if (root.check.isPlainObject(it) || Array.isArray(it)){
                    cacheKey.push(JSON.stringify(it))
                } else {
                    cacheKey.push(String(it))
                }
            }

            return cacheKey.join(', ')
        },

        /*
         * @param {Function} fn - the function to cache results for
         * @param {Number} skipCacheParamNumber - the index of the boolean parameter that makes this function skip the caching and
         * actually return computed results.
         * @param {Function|String} cacheBucketMethod - a function or the name of a method on this object which makes caching distributed across multiple buckets.
         * If given, cached results will be searched into the cache corresponding to this bucket. If no result found, return computed result.
         *
         * For example this param is very useful when a function from a prototype is cached,
         * but we want to return the same cached results only for one object that inherits that proto, not for all objects. Thus, for example for Wes.Element,
         * we use the 'getId' cacheBucketMethod to indicate cached results for one object only.
         * @param {Function} [cacheKeyBuilder] A function to be used to compose the cache key
         *
         * @return {Function} a new function, which returns results from cache, if they are available, otherwise uses the given fn to compute the results.
         * This returned function has a 'clearCache' function attached, which clears the caching. If a parameter ( a bucket id) is  provided,
         * only clears the cache in the specified cache bucket.
         */
        cache = function(fn, config){
            config = config || {}

            var bucketCache = {},
                cache       = {},
                skipCacheParamNumber = config.skipCacheIndex,
                cacheBucketMethod    = config.cacheBucket,
                cacheKeyBuilder      = config.cacheKey,
                cacheArgsLength      = skipCacheParamNumber == null?
                                            fn.length:
                                            skipCacheParamNumber,
                cachingFn

            cachingFn = function(){
                var result,
                    skipCache = skipCacheParamNumber != null?
                                                arguments[skipCacheParamNumber] === true:
                                                false,
                    args = skipCache?
                                    SLICE.call(arguments, 0, cacheArgsLength):
                                    SLICE.call(arguments),

                    cacheBucketId = cacheBucketMethod != null?
                                        typeof cacheBucketMethod == 'function'?
                                            cacheBucketMethod():
                                            typeof this[cacheBucketMethod] == 'function'?
                                                this[cacheBucketMethod]():
                                                null
                                        :
                                        null,


                    cacheObject = cacheBucketId?
                                        bucketCache[cacheBucketId]:
                                        cache,

                    cacheKey = (cacheKeyBuilder || getCacheKey)(args, cacheArgsLength)

                if (cacheBucketId && !cacheObject){
                    cacheObject = bucketCache[cacheBucketId] = {}
                }

                if (skipCache || cacheObject[cacheKey] == null){
                    cacheObject[cacheKey] = result = fn.apply(this, args)
                } else {
                    result = cacheObject[cacheKey]
                }

                return result
            }

            /*
             * @param {String|Object|Number} [bucketId] the bucket for which to clear the cache. If none given, clears all the cache for this function.
             */
            cachingFn.clearCache = function(bucketId){
                if (bucketId){
                    delete bucketCache[String(bucketId)]
                } else {
                    cache = {}
                    bucketCache = {}
                }
            }

            /*
             *
             * @param {Array} cacheArgs The array of objects from which to create the cache key
             * @param {Number} [cacheParamNumber] A limit for the cache args that are actually used to compute the cache key.
             * @param {Function} [cacheKeyBuilder] The function to be used to compute the cache key from the given cacheArgs and cacheParamNumber
             */
            cachingFn.getCache = function(cacheArgs, cacheParamNumber, cacheKeyBuilder){
                return cachingFn.getBucketCache(null, cacheArgs, cacheParamNumber, cacheKeyBuilder)
            }

            /*
             *
             * @param {String} bucketId The id of the cache bucket from which to retrieve the cached value
             * @param {Array} cacheArgs The array of objects from which to create the cache key
             * @param {Number} [cacheParamNumber] A limit for the cache args that are actually used to compute the cache key.
             * @param {Function} [cacheKeyBuilder] The function to be used to compute the cache key from the given cacheArgs and cacheParamNumber
             */
            cachingFn.getBucketCache = function(bucketId, cacheArgs, cacheParamNumber, cacheKeyBuilder){
                var cacheObject = cache,
                    cacheKey = (cacheKeyBuilder || getCacheKey)(cacheArgs, cacheParamNumber)

                if (bucketId){
                    bucketId = String(bucketId);

                    cacheObject = bucketCache[bucketId] = bucketCache[bucketId] || {}
                }

                return cacheObject[cacheKey]
            }

            /*
             *
             * @param {Object} value The value to set in the cache
             * @param {Array} cacheArgs The array of objects from which to create the cache key
             * @param {Number} [cacheParamNumber] A limit for the cache args that are actually used to compute the cache key.
             * @param {Function} [cacheKeyBuilder] The function to be used to compute the cache key from the given cacheArgs and cacheParamNumber
             */
            cachingFn.setCache = function(value, cacheArgs, cacheParamNumber, cacheKeyBuilder){
                return cachingFn.setBucketCache(null, value, cacheArgs, cacheParamNumber, cacheKeyBuilder)
            }

            /*
             *
             * @param {String} bucketId The id of the cache bucket for which to set the cache value
             * @param {Object} value The value to set in the cache
             * @param {Array} cacheArgs The array of objects from which to create the cache key
             * @param {Number} [cacheParamNumber] A limit for the cache args that are actually used to compute the cache key.
             * @param {Function} [cacheKeyBuilder] The function to be used to compute the cache key from the given cacheArgs and cacheParamNumber
             */
            cachingFn.setBucketCache = function(bucketId, value, cacheArgs, cacheParamNumber, cacheKeyBuilder){

                var cacheObject = cache,
                    cacheKey = (cacheKeyBuilder || getCacheKey)(cacheArgs, cacheParamNumber)

                if (bucketId){
                    bucketId = String(bucketId)

                    cacheObject = bucketCache[bucketId] = bucketCache[bucketId] || {};
                }

                return cacheObject[cacheKey] = value
            }

            return cachingFn
        }

module.exports = {

    map: curry(function(fn, value){
        return value != undefined && typeof value.map?
                value.map(fn):
                fn(value)
    }),

    dot: curry(function(prop, value){
        return value != undefined? value[prop]: undefined
    }),

    maxArgs: curry(maxArgs),

    /**
     * @method compose
     *
     * Example:
     *
     *      zippy.Function.compose(c, b, a)
     *
     * See {@link Function#compose}
     */
    compose: compose,

    /**
     * See {@link Function#self}
     */
    self: function(fn){
        return fn
    },

    /**
     * See {@link Function#buffer}
     */
    buffer: buffer,

    /**
     * See {@link Function#delay}
     */
    delay: delay,

    /**
     * See {@link Function#defer}
     * @param {Function} fn
     * @param {Object} scope
     */
    defer:defer,

    /**
     * See {@link Function#skipArgs}
     * @param {Function} fn
     * @param {Number} [count=0] how many args to skip when calling the resulting function
     * @return {Function} The function that will call the original fn without the first count args.
     */
    skipArgs: skipArgs,

    /**
     * See {@link Function#intercept}
     */
    intercept: function(fn, interceptedFn, withStopArgs){
        return intercept(interceptedFn, fn, withStopArgs)
    },

    /**
     * See {@link Function#throttle}
     */
    throttle: throttle,

    /**
     * See {@link Function#spread}
     */
    spread: spread,

    /**
     * See {@link Function#chain}
     */
    chain: function(fn, where, mainFn){
        return chain(where, mainFn, fn)
    },

    /**
     * See {@link Function#before}
     */
    before: function(fn, otherFn){
        return chain('before', otherFn, fn)
    },

    /**
     * See {@link Function#after}
     */
    after: function(fn, otherFn){
        return chain('after', otherFn, fn)
    },

    /**
     * See {@link Function#curry}
     */
    curry: curry,

    /**
     * See {@link Function#forward}
     */
    forward: forward,

    /**
     * See {@link Function#once}
     */
    once: once,

    /**
     * See {@link Function#bindArgs}
     */
    bindArgs: function(fn){
        return bindArgsArray(fn, SLICE.call(arguments, 1))
    },

    /**
     * See {@link Function#bindArgsArray}
     */
    bindArgsArray: bindArgsArray,

    /**
     * See {@link Function#lockArgs}
     */
    lockArgs: function(fn){
        return lockArgsArray(fn, SLICE.call(arguments, 1))
    },

    /**
     * See {@link Function#lockArgsArray}
     */
    lockArgsArray: lockArgsArray,

    bindFunctionsOf: bindFunctionsOf,

    find: find
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/index.js":[function(require,module,exports){
module.exports = require('./src')
},{"./src":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/index.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/arguments.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(value){
    return objectToString.apply(value) === '[object Arguments]' || !!value.callee
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/array.js":[function(require,module,exports){
'use strict'

module.exports = function(value){
    return Array.isArray(value)
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/boolean.js":[function(require,module,exports){
'use strict'

module.exports = function(value){
    return typeof value == 'boolean'
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/date.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(value){
    return objectToString.apply(value) === '[object Date]'
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/float.js":[function(require,module,exports){
'use strict'

var number = require('./number')

module.exports = function(value){
    return number(value) && (value === parseFloat(value, 10)) && !(value === parseInt(value, 10))
}
},{"./number":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/number.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/function.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(value){
    return objectToString.apply(value) === '[object Function]'
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/index.js":[function(require,module,exports){
'use strict'

module.exports = {
    'numeric'  : require('./numeric'),
    'number'   : require('./number'),
    'int'      : require('./int'),
    'float'    : require('./float'),
    'string'   : require('./string'),
    'function' : require('./function'),
    'object'   : require('./object'),
    'arguments': require('./arguments'),
    'boolean'  : require('./boolean'),
    'date'     : require('./date'),
    'regexp'   : require('./regexp'),
    'array'    : require('./array')
}
},{"./arguments":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/arguments.js","./array":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/array.js","./boolean":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/boolean.js","./date":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/date.js","./float":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/float.js","./function":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/function.js","./int":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/int.js","./number":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/number.js","./numeric":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/numeric.js","./object":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/object.js","./regexp":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/regexp.js","./string":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/string.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/int.js":[function(require,module,exports){
'use strict'

var number = require('./number')

module.exports = function(value){
    return number(value) && (value === parseInt(value, 10))
}
},{"./number":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/number.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/number.js":[function(require,module,exports){
'use strict'

module.exports = function(value){
    return typeof value === 'number' && isFinite(value)
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/numeric.js":[function(require,module,exports){
'use strict'

module.exports = function(value){
    return !isNaN( parseFloat( value ) ) && isFinite( value )
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/object.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(value){
    return objectToString.apply(value) === '[object Object]'
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/regexp.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(value){
    return objectToString.apply(value) === '[object RegExp]'
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/src/string.js":[function(require,module,exports){
'use strict'

module.exports = function(value){
    return typeof value == 'string'
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/isemail/index.js":[function(require,module,exports){
module.exports = require('./lib/isemail');

},{"./lib/isemail":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/isemail/lib/isemail.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/isemail/lib/isemail.js":[function(require,module,exports){
(function (process){
/**
 * To validate an email address according to RFCs 5321, 5322 and others
 *
 * Copyright © 2008-2011, Dominic Sayers
 * Test schema documentation Copyright © 2011, Daniel Marschall
 * Port for Node.js Copyright © 2013, GlobeSherpa
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *   - Redistributions of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *   - Neither the name of Dominic Sayers nor the names of its contributors may
 *     be used to endorse or promote products derived from this software without
 *     specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 * @author      Dominic Sayers <dominic@sayers.cc>
 * @author      Eli Skeggs <eskeggs@globesherpa.com>
 * @copyright   2008-2011 Dominic Sayers
 * @copyright   2013-2014 GlobeSherpa
 * @license     http://www.opensource.org/licenses/bsd-license.php BSD License
 * @link        http://www.dominicsayers.com/isemail
 * @link        https://github.com/globesherpa/isemail
 * @version     1.1.1 - Optimization pass, simplify constants, style, dead code.
 */

// lazy-loaded
var dns, HAS_REQUIRE = typeof require !== 'undefined';

// categories
var ISEMAIL_VALID_CATEGORY = 1;
var ISEMAIL_DNSWARN = 7;
var ISEMAIL_RFC5321 = 15;
var ISEMAIL_CFWS = 31;
var ISEMAIL_DEPREC = 63;
var ISEMAIL_RFC5322 = 127;
var ISEMAIL_ERR = 255;

// diagnoses
// address is valid
var ISEMAIL_VALID = 0;
// address is valid but a DNS check was not successful
var ISEMAIL_DNSWARN_NO_MX_RECORD = 5;
var ISEMAIL_DNSWARN_NO_RECORD = 6;
// address is valid for SMTP but has unusual elements
var ISEMAIL_RFC5321_TLD = 9;
var ISEMAIL_RFC5321_TLDNUMERIC = 10;
var ISEMAIL_RFC5321_QUOTEDSTRING = 11;
var ISEMAIL_RFC5321_ADDRESSLITERAL = 12;
var ISEMAIL_RFC5321_IPV6DEPRECATED = 13;
// address is valid within the message but cannot be used unmodified for the
// envelope
var ISEMAIL_CFWS_COMMENT = 17;
var ISEMAIL_CFWS_FWS = 18;
// address contains deprecated elements but may still be valid in restricted
// contexts
var ISEMAIL_DEPREC_LOCALPART = 33;
var ISEMAIL_DEPREC_FWS = 34;
var ISEMAIL_DEPREC_QTEXT = 35;
var ISEMAIL_DEPREC_QP = 36;
var ISEMAIL_DEPREC_COMMENT = 37;
var ISEMAIL_DEPREC_CTEXT = 38;
var ISEMAIL_DEPREC_CFWS_NEAR_AT = 49;
// the address is only valid according to the broad definition of RFC 5322, but
// otherwise invalid
var ISEMAIL_RFC5322_DOMAIN = 65;
var ISEMAIL_RFC5322_TOOLONG = 66;
var ISEMAIL_RFC5322_LOCAL_TOOLONG = 67;
var ISEMAIL_RFC5322_DOMAIN_TOOLONG = 68;
var ISEMAIL_RFC5322_LABEL_TOOLONG = 69;
var ISEMAIL_RFC5322_DOMAINLITERAL = 70;
var ISEMAIL_RFC5322_DOMLIT_OBSDTEXT = 71;
var ISEMAIL_RFC5322_IPV6_GRPCOUNT = 72;
var ISEMAIL_RFC5322_IPV6_2X2XCOLON = 73;
var ISEMAIL_RFC5322_IPV6_BADCHAR = 74;
var ISEMAIL_RFC5322_IPV6_MAXGRPS = 75;
var ISEMAIL_RFC5322_IPV6_COLONSTRT = 76;
var ISEMAIL_RFC5322_IPV6_COLONEND = 77;
// address is invalid for any purpose
var ISEMAIL_ERR_EXPECTING_DTEXT = 129;
var ISEMAIL_ERR_NOLOCALPART = 130;
var ISEMAIL_ERR_NODOMAIN = 131;
var ISEMAIL_ERR_CONSECUTIVEDOTS = 132;
var ISEMAIL_ERR_ATEXT_AFTER_CFWS = 133;
var ISEMAIL_ERR_ATEXT_AFTER_QS = 134;
var ISEMAIL_ERR_ATEXT_AFTER_DOMLIT = 135;
var ISEMAIL_ERR_EXPECTING_QPAIR = 136;
var ISEMAIL_ERR_EXPECTING_ATEXT = 137;
var ISEMAIL_ERR_EXPECTING_QTEXT = 138;
var ISEMAIL_ERR_EXPECTING_CTEXT = 139;
var ISEMAIL_ERR_BACKSLASHEND = 140;
var ISEMAIL_ERR_DOT_START = 141;
var ISEMAIL_ERR_DOT_END = 142;
var ISEMAIL_ERR_DOMAINHYPHENSTART = 143;
var ISEMAIL_ERR_DOMAINHYPHENEND = 144;
var ISEMAIL_ERR_UNCLOSEDQUOTEDSTR = 145;
var ISEMAIL_ERR_UNCLOSEDCOMMENT = 146;
var ISEMAIL_ERR_UNCLOSEDDOMLIT = 147;
var ISEMAIL_ERR_FWS_CRLF_X2 = 148;
var ISEMAIL_ERR_FWS_CRLF_END = 149;
var ISEMAIL_ERR_CR_NO_LF = 150;
var ISEMAIL_ERR_UNKNOWN_TLD = 160;
var ISEMAIL_ERR_TOOSHORT_DOMAIN = 161;

// function control
var THRESHOLD = 16;
// email parts
var COMPONENT_LOCALPART = 0;
var COMPONENT_DOMAIN = 1;
var COMPONENT_LITERAL = 2;
var CONTEXT_COMMENT = 3;
var CONTEXT_FWS = 4;
var CONTEXT_QUOTEDSTRING = 5;
var CONTEXT_QUOTEDPAIR = 6;

// US-ASCII visible characters not valid for atext
// (http://tools.ietf.org/html/rfc5322#section-3.2.3)
var SPECIALS = '()<>[]:;@\\,."';

function optimizeLookup(string) {
  var body = '', min = 0x100, max = 0, lookup = new Array(min);
  for (var i = min - 1; i >= 0; i--) {
    lookup[i] = false;
  }
  for (var i = 0; i < string.length; i++) {
    var chr = string.charCodeAt(i);
    if (chr < min) {
      min = chr;
    }
    if (chr > max) {
      max = chr;
    }
    lookup[chr] = true;
  }
  lookup.length = max;
  var body = 'var lookup = ' + JSON.stringify(lookup) + ';\n';
  body += 'return function(code) {\n';
  body += '  if (code < ' + min + ' || code > ' + max + ') {\n';
  body += '    return false;\n';
  body += '  }\n';
  body += '  return lookup[code];\n';
  body += '}';
  return (new Function(body))();
}

var specialsLookup = optimizeLookup(SPECIALS);

// matches valid IPv4 addresses from the end of a string
var IPv4_REGEX =
  /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
var IPv6_REGEX = /^[a-fA-F\d]{0,4}$/;
var IPv6_REGEX_TEST = IPv6_REGEX.test.bind(IPv6_REGEX);

var hasOwn = Object.prototype.hasOwnProperty;

/**
 * Get the largest number in the array.
 *
 * Returns -Infinity if the array is empty.
 *
 * @param {Array.<number>} array The array to scan.
 * @return {number} The largest number contained.
 */
function maxValue(array) {
  var v = -Infinity, i = 0, n = array.length;

  for (; i < n; i++) {
    if (array[i] > v) {
      v = array[i];
    }
  }

  return v;
}

/**
 * Check that an email address conforms to RFCs 5321, 5322 and others
 *
 * As of Version 3.0, we are now distinguishing clearly between a Mailbox
 * as defined by RFC 5321 and an addr-spec as defined by RFC 5322. Depending
 * on the context, either can be regarded as a valid email address. The
 * RFC 5321 Mailbox specification is more restrictive (comments, white space
 * and obsolete forms are not allowed).
 *
 * @param {string} email The email address to check.
 * @param {boolean} checkDNS If true then will check DNS for MX records. If true
 *   this isEmail _will_ be asynchronous.
 * @param {*} errorLevel Determines the boundary between valid and invalid
 *   addresses. Status codes above this number will be returned as-is, status
 *   codes below will be returned as ISEMAIL_VALID. Thus the calling program can
 *   simply look for ISEMAIL_VALID if it is only interested in whether an
 *   address is valid or not. The errorLevel will determine how "picky"
 *   isEmail() is about the address. If omitted or passed as false then
 *   isEmail() will return true or false rather than an integer error or
 *   warning. NB Note the difference between errorLevel = false and
 *   errorLevel = 0.
 * @return {*}
 */
function isEmail(email, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  options || (options = {});

  var threshold, diagnose;
  if (typeof options.errorLevel === 'number') {
    diagnose = true;
    threshold = options.errorLevel;
  } else {
    diagnose = !!options.errorLevel;
    threshold = ISEMAIL_VALID;
  }

  if (options.tldWhitelist && typeof options.tldWhitelist !== 'object') {
    throw new TypeError('expected array or object tldWhitelist');
  }

  if (options.minDomainAtoms && (options.minDomainAtoms !==
      ((+options.minDomainAtoms) | 0) || options.minDomainAtoms < 0)) {
    throw new TypeError('expected positive integer minDomainAtoms');
  }

  var maxResult = ISEMAIL_VALID;

  function updateResult(value) {
    if (value > maxResult) {
      maxResult = value;
    }
  }

  var context = {
    now: COMPONENT_LOCALPART,
    prev: COMPONENT_LOCALPART,
    stack: [COMPONENT_LOCALPART]
  };

  var token = '', prevToken = '', charCode = 0;
  var parseData = {local: '', domain: ''};
  var atomList = {local: [''], domain: ['']};

  var elementCount = 0, elementLength = 0, crlfCount = 0;
  var hyphenFlag = false, assertEnd = false;

  for (var i = 0; i < email.length; i++) {
    token = email[i];

    switch (context.now) {
    // local-part
    case COMPONENT_LOCALPART:
      // http://tools.ietf.org/html/rfc5322#section-3.4.1
      //   local-part      =   dot-atom / quoted-string / obs-local-part
      //
      //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
      //
      //   dot-atom-text   =   1*atext *("." 1*atext)
      //
      //   quoted-string   =   [CFWS]
      //                       DQUOTE *([FWS] qcontent) [FWS] DQUOTE
      //                       [CFWS]
      //
      //   obs-local-part  =   word *("." word)
      //
      //   word            =   atom / quoted-string
      //
      //   atom            =   [CFWS] 1*atext [CFWS]
      switch (token) {
      // comment
      case '(':
        if (elementLength === 0) {
          // comments are OK at the beginning of an element
          updateResult(elementCount === 0 ? ISEMAIL_CFWS_COMMENT :
            ISEMAIL_DEPREC_COMMENT);
        } else {
          updateResult(ISEMAIL_CFWS_COMMENT);
           // can't start a comment in an element, should be end
          assertEnd = true;
        }
        context.stack.push(context.now);
        context.now = CONTEXT_COMMENT;
        break;
      // next dot-atom element
      case '.':
        if (elementLength === 0) {
          // another dot, already?
          updateResult(elementCount === 0 ? ISEMAIL_ERR_DOT_START :
            ISEMAIL_ERR_CONSECUTIVEDOTS);
        } else {
          // the entire local-part can be a quoted string for RFC 5321
          // if it's just one atom that is quoted then it's an RFC 5322 obsolete
          // form
          if (assertEnd) {
            updateResult(ISEMAIL_DEPREC_LOCALPART);
          }

          // CFWS & quoted strings are OK again now we're at the beginning of an
          // element (although they are obsolete forms)
          assertEnd = false;
          elementLength = 0;
          elementCount++;
          parseData.local += token;
          atomList.local[elementCount] = ''; // TODO: push?
        }
        break;
      // quoted string
      case '"':
        if (elementLength === 0) {
          // the entire local-part can be a quoted string for RFC 5321
          // if it's just one atom that is quoted then it's an RFC 5322 obsolete
          // form
          updateResult(elementCount === 0 ? ISEMAIL_RFC5321_QUOTEDSTRING :
            ISEMAIL_DEPREC_LOCALPART);

          parseData.local += token;
          atomList.local[elementCount] += token;
          elementLength++;
          assertEnd = true; // quoted string must be the entire element
          context.stack.push(context.now);
          context.now = CONTEXT_QUOTEDSTRING;
        } else {
          updateResult(ISEMAIL_ERR_EXPECTING_ATEXT);
        }
        break;
      // folding white space
      case '\r':
        if ((++i === email.length) || email[i] !== '\n') {
          // fatal error
          updateResult(ISEMAIL_ERR_CR_NO_LF);
          break;
        }
      case ' ':
      case '\t':
        if (elementLength === 0) {
          updateResult(elementCount === 0 ? ISEMAIL_CFWS_FWS :
            ISEMAIL_DEPREC_FWS);
        } else {
          // we can't start FWS in the middle of an element, better be end
          assertEnd = true;
        }

        context.stack.push(context.now);
        context.now = CONTEXT_FWS;
        prevToken = token;
        break;
      // @
      case '@':
        // at this point we should have a valid local-part
        /* istanbul ignore next: logically unreachable */
        if (context.stack.length !== 1) {
          throw new Error('unexpected item on context stack');
        }

        if (parseData.local.length === 0) {
          // fatal error
          updateResult(ISEMAIL_ERR_NOLOCALPART);
        } else if (elementLength === 0) {
          // fatal error
          updateResult(ISEMAIL_ERR_DOT_END);
        // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.1
        //   the maximum total length of a user name or other local-part is 64
        //   octets
        } else if (parseData.local.length > 64) {
          updateResult(ISEMAIL_RFC5322_LOCAL_TOOLONG);
        // http://tools.ietf.org/html/rfc5322#section-3.4.1
        //   comments and folding white space
        //   SHOULD NOT be used around the "@" in the addr-spec
        //
        // http://tools.ietf.org/html/rfc2119
        // 4. SHOULD NOT  this phrase, or the phrase "NOT RECOMMENDED" mean that
        //    there may exist valid reasons in particular circumstances when the
        //    particular behavior is acceptable or even useful, but the full
        //    implications should be understood and the case carefully weighed
        //    before implementing any behavior described with this label
        } else if ((context.prev === CONTEXT_COMMENT) ||
            (context.prev === CONTEXT_FWS)) {
          updateResult(ISEMAIL_DEPREC_CFWS_NEAR_AT);
        }

        // clear everything down for the domain parsing
        context.now = COMPONENT_DOMAIN; // where we are
        context.stack[0] = COMPONENT_DOMAIN; // where we have been
        elementCount = 0;
        elementLength = 0;
        assertEnd = false; // CFWS can only appear at the end of the element
        break;
      // atext
      default:
        // http://tools.ietf.org/html/rfc5322#section-3.2.3
        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
        //            "!" / "#" /     ;  characters not including
        //            "$" / "%" /     ;  specials.  Used for atoms.
        //            "&" / "'" /
        //            "*" / "+" /
        //            "-" / "/" /
        //            "=" / "?" /
        //            "^" / "_" /
        //            "`" / "{" /
        //            "|" / "}" /
        //            "~"
        if (assertEnd) {
          // we have encountered atext where it is no longer valid
          switch (context.prev) {
          case CONTEXT_COMMENT:
          case CONTEXT_FWS:
            updateResult(ISEMAIL_ERR_ATEXT_AFTER_CFWS);
            break;
          case CONTEXT_QUOTEDSTRING:
            updateResult(ISEMAIL_ERR_ATEXT_AFTER_QS);
            break;
          /* istanbul ignore next: logically unreachable */
          default:
            throw new Error('more atext found where none is allowed, ' +
              'but unrecognized prev context: ' + context.prev);
          }
        } else {
          context.prev = context.now;
          charCode = token.charCodeAt(0);

          if (charCode < 33 || charCode > 126 || charCode === 10 ||
              specialsLookup(charCode)) {
            // fatal error
            updateResult(ISEMAIL_ERR_EXPECTING_ATEXT);
          }

          parseData.local += token;
          atomList.local[elementCount] += token;
          elementLength++;
        }
      }
      break;
    case COMPONENT_DOMAIN:
      // http://tools.ietf.org/html/rfc5322#section-3.4.1
      //   domain          =   dot-atom / domain-literal / obs-domain
      //
      //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
      //
      //   dot-atom-text   =   1*atext *("." 1*atext)
      //
      //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
      //
      //   dtext           =   %d33-90 /          ; Printable US-ASCII
      //                       %d94-126 /         ;  characters not including
      //                       obs-dtext          ;  "[", "]", or "\"
      //
      //   obs-domain      =   atom *("." atom)
      //
      //   atom            =   [CFWS] 1*atext [CFWS]

      // http://tools.ietf.org/html/rfc5321#section-4.1.2
      //   Mailbox        = Local-part "@" ( Domain / address-literal )
      //
      //   Domain         = sub-domain *("." sub-domain)
      //
      //   address-literal  = "[" ( IPv4-address-literal /
      //                    IPv6-address-literal /
      //                    General-address-literal ) "]"
      //                    ; See Section 4.1.3

      // http://tools.ietf.org/html/rfc5322#section-3.4.1
      //      Note: A liberal syntax for the domain portion of addr-spec is
      //      given here.  However, the domain portion contains addressing
      //      information specified by and used in other protocols (e.g.,
      //      [RFC1034], [RFC1035], [RFC1123], [RFC5321]).  It is therefore
      //      incumbent upon implementations to conform to the syntax of
      //      addresses for the context in which they are used.
      // is_email() author's note: it's not clear how to interpret this in
      // the context of a general email address validator. The conclusion I
      // have reached is this: "addressing information" must comply with
      // RFC 5321 (and in turn RFC 1035), anything that is "semantically
      // invisible" must comply only with RFC 5322.
      switch (token) {
      // comment
      case '(':
        if (elementLength === 0) {
          // comments at the start of the domain are deprecated in the text
          // comments at the start of a subdomain are obs-domain
          // (http://tools.ietf.org/html/rfc5322#section-3.4.1)
          updateResult(elementCount === 0 ? ISEMAIL_DEPREC_CFWS_NEAR_AT :
            ISEMAIL_DEPREC_COMMENT);
        } else {
          updateResult(ISEMAIL_CFWS_COMMENT);
          assertEnd = true; // can't start a comment mid-element, better be end
        }

        context.stack.push(context.now);
        context.now = CONTEXT_COMMENT;
        break;
      // next dot-atom element
      case '.':
        if (elementLength === 0) {
          // another dot, already? fatal error
          updateResult(elementCount === 0 ? ISEMAIL_ERR_DOT_START :
            ISEMAIL_ERR_CONSECUTIVEDOTS);
        } else if (hyphenFlag) {
          // previous subdomain ended in a hyphen
          updateResult(ISEMAIL_ERR_DOMAINHYPHENEND); // fatal error
        } else if (elementLength > 63) {
          // Nowhere in RFC 5321 does it say explicitly that the
          // domain part of a Mailbox must be a valid domain according
          // to the DNS standards set out in RFC 1035, but this *is*
          // implied in several places. For instance, wherever the idea
          // of host routing is discussed the RFC says that the domain
          // must be looked up in the DNS. This would be nonsense unless
          // the domain was designed to be a valid DNS domain. Hence we
          // must conclude that the RFC 1035 restriction on label length
          // also applies to RFC 5321 domains.
          //
          // http://tools.ietf.org/html/rfc1035#section-2.3.4
          // labels          63 octets or less

          updateResult(ISEMAIL_RFC5322_LABEL_TOOLONG);
        }

        // CFWS is OK again now we're at the beginning of an element (although
        // it may be obsolete CFWS)
        assertEnd = false;
        elementLength = 0;
        elementCount++;
        atomList.domain[elementCount] = '';
        parseData.domain += token;

        break;
      // domain literal
      case '[':
        if (parseData.domain.length === 0) {
          // domain literal must be the only component
          assertEnd = true;
          elementLength++;
          context.stack.push(context.now);
          context.now = COMPONENT_LITERAL;
          parseData.domain += token;
          atomList.domain[elementCount] += token;
          parseData.literal = '';
        } else {
          // fatal error
          updateResult(ISEMAIL_ERR_EXPECTING_ATEXT);
        }
        break;
      // folding white space
      case '\r':
        if ((++i === email.length) || email[i] !== '\n') {
          // fatal error
          updateResult(ISEMAIL_ERR_CR_NO_LF);
          break;
        }
      case ' ':
      case '\t':
        if (elementLength === 0) {
          updateResult(elementCount === 0 ? ISEMAIL_DEPREC_CFWS_NEAR_AT :
            ISEMAIL_DEPREC_FWS);
        } else {
          // we can't start FWS in the middle of an element, so this better be
          // the end
          updateResult(ISEMAIL_CFWS_FWS);
          assertEnd = true;
        }

        context.stack.push(context.now);
        context.now = CONTEXT_FWS;
        prevToken = token;
        break;
      // atext
      default:
        // RFC 5322 allows any atext...
        // http://tools.ietf.org/html/rfc5322#section-3.2.3
        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
        //            "!" / "#" /     ;  characters not including
        //            "$" / "%" /     ;  specials.  Used for atoms.
        //            "&" / "'" /
        //            "*" / "+" /
        //            "-" / "/" /
        //            "=" / "?" /
        //            "^" / "_" /
        //            "`" / "{" /
        //            "|" / "}" /
        //            "~"

        // But RFC 5321 only allows letter-digit-hyphen to comply with DNS rules
        //   (RFCs 1034 & 1123)
        // http://tools.ietf.org/html/rfc5321#section-4.1.2
        //   sub-domain     = Let-dig [Ldh-str]
        //
        //   Let-dig        = ALPHA / DIGIT
        //
        //   Ldh-str        = *( ALPHA / DIGIT / "-" ) Let-dig
        //
        if (assertEnd) {
          // we have encountered atext where it is no longer valid
          switch (context.prev) {
          case CONTEXT_COMMENT:
          case CONTEXT_FWS:
            updateResult(ISEMAIL_ERR_ATEXT_AFTER_CFWS);
            break;
          case COMPONENT_LITERAL:
            updateResult(ISEMAIL_ERR_ATEXT_AFTER_DOMLIT);
            break;
          /* istanbul ignore next: logically unreachable */
          default:
            throw new Error('more atext found where none is allowed, ' +
              'but unrecognized prev context: ' + context.prev);
          }
        }

        charCode = token.charCodeAt(0);
        // assume this token isn't a hyphen unless we discover it is
        hyphenFlag = false;

        if (charCode < 33 || charCode > 126 || specialsLookup(charCode)) {
          // fatal error
          updateResult(ISEMAIL_ERR_EXPECTING_ATEXT);
        } else if (token === '-') {
          if (elementLength === 0) {
            // hyphens can't be at the beginning of a subdomain
            updateResult(ISEMAIL_ERR_DOMAINHYPHENSTART); // fatal error
          }

          hyphenFlag = true;
        } else if (!((charCode > 47 && charCode < 58) ||
                     (charCode > 64 && charCode < 91) ||
                     (charCode > 96 && charCode < 123))) {
          // not an RFC 5321 subdomain, but still OK by RFC 5322
          updateResult(ISEMAIL_RFC5322_DOMAIN);
        }

        parseData.domain += token;
        atomList.domain[elementCount] += token;
        elementLength++;
      }
      break;
    // domain literal
    case COMPONENT_LITERAL:
      // http://tools.ietf.org/html/rfc5322#section-3.4.1
      //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
      //
      //   dtext           =   %d33-90 /          ; Printable US-ASCII
      //                       %d94-126 /         ;  characters not including
      //                       obs-dtext          ;  "[", "]", or "\"
      //
      //   obs-dtext       =   obs-NO-WS-CTL / quoted-pair
      switch (token) {
      // end of domain literal
      case ']':
        if (maxResult < ISEMAIL_DEPREC) {
          // Could be a valid RFC 5321 address literal, so let's check

          // http://tools.ietf.org/html/rfc5321#section-4.1.2
          //   address-literal  = "[" ( IPv4-address-literal /
          //                    IPv6-address-literal /
          //                    General-address-literal ) "]"
          //                    ; See Section 4.1.3
          //
          // http://tools.ietf.org/html/rfc5321#section-4.1.3
          //   IPv4-address-literal  = Snum 3("."  Snum)
          //
          //   IPv6-address-literal  = "IPv6:" IPv6-addr
          //
          //   General-address-literal  = Standardized-tag ":" 1*dcontent
          //
          //   Standardized-tag  = Ldh-str
          //                     ; Standardized-tag MUST be specified in a
          //                     ; Standards-Track RFC and registered with IANA
          //
          //   dcontent      = %d33-90 / ; Printable US-ASCII
          //                 %d94-126 ; excl. "[", "\", "]"
          //
          //   Snum          = 1*3DIGIT
          //                 ; representing a decimal integer
          //                 ; value in the range 0 through 255
          //
          //   IPv6-addr     = IPv6-full / IPv6-comp / IPv6v4-full / IPv6v4-comp
          //
          //   IPv6-hex      = 1*4HEXDIG
          //
          //   IPv6-full     = IPv6-hex 7(":" IPv6-hex)
          //
          //   IPv6-comp     = [IPv6-hex *5(":" IPv6-hex)] "::"
          //                 [IPv6-hex *5(":" IPv6-hex)]
          //                 ; The "::" represents at least 2 16-bit groups of
          //                 ; zeros.  No more than 6 groups in addition to the
          //                 ; "::" may be present.
          //
          //   IPv6v4-full   = IPv6-hex 5(":" IPv6-hex) ":" IPv4-address-literal
          //
          //   IPv6v4-comp   = [IPv6-hex *3(":" IPv6-hex)] "::"
          //                 [IPv6-hex *3(":" IPv6-hex) ":"]
          //                 IPv4-address-literal
          //                 ; The "::" represents at least 2 16-bit groups of
          //                 ; zeros.  No more than 4 groups in addition to the
          //                 ; "::" and IPv4-address-literal may be present.
          //
          // is_email() author's note: We can't use ip2long() to validate
          // IPv4 addresses because it accepts abbreviated addresses
          // (xxx.xxx.xxx), expanding the last group to complete the address.
          // filter_var() validates IPv6 address inconsistently (up to PHP 5.3.3
          // at least) -- see http://bugs.php.net/bug.php?id=53236 for example

          // TODO: var here?
          var maxGroups = 8, matchesIP, index = false;
          var addressLiteral = parseData.literal;

          // maybe extract IPv4 part from the end of the address-literal
          if (matchesIP = IPv4_REGEX.exec(addressLiteral)) {
            if ((index = matchesIP.index) !== 0) {
              // convert IPv4 part to IPv6 format for futher testing
              addressLiteral = addressLiteral.slice(0, matchesIP.index) + '0:0';
            }
          }

          if (index === 0) {
            // nothing there except a valid IPv4 address, so...
            updateResult(ISEMAIL_RFC5321_ADDRESSLITERAL);
          } else if (addressLiteral.slice(0, 5).toLowerCase() !== 'ipv6:') {
            updateResult(ISEMAIL_RFC5322_DOMAINLITERAL);
          } else {
            var match = addressLiteral.substr(5);
            matchesIP = match.split(':');
            index = match.indexOf('::');

            if (!~index) {
              // need exactly the right number of groups
              if (matchesIP.length !== maxGroups) {
                updateResult(ISEMAIL_RFC5322_IPV6_GRPCOUNT);
              }
            } else if (index !== match.lastIndexOf('::')) {
              updateResult(ISEMAIL_RFC5322_IPV6_2X2XCOLON);
            } else {
              if (index === 0 || index === match.length - 2) {
                // RFC 4291 allows :: at the start or end of an address with
                // 7 other groups in addition
                maxGroups++;
              }

              if (matchesIP.length > maxGroups) {
                updateResult(ISEMAIL_RFC5322_IPV6_MAXGRPS);
              } else if (matchesIP.length === maxGroups) {
                // eliding a single "::"
                updateResult(ISEMAIL_RFC5321_IPV6DEPRECATED);
              }
            }

            // IPv6 testing strategy
            if (match[0] === ':' && match[1] !== ':') {
              updateResult(ISEMAIL_RFC5322_IPV6_COLONSTRT);
            } else if (match[match.length - 1] === ':' &&
                       match[match.length - 2] !== ':') {
              updateResult(ISEMAIL_RFC5322_IPV6_COLONEND);
            } else if (matchesIP.every(IPv6_REGEX_TEST)) {
              updateResult(ISEMAIL_RFC5321_ADDRESSLITERAL);
            } else {
              updateResult(ISEMAIL_RFC5322_IPV6_BADCHAR);
            }
          }
        } else {
          updateResult(ISEMAIL_RFC5322_DOMAINLITERAL);
        }

        parseData.domain += token;
        atomList.domain[elementCount] += token;
        elementLength++;
        context.prev = context.now;
        context.now = context.stack.pop();
        break;
      case '\\':
        updateResult(ISEMAIL_RFC5322_DOMLIT_OBSDTEXT);
        context.stack.push(context.now);
        context.now = CONTEXT_QUOTEDPAIR;
        break;
      // folding white space
      case '\r':
        if ((++i === email.length) || email[i] !== '\n') {
          // fatal error
          updateResult(ISEMAIL_ERR_CR_NO_LF);
          break;
        }
      case ' ':
      case '\t':
        updateResult(ISEMAIL_CFWS_FWS);

        context.stack.push(context.now);
        context.now = CONTEXT_FWS;
        prevToken = token;
        break;
      // dtext
      default:
        // http://tools.ietf.org/html/rfc5322#section-3.4.1
        //   dtext         =   %d33-90 /  ; Printable US-ASCII
        //                     %d94-126 / ;  characters not including
        //                     obs-dtext  ;  "[", "]", or "\"
        //
        //   obs-dtext     =   obs-NO-WS-CTL / quoted-pair
        //
        //   obs-NO-WS-CTL =   %d1-8 /    ; US-ASCII control
        //                     %d11 /     ;  characters that do not
        //                     %d12 /     ;  include the carriage
        //                     %d14-31 /  ;  return, line feed, and
        //                     %d127      ;  white space characters
        charCode = token.charCodeAt(0);

        // CR, LF, SP & HTAB have already been parsed above
        if (charCode > 127 || charCode === 0 || token === '[') {
          // fatal error
          updateResult(ISEMAIL_ERR_EXPECTING_DTEXT);
          break;
        } else if (charCode < 33 || charCode === 127) {
          updateResult(ISEMAIL_RFC5322_DOMLIT_OBSDTEXT);
        }

        parseData.literal += token;
        parseData.domain += token;
        atomList.domain[elementCount] += token;
        elementLength++;
      }
      break;
    // quoted string
    case CONTEXT_QUOTEDSTRING:
      // http://tools.ietf.org/html/rfc5322#section-3.2.4
      //   quoted-string = [CFWS]
      //                   DQUOTE *([FWS] qcontent) [FWS] DQUOTE
      //                   [CFWS]
      //
      //   qcontent      = qtext / quoted-pair
      switch (token) {
      // quoted pair
      case '\\':
        context.stack.push(context.now);
        context.now = CONTEXT_QUOTEDPAIR;
        break;
      // folding white space
      // inside a quoted string, spaces are allowed as regular characters
      // it's only FWS if we include HTAB or CRLF
      case '\r':
        if ((++i === email.length) || email[i] !== '\n') {
          // fatal error
          updateResult(ISEMAIL_ERR_CR_NO_LF);
          break;
        }
      case '\t':
        // http://tools.ietf.org/html/rfc5322#section-3.2.2
        //   Runs of FWS, comment, or CFWS that occur between lexical tokens in
        //   a structured header field are semantically interpreted as a single
        //   space character.

        // http://tools.ietf.org/html/rfc5322#section-3.2.4
        //   the CRLF in any FWS/CFWS that appears within the quoted-string [is]
        //   semantically "invisible" and therefore not part of the
        //   quoted-string

        parseData.local += ' ';
        atomList.local[elementCount] += ' ';
        elementLength++;

        updateResult(ISEMAIL_CFWS_FWS);
        context.stack.push(context.now);
        context.now = CONTEXT_FWS;
        prevToken = token;
        break;
      // end of quoted string
      case '"':
        parseData.local += token;
        atomList.local[elementCount] += token;
        elementLength++;
        context.prev = context.now;
        context.now = context.stack.pop();
        break;
      // qtext
      default:
        // http://tools.ietf.org/html/rfc5322#section-3.2.4
        //   qtext          =   %d33 /             ; Printable US-ASCII
        //                      %d35-91 /          ;  characters not including
        //                      %d93-126 /         ;  "\" or the quote character
        //                      obs-qtext
        //
        //   obs-qtext      =   obs-NO-WS-CTL
        //
        //   obs-NO-WS-CTL  =   %d1-8 /            ; US-ASCII control
        //                      %d11 /             ;  characters that do not
        //                      %d12 /             ;  include the carriage
        //                      %d14-31 /          ;  return, line feed, and
        //                      %d127              ;  white space characters
        charCode = token.charCodeAt(0);

        if (charCode > 127 || charCode === 0 || charCode === 10) {
          updateResult(ISEMAIL_ERR_EXPECTING_QTEXT);
        } else if (charCode < 32 || charCode === 127) {
          updateResult(ISEMAIL_DEPREC_QTEXT);
        }

        parseData.local += token;
        atomList.local[elementCount] += token;
        elementLength++;
      }

      // http://tools.ietf.org/html/rfc5322#section-3.4.1
      //   If the string can be represented as a dot-atom (that is, it contains
      //   no characters other than atext characters or "." surrounded by atext
      //   characters), then the dot-atom form SHOULD be used and the quoted-
      //   string form SHOULD NOT be used.

      break;
    // quoted pair
    case CONTEXT_QUOTEDPAIR:
      // http://tools.ietf.org/html/rfc5322#section-3.2.1
      //   quoted-pair     =   ("\" (VCHAR / WSP)) / obs-qp
      //
      //   VCHAR           =  %d33-126   ; visible (printing) characters
      //   WSP             =  SP / HTAB  ; white space
      //
      //   obs-qp          =   "\" (%d0 / obs-NO-WS-CTL / LF / CR)
      //
      //   obs-NO-WS-CTL   =   %d1-8 /   ; US-ASCII control
      //                       %d11 /    ;  characters that do not
      //                       %d12 /    ;  include the carriage
      //                       %d14-31 / ;  return, line feed, and
      //                       %d127     ;  white space characters
      //
      // i.e. obs-qp       =  "\" (%d0-8, %d10-31 / %d127)
      charCode = token.charCodeAt(0);

      if (charCode > 127) {
        // fatal error
        updateResult(ISEMAIL_ERR_EXPECTING_QPAIR);
      } else if ((charCode < 31 && charCode !== 9) || charCode === 127) {
        // SP & HTAB are allowed
        updateResult(ISEMAIL_DEPREC_QP);
      }

      // At this point we know where this qpair occurred so
      // we could check to see if the character actually
      // needed to be quoted at all.
      // http://tools.ietf.org/html/rfc5321#section-4.1.2
      //   the sending system SHOULD transmit the
      //   form that uses the minimum quoting possible.

      // TODO: check whether the character needs to be quoted (escaped)
      // in this context

      context.prev = context.now;
      context.now = context.stack.pop(); // end of qpair
      token = '\\' + token;

      switch (context.now) {
      case CONTEXT_COMMENT: break;
      case CONTEXT_QUOTEDSTRING:
        parseData.local += token;
        atomList.local[elementCount] += token;

        // the maximum sizes specified by RFC 5321 are octet counts,
        // so we must include the backslash
        elementLength += 2;
        break;
      case COMPONENT_LITERAL:
        parseData.domain += token;
        atomList.domain[elementCount] += token;

        // the maximum sizes specified by RFC 5321 are octet counts,
        // so we must include the backslash
        elementLength += 2;
        break;
      /* istanbul ignore next: logically unreachable */
      default:
        throw new Error('quoted pair logic invoked in an invalid context: ' +
          context.now);
      }
      break;
    // comment
    case CONTEXT_COMMENT:
      // http://tools.ietf.org/html/rfc5322#section-3.2.2
      //   comment  = "(" *([FWS] ccontent) [FWS] ")"
      //
      //   ccontent = ctext / quoted-pair / comment
      switch (token) {
      // nested comment
      case '(':
        // nested comments are ok
        context.stack.push(context.now);
        context.now = CONTEXT_COMMENT;
        break;
      // end of comment
      case ')':
        context.prev = context.now;
        context.now = context.stack.pop();

        break;
      // quoted pair
      case '\\':
        context.stack.push(context.now);
        context.now = CONTEXT_QUOTEDPAIR;
        break;
      // folding white space
      case '\r':
        if ((++i === email.length) || email[i] !== '\n') {
          // fatal error
          updateResult(ISEMAIL_ERR_CR_NO_LF);
          break;
        }
      case ' ':
      case '\t':
        updateResult(ISEMAIL_CFWS_FWS);

        context.stack.push(context.now);
        context.now = CONTEXT_FWS;
        prevToken = token;
        break;
      // ctext
      default:
        // http://tools.ietf.org/html/rfc5322#section-3.2.3
        //   ctext         = %d33-39 /  ; Printable US-ASCII
        //                   %d42-91 /  ;  characters not including
        //                   %d93-126 / ;  "(", ")", or "\"
        //                   obs-ctext
        //
        //   obs-ctext     = obs-NO-WS-CTL
        //
        //   obs-NO-WS-CTL = %d1-8 /    ; US-ASCII control
        //                   %d11 /     ;  characters that do not
        //                   %d12 /     ;  include the carriage
        //                   %d14-31 /  ;  return, line feed, and
        //                   %d127      ;  white space characters
        charCode = token.charCodeAt(0);

        if (charCode > 127 || charCode === 0 || charCode === 10) {
          // fatal error
          updateResult(ISEMAIL_ERR_EXPECTING_CTEXT);
          break;
        } else if (charCode < 32 || charCode === 127) {
          updateResult(ISEMAIL_DEPREC_CTEXT);
        }
      }
      break;
    // folding white space
    case CONTEXT_FWS:
      // http://tools.ietf.org/html/rfc5322#section-3.2.2
      //   FWS     =   ([*WSP CRLF] 1*WSP) /  obs-FWS
      //                                   ; Folding white space

      // But note the erratum:
      // http://www.rfc-editor.org/errata_search.php?rfc=5322&eid=1908:
      //   In the obsolete syntax, any amount of folding white space MAY be
      //   inserted where the obs-FWS rule is allowed.  This creates the
      //   possibility of having two consecutive "folds" in a line, and
      //   therefore the possibility that a line which makes up a folded header
      //   field could be composed entirely of white space.
      //
      //   obs-FWS =   1*([CRLF] WSP)

      if (prevToken === '\r') {
        if (token === '\r') {
          // fatal error
          updateResult(ISEMAIL_ERR_FWS_CRLF_X2);
          break;
        }

        if (++crlfCount > 1) {
          // multiple folds = obsolete FWS
          updateResult(ISEMAIL_DEPREC_FWS);
        } else {
          crlfCount = 1;
        }
      }

      switch (token) {
      case '\r':
        if ((++i === email.length) || email[i] !== '\n') {
          // fatal error
          updateResult(ISEMAIL_ERR_CR_NO_LF);
        }
        break;
      case ' ':
      case '\t':
        break;
      default:
        if (prevToken === '\r') {
          // fatal error
          updateResult(ISEMAIL_ERR_FWS_CRLF_END);
        }

        crlfCount = 0;

        context.prev = context.now;
        context.now = context.stack.pop(); // end of FWS

        i--; // look at this token again in the parent context
      }
      prevToken = token;
      break;
    // unexpected context
    /* istanbul ignore next: logically unreachable */
    default:
      throw new Error('unknown context: ' + context.now);
    } // primary state machine

    if (maxResult > ISEMAIL_RFC5322) {
      // fatal error, no point continuing
      break;
    }
  } // token loop

  // check for errors
  if (maxResult < ISEMAIL_RFC5322) {
    // fatal errors
    if (context.now === CONTEXT_QUOTEDSTRING) {
      updateResult(ISEMAIL_ERR_UNCLOSEDQUOTEDSTR);
    } else if (context.now === CONTEXT_QUOTEDPAIR) {
      updateResult(ISEMAIL_ERR_BACKSLASHEND);
    } else if (context.now === CONTEXT_COMMENT) {
      updateResult(ISEMAIL_ERR_UNCLOSEDCOMMENT);
    } else if (context.now === COMPONENT_LITERAL) {
      updateResult(ISEMAIL_ERR_UNCLOSEDDOMLIT);
    } else if (token === '\r') {
      updateResult(ISEMAIL_ERR_FWS_CRLF_END);
    } else if (parseData.domain.length === 0) {
      updateResult(ISEMAIL_ERR_NODOMAIN);
    } else if (elementLength === 0) {
      updateResult(ISEMAIL_ERR_DOT_END);
    } else if (hyphenFlag) {
      updateResult(ISEMAIL_ERR_DOMAINHYPHENEND);

    // other errors
    } else if (parseData.domain.length > 255) {
      // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.2
      //   The maximum total length of a domain name or number is 255 octets.
      updateResult(ISEMAIL_RFC5322_DOMAIN_TOOLONG);
    } else if (parseData.local.length + parseData.domain.length + /* '@' */ 1 >
        254) {
      // http://tools.ietf.org/html/rfc5321#section-4.1.2
      //   Forward-path   = Path
      //
      //   Path           = "<" [ A-d-l ":" ] Mailbox ">"
      //
      // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.3
      //   The maximum total length of a reverse-path or forward-path is 256
      //   octets (including the punctuation and element separators).
      //
      // Thus, even without (obsolete) routing information, the Mailbox can
      // only be 254 characters long. This is confirmed by this verified
      // erratum to RFC 3696:
      //
      // http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690
      //   However, there is a restriction in RFC 2821 on the length of an
      //   address in MAIL and RCPT commands of 254 characters.  Since addresses
      //   that do not fit in those fields are not normally useful, the upper
      //   limit on address lengths should normally be considered to be 254.
      updateResult(ISEMAIL_RFC5322_TOOLONG);
    } else if (elementLength > 63) {
      // http://tools.ietf.org/html/rfc1035#section-2.3.4
      // labels   63 octets or less
      updateResult(ISEMAIL_RFC5322_LABEL_TOOLONG);
    } else if (options.minDomainAtoms && atomList.domain.length <
        options.minDomainAtoms) {
      updateResult(ISEMAIL_ERR_TOOSHORT_DOMAIN);
    } else if (options.tldWhitelist) {
      var tldAtom = atomList.domain[elementCount], tldValid = false, n;
      if (Array.isArray(options.tldWhitelist)) {
        for (i = 0, n = options.tldWhitelist.length; i < n; i++) {
          if (tldAtom === options.tldWhitelist[i]) {
            tldValid = true;
            break;
          }
        }
      } else {
        tldValid = hasOwn.call(options.tldWhitelist, tldAtom);
      }
      if (!tldValid) {
        updateResult(ISEMAIL_ERR_UNKNOWN_TLD);
      }
    }
  } // check for errors

  var dnsPositive = false;

  if (options.checkDNS && maxResult < ISEMAIL_DNSWARN && HAS_REQUIRE) {
    dns || (dns = require('dns'));
    // http://tools.ietf.org/html/rfc5321#section-2.3.5
    //   Names that can
    //   be resolved to MX RRs or address (i.e., A or AAAA) RRs (as discussed
    //   in Section 5) are permitted, as are CNAME RRs whose targets can be
    //   resolved, in turn, to MX or address RRs.
    //
    // http://tools.ietf.org/html/rfc5321#section-5.1
    //   The lookup first attempts to locate an MX record associated with the
    //   name.  If a CNAME record is found, the resulting name is processed as
    //   if it were the initial name. ... If an empty list of MXs is returned,
    //   the address is treated as if it was associated with an implicit MX
    //   RR, with a preference of 0, pointing to that host.
    //
    // isEmail() author's note: We will regard the existence of a CNAME to be
    // sufficient evidence of the domain's existence. For performance reasons
    // we will not repeat the DNS lookup for the CNAME's target, but we will
    // raise a warning because we didn't immediately find an MX record.
    if (elementCount === 0) {
      // checking TLD DNS only works if you explicitly check from the root
      parseData.domain += '.';
    }

    var dnsDomain = parseData.domain;
    dns.resolveMx(dnsDomain, function(err, records) {
      if ((err && err.code !== dns.NODATA) || (!err && !records)) {
        updateResult(ISEMAIL_DNSWARN_NO_RECORD);
        return finish();
      }
      if (records && records.length) {
        dnsPositive = true;
        return finish();
      }
      var done = false, count = 3;
      updateResult(ISEMAIL_DNSWARN_NO_MX_RECORD);
      dns.resolveCname(dnsDomain, handleRecords);
      dns.resolve4(dnsDomain, handleRecords);
      dns.resolve6(dnsDomain, handleRecords);
      function handleRecords(err, records) {
        if (done) return;
        count--;
        if (!err && records && records.length) {
          done = true;
          return finish();
        }
        if (count === 0) {
          // no usable records for the domain can be found
          updateResult(ISEMAIL_DNSWARN_NO_RECORD);
          done = true;
          finish();
        }
      }
    });
  } else if (options.checkDNS) {
    // guarantee asynchronicity
    typeof process !== 'undefined' && process &&
      typeof process.nextTick === 'function'
      ? process.nextTick(finish)
      : setTimeout(finish, 1);
  } else {
    return finish();
  } // checkDNS

  function finish() {
    if (!dnsPositive && maxResult < ISEMAIL_DNSWARN) {
      if (elementCount === 0) {
        updateResult(ISEMAIL_RFC5321_TLD);
      } else {
        var charCode = atomList.domain[elementCount].charCodeAt(0);
        if (charCode >= 48 && charCode <= 57) {
          updateResult(ISEMAIL_RFC5321_TLDNUMERIC);
        }
      }
    }

    if (maxResult < threshold) {
      maxResult = ISEMAIL_VALID;
    }

    if (!diagnose) {
      maxResult = maxResult < THRESHOLD;
    }

    if (typeof callback === 'function') {
      callback(maxResult);
    }

    return maxResult;
  } // finish
} // isEmail

module.exports = isEmail;

}).call(this,require('_process'))
},{"_process":"/home/radu/code/react-flex/node_modules/browserify/node_modules/process/browser.js","dns":"/home/radu/code/react-flex/node_modules/browserify/lib/_empty.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/camelize.js":[function(require,module,exports){
'use strict'

var toCamelFn = function(str, letter){
       return letter ? letter.toUpperCase(): ''
   }

var hyphenRe = require('./hyphenRe')

module.exports = function(str){
   return str?
          str.replace(hyphenRe, toCamelFn):
          ''
}
},{"./hyphenRe":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/hyphenRe.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/compactWhitespace.js":[function(require,module,exports){
var RE = /\s+/g

module.exports = function(str){
    if (!str){
        return ''
    }

    return str.trim().replace(RE, ' ')
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/humanize.js":[function(require,module,exports){
'use strict'

var separate     = require('./separate')
var camelize     = require('./camelize')
var toUpperFirst = require('./toUpperFirst')
var hyphenRe     = require('./hyphenRe')

function toLowerAndSpace(str, letter){
    return letter? ' ' + letter.toLowerCase(): ' '
}

module.exports = function(name, config){

    var str = config && config.capitalize?
                    separate(camelize(name), ' '):
                    separate(name, ' ').replace(hyphenRe, toLowerAndSpace)

    return toUpperFirst(str.trim())
}

},{"./camelize":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/camelize.js","./hyphenRe":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/hyphenRe.js","./separate":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/separate.js","./toUpperFirst":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/toUpperFirst.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/hyphenRe.js":[function(require,module,exports){
module.exports = /[-\s]+(.)?/g
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/hyphenate.js":[function(require,module,exports){
'use strict'

var separate = require('./separate')

module.exports = function(name){
   return separate(name).toLowerCase()
}
},{"./separate":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/separate.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/alphanum.js":[function(require,module,exports){
'use strict'

module.exports = require('./match')(/^[a-zA-Z0-9]+$/)
},{"./match":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/match.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/email.js":[function(require,module,exports){
module.exports = require('isemail')
},{"isemail":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/isemail/index.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/guid.js":[function(require,module,exports){
'use strict'

var regex = /^[A-F0-9]{8}(?:-?[A-F0-9]{4}){3}-?[A-F0-9]{12}$/i
var regex2 = /^\{[A-F0-9]{8}(?:-?[A-F0-9]{4}){3}-?[A-F0-9]{12}\}$/i

module.exports = function(value){
    return regex.test(value) || regex2.test(value)
}


},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/index.js":[function(require,module,exports){
module.exports = {
    alphanum: require('./alphanum'),
    match   : require('./match'),
    guid   : require('./guid'),
    email   : require('./email'),
    numeric   : require('./numeric')
}
},{"./alphanum":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/alphanum.js","./email":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/email.js","./guid":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/guid.js","./match":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/match.js","./numeric":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/numeric.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/match.js":[function(require,module,exports){
'use strict'

var F = require('functionally')

module.exports = F.curry(function(re, value){
    return !!re.test(value)
})
},{"functionally":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/functionally/index.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/is/numeric.js":[function(require,module,exports){
'use strict'

module.exports = require('i-s').numeric
},{"i-s":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/node_modules/i-s/index.js"}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/separate.js":[function(require,module,exports){
'use strict'

var doubleColonRe      = /::/g
var upperToLowerRe     = /([A-Z]+)([A-Z][a-z])/g
var lowerToUpperRe     = /([a-z\d])([A-Z])/g
var underscoreToDashRe = /_/g

module.exports = function(name, separator){

   return name?
           name.replace(doubleColonRe, '/')
                .replace(upperToLowerRe, '$1_$2')
                .replace(lowerToUpperRe, '$1_$2')
                .replace(underscoreToDashRe, separator || '-')
            :
            ''
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/stripWhitespace.js":[function(require,module,exports){
var RE = /\s/g

module.exports = function(str){
    if (!str){
        return ''
    }

    return str.replace(RE, '')
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/toLowerFirst.js":[function(require,module,exports){
module.exports = function(str){
    return str.length?
            str.charAt(0).toLowerCase() + str.substring(1):
            str
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/src/toUpperFirst.js":[function(require,module,exports){
'use strict'

module.exports = function(value){
    return value.length?
                value.charAt(0).toUpperCase() + value.substring(1):
                value
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/src/cssPrefix.js":[function(require,module,exports){
module.exports = require('./prefixer')()
},{"./prefixer":"/home/radu/code/react-flex/node_modules/to-style/src/prefixer.js"}],"/home/radu/code/react-flex/node_modules/to-style/src/hasOwn.js":[function(require,module,exports){
'use strict'

var objectHasOwn = Object.prototype.hasOwnProperty

module.exports = function(object, propertyName){
    return objectHasOwn.call(object, propertyName)
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/src/isFunction.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(v) {
    return objectToString.apply(v) === '[object Function]'
}

},{}],"/home/radu/code/react-flex/node_modules/to-style/src/isObject.js":[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(v){
    return !!v && objectToString.call(v) === '[object Object]'
}


},{}],"/home/radu/code/react-flex/node_modules/to-style/src/prefixInfo.js":[function(require,module,exports){
var toUpperFirst = require('ustring').toUpperFirst

var re         = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/

var docStyle   = typeof document == 'undefined'?
                    {}:
                    document.documentElement.style

var prefixInfo = (function(){

    var prefix = (function(){

            for (var prop in docStyle) {
                if( re.test(prop) ) {
                    // test is faster than match, so it's better to perform
                    // that on the lot and match only when necessary
                    return  prop.match(re)[0]
                }
            }

            // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
            // However (prop in style) returns the correct value, so we'll have to test for
            // the precence of a specific property
            if ('WebkitOpacity' in docStyle){
                return 'Webkit'
            }

            if ('KhtmlOpacity' in docStyle) {
                return 'Khtml'
            }

            return ''
        })(),

    lower = prefix.toLowerCase()

    return {
        style       : prefix,
        css       : '-' + lower + '-',
        dom       : ({
            Webkit: 'WebKit',
            ms    : 'MS',
            o     : 'WebKit'
        })[prefix] || toUpperFirst(prefix)
    }

})()

module.exports = prefixInfo
},{"ustring":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/index.js"}],"/home/radu/code/react-flex/node_modules/to-style/src/prefixProperties.js":[function(require,module,exports){
module.exports = {
    'border-radius'              : 1,
    'border-top-left-radius'     : 1,
    'border-top-right-radius'    : 1,
    'border-bottom-left-radius'  : 1,
    'border-bottom-right-radius' : 1,
    'box-shadow'                 : 1,
    'order'                      : 1,
    'flex'                       : function(name, prefix){
        return [prefix + 'box-flex']
    },
    'box-flex'                   : 1,
    'box-align'                  : 1,
    'animation'                  : 1,
    'animation-duration'         : 1,
    'animation-name'             : 1,
    'transition'                 : 1,
    'transition-duration'        : 1,
    'transform'                  : 1,
    'transform-style'            : 1,
    'transform-origin'           : 1,
    'backface-visibility'        : 1,
    'perspective'                : 1,
    'box-pack'                   : 1
}
},{}],"/home/radu/code/react-flex/node_modules/to-style/src/prefixer.js":[function(require,module,exports){
'use strict'

var ustring = require('ustring')
var camelize = ustring.camelize
var hyphenate = ustring.hyphenate
var toLowerFirst = ustring.toLowerFirst
var toUpperFirst = ustring.toUpperFirst

var prefixInfo = require('./prefixInfo')
var prefixProperties = require('./prefixProperties')

var docStyle = typeof document == 'undefined'?
                {}:
                document.documentElement.style

module.exports = function(asStylePrefix){

    return function(name, config){
        config = config || {}

        var styleName = toLowerFirst(camelize(name)),
            cssName   = hyphenate(name),

            theName   = asStylePrefix?
                            styleName:
                            cssName,

            thePrefix = prefixInfo.style?
                            asStylePrefix?
                                prefixInfo.style:
                                prefixInfo.css
                            :
                            ''

        if ( styleName in docStyle ) {
            return config.asString?
                              theName :
                            [ theName ]
        }

        //not a valid style name, so we'll return the value with a prefix

        var upperCased     = theName,
            prefixProperty = prefixProperties[cssName],
            result         = []

        if (asStylePrefix){
            upperCased = toUpperFirst(theName)
        }

        if (typeof prefixProperty == 'function'){
            var prefixedCss = prefixProperty(theName, thePrefix) || []
            if (prefixedCss && !Array.isArray(prefixedCss)){
                prefixedCss = [prefixedCss]
            }

            if (prefixedCss.length){
                prefixedCss = prefixedCss.map(function(property){
                    return asStylePrefix?
                                toLowerFirst(camelize(property)):
                                hyphenate(property)

                })
            }

            result = result.concat(prefixedCss)
        }

        if (thePrefix){
            result.push(thePrefix + upperCased)
        }

        result.push(theName)

        if (config.asString || result.length == 1){
            return result[0]
        }

        return result
    }
}
},{"./prefixInfo":"/home/radu/code/react-flex/node_modules/to-style/src/prefixInfo.js","./prefixProperties":"/home/radu/code/react-flex/node_modules/to-style/src/prefixProperties.js","ustring":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/index.js"}],"/home/radu/code/react-flex/node_modules/to-style/src/toStyleObject.js":[function(require,module,exports){
'use strict'

var ustring = require('ustring')

var prefixInfo  = require('./prefixInfo')
var cssPrefixFn = require('./cssPrefix')

var HYPHENATE   = ustring.hyphenate
var HAS_OWN     = require('./hasOwn')
var IS_OBJECT   = require('./isObject')
var IS_FUNCTION = require('./isFunction')

var applyPrefix = function(target, property, value, normalizeFn){
    cssPrefixFn(property).forEach(function(p){
        target[normalizeFn? normalizeFn(p): p] = value
    })
}

var toObject = function(str){
    str = (str || '').split(';')

    var result = {}

    str.forEach(function(item){
        var split = item.split(':')

        if (split.length == 2){
            result[split[0].trim()] = split[1].trim()
        }
    })

    return result
}

/**
 * @ignore
 * @method toStyleObject
 *
 * @param  {Object} styles The object to convert to a style object.
 * @param  {Object} [config]
 * @param  {Boolean} [config.addUnits=true] True if you want to add units when numerical values are encountered.
 * @param  {Object}  config.cssUnitless An object whose keys represent css numerical property names that will not be appended with units.
 * @param  {Object}  config.prefixProperties An object whose keys represent css property names that should be prefixed
 * @param  {String}  config.cssUnit='px' The css unit to append to numerical values. Defaults to 'px'
 * @param  {String}  config.normalizeName A function that normalizes a name to a valid css property name
 * @param  {String}  config.scope
 *
 * @return {Object} The object, normalized with css style names
 */
var TO_STYLE_OBJECT = function(styles, config, prepend, result){

    if (typeof styles == 'string'){
        styles = toObject(styles)
    }

    config = config || {}
    result = result || {}

    var scope    = config.scope || {},

        //configs
        addUnits = config.addUnits != null?
                            config.addUnits:
                            scope && scope.addUnits != null?
                                scope.addUnits:
                                true,

        cssUnitless      = (config.cssUnitless != null?
                                config.cssUnitless:
                                scope?
                                    scope.cssUnitless:
                                    null) || {},
        cssUnit          = (config.cssUnit || scope? scope.cssUnit: null) || 'px',
        prefixProperties = (config.prefixProperties || (scope? scope.prefixProperties: null)) || {},

        normalizeFn = config.normalizeName || HYPHENATE,

        processed,
        styleName,

        propName,
        propValue,
        propCssUnit,
        propType,
        propIsNumber,

        fnPropValue,
        prefix

    for (propName in styles) if (HAS_OWN(styles, propName)) {

        propValue = styles[ propName ]

        //the hyphenated style name (css property name)
        styleName = normalizeFn(prepend? prepend + propName: propName)

        processed = false
        prefix    = false

        if (IS_FUNCTION(propValue)) {

            //a function can either return a css value
            //or an object with { value, prefix, name }
            fnPropValue = propValue.call(scope || styles, propValue, propName, styleName, styles)

            if (IS_OBJECT(fnPropValue) && fnPropValue.value != null){

                propValue = fnPropValue.value
                prefix    = fnPropValue.prefix
                styleName = fnPropValue.name?
                                normalizeFn(fnPropValue.name):
                                styleName

            } else {
                propValue = fnPropValue
            }
        }

        propType     = typeof propValue
        propIsNumber = propType == 'number' || (propType == 'string' && propValue != '' && propValue * 1 == propValue)

        if (propValue == null || styleName == null || styleName === ''){
            continue
        }

        if (propIsNumber || propType == 'string'){
           processed = true
        }

        if (!processed && propValue.value != null && propValue.prefix){
           processed = true
           prefix    = propValue.prefix
           propValue = propValue.value
        }

        if (processed){

            prefix = prefix || !!prefixProperties[styleName]

            if (propIsNumber){
                propValue = addUnits && !(styleName in cssUnitless) ?
                                propValue + cssUnit:
                                propValue + ''//change it to a string, so that jquery does not append px or other units
            }

            //special border treatment
            if (
                    (
                     styleName == 'border' ||
                    (!styleName.indexOf('border')
                        &&
                        !~styleName.indexOf('radius')
                        &&
                        !~styleName.indexOf('width'))
                    ) &&
                    propIsNumber
                ){

                styleName = normalizeFn(styleName + '-width')
            }

            //special border radius treatment
            if (!styleName.indexOf('border-radius-')){
                styleName.replace(/border(-radius)(-(.*))/, function(str, radius, theRest){
                    var positions = {
                        '-top'    : ['-top-left',      '-top-right' ],
                        '-left'   : ['-top-left',    '-bottom-left' ],
                        '-right'  : ['-top-right',   '-bottom-right'],
                        '-bottom' : ['-bottom-left', '-bottom-right']
                    }

                    if (theRest in positions){
                        styleName = []

                        positions[theRest].forEach(function(pos){
                            styleName.push(normalizeFn('border' + pos + radius))
                        })
                    } else {

                        styleName = normalizeFn('border'+ theRest + radius)
                    }

                })

                if (Array.isArray(styleName)){
                    styleName.forEach(function(styleName){
                        if (prefix){
                            applyPrefix(result, styleName, propValue, normalizeFn)
                        } else {
                            result[normalizeFn(styleName)] = propValue
                        }
                    })

                    continue
                }
            }

            if (prefix){
                applyPrefix(result, styleName, propValue, normalizeFn)
            } else {
                result[normalizeFn(styleName)] = propValue
            }

        } else {

            //the propValue must be an object, so go down the hierarchy
            TO_STYLE_OBJECT(propValue, config, styleName + '-', result)
        }
    }

    return result
}

module.exports = TO_STYLE_OBJECT
},{"./cssPrefix":"/home/radu/code/react-flex/node_modules/to-style/src/cssPrefix.js","./hasOwn":"/home/radu/code/react-flex/node_modules/to-style/src/hasOwn.js","./isFunction":"/home/radu/code/react-flex/node_modules/to-style/src/isFunction.js","./isObject":"/home/radu/code/react-flex/node_modules/to-style/src/isObject.js","./prefixInfo":"/home/radu/code/react-flex/node_modules/to-style/src/prefixInfo.js","ustring":"/home/radu/code/react-flex/node_modules/to-style/node_modules/ustring/index.js"}],"/home/radu/code/react-flex/node_modules/to-style/src/toStyleString.js":[function(require,module,exports){
'use strict'

var toStyleObject = require('./toStyleObject')
var hasOwn        = require('./hasOwn')

/**
 * @ignore
 * @method toStyleString
 *
 * @param  {Object} styles The object to convert to a style string.
 * @param  {Object} config
 * @param  {Boolean} config.addUnits=true True if you want to add units when numerical values are encountered. Defaults to true
 * @param  {Object}  config.cssUnitless An object whose keys represent css numerical property names that will not be appended with units.
 * @param  {Object}  config.prefixProperties An object whose keys represent css property names that should be prefixed
 * @param  {String}  config.cssUnit='px' The css unit to append to numerical values. Defaults to 'px'
 * @param  {String}  config.scope
 *
 * @return {Object} The object, normalized with css style names
 */
module.exports = function(styles, config){
    styles = toStyleObject(styles, config)

    var result = []
    var prop

    for(prop in styles) if (hasOwn(styles, prop)){
        result.push(prop + ': ' + styles[prop])
    }

    return result.join('; ')
}
},{"./hasOwn":"/home/radu/code/react-flex/node_modules/to-style/src/hasOwn.js","./toStyleObject":"/home/radu/code/react-flex/node_modules/to-style/src/toStyleObject.js"}],"/home/radu/code/react-flex/src/js/ColumnLayout.js":[function(require,module,exports){
/** @jsx React.DOM */

module.exports = React.createClass({displayName: 'exports',

    mixins: [require('./common')],

    orientation: 'vertical',

    getInitialState: function(){
        return {}
    },

    render: function(){
        return (
            React.DOM.div({className: "rf-column rf-layout"}, 
                this.renderChildren()
            )
        )
    }
})
},{"./common":"/home/radu/code/react-flex/src/js/common.js"}],"/home/radu/code/react-flex/src/js/ColumnNRow1.js":[function(require,module,exports){
/** @jsx React.DOM */

var RowLayout = require('./RowLayout')
var ColumnLayout = require('./ColumnLayout')

var common         = require('./common')
var renderChildren = common.renderChildren

module.exports = React.createClass({displayName: 'exports',

    mixins: [
        common
    ],

    render: function(){
        var children = this.props.children.concat()

        var rowLayout = RowLayout(null, 
                            children[children.length - 1]
                        )

        var columnLayout = ColumnLayout(null, 
                            children.slice(0, children.length - 1)
                        )

        this.asChildLayout(columnLayout)
        this.asChildLayout(rowLayout)

        return (
            React.DOM.div({className: "rf-layout rf-composite rf-v-column-n-row-1 "+(this.props.horizontal?'rf-horizontal':'rf-vertical')}, 
                this.renderChildren([columnLayout, rowLayout], this)
            )
        )
    },

    asChildLayout: function(layout){
        var defaultProps = common.getDefaultProps()

        Object.keys(defaultProps).forEach(function(key){
            layout.props[key] = layout.props[key] || this.props[key]
        }, this)
    }
})
},{"./ColumnLayout":"/home/radu/code/react-flex/src/js/ColumnLayout.js","./RowLayout":"/home/radu/code/react-flex/src/js/RowLayout.js","./common":"/home/radu/code/react-flex/src/js/common.js"}],"/home/radu/code/react-flex/src/js/Row1ColumnN.js":[function(require,module,exports){
/** @jsx React.DOM */

var RowLayout = require('./RowLayout')
var ColumnLayout = require('./ColumnLayout')

var common         = require('./common')
var renderChildren = common.renderChildren

module.exports = React.createClass({displayName: 'exports',

    mixins: [
        common
    ],

    render: function(){
        var children = this.props.children.concat()

        var rowLayout = RowLayout(null, 
                            children[0]
                        )

        var columnLayout = ColumnLayout(null, 
                            children.slice(1)
                        )

        this.asChildLayout(rowLayout)
        this.asChildLayout(columnLayout)

        return (
            React.DOM.div({className: "rf-layout rf-composite rf-row-1-column-n "+(this.props.horizontal?'rf-horizontal':'rf-vertical')}, 
                this.renderChildren([rowLayout, columnLayout], this)
            )
        )
    },

    asChildLayout: function(layout){
        var defaultProps = common.getDefaultProps()

        Object.keys(defaultProps).forEach(function(key){
            layout.props[key] = layout.props[key] || this.props[key]
        }, this)
    }
})
},{"./ColumnLayout":"/home/radu/code/react-flex/src/js/ColumnLayout.js","./RowLayout":"/home/radu/code/react-flex/src/js/RowLayout.js","./common":"/home/radu/code/react-flex/src/js/common.js"}],"/home/radu/code/react-flex/src/js/RowLayout.js":[function(require,module,exports){
/** @jsx React.DOM */

module.exports = React.createClass({displayName: 'exports',

    mixins: [
        require('./common')
    ],

    orientation: 'horizontal',

    getInitialState: function(){
        return {}
    },

    render: function(){
        return (
            React.DOM.div({className: "rf-row rf-layout"}, 
                this.renderChildren()
            )
        )
    }
})
},{"./common":"/home/radu/code/react-flex/src/js/common.js"}],"/home/radu/code/react-flex/src/js/common.js":[function(require,module,exports){
var toStyle = require('to-style').object
var isNumeric = require('i-s').numeric

function getBorderSize(layout){
    var bordered   = layout.props.bordered
    var borderSize = bordered?
                        isNumeric(bordered)?
                        bordered: parseInt(bordered, 10) || 1
                        :
                        0

    return borderSize
}

function getFlex(item){
    var flex = item.props.flex

    return isNumeric(flex)?
                parseInt(flex, 10):
                0
}

function itemPadding(item, index, layout){

    var style = {}

    if (layout.props.layoutPadding){
        style.padding = layout.props.layoutPadding
    }
    if (item.props.layoutPadding){
        style.padding = item.props.layoutPadding
    }

    var borderSize = getBorderSize(layout)

    if (borderSize && index){
        var borderPos = layout.orientation == 'vertical'? 'border-top': 'border-left'

        style[borderPos + '-width'] = borderSize
        style[borderPos + '-style'] = 'solid'
    }

    var itemFlex = getFlex(item)

    if (itemFlex && itemFlex > 10){
        style.flex = itemFlex
    }

    return toStyle(style)
}

function itemClass(item, index, layout){
    var result = ['rf-layout-item']

    var borderSize = getBorderSize(layout)
    var itemFlex   = getFlex(item)

    if (itemFlex && itemFlex <= 10){
        result.push('u-flex-' + itemFlex)
    }

    if (borderSize && index){
        result.push('rf-bordered')
    }

    return result.join(' ')
}

module.exports = {

    getDefaultProps: require('./getDefaultProps'),

    renderChildren: require('./renderChildren')(itemClass, itemPadding)
}
},{"./getDefaultProps":"/home/radu/code/react-flex/src/js/getDefaultProps.js","./renderChildren":"/home/radu/code/react-flex/src/js/renderChildren.js","i-s":"/home/radu/code/react-flex/node_modules/i-s/index.js","to-style":"/home/radu/code/react-flex/node_modules/to-style/index.js"}],"/home/radu/code/react-flex/src/js/getDefaultProps.js":[function(require,module,exports){
module.exports = function(){
    return {
        bordered: 1,
        layoutPadding: 0
    }
}
},{}],"/home/radu/code/react-flex/src/js/index.js":[function(require,module,exports){
module.exports = {
    RowLayout   : require('./RowLayout'),
    ColumnLayout: require('./ColumnLayout'),
    Row1ColumnN : require('./Row1ColumnN'),
    ColumnNRow1 : require('./ColumnNRow1')
}
},{"./ColumnLayout":"/home/radu/code/react-flex/src/js/ColumnLayout.js","./ColumnNRow1":"/home/radu/code/react-flex/src/js/ColumnNRow1.js","./Row1ColumnN":"/home/radu/code/react-flex/src/js/Row1ColumnN.js","./RowLayout":"/home/radu/code/react-flex/src/js/RowLayout.js"}],"/home/radu/code/react-flex/src/js/renderChildren.js":[function(require,module,exports){
/** @jsx React.DOM */
module.exports = function(itemClass, itemPadding){
    return function(children, layout){
        if (children && !Array.isArray(children)){
            children = [children]
        }

        return React.Children.map(children || this.props.children, function(item, index){
            return React.DOM.div({className: itemClass(item, index, this), style: itemPadding(item, index, this)}, item)
        }, layout || this)
    }
}
},{}]},{},["/home/radu/code/react-flex/src/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy9pLXMvaW5kZXguanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvaS1zL3NyYy9hcmd1bWVudHMuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvaS1zL3NyYy9hcnJheS5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy9pLXMvc3JjL2Jvb2xlYW4uanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvaS1zL3NyYy9kYXRlLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL2ktcy9zcmMvZmxvYXQuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvaS1zL3NyYy9mdW5jdGlvbi5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy9pLXMvc3JjL2luZGV4LmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL2ktcy9zcmMvaW50LmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL2ktcy9zcmMvbnVtYmVyLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL2ktcy9zcmMvbnVtZXJpYy5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy9pLXMvc3JjL29iamVjdC5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy9pLXMvc3JjL3JlZ2V4cC5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy9pLXMvc3JjL3N0cmluZy5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9pbmRleC5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9ub2RlX21vZHVsZXMvdXN0cmluZy9pbmRleC5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9ub2RlX21vZHVsZXMvdXN0cmluZy9ub2RlX21vZHVsZXMvZnVuY3Rpb25hbGx5L2luZGV4LmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL25vZGVfbW9kdWxlcy91c3RyaW5nL25vZGVfbW9kdWxlcy9pLXMvaW5kZXguanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvbm9kZV9tb2R1bGVzL3VzdHJpbmcvbm9kZV9tb2R1bGVzL2ktcy9zcmMvYXJndW1lbnRzLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL25vZGVfbW9kdWxlcy91c3RyaW5nL25vZGVfbW9kdWxlcy9pLXMvc3JjL2FycmF5LmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL25vZGVfbW9kdWxlcy91c3RyaW5nL25vZGVfbW9kdWxlcy9pLXMvc3JjL2Jvb2xlYW4uanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvbm9kZV9tb2R1bGVzL3VzdHJpbmcvbm9kZV9tb2R1bGVzL2ktcy9zcmMvZGF0ZS5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9ub2RlX21vZHVsZXMvdXN0cmluZy9ub2RlX21vZHVsZXMvaS1zL3NyYy9mbG9hdC5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9ub2RlX21vZHVsZXMvdXN0cmluZy9ub2RlX21vZHVsZXMvaS1zL3NyYy9mdW5jdGlvbi5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9ub2RlX21vZHVsZXMvdXN0cmluZy9ub2RlX21vZHVsZXMvaS1zL3NyYy9pbmRleC5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9ub2RlX21vZHVsZXMvdXN0cmluZy9ub2RlX21vZHVsZXMvaS1zL3NyYy9pbnQuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvbm9kZV9tb2R1bGVzL3VzdHJpbmcvbm9kZV9tb2R1bGVzL2ktcy9zcmMvbnVtYmVyLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL25vZGVfbW9kdWxlcy91c3RyaW5nL25vZGVfbW9kdWxlcy9pLXMvc3JjL251bWVyaWMuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvbm9kZV9tb2R1bGVzL3VzdHJpbmcvbm9kZV9tb2R1bGVzL2ktcy9zcmMvb2JqZWN0LmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL25vZGVfbW9kdWxlcy91c3RyaW5nL25vZGVfbW9kdWxlcy9pLXMvc3JjL3JlZ2V4cC5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9ub2RlX21vZHVsZXMvdXN0cmluZy9ub2RlX21vZHVsZXMvaS1zL3NyYy9zdHJpbmcuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvbm9kZV9tb2R1bGVzL3VzdHJpbmcvbm9kZV9tb2R1bGVzL2lzZW1haWwvaW5kZXguanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvbm9kZV9tb2R1bGVzL3VzdHJpbmcvbm9kZV9tb2R1bGVzL2lzZW1haWwvbGliL2lzZW1haWwuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvbm9kZV9tb2R1bGVzL3VzdHJpbmcvc3JjL2NhbWVsaXplLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL25vZGVfbW9kdWxlcy91c3RyaW5nL3NyYy9jb21wYWN0V2hpdGVzcGFjZS5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9ub2RlX21vZHVsZXMvdXN0cmluZy9zcmMvaHVtYW5pemUuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvbm9kZV9tb2R1bGVzL3VzdHJpbmcvc3JjL2h5cGhlblJlLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL25vZGVfbW9kdWxlcy91c3RyaW5nL3NyYy9oeXBoZW5hdGUuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvbm9kZV9tb2R1bGVzL3VzdHJpbmcvc3JjL2lzL2FscGhhbnVtLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL25vZGVfbW9kdWxlcy91c3RyaW5nL3NyYy9pcy9lbWFpbC5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9ub2RlX21vZHVsZXMvdXN0cmluZy9zcmMvaXMvZ3VpZC5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9ub2RlX21vZHVsZXMvdXN0cmluZy9zcmMvaXMvaW5kZXguanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvbm9kZV9tb2R1bGVzL3VzdHJpbmcvc3JjL2lzL21hdGNoLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL25vZGVfbW9kdWxlcy91c3RyaW5nL3NyYy9pcy9udW1lcmljLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL25vZGVfbW9kdWxlcy91c3RyaW5nL3NyYy9zZXBhcmF0ZS5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9ub2RlX21vZHVsZXMvdXN0cmluZy9zcmMvc3RyaXBXaGl0ZXNwYWNlLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL25vZGVfbW9kdWxlcy91c3RyaW5nL3NyYy90b0xvd2VyRmlyc3QuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvbm9kZV9tb2R1bGVzL3VzdHJpbmcvc3JjL3RvVXBwZXJGaXJzdC5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9zcmMvY3NzUHJlZml4LmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL3NyYy9oYXNPd24uanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvc3JjL2lzRnVuY3Rpb24uanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9ub2RlX21vZHVsZXMvdG8tc3R5bGUvc3JjL2lzT2JqZWN0LmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL3NyYy9wcmVmaXhJbmZvLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL3NyYy9wcmVmaXhQcm9wZXJ0aWVzLmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvbm9kZV9tb2R1bGVzL3RvLXN0eWxlL3NyYy9wcmVmaXhlci5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9zcmMvdG9TdHlsZU9iamVjdC5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L25vZGVfbW9kdWxlcy90by1zdHlsZS9zcmMvdG9TdHlsZVN0cmluZy5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L3NyYy9qcy9Db2x1bW5MYXlvdXQuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9zcmMvanMvQ29sdW1uTlJvdzEuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9zcmMvanMvUm93MUNvbHVtbk4uanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9zcmMvanMvUm93TGF5b3V0LmpzIiwiL2hvbWUvcmFkdS9jb2RlL3JlYWN0LWZsZXgvc3JjL2pzL2NvbW1vbi5qcyIsIi9ob21lL3JhZHUvY29kZS9yZWFjdC1mbGV4L3NyYy9qcy9nZXREZWZhdWx0UHJvcHMuanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9zcmMvanMvaW5kZXguanMiLCIvaG9tZS9yYWR1L2NvZGUvcmVhY3QtZmxleC9zcmMvanMvcmVuZGVyQ2hpbGRyZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3J2QkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDandDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDck5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLG51bGwsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gZXYuc291cmNlO1xuICAgICAgICAgICAgaWYgKChzb3VyY2UgPT09IHdpbmRvdyB8fCBzb3VyY2UgPT09IG51bGwpICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYycpIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJndW1lbnRzXScgfHwgISF2YWx1ZS5jYWxsZWVcbn0iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG59IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ2Jvb2xlYW4nXG59IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nXG59IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBudW1iZXIgPSByZXF1aXJlKCcuL251bWJlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiBudW1iZXIodmFsdWUpICYmICh2YWx1ZSA9PT0gcGFyc2VGbG9hdCh2YWx1ZSwgMTApKSAmJiAhKHZhbHVlID09PSBwYXJzZUludCh2YWx1ZSwgMTApKVxufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbn0iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ251bWVyaWMnICA6IHJlcXVpcmUoJy4vbnVtZXJpYycpLFxuICAgICdudW1iZXInICAgOiByZXF1aXJlKCcuL251bWJlcicpLFxuICAgICdpbnQnICAgICAgOiByZXF1aXJlKCcuL2ludCcpLFxuICAgICdmbG9hdCcgICAgOiByZXF1aXJlKCcuL2Zsb2F0JyksXG4gICAgJ3N0cmluZycgICA6IHJlcXVpcmUoJy4vc3RyaW5nJyksXG4gICAgJ2Z1bmN0aW9uJyA6IHJlcXVpcmUoJy4vZnVuY3Rpb24nKSxcbiAgICAnb2JqZWN0JyAgIDogcmVxdWlyZSgnLi9vYmplY3QnKSxcbiAgICAnYXJndW1lbnRzJzogcmVxdWlyZSgnLi9hcmd1bWVudHMnKSxcbiAgICAnYm9vbGVhbicgIDogcmVxdWlyZSgnLi9ib29sZWFuJyksXG4gICAgJ2RhdGUnICAgICA6IHJlcXVpcmUoJy4vZGF0ZScpLFxuICAgICdyZWdleHAnICAgOiByZXF1aXJlKCcuL3JlZ2V4cCcpLFxuICAgICdhcnJheScgICAgOiByZXF1aXJlKCcuL2FycmF5Jylcbn0iLCIndXNlIHN0cmljdCdcblxudmFyIG51bWJlciA9IHJlcXVpcmUoJy4vbnVtYmVyJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuIG51bWJlcih2YWx1ZSkgJiYgKHZhbHVlID09PSBwYXJzZUludCh2YWx1ZSwgMTApKVxufSIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSlcbn0iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuICFpc05hTiggcGFyc2VGbG9hdCggdmFsdWUgKSApICYmIGlzRmluaXRlKCB2YWx1ZSApXG59IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbn0iLCIndXNlIHN0cmljdCdcblxudmFyIG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJ1xufSIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnXG59IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgcHJlZml4UHJvcGVydGllczogcmVxdWlyZSgnLi9zcmMvcHJlZml4UHJvcGVydGllcycpICxcbiAgIG9iamVjdDogcmVxdWlyZSgnLi9zcmMvdG9TdHlsZU9iamVjdCcpLFxuICAgc3RyaW5nOiByZXF1aXJlKCcuL3NyYy90b1N0eWxlU3RyaW5nJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0b0xvd2VyRmlyc3QgICAgIDogcmVxdWlyZSgnLi9zcmMvdG9Mb3dlckZpcnN0JyksXG4gICAgdG9VcHBlckZpcnN0ICAgICA6IHJlcXVpcmUoJy4vc3JjL3RvVXBwZXJGaXJzdCcpLFxuICAgIHNlcGFyYXRlICAgICAgICAgOiByZXF1aXJlKCcuL3NyYy9zZXBhcmF0ZScpLFxuICAgIHN0cmlwV2hpdGVzcGFjZSAgOiByZXF1aXJlKCcuL3NyYy9zdHJpcFdoaXRlc3BhY2UnKSxcbiAgICBjb21wYWN0V2hpdGVzcGFjZTogcmVxdWlyZSgnLi9zcmMvY29tcGFjdFdoaXRlc3BhY2UnKSxcbiAgICBjYW1lbGl6ZSAgICAgICAgIDogcmVxdWlyZSgnLi9zcmMvY2FtZWxpemUnKSxcbiAgICBodW1hbml6ZSAgICAgICAgIDogcmVxdWlyZSgnLi9zcmMvaHVtYW5pemUnKSxcbiAgICBoeXBoZW5hdGUgICAgICAgIDogcmVxdWlyZSgnLi9zcmMvaHlwaGVuYXRlJyksXG5cbiAgICBpczogcmVxdWlyZSgnLi9zcmMvaXMnKVxufSIsIiAgICAvKipcclxuICAgICAqIFV0aWxpdHkgbWV0aG9kcyBmb3Igd29ya2luZyB3aXRoIGZ1bmN0aW9ucy5cclxuICAgICAqIFRoZXNlIG1ldGhvZHMgYXVnbWVudCB0aGUgRnVuY3Rpb24gcHJvdG90eXBlLlxyXG4gICAgICpcclxuICAgICAqIFVzaW5nIHtAbGluayAjYmVmb3JlfVxyXG4gICAgICpcclxuICAgICAqICAgICAgZnVuY3Rpb24gbG9nKG0pe1xyXG4gICAgICogICAgICAgICAgY29uc29sZS5sb2cobSlcclxuICAgICAqICAgICAgfVxyXG4gICAgICpcclxuICAgICAqICAgICAgdmFyIGRvTG9nID0gZnVuY3Rpb24gKG0pe1xyXG4gICAgICogICAgICAgICAgY29uc29sZS5sb2coJ0xPRyAnKVxyXG4gICAgICogICAgICB9LmJlZm9yZShsb2cpXHJcbiAgICAgKlxyXG4gICAgICogICAgICBkb0xvZygndGVzdCcpXHJcbiAgICAgKiAgICAgIC8vd2lsbCBsb2dcclxuICAgICAqICAgICAgLy9cIkxPRyBcIlxyXG4gICAgICogICAgICAvL2FuZCB0aGVuXHJcbiAgICAgKiAgICAgIC8vXCJ0ZXN0XCJcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIFVzaW5nIHtAbGluayAjYmluZEFyZ3N9OlxyXG4gICAgICpcclxuICAgICAqICAgICAgLy9yZXR1cm5zIHRoZSBzdW0gb2YgYWxsIGFyZ3VtZW50c1xyXG4gICAgICogICAgICBmdW5jdGlvbiBhZGQoKXtcclxuICAgICAqICAgICAgICAgIHZhciBzdW0gPSAwXHJcbiAgICAgKiAgICAgICAgICBbXS5mcm9tKGFyZ3VtZW50cykuZm9yRWFjaChmdW5jdGlvbihuKXtcclxuICAgICAqICAgICAgICAgICAgICBzdW0gKz0gblxyXG4gICAgICogICAgICAgICAgfSlcclxuICAgICAqXHJcbiAgICAgKiAgICAgICAgICByZXR1cm4gc3VtXHJcbiAgICAgKiAgICAgIH1cclxuICAgICAqXHJcbiAgICAgKiAgICAgIHZhciBhZGQxID0gYWRkLmJpbmRBcmdzKDEpXHJcbiAgICAgKlxyXG4gICAgICogICAgICBhZGQxKDIsIDMpID09IDZcclxuICAgICAqXHJcbiAgICAgKiBVc2luZyB7QGxpbmsgI2xvY2tBcmdzfTpcclxuICAgICAqXHJcbiAgICAgKiAgICAgIGZ1bmN0aW9uIGFkZCgpe1xyXG4gICAgICogICAgICAgICAgdmFyIHN1bSA9IDBcclxuICAgICAqICAgICAgICAgIFtdLmZyb20oYXJndW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe1xyXG4gICAgICogICAgICAgICAgICAgIHN1bSArPSBuXHJcbiAgICAgKiAgICAgICAgICB9KVxyXG4gICAgICpcclxuICAgICAqICAgICAgICAgIHJldHVybiBzdW1cclxuICAgICAqICAgICAgfVxyXG4gICAgICpcclxuICAgICAqICAgICAgdmFyIGFkZDFfMiAgID0gYWRkLmxvY2tBcmdzKDEsMilcclxuICAgICAqICAgICAgdmFyIGFkZDFfMl8zID0gYWRkLmxvY2tBcmdzKDEsMiwzKVxyXG4gICAgICpcclxuICAgICAqICAgICAgYWRkMV8yKDMsNCkgID09IDMgLy9hcmdzIGFyZSBsb2NrZWQgdG8gb25seSBiZSAxIGFuZCAyXHJcbiAgICAgKiAgICAgIGFkZDFfMl8zKDYpICA9PSA2IC8vYXJncyBhcmUgbG9ja2VkIHRvIG9ubHkgYmUgMSwgMiBhbmQgM1xyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogVXNpbmcge0BsaW5rICNjb21wb3NlfTpcclxuICAgICAqXHJcbiAgICAgKiAgICAgIGZ1bmN0aW9uIG11bHRpcGx5KGEsYil7XHJcbiAgICAgKiAgICAgICAgICByZXR1cm4gYSogYlxyXG4gICAgICogICAgICB9XHJcbiAgICAgKlxyXG4gICAgICogICAgICB2YXIgbXVsdGlwbHkyID0gbXVsdGlwbHkuY3VycnkoKSgyKVxyXG4gICAgICpcclxuICAgICAqICAgICAgRnVuY3Rpb24uY29tcG9zZShtdWx0aXBseTIoIGFkZCg1LDYpICkpID09IG11bHRpcGx5MiggYWRkKDUsNikgKVxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBAY2xhc3MgRnVuY3Rpb25cclxuICAgICAqL1xyXG5cclxuICAgIHZhciBTTElDRSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxyXG5cclxuICAgIHZhciBjb21wb3NlVHdvID0gZnVuY3Rpb24oZiwgZykge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGYoZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY3VycnkgPSBmdW5jdGlvbihmbiwgbil7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicpe1xyXG4gICAgICAgICAgICAgICAgbiA9IGZuLmxlbmd0aFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDdXJyeUNsb3N1cmUocHJldkFyZ3Mpe1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGN1cnJ5Q2xvc3VyZSgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiAgPSBhcmd1bWVudHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gW10uY29uY2F0KHByZXZBcmdzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobGVuKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoLmFwcGx5KGFyZ3MsIGFyZ3VtZW50cylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG4pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q3VycnlDbG9zdXJlKGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncylcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycnlDbG9zdXJlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDdXJyeUNsb3N1cmUoW10pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZmluZCA9IGN1cnJ5KGZ1bmN0aW9uKGZuLCB0YXJnZXQpe1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldC5maW5kID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5maW5kKGZuKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKXtcclxuICAgICAgICAgICAgICAgIHZhciBpICAgPSAwXHJcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gdGFyZ2V0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgdmFyIGl0XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKDsgaSA8IGxlbjsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpdCA9IHRhcmdldFtpXVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbihpdCwgaSwgdGFyZ2V0KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDBcclxuICAgICAgICAgICAgICAgIHZhciBsZW4gPSBrZXlzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgdmFyIGtcclxuICAgICAgICAgICAgICAgIHZhciBpdFxyXG5cclxuICAgICAgICAgICAgICAgIGZvciggOyBpIDwgbGVuOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGsgID0ga2V5c1tpXVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ID0gdGFyZ2V0W2tdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbihpdCwgaywgdGFyZ2V0KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBiaW5kRnVuY3Rpb25zT2YgPSBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uKGspe1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba10gPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tdID0gb2JqW2tdLmJpbmQob2JqKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9ialxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbi4uLn0gYW4gZW51bWVyYXRpb24gb2YgZnVuY3Rpb25zLCBlYWNoIGNvbnN1bWluZyB0aGUgcmVzdWx0IG9mIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBGb3IgZXhhbXBsZTogY29tcG9zZShjLCBiLCBhKSgxLDQpID09IGMoYihhKDEsNCkpKVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBmaXJzdCBmdW5jdGlvbiBpbiB0aGUgZW51bWVyYXRpb25cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb21wb3NlID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzXHJcbiAgICAgICAgICAgIHZhciBsZW4gID0gYXJncy5sZW5ndGhcclxuICAgICAgICAgICAgdmFyIGkgICAgPSAwXHJcbiAgICAgICAgICAgIHZhciBmICAgID0gYXJnc1swXVxyXG5cclxuICAgICAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xyXG4gICAgICAgICAgICAgICAgZiA9IGNvbXBvc2VUd28oZiwgYXJnc1tpXSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjaGFpbiA9IGZ1bmN0aW9uKHdoZXJlLCBmbiwgc2Vjb25kRm4pe1xyXG4gICAgICAgICAgICB2YXIgZm5zID0gW1xyXG4gICAgICAgICAgICAgICAgd2hlcmUgPT09ICdiZWZvcmUnPyBzZWNvbmRGbjogZm4sXHJcbiAgICAgICAgICAgICAgICB3aGVyZSAhPT0gJ2JlZm9yZSc/IHNlY29uZEZuOiBmblxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmICh3aGVyZSA9PT0gJ2JlZm9yZScpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZEZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aGVyZSAhPT0gJ2JlZm9yZScpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZEZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBmb3J3YXJkID0gZnVuY3Rpb24oZm4sIHNjb3BlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZuLmJpbmQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZm4uYmluZChzY29wZSk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShzY29wZSwgYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvbmNlID0gZnVuY3Rpb24oZm4sIHNjb3BlKXtcclxuICAgICAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9IGZuLmNhbGwoc2NvcGUgfHwgdGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJpbmRBcmdzQXJyYXkgPSBmdW5jdGlvbihmbiwgYXJncyl7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNBcmdzID0gU0xJQ0UuY2FsbChhcmdzIHx8IFtdKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzQXJncy5wdXNoLmFwcGx5KHRoaXNBcmdzLCBhcmd1bWVudHMpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIHRoaXNBcmdzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYmluZEFyZ3MgPSBmdW5jdGlvbihmbil7XHJcbiAgICAgICAgICAgIHJldHVybiBiaW5kQXJnc0FycmF5KGZuLCBTTElDRS5jYWxsKGFyZ3VtZW50cywxKSlcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBsb2NrID0gZnVuY3Rpb24oZm4sIHNjb3BlKXtcclxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBTTElDRS5jYWxsKGFyZ3VtZW50cywgMilcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHNjb3BlLCBhcmdzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbG9ja0FyZ3NBcnJheSA9IGZ1bmN0aW9uKGZuLCBhcmdzKXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZ3MpKXtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzID0gU0xJQ0UuY2FsbChhcmdzIHx8IFtdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbG9ja0FyZ3MgPSBmdW5jdGlvbihmbil7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2NrQXJnc0FycmF5KGZuLCBTTElDRS5jYWxsKGFyZ3VtZW50cywgMSkgKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNraXBBcmdzID0gZnVuY3Rpb24oZm4sIGNvdW50KXtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFNMSUNFLmNhbGwoYXJndW1lbnRzLCBjb3VudCB8fCAwKVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW50ZXJjZXB0ID0gZnVuY3Rpb24oaW50ZXJjZXB0ZWRGbiwgaW50ZXJjZXB0aW5nRm4sIHdpdGhTdG9wQXJnKXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgICAgPSBbXS5mcm9tKGFyZ3VtZW50cyksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcEFyZyA9IHsgc3RvcDogZmFsc2UgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aXRoU3RvcEFyZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHN0b3BBcmcpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGludGVyY2VwdGluZ0ZuLmFwcGx5KHRoaXMsIGFyZ3MpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdpdGhTdG9wQXJnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcEFyZy5zdG9wID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3RoZSBpbnRlcmNlcHRpb24gd2FzIG5vdCBzdG9wcGVkXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW50ZXJjZXB0ZWRGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGVsYXkgPSBmdW5jdGlvbihmbiwgZGVsYXksIHNjb3BlKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWxheUlzTnVtYmVyID0gZGVsYXkgKiAxID09IGRlbGF5XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyICYmICFkZWxheUlzTnVtYmVyKXtcclxuICAgICAgICAgICAgICAgIHNjb3BlID0gZGVsYXlcclxuICAgICAgICAgICAgICAgIGRlbGF5ID0gMFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkZWxheUlzTnVtYmVyKXtcclxuICAgICAgICAgICAgICAgICAgICBkZWxheSA9IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHNjb3BlIHx8IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3VtZW50c1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkZWxheSA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZuLmFwcGx5KHNlbGYsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlbGF5IHx8ICFzZXRJbW1lZGlhdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm4uYXBwbHkoc2VsZiwgYXJncylcclxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSlcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEltbWVkaWF0ZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbi5hcHBseShzZWxmLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkZWZlciA9IGZ1bmN0aW9uKGZuLCBzY29wZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWxheShmbiwgMCwgc2NvcGUpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYnVmZmVyID0gZnVuY3Rpb24oZm4sIGRlbGF5LCBzY29wZSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGltZW91dElkID0gLTFcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gc2NvcGUgfHwgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJndW1lbnRzXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRlbGF5IDwgMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm4uYXBwbHkoc2VsZiwgYXJncylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgd2l0aFRpbWVvdXQgPSBkZWxheSB8fCAhc2V0SW1tZWRpYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyRm4gPSB3aXRoVGltZW91dD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Rm4gICA9IHdpdGhUaW1lb3V0P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW1tZWRpYXRlXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyRm4odGltZW91dElkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldEZuKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm4uYXBwbHkoc2VsZiwgYXJncylcclxuICAgICAgICAgICAgICAgICAgICBzZWxmID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRocm90dGxlID0gZnVuY3Rpb24oZm4sIGRlbGF5LCBzY29wZSkge1xyXG4gICAgICAgICAgICB2YXIgdGltZW91dElkID0gLTEsXHJcbiAgICAgICAgICAgICAgICBzZWxmLFxyXG4gICAgICAgICAgICAgICAgYXJnc1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmID0gc2NvcGUgfHwgdGhpc1xyXG4gICAgICAgICAgICAgICAgYXJncyA9IGFyZ3VtZW50c1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0SWQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGUgZnVuY3Rpb24gd2FzIGNhbGxlZCBvbmNlIGFnYWluIGluIHRoZSBkZWxheSBpbnRlcnZhbFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm4uYXBwbHkoc2VsZiwgYXJncylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1heEFyZ3MgPSBmdW5jdGlvbihmbiwgY291bnQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBTTElDRS5jYWxsKGFyZ3VtZW50cywgMCwgY291bnQpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc3ByZWFkID0gZnVuY3Rpb24oZm4sIGRlbGF5LCBzY29wZSl7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGltZW91dElkICAgICAgID0gLTFcclxuICAgICAgICAgICAgdmFyIGNhbGxDb3VudCAgICAgICA9IDBcclxuICAgICAgICAgICAgdmFyIGV4ZWN1dGVDb3VudCAgICA9IDBcclxuICAgICAgICAgICAgdmFyIG5leHRBcmdzICAgICAgICA9IHt9XHJcbiAgICAgICAgICAgIHZhciBpbmNyZWFzZUNvdW50ZXIgPSB0cnVlXHJcbiAgICAgICAgICAgIHZhciByZXN1bHRpbmdGblVuYm91bmRcclxuICAgICAgICAgICAgdmFyIHJlc3VsdGluZ0ZuXHJcblxyXG4gICAgICAgICAgICByZXN1bHRpbmdGbiA9IHJlc3VsdGluZ0ZuVW5ib3VuZCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZiA9IHNjb3BlIHx8IHRoaXNcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5jcmVhc2VDb3VudGVyKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0QXJnc1tjYWxsQ291bnQrK10gPSB7YXJnczogYXJncywgc2NvcGU6IHNlbGZ9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhlIGZ1bmN0aW9uIHdhcyBjYWxsZWQgb25jZSBhZ2FpbiBpbiB0aGUgZGVsYXkgaW50ZXJ2YWxcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbi5hcHBseShzZWxmLCBhcmdzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dElkID0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0ZUNvdW50KytcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsQ291bnQgIT09IGV4ZWN1dGVDb3VudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRpbmdGbiA9IGJpbmRBcmdzQXJyYXkocmVzdWx0aW5nRm5VbmJvdW5kLCBuZXh0QXJnc1tleGVjdXRlQ291bnRdLmFyZ3MpLmJpbmQobmV4dEFyZ3NbZXhlY3V0ZUNvdW50XS5zY29wZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBuZXh0QXJnc1tleGVjdXRlQ291bnRdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jcmVhc2VDb3VudGVyID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdGluZ0ZuLmFwcGx5KHNlbGYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNyZWFzZUNvdW50ZXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0QXJncyA9IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRpbmdGblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gYXJncyB0aGUgYXJyYXkgZm9yIHdoaWNoIHRvIGNyZWF0ZSBhIGNhY2hlIGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbY2FjaGVQYXJhbU51bWJlcl0gdGhlIG51bWJlciBvZiBhcmdzIHRvIHVzZSBmb3IgdGhlIGNhY2hlIGtleS4gVXNlIHRoaXMgdG8gbGltaXQgdGhlIGFyZ3MgdGhhdCBhcmVhIGFjdHVhbGx5IHVzZWQgZm9yIHRoZSBjYWNoZSBrZXlcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRDYWNoZUtleSA9IGZ1bmN0aW9uKGFyZ3MsIGNhY2hlUGFyYW1OdW1iZXIpe1xyXG4gICAgICAgICAgICBpZiAoY2FjaGVQYXJhbU51bWJlciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGNhY2hlUGFyYW1OdW1iZXIgPSAtMVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaSAgICAgICAgPSAwLFxyXG4gICAgICAgICAgICAgICAgbGVuICAgICAgPSBNYXRoLm1pbihhcmdzLmxlbmd0aCwgY2FjaGVQYXJhbU51bWJlciksXHJcbiAgICAgICAgICAgICAgICBjYWNoZUtleSA9IFtdLFxyXG4gICAgICAgICAgICAgICAgaXRcclxuXHJcbiAgICAgICAgICAgIGZvciAoIDsgaSA8IGxlbjsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGl0ID0gYXJnc1tpXVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyb290LmNoZWNrLmlzUGxhaW5PYmplY3QoaXQpIHx8IEFycmF5LmlzQXJyYXkoaXQpKXtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZUtleS5wdXNoKEpTT04uc3RyaW5naWZ5KGl0KSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVLZXkucHVzaChTdHJpbmcoaXQpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVLZXkuam9pbignLCAnKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0aGUgZnVuY3Rpb24gdG8gY2FjaGUgcmVzdWx0cyBmb3JcclxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gc2tpcENhY2hlUGFyYW1OdW1iZXIgLSB0aGUgaW5kZXggb2YgdGhlIGJvb2xlYW4gcGFyYW1ldGVyIHRoYXQgbWFrZXMgdGhpcyBmdW5jdGlvbiBza2lwIHRoZSBjYWNoaW5nIGFuZFxyXG4gICAgICAgICAqIGFjdHVhbGx5IHJldHVybiBjb21wdXRlZCByZXN1bHRzLlxyXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBjYWNoZUJ1Y2tldE1ldGhvZCAtIGEgZnVuY3Rpb24gb3IgdGhlIG5hbWUgb2YgYSBtZXRob2Qgb24gdGhpcyBvYmplY3Qgd2hpY2ggbWFrZXMgY2FjaGluZyBkaXN0cmlidXRlZCBhY3Jvc3MgbXVsdGlwbGUgYnVja2V0cy5cclxuICAgICAgICAgKiBJZiBnaXZlbiwgY2FjaGVkIHJlc3VsdHMgd2lsbCBiZSBzZWFyY2hlZCBpbnRvIHRoZSBjYWNoZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgYnVja2V0LiBJZiBubyByZXN1bHQgZm91bmQsIHJldHVybiBjb21wdXRlZCByZXN1bHQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBGb3IgZXhhbXBsZSB0aGlzIHBhcmFtIGlzIHZlcnkgdXNlZnVsIHdoZW4gYSBmdW5jdGlvbiBmcm9tIGEgcHJvdG90eXBlIGlzIGNhY2hlZCxcclxuICAgICAgICAgKiBidXQgd2Ugd2FudCB0byByZXR1cm4gdGhlIHNhbWUgY2FjaGVkIHJlc3VsdHMgb25seSBmb3Igb25lIG9iamVjdCB0aGF0IGluaGVyaXRzIHRoYXQgcHJvdG8sIG5vdCBmb3IgYWxsIG9iamVjdHMuIFRodXMsIGZvciBleGFtcGxlIGZvciBXZXMuRWxlbWVudCxcclxuICAgICAgICAgKiB3ZSB1c2UgdGhlICdnZXRJZCcgY2FjaGVCdWNrZXRNZXRob2QgdG8gaW5kaWNhdGUgY2FjaGVkIHJlc3VsdHMgZm9yIG9uZSBvYmplY3Qgb25seS5cclxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FjaGVLZXlCdWlsZGVyXSBBIGZ1bmN0aW9uIHRvIGJlIHVzZWQgdG8gY29tcG9zZSB0aGUgY2FjaGUga2V5XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gYSBuZXcgZnVuY3Rpb24sIHdoaWNoIHJldHVybnMgcmVzdWx0cyBmcm9tIGNhY2hlLCBpZiB0aGV5IGFyZSBhdmFpbGFibGUsIG90aGVyd2lzZSB1c2VzIHRoZSBnaXZlbiBmbiB0byBjb21wdXRlIHRoZSByZXN1bHRzLlxyXG4gICAgICAgICAqIFRoaXMgcmV0dXJuZWQgZnVuY3Rpb24gaGFzIGEgJ2NsZWFyQ2FjaGUnIGZ1bmN0aW9uIGF0dGFjaGVkLCB3aGljaCBjbGVhcnMgdGhlIGNhY2hpbmcuIElmIGEgcGFyYW1ldGVyICggYSBidWNrZXQgaWQpIGlzICBwcm92aWRlZCxcclxuICAgICAgICAgKiBvbmx5IGNsZWFycyB0aGUgY2FjaGUgaW4gdGhlIHNwZWNpZmllZCBjYWNoZSBidWNrZXQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2FjaGUgPSBmdW5jdGlvbihmbiwgY29uZmlnKXtcclxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9XHJcblxyXG4gICAgICAgICAgICB2YXIgYnVja2V0Q2FjaGUgPSB7fSxcclxuICAgICAgICAgICAgICAgIGNhY2hlICAgICAgID0ge30sXHJcbiAgICAgICAgICAgICAgICBza2lwQ2FjaGVQYXJhbU51bWJlciA9IGNvbmZpZy5za2lwQ2FjaGVJbmRleCxcclxuICAgICAgICAgICAgICAgIGNhY2hlQnVja2V0TWV0aG9kICAgID0gY29uZmlnLmNhY2hlQnVja2V0LFxyXG4gICAgICAgICAgICAgICAgY2FjaGVLZXlCdWlsZGVyICAgICAgPSBjb25maWcuY2FjaGVLZXksXHJcbiAgICAgICAgICAgICAgICBjYWNoZUFyZ3NMZW5ndGggICAgICA9IHNraXBDYWNoZVBhcmFtTnVtYmVyID09IG51bGw/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4ubGVuZ3RoOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraXBDYWNoZVBhcmFtTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgY2FjaGluZ0ZuXHJcblxyXG4gICAgICAgICAgICBjYWNoaW5nRm4gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBza2lwQ2FjaGUgPSBza2lwQ2FjaGVQYXJhbU51bWJlciAhPSBudWxsP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbc2tpcENhY2hlUGFyYW1OdW1iZXJdID09PSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzID0gc2tpcENhY2hlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTTElDRS5jYWxsKGFyZ3VtZW50cywgMCwgY2FjaGVBcmdzTGVuZ3RoKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU0xJQ0UuY2FsbChhcmd1bWVudHMpLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWNoZUJ1Y2tldElkID0gY2FjaGVCdWNrZXRNZXRob2QgIT0gbnVsbD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjYWNoZUJ1Y2tldE1ldGhvZCA9PSAnZnVuY3Rpb24nP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlQnVja2V0TWV0aG9kKCk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHRoaXNbY2FjaGVCdWNrZXRNZXRob2RdID09ICdmdW5jdGlvbic/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbY2FjaGVCdWNrZXRNZXRob2RdKCk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWNoZU9iamVjdCA9IGNhY2hlQnVja2V0SWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWNrZXRDYWNoZVtjYWNoZUJ1Y2tldElkXTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWNoZUtleSA9IChjYWNoZUtleUJ1aWxkZXIgfHwgZ2V0Q2FjaGVLZXkpKGFyZ3MsIGNhY2hlQXJnc0xlbmd0aClcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVCdWNrZXRJZCAmJiAhY2FjaGVPYmplY3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlT2JqZWN0ID0gYnVja2V0Q2FjaGVbY2FjaGVCdWNrZXRJZF0gPSB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChza2lwQ2FjaGUgfHwgY2FjaGVPYmplY3RbY2FjaGVLZXldID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlT2JqZWN0W2NhY2hlS2V5XSA9IHJlc3VsdCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNhY2hlT2JqZWN0W2NhY2hlS2V5XVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE51bWJlcn0gW2J1Y2tldElkXSB0aGUgYnVja2V0IGZvciB3aGljaCB0byBjbGVhciB0aGUgY2FjaGUuIElmIG5vbmUgZ2l2ZW4sIGNsZWFycyBhbGwgdGhlIGNhY2hlIGZvciB0aGlzIGZ1bmN0aW9uLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2FjaGluZ0ZuLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbihidWNrZXRJZCl7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVja2V0SWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBidWNrZXRDYWNoZVtTdHJpbmcoYnVja2V0SWQpXVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZSA9IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgYnVja2V0Q2FjaGUgPSB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBjYWNoZUFyZ3MgVGhlIGFycmF5IG9mIG9iamVjdHMgZnJvbSB3aGljaCB0byBjcmVhdGUgdGhlIGNhY2hlIGtleVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW2NhY2hlUGFyYW1OdW1iZXJdIEEgbGltaXQgZm9yIHRoZSBjYWNoZSBhcmdzIHRoYXQgYXJlIGFjdHVhbGx5IHVzZWQgdG8gY29tcHV0ZSB0aGUgY2FjaGUga2V5LlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FjaGVLZXlCdWlsZGVyXSBUaGUgZnVuY3Rpb24gdG8gYmUgdXNlZCB0byBjb21wdXRlIHRoZSBjYWNoZSBrZXkgZnJvbSB0aGUgZ2l2ZW4gY2FjaGVBcmdzIGFuZCBjYWNoZVBhcmFtTnVtYmVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjYWNoaW5nRm4uZ2V0Q2FjaGUgPSBmdW5jdGlvbihjYWNoZUFyZ3MsIGNhY2hlUGFyYW1OdW1iZXIsIGNhY2hlS2V5QnVpbGRlcil7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGluZ0ZuLmdldEJ1Y2tldENhY2hlKG51bGwsIGNhY2hlQXJncywgY2FjaGVQYXJhbU51bWJlciwgY2FjaGVLZXlCdWlsZGVyKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gYnVja2V0SWQgVGhlIGlkIG9mIHRoZSBjYWNoZSBidWNrZXQgZnJvbSB3aGljaCB0byByZXRyaWV2ZSB0aGUgY2FjaGVkIHZhbHVlXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGNhY2hlQXJncyBUaGUgYXJyYXkgb2Ygb2JqZWN0cyBmcm9tIHdoaWNoIHRvIGNyZWF0ZSB0aGUgY2FjaGUga2V5XHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbY2FjaGVQYXJhbU51bWJlcl0gQSBsaW1pdCBmb3IgdGhlIGNhY2hlIGFyZ3MgdGhhdCBhcmUgYWN0dWFsbHkgdXNlZCB0byBjb21wdXRlIHRoZSBjYWNoZSBrZXkuXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWNoZUtleUJ1aWxkZXJdIFRoZSBmdW5jdGlvbiB0byBiZSB1c2VkIHRvIGNvbXB1dGUgdGhlIGNhY2hlIGtleSBmcm9tIHRoZSBnaXZlbiBjYWNoZUFyZ3MgYW5kIGNhY2hlUGFyYW1OdW1iZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNhY2hpbmdGbi5nZXRCdWNrZXRDYWNoZSA9IGZ1bmN0aW9uKGJ1Y2tldElkLCBjYWNoZUFyZ3MsIGNhY2hlUGFyYW1OdW1iZXIsIGNhY2hlS2V5QnVpbGRlcil7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVPYmplY3QgPSBjYWNoZSxcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZUtleSA9IChjYWNoZUtleUJ1aWxkZXIgfHwgZ2V0Q2FjaGVLZXkpKGNhY2hlQXJncywgY2FjaGVQYXJhbU51bWJlcilcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYnVja2V0SWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1Y2tldElkID0gU3RyaW5nKGJ1Y2tldElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVPYmplY3QgPSBidWNrZXRDYWNoZVtidWNrZXRJZF0gPSBidWNrZXRDYWNoZVtidWNrZXRJZF0gfHwge31cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVPYmplY3RbY2FjaGVLZXldXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IGluIHRoZSBjYWNoZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBjYWNoZUFyZ3MgVGhlIGFycmF5IG9mIG9iamVjdHMgZnJvbSB3aGljaCB0byBjcmVhdGUgdGhlIGNhY2hlIGtleVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW2NhY2hlUGFyYW1OdW1iZXJdIEEgbGltaXQgZm9yIHRoZSBjYWNoZSBhcmdzIHRoYXQgYXJlIGFjdHVhbGx5IHVzZWQgdG8gY29tcHV0ZSB0aGUgY2FjaGUga2V5LlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FjaGVLZXlCdWlsZGVyXSBUaGUgZnVuY3Rpb24gdG8gYmUgdXNlZCB0byBjb21wdXRlIHRoZSBjYWNoZSBrZXkgZnJvbSB0aGUgZ2l2ZW4gY2FjaGVBcmdzIGFuZCBjYWNoZVBhcmFtTnVtYmVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjYWNoaW5nRm4uc2V0Q2FjaGUgPSBmdW5jdGlvbih2YWx1ZSwgY2FjaGVBcmdzLCBjYWNoZVBhcmFtTnVtYmVyLCBjYWNoZUtleUJ1aWxkZXIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hpbmdGbi5zZXRCdWNrZXRDYWNoZShudWxsLCB2YWx1ZSwgY2FjaGVBcmdzLCBjYWNoZVBhcmFtTnVtYmVyLCBjYWNoZUtleUJ1aWxkZXIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBidWNrZXRJZCBUaGUgaWQgb2YgdGhlIGNhY2hlIGJ1Y2tldCBmb3Igd2hpY2ggdG8gc2V0IHRoZSBjYWNoZSB2YWx1ZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCBpbiB0aGUgY2FjaGVcclxuICAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gY2FjaGVBcmdzIFRoZSBhcnJheSBvZiBvYmplY3RzIGZyb20gd2hpY2ggdG8gY3JlYXRlIHRoZSBjYWNoZSBrZXlcclxuICAgICAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IFtjYWNoZVBhcmFtTnVtYmVyXSBBIGxpbWl0IGZvciB0aGUgY2FjaGUgYXJncyB0aGF0IGFyZSBhY3R1YWxseSB1c2VkIHRvIGNvbXB1dGUgdGhlIGNhY2hlIGtleS5cclxuICAgICAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhY2hlS2V5QnVpbGRlcl0gVGhlIGZ1bmN0aW9uIHRvIGJlIHVzZWQgdG8gY29tcHV0ZSB0aGUgY2FjaGUga2V5IGZyb20gdGhlIGdpdmVuIGNhY2hlQXJncyBhbmQgY2FjaGVQYXJhbU51bWJlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY2FjaGluZ0ZuLnNldEJ1Y2tldENhY2hlID0gZnVuY3Rpb24oYnVja2V0SWQsIHZhbHVlLCBjYWNoZUFyZ3MsIGNhY2hlUGFyYW1OdW1iZXIsIGNhY2hlS2V5QnVpbGRlcil7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlT2JqZWN0ID0gY2FjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVLZXkgPSAoY2FjaGVLZXlCdWlsZGVyIHx8IGdldENhY2hlS2V5KShjYWNoZUFyZ3MsIGNhY2hlUGFyYW1OdW1iZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1Y2tldElkKXtcclxuICAgICAgICAgICAgICAgICAgICBidWNrZXRJZCA9IFN0cmluZyhidWNrZXRJZClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVPYmplY3QgPSBidWNrZXRDYWNoZVtidWNrZXRJZF0gPSBidWNrZXRDYWNoZVtidWNrZXRJZF0gfHwge307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlT2JqZWN0W2NhY2hlS2V5XSA9IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoaW5nRm5cclxuICAgICAgICB9XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBtYXA6IGN1cnJ5KGZ1bmN0aW9uKGZuLCB2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUubWFwP1xyXG4gICAgICAgICAgICAgICAgdmFsdWUubWFwKGZuKTpcclxuICAgICAgICAgICAgICAgIGZuKHZhbHVlKVxyXG4gICAgfSksXHJcblxyXG4gICAgZG90OiBjdXJyeShmdW5jdGlvbihwcm9wLCB2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9IHVuZGVmaW5lZD8gdmFsdWVbcHJvcF06IHVuZGVmaW5lZFxyXG4gICAgfSksXHJcblxyXG4gICAgbWF4QXJnczogY3VycnkobWF4QXJncyksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbWV0aG9kIGNvbXBvc2VcclxuICAgICAqXHJcbiAgICAgKiBFeGFtcGxlOlxyXG4gICAgICpcclxuICAgICAqICAgICAgemlwcHkuRnVuY3Rpb24uY29tcG9zZShjLCBiLCBhKVxyXG4gICAgICpcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jY29tcG9zZX1cclxuICAgICAqL1xyXG4gICAgY29tcG9zZTogY29tcG9zZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jc2VsZn1cclxuICAgICAqL1xyXG4gICAgc2VsZjogZnVuY3Rpb24oZm4pe1xyXG4gICAgICAgIHJldHVybiBmblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jYnVmZmVyfVxyXG4gICAgICovXHJcbiAgICBidWZmZXI6IGJ1ZmZlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jZGVsYXl9XHJcbiAgICAgKi9cclxuICAgIGRlbGF5OiBkZWxheSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jZGVmZXJ9XHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXHJcbiAgICAgKi9cclxuICAgIGRlZmVyOmRlZmVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VlIHtAbGluayBGdW5jdGlvbiNza2lwQXJnc31cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2NvdW50PTBdIGhvdyBtYW55IGFyZ3MgdG8gc2tpcCB3aGVuIGNhbGxpbmcgdGhlIHJlc3VsdGluZyBmdW5jdGlvblxyXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgY2FsbCB0aGUgb3JpZ2luYWwgZm4gd2l0aG91dCB0aGUgZmlyc3QgY291bnQgYXJncy5cclxuICAgICAqL1xyXG4gICAgc2tpcEFyZ3M6IHNraXBBcmdzLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VlIHtAbGluayBGdW5jdGlvbiNpbnRlcmNlcHR9XHJcbiAgICAgKi9cclxuICAgIGludGVyY2VwdDogZnVuY3Rpb24oZm4sIGludGVyY2VwdGVkRm4sIHdpdGhTdG9wQXJncyl7XHJcbiAgICAgICAgcmV0dXJuIGludGVyY2VwdChpbnRlcmNlcHRlZEZuLCBmbiwgd2l0aFN0b3BBcmdzKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jdGhyb3R0bGV9XHJcbiAgICAgKi9cclxuICAgIHRocm90dGxlOiB0aHJvdHRsZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jc3ByZWFkfVxyXG4gICAgICovXHJcbiAgICBzcHJlYWQ6IHNwcmVhZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jY2hhaW59XHJcbiAgICAgKi9cclxuICAgIGNoYWluOiBmdW5jdGlvbihmbiwgd2hlcmUsIG1haW5Gbil7XHJcbiAgICAgICAgcmV0dXJuIGNoYWluKHdoZXJlLCBtYWluRm4sIGZuKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jYmVmb3JlfVxyXG4gICAgICovXHJcbiAgICBiZWZvcmU6IGZ1bmN0aW9uKGZuLCBvdGhlckZuKXtcclxuICAgICAgICByZXR1cm4gY2hhaW4oJ2JlZm9yZScsIG90aGVyRm4sIGZuKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jYWZ0ZXJ9XHJcbiAgICAgKi9cclxuICAgIGFmdGVyOiBmdW5jdGlvbihmbiwgb3RoZXJGbil7XHJcbiAgICAgICAgcmV0dXJuIGNoYWluKCdhZnRlcicsIG90aGVyRm4sIGZuKVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jY3Vycnl9XHJcbiAgICAgKi9cclxuICAgIGN1cnJ5OiBjdXJyeSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jZm9yd2FyZH1cclxuICAgICAqL1xyXG4gICAgZm9yd2FyZDogZm9yd2FyZCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jb25jZX1cclxuICAgICAqL1xyXG4gICAgb25jZTogb25jZSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlZSB7QGxpbmsgRnVuY3Rpb24jYmluZEFyZ3N9XHJcbiAgICAgKi9cclxuICAgIGJpbmRBcmdzOiBmdW5jdGlvbihmbil7XHJcbiAgICAgICAgcmV0dXJuIGJpbmRBcmdzQXJyYXkoZm4sIFNMSUNFLmNhbGwoYXJndW1lbnRzLCAxKSlcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWUge0BsaW5rIEZ1bmN0aW9uI2JpbmRBcmdzQXJyYXl9XHJcbiAgICAgKi9cclxuICAgIGJpbmRBcmdzQXJyYXk6IGJpbmRBcmdzQXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWUge0BsaW5rIEZ1bmN0aW9uI2xvY2tBcmdzfVxyXG4gICAgICovXHJcbiAgICBsb2NrQXJnczogZnVuY3Rpb24oZm4pe1xyXG4gICAgICAgIHJldHVybiBsb2NrQXJnc0FycmF5KGZuLCBTTElDRS5jYWxsKGFyZ3VtZW50cywgMSkpXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VlIHtAbGluayBGdW5jdGlvbiNsb2NrQXJnc0FycmF5fVxyXG4gICAgICovXHJcbiAgICBsb2NrQXJnc0FycmF5OiBsb2NrQXJnc0FycmF5LFxyXG5cclxuICAgIGJpbmRGdW5jdGlvbnNPZjogYmluZEZ1bmN0aW9uc09mLFxyXG5cclxuICAgIGZpbmQ6IGZpbmRcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMnKSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nIHx8ICEhdmFsdWUuY2FsbGVlXG59IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufSIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdib29sZWFuJ1xufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJ1xufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbnVtYmVyID0gcmVxdWlyZSgnLi9udW1iZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICByZXR1cm4gbnVtYmVyKHZhbHVlKSAmJiAodmFsdWUgPT09IHBhcnNlRmxvYXQodmFsdWUsIDEwKSkgJiYgISh2YWx1ZSA9PT0gcGFyc2VJbnQodmFsdWUsIDEwKSlcbn0iLCIndXNlIHN0cmljdCdcblxudmFyIG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG59IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdudW1lcmljJyAgOiByZXF1aXJlKCcuL251bWVyaWMnKSxcbiAgICAnbnVtYmVyJyAgIDogcmVxdWlyZSgnLi9udW1iZXInKSxcbiAgICAnaW50JyAgICAgIDogcmVxdWlyZSgnLi9pbnQnKSxcbiAgICAnZmxvYXQnICAgIDogcmVxdWlyZSgnLi9mbG9hdCcpLFxuICAgICdzdHJpbmcnICAgOiByZXF1aXJlKCcuL3N0cmluZycpLFxuICAgICdmdW5jdGlvbicgOiByZXF1aXJlKCcuL2Z1bmN0aW9uJyksXG4gICAgJ29iamVjdCcgICA6IHJlcXVpcmUoJy4vb2JqZWN0JyksXG4gICAgJ2FyZ3VtZW50cyc6IHJlcXVpcmUoJy4vYXJndW1lbnRzJyksXG4gICAgJ2Jvb2xlYW4nICA6IHJlcXVpcmUoJy4vYm9vbGVhbicpLFxuICAgICdkYXRlJyAgICAgOiByZXF1aXJlKCcuL2RhdGUnKSxcbiAgICAncmVnZXhwJyAgIDogcmVxdWlyZSgnLi9yZWdleHAnKSxcbiAgICAnYXJyYXknICAgIDogcmVxdWlyZSgnLi9hcnJheScpXG59IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBudW1iZXIgPSByZXF1aXJlKCcuL251bWJlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiBudW1iZXIodmFsdWUpICYmICh2YWx1ZSA9PT0gcGFyc2VJbnQodmFsdWUsIDEwKSlcbn0iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpXG59IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiAhaXNOYU4oIHBhcnNlRmxvYXQoIHZhbHVlICkgKSAmJiBpc0Zpbml0ZSggdmFsdWUgKVxufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nXG59IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSdcbn0iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJ1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaXNlbWFpbCcpO1xuIiwiKGZ1bmN0aW9uIChwcm9jZXNzKXtcbi8qKlxuICogVG8gdmFsaWRhdGUgYW4gZW1haWwgYWRkcmVzcyBhY2NvcmRpbmcgdG8gUkZDcyA1MzIxLCA1MzIyIGFuZCBvdGhlcnNcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAwOC0yMDExLCBEb21pbmljIFNheWVyc1xuICogVGVzdCBzY2hlbWEgZG9jdW1lbnRhdGlvbiBDb3B5cmlnaHQgwqkgMjAxMSwgRGFuaWVsIE1hcnNjaGFsbFxuICogUG9ydCBmb3IgTm9kZS5qcyBDb3B5cmlnaHQgwqkgMjAxMywgR2xvYmVTaGVycGFcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAgIC0gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogICAgIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgIC0gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogICAgIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbiAqICAgICBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAgLSBOZWl0aGVyIHRoZSBuYW1lIG9mIERvbWluaWMgU2F5ZXJzIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9ycyBtYXlcbiAqICAgICBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0XG4gKiAgICAgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4gKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuICogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuICogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuICogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiAqIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuICogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiAqIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKlxuICogQGF1dGhvciAgICAgIERvbWluaWMgU2F5ZXJzIDxkb21pbmljQHNheWVycy5jYz5cbiAqIEBhdXRob3IgICAgICBFbGkgU2tlZ2dzIDxlc2tlZ2dzQGdsb2Jlc2hlcnBhLmNvbT5cbiAqIEBjb3B5cmlnaHQgICAyMDA4LTIwMTEgRG9taW5pYyBTYXllcnNcbiAqIEBjb3B5cmlnaHQgICAyMDEzLTIwMTQgR2xvYmVTaGVycGFcbiAqIEBsaWNlbnNlICAgICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL2JzZC1saWNlbnNlLnBocCBCU0QgTGljZW5zZVxuICogQGxpbmsgICAgICAgIGh0dHA6Ly93d3cuZG9taW5pY3NheWVycy5jb20vaXNlbWFpbFxuICogQGxpbmsgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9nbG9iZXNoZXJwYS9pc2VtYWlsXG4gKiBAdmVyc2lvbiAgICAgMS4xLjEgLSBPcHRpbWl6YXRpb24gcGFzcywgc2ltcGxpZnkgY29uc3RhbnRzLCBzdHlsZSwgZGVhZCBjb2RlLlxuICovXG5cbi8vIGxhenktbG9hZGVkXG52YXIgZG5zLCBIQVNfUkVRVUlSRSA9IHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJztcblxuLy8gY2F0ZWdvcmllc1xudmFyIElTRU1BSUxfVkFMSURfQ0FURUdPUlkgPSAxO1xudmFyIElTRU1BSUxfRE5TV0FSTiA9IDc7XG52YXIgSVNFTUFJTF9SRkM1MzIxID0gMTU7XG52YXIgSVNFTUFJTF9DRldTID0gMzE7XG52YXIgSVNFTUFJTF9ERVBSRUMgPSA2MztcbnZhciBJU0VNQUlMX1JGQzUzMjIgPSAxMjc7XG52YXIgSVNFTUFJTF9FUlIgPSAyNTU7XG5cbi8vIGRpYWdub3Nlc1xuLy8gYWRkcmVzcyBpcyB2YWxpZFxudmFyIElTRU1BSUxfVkFMSUQgPSAwO1xuLy8gYWRkcmVzcyBpcyB2YWxpZCBidXQgYSBETlMgY2hlY2sgd2FzIG5vdCBzdWNjZXNzZnVsXG52YXIgSVNFTUFJTF9ETlNXQVJOX05PX01YX1JFQ09SRCA9IDU7XG52YXIgSVNFTUFJTF9ETlNXQVJOX05PX1JFQ09SRCA9IDY7XG4vLyBhZGRyZXNzIGlzIHZhbGlkIGZvciBTTVRQIGJ1dCBoYXMgdW51c3VhbCBlbGVtZW50c1xudmFyIElTRU1BSUxfUkZDNTMyMV9UTEQgPSA5O1xudmFyIElTRU1BSUxfUkZDNTMyMV9UTEROVU1FUklDID0gMTA7XG52YXIgSVNFTUFJTF9SRkM1MzIxX1FVT1RFRFNUUklORyA9IDExO1xudmFyIElTRU1BSUxfUkZDNTMyMV9BRERSRVNTTElURVJBTCA9IDEyO1xudmFyIElTRU1BSUxfUkZDNTMyMV9JUFY2REVQUkVDQVRFRCA9IDEzO1xuLy8gYWRkcmVzcyBpcyB2YWxpZCB3aXRoaW4gdGhlIG1lc3NhZ2UgYnV0IGNhbm5vdCBiZSB1c2VkIHVubW9kaWZpZWQgZm9yIHRoZVxuLy8gZW52ZWxvcGVcbnZhciBJU0VNQUlMX0NGV1NfQ09NTUVOVCA9IDE3O1xudmFyIElTRU1BSUxfQ0ZXU19GV1MgPSAxODtcbi8vIGFkZHJlc3MgY29udGFpbnMgZGVwcmVjYXRlZCBlbGVtZW50cyBidXQgbWF5IHN0aWxsIGJlIHZhbGlkIGluIHJlc3RyaWN0ZWRcbi8vIGNvbnRleHRzXG52YXIgSVNFTUFJTF9ERVBSRUNfTE9DQUxQQVJUID0gMzM7XG52YXIgSVNFTUFJTF9ERVBSRUNfRldTID0gMzQ7XG52YXIgSVNFTUFJTF9ERVBSRUNfUVRFWFQgPSAzNTtcbnZhciBJU0VNQUlMX0RFUFJFQ19RUCA9IDM2O1xudmFyIElTRU1BSUxfREVQUkVDX0NPTU1FTlQgPSAzNztcbnZhciBJU0VNQUlMX0RFUFJFQ19DVEVYVCA9IDM4O1xudmFyIElTRU1BSUxfREVQUkVDX0NGV1NfTkVBUl9BVCA9IDQ5O1xuLy8gdGhlIGFkZHJlc3MgaXMgb25seSB2YWxpZCBhY2NvcmRpbmcgdG8gdGhlIGJyb2FkIGRlZmluaXRpb24gb2YgUkZDIDUzMjIsIGJ1dFxuLy8gb3RoZXJ3aXNlIGludmFsaWRcbnZhciBJU0VNQUlMX1JGQzUzMjJfRE9NQUlOID0gNjU7XG52YXIgSVNFTUFJTF9SRkM1MzIyX1RPT0xPTkcgPSA2NjtcbnZhciBJU0VNQUlMX1JGQzUzMjJfTE9DQUxfVE9PTE9ORyA9IDY3O1xudmFyIElTRU1BSUxfUkZDNTMyMl9ET01BSU5fVE9PTE9ORyA9IDY4O1xudmFyIElTRU1BSUxfUkZDNTMyMl9MQUJFTF9UT09MT05HID0gNjk7XG52YXIgSVNFTUFJTF9SRkM1MzIyX0RPTUFJTkxJVEVSQUwgPSA3MDtcbnZhciBJU0VNQUlMX1JGQzUzMjJfRE9NTElUX09CU0RURVhUID0gNzE7XG52YXIgSVNFTUFJTF9SRkM1MzIyX0lQVjZfR1JQQ09VTlQgPSA3MjtcbnZhciBJU0VNQUlMX1JGQzUzMjJfSVBWNl8yWDJYQ09MT04gPSA3MztcbnZhciBJU0VNQUlMX1JGQzUzMjJfSVBWNl9CQURDSEFSID0gNzQ7XG52YXIgSVNFTUFJTF9SRkM1MzIyX0lQVjZfTUFYR1JQUyA9IDc1O1xudmFyIElTRU1BSUxfUkZDNTMyMl9JUFY2X0NPTE9OU1RSVCA9IDc2O1xudmFyIElTRU1BSUxfUkZDNTMyMl9JUFY2X0NPTE9ORU5EID0gNzc7XG4vLyBhZGRyZXNzIGlzIGludmFsaWQgZm9yIGFueSBwdXJwb3NlXG52YXIgSVNFTUFJTF9FUlJfRVhQRUNUSU5HX0RURVhUID0gMTI5O1xudmFyIElTRU1BSUxfRVJSX05PTE9DQUxQQVJUID0gMTMwO1xudmFyIElTRU1BSUxfRVJSX05PRE9NQUlOID0gMTMxO1xudmFyIElTRU1BSUxfRVJSX0NPTlNFQ1VUSVZFRE9UUyA9IDEzMjtcbnZhciBJU0VNQUlMX0VSUl9BVEVYVF9BRlRFUl9DRldTID0gMTMzO1xudmFyIElTRU1BSUxfRVJSX0FURVhUX0FGVEVSX1FTID0gMTM0O1xudmFyIElTRU1BSUxfRVJSX0FURVhUX0FGVEVSX0RPTUxJVCA9IDEzNTtcbnZhciBJU0VNQUlMX0VSUl9FWFBFQ1RJTkdfUVBBSVIgPSAxMzY7XG52YXIgSVNFTUFJTF9FUlJfRVhQRUNUSU5HX0FURVhUID0gMTM3O1xudmFyIElTRU1BSUxfRVJSX0VYUEVDVElOR19RVEVYVCA9IDEzODtcbnZhciBJU0VNQUlMX0VSUl9FWFBFQ1RJTkdfQ1RFWFQgPSAxMzk7XG52YXIgSVNFTUFJTF9FUlJfQkFDS1NMQVNIRU5EID0gMTQwO1xudmFyIElTRU1BSUxfRVJSX0RPVF9TVEFSVCA9IDE0MTtcbnZhciBJU0VNQUlMX0VSUl9ET1RfRU5EID0gMTQyO1xudmFyIElTRU1BSUxfRVJSX0RPTUFJTkhZUEhFTlNUQVJUID0gMTQzO1xudmFyIElTRU1BSUxfRVJSX0RPTUFJTkhZUEhFTkVORCA9IDE0NDtcbnZhciBJU0VNQUlMX0VSUl9VTkNMT1NFRFFVT1RFRFNUUiA9IDE0NTtcbnZhciBJU0VNQUlMX0VSUl9VTkNMT1NFRENPTU1FTlQgPSAxNDY7XG52YXIgSVNFTUFJTF9FUlJfVU5DTE9TRURET01MSVQgPSAxNDc7XG52YXIgSVNFTUFJTF9FUlJfRldTX0NSTEZfWDIgPSAxNDg7XG52YXIgSVNFTUFJTF9FUlJfRldTX0NSTEZfRU5EID0gMTQ5O1xudmFyIElTRU1BSUxfRVJSX0NSX05PX0xGID0gMTUwO1xudmFyIElTRU1BSUxfRVJSX1VOS05PV05fVExEID0gMTYwO1xudmFyIElTRU1BSUxfRVJSX1RPT1NIT1JUX0RPTUFJTiA9IDE2MTtcblxuLy8gZnVuY3Rpb24gY29udHJvbFxudmFyIFRIUkVTSE9MRCA9IDE2O1xuLy8gZW1haWwgcGFydHNcbnZhciBDT01QT05FTlRfTE9DQUxQQVJUID0gMDtcbnZhciBDT01QT05FTlRfRE9NQUlOID0gMTtcbnZhciBDT01QT05FTlRfTElURVJBTCA9IDI7XG52YXIgQ09OVEVYVF9DT01NRU5UID0gMztcbnZhciBDT05URVhUX0ZXUyA9IDQ7XG52YXIgQ09OVEVYVF9RVU9URURTVFJJTkcgPSA1O1xudmFyIENPTlRFWFRfUVVPVEVEUEFJUiA9IDY7XG5cbi8vIFVTLUFTQ0lJIHZpc2libGUgY2hhcmFjdGVycyBub3QgdmFsaWQgZm9yIGF0ZXh0XG4vLyAoaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMiNzZWN0aW9uLTMuMi4zKVxudmFyIFNQRUNJQUxTID0gJygpPD5bXTo7QFxcXFwsLlwiJztcblxuZnVuY3Rpb24gb3B0aW1pemVMb29rdXAoc3RyaW5nKSB7XG4gIHZhciBib2R5ID0gJycsIG1pbiA9IDB4MTAwLCBtYXggPSAwLCBsb29rdXAgPSBuZXcgQXJyYXkobWluKTtcbiAgZm9yICh2YXIgaSA9IG1pbiAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbG9va3VwW2ldID0gZmFsc2U7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2hyID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNociA8IG1pbikge1xuICAgICAgbWluID0gY2hyO1xuICAgIH1cbiAgICBpZiAoY2hyID4gbWF4KSB7XG4gICAgICBtYXggPSBjaHI7XG4gICAgfVxuICAgIGxvb2t1cFtjaHJdID0gdHJ1ZTtcbiAgfVxuICBsb29rdXAubGVuZ3RoID0gbWF4O1xuICB2YXIgYm9keSA9ICd2YXIgbG9va3VwID0gJyArIEpTT04uc3RyaW5naWZ5KGxvb2t1cCkgKyAnO1xcbic7XG4gIGJvZHkgKz0gJ3JldHVybiBmdW5jdGlvbihjb2RlKSB7XFxuJztcbiAgYm9keSArPSAnICBpZiAoY29kZSA8ICcgKyBtaW4gKyAnIHx8IGNvZGUgPiAnICsgbWF4ICsgJykge1xcbic7XG4gIGJvZHkgKz0gJyAgICByZXR1cm4gZmFsc2U7XFxuJztcbiAgYm9keSArPSAnICB9XFxuJztcbiAgYm9keSArPSAnICByZXR1cm4gbG9va3VwW2NvZGVdO1xcbic7XG4gIGJvZHkgKz0gJ30nO1xuICByZXR1cm4gKG5ldyBGdW5jdGlvbihib2R5KSkoKTtcbn1cblxudmFyIHNwZWNpYWxzTG9va3VwID0gb3B0aW1pemVMb29rdXAoU1BFQ0lBTFMpO1xuXG4vLyBtYXRjaGVzIHZhbGlkIElQdjQgYWRkcmVzc2VzIGZyb20gdGhlIGVuZCBvZiBhIHN0cmluZ1xudmFyIElQdjRfUkVHRVggPVxuICAvXFxiKD86KD86MjVbMC01XXwyWzAtNF1cXGR8WzAxXT9cXGRcXGQ/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVxcZHxbMDFdP1xcZFxcZD8pJC87XG52YXIgSVB2Nl9SRUdFWCA9IC9eW2EtZkEtRlxcZF17MCw0fSQvO1xudmFyIElQdjZfUkVHRVhfVEVTVCA9IElQdjZfUkVHRVgudGVzdC5iaW5kKElQdjZfUkVHRVgpO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXQgdGhlIGxhcmdlc3QgbnVtYmVyIGluIHRoZSBhcnJheS5cbiAqXG4gKiBSZXR1cm5zIC1JbmZpbml0eSBpZiB0aGUgYXJyYXkgaXMgZW1wdHkuXG4gKlxuICogQHBhcmFtIHtBcnJheS48bnVtYmVyPn0gYXJyYXkgVGhlIGFycmF5IHRvIHNjYW4uXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBsYXJnZXN0IG51bWJlciBjb250YWluZWQuXG4gKi9cbmZ1bmN0aW9uIG1heFZhbHVlKGFycmF5KSB7XG4gIHZhciB2ID0gLUluZmluaXR5LCBpID0gMCwgbiA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA+IHYpIHtcbiAgICAgIHYgPSBhcnJheVtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdjtcbn1cblxuLyoqXG4gKiBDaGVjayB0aGF0IGFuIGVtYWlsIGFkZHJlc3MgY29uZm9ybXMgdG8gUkZDcyA1MzIxLCA1MzIyIGFuZCBvdGhlcnNcbiAqXG4gKiBBcyBvZiBWZXJzaW9uIDMuMCwgd2UgYXJlIG5vdyBkaXN0aW5ndWlzaGluZyBjbGVhcmx5IGJldHdlZW4gYSBNYWlsYm94XG4gKiBhcyBkZWZpbmVkIGJ5IFJGQyA1MzIxIGFuZCBhbiBhZGRyLXNwZWMgYXMgZGVmaW5lZCBieSBSRkMgNTMyMi4gRGVwZW5kaW5nXG4gKiBvbiB0aGUgY29udGV4dCwgZWl0aGVyIGNhbiBiZSByZWdhcmRlZCBhcyBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuIFRoZVxuICogUkZDIDUzMjEgTWFpbGJveCBzcGVjaWZpY2F0aW9uIGlzIG1vcmUgcmVzdHJpY3RpdmUgKGNvbW1lbnRzLCB3aGl0ZSBzcGFjZVxuICogYW5kIG9ic29sZXRlIGZvcm1zIGFyZSBub3QgYWxsb3dlZCkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIHRvIGNoZWNrLlxuICogQHBhcmFtIHtib29sZWFufSBjaGVja0ROUyBJZiB0cnVlIHRoZW4gd2lsbCBjaGVjayBETlMgZm9yIE1YIHJlY29yZHMuIElmIHRydWVcbiAqICAgdGhpcyBpc0VtYWlsIF93aWxsXyBiZSBhc3luY2hyb25vdXMuXG4gKiBAcGFyYW0geyp9IGVycm9yTGV2ZWwgRGV0ZXJtaW5lcyB0aGUgYm91bmRhcnkgYmV0d2VlbiB2YWxpZCBhbmQgaW52YWxpZFxuICogICBhZGRyZXNzZXMuIFN0YXR1cyBjb2RlcyBhYm92ZSB0aGlzIG51bWJlciB3aWxsIGJlIHJldHVybmVkIGFzLWlzLCBzdGF0dXNcbiAqICAgY29kZXMgYmVsb3cgd2lsbCBiZSByZXR1cm5lZCBhcyBJU0VNQUlMX1ZBTElELiBUaHVzIHRoZSBjYWxsaW5nIHByb2dyYW0gY2FuXG4gKiAgIHNpbXBseSBsb29rIGZvciBJU0VNQUlMX1ZBTElEIGlmIGl0IGlzIG9ubHkgaW50ZXJlc3RlZCBpbiB3aGV0aGVyIGFuXG4gKiAgIGFkZHJlc3MgaXMgdmFsaWQgb3Igbm90LiBUaGUgZXJyb3JMZXZlbCB3aWxsIGRldGVybWluZSBob3cgXCJwaWNreVwiXG4gKiAgIGlzRW1haWwoKSBpcyBhYm91dCB0aGUgYWRkcmVzcy4gSWYgb21pdHRlZCBvciBwYXNzZWQgYXMgZmFsc2UgdGhlblxuICogICBpc0VtYWlsKCkgd2lsbCByZXR1cm4gdHJ1ZSBvciBmYWxzZSByYXRoZXIgdGhhbiBhbiBpbnRlZ2VyIGVycm9yIG9yXG4gKiAgIHdhcm5pbmcuIE5CIE5vdGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBlcnJvckxldmVsID0gZmFsc2UgYW5kXG4gKiAgIGVycm9yTGV2ZWwgPSAwLlxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gaXNFbWFpbChlbWFpbCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuXG4gIHZhciB0aHJlc2hvbGQsIGRpYWdub3NlO1xuICBpZiAodHlwZW9mIG9wdGlvbnMuZXJyb3JMZXZlbCA9PT0gJ251bWJlcicpIHtcbiAgICBkaWFnbm9zZSA9IHRydWU7XG4gICAgdGhyZXNob2xkID0gb3B0aW9ucy5lcnJvckxldmVsO1xuICB9IGVsc2Uge1xuICAgIGRpYWdub3NlID0gISFvcHRpb25zLmVycm9yTGV2ZWw7XG4gICAgdGhyZXNob2xkID0gSVNFTUFJTF9WQUxJRDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnRsZFdoaXRlbGlzdCAmJiB0eXBlb2Ygb3B0aW9ucy50bGRXaGl0ZWxpc3QgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYXJyYXkgb3Igb2JqZWN0IHRsZFdoaXRlbGlzdCcpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWluRG9tYWluQXRvbXMgJiYgKG9wdGlvbnMubWluRG9tYWluQXRvbXMgIT09XG4gICAgICAoKCtvcHRpb25zLm1pbkRvbWFpbkF0b21zKSB8IDApIHx8IG9wdGlvbnMubWluRG9tYWluQXRvbXMgPCAwKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIHBvc2l0aXZlIGludGVnZXIgbWluRG9tYWluQXRvbXMnKTtcbiAgfVxuXG4gIHZhciBtYXhSZXN1bHQgPSBJU0VNQUlMX1ZBTElEO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVJlc3VsdCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA+IG1heFJlc3VsdCkge1xuICAgICAgbWF4UmVzdWx0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgbm93OiBDT01QT05FTlRfTE9DQUxQQVJULFxuICAgIHByZXY6IENPTVBPTkVOVF9MT0NBTFBBUlQsXG4gICAgc3RhY2s6IFtDT01QT05FTlRfTE9DQUxQQVJUXVxuICB9O1xuXG4gIHZhciB0b2tlbiA9ICcnLCBwcmV2VG9rZW4gPSAnJywgY2hhckNvZGUgPSAwO1xuICB2YXIgcGFyc2VEYXRhID0ge2xvY2FsOiAnJywgZG9tYWluOiAnJ307XG4gIHZhciBhdG9tTGlzdCA9IHtsb2NhbDogWycnXSwgZG9tYWluOiBbJyddfTtcblxuICB2YXIgZWxlbWVudENvdW50ID0gMCwgZWxlbWVudExlbmd0aCA9IDAsIGNybGZDb3VudCA9IDA7XG4gIHZhciBoeXBoZW5GbGFnID0gZmFsc2UsIGFzc2VydEVuZCA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZW1haWwubGVuZ3RoOyBpKyspIHtcbiAgICB0b2tlbiA9IGVtYWlsW2ldO1xuXG4gICAgc3dpdGNoIChjb250ZXh0Lm5vdykge1xuICAgIC8vIGxvY2FsLXBhcnRcbiAgICBjYXNlIENPTVBPTkVOVF9MT0NBTFBBUlQ6XG4gICAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MzIyI3NlY3Rpb24tMy40LjFcbiAgICAgIC8vICAgbG9jYWwtcGFydCAgICAgID0gICBkb3QtYXRvbSAvIHF1b3RlZC1zdHJpbmcgLyBvYnMtbG9jYWwtcGFydFxuICAgICAgLy9cbiAgICAgIC8vICAgZG90LWF0b20gICAgICAgID0gICBbQ0ZXU10gZG90LWF0b20tdGV4dCBbQ0ZXU11cbiAgICAgIC8vXG4gICAgICAvLyAgIGRvdC1hdG9tLXRleHQgICA9ICAgMSphdGV4dCAqKFwiLlwiIDEqYXRleHQpXG4gICAgICAvL1xuICAgICAgLy8gICBxdW90ZWQtc3RyaW5nICAgPSAgIFtDRldTXVxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgIERRVU9URSAqKFtGV1NdIHFjb250ZW50KSBbRldTXSBEUVVPVEVcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBbQ0ZXU11cbiAgICAgIC8vXG4gICAgICAvLyAgIG9icy1sb2NhbC1wYXJ0ICA9ICAgd29yZCAqKFwiLlwiIHdvcmQpXG4gICAgICAvL1xuICAgICAgLy8gICB3b3JkICAgICAgICAgICAgPSAgIGF0b20gLyBxdW90ZWQtc3RyaW5nXG4gICAgICAvL1xuICAgICAgLy8gICBhdG9tICAgICAgICAgICAgPSAgIFtDRldTXSAxKmF0ZXh0IFtDRldTXVxuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gY29tbWVudFxuICAgICAgY2FzZSAnKCc6XG4gICAgICAgIGlmIChlbGVtZW50TGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gY29tbWVudHMgYXJlIE9LIGF0IHRoZSBiZWdpbm5pbmcgb2YgYW4gZWxlbWVudFxuICAgICAgICAgIHVwZGF0ZVJlc3VsdChlbGVtZW50Q291bnQgPT09IDAgPyBJU0VNQUlMX0NGV1NfQ09NTUVOVCA6XG4gICAgICAgICAgICBJU0VNQUlMX0RFUFJFQ19DT01NRU5UKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9DRldTX0NPTU1FTlQpO1xuICAgICAgICAgICAvLyBjYW4ndCBzdGFydCBhIGNvbW1lbnQgaW4gYW4gZWxlbWVudCwgc2hvdWxkIGJlIGVuZFxuICAgICAgICAgIGFzc2VydEVuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5zdGFjay5wdXNoKGNvbnRleHQubm93KTtcbiAgICAgICAgY29udGV4dC5ub3cgPSBDT05URVhUX0NPTU1FTlQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gbmV4dCBkb3QtYXRvbSBlbGVtZW50XG4gICAgICBjYXNlICcuJzpcbiAgICAgICAgaWYgKGVsZW1lbnRMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvLyBhbm90aGVyIGRvdCwgYWxyZWFkeT9cbiAgICAgICAgICB1cGRhdGVSZXN1bHQoZWxlbWVudENvdW50ID09PSAwID8gSVNFTUFJTF9FUlJfRE9UX1NUQVJUIDpcbiAgICAgICAgICAgIElTRU1BSUxfRVJSX0NPTlNFQ1VUSVZFRE9UUyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhlIGVudGlyZSBsb2NhbC1wYXJ0IGNhbiBiZSBhIHF1b3RlZCBzdHJpbmcgZm9yIFJGQyA1MzIxXG4gICAgICAgICAgLy8gaWYgaXQncyBqdXN0IG9uZSBhdG9tIHRoYXQgaXMgcXVvdGVkIHRoZW4gaXQncyBhbiBSRkMgNTMyMiBvYnNvbGV0ZVxuICAgICAgICAgIC8vIGZvcm1cbiAgICAgICAgICBpZiAoYXNzZXJ0RW5kKSB7XG4gICAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9ERVBSRUNfTE9DQUxQQVJUKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDRldTICYgcXVvdGVkIHN0cmluZ3MgYXJlIE9LIGFnYWluIG5vdyB3ZSdyZSBhdCB0aGUgYmVnaW5uaW5nIG9mIGFuXG4gICAgICAgICAgLy8gZWxlbWVudCAoYWx0aG91Z2ggdGhleSBhcmUgb2Jzb2xldGUgZm9ybXMpXG4gICAgICAgICAgYXNzZXJ0RW5kID0gZmFsc2U7XG4gICAgICAgICAgZWxlbWVudExlbmd0aCA9IDA7XG4gICAgICAgICAgZWxlbWVudENvdW50Kys7XG4gICAgICAgICAgcGFyc2VEYXRhLmxvY2FsICs9IHRva2VuO1xuICAgICAgICAgIGF0b21MaXN0LmxvY2FsW2VsZW1lbnRDb3VudF0gPSAnJzsgLy8gVE9ETzogcHVzaD9cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIC8vIHF1b3RlZCBzdHJpbmdcbiAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgaWYgKGVsZW1lbnRMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvLyB0aGUgZW50aXJlIGxvY2FsLXBhcnQgY2FuIGJlIGEgcXVvdGVkIHN0cmluZyBmb3IgUkZDIDUzMjFcbiAgICAgICAgICAvLyBpZiBpdCdzIGp1c3Qgb25lIGF0b20gdGhhdCBpcyBxdW90ZWQgdGhlbiBpdCdzIGFuIFJGQyA1MzIyIG9ic29sZXRlXG4gICAgICAgICAgLy8gZm9ybVxuICAgICAgICAgIHVwZGF0ZVJlc3VsdChlbGVtZW50Q291bnQgPT09IDAgPyBJU0VNQUlMX1JGQzUzMjFfUVVPVEVEU1RSSU5HIDpcbiAgICAgICAgICAgIElTRU1BSUxfREVQUkVDX0xPQ0FMUEFSVCk7XG5cbiAgICAgICAgICBwYXJzZURhdGEubG9jYWwgKz0gdG9rZW47XG4gICAgICAgICAgYXRvbUxpc3QubG9jYWxbZWxlbWVudENvdW50XSArPSB0b2tlbjtcbiAgICAgICAgICBlbGVtZW50TGVuZ3RoKys7XG4gICAgICAgICAgYXNzZXJ0RW5kID0gdHJ1ZTsgLy8gcXVvdGVkIHN0cmluZyBtdXN0IGJlIHRoZSBlbnRpcmUgZWxlbWVudFxuICAgICAgICAgIGNvbnRleHQuc3RhY2sucHVzaChjb250ZXh0Lm5vdyk7XG4gICAgICAgICAgY29udGV4dC5ub3cgPSBDT05URVhUX1FVT1RFRFNUUklORztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfRVhQRUNUSU5HX0FURVhUKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIC8vIGZvbGRpbmcgd2hpdGUgc3BhY2VcbiAgICAgIGNhc2UgJ1xccic6XG4gICAgICAgIGlmICgoKytpID09PSBlbWFpbC5sZW5ndGgpIHx8IGVtYWlsW2ldICE9PSAnXFxuJykge1xuICAgICAgICAgIC8vIGZhdGFsIGVycm9yXG4gICAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfRVJSX0NSX05PX0xGKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgY2FzZSAnICc6XG4gICAgICBjYXNlICdcXHQnOlxuICAgICAgICBpZiAoZWxlbWVudExlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHVwZGF0ZVJlc3VsdChlbGVtZW50Q291bnQgPT09IDAgPyBJU0VNQUlMX0NGV1NfRldTIDpcbiAgICAgICAgICAgIElTRU1BSUxfREVQUkVDX0ZXUyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gd2UgY2FuJ3Qgc3RhcnQgRldTIGluIHRoZSBtaWRkbGUgb2YgYW4gZWxlbWVudCwgYmV0dGVyIGJlIGVuZFxuICAgICAgICAgIGFzc2VydEVuZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnN0YWNrLnB1c2goY29udGV4dC5ub3cpO1xuICAgICAgICBjb250ZXh0Lm5vdyA9IENPTlRFWFRfRldTO1xuICAgICAgICBwcmV2VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBAXG4gICAgICBjYXNlICdAJzpcbiAgICAgICAgLy8gYXQgdGhpcyBwb2ludCB3ZSBzaG91bGQgaGF2ZSBhIHZhbGlkIGxvY2FsLXBhcnRcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IGxvZ2ljYWxseSB1bnJlYWNoYWJsZSAqL1xuICAgICAgICBpZiAoY29udGV4dC5zdGFjay5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuZXhwZWN0ZWQgaXRlbSBvbiBjb250ZXh0IHN0YWNrJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyc2VEYXRhLmxvY2FsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIC8vIGZhdGFsIGVycm9yXG4gICAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfRVJSX05PTE9DQUxQQVJUKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50TGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gZmF0YWwgZXJyb3JcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfRE9UX0VORCk7XG4gICAgICAgIC8vIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjEjc2VjdGlvbi00LjUuMy4xLjFcbiAgICAgICAgLy8gICB0aGUgbWF4aW11bSB0b3RhbCBsZW5ndGggb2YgYSB1c2VyIG5hbWUgb3Igb3RoZXIgbG9jYWwtcGFydCBpcyA2NFxuICAgICAgICAvLyAgIG9jdGV0c1xuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlRGF0YS5sb2NhbC5sZW5ndGggPiA2NCkge1xuICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX1JGQzUzMjJfTE9DQUxfVE9PTE9ORyk7XG4gICAgICAgIC8vIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjIjc2VjdGlvbi0zLjQuMVxuICAgICAgICAvLyAgIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlIHNwYWNlXG4gICAgICAgIC8vICAgU0hPVUxEIE5PVCBiZSB1c2VkIGFyb3VuZCB0aGUgXCJAXCIgaW4gdGhlIGFkZHItc3BlY1xuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMTE5XG4gICAgICAgIC8vIDQuIFNIT1VMRCBOT1QgIHRoaXMgcGhyYXNlLCBvciB0aGUgcGhyYXNlIFwiTk9UIFJFQ09NTUVOREVEXCIgbWVhbiB0aGF0XG4gICAgICAgIC8vICAgIHRoZXJlIG1heSBleGlzdCB2YWxpZCByZWFzb25zIGluIHBhcnRpY3VsYXIgY2lyY3Vtc3RhbmNlcyB3aGVuIHRoZVxuICAgICAgICAvLyAgICBwYXJ0aWN1bGFyIGJlaGF2aW9yIGlzIGFjY2VwdGFibGUgb3IgZXZlbiB1c2VmdWwsIGJ1dCB0aGUgZnVsbFxuICAgICAgICAvLyAgICBpbXBsaWNhdGlvbnMgc2hvdWxkIGJlIHVuZGVyc3Rvb2QgYW5kIHRoZSBjYXNlIGNhcmVmdWxseSB3ZWlnaGVkXG4gICAgICAgIC8vICAgIGJlZm9yZSBpbXBsZW1lbnRpbmcgYW55IGJlaGF2aW9yIGRlc2NyaWJlZCB3aXRoIHRoaXMgbGFiZWxcbiAgICAgICAgfSBlbHNlIGlmICgoY29udGV4dC5wcmV2ID09PSBDT05URVhUX0NPTU1FTlQpIHx8XG4gICAgICAgICAgICAoY29udGV4dC5wcmV2ID09PSBDT05URVhUX0ZXUykpIHtcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9ERVBSRUNfQ0ZXU19ORUFSX0FUKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsZWFyIGV2ZXJ5dGhpbmcgZG93biBmb3IgdGhlIGRvbWFpbiBwYXJzaW5nXG4gICAgICAgIGNvbnRleHQubm93ID0gQ09NUE9ORU5UX0RPTUFJTjsgLy8gd2hlcmUgd2UgYXJlXG4gICAgICAgIGNvbnRleHQuc3RhY2tbMF0gPSBDT01QT05FTlRfRE9NQUlOOyAvLyB3aGVyZSB3ZSBoYXZlIGJlZW5cbiAgICAgICAgZWxlbWVudENvdW50ID0gMDtcbiAgICAgICAgZWxlbWVudExlbmd0aCA9IDA7XG4gICAgICAgIGFzc2VydEVuZCA9IGZhbHNlOyAvLyBDRldTIGNhbiBvbmx5IGFwcGVhciBhdCB0aGUgZW5kIG9mIHRoZSBlbGVtZW50XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gYXRleHRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjIjc2VjdGlvbi0zLjIuM1xuICAgICAgICAvLyAgICBhdGV4dCA9IEFMUEhBIC8gRElHSVQgLyA7IFByaW50YWJsZSBVUy1BU0NJSVxuICAgICAgICAvLyAgICAgICAgICAgIFwiIVwiIC8gXCIjXCIgLyAgICAgOyAgY2hhcmFjdGVycyBub3QgaW5jbHVkaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgXCIkXCIgLyBcIiVcIiAvICAgICA7ICBzcGVjaWFscy4gIFVzZWQgZm9yIGF0b21zLlxuICAgICAgICAvLyAgICAgICAgICAgIFwiJlwiIC8gXCInXCIgL1xuICAgICAgICAvLyAgICAgICAgICAgIFwiKlwiIC8gXCIrXCIgL1xuICAgICAgICAvLyAgICAgICAgICAgIFwiLVwiIC8gXCIvXCIgL1xuICAgICAgICAvLyAgICAgICAgICAgIFwiPVwiIC8gXCI/XCIgL1xuICAgICAgICAvLyAgICAgICAgICAgIFwiXlwiIC8gXCJfXCIgL1xuICAgICAgICAvLyAgICAgICAgICAgIFwiYFwiIC8gXCJ7XCIgL1xuICAgICAgICAvLyAgICAgICAgICAgIFwifFwiIC8gXCJ9XCIgL1xuICAgICAgICAvLyAgICAgICAgICAgIFwiflwiXG4gICAgICAgIGlmIChhc3NlcnRFbmQpIHtcbiAgICAgICAgICAvLyB3ZSBoYXZlIGVuY291bnRlcmVkIGF0ZXh0IHdoZXJlIGl0IGlzIG5vIGxvbmdlciB2YWxpZFxuICAgICAgICAgIHN3aXRjaCAoY29udGV4dC5wcmV2KSB7XG4gICAgICAgICAgY2FzZSBDT05URVhUX0NPTU1FTlQ6XG4gICAgICAgICAgY2FzZSBDT05URVhUX0ZXUzpcbiAgICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0VSUl9BVEVYVF9BRlRFUl9DRldTKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQ09OVEVYVF9RVU9URURTVFJJTkc6XG4gICAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfQVRFWFRfQUZURVJfUVMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IGxvZ2ljYWxseSB1bnJlYWNoYWJsZSAqL1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21vcmUgYXRleHQgZm91bmQgd2hlcmUgbm9uZSBpcyBhbGxvd2VkLCAnICtcbiAgICAgICAgICAgICAgJ2J1dCB1bnJlY29nbml6ZWQgcHJldiBjb250ZXh0OiAnICsgY29udGV4dC5wcmV2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5wcmV2ID0gY29udGV4dC5ub3c7XG4gICAgICAgICAgY2hhckNvZGUgPSB0b2tlbi5jaGFyQ29kZUF0KDApO1xuXG4gICAgICAgICAgaWYgKGNoYXJDb2RlIDwgMzMgfHwgY2hhckNvZGUgPiAxMjYgfHwgY2hhckNvZGUgPT09IDEwIHx8XG4gICAgICAgICAgICAgIHNwZWNpYWxzTG9va3VwKGNoYXJDb2RlKSkge1xuICAgICAgICAgICAgLy8gZmF0YWwgZXJyb3JcbiAgICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0VSUl9FWFBFQ1RJTkdfQVRFWFQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhcnNlRGF0YS5sb2NhbCArPSB0b2tlbjtcbiAgICAgICAgICBhdG9tTGlzdC5sb2NhbFtlbGVtZW50Q291bnRdICs9IHRva2VuO1xuICAgICAgICAgIGVsZW1lbnRMZW5ndGgrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDT01QT05FTlRfRE9NQUlOOlxuICAgICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMiNzZWN0aW9uLTMuNC4xXG4gICAgICAvLyAgIGRvbWFpbiAgICAgICAgICA9ICAgZG90LWF0b20gLyBkb21haW4tbGl0ZXJhbCAvIG9icy1kb21haW5cbiAgICAgIC8vXG4gICAgICAvLyAgIGRvdC1hdG9tICAgICAgICA9ICAgW0NGV1NdIGRvdC1hdG9tLXRleHQgW0NGV1NdXG4gICAgICAvL1xuICAgICAgLy8gICBkb3QtYXRvbS10ZXh0ICAgPSAgIDEqYXRleHQgKihcIi5cIiAxKmF0ZXh0KVxuICAgICAgLy9cbiAgICAgIC8vICAgZG9tYWluLWxpdGVyYWwgID0gICBbQ0ZXU10gXCJbXCIgKihbRldTXSBkdGV4dCkgW0ZXU10gXCJdXCIgW0NGV1NdXG4gICAgICAvL1xuICAgICAgLy8gICBkdGV4dCAgICAgICAgICAgPSAgICVkMzMtOTAgLyAgICAgICAgICA7IFByaW50YWJsZSBVUy1BU0NJSVxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICVkOTQtMTI2IC8gICAgICAgICA7ICBjaGFyYWN0ZXJzIG5vdCBpbmNsdWRpbmdcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICBvYnMtZHRleHQgICAgICAgICAgOyAgXCJbXCIsIFwiXVwiLCBvciBcIlxcXCJcbiAgICAgIC8vXG4gICAgICAvLyAgIG9icy1kb21haW4gICAgICA9ICAgYXRvbSAqKFwiLlwiIGF0b20pXG4gICAgICAvL1xuICAgICAgLy8gICBhdG9tICAgICAgICAgICAgPSAgIFtDRldTXSAxKmF0ZXh0IFtDRldTXVxuXG4gICAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MzIxI3NlY3Rpb24tNC4xLjJcbiAgICAgIC8vICAgTWFpbGJveCAgICAgICAgPSBMb2NhbC1wYXJ0IFwiQFwiICggRG9tYWluIC8gYWRkcmVzcy1saXRlcmFsIClcbiAgICAgIC8vXG4gICAgICAvLyAgIERvbWFpbiAgICAgICAgID0gc3ViLWRvbWFpbiAqKFwiLlwiIHN1Yi1kb21haW4pXG4gICAgICAvL1xuICAgICAgLy8gICBhZGRyZXNzLWxpdGVyYWwgID0gXCJbXCIgKCBJUHY0LWFkZHJlc3MtbGl0ZXJhbCAvXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgSVB2Ni1hZGRyZXNzLWxpdGVyYWwgL1xuICAgICAgLy8gICAgICAgICAgICAgICAgICAgIEdlbmVyYWwtYWRkcmVzcy1saXRlcmFsICkgXCJdXCJcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICA7IFNlZSBTZWN0aW9uIDQuMS4zXG5cbiAgICAgIC8vIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjIjc2VjdGlvbi0zLjQuMVxuICAgICAgLy8gICAgICBOb3RlOiBBIGxpYmVyYWwgc3ludGF4IGZvciB0aGUgZG9tYWluIHBvcnRpb24gb2YgYWRkci1zcGVjIGlzXG4gICAgICAvLyAgICAgIGdpdmVuIGhlcmUuICBIb3dldmVyLCB0aGUgZG9tYWluIHBvcnRpb24gY29udGFpbnMgYWRkcmVzc2luZ1xuICAgICAgLy8gICAgICBpbmZvcm1hdGlvbiBzcGVjaWZpZWQgYnkgYW5kIHVzZWQgaW4gb3RoZXIgcHJvdG9jb2xzIChlLmcuLFxuICAgICAgLy8gICAgICBbUkZDMTAzNF0sIFtSRkMxMDM1XSwgW1JGQzExMjNdLCBbUkZDNTMyMV0pLiAgSXQgaXMgdGhlcmVmb3JlXG4gICAgICAvLyAgICAgIGluY3VtYmVudCB1cG9uIGltcGxlbWVudGF0aW9ucyB0byBjb25mb3JtIHRvIHRoZSBzeW50YXggb2ZcbiAgICAgIC8vICAgICAgYWRkcmVzc2VzIGZvciB0aGUgY29udGV4dCBpbiB3aGljaCB0aGV5IGFyZSB1c2VkLlxuICAgICAgLy8gaXNfZW1haWwoKSBhdXRob3IncyBub3RlOiBpdCdzIG5vdCBjbGVhciBob3cgdG8gaW50ZXJwcmV0IHRoaXMgaW5cbiAgICAgIC8vIHRoZSBjb250ZXh0IG9mIGEgZ2VuZXJhbCBlbWFpbCBhZGRyZXNzIHZhbGlkYXRvci4gVGhlIGNvbmNsdXNpb24gSVxuICAgICAgLy8gaGF2ZSByZWFjaGVkIGlzIHRoaXM6IFwiYWRkcmVzc2luZyBpbmZvcm1hdGlvblwiIG11c3QgY29tcGx5IHdpdGhcbiAgICAgIC8vIFJGQyA1MzIxIChhbmQgaW4gdHVybiBSRkMgMTAzNSksIGFueXRoaW5nIHRoYXQgaXMgXCJzZW1hbnRpY2FsbHlcbiAgICAgIC8vIGludmlzaWJsZVwiIG11c3QgY29tcGx5IG9ubHkgd2l0aCBSRkMgNTMyMi5cbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIGNvbW1lbnRcbiAgICAgIGNhc2UgJygnOlxuICAgICAgICBpZiAoZWxlbWVudExlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIC8vIGNvbW1lbnRzIGF0IHRoZSBzdGFydCBvZiB0aGUgZG9tYWluIGFyZSBkZXByZWNhdGVkIGluIHRoZSB0ZXh0XG4gICAgICAgICAgLy8gY29tbWVudHMgYXQgdGhlIHN0YXJ0IG9mIGEgc3ViZG9tYWluIGFyZSBvYnMtZG9tYWluXG4gICAgICAgICAgLy8gKGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjIjc2VjdGlvbi0zLjQuMSlcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoZWxlbWVudENvdW50ID09PSAwID8gSVNFTUFJTF9ERVBSRUNfQ0ZXU19ORUFSX0FUIDpcbiAgICAgICAgICAgIElTRU1BSUxfREVQUkVDX0NPTU1FTlQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0NGV1NfQ09NTUVOVCk7XG4gICAgICAgICAgYXNzZXJ0RW5kID0gdHJ1ZTsgLy8gY2FuJ3Qgc3RhcnQgYSBjb21tZW50IG1pZC1lbGVtZW50LCBiZXR0ZXIgYmUgZW5kXG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnN0YWNrLnB1c2goY29udGV4dC5ub3cpO1xuICAgICAgICBjb250ZXh0Lm5vdyA9IENPTlRFWFRfQ09NTUVOVDtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBuZXh0IGRvdC1hdG9tIGVsZW1lbnRcbiAgICAgIGNhc2UgJy4nOlxuICAgICAgICBpZiAoZWxlbWVudExlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIC8vIGFub3RoZXIgZG90LCBhbHJlYWR5PyBmYXRhbCBlcnJvclxuICAgICAgICAgIHVwZGF0ZVJlc3VsdChlbGVtZW50Q291bnQgPT09IDAgPyBJU0VNQUlMX0VSUl9ET1RfU1RBUlQgOlxuICAgICAgICAgICAgSVNFTUFJTF9FUlJfQ09OU0VDVVRJVkVET1RTKTtcbiAgICAgICAgfSBlbHNlIGlmIChoeXBoZW5GbGFnKSB7XG4gICAgICAgICAgLy8gcHJldmlvdXMgc3ViZG9tYWluIGVuZGVkIGluIGEgaHlwaGVuXG4gICAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfRVJSX0RPTUFJTkhZUEhFTkVORCk7IC8vIGZhdGFsIGVycm9yXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudExlbmd0aCA+IDYzKSB7XG4gICAgICAgICAgLy8gTm93aGVyZSBpbiBSRkMgNTMyMSBkb2VzIGl0IHNheSBleHBsaWNpdGx5IHRoYXQgdGhlXG4gICAgICAgICAgLy8gZG9tYWluIHBhcnQgb2YgYSBNYWlsYm94IG11c3QgYmUgYSB2YWxpZCBkb21haW4gYWNjb3JkaW5nXG4gICAgICAgICAgLy8gdG8gdGhlIEROUyBzdGFuZGFyZHMgc2V0IG91dCBpbiBSRkMgMTAzNSwgYnV0IHRoaXMgKmlzKlxuICAgICAgICAgIC8vIGltcGxpZWQgaW4gc2V2ZXJhbCBwbGFjZXMuIEZvciBpbnN0YW5jZSwgd2hlcmV2ZXIgdGhlIGlkZWFcbiAgICAgICAgICAvLyBvZiBob3N0IHJvdXRpbmcgaXMgZGlzY3Vzc2VkIHRoZSBSRkMgc2F5cyB0aGF0IHRoZSBkb21haW5cbiAgICAgICAgICAvLyBtdXN0IGJlIGxvb2tlZCB1cCBpbiB0aGUgRE5TLiBUaGlzIHdvdWxkIGJlIG5vbnNlbnNlIHVubGVzc1xuICAgICAgICAgIC8vIHRoZSBkb21haW4gd2FzIGRlc2lnbmVkIHRvIGJlIGEgdmFsaWQgRE5TIGRvbWFpbi4gSGVuY2Ugd2VcbiAgICAgICAgICAvLyBtdXN0IGNvbmNsdWRlIHRoYXQgdGhlIFJGQyAxMDM1IHJlc3RyaWN0aW9uIG9uIGxhYmVsIGxlbmd0aFxuICAgICAgICAgIC8vIGFsc28gYXBwbGllcyB0byBSRkMgNTMyMSBkb21haW5zLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMTAzNSNzZWN0aW9uLTIuMy40XG4gICAgICAgICAgLy8gbGFiZWxzICAgICAgICAgIDYzIG9jdGV0cyBvciBsZXNzXG5cbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9SRkM1MzIyX0xBQkVMX1RPT0xPTkcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ0ZXUyBpcyBPSyBhZ2FpbiBub3cgd2UncmUgYXQgdGhlIGJlZ2lubmluZyBvZiBhbiBlbGVtZW50IChhbHRob3VnaFxuICAgICAgICAvLyBpdCBtYXkgYmUgb2Jzb2xldGUgQ0ZXUylcbiAgICAgICAgYXNzZXJ0RW5kID0gZmFsc2U7XG4gICAgICAgIGVsZW1lbnRMZW5ndGggPSAwO1xuICAgICAgICBlbGVtZW50Q291bnQrKztcbiAgICAgICAgYXRvbUxpc3QuZG9tYWluW2VsZW1lbnRDb3VudF0gPSAnJztcbiAgICAgICAgcGFyc2VEYXRhLmRvbWFpbiArPSB0b2tlbjtcblxuICAgICAgICBicmVhaztcbiAgICAgIC8vIGRvbWFpbiBsaXRlcmFsXG4gICAgICBjYXNlICdbJzpcbiAgICAgICAgaWYgKHBhcnNlRGF0YS5kb21haW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gZG9tYWluIGxpdGVyYWwgbXVzdCBiZSB0aGUgb25seSBjb21wb25lbnRcbiAgICAgICAgICBhc3NlcnRFbmQgPSB0cnVlO1xuICAgICAgICAgIGVsZW1lbnRMZW5ndGgrKztcbiAgICAgICAgICBjb250ZXh0LnN0YWNrLnB1c2goY29udGV4dC5ub3cpO1xuICAgICAgICAgIGNvbnRleHQubm93ID0gQ09NUE9ORU5UX0xJVEVSQUw7XG4gICAgICAgICAgcGFyc2VEYXRhLmRvbWFpbiArPSB0b2tlbjtcbiAgICAgICAgICBhdG9tTGlzdC5kb21haW5bZWxlbWVudENvdW50XSArPSB0b2tlbjtcbiAgICAgICAgICBwYXJzZURhdGEubGl0ZXJhbCA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGZhdGFsIGVycm9yXG4gICAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfRVJSX0VYUEVDVElOR19BVEVYVCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBmb2xkaW5nIHdoaXRlIHNwYWNlXG4gICAgICBjYXNlICdcXHInOlxuICAgICAgICBpZiAoKCsraSA9PT0gZW1haWwubGVuZ3RoKSB8fCBlbWFpbFtpXSAhPT0gJ1xcbicpIHtcbiAgICAgICAgICAvLyBmYXRhbCBlcnJvclxuICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0VSUl9DUl9OT19MRik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJyAnOlxuICAgICAgY2FzZSAnXFx0JzpcbiAgICAgICAgaWYgKGVsZW1lbnRMZW5ndGggPT09IDApIHtcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoZWxlbWVudENvdW50ID09PSAwID8gSVNFTUFJTF9ERVBSRUNfQ0ZXU19ORUFSX0FUIDpcbiAgICAgICAgICAgIElTRU1BSUxfREVQUkVDX0ZXUyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gd2UgY2FuJ3Qgc3RhcnQgRldTIGluIHRoZSBtaWRkbGUgb2YgYW4gZWxlbWVudCwgc28gdGhpcyBiZXR0ZXIgYmVcbiAgICAgICAgICAvLyB0aGUgZW5kXG4gICAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfQ0ZXU19GV1MpO1xuICAgICAgICAgIGFzc2VydEVuZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnN0YWNrLnB1c2goY29udGV4dC5ub3cpO1xuICAgICAgICBjb250ZXh0Lm5vdyA9IENPTlRFWFRfRldTO1xuICAgICAgICBwcmV2VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBhdGV4dFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gUkZDIDUzMjIgYWxsb3dzIGFueSBhdGV4dC4uLlxuICAgICAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MzIyI3NlY3Rpb24tMy4yLjNcbiAgICAgICAgLy8gICAgYXRleHQgPSBBTFBIQSAvIERJR0lUIC8gOyBQcmludGFibGUgVVMtQVNDSUlcbiAgICAgICAgLy8gICAgICAgICAgICBcIiFcIiAvIFwiI1wiIC8gICAgIDsgIGNoYXJhY3RlcnMgbm90IGluY2x1ZGluZ1xuICAgICAgICAvLyAgICAgICAgICAgIFwiJFwiIC8gXCIlXCIgLyAgICAgOyAgc3BlY2lhbHMuICBVc2VkIGZvciBhdG9tcy5cbiAgICAgICAgLy8gICAgICAgICAgICBcIiZcIiAvIFwiJ1wiIC9cbiAgICAgICAgLy8gICAgICAgICAgICBcIipcIiAvIFwiK1wiIC9cbiAgICAgICAgLy8gICAgICAgICAgICBcIi1cIiAvIFwiL1wiIC9cbiAgICAgICAgLy8gICAgICAgICAgICBcIj1cIiAvIFwiP1wiIC9cbiAgICAgICAgLy8gICAgICAgICAgICBcIl5cIiAvIFwiX1wiIC9cbiAgICAgICAgLy8gICAgICAgICAgICBcImBcIiAvIFwie1wiIC9cbiAgICAgICAgLy8gICAgICAgICAgICBcInxcIiAvIFwifVwiIC9cbiAgICAgICAgLy8gICAgICAgICAgICBcIn5cIlxuXG4gICAgICAgIC8vIEJ1dCBSRkMgNTMyMSBvbmx5IGFsbG93cyBsZXR0ZXItZGlnaXQtaHlwaGVuIHRvIGNvbXBseSB3aXRoIEROUyBydWxlc1xuICAgICAgICAvLyAgIChSRkNzIDEwMzQgJiAxMTIzKVxuICAgICAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MzIxI3NlY3Rpb24tNC4xLjJcbiAgICAgICAgLy8gICBzdWItZG9tYWluICAgICA9IExldC1kaWcgW0xkaC1zdHJdXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgTGV0LWRpZyAgICAgICAgPSBBTFBIQSAvIERJR0lUXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgTGRoLXN0ciAgICAgICAgPSAqKCBBTFBIQSAvIERJR0lUIC8gXCItXCIgKSBMZXQtZGlnXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChhc3NlcnRFbmQpIHtcbiAgICAgICAgICAvLyB3ZSBoYXZlIGVuY291bnRlcmVkIGF0ZXh0IHdoZXJlIGl0IGlzIG5vIGxvbmdlciB2YWxpZFxuICAgICAgICAgIHN3aXRjaCAoY29udGV4dC5wcmV2KSB7XG4gICAgICAgICAgY2FzZSBDT05URVhUX0NPTU1FTlQ6XG4gICAgICAgICAgY2FzZSBDT05URVhUX0ZXUzpcbiAgICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0VSUl9BVEVYVF9BRlRFUl9DRldTKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQ09NUE9ORU5UX0xJVEVSQUw6XG4gICAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfQVRFWFRfQUZURVJfRE9NTElUKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBsb2dpY2FsbHkgdW5yZWFjaGFibGUgKi9cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb3JlIGF0ZXh0IGZvdW5kIHdoZXJlIG5vbmUgaXMgYWxsb3dlZCwgJyArXG4gICAgICAgICAgICAgICdidXQgdW5yZWNvZ25pemVkIHByZXYgY29udGV4dDogJyArIGNvbnRleHQucHJldik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2hhckNvZGUgPSB0b2tlbi5jaGFyQ29kZUF0KDApO1xuICAgICAgICAvLyBhc3N1bWUgdGhpcyB0b2tlbiBpc24ndCBhIGh5cGhlbiB1bmxlc3Mgd2UgZGlzY292ZXIgaXQgaXNcbiAgICAgICAgaHlwaGVuRmxhZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChjaGFyQ29kZSA8IDMzIHx8IGNoYXJDb2RlID4gMTI2IHx8IHNwZWNpYWxzTG9va3VwKGNoYXJDb2RlKSkge1xuICAgICAgICAgIC8vIGZhdGFsIGVycm9yXG4gICAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfRVJSX0VYUEVDVElOR19BVEVYVCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICctJykge1xuICAgICAgICAgIGlmIChlbGVtZW50TGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBoeXBoZW5zIGNhbid0IGJlIGF0IHRoZSBiZWdpbm5pbmcgb2YgYSBzdWJkb21haW5cbiAgICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0VSUl9ET01BSU5IWVBIRU5TVEFSVCk7IC8vIGZhdGFsIGVycm9yXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaHlwaGVuRmxhZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoISgoY2hhckNvZGUgPiA0NyAmJiBjaGFyQ29kZSA8IDU4KSB8fFxuICAgICAgICAgICAgICAgICAgICAgKGNoYXJDb2RlID4gNjQgJiYgY2hhckNvZGUgPCA5MSkgfHxcbiAgICAgICAgICAgICAgICAgICAgIChjaGFyQ29kZSA+IDk2ICYmIGNoYXJDb2RlIDwgMTIzKSkpIHtcbiAgICAgICAgICAvLyBub3QgYW4gUkZDIDUzMjEgc3ViZG9tYWluLCBidXQgc3RpbGwgT0sgYnkgUkZDIDUzMjJcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9SRkM1MzIyX0RPTUFJTik7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJzZURhdGEuZG9tYWluICs9IHRva2VuO1xuICAgICAgICBhdG9tTGlzdC5kb21haW5bZWxlbWVudENvdW50XSArPSB0b2tlbjtcbiAgICAgICAgZWxlbWVudExlbmd0aCsrO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgLy8gZG9tYWluIGxpdGVyYWxcbiAgICBjYXNlIENPTVBPTkVOVF9MSVRFUkFMOlxuICAgICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMiNzZWN0aW9uLTMuNC4xXG4gICAgICAvLyAgIGRvbWFpbi1saXRlcmFsICA9ICAgW0NGV1NdIFwiW1wiICooW0ZXU10gZHRleHQpIFtGV1NdIFwiXVwiIFtDRldTXVxuICAgICAgLy9cbiAgICAgIC8vICAgZHRleHQgICAgICAgICAgID0gICAlZDMzLTkwIC8gICAgICAgICAgOyBQcmludGFibGUgVVMtQVNDSUlcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAlZDk0LTEyNiAvICAgICAgICAgOyAgY2hhcmFjdGVycyBub3QgaW5jbHVkaW5nXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgb2JzLWR0ZXh0ICAgICAgICAgIDsgIFwiW1wiLCBcIl1cIiwgb3IgXCJcXFwiXG4gICAgICAvL1xuICAgICAgLy8gICBvYnMtZHRleHQgICAgICAgPSAgIG9icy1OTy1XUy1DVEwgLyBxdW90ZWQtcGFpclxuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gZW5kIG9mIGRvbWFpbiBsaXRlcmFsXG4gICAgICBjYXNlICddJzpcbiAgICAgICAgaWYgKG1heFJlc3VsdCA8IElTRU1BSUxfREVQUkVDKSB7XG4gICAgICAgICAgLy8gQ291bGQgYmUgYSB2YWxpZCBSRkMgNTMyMSBhZGRyZXNzIGxpdGVyYWwsIHNvIGxldCdzIGNoZWNrXG5cbiAgICAgICAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MzIxI3NlY3Rpb24tNC4xLjJcbiAgICAgICAgICAvLyAgIGFkZHJlc3MtbGl0ZXJhbCAgPSBcIltcIiAoIElQdjQtYWRkcmVzcy1saXRlcmFsIC9cbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgSVB2Ni1hZGRyZXNzLWxpdGVyYWwgL1xuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICBHZW5lcmFsLWFkZHJlc3MtbGl0ZXJhbCApIFwiXVwiXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIDsgU2VlIFNlY3Rpb24gNC4xLjNcbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjEjc2VjdGlvbi00LjEuM1xuICAgICAgICAgIC8vICAgSVB2NC1hZGRyZXNzLWxpdGVyYWwgID0gU251bSAzKFwiLlwiICBTbnVtKVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICBJUHY2LWFkZHJlc3MtbGl0ZXJhbCAgPSBcIklQdjY6XCIgSVB2Ni1hZGRyXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIEdlbmVyYWwtYWRkcmVzcy1saXRlcmFsICA9IFN0YW5kYXJkaXplZC10YWcgXCI6XCIgMSpkY29udGVudFxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICBTdGFuZGFyZGl6ZWQtdGFnICA9IExkaC1zdHJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDsgU3RhbmRhcmRpemVkLXRhZyBNVVNUIGJlIHNwZWNpZmllZCBpbiBhXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA7IFN0YW5kYXJkcy1UcmFjayBSRkMgYW5kIHJlZ2lzdGVyZWQgd2l0aCBJQU5BXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIGRjb250ZW50ICAgICAgPSAlZDMzLTkwIC8gOyBQcmludGFibGUgVVMtQVNDSUlcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJWQ5NC0xMjYgOyBleGNsLiBcIltcIiwgXCJcXFwiLCBcIl1cIlxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICBTbnVtICAgICAgICAgID0gMSozRElHSVRcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgOyByZXByZXNlbnRpbmcgYSBkZWNpbWFsIGludGVnZXJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgOyB2YWx1ZSBpbiB0aGUgcmFuZ2UgMCB0aHJvdWdoIDI1NVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICBJUHY2LWFkZHIgICAgID0gSVB2Ni1mdWxsIC8gSVB2Ni1jb21wIC8gSVB2NnY0LWZ1bGwgLyBJUHY2djQtY29tcFxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICBJUHY2LWhleCAgICAgID0gMSo0SEVYRElHXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIElQdjYtZnVsbCAgICAgPSBJUHY2LWhleCA3KFwiOlwiIElQdjYtaGV4KVxuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gICBJUHY2LWNvbXAgICAgID0gW0lQdjYtaGV4ICo1KFwiOlwiIElQdjYtaGV4KV0gXCI6OlwiXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgIFtJUHY2LWhleCAqNShcIjpcIiBJUHY2LWhleCldXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDsgVGhlIFwiOjpcIiByZXByZXNlbnRzIGF0IGxlYXN0IDIgMTYtYml0IGdyb3VwcyBvZlxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA7IHplcm9zLiAgTm8gbW9yZSB0aGFuIDYgZ3JvdXBzIGluIGFkZGl0aW9uIHRvIHRoZVxuICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA7IFwiOjpcIiBtYXkgYmUgcHJlc2VudC5cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vICAgSVB2NnY0LWZ1bGwgICA9IElQdjYtaGV4IDUoXCI6XCIgSVB2Ni1oZXgpIFwiOlwiIElQdjQtYWRkcmVzcy1saXRlcmFsXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyAgIElQdjZ2NC1jb21wICAgPSBbSVB2Ni1oZXggKjMoXCI6XCIgSVB2Ni1oZXgpXSBcIjo6XCJcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgW0lQdjYtaGV4ICozKFwiOlwiIElQdjYtaGV4KSBcIjpcIl1cbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgSVB2NC1hZGRyZXNzLWxpdGVyYWxcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgOyBUaGUgXCI6OlwiIHJlcHJlc2VudHMgYXQgbGVhc3QgMiAxNi1iaXQgZ3JvdXBzIG9mXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDsgemVyb3MuICBObyBtb3JlIHRoYW4gNCBncm91cHMgaW4gYWRkaXRpb24gdG8gdGhlXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDsgXCI6OlwiIGFuZCBJUHY0LWFkZHJlc3MtbGl0ZXJhbCBtYXkgYmUgcHJlc2VudC5cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIGlzX2VtYWlsKCkgYXV0aG9yJ3Mgbm90ZTogV2UgY2FuJ3QgdXNlIGlwMmxvbmcoKSB0byB2YWxpZGF0ZVxuICAgICAgICAgIC8vIElQdjQgYWRkcmVzc2VzIGJlY2F1c2UgaXQgYWNjZXB0cyBhYmJyZXZpYXRlZCBhZGRyZXNzZXNcbiAgICAgICAgICAvLyAoeHh4Lnh4eC54eHgpLCBleHBhbmRpbmcgdGhlIGxhc3QgZ3JvdXAgdG8gY29tcGxldGUgdGhlIGFkZHJlc3MuXG4gICAgICAgICAgLy8gZmlsdGVyX3ZhcigpIHZhbGlkYXRlcyBJUHY2IGFkZHJlc3MgaW5jb25zaXN0ZW50bHkgKHVwIHRvIFBIUCA1LjMuM1xuICAgICAgICAgIC8vIGF0IGxlYXN0KSAtLSBzZWUgaHR0cDovL2J1Z3MucGhwLm5ldC9idWcucGhwP2lkPTUzMjM2IGZvciBleGFtcGxlXG5cbiAgICAgICAgICAvLyBUT0RPOiB2YXIgaGVyZT9cbiAgICAgICAgICB2YXIgbWF4R3JvdXBzID0gOCwgbWF0Y2hlc0lQLCBpbmRleCA9IGZhbHNlO1xuICAgICAgICAgIHZhciBhZGRyZXNzTGl0ZXJhbCA9IHBhcnNlRGF0YS5saXRlcmFsO1xuXG4gICAgICAgICAgLy8gbWF5YmUgZXh0cmFjdCBJUHY0IHBhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBhZGRyZXNzLWxpdGVyYWxcbiAgICAgICAgICBpZiAobWF0Y2hlc0lQID0gSVB2NF9SRUdFWC5leGVjKGFkZHJlc3NMaXRlcmFsKSkge1xuICAgICAgICAgICAgaWYgKChpbmRleCA9IG1hdGNoZXNJUC5pbmRleCkgIT09IDApIHtcbiAgICAgICAgICAgICAgLy8gY29udmVydCBJUHY0IHBhcnQgdG8gSVB2NiBmb3JtYXQgZm9yIGZ1dGhlciB0ZXN0aW5nXG4gICAgICAgICAgICAgIGFkZHJlc3NMaXRlcmFsID0gYWRkcmVzc0xpdGVyYWwuc2xpY2UoMCwgbWF0Y2hlc0lQLmluZGV4KSArICcwOjAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gbm90aGluZyB0aGVyZSBleGNlcHQgYSB2YWxpZCBJUHY0IGFkZHJlc3MsIHNvLi4uXG4gICAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9SRkM1MzIxX0FERFJFU1NMSVRFUkFMKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFkZHJlc3NMaXRlcmFsLnNsaWNlKDAsIDUpLnRvTG93ZXJDYXNlKCkgIT09ICdpcHY2OicpIHtcbiAgICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX1JGQzUzMjJfRE9NQUlOTElURVJBTCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGFkZHJlc3NMaXRlcmFsLnN1YnN0cig1KTtcbiAgICAgICAgICAgIG1hdGNoZXNJUCA9IG1hdGNoLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICBpbmRleCA9IG1hdGNoLmluZGV4T2YoJzo6Jyk7XG5cbiAgICAgICAgICAgIGlmICghfmluZGV4KSB7XG4gICAgICAgICAgICAgIC8vIG5lZWQgZXhhY3RseSB0aGUgcmlnaHQgbnVtYmVyIG9mIGdyb3Vwc1xuICAgICAgICAgICAgICBpZiAobWF0Y2hlc0lQLmxlbmd0aCAhPT0gbWF4R3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfUkZDNTMyMl9JUFY2X0dSUENPVU5UKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCAhPT0gbWF0Y2gubGFzdEluZGV4T2YoJzo6JykpIHtcbiAgICAgICAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfUkZDNTMyMl9JUFY2XzJYMlhDT0xPTik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IG1hdGNoLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgICAgICAvLyBSRkMgNDI5MSBhbGxvd3MgOjogYXQgdGhlIHN0YXJ0IG9yIGVuZCBvZiBhbiBhZGRyZXNzIHdpdGhcbiAgICAgICAgICAgICAgICAvLyA3IG90aGVyIGdyb3VwcyBpbiBhZGRpdGlvblxuICAgICAgICAgICAgICAgIG1heEdyb3VwcysrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG1hdGNoZXNJUC5sZW5ndGggPiBtYXhHcm91cHMpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9SRkM1MzIyX0lQVjZfTUFYR1JQUyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2hlc0lQLmxlbmd0aCA9PT0gbWF4R3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgLy8gZWxpZGluZyBhIHNpbmdsZSBcIjo6XCJcbiAgICAgICAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9SRkM1MzIxX0lQVjZERVBSRUNBVEVEKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJUHY2IHRlc3Rpbmcgc3RyYXRlZ3lcbiAgICAgICAgICAgIGlmIChtYXRjaFswXSA9PT0gJzonICYmIG1hdGNoWzFdICE9PSAnOicpIHtcbiAgICAgICAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfUkZDNTMyMl9JUFY2X0NPTE9OU1RSVCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoW21hdGNoLmxlbmd0aCAtIDFdID09PSAnOicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbbWF0Y2gubGVuZ3RoIC0gMl0gIT09ICc6Jykge1xuICAgICAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9SRkM1MzIyX0lQVjZfQ09MT05FTkQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaGVzSVAuZXZlcnkoSVB2Nl9SRUdFWF9URVNUKSkge1xuICAgICAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9SRkM1MzIxX0FERFJFU1NMSVRFUkFMKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX1JGQzUzMjJfSVBWNl9CQURDSEFSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfUkZDNTMyMl9ET01BSU5MSVRFUkFMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlRGF0YS5kb21haW4gKz0gdG9rZW47XG4gICAgICAgIGF0b21MaXN0LmRvbWFpbltlbGVtZW50Q291bnRdICs9IHRva2VuO1xuICAgICAgICBlbGVtZW50TGVuZ3RoKys7XG4gICAgICAgIGNvbnRleHQucHJldiA9IGNvbnRleHQubm93O1xuICAgICAgICBjb250ZXh0Lm5vdyA9IGNvbnRleHQuc3RhY2sucG9wKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX1JGQzUzMjJfRE9NTElUX09CU0RURVhUKTtcbiAgICAgICAgY29udGV4dC5zdGFjay5wdXNoKGNvbnRleHQubm93KTtcbiAgICAgICAgY29udGV4dC5ub3cgPSBDT05URVhUX1FVT1RFRFBBSVI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gZm9sZGluZyB3aGl0ZSBzcGFjZVxuICAgICAgY2FzZSAnXFxyJzpcbiAgICAgICAgaWYgKCgrK2kgPT09IGVtYWlsLmxlbmd0aCkgfHwgZW1haWxbaV0gIT09ICdcXG4nKSB7XG4gICAgICAgICAgLy8gZmF0YWwgZXJyb3JcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfQ1JfTk9fTEYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBjYXNlICcgJzpcbiAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0NGV1NfRldTKTtcblxuICAgICAgICBjb250ZXh0LnN0YWNrLnB1c2goY29udGV4dC5ub3cpO1xuICAgICAgICBjb250ZXh0Lm5vdyA9IENPTlRFWFRfRldTO1xuICAgICAgICBwcmV2VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBkdGV4dFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMiNzZWN0aW9uLTMuNC4xXG4gICAgICAgIC8vICAgZHRleHQgICAgICAgICA9ICAgJWQzMy05MCAvICA7IFByaW50YWJsZSBVUy1BU0NJSVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICVkOTQtMTI2IC8gOyAgY2hhcmFjdGVycyBub3QgaW5jbHVkaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgb2JzLWR0ZXh0ICA7ICBcIltcIiwgXCJdXCIsIG9yIFwiXFxcIlxuICAgICAgICAvL1xuICAgICAgICAvLyAgIG9icy1kdGV4dCAgICAgPSAgIG9icy1OTy1XUy1DVEwgLyBxdW90ZWQtcGFpclxuICAgICAgICAvL1xuICAgICAgICAvLyAgIG9icy1OTy1XUy1DVEwgPSAgICVkMS04IC8gICAgOyBVUy1BU0NJSSBjb250cm9sXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgJWQxMSAvICAgICA7ICBjaGFyYWN0ZXJzIHRoYXQgZG8gbm90XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgJWQxMiAvICAgICA7ICBpbmNsdWRlIHRoZSBjYXJyaWFnZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICVkMTQtMzEgLyAgOyAgcmV0dXJuLCBsaW5lIGZlZWQsIGFuZFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICVkMTI3ICAgICAgOyAgd2hpdGUgc3BhY2UgY2hhcmFjdGVyc1xuICAgICAgICBjaGFyQ29kZSA9IHRva2VuLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgICAgLy8gQ1IsIExGLCBTUCAmIEhUQUIgaGF2ZSBhbHJlYWR5IGJlZW4gcGFyc2VkIGFib3ZlXG4gICAgICAgIGlmIChjaGFyQ29kZSA+IDEyNyB8fCBjaGFyQ29kZSA9PT0gMCB8fCB0b2tlbiA9PT0gJ1snKSB7XG4gICAgICAgICAgLy8gZmF0YWwgZXJyb3JcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfRVhQRUNUSU5HX0RURVhUKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyQ29kZSA8IDMzIHx8IGNoYXJDb2RlID09PSAxMjcpIHtcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9SRkM1MzIyX0RPTUxJVF9PQlNEVEVYVCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJzZURhdGEubGl0ZXJhbCArPSB0b2tlbjtcbiAgICAgICAgcGFyc2VEYXRhLmRvbWFpbiArPSB0b2tlbjtcbiAgICAgICAgYXRvbUxpc3QuZG9tYWluW2VsZW1lbnRDb3VudF0gKz0gdG9rZW47XG4gICAgICAgIGVsZW1lbnRMZW5ndGgrKztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIC8vIHF1b3RlZCBzdHJpbmdcbiAgICBjYXNlIENPTlRFWFRfUVVPVEVEU1RSSU5HOlxuICAgICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMiNzZWN0aW9uLTMuMi40XG4gICAgICAvLyAgIHF1b3RlZC1zdHJpbmcgPSBbQ0ZXU11cbiAgICAgIC8vICAgICAgICAgICAgICAgICAgIERRVU9URSAqKFtGV1NdIHFjb250ZW50KSBbRldTXSBEUVVPVEVcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgIFtDRldTXVxuICAgICAgLy9cbiAgICAgIC8vICAgcWNvbnRlbnQgICAgICA9IHF0ZXh0IC8gcXVvdGVkLXBhaXJcbiAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIHF1b3RlZCBwYWlyXG4gICAgICBjYXNlICdcXFxcJzpcbiAgICAgICAgY29udGV4dC5zdGFjay5wdXNoKGNvbnRleHQubm93KTtcbiAgICAgICAgY29udGV4dC5ub3cgPSBDT05URVhUX1FVT1RFRFBBSVI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gZm9sZGluZyB3aGl0ZSBzcGFjZVxuICAgICAgLy8gaW5zaWRlIGEgcXVvdGVkIHN0cmluZywgc3BhY2VzIGFyZSBhbGxvd2VkIGFzIHJlZ3VsYXIgY2hhcmFjdGVyc1xuICAgICAgLy8gaXQncyBvbmx5IEZXUyBpZiB3ZSBpbmNsdWRlIEhUQUIgb3IgQ1JMRlxuICAgICAgY2FzZSAnXFxyJzpcbiAgICAgICAgaWYgKCgrK2kgPT09IGVtYWlsLmxlbmd0aCkgfHwgZW1haWxbaV0gIT09ICdcXG4nKSB7XG4gICAgICAgICAgLy8gZmF0YWwgZXJyb3JcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfQ1JfTk9fTEYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBjYXNlICdcXHQnOlxuICAgICAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MzIyI3NlY3Rpb24tMy4yLjJcbiAgICAgICAgLy8gICBSdW5zIG9mIEZXUywgY29tbWVudCwgb3IgQ0ZXUyB0aGF0IG9jY3VyIGJldHdlZW4gbGV4aWNhbCB0b2tlbnMgaW5cbiAgICAgICAgLy8gICBhIHN0cnVjdHVyZWQgaGVhZGVyIGZpZWxkIGFyZSBzZW1hbnRpY2FsbHkgaW50ZXJwcmV0ZWQgYXMgYSBzaW5nbGVcbiAgICAgICAgLy8gICBzcGFjZSBjaGFyYWN0ZXIuXG5cbiAgICAgICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMiNzZWN0aW9uLTMuMi40XG4gICAgICAgIC8vICAgdGhlIENSTEYgaW4gYW55IEZXUy9DRldTIHRoYXQgYXBwZWFycyB3aXRoaW4gdGhlIHF1b3RlZC1zdHJpbmcgW2lzXVxuICAgICAgICAvLyAgIHNlbWFudGljYWxseSBcImludmlzaWJsZVwiIGFuZCB0aGVyZWZvcmUgbm90IHBhcnQgb2YgdGhlXG4gICAgICAgIC8vICAgcXVvdGVkLXN0cmluZ1xuXG4gICAgICAgIHBhcnNlRGF0YS5sb2NhbCArPSAnICc7XG4gICAgICAgIGF0b21MaXN0LmxvY2FsW2VsZW1lbnRDb3VudF0gKz0gJyAnO1xuICAgICAgICBlbGVtZW50TGVuZ3RoKys7XG5cbiAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfQ0ZXU19GV1MpO1xuICAgICAgICBjb250ZXh0LnN0YWNrLnB1c2goY29udGV4dC5ub3cpO1xuICAgICAgICBjb250ZXh0Lm5vdyA9IENPTlRFWFRfRldTO1xuICAgICAgICBwcmV2VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBlbmQgb2YgcXVvdGVkIHN0cmluZ1xuICAgICAgY2FzZSAnXCInOlxuICAgICAgICBwYXJzZURhdGEubG9jYWwgKz0gdG9rZW47XG4gICAgICAgIGF0b21MaXN0LmxvY2FsW2VsZW1lbnRDb3VudF0gKz0gdG9rZW47XG4gICAgICAgIGVsZW1lbnRMZW5ndGgrKztcbiAgICAgICAgY29udGV4dC5wcmV2ID0gY29udGV4dC5ub3c7XG4gICAgICAgIGNvbnRleHQubm93ID0gY29udGV4dC5zdGFjay5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBxdGV4dFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMiNzZWN0aW9uLTMuMi40XG4gICAgICAgIC8vICAgcXRleHQgICAgICAgICAgPSAgICVkMzMgLyAgICAgICAgICAgICA7IFByaW50YWJsZSBVUy1BU0NJSVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAlZDM1LTkxIC8gICAgICAgICAgOyAgY2hhcmFjdGVycyBub3QgaW5jbHVkaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICVkOTMtMTI2IC8gICAgICAgICA7ICBcIlxcXCIgb3IgdGhlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICBvYnMtcXRleHRcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICBvYnMtcXRleHQgICAgICA9ICAgb2JzLU5PLVdTLUNUTFxuICAgICAgICAvL1xuICAgICAgICAvLyAgIG9icy1OTy1XUy1DVEwgID0gICAlZDEtOCAvICAgICAgICAgICAgOyBVUy1BU0NJSSBjb250cm9sXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICVkMTEgLyAgICAgICAgICAgICA7ICBjaGFyYWN0ZXJzIHRoYXQgZG8gbm90XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICVkMTIgLyAgICAgICAgICAgICA7ICBpbmNsdWRlIHRoZSBjYXJyaWFnZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAlZDE0LTMxIC8gICAgICAgICAgOyAgcmV0dXJuLCBsaW5lIGZlZWQsIGFuZFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAlZDEyNyAgICAgICAgICAgICAgOyAgd2hpdGUgc3BhY2UgY2hhcmFjdGVyc1xuICAgICAgICBjaGFyQ29kZSA9IHRva2VuLmNoYXJDb2RlQXQoMCk7XG5cbiAgICAgICAgaWYgKGNoYXJDb2RlID4gMTI3IHx8IGNoYXJDb2RlID09PSAwIHx8IGNoYXJDb2RlID09PSAxMCkge1xuICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0VSUl9FWFBFQ1RJTkdfUVRFWFQpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJDb2RlIDwgMzIgfHwgY2hhckNvZGUgPT09IDEyNykge1xuICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0RFUFJFQ19RVEVYVCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJzZURhdGEubG9jYWwgKz0gdG9rZW47XG4gICAgICAgIGF0b21MaXN0LmxvY2FsW2VsZW1lbnRDb3VudF0gKz0gdG9rZW47XG4gICAgICAgIGVsZW1lbnRMZW5ndGgrKztcbiAgICAgIH1cblxuICAgICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMiNzZWN0aW9uLTMuNC4xXG4gICAgICAvLyAgIElmIHRoZSBzdHJpbmcgY2FuIGJlIHJlcHJlc2VudGVkIGFzIGEgZG90LWF0b20gKHRoYXQgaXMsIGl0IGNvbnRhaW5zXG4gICAgICAvLyAgIG5vIGNoYXJhY3RlcnMgb3RoZXIgdGhhbiBhdGV4dCBjaGFyYWN0ZXJzIG9yIFwiLlwiIHN1cnJvdW5kZWQgYnkgYXRleHRcbiAgICAgIC8vICAgY2hhcmFjdGVycyksIHRoZW4gdGhlIGRvdC1hdG9tIGZvcm0gU0hPVUxEIGJlIHVzZWQgYW5kIHRoZSBxdW90ZWQtXG4gICAgICAvLyAgIHN0cmluZyBmb3JtIFNIT1VMRCBOT1QgYmUgdXNlZC5cblxuICAgICAgYnJlYWs7XG4gICAgLy8gcXVvdGVkIHBhaXJcbiAgICBjYXNlIENPTlRFWFRfUVVPVEVEUEFJUjpcbiAgICAgIC8vIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjIjc2VjdGlvbi0zLjIuMVxuICAgICAgLy8gICBxdW90ZWQtcGFpciAgICAgPSAgIChcIlxcXCIgKFZDSEFSIC8gV1NQKSkgLyBvYnMtcXBcbiAgICAgIC8vXG4gICAgICAvLyAgIFZDSEFSICAgICAgICAgICA9ICAlZDMzLTEyNiAgIDsgdmlzaWJsZSAocHJpbnRpbmcpIGNoYXJhY3RlcnNcbiAgICAgIC8vICAgV1NQICAgICAgICAgICAgID0gIFNQIC8gSFRBQiAgOyB3aGl0ZSBzcGFjZVxuICAgICAgLy9cbiAgICAgIC8vICAgb2JzLXFwICAgICAgICAgID0gICBcIlxcXCIgKCVkMCAvIG9icy1OTy1XUy1DVEwgLyBMRiAvIENSKVxuICAgICAgLy9cbiAgICAgIC8vICAgb2JzLU5PLVdTLUNUTCAgID0gICAlZDEtOCAvICAgOyBVUy1BU0NJSSBjb250cm9sXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgJWQxMSAvICAgIDsgIGNoYXJhY3RlcnMgdGhhdCBkbyBub3RcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAlZDEyIC8gICAgOyAgaW5jbHVkZSB0aGUgY2FycmlhZ2VcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAlZDE0LTMxIC8gOyAgcmV0dXJuLCBsaW5lIGZlZWQsIGFuZFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICVkMTI3ICAgICA7ICB3aGl0ZSBzcGFjZSBjaGFyYWN0ZXJzXG4gICAgICAvL1xuICAgICAgLy8gaS5lLiBvYnMtcXAgICAgICAgPSAgXCJcXFwiICglZDAtOCwgJWQxMC0zMSAvICVkMTI3KVxuICAgICAgY2hhckNvZGUgPSB0b2tlbi5jaGFyQ29kZUF0KDApO1xuXG4gICAgICBpZiAoY2hhckNvZGUgPiAxMjcpIHtcbiAgICAgICAgLy8gZmF0YWwgZXJyb3JcbiAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfRVJSX0VYUEVDVElOR19RUEFJUik7XG4gICAgICB9IGVsc2UgaWYgKChjaGFyQ29kZSA8IDMxICYmIGNoYXJDb2RlICE9PSA5KSB8fCBjaGFyQ29kZSA9PT0gMTI3KSB7XG4gICAgICAgIC8vIFNQICYgSFRBQiBhcmUgYWxsb3dlZFxuICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9ERVBSRUNfUVApO1xuICAgICAgfVxuXG4gICAgICAvLyBBdCB0aGlzIHBvaW50IHdlIGtub3cgd2hlcmUgdGhpcyBxcGFpciBvY2N1cnJlZCBzb1xuICAgICAgLy8gd2UgY291bGQgY2hlY2sgdG8gc2VlIGlmIHRoZSBjaGFyYWN0ZXIgYWN0dWFsbHlcbiAgICAgIC8vIG5lZWRlZCB0byBiZSBxdW90ZWQgYXQgYWxsLlxuICAgICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMSNzZWN0aW9uLTQuMS4yXG4gICAgICAvLyAgIHRoZSBzZW5kaW5nIHN5c3RlbSBTSE9VTEQgdHJhbnNtaXQgdGhlXG4gICAgICAvLyAgIGZvcm0gdGhhdCB1c2VzIHRoZSBtaW5pbXVtIHF1b3RpbmcgcG9zc2libGUuXG5cbiAgICAgIC8vIFRPRE86IGNoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBuZWVkcyB0byBiZSBxdW90ZWQgKGVzY2FwZWQpXG4gICAgICAvLyBpbiB0aGlzIGNvbnRleHRcblxuICAgICAgY29udGV4dC5wcmV2ID0gY29udGV4dC5ub3c7XG4gICAgICBjb250ZXh0Lm5vdyA9IGNvbnRleHQuc3RhY2sucG9wKCk7IC8vIGVuZCBvZiBxcGFpclxuICAgICAgdG9rZW4gPSAnXFxcXCcgKyB0b2tlbjtcblxuICAgICAgc3dpdGNoIChjb250ZXh0Lm5vdykge1xuICAgICAgY2FzZSBDT05URVhUX0NPTU1FTlQ6IGJyZWFrO1xuICAgICAgY2FzZSBDT05URVhUX1FVT1RFRFNUUklORzpcbiAgICAgICAgcGFyc2VEYXRhLmxvY2FsICs9IHRva2VuO1xuICAgICAgICBhdG9tTGlzdC5sb2NhbFtlbGVtZW50Q291bnRdICs9IHRva2VuO1xuXG4gICAgICAgIC8vIHRoZSBtYXhpbXVtIHNpemVzIHNwZWNpZmllZCBieSBSRkMgNTMyMSBhcmUgb2N0ZXQgY291bnRzLFxuICAgICAgICAvLyBzbyB3ZSBtdXN0IGluY2x1ZGUgdGhlIGJhY2tzbGFzaFxuICAgICAgICBlbGVtZW50TGVuZ3RoICs9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDT01QT05FTlRfTElURVJBTDpcbiAgICAgICAgcGFyc2VEYXRhLmRvbWFpbiArPSB0b2tlbjtcbiAgICAgICAgYXRvbUxpc3QuZG9tYWluW2VsZW1lbnRDb3VudF0gKz0gdG9rZW47XG5cbiAgICAgICAgLy8gdGhlIG1heGltdW0gc2l6ZXMgc3BlY2lmaWVkIGJ5IFJGQyA1MzIxIGFyZSBvY3RldCBjb3VudHMsXG4gICAgICAgIC8vIHNvIHdlIG11c3QgaW5jbHVkZSB0aGUgYmFja3NsYXNoXG4gICAgICAgIGVsZW1lbnRMZW5ndGggKz0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogbG9naWNhbGx5IHVucmVhY2hhYmxlICovXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3F1b3RlZCBwYWlyIGxvZ2ljIGludm9rZWQgaW4gYW4gaW52YWxpZCBjb250ZXh0OiAnICtcbiAgICAgICAgICBjb250ZXh0Lm5vdyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICAvLyBjb21tZW50XG4gICAgY2FzZSBDT05URVhUX0NPTU1FTlQ6XG4gICAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MzIyI3NlY3Rpb24tMy4yLjJcbiAgICAgIC8vICAgY29tbWVudCAgPSBcIihcIiAqKFtGV1NdIGNjb250ZW50KSBbRldTXSBcIilcIlxuICAgICAgLy9cbiAgICAgIC8vICAgY2NvbnRlbnQgPSBjdGV4dCAvIHF1b3RlZC1wYWlyIC8gY29tbWVudFxuICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gbmVzdGVkIGNvbW1lbnRcbiAgICAgIGNhc2UgJygnOlxuICAgICAgICAvLyBuZXN0ZWQgY29tbWVudHMgYXJlIG9rXG4gICAgICAgIGNvbnRleHQuc3RhY2sucHVzaChjb250ZXh0Lm5vdyk7XG4gICAgICAgIGNvbnRleHQubm93ID0gQ09OVEVYVF9DT01NRU5UO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIGVuZCBvZiBjb21tZW50XG4gICAgICBjYXNlICcpJzpcbiAgICAgICAgY29udGV4dC5wcmV2ID0gY29udGV4dC5ub3c7XG4gICAgICAgIGNvbnRleHQubm93ID0gY29udGV4dC5zdGFjay5wb3AoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIC8vIHF1b3RlZCBwYWlyXG4gICAgICBjYXNlICdcXFxcJzpcbiAgICAgICAgY29udGV4dC5zdGFjay5wdXNoKGNvbnRleHQubm93KTtcbiAgICAgICAgY29udGV4dC5ub3cgPSBDT05URVhUX1FVT1RFRFBBSVI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gZm9sZGluZyB3aGl0ZSBzcGFjZVxuICAgICAgY2FzZSAnXFxyJzpcbiAgICAgICAgaWYgKCgrK2kgPT09IGVtYWlsLmxlbmd0aCkgfHwgZW1haWxbaV0gIT09ICdcXG4nKSB7XG4gICAgICAgICAgLy8gZmF0YWwgZXJyb3JcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfQ1JfTk9fTEYpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBjYXNlICcgJzpcbiAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0NGV1NfRldTKTtcblxuICAgICAgICBjb250ZXh0LnN0YWNrLnB1c2goY29udGV4dC5ub3cpO1xuICAgICAgICBjb250ZXh0Lm5vdyA9IENPTlRFWFRfRldTO1xuICAgICAgICBwcmV2VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBjdGV4dFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMiNzZWN0aW9uLTMuMi4zXG4gICAgICAgIC8vICAgY3RleHQgICAgICAgICA9ICVkMzMtMzkgLyAgOyBQcmludGFibGUgVVMtQVNDSUlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgJWQ0Mi05MSAvICA7ICBjaGFyYWN0ZXJzIG5vdCBpbmNsdWRpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgJWQ5My0xMjYgLyA7ICBcIihcIiwgXCIpXCIsIG9yIFwiXFxcIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICBvYnMtY3RleHRcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICBvYnMtY3RleHQgICAgID0gb2JzLU5PLVdTLUNUTFxuICAgICAgICAvL1xuICAgICAgICAvLyAgIG9icy1OTy1XUy1DVEwgPSAlZDEtOCAvICAgIDsgVVMtQVNDSUkgY29udHJvbFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAlZDExIC8gICAgIDsgIGNoYXJhY3RlcnMgdGhhdCBkbyBub3RcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgJWQxMiAvICAgICA7ICBpbmNsdWRlIHRoZSBjYXJyaWFnZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAlZDE0LTMxIC8gIDsgIHJldHVybiwgbGluZSBmZWVkLCBhbmRcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgJWQxMjcgICAgICA7ICB3aGl0ZSBzcGFjZSBjaGFyYWN0ZXJzXG4gICAgICAgIGNoYXJDb2RlID0gdG9rZW4uY2hhckNvZGVBdCgwKTtcblxuICAgICAgICBpZiAoY2hhckNvZGUgPiAxMjcgfHwgY2hhckNvZGUgPT09IDAgfHwgY2hhckNvZGUgPT09IDEwKSB7XG4gICAgICAgICAgLy8gZmF0YWwgZXJyb3JcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfRVhQRUNUSU5HX0NURVhUKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyQ29kZSA8IDMyIHx8IGNoYXJDb2RlID09PSAxMjcpIHtcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9ERVBSRUNfQ1RFWFQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICAvLyBmb2xkaW5nIHdoaXRlIHNwYWNlXG4gICAgY2FzZSBDT05URVhUX0ZXUzpcbiAgICAgIC8vIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjIjc2VjdGlvbi0zLjIuMlxuICAgICAgLy8gICBGV1MgICAgID0gICAoWypXU1AgQ1JMRl0gMSpXU1ApIC8gIG9icy1GV1NcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7IEZvbGRpbmcgd2hpdGUgc3BhY2VcblxuICAgICAgLy8gQnV0IG5vdGUgdGhlIGVycmF0dW06XG4gICAgICAvLyBodHRwOi8vd3d3LnJmYy1lZGl0b3Iub3JnL2VycmF0YV9zZWFyY2gucGhwP3JmYz01MzIyJmVpZD0xOTA4OlxuICAgICAgLy8gICBJbiB0aGUgb2Jzb2xldGUgc3ludGF4LCBhbnkgYW1vdW50IG9mIGZvbGRpbmcgd2hpdGUgc3BhY2UgTUFZIGJlXG4gICAgICAvLyAgIGluc2VydGVkIHdoZXJlIHRoZSBvYnMtRldTIHJ1bGUgaXMgYWxsb3dlZC4gIFRoaXMgY3JlYXRlcyB0aGVcbiAgICAgIC8vICAgcG9zc2liaWxpdHkgb2YgaGF2aW5nIHR3byBjb25zZWN1dGl2ZSBcImZvbGRzXCIgaW4gYSBsaW5lLCBhbmRcbiAgICAgIC8vICAgdGhlcmVmb3JlIHRoZSBwb3NzaWJpbGl0eSB0aGF0IGEgbGluZSB3aGljaCBtYWtlcyB1cCBhIGZvbGRlZCBoZWFkZXJcbiAgICAgIC8vICAgZmllbGQgY291bGQgYmUgY29tcG9zZWQgZW50aXJlbHkgb2Ygd2hpdGUgc3BhY2UuXG4gICAgICAvL1xuICAgICAgLy8gICBvYnMtRldTID0gICAxKihbQ1JMRl0gV1NQKVxuXG4gICAgICBpZiAocHJldlRva2VuID09PSAnXFxyJykge1xuICAgICAgICBpZiAodG9rZW4gPT09ICdcXHInKSB7XG4gICAgICAgICAgLy8gZmF0YWwgZXJyb3JcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfRldTX0NSTEZfWDIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCsrY3JsZkNvdW50ID4gMSkge1xuICAgICAgICAgIC8vIG11bHRpcGxlIGZvbGRzID0gb2Jzb2xldGUgRldTXG4gICAgICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfREVQUkVDX0ZXUyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3JsZkNvdW50ID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdcXHInOlxuICAgICAgICBpZiAoKCsraSA9PT0gZW1haWwubGVuZ3RoKSB8fCBlbWFpbFtpXSAhPT0gJ1xcbicpIHtcbiAgICAgICAgICAvLyBmYXRhbCBlcnJvclxuICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0VSUl9DUl9OT19MRik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcgJzpcbiAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHByZXZUb2tlbiA9PT0gJ1xccicpIHtcbiAgICAgICAgICAvLyBmYXRhbCBlcnJvclxuICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0VSUl9GV1NfQ1JMRl9FTkQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3JsZkNvdW50ID0gMDtcblxuICAgICAgICBjb250ZXh0LnByZXYgPSBjb250ZXh0Lm5vdztcbiAgICAgICAgY29udGV4dC5ub3cgPSBjb250ZXh0LnN0YWNrLnBvcCgpOyAvLyBlbmQgb2YgRldTXG5cbiAgICAgICAgaS0tOyAvLyBsb29rIGF0IHRoaXMgdG9rZW4gYWdhaW4gaW4gdGhlIHBhcmVudCBjb250ZXh0XG4gICAgICB9XG4gICAgICBwcmV2VG9rZW4gPSB0b2tlbjtcbiAgICAgIGJyZWFrO1xuICAgIC8vIHVuZXhwZWN0ZWQgY29udGV4dFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBsb2dpY2FsbHkgdW5yZWFjaGFibGUgKi9cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGNvbnRleHQ6ICcgKyBjb250ZXh0Lm5vdyk7XG4gICAgfSAvLyBwcmltYXJ5IHN0YXRlIG1hY2hpbmVcblxuICAgIGlmIChtYXhSZXN1bHQgPiBJU0VNQUlMX1JGQzUzMjIpIHtcbiAgICAgIC8vIGZhdGFsIGVycm9yLCBubyBwb2ludCBjb250aW51aW5nXG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gLy8gdG9rZW4gbG9vcFxuXG4gIC8vIGNoZWNrIGZvciBlcnJvcnNcbiAgaWYgKG1heFJlc3VsdCA8IElTRU1BSUxfUkZDNTMyMikge1xuICAgIC8vIGZhdGFsIGVycm9yc1xuICAgIGlmIChjb250ZXh0Lm5vdyA9PT0gQ09OVEVYVF9RVU9URURTVFJJTkcpIHtcbiAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0VSUl9VTkNMT1NFRFFVT1RFRFNUUik7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0Lm5vdyA9PT0gQ09OVEVYVF9RVU9URURQQUlSKSB7XG4gICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfQkFDS1NMQVNIRU5EKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRleHQubm93ID09PSBDT05URVhUX0NPTU1FTlQpIHtcbiAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0VSUl9VTkNMT1NFRENPTU1FTlQpO1xuICAgIH0gZWxzZSBpZiAoY29udGV4dC5ub3cgPT09IENPTVBPTkVOVF9MSVRFUkFMKSB7XG4gICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfVU5DTE9TRURET01MSVQpO1xuICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICdcXHInKSB7XG4gICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfRldTX0NSTEZfRU5EKTtcbiAgICB9IGVsc2UgaWYgKHBhcnNlRGF0YS5kb21haW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfTk9ET01BSU4pO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudExlbmd0aCA9PT0gMCkge1xuICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfRVJSX0RPVF9FTkQpO1xuICAgIH0gZWxzZSBpZiAoaHlwaGVuRmxhZykge1xuICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfRVJSX0RPTUFJTkhZUEhFTkVORCk7XG5cbiAgICAvLyBvdGhlciBlcnJvcnNcbiAgICB9IGVsc2UgaWYgKHBhcnNlRGF0YS5kb21haW4ubGVuZ3RoID4gMjU1KSB7XG4gICAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MzIxI3NlY3Rpb24tNC41LjMuMS4yXG4gICAgICAvLyAgIFRoZSBtYXhpbXVtIHRvdGFsIGxlbmd0aCBvZiBhIGRvbWFpbiBuYW1lIG9yIG51bWJlciBpcyAyNTUgb2N0ZXRzLlxuICAgICAgdXBkYXRlUmVzdWx0KElTRU1BSUxfUkZDNTMyMl9ET01BSU5fVE9PTE9ORyk7XG4gICAgfSBlbHNlIGlmIChwYXJzZURhdGEubG9jYWwubGVuZ3RoICsgcGFyc2VEYXRhLmRvbWFpbi5sZW5ndGggKyAvKiAnQCcgKi8gMSA+XG4gICAgICAgIDI1NCkge1xuICAgICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMSNzZWN0aW9uLTQuMS4yXG4gICAgICAvLyAgIEZvcndhcmQtcGF0aCAgID0gUGF0aFxuICAgICAgLy9cbiAgICAgIC8vICAgUGF0aCAgICAgICAgICAgPSBcIjxcIiBbIEEtZC1sIFwiOlwiIF0gTWFpbGJveCBcIj5cIlxuICAgICAgLy9cbiAgICAgIC8vIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzUzMjEjc2VjdGlvbi00LjUuMy4xLjNcbiAgICAgIC8vICAgVGhlIG1heGltdW0gdG90YWwgbGVuZ3RoIG9mIGEgcmV2ZXJzZS1wYXRoIG9yIGZvcndhcmQtcGF0aCBpcyAyNTZcbiAgICAgIC8vICAgb2N0ZXRzIChpbmNsdWRpbmcgdGhlIHB1bmN0dWF0aW9uIGFuZCBlbGVtZW50IHNlcGFyYXRvcnMpLlxuICAgICAgLy9cbiAgICAgIC8vIFRodXMsIGV2ZW4gd2l0aG91dCAob2Jzb2xldGUpIHJvdXRpbmcgaW5mb3JtYXRpb24sIHRoZSBNYWlsYm94IGNhblxuICAgICAgLy8gb25seSBiZSAyNTQgY2hhcmFjdGVycyBsb25nLiBUaGlzIGlzIGNvbmZpcm1lZCBieSB0aGlzIHZlcmlmaWVkXG4gICAgICAvLyBlcnJhdHVtIHRvIFJGQyAzNjk2OlxuICAgICAgLy9cbiAgICAgIC8vIGh0dHA6Ly93d3cucmZjLWVkaXRvci5vcmcvZXJyYXRhX3NlYXJjaC5waHA/cmZjPTM2OTYmZWlkPTE2OTBcbiAgICAgIC8vICAgSG93ZXZlciwgdGhlcmUgaXMgYSByZXN0cmljdGlvbiBpbiBSRkMgMjgyMSBvbiB0aGUgbGVuZ3RoIG9mIGFuXG4gICAgICAvLyAgIGFkZHJlc3MgaW4gTUFJTCBhbmQgUkNQVCBjb21tYW5kcyBvZiAyNTQgY2hhcmFjdGVycy4gIFNpbmNlIGFkZHJlc3Nlc1xuICAgICAgLy8gICB0aGF0IGRvIG5vdCBmaXQgaW4gdGhvc2UgZmllbGRzIGFyZSBub3Qgbm9ybWFsbHkgdXNlZnVsLCB0aGUgdXBwZXJcbiAgICAgIC8vICAgbGltaXQgb24gYWRkcmVzcyBsZW5ndGhzIHNob3VsZCBub3JtYWxseSBiZSBjb25zaWRlcmVkIHRvIGJlIDI1NC5cbiAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX1JGQzUzMjJfVE9PTE9ORyk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50TGVuZ3RoID4gNjMpIHtcbiAgICAgIC8vIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzEwMzUjc2VjdGlvbi0yLjMuNFxuICAgICAgLy8gbGFiZWxzICAgNjMgb2N0ZXRzIG9yIGxlc3NcbiAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX1JGQzUzMjJfTEFCRUxfVE9PTE9ORyk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLm1pbkRvbWFpbkF0b21zICYmIGF0b21MaXN0LmRvbWFpbi5sZW5ndGggPFxuICAgICAgICBvcHRpb25zLm1pbkRvbWFpbkF0b21zKSB7XG4gICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9FUlJfVE9PU0hPUlRfRE9NQUlOKTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGxkV2hpdGVsaXN0KSB7XG4gICAgICB2YXIgdGxkQXRvbSA9IGF0b21MaXN0LmRvbWFpbltlbGVtZW50Q291bnRdLCB0bGRWYWxpZCA9IGZhbHNlLCBuO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy50bGRXaGl0ZWxpc3QpKSB7XG4gICAgICAgIGZvciAoaSA9IDAsIG4gPSBvcHRpb25zLnRsZFdoaXRlbGlzdC5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBpZiAodGxkQXRvbSA9PT0gb3B0aW9ucy50bGRXaGl0ZWxpc3RbaV0pIHtcbiAgICAgICAgICAgIHRsZFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGxkVmFsaWQgPSBoYXNPd24uY2FsbChvcHRpb25zLnRsZFdoaXRlbGlzdCwgdGxkQXRvbSk7XG4gICAgICB9XG4gICAgICBpZiAoIXRsZFZhbGlkKSB7XG4gICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0VSUl9VTktOT1dOX1RMRCk7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIGNoZWNrIGZvciBlcnJvcnNcblxuICB2YXIgZG5zUG9zaXRpdmUgPSBmYWxzZTtcblxuICBpZiAob3B0aW9ucy5jaGVja0ROUyAmJiBtYXhSZXN1bHQgPCBJU0VNQUlMX0ROU1dBUk4gJiYgSEFTX1JFUVVJUkUpIHtcbiAgICBkbnMgfHwgKGRucyA9IHJlcXVpcmUoJ2RucycpKTtcbiAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MzIxI3NlY3Rpb24tMi4zLjVcbiAgICAvLyAgIE5hbWVzIHRoYXQgY2FuXG4gICAgLy8gICBiZSByZXNvbHZlZCB0byBNWCBSUnMgb3IgYWRkcmVzcyAoaS5lLiwgQSBvciBBQUFBKSBSUnMgKGFzIGRpc2N1c3NlZFxuICAgIC8vICAgaW4gU2VjdGlvbiA1KSBhcmUgcGVybWl0dGVkLCBhcyBhcmUgQ05BTUUgUlJzIHdob3NlIHRhcmdldHMgY2FuIGJlXG4gICAgLy8gICByZXNvbHZlZCwgaW4gdHVybiwgdG8gTVggb3IgYWRkcmVzcyBSUnMuXG4gICAgLy9cbiAgICAvLyBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1MzIxI3NlY3Rpb24tNS4xXG4gICAgLy8gICBUaGUgbG9va3VwIGZpcnN0IGF0dGVtcHRzIHRvIGxvY2F0ZSBhbiBNWCByZWNvcmQgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgIC8vICAgbmFtZS4gIElmIGEgQ05BTUUgcmVjb3JkIGlzIGZvdW5kLCB0aGUgcmVzdWx0aW5nIG5hbWUgaXMgcHJvY2Vzc2VkIGFzXG4gICAgLy8gICBpZiBpdCB3ZXJlIHRoZSBpbml0aWFsIG5hbWUuIC4uLiBJZiBhbiBlbXB0eSBsaXN0IG9mIE1YcyBpcyByZXR1cm5lZCxcbiAgICAvLyAgIHRoZSBhZGRyZXNzIGlzIHRyZWF0ZWQgYXMgaWYgaXQgd2FzIGFzc29jaWF0ZWQgd2l0aCBhbiBpbXBsaWNpdCBNWFxuICAgIC8vICAgUlIsIHdpdGggYSBwcmVmZXJlbmNlIG9mIDAsIHBvaW50aW5nIHRvIHRoYXQgaG9zdC5cbiAgICAvL1xuICAgIC8vIGlzRW1haWwoKSBhdXRob3IncyBub3RlOiBXZSB3aWxsIHJlZ2FyZCB0aGUgZXhpc3RlbmNlIG9mIGEgQ05BTUUgdG8gYmVcbiAgICAvLyBzdWZmaWNpZW50IGV2aWRlbmNlIG9mIHRoZSBkb21haW4ncyBleGlzdGVuY2UuIEZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gICAgLy8gd2Ugd2lsbCBub3QgcmVwZWF0IHRoZSBETlMgbG9va3VwIGZvciB0aGUgQ05BTUUncyB0YXJnZXQsIGJ1dCB3ZSB3aWxsXG4gICAgLy8gcmFpc2UgYSB3YXJuaW5nIGJlY2F1c2Ugd2UgZGlkbid0IGltbWVkaWF0ZWx5IGZpbmQgYW4gTVggcmVjb3JkLlxuICAgIGlmIChlbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgIC8vIGNoZWNraW5nIFRMRCBETlMgb25seSB3b3JrcyBpZiB5b3UgZXhwbGljaXRseSBjaGVjayBmcm9tIHRoZSByb290XG4gICAgICBwYXJzZURhdGEuZG9tYWluICs9ICcuJztcbiAgICB9XG5cbiAgICB2YXIgZG5zRG9tYWluID0gcGFyc2VEYXRhLmRvbWFpbjtcbiAgICBkbnMucmVzb2x2ZU14KGRuc0RvbWFpbiwgZnVuY3Rpb24oZXJyLCByZWNvcmRzKSB7XG4gICAgICBpZiAoKGVyciAmJiBlcnIuY29kZSAhPT0gZG5zLk5PREFUQSkgfHwgKCFlcnIgJiYgIXJlY29yZHMpKSB7XG4gICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX0ROU1dBUk5fTk9fUkVDT1JEKTtcbiAgICAgICAgcmV0dXJuIGZpbmlzaCgpO1xuICAgICAgfVxuICAgICAgaWYgKHJlY29yZHMgJiYgcmVjb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgZG5zUG9zaXRpdmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZmluaXNoKCk7XG4gICAgICB9XG4gICAgICB2YXIgZG9uZSA9IGZhbHNlLCBjb3VudCA9IDM7XG4gICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9ETlNXQVJOX05PX01YX1JFQ09SRCk7XG4gICAgICBkbnMucmVzb2x2ZUNuYW1lKGRuc0RvbWFpbiwgaGFuZGxlUmVjb3Jkcyk7XG4gICAgICBkbnMucmVzb2x2ZTQoZG5zRG9tYWluLCBoYW5kbGVSZWNvcmRzKTtcbiAgICAgIGRucy5yZXNvbHZlNihkbnNEb21haW4sIGhhbmRsZVJlY29yZHMpO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlUmVjb3JkcyhlcnIsIHJlY29yZHMpIHtcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgY291bnQtLTtcbiAgICAgICAgaWYgKCFlcnIgJiYgcmVjb3JkcyAmJiByZWNvcmRzLmxlbmd0aCkge1xuICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmaW5pc2goKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAvLyBubyB1c2FibGUgcmVjb3JkcyBmb3IgdGhlIGRvbWFpbiBjYW4gYmUgZm91bmRcbiAgICAgICAgICB1cGRhdGVSZXN1bHQoSVNFTUFJTF9ETlNXQVJOX05PX1JFQ09SRCk7XG4gICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmNoZWNrRE5TKSB7XG4gICAgLy8gZ3VhcmFudGVlIGFzeW5jaHJvbmljaXR5XG4gICAgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MgJiZcbiAgICAgIHR5cGVvZiBwcm9jZXNzLm5leHRUaWNrID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHByb2Nlc3MubmV4dFRpY2soZmluaXNoKVxuICAgICAgOiBzZXRUaW1lb3V0KGZpbmlzaCwgMSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZpbmlzaCgpO1xuICB9IC8vIGNoZWNrRE5TXG5cbiAgZnVuY3Rpb24gZmluaXNoKCkge1xuICAgIGlmICghZG5zUG9zaXRpdmUgJiYgbWF4UmVzdWx0IDwgSVNFTUFJTF9ETlNXQVJOKSB7XG4gICAgICBpZiAoZWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX1JGQzUzMjFfVExEKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjaGFyQ29kZSA9IGF0b21MaXN0LmRvbWFpbltlbGVtZW50Q291bnRdLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1Nykge1xuICAgICAgICAgIHVwZGF0ZVJlc3VsdChJU0VNQUlMX1JGQzUzMjFfVExETlVNRVJJQyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF4UmVzdWx0IDwgdGhyZXNob2xkKSB7XG4gICAgICBtYXhSZXN1bHQgPSBJU0VNQUlMX1ZBTElEO1xuICAgIH1cblxuICAgIGlmICghZGlhZ25vc2UpIHtcbiAgICAgIG1heFJlc3VsdCA9IG1heFJlc3VsdCA8IFRIUkVTSE9MRDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayhtYXhSZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXhSZXN1bHQ7XG4gIH0gLy8gZmluaXNoXG59IC8vIGlzRW1haWxcblxubW9kdWxlLmV4cG9ydHMgPSBpc0VtYWlsO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSkiLCIndXNlIHN0cmljdCdcblxudmFyIHRvQ2FtZWxGbiA9IGZ1bmN0aW9uKHN0ciwgbGV0dGVyKXtcbiAgICAgICByZXR1cm4gbGV0dGVyID8gbGV0dGVyLnRvVXBwZXJDYXNlKCk6ICcnXG4gICB9XG5cbnZhciBoeXBoZW5SZSA9IHJlcXVpcmUoJy4vaHlwaGVuUmUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cil7XG4gICByZXR1cm4gc3RyP1xuICAgICAgICAgIHN0ci5yZXBsYWNlKGh5cGhlblJlLCB0b0NhbWVsRm4pOlxuICAgICAgICAgICcnXG59IiwidmFyIFJFID0gL1xccysvZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cil7XG4gICAgaWYgKCFzdHIpe1xuICAgICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyLnRyaW0oKS5yZXBsYWNlKFJFLCAnICcpXG59IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzZXBhcmF0ZSAgICAgPSByZXF1aXJlKCcuL3NlcGFyYXRlJylcbnZhciBjYW1lbGl6ZSAgICAgPSByZXF1aXJlKCcuL2NhbWVsaXplJylcbnZhciB0b1VwcGVyRmlyc3QgPSByZXF1aXJlKCcuL3RvVXBwZXJGaXJzdCcpXG52YXIgaHlwaGVuUmUgICAgID0gcmVxdWlyZSgnLi9oeXBoZW5SZScpXG5cbmZ1bmN0aW9uIHRvTG93ZXJBbmRTcGFjZShzdHIsIGxldHRlcil7XG4gICAgcmV0dXJuIGxldHRlcj8gJyAnICsgbGV0dGVyLnRvTG93ZXJDYXNlKCk6ICcgJ1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUsIGNvbmZpZyl7XG5cbiAgICB2YXIgc3RyID0gY29uZmlnICYmIGNvbmZpZy5jYXBpdGFsaXplP1xuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0ZShjYW1lbGl6ZShuYW1lKSwgJyAnKTpcbiAgICAgICAgICAgICAgICAgICAgc2VwYXJhdGUobmFtZSwgJyAnKS5yZXBsYWNlKGh5cGhlblJlLCB0b0xvd2VyQW5kU3BhY2UpXG5cbiAgICByZXR1cm4gdG9VcHBlckZpcnN0KHN0ci50cmltKCkpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IC9bLVxcc10rKC4pPy9nIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzZXBhcmF0ZSA9IHJlcXVpcmUoJy4vc2VwYXJhdGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgcmV0dXJuIHNlcGFyYXRlKG5hbWUpLnRvTG93ZXJDYXNlKClcbn0iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL21hdGNoJykoL15bYS16QS1aMC05XSskLykiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2lzZW1haWwnKSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVnZXggPSAvXltBLUYwLTldezh9KD86LT9bQS1GMC05XXs0fSl7M30tP1tBLUYwLTldezEyfSQvaVxudmFyIHJlZ2V4MiA9IC9eXFx7W0EtRjAtOV17OH0oPzotP1tBLUYwLTldezR9KXszfS0/W0EtRjAtOV17MTJ9XFx9JC9pXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKSB8fCByZWdleDIudGVzdCh2YWx1ZSlcbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYWxwaGFudW06IHJlcXVpcmUoJy4vYWxwaGFudW0nKSxcbiAgICBtYXRjaCAgIDogcmVxdWlyZSgnLi9tYXRjaCcpLFxuICAgIGd1aWQgICA6IHJlcXVpcmUoJy4vZ3VpZCcpLFxuICAgIGVtYWlsICAgOiByZXF1aXJlKCcuL2VtYWlsJyksXG4gICAgbnVtZXJpYyAgIDogcmVxdWlyZSgnLi9udW1lcmljJylcbn0iLCIndXNlIHN0cmljdCdcblxudmFyIEYgPSByZXF1aXJlKCdmdW5jdGlvbmFsbHknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IEYuY3VycnkoZnVuY3Rpb24ocmUsIHZhbHVlKXtcbiAgICByZXR1cm4gISFyZS50ZXN0KHZhbHVlKVxufSkiLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdpLXMnKS5udW1lcmljIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBkb3VibGVDb2xvblJlICAgICAgPSAvOjovZ1xudmFyIHVwcGVyVG9Mb3dlclJlICAgICA9IC8oW0EtWl0rKShbQS1aXVthLXpdKS9nXG52YXIgbG93ZXJUb1VwcGVyUmUgICAgID0gLyhbYS16XFxkXSkoW0EtWl0pL2dcbnZhciB1bmRlcnNjb3JlVG9EYXNoUmUgPSAvXy9nXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSwgc2VwYXJhdG9yKXtcblxuICAgcmV0dXJuIG5hbWU/XG4gICAgICAgICAgIG5hbWUucmVwbGFjZShkb3VibGVDb2xvblJlLCAnLycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UodXBwZXJUb0xvd2VyUmUsICckMV8kMicpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UobG93ZXJUb1VwcGVyUmUsICckMV8kMicpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UodW5kZXJzY29yZVRvRGFzaFJlLCBzZXBhcmF0b3IgfHwgJy0nKVxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgJydcbn0iLCJ2YXIgUkUgPSAvXFxzL2dcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHIpe1xuICAgIGlmICghc3RyKXtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFLCAnJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cil7XG4gICAgcmV0dXJuIHN0ci5sZW5ndGg/XG4gICAgICAgICAgICBzdHIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzdHIuc3Vic3RyaW5nKDEpOlxuICAgICAgICAgICAgc3RyXG59IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsdWUpe1xuICAgIHJldHVybiB2YWx1ZS5sZW5ndGg/XG4gICAgICAgICAgICAgICAgdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zdWJzdHJpbmcoMSk6XG4gICAgICAgICAgICAgICAgdmFsdWVcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKSgpIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvYmplY3RIYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eU5hbWUpe1xuICAgIHJldHVybiBvYmplY3RIYXNPd24uY2FsbChvYmplY3QsIHByb3BlcnR5TmFtZSlcbn0iLCIndXNlIHN0cmljdCdcblxudmFyIG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHYpIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuYXBwbHkodikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odil7XG4gICAgcmV0dXJuICEhdiAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHYpID09PSAnW29iamVjdCBPYmplY3RdJ1xufVxuXG4iLCJ2YXIgdG9VcHBlckZpcnN0ID0gcmVxdWlyZSgndXN0cmluZycpLnRvVXBwZXJGaXJzdFxuXG52YXIgcmUgICAgICAgICA9IC9eKE1venxXZWJraXR8S2h0bWx8T3xtc3xJY2FiKSg/PVtBLVpdKS9cblxudmFyIGRvY1N0eWxlICAgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ3VuZGVmaW5lZCc/XG4gICAgICAgICAgICAgICAgICAgIHt9OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGVcblxudmFyIHByZWZpeEluZm8gPSAoZnVuY3Rpb24oKXtcblxuICAgIHZhciBwcmVmaXggPSAoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBkb2NTdHlsZSkge1xuICAgICAgICAgICAgICAgIGlmKCByZS50ZXN0KHByb3ApICkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0ZXN0IGlzIGZhc3RlciB0aGFuIG1hdGNoLCBzbyBpdCdzIGJldHRlciB0byBwZXJmb3JtXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgb24gdGhlIGxvdCBhbmQgbWF0Y2ggb25seSB3aGVuIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIHByb3AubWF0Y2gocmUpWzBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBOb3RoaW5nIGZvdW5kIHNvIGZhcj8gV2Via2l0IGRvZXMgbm90IGVudW1lcmF0ZSBvdmVyIHRoZSBDU1MgcHJvcGVydGllcyBvZiB0aGUgc3R5bGUgb2JqZWN0LlxuICAgICAgICAgICAgLy8gSG93ZXZlciAocHJvcCBpbiBzdHlsZSkgcmV0dXJucyB0aGUgY29ycmVjdCB2YWx1ZSwgc28gd2UnbGwgaGF2ZSB0byB0ZXN0IGZvclxuICAgICAgICAgICAgLy8gdGhlIHByZWNlbmNlIG9mIGEgc3BlY2lmaWMgcHJvcGVydHlcbiAgICAgICAgICAgIGlmICgnV2Via2l0T3BhY2l0eScgaW4gZG9jU3R5bGUpe1xuICAgICAgICAgICAgICAgIHJldHVybiAnV2Via2l0J1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJ0todG1sT3BhY2l0eScgaW4gZG9jU3R5bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0todG1sJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgfSkoKSxcblxuICAgIGxvd2VyID0gcHJlZml4LnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiB7XG4gICAgICAgIHN0eWxlICAgICAgIDogcHJlZml4LFxuICAgICAgICBjc3MgICAgICAgOiAnLScgKyBsb3dlciArICctJyxcbiAgICAgICAgZG9tICAgICAgIDogKHtcbiAgICAgICAgICAgIFdlYmtpdDogJ1dlYktpdCcsXG4gICAgICAgICAgICBtcyAgICA6ICdNUycsXG4gICAgICAgICAgICBvICAgICA6ICdXZWJLaXQnXG4gICAgICAgIH0pW3ByZWZpeF0gfHwgdG9VcHBlckZpcnN0KHByZWZpeClcbiAgICB9XG5cbn0pKClcblxubW9kdWxlLmV4cG9ydHMgPSBwcmVmaXhJbmZvIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ2JvcmRlci1yYWRpdXMnICAgICAgICAgICAgICA6IDEsXG4gICAgJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnICAgICA6IDEsXG4gICAgJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyAgICA6IDEsXG4gICAgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnICA6IDEsXG4gICAgJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJyA6IDEsXG4gICAgJ2JveC1zaGFkb3cnICAgICAgICAgICAgICAgICA6IDEsXG4gICAgJ29yZGVyJyAgICAgICAgICAgICAgICAgICAgICA6IDEsXG4gICAgJ2ZsZXgnICAgICAgICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uKG5hbWUsIHByZWZpeCl7XG4gICAgICAgIHJldHVybiBbcHJlZml4ICsgJ2JveC1mbGV4J11cbiAgICB9LFxuICAgICdib3gtZmxleCcgICAgICAgICAgICAgICAgICAgOiAxLFxuICAgICdib3gtYWxpZ24nICAgICAgICAgICAgICAgICAgOiAxLFxuICAgICdhbmltYXRpb24nICAgICAgICAgICAgICAgICAgOiAxLFxuICAgICdhbmltYXRpb24tZHVyYXRpb24nICAgICAgICAgOiAxLFxuICAgICdhbmltYXRpb24tbmFtZScgICAgICAgICAgICAgOiAxLFxuICAgICd0cmFuc2l0aW9uJyAgICAgICAgICAgICAgICAgOiAxLFxuICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJyAgICAgICAgOiAxLFxuICAgICd0cmFuc2Zvcm0nICAgICAgICAgICAgICAgICAgOiAxLFxuICAgICd0cmFuc2Zvcm0tc3R5bGUnICAgICAgICAgICAgOiAxLFxuICAgICd0cmFuc2Zvcm0tb3JpZ2luJyAgICAgICAgICAgOiAxLFxuICAgICdiYWNrZmFjZS12aXNpYmlsaXR5JyAgICAgICAgOiAxLFxuICAgICdwZXJzcGVjdGl2ZScgICAgICAgICAgICAgICAgOiAxLFxuICAgICdib3gtcGFjaycgICAgICAgICAgICAgICAgICAgOiAxXG59IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1c3RyaW5nID0gcmVxdWlyZSgndXN0cmluZycpXG52YXIgY2FtZWxpemUgPSB1c3RyaW5nLmNhbWVsaXplXG52YXIgaHlwaGVuYXRlID0gdXN0cmluZy5oeXBoZW5hdGVcbnZhciB0b0xvd2VyRmlyc3QgPSB1c3RyaW5nLnRvTG93ZXJGaXJzdFxudmFyIHRvVXBwZXJGaXJzdCA9IHVzdHJpbmcudG9VcHBlckZpcnN0XG5cbnZhciBwcmVmaXhJbmZvID0gcmVxdWlyZSgnLi9wcmVmaXhJbmZvJylcbnZhciBwcmVmaXhQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi9wcmVmaXhQcm9wZXJ0aWVzJylcblxudmFyIGRvY1N0eWxlID0gdHlwZW9mIGRvY3VtZW50ID09ICd1bmRlZmluZWQnP1xuICAgICAgICAgICAgICAgIHt9OlxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFzU3R5bGVQcmVmaXgpe1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG5hbWUsIGNvbmZpZyl7XG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fVxuXG4gICAgICAgIHZhciBzdHlsZU5hbWUgPSB0b0xvd2VyRmlyc3QoY2FtZWxpemUobmFtZSkpLFxuICAgICAgICAgICAgY3NzTmFtZSAgID0gaHlwaGVuYXRlKG5hbWUpLFxuXG4gICAgICAgICAgICB0aGVOYW1lICAgPSBhc1N0eWxlUHJlZml4P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NOYW1lLFxuXG4gICAgICAgICAgICB0aGVQcmVmaXggPSBwcmVmaXhJbmZvLnN0eWxlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzU3R5bGVQcmVmaXg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeEluZm8uc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeEluZm8uY3NzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG5cbiAgICAgICAgaWYgKCBzdHlsZU5hbWUgaW4gZG9jU3R5bGUgKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLmFzU3RyaW5nP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlTmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyB0aGVOYW1lIF1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vbm90IGEgdmFsaWQgc3R5bGUgbmFtZSwgc28gd2UnbGwgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoIGEgcHJlZml4XG5cbiAgICAgICAgdmFyIHVwcGVyQ2FzZWQgICAgID0gdGhlTmFtZSxcbiAgICAgICAgICAgIHByZWZpeFByb3BlcnR5ID0gcHJlZml4UHJvcGVydGllc1tjc3NOYW1lXSxcbiAgICAgICAgICAgIHJlc3VsdCAgICAgICAgID0gW11cblxuICAgICAgICBpZiAoYXNTdHlsZVByZWZpeCl7XG4gICAgICAgICAgICB1cHBlckNhc2VkID0gdG9VcHBlckZpcnN0KHRoZU5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHByZWZpeFByb3BlcnR5ID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdmFyIHByZWZpeGVkQ3NzID0gcHJlZml4UHJvcGVydHkodGhlTmFtZSwgdGhlUHJlZml4KSB8fCBbXVxuICAgICAgICAgICAgaWYgKHByZWZpeGVkQ3NzICYmICFBcnJheS5pc0FycmF5KHByZWZpeGVkQ3NzKSl7XG4gICAgICAgICAgICAgICAgcHJlZml4ZWRDc3MgPSBbcHJlZml4ZWRDc3NdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmVmaXhlZENzcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIHByZWZpeGVkQ3NzID0gcHJlZml4ZWRDc3MubWFwKGZ1bmN0aW9uKHByb3BlcnR5KXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzU3R5bGVQcmVmaXg/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvTG93ZXJGaXJzdChjYW1lbGl6ZShwcm9wZXJ0eSkpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoeXBoZW5hdGUocHJvcGVydHkpXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHByZWZpeGVkQ3NzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoZVByZWZpeCl7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGVQcmVmaXggKyB1cHBlckNhc2VkKVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnB1c2godGhlTmFtZSlcblxuICAgICAgICBpZiAoY29uZmlnLmFzU3RyaW5nIHx8IHJlc3VsdC5sZW5ndGggPT0gMSl7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0WzBdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdXN0cmluZyA9IHJlcXVpcmUoJ3VzdHJpbmcnKVxuXG52YXIgcHJlZml4SW5mbyAgPSByZXF1aXJlKCcuL3ByZWZpeEluZm8nKVxudmFyIGNzc1ByZWZpeEZuID0gcmVxdWlyZSgnLi9jc3NQcmVmaXgnKVxuXG52YXIgSFlQSEVOQVRFICAgPSB1c3RyaW5nLmh5cGhlbmF0ZVxudmFyIEhBU19PV04gICAgID0gcmVxdWlyZSgnLi9oYXNPd24nKVxudmFyIElTX09CSkVDVCAgID0gcmVxdWlyZSgnLi9pc09iamVjdCcpXG52YXIgSVNfRlVOQ1RJT04gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKVxuXG52YXIgYXBwbHlQcmVmaXggPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgbm9ybWFsaXplRm4pe1xuICAgIGNzc1ByZWZpeEZuKHByb3BlcnR5KS5mb3JFYWNoKGZ1bmN0aW9uKHApe1xuICAgICAgICB0YXJnZXRbbm9ybWFsaXplRm4/IG5vcm1hbGl6ZUZuKHApOiBwXSA9IHZhbHVlXG4gICAgfSlcbn1cblxudmFyIHRvT2JqZWN0ID0gZnVuY3Rpb24oc3RyKXtcbiAgICBzdHIgPSAoc3RyIHx8ICcnKS5zcGxpdCgnOycpXG5cbiAgICB2YXIgcmVzdWx0ID0ge31cblxuICAgIHN0ci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICB2YXIgc3BsaXQgPSBpdGVtLnNwbGl0KCc6JylcblxuICAgICAgICBpZiAoc3BsaXQubGVuZ3RoID09IDIpe1xuICAgICAgICAgICAgcmVzdWx0W3NwbGl0WzBdLnRyaW0oKV0gPSBzcGxpdFsxXS50cmltKClcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogQGlnbm9yZVxuICogQG1ldGhvZCB0b1N0eWxlT2JqZWN0XG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzdHlsZXMgVGhlIG9iamVjdCB0byBjb252ZXJ0IHRvIGEgc3R5bGUgb2JqZWN0LlxuICogQHBhcmFtICB7T2JqZWN0fSBbY29uZmlnXVxuICogQHBhcmFtICB7Qm9vbGVhbn0gW2NvbmZpZy5hZGRVbml0cz10cnVlXSBUcnVlIGlmIHlvdSB3YW50IHRvIGFkZCB1bml0cyB3aGVuIG51bWVyaWNhbCB2YWx1ZXMgYXJlIGVuY291bnRlcmVkLlxuICogQHBhcmFtICB7T2JqZWN0fSAgY29uZmlnLmNzc1VuaXRsZXNzIEFuIG9iamVjdCB3aG9zZSBrZXlzIHJlcHJlc2VudCBjc3MgbnVtZXJpY2FsIHByb3BlcnR5IG5hbWVzIHRoYXQgd2lsbCBub3QgYmUgYXBwZW5kZWQgd2l0aCB1bml0cy5cbiAqIEBwYXJhbSAge09iamVjdH0gIGNvbmZpZy5wcmVmaXhQcm9wZXJ0aWVzIEFuIG9iamVjdCB3aG9zZSBrZXlzIHJlcHJlc2VudCBjc3MgcHJvcGVydHkgbmFtZXMgdGhhdCBzaG91bGQgYmUgcHJlZml4ZWRcbiAqIEBwYXJhbSAge1N0cmluZ30gIGNvbmZpZy5jc3NVbml0PSdweCcgVGhlIGNzcyB1bml0IHRvIGFwcGVuZCB0byBudW1lcmljYWwgdmFsdWVzLiBEZWZhdWx0cyB0byAncHgnXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBjb25maWcubm9ybWFsaXplTmFtZSBBIGZ1bmN0aW9uIHRoYXQgbm9ybWFsaXplcyBhIG5hbWUgdG8gYSB2YWxpZCBjc3MgcHJvcGVydHkgbmFtZVxuICogQHBhcmFtICB7U3RyaW5nfSAgY29uZmlnLnNjb3BlXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgb2JqZWN0LCBub3JtYWxpemVkIHdpdGggY3NzIHN0eWxlIG5hbWVzXG4gKi9cbnZhciBUT19TVFlMRV9PQkpFQ1QgPSBmdW5jdGlvbihzdHlsZXMsIGNvbmZpZywgcHJlcGVuZCwgcmVzdWx0KXtcblxuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09ICdzdHJpbmcnKXtcbiAgICAgICAgc3R5bGVzID0gdG9PYmplY3Qoc3R5bGVzKVxuICAgIH1cblxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fVxuICAgIHJlc3VsdCA9IHJlc3VsdCB8fCB7fVxuXG4gICAgdmFyIHNjb3BlICAgID0gY29uZmlnLnNjb3BlIHx8IHt9LFxuXG4gICAgICAgIC8vY29uZmlnc1xuICAgICAgICBhZGRVbml0cyA9IGNvbmZpZy5hZGRVbml0cyAhPSBudWxsP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5hZGRVbml0czpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZSAmJiBzY29wZS5hZGRVbml0cyAhPSBudWxsP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5hZGRVbml0czpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcblxuICAgICAgICBjc3NVbml0bGVzcyAgICAgID0gKGNvbmZpZy5jc3NVbml0bGVzcyAhPSBudWxsP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuY3NzVW5pdGxlc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuY3NzVW5pdGxlc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsKSB8fCB7fSxcbiAgICAgICAgY3NzVW5pdCAgICAgICAgICA9IChjb25maWcuY3NzVW5pdCB8fCBzY29wZT8gc2NvcGUuY3NzVW5pdDogbnVsbCkgfHwgJ3B4JyxcbiAgICAgICAgcHJlZml4UHJvcGVydGllcyA9IChjb25maWcucHJlZml4UHJvcGVydGllcyB8fCAoc2NvcGU/IHNjb3BlLnByZWZpeFByb3BlcnRpZXM6IG51bGwpKSB8fCB7fSxcblxuICAgICAgICBub3JtYWxpemVGbiA9IGNvbmZpZy5ub3JtYWxpemVOYW1lIHx8IEhZUEhFTkFURSxcblxuICAgICAgICBwcm9jZXNzZWQsXG4gICAgICAgIHN0eWxlTmFtZSxcblxuICAgICAgICBwcm9wTmFtZSxcbiAgICAgICAgcHJvcFZhbHVlLFxuICAgICAgICBwcm9wQ3NzVW5pdCxcbiAgICAgICAgcHJvcFR5cGUsXG4gICAgICAgIHByb3BJc051bWJlcixcblxuICAgICAgICBmblByb3BWYWx1ZSxcbiAgICAgICAgcHJlZml4XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIHN0eWxlcykgaWYgKEhBU19PV04oc3R5bGVzLCBwcm9wTmFtZSkpIHtcblxuICAgICAgICBwcm9wVmFsdWUgPSBzdHlsZXNbIHByb3BOYW1lIF1cblxuICAgICAgICAvL3RoZSBoeXBoZW5hdGVkIHN0eWxlIG5hbWUgKGNzcyBwcm9wZXJ0eSBuYW1lKVxuICAgICAgICBzdHlsZU5hbWUgPSBub3JtYWxpemVGbihwcmVwZW5kPyBwcmVwZW5kICsgcHJvcE5hbWU6IHByb3BOYW1lKVxuXG4gICAgICAgIHByb2Nlc3NlZCA9IGZhbHNlXG4gICAgICAgIHByZWZpeCAgICA9IGZhbHNlXG5cbiAgICAgICAgaWYgKElTX0ZVTkNUSU9OKHByb3BWYWx1ZSkpIHtcblxuICAgICAgICAgICAgLy9hIGZ1bmN0aW9uIGNhbiBlaXRoZXIgcmV0dXJuIGEgY3NzIHZhbHVlXG4gICAgICAgICAgICAvL29yIGFuIG9iamVjdCB3aXRoIHsgdmFsdWUsIHByZWZpeCwgbmFtZSB9XG4gICAgICAgICAgICBmblByb3BWYWx1ZSA9IHByb3BWYWx1ZS5jYWxsKHNjb3BlIHx8IHN0eWxlcywgcHJvcFZhbHVlLCBwcm9wTmFtZSwgc3R5bGVOYW1lLCBzdHlsZXMpXG5cbiAgICAgICAgICAgIGlmIChJU19PQkpFQ1QoZm5Qcm9wVmFsdWUpICYmIGZuUHJvcFZhbHVlLnZhbHVlICE9IG51bGwpe1xuXG4gICAgICAgICAgICAgICAgcHJvcFZhbHVlID0gZm5Qcm9wVmFsdWUudmFsdWVcbiAgICAgICAgICAgICAgICBwcmVmaXggICAgPSBmblByb3BWYWx1ZS5wcmVmaXhcbiAgICAgICAgICAgICAgICBzdHlsZU5hbWUgPSBmblByb3BWYWx1ZS5uYW1lP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVGbihmblByb3BWYWx1ZS5uYW1lKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcFZhbHVlID0gZm5Qcm9wVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BUeXBlICAgICA9IHR5cGVvZiBwcm9wVmFsdWVcbiAgICAgICAgcHJvcElzTnVtYmVyID0gcHJvcFR5cGUgPT0gJ251bWJlcicgfHwgKHByb3BUeXBlID09ICdzdHJpbmcnICYmIHByb3BWYWx1ZSAhPSAnJyAmJiBwcm9wVmFsdWUgKiAxID09IHByb3BWYWx1ZSlcblxuICAgICAgICBpZiAocHJvcFZhbHVlID09IG51bGwgfHwgc3R5bGVOYW1lID09IG51bGwgfHwgc3R5bGVOYW1lID09PSAnJyl7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BJc051bWJlciB8fCBwcm9wVHlwZSA9PSAnc3RyaW5nJyl7XG4gICAgICAgICAgIHByb2Nlc3NlZCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJvY2Vzc2VkICYmIHByb3BWYWx1ZS52YWx1ZSAhPSBudWxsICYmIHByb3BWYWx1ZS5wcmVmaXgpe1xuICAgICAgICAgICBwcm9jZXNzZWQgPSB0cnVlXG4gICAgICAgICAgIHByZWZpeCAgICA9IHByb3BWYWx1ZS5wcmVmaXhcbiAgICAgICAgICAgcHJvcFZhbHVlID0gcHJvcFZhbHVlLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2Vzc2VkKXtcblxuICAgICAgICAgICAgcHJlZml4ID0gcHJlZml4IHx8ICEhcHJlZml4UHJvcGVydGllc1tzdHlsZU5hbWVdXG5cbiAgICAgICAgICAgIGlmIChwcm9wSXNOdW1iZXIpe1xuICAgICAgICAgICAgICAgIHByb3BWYWx1ZSA9IGFkZFVuaXRzICYmICEoc3R5bGVOYW1lIGluIGNzc1VuaXRsZXNzKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BWYWx1ZSArIGNzc1VuaXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BWYWx1ZSArICcnLy9jaGFuZ2UgaXQgdG8gYSBzdHJpbmcsIHNvIHRoYXQganF1ZXJ5IGRvZXMgbm90IGFwcGVuZCBweCBvciBvdGhlciB1bml0c1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3NwZWNpYWwgYm9yZGVyIHRyZWF0bWVudFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWUgPT0gJ2JvcmRlcicgfHxcbiAgICAgICAgICAgICAgICAgICAgKCFzdHlsZU5hbWUuaW5kZXhPZignYm9yZGVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhfnN0eWxlTmFtZS5pbmRleE9mKCdyYWRpdXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF+c3R5bGVOYW1lLmluZGV4T2YoJ3dpZHRoJykpXG4gICAgICAgICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJvcElzTnVtYmVyXG4gICAgICAgICAgICAgICAgKXtcblxuICAgICAgICAgICAgICAgIHN0eWxlTmFtZSA9IG5vcm1hbGl6ZUZuKHN0eWxlTmFtZSArICctd2lkdGgnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3NwZWNpYWwgYm9yZGVyIHJhZGl1cyB0cmVhdG1lbnRcbiAgICAgICAgICAgIGlmICghc3R5bGVOYW1lLmluZGV4T2YoJ2JvcmRlci1yYWRpdXMtJykpe1xuICAgICAgICAgICAgICAgIHN0eWxlTmFtZS5yZXBsYWNlKC9ib3JkZXIoLXJhZGl1cykoLSguKikpLywgZnVuY3Rpb24oc3RyLCByYWRpdXMsIHRoZVJlc3Qpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJy10b3AnICAgIDogWyctdG9wLWxlZnQnLCAgICAgICctdG9wLXJpZ2h0JyBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy1sZWZ0JyAgIDogWyctdG9wLWxlZnQnLCAgICAnLWJvdHRvbS1sZWZ0JyBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy1yaWdodCcgIDogWyctdG9wLXJpZ2h0JywgICAnLWJvdHRvbS1yaWdodCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy1ib3R0b20nIDogWyctYm90dG9tLWxlZnQnLCAnLWJvdHRvbS1yaWdodCddXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhlUmVzdCBpbiBwb3NpdGlvbnMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lID0gW11cblxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW3RoZVJlc3RdLmZvckVhY2goZnVuY3Rpb24ocG9zKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWUucHVzaChub3JtYWxpemVGbignYm9yZGVyJyArIHBvcyArIHJhZGl1cykpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWUgPSBub3JtYWxpemVGbignYm9yZGVyJysgdGhlUmVzdCArIHJhZGl1cylcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlTmFtZSkpe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWUuZm9yRWFjaChmdW5jdGlvbihzdHlsZU5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZpeCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlQcmVmaXgocmVzdWx0LCBzdHlsZU5hbWUsIHByb3BWYWx1ZSwgbm9ybWFsaXplRm4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtub3JtYWxpemVGbihzdHlsZU5hbWUpXSA9IHByb3BWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJlZml4KXtcbiAgICAgICAgICAgICAgICBhcHBseVByZWZpeChyZXN1bHQsIHN0eWxlTmFtZSwgcHJvcFZhbHVlLCBub3JtYWxpemVGbilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W25vcm1hbGl6ZUZuKHN0eWxlTmFtZSldID0gcHJvcFZhbHVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy90aGUgcHJvcFZhbHVlIG11c3QgYmUgYW4gb2JqZWN0LCBzbyBnbyBkb3duIHRoZSBoaWVyYXJjaHlcbiAgICAgICAgICAgIFRPX1NUWUxFX09CSkVDVChwcm9wVmFsdWUsIGNvbmZpZywgc3R5bGVOYW1lICsgJy0nLCByZXN1bHQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVE9fU1RZTEVfT0JKRUNUIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0b1N0eWxlT2JqZWN0ID0gcmVxdWlyZSgnLi90b1N0eWxlT2JqZWN0JylcbnZhciBoYXNPd24gICAgICAgID0gcmVxdWlyZSgnLi9oYXNPd24nKVxuXG4vKipcbiAqIEBpZ25vcmVcbiAqIEBtZXRob2QgdG9TdHlsZVN0cmluZ1xuICpcbiAqIEBwYXJhbSAge09iamVjdH0gc3R5bGVzIFRoZSBvYmplY3QgdG8gY29udmVydCB0byBhIHN0eWxlIHN0cmluZy5cbiAqIEBwYXJhbSAge09iamVjdH0gY29uZmlnXG4gKiBAcGFyYW0gIHtCb29sZWFufSBjb25maWcuYWRkVW5pdHM9dHJ1ZSBUcnVlIGlmIHlvdSB3YW50IHRvIGFkZCB1bml0cyB3aGVuIG51bWVyaWNhbCB2YWx1ZXMgYXJlIGVuY291bnRlcmVkLiBEZWZhdWx0cyB0byB0cnVlXG4gKiBAcGFyYW0gIHtPYmplY3R9ICBjb25maWcuY3NzVW5pdGxlc3MgQW4gb2JqZWN0IHdob3NlIGtleXMgcmVwcmVzZW50IGNzcyBudW1lcmljYWwgcHJvcGVydHkgbmFtZXMgdGhhdCB3aWxsIG5vdCBiZSBhcHBlbmRlZCB3aXRoIHVuaXRzLlxuICogQHBhcmFtICB7T2JqZWN0fSAgY29uZmlnLnByZWZpeFByb3BlcnRpZXMgQW4gb2JqZWN0IHdob3NlIGtleXMgcmVwcmVzZW50IGNzcyBwcm9wZXJ0eSBuYW1lcyB0aGF0IHNob3VsZCBiZSBwcmVmaXhlZFxuICogQHBhcmFtICB7U3RyaW5nfSAgY29uZmlnLmNzc1VuaXQ9J3B4JyBUaGUgY3NzIHVuaXQgdG8gYXBwZW5kIHRvIG51bWVyaWNhbCB2YWx1ZXMuIERlZmF1bHRzIHRvICdweCdcbiAqIEBwYXJhbSAge1N0cmluZ30gIGNvbmZpZy5zY29wZVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIG9iamVjdCwgbm9ybWFsaXplZCB3aXRoIGNzcyBzdHlsZSBuYW1lc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0eWxlcywgY29uZmlnKXtcbiAgICBzdHlsZXMgPSB0b1N0eWxlT2JqZWN0KHN0eWxlcywgY29uZmlnKVxuXG4gICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgdmFyIHByb3BcblxuICAgIGZvcihwcm9wIGluIHN0eWxlcykgaWYgKGhhc093bihzdHlsZXMsIHByb3ApKXtcbiAgICAgICAgcmVzdWx0LnB1c2gocHJvcCArICc6ICcgKyBzdHlsZXNbcHJvcF0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCc7ICcpXG59IiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnZXhwb3J0cycsXG5cbiAgICBtaXhpbnM6IFtyZXF1aXJlKCcuL2NvbW1vbicpXSxcblxuICAgIG9yaWVudGF0aW9uOiAndmVydGljYWwnLFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge31cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdih7Y2xhc3NOYW1lOiBcInJmLWNvbHVtbiByZi1sYXlvdXRcIn0sIFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgfVxufSkiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cblxudmFyIFJvd0xheW91dCA9IHJlcXVpcmUoJy4vUm93TGF5b3V0JylcbnZhciBDb2x1bW5MYXlvdXQgPSByZXF1aXJlKCcuL0NvbHVtbkxheW91dCcpXG5cbnZhciBjb21tb24gICAgICAgICA9IHJlcXVpcmUoJy4vY29tbW9uJylcbnZhciByZW5kZXJDaGlsZHJlbiA9IGNvbW1vbi5yZW5kZXJDaGlsZHJlblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ2V4cG9ydHMnLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIGNvbW1vblxuICAgIF0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4uY29uY2F0KClcblxuICAgICAgICB2YXIgcm93TGF5b3V0ID0gUm93TGF5b3V0KG51bGwsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgdmFyIGNvbHVtbkxheW91dCA9IENvbHVtbkxheW91dChudWxsLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5zbGljZSgwLCBjaGlsZHJlbi5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuYXNDaGlsZExheW91dChjb2x1bW5MYXlvdXQpXG4gICAgICAgIHRoaXMuYXNDaGlsZExheW91dChyb3dMYXlvdXQpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoe2NsYXNzTmFtZTogXCJyZi1sYXlvdXQgcmYtY29tcG9zaXRlIHJmLXYtY29sdW1uLW4tcm93LTEgXCIrKHRoaXMucHJvcHMuaG9yaXpvbnRhbD8ncmYtaG9yaXpvbnRhbCc6J3JmLXZlcnRpY2FsJyl9LCBcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNoaWxkcmVuKFtjb2x1bW5MYXlvdXQsIHJvd0xheW91dF0sIHRoaXMpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9LFxuXG4gICAgYXNDaGlsZExheW91dDogZnVuY3Rpb24obGF5b3V0KXtcbiAgICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IGNvbW1vbi5nZXREZWZhdWx0UHJvcHMoKVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGRlZmF1bHRQcm9wcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICAgICAgbGF5b3V0LnByb3BzW2tleV0gPSBsYXlvdXQucHJvcHNba2V5XSB8fCB0aGlzLnByb3BzW2tleV1cbiAgICAgICAgfSwgdGhpcylcbiAgICB9XG59KSIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuXG52YXIgUm93TGF5b3V0ID0gcmVxdWlyZSgnLi9Sb3dMYXlvdXQnKVxudmFyIENvbHVtbkxheW91dCA9IHJlcXVpcmUoJy4vQ29sdW1uTGF5b3V0JylcblxudmFyIGNvbW1vbiAgICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24nKVxudmFyIHJlbmRlckNoaWxkcmVuID0gY29tbW9uLnJlbmRlckNoaWxkcmVuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnZXhwb3J0cycsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgY29tbW9uXG4gICAgXSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5jb25jYXQoKVxuXG4gICAgICAgIHZhciByb3dMYXlvdXQgPSBSb3dMYXlvdXQobnVsbCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICB2YXIgY29sdW1uTGF5b3V0ID0gQ29sdW1uTGF5b3V0KG51bGwsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnNsaWNlKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgdGhpcy5hc0NoaWxkTGF5b3V0KHJvd0xheW91dClcbiAgICAgICAgdGhpcy5hc0NoaWxkTGF5b3V0KGNvbHVtbkxheW91dClcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdih7Y2xhc3NOYW1lOiBcInJmLWxheW91dCByZi1jb21wb3NpdGUgcmYtcm93LTEtY29sdW1uLW4gXCIrKHRoaXMucHJvcHMuaG9yaXpvbnRhbD8ncmYtaG9yaXpvbnRhbCc6J3JmLXZlcnRpY2FsJyl9LCBcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNoaWxkcmVuKFtyb3dMYXlvdXQsIGNvbHVtbkxheW91dF0sIHRoaXMpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9LFxuXG4gICAgYXNDaGlsZExheW91dDogZnVuY3Rpb24obGF5b3V0KXtcbiAgICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IGNvbW1vbi5nZXREZWZhdWx0UHJvcHMoKVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGRlZmF1bHRQcm9wcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICAgICAgbGF5b3V0LnByb3BzW2tleV0gPSBsYXlvdXQucHJvcHNba2V5XSB8fCB0aGlzLnByb3BzW2tleV1cbiAgICAgICAgfSwgdGhpcylcbiAgICB9XG59KSIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ2V4cG9ydHMnLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIHJlcXVpcmUoJy4vY29tbW9uJylcbiAgICBdLFxuXG4gICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoe2NsYXNzTmFtZTogXCJyZi1yb3cgcmYtbGF5b3V0XCJ9LCBcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNoaWxkcmVuKClcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH1cbn0pIiwidmFyIHRvU3R5bGUgPSByZXF1aXJlKCd0by1zdHlsZScpLm9iamVjdFxudmFyIGlzTnVtZXJpYyA9IHJlcXVpcmUoJ2ktcycpLm51bWVyaWNcblxuZnVuY3Rpb24gZ2V0Qm9yZGVyU2l6ZShsYXlvdXQpe1xuICAgIHZhciBib3JkZXJlZCAgID0gbGF5b3V0LnByb3BzLmJvcmRlcmVkXG4gICAgdmFyIGJvcmRlclNpemUgPSBib3JkZXJlZD9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTnVtZXJpYyhib3JkZXJlZCk/XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJlZDogcGFyc2VJbnQoYm9yZGVyZWQsIDEwKSB8fCAxXG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAwXG5cbiAgICByZXR1cm4gYm9yZGVyU2l6ZVxufVxuXG5mdW5jdGlvbiBnZXRGbGV4KGl0ZW0pe1xuICAgIHZhciBmbGV4ID0gaXRlbS5wcm9wcy5mbGV4XG5cbiAgICByZXR1cm4gaXNOdW1lcmljKGZsZXgpP1xuICAgICAgICAgICAgICAgIHBhcnNlSW50KGZsZXgsIDEwKTpcbiAgICAgICAgICAgICAgICAwXG59XG5cbmZ1bmN0aW9uIGl0ZW1QYWRkaW5nKGl0ZW0sIGluZGV4LCBsYXlvdXQpe1xuXG4gICAgdmFyIHN0eWxlID0ge31cblxuICAgIGlmIChsYXlvdXQucHJvcHMubGF5b3V0UGFkZGluZyl7XG4gICAgICAgIHN0eWxlLnBhZGRpbmcgPSBsYXlvdXQucHJvcHMubGF5b3V0UGFkZGluZ1xuICAgIH1cbiAgICBpZiAoaXRlbS5wcm9wcy5sYXlvdXRQYWRkaW5nKXtcbiAgICAgICAgc3R5bGUucGFkZGluZyA9IGl0ZW0ucHJvcHMubGF5b3V0UGFkZGluZ1xuICAgIH1cblxuICAgIHZhciBib3JkZXJTaXplID0gZ2V0Qm9yZGVyU2l6ZShsYXlvdXQpXG5cbiAgICBpZiAoYm9yZGVyU2l6ZSAmJiBpbmRleCl7XG4gICAgICAgIHZhciBib3JkZXJQb3MgPSBsYXlvdXQub3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJz8gJ2JvcmRlci10b3AnOiAnYm9yZGVyLWxlZnQnXG5cbiAgICAgICAgc3R5bGVbYm9yZGVyUG9zICsgJy13aWR0aCddID0gYm9yZGVyU2l6ZVxuICAgICAgICBzdHlsZVtib3JkZXJQb3MgKyAnLXN0eWxlJ10gPSAnc29saWQnXG4gICAgfVxuXG4gICAgdmFyIGl0ZW1GbGV4ID0gZ2V0RmxleChpdGVtKVxuXG4gICAgaWYgKGl0ZW1GbGV4ICYmIGl0ZW1GbGV4ID4gMTApe1xuICAgICAgICBzdHlsZS5mbGV4ID0gaXRlbUZsZXhcbiAgICB9XG5cbiAgICByZXR1cm4gdG9TdHlsZShzdHlsZSlcbn1cblxuZnVuY3Rpb24gaXRlbUNsYXNzKGl0ZW0sIGluZGV4LCBsYXlvdXQpe1xuICAgIHZhciByZXN1bHQgPSBbJ3JmLWxheW91dC1pdGVtJ11cblxuICAgIHZhciBib3JkZXJTaXplID0gZ2V0Qm9yZGVyU2l6ZShsYXlvdXQpXG4gICAgdmFyIGl0ZW1GbGV4ICAgPSBnZXRGbGV4KGl0ZW0pXG5cbiAgICBpZiAoaXRlbUZsZXggJiYgaXRlbUZsZXggPD0gMTApe1xuICAgICAgICByZXN1bHQucHVzaCgndS1mbGV4LScgKyBpdGVtRmxleClcbiAgICB9XG5cbiAgICBpZiAoYm9yZGVyU2l6ZSAmJiBpbmRleCl7XG4gICAgICAgIHJlc3VsdC5wdXNoKCdyZi1ib3JkZXJlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IHJlcXVpcmUoJy4vZ2V0RGVmYXVsdFByb3BzJyksXG5cbiAgICByZW5kZXJDaGlsZHJlbjogcmVxdWlyZSgnLi9yZW5kZXJDaGlsZHJlbicpKGl0ZW1DbGFzcywgaXRlbVBhZGRpbmcpXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvcmRlcmVkOiAxLFxuICAgICAgICBsYXlvdXRQYWRkaW5nOiAwXG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFJvd0xheW91dCAgIDogcmVxdWlyZSgnLi9Sb3dMYXlvdXQnKSxcbiAgICBDb2x1bW5MYXlvdXQ6IHJlcXVpcmUoJy4vQ29sdW1uTGF5b3V0JyksXG4gICAgUm93MUNvbHVtbk4gOiByZXF1aXJlKCcuL1JvdzFDb2x1bW5OJyksXG4gICAgQ29sdW1uTlJvdzEgOiByZXF1aXJlKCcuL0NvbHVtbk5Sb3cxJylcbn0iLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlbUNsYXNzLCBpdGVtUGFkZGluZyl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNoaWxkcmVuLCBsYXlvdXQpe1xuICAgICAgICBpZiAoY2hpbGRyZW4gJiYgIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKXtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gW2NoaWxkcmVuXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiB8fCB0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbihpdGVtLCBpbmRleCl7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuRE9NLmRpdih7Y2xhc3NOYW1lOiBpdGVtQ2xhc3MoaXRlbSwgaW5kZXgsIHRoaXMpLCBzdHlsZTogaXRlbVBhZGRpbmcoaXRlbSwgaW5kZXgsIHRoaXMpfSwgaXRlbSlcbiAgICAgICAgfSwgbGF5b3V0IHx8IHRoaXMpXG4gICAgfVxufSJdfQ==
