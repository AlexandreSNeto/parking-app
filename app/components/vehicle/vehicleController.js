angular.module('appControllers').controller('VehicleCtrl', ['$scope', 'Vehicle', 
  function ($scope, Vehicle) {
  
  Vehicle.get({}, function (data) {
    $scope.vehicles = data.content;
  });

  

}]);