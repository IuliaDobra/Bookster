/**
 * Created by user on 12.01.2016.
 */
'use strict';

angular.module('myApp').filter('booksFilter',
    [ function () {
        return function(books, searchText) {
            var filtered = [];
            angular.forEach(books, function (book) {
                if (book.name.indexOf(searchText) >= 0 || book.author.indexOf(searchText) >= 0) filtered.push(book);
            });
            return filtered;
        }
}]);