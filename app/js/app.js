var app = angular.module('app', [
  'ngRoute',
  'appControllers',
  'appServices'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/veiculos-lista.html',
        controller: 'VeiculosCtrl'
      }).
      when('/veiculo/:placa', {
        templateUrl: 'partials/veiculo-completo.html',
        controller: 'VeiculoCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
