'use strict';
angular.module('appControllers').controller('SearchCtrl', ['$scope', 'SearchVehicle', '$timeout',
    function ($scope, SearchVehicle, $timeout) {

        // Pagination
        $scope.pager = {
            totalElements: 0,
            totalPages: -1,
            pagesToShow: 5,
            size: 10,
            page: 1
        };
        $scope.changePage = function () {
            search($scope.licensePlate);
        };

        $scope.licensePlate = "";
        $scope.veiculos = [];

        var timeoutPromise;
        $scope.$watch('licensePlate', function (value) {
            var licensePlate = $scope.licensePlate;
            $timeout.cancel(timeoutPromise);
            if ($scope.licensePlate != '' && $scope.licensePlate.length >= 2) {
                $scope.pager.page = 1;
                timeoutPromise = $timeout(function () {
                    search(licensePlate);
                }, 400);
            } else {
                $scope.veiculos = [];
            }
        });

        var search = function (licensePlate) {
            $scope.searchPromise = SearchVehicle.get({ placa: licensePlate, page: $scope.pager.page - 1, size: $scope.pager.size }, function (data) {
                $scope.veiculos = data.content;
                $scope.pager.totalElements = data.totalElements;
                $scope.pager.totalPages = data.totalPages;
            });
        };

    }]);
