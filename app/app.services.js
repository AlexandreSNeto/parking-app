var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('ProcurarVeiculo', ['$resource',
  function($resource){
    return $resource('/api/veiculo/pesquisar?placa=i', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);

appServices.factory('Veiculo', ['$resource',
  function($resource){
    return $resource('/api/veiculo/:id', {id: '@placa'}, {
      save: {method:'PUT'}
    });
  }]);

appServices.factory('MeuVeiculo', ['$resource',
  function($resource){
    return $resource('/api/veiculo', {}, {});
  }]);

appServices.factory('Login', ['$resource',
  function($resource){
    return $resource('/api/login', {}, {
      save:{
          method: "POST",
          headers : {"Content-Type": "application/x-www-form-urlencoded"} 
      }
    });
  }]);

  