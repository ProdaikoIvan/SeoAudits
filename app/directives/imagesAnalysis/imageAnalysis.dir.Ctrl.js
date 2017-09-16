(function() {
    'use strict';

    angular
        .module('app')
        .controller('imagesAnalysisCtrl', imagesAnalysisCtrl);

    imagesAnalysisCtrl.$inject = ['$scope'];
    function imagesAnalysisCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
            vm.AltAttribute = [];
            vm.InformativeAttribute = [];
            vm.UnderscoreAttribute = [];
            vm.KeywordAtributes = [];
            vm.titleButtonShowAltAttribute = "Show All";
            vm.titleButtonShowInformativAttribute = "Show All";
            vm.titleButtonShowInformativeAttribute = "Show All";
            vm.titleButtonShowKeywordAtributes = "Show All";

            vm.showAllAltAttribute = showAllAltAttribute;
            vm.showInformativeAltAttribute = showInformativeAltAttribute;
            vm.showAllUnderscoreAttribute = showAllUnderscoreAttribute;
            vm.showAllKeywordAtributes = showAllKeywordAtributes;

            vm.flag = true;
            $scope.$watch(function () {
                return vm.model;
            }, function (newVal) {
                if(newVal === undefined)return;
                if(vm.flag){
                    if(vm.model.criterias[0].content.length > 5){
                        vm.AltAttribute = vm.model.criterias[0].content.slice();
                        vm.model.criterias[0].content.length = 5;
                    }
                    if(vm.model.criterias[3].content.length > 5){
                        vm.KeywordAtributes = vm.model.criterias[3].content.slice();
                        vm.model.criterias[0].content.length = 5;
                    }
                }
                vm.flag = false;
            });

            function showAllAltAttribute() {
                if(vm.model.criterias[0].content === vm.AltAttribute){
                    vm.AltAttribute = vm.model.criterias[0].content.slice();
                    vm.model.criterias[0].content.length = 5;
                    vm.titleButtonShowAltAttribute = "Show All";
                }
                else{
                    if(vm.AltAttribute.length < 5) return;
                    vm.model.criterias[0].content = vm.AltAttribute;
                    vm.titleButtonShowAltAttribute = "Hide";
                }
            }
            function showInformativeAltAttribute() {
                if(vm.model.criterias[1].content === vm.InformativeAttribute){
                    vm.InformativeAttribute = vm.model.criterias[1].content.slice();
                    vm.model.criterias[1].content.length = 5;
                    vm.titleButtonShowKeywordAtributes = "Show All";
                }
                else{
                    if(vm.InformativeAttribute.length < 5) return;
                    vm.model.criterias[1].content = vm.InformativeAttribute;
                    vm.titleButtonShowKeywordAtributes = "Hide";
                }
            }
            function showAllUnderscoreAttribute() {
                if(vm.model.criterias[2].content === vm.UnderscoreAttribute){
                    vm.UnderscoreAttribute = vm.model.criterias[2].content.slice();
                    vm.model.criterias[2].content.length = 5;
                    vm.titleButtonShowKeywordAtributes = "Show All";
                }
                else{
                    if(vm.KeywordAtributes.length < 5) return;
                    vm.model.criterias[2].content = vm.UnderscoreAttribute;
                    vm.titleButtonShowKeywordAtributes = "Hide";
                }
            }
            function showAllKeywordAtributes() {
                if(vm.model.criterias[3].content === vm.KeywordAtributes){
                    vm.KeywordAtributes = vm.model.criterias[3].content.slice();
                    vm.model.criterias[3].content.length = 5;
                    vm.titleButtonShowKeywordAtributes = "Show All";
                }
                else{
                    if(vm.KeywordAtributes.length < 5) return;
                    vm.model.criterias[3].content = vm.KeywordAtributes;
                    vm.titleButtonShowKeywordAtributes = "Hide";
                }
            }
        };
    }
})();