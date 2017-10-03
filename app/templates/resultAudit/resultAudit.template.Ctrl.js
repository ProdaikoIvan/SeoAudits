(function () {
    'use strict';

    angular
        .module('app')
        .controller('resultAuditCtrl', resultAuditCtrl);

    resultAuditCtrl.$inject = ['auditData', 'dataLoaded', 'categoriesAudit', '$scope', '$state'];

    function resultAuditCtrl(auditData, dataLoaded, categoriesAudit, $scope, $state) {
        var vm = this;
        if (auditData.data.url === "" || auditData.data.keyword === "") {
            $state.go('create');
            return;
        }

        vm.data = auditData.data;
        console.log(vm);
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
        $scope.$watch(function () {
            return auditData.data;
        }, function (newVal) {
            console.log(newVal.audits.length);
            vm.data = auditData.data;
        }, true);


        dataLoaded.autoLoad();


    }
})();