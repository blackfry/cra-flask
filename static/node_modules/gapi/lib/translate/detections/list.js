var config = require('../../config')
  , querystring = require('querystring');

var detectionsList = function(options) {
  var searchTerms = options.q;

  options.key = config.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

	config.requestOptions.path = ['/language/translate/v2','/detect','?',query].join('');

  return require('../../execute');
};

module.exports = detectionsList;