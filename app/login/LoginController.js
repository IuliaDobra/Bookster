'use strict';

angular.module('myApp').controller("LoginController",
    function LoginController($scope, apiService, userService, $state){
        $scope.submit = function($event){
            $event.preventDefault();
            apiService.login($scope.credentials.username, $scope.credentials.password)
                .then(function (data, status, headers, config) {
                        userService.setUser(data);
                        $state.go('landing');
                    },
                    function (data, status, headers, config) {
                    });
        };

        $scope.credentials = {
            username: undefined,
            password: undefined
        };

        $scope.isAuthenticated = function(){

            return userService.isAuthenticated();
        };

        $scope.isAdmin = function(){
            return userService.isAdmin();
        };
    });