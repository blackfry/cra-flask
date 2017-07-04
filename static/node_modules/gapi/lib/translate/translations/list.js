var config = require('../../config')
  , querystring = require('querystring');

var translationsList = function(options) {
  var searchTerms = options.q,
      targetLang  = options.target;

  options.key = config.api.key;
  options.alt = 'json';

  var query = querystring.stringify(options);

	config.requestOptions.path = ['/language/translate/v2','?',query].join('');

  return require('../../execute');
};

module.exports = translationsList;