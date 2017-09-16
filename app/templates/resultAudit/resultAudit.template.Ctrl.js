(function () {
    'use strict';

    angular
        .module('app')
        .controller('resultAuditCtrl', resultAuditCtrl);

    resultAuditCtrl.$inject = ['requestData', 'auditData', 'dataLoaded', 'categoriesAudit'];

    function resultAuditCtrl(requestData, auditData, dataLoaded, categoriesAudit) {
        var vm = this;
        auditData.data = requestData.data;
        vm.data = auditData.data;

        console.log(this);
        vm.selectedItem = 1;
        vm.categories = categoriesAudit.categories;

        vm.links = {
            setting: {
                selected: 1
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
        };

        dataLoaded.autoLoad();
    }
})();