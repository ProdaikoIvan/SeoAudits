(function() {
    'use strict';

    angular
        .module('app')
        .directive('pageUrlStructure', pageURLStructure);

    pageURLStructure.$inject = [];
    function pageURLStructure() {
        var directive = {
            bindToController: true,
            controller: 'pageURLStructureCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/Audits/PageURLStructure/PageURLStructure.dir.html',
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