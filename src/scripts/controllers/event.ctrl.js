app.controller('eventCtrl', ['$scope', 'BarsFact', function($scope, BarsFact) {
	$scope.placeList = 
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
	


}]);
