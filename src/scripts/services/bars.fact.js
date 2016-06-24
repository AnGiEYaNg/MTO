app.factory('BarsFact', function($http){
	var BarsFact = {};
	BarsFact.getBars = function(){
		firebase.database().ref('/barlist').on('value', function(response){
			console.log('get response from firebase', response.val());
		})
	}
	return BarsFact;
})