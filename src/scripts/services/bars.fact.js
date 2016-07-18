app.factory('BarsFact', function($http, $q){
	var BarsFact = {};

	BarsFact.getImage = function(link){
		firebase.storage().ref(link)
		.getDownloadURL()
		.then(function(imgUrl){
			console.log('get img url', imgUrl);
			return imgUrl;
		})
		.catch(function(error){
			console.log('error occured at retrieving image', error);
		});
	}

	BarsFact.getBars = function(){
		firebase.database().ref('/barslist').on('value', function(response){
			console.log('get response from firebase', response.val());
			BarsFact.barsList = response.val();
			return $q.when(BarsFact.barsList);
		})
	}

	BarsFact.getRestaurants = function(){
		return firebase.database().ref('/restaurantslist').on('value', function(response){
			console.log('get response from firebase', response.val());
			BarsFact.restaurantsList = response.val();
			return $q.when(BarsFact.restaurantsList);
		})
	}

	BarsFact.getAntiRests = function(){
		firebase.database().ref('/antirestlist').on('value', function(response){
			console.log('get response from firebase', response.val());
			BarsFact.antiRestList = response.val();
			return $q.when(BarsFact.antiRestList);
		})
	}
	return BarsFact;
})