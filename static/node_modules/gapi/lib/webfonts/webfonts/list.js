var config = require('../../config')
	, querystring = require('querystring');

var webfontsList = function(options) {
  options.key = config.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

	config.requestOptions.path = ['/webfonts/v1','/webfonts','?',query].join('');

  return require('../../execute');
};

module.exports = webfontsList;
