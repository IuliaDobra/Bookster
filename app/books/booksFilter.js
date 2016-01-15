/**
 * Created by user on 12.01.2016.
 */
'use strict';

angular.module('myApp').filter('filterBy',
    [ function () {
        return function(books, searchText, props) {
            if(!searchText){
                return books;
            }
            var filtered = [];
            searchText = searchText.toLowerCase();
            angular.forEach(books, function (book) {
                var valid = false;
                angular.forEach(props, function(prop){
                    valid = book[prop].toLowerCase().indexOf(searchText)!== -1 ? true : valid;
                });

                if(valid){
                    filtered.push(book);
                }
            });
            return filtered;
        }
}]);