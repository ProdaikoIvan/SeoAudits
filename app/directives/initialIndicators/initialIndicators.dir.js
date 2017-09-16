(function() {
    'use strict';

    angular
        .module('app')
        .directive('initialIndicators', initialIndicators);

        initialIndicators.$inject = [];
    function initialIndicators() {
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

        }
    }
})();