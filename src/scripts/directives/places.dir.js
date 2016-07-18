app.directive('places', function($state, BarsFact){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/places.html',
		scope: {
			placeList: "="
		},
		link: function(scope){
			console.log('!!!', BarsFact.restaurantsList)

		}
	}
})