'use strict';

angular.module('app').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'components/login/login.html',
        controller: 'LoginCtrl'
      }).
      when('/logout', {
        template: ' ',
        controller: 'LogoutCtrl'
      }).      
      when('/', {
        templateUrl: 'components/search/search.html',
        controller: 'SearchCtrl'
      }).
      when('/profile', {
        templateUrl: 'components/profile/profile.html',
        controller: 'ProfileCtrl'
      }).
      when('/vehicle', {
        templateUrl: 'components/vehicle/vehicle.html',
        controller: 'VehicleCtrl'
      }).
      when('/vehicle/add', {
        templateUrl: 'components/vehicle/add_vehicle.html',
        controller: 'AddVehicleCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);
