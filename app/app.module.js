'use strict';
var app = angular.module('app', [
    'ngRoute',
    'ui.bootstrap',
    'ui.bootstrap.showErrors',
    'ui.mask',
    'cgBusy',
    'angular-md5',
    'appControllers',
    'appServices'
]).config(['$compileProvider', function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|whatsapp|mailto|tel|sms|intent):/);
}]).config(['showErrorsConfigProvider', function (showErrorsConfigProvider) {
    showErrorsConfigProvider.showSuccess(true);
}]);

app.run(['$rootScope', '$location', '$route', 'AuthCheck', 'Owner', function ($rootScope, $location, $route, AuthCheck, Owner) {

    $rootScope.$route = $route;

    if (!$rootScope.user || !$rootScope.user.id) {
        Owner.get({}, function (data) {
            $rootScope.user = {
                id: data.id,
                name: data.nome,
                avatar: data.gravatar
            };
        }, function () {
            $location.path('/login');
        });
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var restrictedPage = $location.path() !== '/login';
        if (restrictedPage) {
            AuthCheck.get({}, function (success) { }, function (fail) {
                $rootScope.user = {};
                event.preventDefault();
                $location.path('/login');
            });
        }
    });
}]);
