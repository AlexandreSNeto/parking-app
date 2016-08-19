var app = angular.module('app', [
  'ngRoute',
  //'ngMaterial',
  'appControllers',
  'appServices'
]).config(['$compileProvider', function ($compileProvider) {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|sms|intent):/);
    }
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
