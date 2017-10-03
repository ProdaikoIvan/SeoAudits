(function() {
    'use strict';

    angular
        .module('app')
        .controller('createAuditCtrl', createAuditCtrl);

    createAuditCtrl.$inject = [];
    function createAuditCtrl() {
        var vm = this;
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