(function() {
    'use strict';

    angular
        .module('app')
        .controller('majorDomainCharacteristicsCtrl', majorDomainCharacteristicsCtrl);

    majorDomainCharacteristicsCtrl.$inject = ['$scope'];
    function majorDomainCharacteristicsCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
        };

    }
})();