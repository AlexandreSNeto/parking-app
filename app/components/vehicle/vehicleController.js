angular.module('appControllers').controller('VehicleCtrl', ['$scope', 'MyVehicles', 
  function ($scope, MyVehicles) {
  
  MyVehicles.get({}, function (data) {
    $scope.vehicles = data.content;
  });

}]);