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
    	template: '<places placeList="placeList"></places>',
      resolve: {
        placeList: function(BarsFact){
          return BarsFact.getRestaurants();
        }
      }
    })
    .state('main.bars', {
    	url:'/bars',
    	template: '<places placeList="placeList"></places>',
      resolve: {
        placeList: function(BarsFact){
          return BarsFact.getBars();
        }
      }
    })
    .state('main.antiRest', {
      url:'/bars',
      template: '<places placeList="placeList"></places>',
      resolve: {
        placeList: function(BarsFact){
          return BarsFact.getBars();
        }
      }
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
