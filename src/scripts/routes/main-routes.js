app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeCtrl',
      templateUrl: 'templates/home.html',
      // resolve: {
      //   allData: function(BarsFact){
      //     return BarsFact.getAllData();
      //   }
      // }
    })
    .state('main', {
    	abstract: true,
    	url: '',
    	template: '<navbar></navbar><ui-view></ui-view>'
    })
    .state('main.restaurants', {
    	url:'/restaurants',
    	template: '<places placeType="restaurants"></places>',
      // resolve: {
      //   placeList: function(BarsFact){
      //     return BarsFact.getRestaurants();
      //   }
      // }
    })
    .state('main.bars', {
    	url:'/bars',
    	template: '<places placeType="bars"></places>',
      // resolve: {
      //   placeList: function(BarsFact){
      //     return BarsFact.getBars();
      //   }
      // }
    })
    .state('main.antiRest', {
      url:'/event',
      templateUrl: 'templates/event.html',
      controller: 'eventCtrl'
      // resolve: {
      //   placeList: function(BarsFact){
      //     return BarsFact.getAntiRest();
      //   }
      // }
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
