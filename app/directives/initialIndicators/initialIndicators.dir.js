(function () {
    'use strict';

    angular
        .module('app')
        .directive('initialIndicators', initialIndicators);

    initialIndicators.$inject = ['$window'];

    function initialIndicators($window) {
        var directive = {
            bindToController: true,
            controller: 'initialIndicatorsCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/initialIndicators/initialIndicators.dir.html',
            link: link,
            restrict: 'AE',
            scope: {
                model: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
            var hideElements = angular.element('.hideElement');
            var desktopChart = angular.element('.desktopChart');
            var mobileChart = angular.element('.mobileChart');

            visibleInfo($window.innerWidth);

            function visibleInfo(widthWindow) {
                widthWindow < 600 ? hideElements.addClass('hideElement-initialIndicators'):  hideElements.removeClass('hideElement-initialIndicators');
                widthWindow < 800 ? mobile(): desktop();
            }
            angular.element($window).bind('resize', function () {
                visibleInfo($window.innerWidth);
            });

            function mobile() {
                desktopChart.addClass('hideElement-initialIndicators');
                mobileChart.removeClass('hideElement-initialIndicators');
            }
            function desktop() {
                mobileChart.addClass('hideElement-initialIndicators');
                desktopChart.removeClass('hideElement-initialIndicators');
            }
        }
    }
})();