/**
 * Created by user on 13.01.2016.
 */

(function() {
    angular.module('myApp').factory("apiService",apiService);

    function apiService($http) {
        var apiBaseUrl = 'http://localhost:5000/api';
        return {
            createBook: function(book){
                return $http({
                    url:apiBaseUrl + '/books',
                    method: 'POST',
                    data: book
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
            updateBook: function(updatedBook) {
                return $http({
                    method: 'PUT',
                    url: apiBaseUrl + '/books/' + updatedBook.id,
                    data: updatedBook
                });
            },
            deleteBook: function(book){
                return $http({
                    method: 'DELETE',
                    url: apiBaseUrl + '/books/' + book.id,
                    data: book
                });
            },
            createWishlist: function(wishlist){
                return $http({
                    url: apiBaseUrl +'/wishlist',
                    method: 'POST',
                    data: wishlist
                });
            },
            getWishlist: function () {
                return $http({
                    url: apiBaseUrl + '/wishlist',
                    method: 'GET'
                });
            },
            updateWishlist: function(updatedWishlist) {
                return $http({
                    method: 'PUT',
                    url: apiBaseUrl + '/wishlist/' + updatedWishlist.id,
                    data: updatedWishlist
                });

            },
            deleteWishlist: function(wishlist){
                return $http({
                    method: 'DELETE',
                    url: apiBaseUrl + '/wishlist/' + wishlist.id,
                    data: wishlist
                });
            },
            createUser: function(user){
                return $http({
                    method: 'POST',
                    url: apiBaseUrl + '/users' + user.id,
                    data: user
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
