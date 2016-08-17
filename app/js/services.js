var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('ListaVeiculos', ['$resource',
  function($resource){
    return $resource('http://127.0.0.1:5984/veiculos/_all_docs?include_docs=true', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);

appServices.factory('Veiculo', ['$resource',
  function($resource){
    return $resource('http://127.0.0.1:5984/veiculos/:id', {id: '@placa'}, {
      save: {method:'PUT'}
    });
  }]);

appServices.factory('ProcurarVeiculo', ['$resource',
  function($resource){
    return $resource('http://localhost:8080/api/veiculo/', {}, {
      save: {method:'PUT'}
    });
  }]);
