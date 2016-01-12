'use strict';

angular.module('myApp').controller('BooksController',
    function BooksController($scope, booksService) {
    $scope.vm = {};
    function success(books){
        //console.log(books);
        $scope.books = books;
    }
    function error(response){
        console.warn(response);
    }
    $scope.books = [];
    booksService.getAll()
        .then(success, error);

    console.log("Scope.books: ");
    console.log($scope.books);
    $scope.selectBook = function (book) {
        $scope.vm.selectedBook = book;
    };
});