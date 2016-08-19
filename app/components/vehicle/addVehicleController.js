'use strict';
angular.module('appControllers').controller('AddVehicleCtrl', ['$scope', '$rootScope', '$location', 'Vehicle',
  function ($scope, $rootScope, $location, Vehicle) {

    $scope.save = function () {
      $scope.vehicle.proprietario = {
        id: $rootScope.user.id
      };

      Vehicle.save($scope.vehicle, function (data) {
        $scope.vehicle = {};
        $scope.sucesso = true;
        $scope.mensagem = "Veículo adicionado."
      });
    };

    $scope.cancel = function () {
      $location.path('/vehicle');
    };

  }]);