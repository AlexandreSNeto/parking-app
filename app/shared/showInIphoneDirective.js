'use strict';
angular.module('appServices').directive('showInIphone', ['DetectMobileService', function (DetectMobileService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var isIphone = DetectMobileService.isIphone();
            if (!isIphone) {
                $(element).remove();
            }
        }
    };
}]);

