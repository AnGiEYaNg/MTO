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

