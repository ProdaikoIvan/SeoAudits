(function() {
    'use strict';

    angular
        .module('app')
        .controller('HeaderTagsCtrl', HeaderTagsCtrl);

    HeaderTagsCtrl.$inject = ['$scope'];
    function HeaderTagsCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
            vm.isString = isString;
            vm.h1 = 0;
            vm.h2 = 0;
            vm.h3= 0;
            vm.h4 = 0;
            vm.h5 = 0;
            vm.h6 = 0;
            vm.activeHeader = 'h1';
            vm.selectHeaders = selectHeaders;
            vm.tag = tag;
            vm.textTag = textTag;

            $scope.$watch(function () {
                return vm.model;
            },function (newVal) {
                if(newVal !== undefined){
                    active();
                }
            });
            function isString(obj) {
                return angular.isString(obj)
            }
            function selectHeaders(type) {
                vm.activeHeader = type;
            }

            function active() {
                console.log(vm.model);
                vm.model.criterias[0].content.forEach(function (item) {
                    switch (item.type){
                        case 'h1': vm.h1++; break;
                        case 'h2': vm.h2++; break;
                        case 'h3': vm.h3++; break;
                        case 'h4': vm.h4++; break;
                        case 'h5': vm.h5++; break;
                        case 'h6': vm.h6++; break;
                    }
                })
            }
            function tag(element, closeTagFlag) {
                if(closeTagFlag){
                    return "</" + element.type + ">"
                }else{
                    return "<" + element.type + ">"
                }
            }
            function textTag(element) {
                return element.name;
            }
        };

    }
})();