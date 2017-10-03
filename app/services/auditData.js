(function() {
    'use strict';

    angular
        .module('app')
        .factory('auditData', auditData);

        auditData.$inject = [];
    function auditData() {
        return {
            data: {
                audits:[],
                created_at:"",
                error:0,
                id:0,
                keyword:"",
                percent :0,
                success:0,
                total:0,
                url:"",
                warning:0
            }
        }
    }
})();