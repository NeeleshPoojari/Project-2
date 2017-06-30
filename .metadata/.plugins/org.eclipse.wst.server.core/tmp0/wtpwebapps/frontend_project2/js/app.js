var app = angular.module("myApp", ['ngRoute','ngCookies'])
app.config(function($routeProvider) {

	$routeProvider
	  
	.when('/registration', {
		templateUrl : 'views/registrationform.html',
		controller : 'UserController'
	})

	.when('/login', {

		templateUrl : 'views/login.html',
		controller : 'UserController'

	})
	
	.when('/savejob',{
		
		templateUrl : 'views/jobform.html',
		controller : 'JobController'
		
	
	})
	
	.when('/getalljobs',{
		
		templateUrl : 'views/jobtitles.html',
		controller : 'JobController'
		
	
	})
	
	.otherwise({
		templateUrl : 'views/home.html'

	})

})

app.run(function($rootScope,$location,UserService,$cookieStore) {

	
	if($rootScope.currentUser==undefined)
		$rootScope.currentUser=$cookieStore.get("currentUser")
	
	$rootScope.logout = function() {
		UserService.logout().then(function(response) {
			$rootScope.message = "logged out successfully.."
			delete $rootScope.currentUser;
			$cookieStore.remove("currentUser")
			$location.path('/login')

		}, function(response) {
			console.log(response.status)
			$rootScope.message=response.data.message
			$location.path('/login')
		})

	}

})
