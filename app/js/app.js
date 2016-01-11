'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/landing', {
        templateUrl:'../landing/landing.html',
        controller: 'LandingController'
      })
    .when('/login', {
      templateUrl: '../login/login.html',
      controller: 'LoginController'
    })
    .when('/home', {
      templateUrl: '../home/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/landing'
    });
}]);