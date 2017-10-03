(function() {
    'use strict';

    angular
        .module('app')
        .controller('PageLoadOptimizationCtrl', PageLoadOptimizationCtrl);

    PageLoadOptimizationCtrl.$inject = ['$scope'];
    function PageLoadOptimizationCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
            vm.mobileDesktopFlag = [true, false];
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
                vm.mobileDesktopFlag[0] = true;
                vm.mobileDesktopFlag[1] = false;
            }
            function desktop() {
                vm.model = vm.modelDesktop;
                vm.mobileDesktopFlag[0] = false;
                vm.mobileDesktopFlag[1] = true;
            }

            function isString(obj) {
                var res = angular.isString(obj);
                return res;
            }

        };

    }
})();