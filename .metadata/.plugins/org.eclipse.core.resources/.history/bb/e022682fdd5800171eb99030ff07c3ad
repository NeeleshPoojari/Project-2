
app.controller('UserController',function(UserService,$scope,$location){
	
	$scope.register=function(){
		
		UserService.registerUser($scope.user).then(function(response){
			$scope.message="Registered Successfully..please login"
				$location.path('/login')
				
		},function(response){
			$scope.error=response.data;
			$location.path('/registration')
			
		})
		
	}
	
})