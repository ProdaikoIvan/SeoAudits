(function() {
    'use strict';

    angular
        .module('app')
        .controller('PageLoadOptimizationCtrl', PageLoadOptimizationCtrl);

    PageLoadOptimizationCtrl.$inject = ['$scope'];
    function PageLoadOptimizationCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
            vm.isString = isString;
            vm.mobile = mobile;
            vm.desktop = desktop;
            $scope.$watch(function () {
                return vm.modelMobile;
            },function (newVal) {
                vm.model = newVal;
            }, true);
            
            function mobile() {
                vm.model = vm.modelMobile;
            }
            function desktop() {
                vm.model = vm.modelDesktop;
            }

            function isString(obj) {
                var res = angular.isString(obj);
                return res;
            }

        };

    }
})();