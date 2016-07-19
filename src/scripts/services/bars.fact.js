app.factory('BarsFact', ['$http', '$q', '$firebaseArray', function($http, $q, $firebaseArray){
	var BarsFact = {};

	BarsFact.getAllData = function(){
		var ref = new Firebase("https://the-mto-app-4e5fd.firebaseio.com");
		BarsFact.allData =  $firebaseArray(ref);
		console.log('this is working?', BarsFact.allData);
		return BarsFact.allData;
	}

	BarsFact.getRestaurants = function(){
		var ref = new Firebase("https://the-mto-app-4e5fd.firebaseio.com/restaurantslist");
		BarsFact.restaurantsList =  $firebaseArray(ref);
		console.log('this is working?', BarsFact.restaurantsList);
		return BarsFact.restaurantsList;

	}

	BarsFact.getBars = function(){
		var ref = new Firebase("https://the-mto-app-4e5fd.firebaseio.com/barslist");
		BarsFact.barsList =  $firebaseArray(ref);
		console.log('this is working?', BarsFact.barsList);
		return BarsFact.barsList;

	}

	BarsFact.getAntiRest = function(){
		var ref = new Firebase("https://the-mto-app-4e5fd.firebaseio.com/antirestlist");
		BarsFact.antiRestList =  $firebaseArray(ref);
		console.log('this is working?', BarsFact.antiRestList);
		return BarsFact.antiRestList;

	}

	// BarsFact.addData = function(){
	// 	return new Firebase("https://the-mto-app-4e5fd.firebaseio.com/barslist").$add()
	// 	BarsFact.allData =  $firebaseArray(ref);
	// 	console.log('this is working?', BarsFact.allData);
	// 	ref.$add({
	// 		name: 'test bat'
	// 	},
	// 	{
	// 		name: 'tst2'
	// 	})


	// }

	return BarsFact;
}])