'use strict';
angular.module('appServices').directive('showInMobile', ['DetectMobileService', function (DetectMobileService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var isMobile = DetectMobileService.isMobile();
            if (!isMobile) {
                $(element).remove();
            }
        }
    };
}]);

