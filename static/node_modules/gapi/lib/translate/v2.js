var config = require('../config');

// Translate Namespace
var translate = {};

// Detections Namespace
translate.detections = {};
translate.detections.list = function(options) {
  try {
		  return require('./detections/list')(options);
	} catch (err) {
		  config.error(err);
	}
};

// Languages Namespace
translate.languages = {};
translate.languages.list = function(options) {
  try {
    return require('./languages/list')(options);
  } catch (err) {
    config.error(err);
  }
};

// Translations Namespace
translate.translations = {};
translate.translations.list = function(options) {
  try {
    return require('./translation/list')(options);
  } catch (err) {
    config.error(err);
  }
};

module.exports = translate;