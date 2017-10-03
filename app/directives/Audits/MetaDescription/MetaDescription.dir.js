(function() {
    'use strict';

    angular
        .module('app')
        .directive('metaDescription', metaDescription);

    metaDescription.$inject = [];
    function metaDescription() {
        var directive = {
            bindToController: true,
            controller: 'metaDescriptionCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/Audits/MetaDescription/MetaDescription.dir.html',
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