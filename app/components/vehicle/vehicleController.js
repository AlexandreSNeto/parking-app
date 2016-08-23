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

        $scope.toggleForm = function () {
            $scope.vehicle = {};
            $scope.showFormPanel = !$scope.showFormPanel;
        };

        $scope.save = function () {
            if (!$scope.vehicleForm.$valid) {
                return;
            }

            if (!$scope.vehicle.proprietario) {
                $scope.vehicle.proprietario = {
                    id: $rootScope.user.id
                };
            }

            Vehicle.save($scope.vehicle, function (data) {
                success("Veículo adicionado.");
                $scope.vehicle = {};
                $scope.toggleForm();
                getVehicles();
            }, function (failData) {
                fail("Houve um problema para salvar o veículo: " + failData.data.message);
            });
        };

        var getVehicles = function () {
            Vehicle.get({page: $scope.pager.page - 1, size: $scope.pager.size}, function (data) {
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
            $scope.toggleForm();
            $scope.vehicle = vehicle;
            console.log('editando veiculo');
            console.log(vehicle);
        };

        var success = function (message, messageHeader) {
            $scope.messageHeader = messageHeader ? messageHeader : 'Sucesso!';
            $scope.message = message;
            $scope.success = true;
            $scope.fail = false;
        };

        var fail = function (message) {
            $scope.message = message;
            $scope.fail = true;
            $scope.success = false;
        };

        getVehicles();
    }]);
