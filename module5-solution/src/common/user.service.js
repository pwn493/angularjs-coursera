(function () {
    "use strict";

    angular.module('common').service('UserService', UserService);

    function UserService() {
        var service = this;
        service.user = null;

        service.addUser = function (userInfo) {
            service.user = userInfo;
        };

        service.getUser = function () {
            return service.user;
        }
    }   
})()