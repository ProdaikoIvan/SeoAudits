(function() {
    'use strict';

    angular
        .module('app')
        .directive('usabilityTechnicalAnalysis', usabilityTechnicalAnalysis);

    usabilityTechnicalAnalysis.$inject = [];
    function usabilityTechnicalAnalysis() {
        var directive = {
            bindToController: true,
            controller: 'UsabilityTechnicalAnalysisCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/UsabilityTechnicalAnalysis/UsabilityTechnicalAnalysis.dir.html',
            link: link,
            restrict: 'AE',
            scope: {
                model: '='
            }
        };
        return directive;
        
        function link(scope, element, attrs) {

        }
    }
})();