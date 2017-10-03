(function () {
    'use strict';

    angular
        .module('app')
        .directive('majorDomainCharactiristics', majorDomainCharactiristics);

    majorDomainCharactiristics.$inject = [];

    function majorDomainCharactiristics() {
        var directive = {
            bindToController: true,
            controller: 'majorDomainCharacteristicsCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/Audits/MajorDomainCharacteristics/MajorDomainCharactiristics.dir.html',
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