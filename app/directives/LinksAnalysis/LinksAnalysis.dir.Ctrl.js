(function() {
    'use strict';

    angular
        .module('app')
        .controller('LinksAnalysisCtrl', LinksAnalysisCtrl);

    LinksAnalysisCtrl.$inject = ['$scope'];
    function LinksAnalysisCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
            vm.links = [];
            vm.titleButtonShowLinks = "Show All";

            vm.isString = isString;
            vm.showAllLinks = showAllLinks;

            vm.flag = true;
            $scope.$watch(function () {
                return vm.model;
            }, function (newVal) {
                if(newVal === undefined)return;
                if(vm.flag && vm.model.criterias[3].content.length > 5){
                    vm.links = vm.model.criterias[3].content.slice();
                    vm.model.criterias[3].content.length = 5;
                    console.log(vm.links);
                }
                vm.flag = false;
            });
            
            function showAllLinks() {
                if(vm.model.criterias[3].content === vm.links){
                    vm.links = vm.model.criterias[3].content.slice();
                    vm.model.criterias[3].content.length = 5;
                    vm.titleButtonShowLinks = "Show All";
                }
                else{
                    vm.model.criterias[3].content = vm.links;
                    vm.titleButtonShowLinks = "Hide";
                }
            }
            function isString(obj) {
                return angular.isString(obj);
            }
        };

    }
})();