var users = require('./../controllers/users.js');
var trips = require('./../controllers/trips.js');
var comments = require('./../controllers/comments.js');

module.exports = function(app) {
	// routes go here.  Everything is a damn function.
	app.post('/create', function(req, res){
		users.create(req, res);
	});

	app.post('/user', function(req, res){
		users.logIn(req, res);
	})
};