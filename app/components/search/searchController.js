'use strict';
angular.module('appControllers').controller('SearchCtrl', ['$scope', 'SearchVehicle',
  function ($scope, SearchVehicle) {

    $scope.licensePlate = "";
    $scope.veiculos = [];

    $scope.$watch('licensePlate', function (value) {
      if ($scope.licensePlate != '') {
        searchLicensePlate();
      } else {
        $scope.veiculos = [];
      }
    });

    var searchLicensePlate = function () {
      SearchVehicle.get({placa: $scope.licensePlate}, function (data) {
        $scope.veiculos = data.content;
      });
    };

  }]);