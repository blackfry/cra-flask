var config = require('../../config')
  , querystring = require('querystring');

var languagesList = function(options) {
  options.key = config.api.key;
  options.alt = 'json';

  var query = querystring.stringify(options);

	config.requestOptions.path = ['/language/translate/v2','/languages','?',query].join('');

  return require('../../execute');
};

module.exports = languagesList;