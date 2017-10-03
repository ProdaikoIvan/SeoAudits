(function() {
    'use strict';

    angular
        .module('app')
        .directive('keywordDensity', keywordDensity);

    keywordDensity.$inject = [];
    function keywordDensity() {
        var directive = {
            bindToController: true,
            controller: 'KeywordDensityCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/Audits/KeywordDensity/KeywordDensity.dir.html',
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