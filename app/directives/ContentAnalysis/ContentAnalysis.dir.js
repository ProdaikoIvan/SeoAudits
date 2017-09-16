(function() {
    'use strict';

    angular
        .module('app')
        .directive('contentAnalysis', contentAnalysis);

    contentAnalysis.$inject = [];
    function contentAnalysis() {
        var directive = {
            bindToController: true,
            controller: 'ContentAnalysisCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/ContentAnalysis/ContentAnalysis.dir.html',
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