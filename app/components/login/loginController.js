angular.module('appControllers').controller('LoginCtrl', ['$scope', 'Login', '$httpParamSerializer', '$location',
  function ($scope, Login, $httpParamSerializer, $location) {

    $scope.entrar = function () {
      console.log('Autenticando usuario: ');
      console.log($scope.auth);

      Login.save($httpParamSerializer($scope.auth), function (data) {
        $location.path('/');
      });
    }
    
}]);