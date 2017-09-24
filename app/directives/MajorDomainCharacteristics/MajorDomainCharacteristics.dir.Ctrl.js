(function() {
    'use strict';

    angular
        .module('app')
        .controller('majorDomainCharacteristicsCtrl', majorDomainCharacteristicsCtrl);

    majorDomainCharacteristicsCtrl.$inject = ['$scope'];
    function majorDomainCharacteristicsCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
            vm.openLinks = openLinks;
            vm.isString = isString;
            vm.linksContent = [];
            function openLinks(data) {
                vm.linksContent.length = 0;
                vm.linksContent.push(data);
                console.log(data);
                $('#links').modal('show')
            }
            function isString(obj) {
                return angular.isString(obj);
            }
        };

    }
})();