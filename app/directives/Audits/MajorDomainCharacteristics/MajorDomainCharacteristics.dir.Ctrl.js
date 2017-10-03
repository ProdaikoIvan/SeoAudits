(function() {
    'use strict';

    angular
        .module('app')
        .controller('majorDomainCharacteristicsCtrl', majorDomainCharacteristicsCtrl);

    majorDomainCharacteristicsCtrl.$inject = ['request'];
    function majorDomainCharacteristicsCtrl(request) {
        this.$onInit = function() {
            var vm = this;

            console.log(vm);
            vm.openLinks = openLinks;
            vm.isString = isString;
            vm.linksContent = [];

            function openLinks(data) {
                request.request(data, 'POST').then(function (data) {
                    console.log(data);
                });
                console.log(data);
                vm.linksContent.length = 0;
                vm.linksContent.push(data);
                $('#links').modal('show')
            }
            function isString(obj) {
                return angular.isString(obj);
            }
        };

    }
})();