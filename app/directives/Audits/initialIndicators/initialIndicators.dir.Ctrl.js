(function () {
    'use strict';

    angular
        .module('app')
        .controller('initialIndicatorsCtrl', initialIndicatorsCtrl);

    initialIndicatorsCtrl.$inject = ['$scope', 'dataLoaded', 'categoriesAudit', '$window', 'request', 'url', 'authorization'];

    function initialIndicatorsCtrl($scope, dataLoaded, categoriesAudit, $window, request, url, authorization) {
        this.$onInit = function () {
            var vm = this;

            vm.showChartVersion = false;

            vm.templates = [
                'directives/Audits/initialIndicators/PDF-popup.html',
                'directives/Audits/initialIndicators/EmailSent-Popup.html'
            ];
            vm.PDFExport = {
                success: true,
                warning: true,
                error: true,
                displayDetails: false,
                addTask: false,
                printVersion: false
            };
            vm.emailSent = "";

            vm.reloadDisabled = true;
            vm.category = categoriesAudit.categoriesType;
            vm.selectedCategory = vm.category[0];

            vm.template = vm.templates[0];

            vm.reload = reload;
            vm.total = total;
            vm.checkPassed = checkPassed;
            vm.warning = warning;
            vm.error = error;

            vm.openPDFPopup = openPDFPopup;
            vm.openSentEmail = openSentEmail;
            vm.exportPDF = exportPDF;
            vm.exportToEmail = exportToEmail;

            vm.dataCategories = [];
            // vm.labelsCategories = [];
            vm.labelsCategoriesMobile = [];
            vm.labelsCategoriesDesktop = [];
            vm.colorsCategories = ['#97BBCD', '#F14448', '#46BFBD', '#FDB45C', '#949FB1', '#9672E2', '#CD227F', '#5A9DF8', '#29A60B', '#127C60', '#5487B0', '#F5A645', '#BBEA92', '#4207A0', '#92B1BE'];

            vm.options = {
                legend: {
                    display: true,
                    position: 'bottom'
                },
                showTooltips: true
            };
            vm.labels = ['success', 'warning', 'error'];
            vm.colors = ['#4CC048', '#FFCC33', '#FF5533'];
            vm.data = [];

            function openPDFPopup() {
                vm.template = vm.templates[0];
                $('#popup').modal('show');
            }

            function exportPDF() {
                var dubl = angular.copy(vm.PDFExport);
                delete dubl.displayDetails;
                delete dubl.addTask;
                delete dubl.printVersion;
                // dubl.responseType = 'arraybuffer';
                console.log(dubl);
                request.request(url.savePDF, 'POST', dubl, authorization.getAuthKey()).then(function (res, status) {
                    var file = new Blob([res.data], {type: 'application/pdf'});
                    var fileURL = URL.createObjectURL(file);
                    window.open(fileURL);
                    console.log(res.data);
                    // var data = new Blob([resp.data], { type:  "application/pdf;charset=utf-8"});
                    // FileSaver.saveAs(data, 'text.pdf');
                });
                $('#popup').modal('hide');
            }

            function openSentEmail() {
                vm.template = vm.templates[1];
                $('#popup').modal('show');
            }

            function exportToEmail() {
                console.log(vm.emailSent);
                $('#popup').modal('hide');
            }


            function total() {
                categoriesAudit.changeCategory(vm.category[0]);
                vm.selectedCategory = vm.category[0];
            }

            function checkPassed() {
                categoriesAudit.changeCategory(vm.category[1]);
                vm.selectedCategory = vm.category[1];
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
                if (vm.model)
                    return vm.model.audits;
            }, function (newVal, old) {
                active();
            }, true);

            function active() {
                vm.data.length = 0;

                if (vm.model.audits.length > 14) {
                    vm.labelsCategoriesMobile.length = 0;
                    vm.labelsCategoriesDesktop.length = 0;
                    vm.dataCategories.length = 0;
                    vm.model.audits.forEach(function (item, i, arr) {
                        // vm.labelsCategories.push(item.name);
                        // vm.labelsCategories.push(i+1);
                        vm.labelsCategoriesDesktop.push(item.name);
                        vm.labelsCategoriesMobile.push(i + 1);
                        vm.dataCategories.push(item.percent);
                        vm.reloadDisabled = false;
                    });

                    vm.data.push(vm.model.success);
                    vm.data.push(vm.model.warning);
                    vm.data.push(vm.model.error);
                }
            }

            function reload() {
                dataLoaded.autoLoad();
                vm.reloadDisabled = true;
            }


        };
    }
})();