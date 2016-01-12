/**
 * Created by user on 11.01.2016.
 */
'use strict';

angular.module('myApp').factory('booksService', function ($http, $q) {
    return {
        getAll: function () {
            var defer = $q.defer();

            function success(response) {
                defer.resolve(response.data);
            }

            function error(response) {
                defer.reject(response.data);
            }

            var books = $http.get('data/books.json')
                .then(success, error);
            return defer.promise;
        }
    };
});