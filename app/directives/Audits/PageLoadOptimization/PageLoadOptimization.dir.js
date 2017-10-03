(function() {
    'use strict';

    angular
        .module('app')
        .directive('pageLoadOptimization', pageLoadOptimization);

    pageLoadOptimization.$inject = [];
    function pageLoadOptimization() {
        var directive = {
            bindToController: true,
            controller: 'PageLoadOptimizationCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/Audits/PageLoadOptimization/PageLoadOptimization.dir.html',
            link: link,
            restrict: 'AE',
            scope: {
                modelMobile: '=',
                modelDesktop: '='
            }
        };
        return directive;
        
        function link(scope, element, attrs) {

        }
    }
})();