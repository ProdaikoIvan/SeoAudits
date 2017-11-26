(function() {
    'use strict';

    angular
        .module('app')
        .directive('headerDir', headerDir);

    headerDir.$inject = [];
    function headerDir() {

        var directive = {
            bindToController: true,
            controller: 'HeaderCtrl',
            controllerAs: 'vm',
            templateUrl:"directives/header/header.dir.html",
            link: link,
            restrict: 'AE',
            scope: {
                links:'='
            }
        };
        return directive;
        
        function link(scope, element, attrs) {

        }
    }
})();