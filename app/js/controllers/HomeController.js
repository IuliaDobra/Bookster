'use strict';

angular.module('myApp').controller('HomeController', ['$scope',
    function($scope) {
        console.log("Hello World");
        $scope.msg = "Heeeeei!";
}]);