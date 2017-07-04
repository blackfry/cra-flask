var http = require('http');

var gapi = require('../lib/gapi');

http.createServer(function (req, res) {
  gapi.server.setApiKey('AIzaSyB14Ua7k5_wusxHTQEH3sqmglO7MHjHPCI');
	/*gapi.server.load('plus','v1',function(){
		//var request = gapi.server.plus.activities.get({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', maxResults: '1'});
		//var request = gapi.server.plus.activities.list({userId: '102147307918874735077', collection: 'public', maxResults: '1'});
		//var request = gapi.server.plus.activities.search({query: 'Test', maxResults: 1});

		//var request = gapi.server.plus.comments.get({commentId: 'sTcuoWTR52tnNY9UpoW2TfNb0PnCiiutGuDoTzFyeoI7hNeoa-HBWHoDTQBA59pNvtVbsipeS_U', maxResults: '1'});
		//var request = gapi.server.plus.comments.list({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', maxResults: '1'});

		//var request = gapi.server.plus.people.get({userId: '102147307918874735077'});
		//var request = gapi.server.plus.people.listByActivity({activityId: 'z12mijziozu0x5hrd04cfhnw1yymsn2o414', collection: 'plusoners', maxResults: '1'});
		//var request = gapi.server.plus.people.search({query: 'Blaine+Bublitz'});

		request.execute(function(resp){
			res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(resp));
		});
	});*/

	/*gapi.server.load('webfonts','v1',function() {
		var request = gapi.server.webfonts.webfonts.list({});
		request.execute(function(resp) {
			res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(resp));
		});
	});*/
}).listen(process.env.PORT, "0.0.0.0");