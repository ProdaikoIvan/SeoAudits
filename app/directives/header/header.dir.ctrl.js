(function () {
    'use strict';

    angular
        .module('app')
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = ['$state'];

    function HeaderCtrl($state) {
        this.$onInit = function () {
            var vm = this;

            // vm.breadcrumbs = [
            //     {
            //         title: 'Tools'
            //     },
            //     {
            //         title: 'On Page SEO-Audit'
            //     },
            //     {
            //         title: 'http://intent.de'
            //     }
            // ];
            // vm.links = {
            //     setting: {
            //         selected: 0
            //     },
            //     data: [
            //         {
            //             name: 'Audit',
            //             uisref: 'create'
            //         },
            //         {
            //             name: 'Result',
            //             uisref: 'result'
            //         }
            //     ]
            // }

            active();
            vm.goTo = goTo;

            function goTo(index) {
                vm.links.setting.selected = index;
                console.log(vm.links.data[index].uisref);
                $state.go(vm.links.data[index].uisref, null);
            }
            function active() {

            }
        }
    }
})
();