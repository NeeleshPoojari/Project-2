/**
 * 
 */
app.controller('FriendController',function($scope,$location,FriendService){
    function listOfSuggestedUsers(){
    $scope.suggestedUsers=FriendService.suggestedUsers().then(function(response){
    $scope.suggestedUsers=response.data;	
	},function(response){
	console.log(response.status);		
	})	
}	
    
    function pendingRequest(){
    $scope.listOfPendingRequests=FriendService.pendingRequests().then(function(response){
    $scope.listOfPendingRequests=response.data;	
    },function(response){
    console.log(response.status);	 	
    })	   	
    }
    
    $scope.friendrequest=function(toUsername){
	    FriendService.sendFriendRequest(toUsername).then(function(response){
		alert("Friendrequest has been sent successfully");
		$location.path('/suggestedusers'); 
		 listOfSuggestedUsers();
	  },function(response){
	  console.log(response.status);
	  })	  
  }
  pendingRequest();
  listOfSuggestedUsers(); 
})