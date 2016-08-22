'use strict';
angular.module('appControllers').controller('LogoutCtrl', ['$scope', 'AuthLogout', '$location', '$rootScope',
function ($scope, AuthLogout, $location, $rootScope) {

    AuthLogout.get({}, function (data) {
        $rootScope.user = {};
        $location.path('/login');
    }, function () {
        $rootScope.user = {};
        $location.path('/login');
    });

}]);

