
var app=angular.module("myApp",['ngRoute'])
app.config(function ($routeProvider){
	
	$routeProvider
	.when('/registration',{
		
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.otherwise({
		templateUrl:'views/home.html'
		
	})
	
})