var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/sign_in_sign_up', {
		templateUrl: 'partials/login_signup.html'
	})
	.when('/trip', {
		templateUrl: 'partials/trip.html'
	})
	.when('/trips', {
		templateUrl: 'partials/trips.html'
	})
	.when('/user', {
		templateUrl: 'partials/user.html'
	})
});

myApp.service('UserService', function($http){
	// Create, update, destroy, login users here.
	var vm = this;
	vm.service = {};
	vm.currentUser = {};
	vm.insertUser = function(newUser, callback){
		$http.post('/create', newUser).then(function(response){
			vm.currentUser = response.data;
			callback(vm.currentUser);
		});
	};

	vm.loginUser = function(loginUser, callback){
		$http.post('/user', loginUser).then(function(response){
			vm.currentUser = response.data;
			callback(vm.currentUser);
		});
	};
	
	return this;
});

myApp.controller('UsersController', function($location, UserService, TripService, CommentService){
	var vm = this;
	vm.newUser = {};
	vm.currentUser = {};
	vm.loginUser = {};
	vm.allUsers = [];

	vm.addUser = function(newUser){
		if(newUser.password != newUser.confirmPass){
			document.getElementById('notification-error').innerHTML = "Passwords do not match.";
		} 

		else {
			UserService.insertUser(newUser, function(data){
				vm.currentUser = data;
				console.log(vm.currentUser);
				document.getElementById('notification-create').innerHTML = "Congratulations " + vm.currentUser.name + " you've been added to the system.";
				newUser = {};
			});

		};
	}

	vm.loginUser = function(loginUser){
		UserService.loginUser(loginUser, function(data){
			vm.currentUser = data;
			if(vm.currentUser.username.length > 0){
			console.log(vm.currentUser);
			document.getElementById('notification-login').innerHTML = "Hello " + vm.currentUser.name + " , you are now logged in.";
			vm.loginUser = {};
			}
		})
	}
	
	return this;
});

myApp.service('TripService', function($http){
	// Create, update, destroy, login users here.
});

myApp.controller('TripsController', function(UserService, TripService, CommentService){
	// Create, update, destroy trips here.
});

myApp.service('CommentService', function($http){
	// Create, update, destroy comments here.
});

myApp.controller('CommentsController', function(UserService, TripService, CommentService){
	// Create, update, destroy comments here.
});