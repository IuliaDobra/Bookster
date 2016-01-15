'use strict';

angular.module('myApp').controller('BooksController',
    function BooksController($scope, apiService) {
  //  $scope.vm = {};
    $scope.books = [];
    $scope.vm ={
        text: ''
    };
        
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
    };

    $scope.sendReview = function($event){
        $event.preventDefault();

        apiService.createBookReview($scope.vm.text, $scope.book.id).then(
            function (response) {
                $scope.book.reviews.push(response.data);
            },
            function (response) {
                console.warn(response);
            }
        );
    }
});