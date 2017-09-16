(function() {
    'use strict';

    angular
        .module('app')
        .directive('pagesTitle', pagesTitle);

    pagesTitle.$inject = [];
    function pagesTitle() {
        var directive = {
            bindToController: true,
            controller: 'pagesTitleCtrl',
            controllerAs: 'vm',
            templateUrl: 'directives/PagesTitle/PagesTitle.dir.html',
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