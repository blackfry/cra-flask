
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
	, gapi = require('gapi')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Gapi
gapi.server.setApiKey('AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI');

// Routes

app.get('/', routes.index);
app.get('/comments/:id', function(req, res){
  gapi.server.load('plus','v1',function() {
		var commentsRequest = gapi.server.plus.comments.list({activityId: req.params.id});
		commentsRequest.execute(function(resp) {
			if (req.xhr) {
				res.partial('comments', resp);
			} else {
				res.render('comments', resp);
			}
		});
	});
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
