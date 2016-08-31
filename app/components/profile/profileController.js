'use strict';
angular.module('appControllers').controller('ProfileCtrl', ['$scope', 'Owner', '$uibModal', 'md5',
    function ($scope, Owner, $uibModal, md5) {

        Owner.get({}, function (data) {
            $scope.owner = data;
            if (!$scope.owner.gravatar) {
                $scope.owner.gravatar = md5.createHash($scope.owner.usuario + '@cwi.com.br' || ''); 
            }
        });

        $scope.salvar = function () {
            $scope.$broadcast('show-errors-check-validity');
            if (!$scope.profileForm.$valid) {
                return;
            }

            Owner.save($scope.owner, function () {
                success('Perfil atualizado.');
            }, function (failData) {
                fail('Houve um problema ao atualizar o perfil: ' + failData.data.message);
            });
        };

        $scope.openModalGravatar = function () {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'gravatar.html',
                controller: 'ModalGravatarCtrl'
            });
        };

        var success = function (message, messageHeader) {
            $scope.$broadcast('show-errors-reset');
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

angular.module('appControllers').controller('ModalGravatarCtrl', function ($uibModalInstance, $scope) {
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});