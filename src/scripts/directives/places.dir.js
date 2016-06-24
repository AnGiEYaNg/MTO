app.directive('places', function($state){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/places.html',
		link: function(scope){
			if($state.current.name === "main.restaurants"){
				scope.placeList = [
				{name: 'Masa', imgUrl: 'momofuku.jpg'},
				{name: 'Inday', imgUrl: 'inday.jpg'},
				{name: 'Nomad', imgUrl: 'nomad.jpg'},
				{name: 'Louis-XV', imgUrl: 'Louis-XV.jpeg'}
				]
			}

			else{
				scope.placeList = [
				{name: 'Black Crescent', imgUrl: 'blackcrescent.jpg'},
				{name: 'Subject LES', imgUrl: 'subjectles.jpg'},
				{name: 'Rotisserie Georgette', imgUrl: 'rotisseriegeorgette.jpg'},
				{name: 'Goodnight Sonny', imgUrl: 'goodnightsonny.jpg'}
				]
			}

		}
	}
})