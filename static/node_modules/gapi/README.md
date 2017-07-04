A Node.js implementation of the ["JavaScript Client Library for Google APIs - Alpha version"](https://code.google.com/p/google-api-javascript-client/)


## Installation

To install gapi locally, use [npm](http://github.com/isaacs/npm):

    $ npm install gapi

To install gapi globally, use [npm](http://github.com/isaacs/npm):

    $ npm install -g gapi

## Usage

Include gapi

```javascript
var gapi = require('gapi');
```

To get started, set your API key with `gapi.server.setApiKey()`:

```javascript
gapi.server.setApiKey('YOUR_API_KEY');
```

You can then use `gapi.server.load('API_NAME', 'API_VERSION', CALLBACK)` to load the API you wish to use:

```javascript
gapi.server.load('plus','v1',function(){});
```

Inside your load callback, you can generate your requests using the `gapi.server.API_NAME.NAMESPACE.FUNCTION(OPTIONS)` pattern:

```javascript
var request = gapi.server.plus.people.get({userId: '102147307918874735077'});
```

To execute your request, you can call `REQUEST.execute(CALLBACK(RESPONSE))`:

```javascript
request.execute(function(resp){});
```

The response of the callback is a JSON object that you can work with:

```javascript
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end(JSON.stringify(resp));
```

Putting it all together:

```javascript
gapi.server.setApiKey('YOUR_API_KEY');
gapi.server.load('plus','v1',function(){
	var request = gapi.server.plus.people.get({userId: '102147307918874735077'});
	request.execute(function(resp){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end(JSON.stringify(resp));
	});
});
```

## Currently Implemented Request Functions and Options

### Google+ V1 ('plus','v1')
Get One Activity

```javascript
/*
 *
 * activityId is Required
 *
 */
gapi.server.plus.activities.get({
	activityId : '',
	fields : ''
});
```

List Activities of One User

```javascript
/*
 *
 * userId and collection are Required
 * collection : 'public' is the only available option currently
 * maxResults can be an integer from 1-100
 *
 */
gapi.server.plus.activities.list({
	userId : '',
	collection : 'public',
	maxResults : 100,
	pageToken : '',
	fields : ''
});
```

Search all Activities using Query

```javascript
/*
 *
 * query is Required
 * separate words in query with a +
 * maxResults can be an integer from 1-20;
 *
 */
gapi.server.plus.activities.search({
	query : '',
	language : '',
	maxResults : 20,
	orderBy : '',
	pageToken : '',
	fields : ''
});
```

Get One Comment

```javascript
/*
 *
 * commentId is Required
 *
 */
gapi.server.plus.comments.get({
	commentId : '',
	fields : ''
});
```

List All Comments of One Activity

```javascript
/*
 *
 * activityId is Required
 * maxResults can be an integer from 0-100;
 *
 */
gapi.server.plus.comments.list({
	activityId : '',
	maxResults : 100,
	pageToken : '',
	fields : ''
});
```

Get One Person

```javascript
/*
 *
 * userId is Required
 *
 */
gapi.server.plus.people.get({
	userId: '',
	fields : ''
});
```

List the PlusOners or Resharers of One Activity

```javascript
/*
 *
 * activityId and collection are Required
 * collection can be either 'resharers' or 'plusoners'
 * maxResults can be an integer from 1-100;
 *
 */
gapi.server.plus.people.listByActivity({
	activityId: '',
	collection: '',
	maxResults: 100,
	pageToken : '',
	fields : ''
});
```

Search all People using Query

```javascript
/*
 *
 * query is Required
 * separate words in query with a +
 * maxResults can be an integer from 1-20;
 *
 */
gapi.server.plus.people.search({
	query : '',
	language : '',
	maxResults : 20,
	orderBy : '',
	pageToken : '',
	fields : ''
});
```

### Google Webfonts V1 ('webfonts','v1')

Retrieves the list of fonts currently served by the Google Web Fonts Developer API

```javascript
/*
 *
 * none are Required
 * sort can be: 'alpha', 'date', 'popularity', 'style', or 'trending'
 *
 */
gapi.server.webfonts.webfonts.list({
	sort : '',
	fields : ''
});
```

## Examples

You can view further examples in the [example folder.](https://github.com/phated/gapi-npm/tree/master/examples)

Running the Express example is as easy as entering (in terminal)

	$ cd ./node_modules/gapi/examples/express-example/ && npm install ./ && node app.js

## Tests

    $ npm test gapi

## LICENSE

(MIT License)

Copyright (c) 2011 Phated <blaine@iceddev.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
