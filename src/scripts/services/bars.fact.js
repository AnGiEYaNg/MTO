app.factory('BarsFact', function($http, $q, $firebaseObject){
	var BarsFact = {};

	var ref = new Firebase("https://the-mto-app-4e5fd.firebaseio.com");
	BarsFact.getAllData = function(){
		BarsFact.antirestList =  $firebaseObject(ref);
		return BarsFact.antirestList;
	}
	return BarsFact;
})