var mongolarControllers = angular.module('mongolarControllers', []);

mongolarControllers.controller('VeiculosCtrl', ['$scope', 'ListaVeiculos', function ($scope, ListaVeiculos) {
  ListaVeiculos.get({}, function (data) {
      $scope.veiculos = data.rows;
      console.log($scope.veiculos);
  });
  //$scope.posts = [{title: 'title', content: 'conteudo', author: 'teste'}];
}]);
