(function() {
    'use strict';

    angular
        .module('app')
        .controller('pageURLStructureCtrl', pageURLStructureCtrl);

    pageURLStructureCtrl.$inject = ['$scope'];
    function pageURLStructureCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
        };

    }
})();