(function() {
    'use strict';

    angular
        .module('app')
        .service('auditData', auditData);

        auditData.$inject = [];
    function auditData() {
        return {
            data: []
        }
    }
})();