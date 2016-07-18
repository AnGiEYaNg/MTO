'use strict';

var app = angular.module('mtoApp',[
  'ui.bootstrap',
  'ui.router',
  'ngMaterial',
  'firebase'
])
.config(["$locationProvider", function($locationProvider){
  $locationProvider.html5Mode(true);
}])

