app.directive('places', function($state, BarsFact){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/places.html',
		scope: {
			placeType: "="
		},
		link: function(scope){
			var currentState = $state.current.name
			if(currentState === 'main.restaurants'){
				scope.placeList = [
					{name:'Masa', imgUrl: 'momofuku.jpg'},
					{name:'Inday', imgUrl: 'inday.jpg'},
					{name:'Nomad', imgUrl: 'nomad.jpg'},
					{name:'Louis-XV', imgUrl: 'Louis-XV.jpeg'}
				]
			}else if(currentState === 'main.bars'){
				scope.placeList = [
					{name:'Black Crescent', imgUrl: 'momofuku.jpg'},
					{name:'Subject Les', imgUrl: 'inday.jpg'},
					{name:'Rotisserie Georgette', imgUrl: 'nomad.jpg'},
					{name:'Goodnight Sonny', imgUrl: 'Louis-XV.jpeg'}
				]
			}else{
				scope.placeList = [
					{
						name: "The potions and lotions", 
						location: "Rudy's barbershop", 
						cocktails:[
							{name: 'Perfect Oaxacan', ingredients: 'Reposado, Mezcal, Carpano Antiqua, Dolin Dry, Hellfire Shrub, Xocolat Mole'},
							{name: 'Society St.', ingredients: 'Elijah Craig 12yr Boutbon, Pierre Ferrand cognac, Cocchi Vermouth de Tourino, Creme de Pêche, angostura bitters'},
							{name: 'Velvet Gentleman', ingredients: 'Cardinal Mendoza Brandy, Cocchi Americano Rosa, Vida Mezcal, Yuzu bitters'},
							{name: 'The Damasco', ingredients: 'Avuá Amburana Cachaça, Yellow Chartreuse, Lemon juice, Bitter Truth apricot'},
							{name: 'Sherry Derby', ingredients: 'Reposado, Mezcal, Carpano Antiqua, Dolin Dry, Hellfire Shrub, Xocolat Mole'},
							{name: 'Other Famous Writers', ingredients: 'Reposado, Mezcal, Carpano Antiqua, Dolin Dry, Hellfire Shrub, Xocolat Mole'}
						]
					}
				]
			}

		}
	}
})