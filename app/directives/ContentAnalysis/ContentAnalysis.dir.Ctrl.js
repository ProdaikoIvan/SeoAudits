(function() {
    'use strict';

    angular
        .module('app')
        .controller('ContentAnalysisCtrl', ContentAnalysisCtrl);

    ContentAnalysisCtrl.$inject = ['$scope'];
    function ContentAnalysisCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
        };

    }
})();