(function() {
    'use strict';

    angular
        .module('app')
        .directive('linksAnalysis', linksAnalysis);

    linksAnalysis.$inject = [];
    function linksAnalysis() {
        var directive = {
            bindToController: true,
            controller: 'LinksAnalysisCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/LinksAnalysis/LinksAnalysis.dir.html',
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