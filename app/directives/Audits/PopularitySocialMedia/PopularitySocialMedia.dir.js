(function() {
    'use strict';

    angular
        .module('app')
        .directive('popularitySocialMedia', popularitySocialMedia);

    popularitySocialMedia.$inject = [];
    function popularitySocialMedia() {
        var directive = {
            bindToController: true,
            controller: 'PopularitySocialMediaCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/Audits/PopularitySocialMedia/PopularitySocialMedia.dir.html',
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