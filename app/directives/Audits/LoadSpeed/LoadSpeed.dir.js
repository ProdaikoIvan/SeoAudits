(function() {
    'use strict';

    angular
        .module('app')
        .directive('loadSpeed', loadSpeed);

    loadSpeed.$inject = [];
    function loadSpeed() {
        var directive = {
            bindToController: true,
            controller: 'LoadSpeedCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/Audits/LoadSpeed/LoadSpeed.dir.html',
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