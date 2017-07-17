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
    
    function listOfFriends(){
   $scope.friendsList=FriendService.listOfFriends().then(function(response){
    	$scope.friendsList=response.data;
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
    
    $scope.updatePendingRequest=function(fromId,status){
    FriendService.updatePendingRequest(fromId,status).then(function(response){
    pendingRequest();
    $location.path('/pendingrequests')
    },function(response){
    	console.log(response.status);
    })	
    }
    
  listOfFriends();
  pendingRequest();
  listOfSuggestedUsers(); 
})