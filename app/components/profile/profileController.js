'use strict';
angular.module('appControllers').controller('ProfileCtrl', ['$scope', 'Owner',
  function ($scope, Owner) {

    Owner.get({}, function (data) {
      $scope.owner = data;
    });

    $scope.salvar = function () {
      if (!$scope.profileForm.$valid) {
        return;
      }
      Owner.save($scope.owner, function (data) {
        $scope.sucesso = true;
        $scope.mensagem = "Perfil atualizado."
      });
    };

}]);