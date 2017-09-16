(function() {
    'use strict';

    angular
        .module('app')
        .controller('auditLoadCtrl', auditLoadCtrl);

    auditLoadCtrl.$inject = ['$scope'];
    function auditLoadCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
            console.log('audit');

            vm.start = start;

            vm.audit = {
                url:'',
                keywords: ''
            }
            function start() {
                console.log(vm.audit);
            }

        };

    }
})();