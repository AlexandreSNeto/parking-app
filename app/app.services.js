var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('Auth', ['$resource',
  function($resource){
    return $resource('/api/login', {}, {
      login:{
          method: "POST",
          headers : {"Content-Type": "application/x-www-form-urlencoded"} 
      },
      logout:{
          method: "GET" 
      }
    });
  }]);

appServices.factory('SearchVehicle', ['$resource',
  function($resource){
    return $resource('/api/veiculo/pesquisar', {});
  }]);

appServices.factory('Owner', ['$resource',
  function($resource){
    return $resource('/api/proprietario', {});
  }]);