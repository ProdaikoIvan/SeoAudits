(function () {
    'use strict';

    angular
        .module('app')
        .controller('initialIndicatorsCtrl', initialIndicatorsCtrl);

    initialIndicatorsCtrl.$inject = ['$scope', 'dataLoaded', 'categoriesAudit', '$window'];

    function initialIndicatorsCtrl($scope, dataLoaded, categoriesAudit, $window) {
        this.$onInit = function () {
            var vm = this;
            console.log(vm);

            vm.showChartVersion = false;

            vm.templates = [
                'directives/initialIndicators/PDF-popup.html',
                'directives/initialIndicators/EmailSent-Popup.html'
            ];
            vm.PDFExport = {
                includeCheckPassed: true,
                includeWarning: true,
                includeErrors: true,
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
                console.log(vm.PDFExport);
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
                return vm.model.audits;
            }, function (newVal, old) {
                active();
            }, true);

            function active() {
                vm.data.length = 0;

                // vm.data.push(vm.model.success);
                // vm.data.push(vm.model.warning);
                // vm.data.push(vm.model.error);


                if (vm.model.audits.length > 14) {
                    // vm.labelsCategories.length = 0;
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