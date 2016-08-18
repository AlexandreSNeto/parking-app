angular.module('appControllers').controller('LoginCtrl', ['$scope', '$rootScope', 'Auth', 'Owner', '$httpParamSerializer', '$location',
  function ($scope, $rootScope, Auth, Owner, $httpParamSerializer, $location) {

    $rootScope.authenticated = false;

    $scope.entrar = function () {
      Auth.login($httpParamSerializer($scope.auth), function (data) {        
        Owner.get({}, function (data) {
          $rootScope.authenticated = true;
          
          $rootScope.owner = data;
          if ($rootScope.owner.nome) {
            $location.path('/');
          } else {
            $location.path('/profile');
          }
        });       
      });
    };

    $scope.sair = function () {
      $rootScope.authenticated = false;
      Auth.logout({}, function (data) {
        $location.path('/login');
      });
    };
    
}]);