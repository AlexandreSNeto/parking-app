angular.module('appControllers').controller('AddVehicleCtrl', ['$scope', '$rootScope', 'Vehicle',
  function ($scope, $rootScope, Vehicle) {

    $scope.salvar = function () {
      $scope.vehicle.proprietario = {
        id: $rootScope.owner.id
      };

      Vehicle.save($scope.vehicle, function (data) {
        $scope.sucesso = true;
        $scope.mensagem = "Veículo adicionado."
      });
    };

  }]);