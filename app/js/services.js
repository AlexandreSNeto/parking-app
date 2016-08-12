var mongolarServices = angular.module('mongolarServices', ['ngResource']);

mongolarServices.factory('ListaVeiculos', ['$resource',
  function($resource){
    return $resource('http://127.0.0.1:5984/veiculos/_all_docs?include_docs=true', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);
