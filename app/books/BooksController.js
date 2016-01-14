'use strict';

angular.module('myApp').controller('BooksController',
    function BooksController($scope, apiService) {
  //  $scope.vm = {};
    $scope.books = [];
    apiService.getBooks().then(
        function(response){
            $scope.books = response.data;
        },
        function(response){
            console.warn(response);
        }
    );

    $scope.showBook = function(book) {
        apiService.getBook(book).then(
            function (response) {
                $scope.book = response.data;
            },
            function (response) {
                console.warn(response);
            }
        );
    }
});