(function() {
    'use strict';

    angular
        .module('app')
        .directive('auditLoad', auditLoad);

    auditLoad.$inject = [];
    function auditLoad() {
        var directive = {
            bindToController: true,
            controller: 'auditLoadCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/auditLoad/auditLoad.dir.html',
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