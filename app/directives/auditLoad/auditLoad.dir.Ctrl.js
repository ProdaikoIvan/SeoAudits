(function () {
    'use strict';

    angular
        .module('app')
        .controller('auditLoadCtrl', auditLoadCtrl);

    auditLoadCtrl.$inject = ['$scope', 'request', 'url', 'authorization', '$state', 'auditData'];

    function auditLoadCtrl($scope, request, url, authorization, $state, auditData) {
        this.$onInit = function () {
            var vm = this;
            console.log('audit');

            vm.start = start;

            vm.audit = {
                url: '',
                keyword: ''
            };

            function start() {
                console.log(vm.audit);
                request.request(url.getPage, 'POST', vm.audit, authorization.getAuthKey()).then(function (data) {
                        console.log(data.data);
                        auditData.data = data.data;
                        url.setUrlId(data.data.id);
                        $state.go('result');
                    },
                    function (data) {
                        console.warn(data);
                        $state.go('login');
                    });
            }
        };
    }
})();