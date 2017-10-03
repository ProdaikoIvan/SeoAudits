(function() {
    'use strict';

    angular
        .module('app')
        .directive('indexStatusCachedSnapshot', indexStatusCachedSnapshot);

    indexStatusCachedSnapshot.$inject = [];
    function indexStatusCachedSnapshot() {
        var directive = {
            bindToController: true,
            controller: 'IndexStatusCachedSnapshotCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/Audits/IndexStatusCachedSnapshot/IndexStatusCachedSnapshot.dir.html',
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