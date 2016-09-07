'use strict';
angular.module('appControllers').controller('VehicleCtrl', ['$scope', '$rootScope', 'Vehicle', 'DeleteVehicle',
    function ($scope, $rootScope, Vehicle, DeleteVehicle) {

        // Pagination
        $scope.pager = {
            totalElements: 0,
            totalPages: 0,
            pagesToShow: 5,
            size: 10,
            page: 1
        };
        $scope.changePage = function () {
            getVehicles();
        };

        $scope.showFormPanel = false;

        $scope.otherColor = 'other';
        $scope.colors = [
            'Amarelo',
            'Azul',
            'Bege',
            'Bordô',
            'Branco',
            'Champagne',
            'Cinza',
            'Dourado',
            'Grafite',
            'Laranja',
            'Marrom',
            'Ouro',
            'Prata',
            'Preto',
            'Rosa',
            'Roxo',
            'Verde',
            'Vermelho'
        ];

        $scope.toggleForm = function () {
            $scope.vehicle = {};
            $scope.inputedColor = '';
            $scope.$broadcast('show-errors-reset');
            $scope.showFormPanel = !$scope.showFormPanel;
        };

        var formIsOpen = function () {
            return $scope.showFormPanel;
        }

        $scope.save = function () {
            $scope.$broadcast('show-errors-check-validity');
            if (!$scope.vehicleForm.$valid) {
                return;
            }

            if (!$scope.vehicle.proprietario) {
                $scope.vehicle.proprietario = {
                    id: $rootScope.user.id
                };
            }

            if ($scope.vehicle.cor === $scope.otherColor) {
                $scope.vehicle.cor = $scope.inputedColor;
            }

            Vehicle.save($scope.vehicle, function (data) {
                success("Veículo adicionado.");
                $scope.toggleForm();
                getVehicles();
            }, function (failData) {
                fail("Houve um problema para salvar o veículo: " + failData.data.message);
            });
        };

        var getVehicles = function () {
            $scope.vehiclesPromise = Vehicle.get({ page: $scope.pager.page - 1, size: $scope.pager.size }, function (data) {
                $scope.vehicles = data.content;
                $scope.pager.totalElements = data.totalElements;
                $scope.pager.totalPages = data.totalPages;
            });
        };

        $scope.remove = function (id) {
            DeleteVehicle.delete({ id: id }, function () {
                success("Veículo removido.");
                getVehicles();
            }, function (failData) {
                fail("Houve um problema para remover o veículo: " + failData.data.message);
            });
        };

        $scope.edit = function (vehicle) {
            if (!formIsOpen()) {
                $scope.toggleForm();
            }
            $scope.vehicle = angular.copy(vehicle);

            if ($.inArray($scope.vehicle.cor, $scope.colors) == -1) {
                $scope.inputedColor = $scope.vehicle.cor;
                $scope.vehicle.cor = $scope.otherColor;
            }
        };

        $scope.selectedOther = function () {
            if ($scope.vehicle) {
                return $scope.vehicle.cor === $scope.otherColor;
            }
            return false;
        }

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

        getVehicles();
    }]);
