var config = require('../config');

// Wfonts Namespace
var wfonts = {};

// Webfonts Namespace
wfonts.webfonts = {};
wfonts.webfonts.list = function(options) {
	try {
		  return require('./webfonts/list')(options);
	} catch (err) {
		  config.error(err);
	}
};


module.exports = wfonts;
