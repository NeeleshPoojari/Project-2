/**
 * 
 */

app.factory('FriendService',function($http){

	var friendService={};
	
	
	friendService.suggestedUsers=function(){
		
		return $http.get("http://localhost:8080/backend_project2/suggesteduserslist")
	}
	
friendService.sendFriendRequest=function(toUsername){
		
		return $http.get("http://localhost:8080/backend_project2/friendrequest/"+toUsername)
	}
	
	
	
return friendService;	
	
})
