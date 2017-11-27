'use strict';
angular.module('appControllers').controller('ProfileCtrl', ['$scope', 'Owner', 'CEP', '$uibModal', 'md5',
    function ($scope, Owner, CEP, $uibModal, md5) {

        $scope.disableCidade = true;
        $scope.disableBairro = true;

        $scope.floors = [
            { id: 1, description: '1°' },
            { id: 2, description: '2°' },
            { id: 3, description: '3°' },
            { id: 4, description: '4°' },
            { id: 5, description: '5°' }
        ];

        $scope.ownerPromise = Owner.get({}, function (data) {
            $scope.owner = data;
            if (!$scope.owner.gravatar) {
                $scope.owner.gravatar = md5.createHash($scope.owner.usuario.toLowerCase() + '@cwi.com.br' || '');
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

        $scope.buscarEndereco = function () {
            CEP.get({cep: $scope.owner.cep}, function (response) {
                if (response.resultado != 0) {
                    $scope.owner.cidade = response.cidade;
                    $scope.disableCidade = true;
                    if (response.bairro) {
                        $scope.owner.bairro = response.bairro;
                        $scope.disableBairro = true;
                    } else {
                        $scope.owner.bairro = "";
                        $scope.disableBairro = false;
                    }
                }
            }, function (fail) {
                console.log('Busca do CEP falhou: ' + fail);
                $scope.disableCidade = false;
                $scope.disableBairro = false;
                });
        }

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
