angular.module('appControllers').controller('SearchCtrl', ['$scope', '$rootScope', '$location', 'SearchVehicle', 
  function ($scope, $rootScope,  $location, SearchVehicle) {

  if (!$rootScope.authenticated) {
    $location.path("/login");
  }

  $scope.licensePlate = "";

  $scope.$watch('licensePlate', function (value) {
    searchLicensePlate();
  });

  var searchLicensePlate = function () {
    SearchVehicle.get({placa: $scope.licensePlate}, function (data) {
      $scope.veiculos = data.content;
    });
  };

}]);