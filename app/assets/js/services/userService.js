/**
 * Created by user on 13.01.2016.
 */
'use strict';

(function() {
    angular.module('myApp').factory("userService",userService);
    function userService() {
        var user = undefined;

        var isAuthenticated = function(){
            return user !== undefined;
        };

        var setUser = function(currentUser){
            user = currentUser;
            localStorage.setItem('loggedInUser', JSON.stringify(user));
        };

        var getUser = function () {
            return user;
        };

        var isAdmin = function(){
            if(isAuthenticated()){
                return user.type === "admin";
            }
            else
                return false;
        };

        var resetUser = function(){
            user = undefined;
            localStorage.removeItem('loggedInUser');
        };

        return {
            isAuthenticated: isAuthenticated,
            isAdmin: isAdmin,
            setUser: setUser,
            getUser: getUser,
            resetUser: resetUser
        };
    }
}());