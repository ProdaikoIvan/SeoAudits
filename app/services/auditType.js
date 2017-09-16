(function() {
    'use strict';

    angular
        .module('app')
        .factory('auditType', auditType);

    auditType.$inject = [];
    function auditType() {
        return ["mdc","pt","md","pus","iscsse","ia","ca","ht","kd","la","ls","plom","plod","psm","uta"];
    }
})();