var gapi = require('gapi');

exports.comments = function(req, res){
  console.log('comments');
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
};