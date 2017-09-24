(function() {
    'use strict';

    angular
        .module('app')
        .directive('headerTags', headerTags);

    headerTags.$inject = [];
    function headerTags() {
        var directive = {
            bindToController: true,
            controller: 'HeaderTagsCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/HeaderTags/HeaderTags.dir.html',
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