var app = angular.module('app', [
  'ngRoute',
  'appControllers',
  'appServices'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'components/login/login.html',
        controller: 'LoginCtrl'
      }).
      when('/', {
        templateUrl: 'components/vehicle/search.html',
        controller: 'SearchCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);
