(function() {
    'use strict';

    angular
        .module('app')
        .controller('pagesTitleCtrl', pagesTitleCtrl);

    pagesTitleCtrl.$inject = ['$scope'];
    function pagesTitleCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
        };

    }
})();