
/*
 * GET home page.
 */

var gapi = require('gapi');

exports.index = function(req, res){
	var person = '';
	var activities = '';

	gapi.server.load('plus','v1',function() {
		var personRequest = gapi.server.plus.people.get({userId: '102147307918874735077'});
		personRequest.execute(function(resp) {
			person = resp;
			var activitiesRequest = gapi.server.plus.activities.list({userId: '102147307918874735077', collection: 'public'});
			activitiesRequest.execute(function(resp) {
				activities = resp;
				res.render('index', {person: person, activities: activities});
			});
			//res.render('index', resp);
		});
	});
};
