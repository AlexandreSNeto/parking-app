angular.module('appControllers').controller('ProfileCtrl', ['$scope', '$rootScope', 'Owner',
  function ($scope, $rootScope, Owner) {

    $scope.salvar = function () {
      Owner.save($rootScope.owner, function (data) {
        $scope.sucesso = true;
        $scope.mensagem = "Perfil atualizado."
      });
    };

}]);