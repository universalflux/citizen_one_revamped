var mongoose = require('mongoose');
var User = mongoose.model('User');
var Trip = mongoose.model('Trip');
var Comment = mongoose.model('Comment');

module.exports = (function(){
	return {
		// controller functions go here...
		create: function(req, res){
			console.log(req.body);
			User.create({name: req.body.fullName, username: req.body.username, password: req.body.password, age: req.body.age}, function(err, newUser){
				if(err){
					console.log(err);
				} else {
					console.log("Success! " + newUser.name + " added to system!");
					res.json(newUser);
				}
			})
		},
		logIn: function(req, res){
			console.log(req.body);
			User.findOne({username: req.body.username}, 
				function(err, currentUser){
					if (err) {
						console.log('There was a problem with the login');
					}
					if (!currentUser){
						console.log('User is not in system.');

					} 
					if (currentUser){
						if(currentUser.password == req.body.password){
							res.json(currentUser);
							console.log("User is logged in, password verified.");
						} else {
							console.log("Password is incorrect.");
						}
					}
					
				})
			}
	}
})();