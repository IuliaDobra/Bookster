/**
 * Created by user on 13.01.2016.
 */

(function() {
    angular.module('myApp').factory("apiService",apiService);

    function apiService($http) {
        var apiBaseUrl = 'http://localhost:5000/api';
        return {
            createBookReview: function(review, id){
                return $http({
                    url:apiBaseUrl + '/books/' + id + '/reviews',
                    method: 'POST',
                    data: {
                        review: review
                    }
                });
            },
            updateBookReview: function(rating, id) {
                return $http({
                    method: 'PUT',
                    url: apiBaseUrl + '/books/' + id + 'reviews',
                    data: {
                        rating: rating
                    }
                });
            },
            getBooks: function () {
                return $http({
                    url:apiBaseUrl + '/books',
                    method: 'GET'
                });
            },
            getBook: function(book) {
                return $http({
                    url:apiBaseUrl + '/book/' + book.id,
                    method: 'GET',
                    data: book
                });
            },
            login: function(username, password){
                return $http({
                    method: 'POST',
                    url: apiBaseUrl + '/login',
                    data: {
                        username: username,
                        password: password
                    }
                });
            }
        };
    }
}());
