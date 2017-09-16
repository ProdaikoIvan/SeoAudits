(function() {
    'use strict';

    angular
        .module('app')
        .controller('PopularitySocialMediaCtrl', PopularitySocialMediaCtrl);

    PopularitySocialMediaCtrl.$inject = ['$scope'];
    function PopularitySocialMediaCtrl($scope) {
        this.$onInit = function() {
            var vm = this;
            console.log(this);
        };
    }
})();