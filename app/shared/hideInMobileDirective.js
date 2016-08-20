'use strict';
angular.module('appServices').directive('hideInMobile', ['DetectMobileService', function (DetectMobileService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var isMobile = DetectMobileService.isMobile();
            if (isMobile) {
                $(element).hide();
            }
        }
    };
}]);

