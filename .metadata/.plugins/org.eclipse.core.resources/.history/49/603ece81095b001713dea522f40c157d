
app.controller('UserController',function(UserService,$scope,$location,$rootScope){
	
	$scope.register=function(){
		
		UserService.registerUser($scope.user).then(function(response){
			$scope.message="Registered Successfully..please login"
				$location.path('/login')
				
		},function(response){
			$scope.error=response.data;
			$location.path('/registration')
			
		})
		
	}
	
	$scope.login=function (){
		
		UserService.login($scope.user).then(function(response){
			$rootScope.currentUser=response.data
			$location.path('/home')
			
		},function(response){
			$scope.error=response.data
			$location.path('/login')
			
			
			
		})
		
	}
	
	
})