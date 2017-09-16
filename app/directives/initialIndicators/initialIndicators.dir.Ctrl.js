(function () {
    'use strict';

    angular
        .module('app')
        .controller('initialIndicatorsCtrl', initialIndicatorsCtrl);

    initialIndicatorsCtrl.$inject = ['$scope', 'dataLoaded', 'categoriesAudit'];

    function initialIndicatorsCtrl($scope, dataLoaded, categoriesAudit) {
        this.$onInit = function () {
            var vm = this;
            console.log(vm);
            vm.reloadDisabled = true;
            vm.category = categoriesAudit.categoriesType;
            vm.selectedCategory = vm.category[0];

            vm.reload = reload;
            vm.total = total;
            vm.checkPassed = checkPassed;
            vm.warning = warning;
            vm.error = error;

            vm.dataCategories = [];
            vm.labelsCategories = [];

            vm.labels = ['success', 'warning', 'error'];
            vm.colors = ['#4CC048', '#FFCC33', '#FF5533'];
            vm.data = [];

            function total() {
                categoriesAudit.changeCategory(vm.category[0]);
                vm.selectedCategory = vm.category[0];
            }

            function checkPassed() {
                categoriesAudit.changeCategory(vm.category[1]);
                vm.selectedCategory =  vm.category[1];
            }
            function warning() {
                categoriesAudit.changeCategory(vm.category[2]);
                vm.selectedCategory = vm.category[2];
            }
            function error() {
                categoriesAudit.changeCategory(vm.category[3]);
                vm.selectedCategory = vm.category[3];
            }

            $scope.$watch(function () {
                return vm.model.audits;
            }, function (newVal, old) {
                active();
            }, true);

            function active() {
                vm.data.length = 0;

                vm.data.push(vm.model.success);
                vm.data.push(vm.model.warning);
                vm.data.push(vm.model.error);


                if (vm.model.audits.length > 13) {
                    vm.labelsCategories.length = 0;
                    vm.dataCategories.length = 0;
                    vm.model.audits.forEach(function (item, i, arr) {
                        vm.labelsCategories.push(item.name);
                        vm.dataCategories.push(item.percent);
                        vm.reloadDisabled = false;
                    });
                }
            }
            
            function reload() {
                dataLoaded.autoLoad();
                vm.reloadDisabled = true;
            }


        };

    }
})();