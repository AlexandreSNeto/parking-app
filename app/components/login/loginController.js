'use strict';
angular.module('appControllers').controller('LoginCtrl', ['$scope', 'AuthLogin', 'Owner', '$httpParamSerializer', '$location', '$rootScope',
    function ($scope, AuthLogin, Owner, $httpParamSerializer, $location, $rootScope) {

        $scope.entrar = function () {
            AuthLogin.login($httpParamSerializer($scope.auth), function (data) {
                Owner.get({}, function (data) {
                    $rootScope.user = {
                        id: data.id,
                        name: data.nome,
                        avatar: data.gravatar
                    };

                    if (!data.celular || !data.ramal) {
                        $location.path('/profile');
                    } else {
                        $location.path('/');
                    }
                });
            }, function (failData) {
                console.log('Fail!');
                fail('Login não realizado. ' + failData.data.message);
            });
        };

        var success = function (message, messageHeader) {
            $scope.messageHeader = messageHeader ? messageHeader : 'Sucesso!';
            $scope.message = message;
            $scope.success = true;
            $scope.fail = false;
        };

        var fail = function (message, messageHeader) {
            $scope.messageHeader = messageHeader ? messageHeader : 'Ops!';
            $scope.message = message;
            $scope.fail = true;
            $scope.success = false;
        };

    }]);
