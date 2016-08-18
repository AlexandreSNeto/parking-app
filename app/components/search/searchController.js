angular.module('appControllers').controller('SearchCtrl', ['$scope', 'SearchVehicle', 
  function ($scope, SearchVehicle) {

  $scope.licensePlate = "i";

  $scope.$watch('licensePlate', function (value) {
    searchLicensePlate();
  });

  var searchLicensePlate = function () {
    SearchVehicle.get({placa: $scope.licensePlate}, function (data) {
      $scope.veiculos = data.content;
    });
  };

}]);