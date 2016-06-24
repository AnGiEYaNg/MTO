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
			{name: 'Society Street', imgUrl: 'societystreet.jpg'},
			{name: 'The Flaneur', imgUrl: 'theflaneur.jpg'},
			{name: 'The Damasco', imgUrl: 'thedamasco.jpg'},
			{name: '60th', imgUrl: '60th.jpg'}
		]
	}

	$scope.restaurantName = $stateParams.placeName;
});
