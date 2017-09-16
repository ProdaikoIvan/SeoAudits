(function() {
    'use strict';

    angular
        .module('app')
        .controller('createAuditCtrl', createAuditCtrl);

    createAuditCtrl.$inject = ['requestData'];
    function createAuditCtrl(requestData) {
        var vm = this;
        vm.data = requestData.data;
        vm.selectedItem = 0;

        vm.links = {
            setting: {
                selected: 0
            },
            data: [
                {
                    name: 'Audit',
                    uisref: 'create'
                },
                {
                    name: 'Result',
                    uisref: 'result'
                }
            ]
        }
    }
})();