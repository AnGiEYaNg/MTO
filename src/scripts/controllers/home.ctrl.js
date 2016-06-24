app.controller('homeCtrl', ['$scope', 'BarsFact', function($scope, BarsFact) {
	BarsFact.getBars();
}]);
