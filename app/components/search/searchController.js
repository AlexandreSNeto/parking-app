'use strict';
angular.module('appControllers').controller('SearchCtrl', ['$scope', 'SearchVehicle',
    function ($scope, SearchVehicle) {

        // Pagination
        $scope.pager = {
            totalElements: 0,
            totalPages: 0,
            pagesToShow: 5,
            size: 10,
            page: 1
        };
        $scope.changePage = function () {
            search();
        };

        $scope.licensePlate = "";
        $scope.veiculos = [];

        $scope.$watch('licensePlate', function (value) {
            if ($scope.licensePlate != '' && $scope.licensePlate.length >= 2) {
                $scope.pager.page = 1;
                search();
            } else {
                $scope.veiculos = [];
            }
        });

        var search = function () {
            SearchVehicle.get({ placa: $scope.licensePlate, page: $scope.pager.page - 1, size: $scope.pager.size }, function (data) {
                $scope.veiculos = data.content;
                $scope.pager.totalElements = data.totalElements;
                $scope.pager.totalPages = data.totalPages;
            });
        };

    }]);
