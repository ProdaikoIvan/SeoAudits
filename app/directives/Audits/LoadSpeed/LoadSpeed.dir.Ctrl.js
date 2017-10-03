(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoadSpeedCtrl', LoadSpeedCtrl);

    LoadSpeedCtrl.$inject = ['$scope'];

    function LoadSpeedCtrl($scope) {
        this.$onInit = function () {
            var vm = this;

            vm.downloadedFiles = null;
            vm.titleButtonShowDownloadedFiles = "Show All";

            vm.isString = isString;
            vm.logoFile = logoFile;
            vm.linkDownloadedFiles = linkDownloadedFiles;
            vm.showAllDownloadedFiles = showAllDownloadedFiles;

            function isString(obj) {
                return angular.isString(obj);
            }

            vm.flag = true;
            $scope.$watch(function () {
                return vm.model;
            }, function (newVal) {
                if(newVal === undefined)return;
                if(vm.flag && vm.model.criterias[4].content.length > 5){
                    vm.downloadedFiles = vm.model.criterias[4].content.slice();
                    vm.model.criterias[4].content.length = 5;
                }
                vm.flag = false;
            });

            function logoFile(path) {
                var point = path.lastIndexOf('.');
                var sub  = path.substring(point + 1);
                var src = "content/img/";
                switch (sub){
                    case "css" : src += "icn-css.svg"; break;
                    case "js" : src += "icn-js.svg"; break;
                    case "png":
                    case "jpg":
                    case "svg":src += "icn-image.svg"; break;
                    default: return "";
                }
                return "<img src="+ src +" alt="+ sub + ">";
            }

            function linkDownloadedFiles(link) {
                var httpsProto = link.substring(0, 8);
                var httpProto = link.substring(0, 7);
                if(httpsProto === "https://"){
                    return link;
                }
                else if(httpProto === "http://"){
                    return link;
                }
                else{
                    return "http://" + link + "/";
                }
            }


            function showAllDownloadedFiles() {
                if(vm.model.criterias[4].content === vm.downloadedFiles){
                    vm.downloadedFiles = vm.model.criterias[4].content.slice();
                    vm.model.criterias[4].content.length = 5;
                    vm.titleButtonShowDownloadedFiles = "Show All";
                }
                else{
                    vm.model.criterias[4].content = vm.downloadedFiles;
                    vm.titleButtonShowDownloadedFiles = "Hide";
                }
            }
        };
    }
})();