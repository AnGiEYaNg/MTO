app.controller('homeCtrl', ['$scope', 'BarsFact', function($scope, BarsFact) {
	BarsFact.getAllData();
}]);
