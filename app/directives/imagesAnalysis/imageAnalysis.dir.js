(function() {
    'use strict';

    angular
        .module('app')
        .directive('imagesAnalysis', imagesAnalysis);

    imagesAnalysis.$inject = [];
    function imagesAnalysis() {
        var directive = {
            bindToController: true,
            controller: 'imagesAnalysisCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/imagesAnalysis/imageAnalysis.dir.html',
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