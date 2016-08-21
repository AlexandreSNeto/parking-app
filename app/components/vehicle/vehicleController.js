'use strict';
angular.module('appControllers').controller('VehicleCtrl', ['$scope', '$rootScope', 'Vehicle',
  function ($scope, $rootScope, Vehicle) {

    $scope.showFormPanel = false;

    $scope.toggleForm = function () {
      $scope.showFormPanel = !$scope.showFormPanel;
    };

    $scope.save = function () {
      if (!$scope.vehicleForm.$valid) {
        return;
      }
      
      $scope.vehicle.proprietario = {
        id: $rootScope.user.id
      };

      Vehicle.save($scope.vehicle, function (data) {
        success("Veículo adicionado.");
        $scope.vehicle = {};
        $scope.toggleForm();
        getVehicles();
      }, function (failData) {
        fail("Houve um problema para salvar o veículo: " + failData.data.message); 
      });
    };

    var getVehicles = function () {
      Vehicle.get({}, function (data) {
        $scope.vehicles = data.content;
      });
    };

    $scope.remove = function (id) {
      Vehicle.delete({ id: id }, function () {
        success("Veículo removido.");
        getVehicles();
      }, function (failData) {
        fail("Houve um problema para remover o veículo: " + failData.data.message); 
      });
    };

    $scope.edit = function (vehicle) {
      $scope.vehicle = vehicle;
      $scope.toggleForm();
    };

    var success = function (message) {
        $scope.message = message;
        $scope.success = true;
        $scope.fail = false;
    };

    var fail = function (message) {
        $scope.message = message;
        $scope.fail = true;
        $scope.success = false;
    };

    getVehicles();
  }]);