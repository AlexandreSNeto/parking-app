'use strict';
var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('AuthLogin', ['$resource',
  function($resource){
    return $resource('/api/login', {}, {
      login:{
          method: "POST",
          headers : {"Content-Type": "application/x-www-form-urlencoded"} 
      }
    })
  }]);

appServices.factory('AuthLogout', ['$resource',
  function($resource){
    return $resource('/api/logout', {}, {});
  }]);  

appServices.factory('AuthCheck', ['$resource',
  function($resource){
    return $resource('/api/logged-in', {}, {});
  }]);    

appServices.factory('Vehicle', ['$resource',
  function($resource){
    return $resource('/api/veiculo/', {});
  }]);

appServices.factory('SearchVehicle', ['$resource',
  function($resource){
    return $resource('/api/veiculo/pesquisar', {});
  }]);

appServices.factory('Owner', ['$resource',
  function($resource){
    return $resource('/api/proprietario', {});
  }]);