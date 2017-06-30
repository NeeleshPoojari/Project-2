

app.controller('JobController',function($scope,$location,JobService){

	$scope.saveJob=function(){
	
		JobService.saveJob($scope.job).then(function(response){
		$location.path('/getalljobs')	
		},function(response){
			
			$scope.message=response.data.message
			$location.path('/savejob')
		
		})
		
		
	}
	
})