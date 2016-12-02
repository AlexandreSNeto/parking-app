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
        controller: 'SearchCtrl',
        activePage: 'search'
      }).
      when('/profile', {
        templateUrl: 'components/profile/profile.html',
        controller: 'ProfileCtrl',
        activePage: 'profile'
      }).
      when('/vehicle', {
        templateUrl: 'components/vehicle/vehicle.html',
        controller: 'VehicleCtrl',
        activePage: 'vehicle'
      }).
      when('/about', {
        templateUrl: 'components/about/about.html',
        activePage: 'about'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);
