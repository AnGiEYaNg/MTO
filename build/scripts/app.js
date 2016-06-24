'use strict';
var config = {
    apiKey: "AIzaSyDHlnYt3uuuZLrGHOrd98gCBcxxjhWWhVQ",
    authDomain: "the-mto-app-4e5fd.firebaseapp.com",
    databaseURL: "https://the-mto-app-4e5fd.firebaseio.com",
    storageBucket: "the-mto-app-4e5fd.appspot.com",
  };
firebase.initializeApp(config);

var app = angular.module('mtoApp',[
  'ui.bootstrap',
  'ui.router',
  'ngMaterial'
])
.config(["$locationProvider", function($locationProvider){
  $locationProvider.html5Mode(true);
}])


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

app.controller('homeCtrl', ['$scope', 'BarsFact', function($scope, BarsFact) {
	BarsFact.getBars();
}]);

app.directive('navbar', function($state){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/navbar.html',
		link: function(scope){

		}
	}
})
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
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeCtrl',
      templateUrl: 'templates/home.html'
    })
    .state('main', {
    	abstract: true,
    	url: '',
    	template: '<navbar></navbar><ui-view></ui-view>'
    })
    .state('main.restaurants', {
    	url:'/restaurants',
    	template: '<places></places>'
    })
    .state('main.bars', {
    	url:'/bars',
    	template: '<places></places>'
    })
    .state('food', {
      url:'/:placeName',
      templateUrl: 'templates/foods.html',
      controller: 'foodsCtrl'
    })
    .state('foodDetail', {
      url:'/detail/:foodName',
      templateUrl: 'templates/foodDetail.html'
    })

}]);

app.factory('BarsFact', function($http){
	var BarsFact = {};
	BarsFact.getBars = function(){
		firebase.database().ref('/barlist').on('value', function(response){
			console.log('get response from firebase', response.val());
		})
	}
	return BarsFact;
})