(function () {
    'use strict';

    angular
        .module('app')
        .controller('KeywordDensityCtrl', KeywordDensityCtrl);

    KeywordDensityCtrl.$inject = ['$scope'];

    function KeywordDensityCtrl($scope) {
        this.$onInit = function () {
            var vm = this;

            vm.showAll = showAll;

            vm.titleShowButtons = [
                'Show All',
                'Show All',
                'Show All',
                'Show All'
            ];
            vm.contentTemp = [

            ];

            vm.flag = true;
            $scope.$watch(function () {
                return vm.model;
            }, function (newVal) {
                if (newVal === undefined) return;
                if (vm.flag) {
                    if (vm.model.criterias[0].content.length > 5) {
                        vm.contentTemp[0] = vm.model.criterias[0].content.slice();
                        vm.model.criterias[0].content.length = 5;
                    }
                    if (vm.model.criterias[1].content.length > 5) {
                        vm.contentTemp[1] = vm.model.criterias[1].content.slice();
                        vm.model.criterias[1].content.length = 5;
                    }
                    if (vm.model.criterias[2].content.length > 5) {
                        vm.contentTemp[2] = vm.model.criterias[2].content.slice();
                        vm.model.criterias[2].content.length = 5;
                    }
                    if (vm.model.criterias[3].content.length > 5) {
                        vm.contentTemp[3] = vm.model.criterias[3].content.slice();
                        vm.model.criterias[3].content.length = 5;
                    }
                }
                vm.flag = false;
            });

            function showAll(index) {
                if (vm.model.criterias[index].content === vm.contentTemp[index]) {
                    vm.contentTemp[index] = vm.model.criterias[index].content.slice();
                    vm.model.criterias[index].content.length = 5;
                    vm.titleShowButtons[index] = "Show All";
                }
                else {
                    if (vm.contentTemp[index] === undefined || vm.contentTemp[index] < 5) return;
                    vm.model.criterias[index].content = vm.contentTemp[index];
                    vm.titleShowButtons[index] = "Hide";
                }
            }
        };
    }
})();