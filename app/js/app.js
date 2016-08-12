var mongolarApp = angular.module('mongolarApp', [
  'ngRoute',
  'mongolarControllers',
  'mongolarServices'
]);

mongolarApp.config(['$routeProvider',
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
