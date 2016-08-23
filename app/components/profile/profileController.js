'use strict';
angular.module('appControllers').controller('ProfileCtrl', ['$scope', 'Owner',
    function ($scope, Owner) {

        Owner.get({}, function (data) {
            $scope.owner = data;
        });

        $scope.salvar = function () {
            if (!$scope.profileForm.$valid) {
                return;
            }
            Owner.save($scope.owner, function () {
                success('Perfil atualizado.');
            }, function (failData) {
                fail('Houve um problema ao atualizar o perfil: ' + failData.data.message);
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
