app.controller('foodsCtrl', function($scope, $stateParams) {
	var restaurants = ['Masa', 'Inday', 'Nomad', 'Louis-XV'];
	if(restaurants.indexOf($stateParams.placeName)>-1){
		$scope.foods = [
			{name: 'Veggies', imgUrl: 'veggies.jpg'},
			{name: 'Seafood', imgUrl: 'seafood.jpg'},
			{name: 'Noodles', imgUrl: 'noodle.jpg'},
			{name: 'Patties', imgUrl: 'veggieballs.jpg'}
		]
	}
	else {
		$scope.foods = [
			{name: 'Society Street', imgUrl: 'orange juice table.jpeg'},
			{name: 'The Flaneur', imgUrl: 'orange juice table.jpeg'},
			{name: 'The Damasco', imgUrl: 'orange juice table.jpeg'},
			{name: '60th', imgUrl: 'orange juice table.jpeg'}
		]
	}

	$scope.restaurantName = $stateParams.placeName;
});
