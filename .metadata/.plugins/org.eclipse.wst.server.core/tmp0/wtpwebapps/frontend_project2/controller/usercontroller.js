


app.controller('UserController',function(UserService,$scope,$location,$rootScope,$cookieStore){
	$scope.registrationSuccess=''
	$scope.register=function(){
		console.log("Entering register function")
		UserService.registerUser($scope.user).then(function(response){
		$scope.registrationSuccess="Registered Successfully..please login"
			alert('Registered Successfully..please login')
		$location.path('/login')				
		},function(response){
			$scope.error=response.data;
			$location.path('/registration')
			})
		}
	$scope.login=function (){
			UserService.login($scope.user).then(function(response){
			$rootScope.currentUser=response.data
			$cookieStore.put("currentUser",response.data)
			$location.path('/home')
			
			},function(response){
			$scope.message=''
			$scope.error=response.data
			$location.path('/login')		
		})	
	}
	
	$scope.user=UserService.getUserByUsername().then(function(response){
		$scope.user=response.data;
		 $scope.message=''
		},function(response){
		console.log(response.status);
			
		})
		
   $scope.update=function(){
		
		UserService.updateUserProfile($scope.user).then(function(response){
		$scope.user={}	
        $scope.message="Updated the profile successfully"
		},function(response){
		 console.log(response.data)		
		})
		
	}
	
	
	
})