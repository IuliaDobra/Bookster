'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ngRoute'
])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
            $stateProvider
                .state('landing', {
                    url:'/landing',
                    templateUrl:'landing/landing.html',
                    controller: 'LandingController'
                  })

                .state('login', {
                    url: '/login',
                    templateUrl: 'login/login.html',
                    controller: 'LoginController'
                  })
                .state('books', {
                    url:'/books',
                    templateUrl: 'books/books.html',
                    controller: 'BooksController'
                    });
            $urlRouterProvider.otherwise('landing');
}]);

angular.module('myApp').run(function(userService) {
    if(userService.getUser() == undefined && JSON.parse(localStorage.getItem('loggedInUser'))){
        userService.setUser(JSON.parse(localStorage.getItem('loggedInUser')));
    }
});