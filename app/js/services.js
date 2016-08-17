var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('ListaVeiculos', ['$resource',
  function($resource){
    return $resource('/api/veiculo/pesquisar?placal=i', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);

appServices.factory('Veiculo', ['$resource',
  function($resource){
    return $resource('/api/veiculo/:id', {id: '@placa'}, {
      save: {method:'PUT'}
    });
  }]);

appServices.factory('ProcurarVeiculo', ['$resource',
  function($resource){
    return $resource('/api/veiculo', {}, {
      save: {method:'GET'}
    });
  }]);
