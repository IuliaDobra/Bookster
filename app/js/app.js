'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/landing', {
        templateUrl:'../views/landing.html',
        controller: 'LandingController'
      })
    .when('/login', {
      templateUrl: '../views/login.html',
      controller: 'LoginController'
    })
    .when('/home', {
      templateUrl: '../views/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);