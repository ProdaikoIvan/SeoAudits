(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataLoaded', dataLoaded);

    dataLoaded.$inject = ['request', 'url', 'auditData', 'authorization', '$rootScope'];

    function dataLoaded(request, url, auditData, authorization, $rootScope) {

        return {
            autoLoad: autoLoad
        };

        function autoLoad() {
            $rootScope.loaderFlag = true;
            var auth_key = authorization.getAuthKey();

            auditData.data.audits.length = 0;
            auditData.data.total = 0;
            auditData.data.success = 0;
            auditData.data.warning = 0;
            auditData.data.error = 0;


            request.request(url.getAudits[0], 'POST', null, auth_key).then(function (data) {
                return dataCounting(data.data);
            }).then(function () {
                return request.request(url.getAudits[1], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[2], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[3], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[4], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[5], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[6], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[7], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[8], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[9], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[10], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[11], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[12], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[13], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                return request.request(url.getAudits[14], 'POST', null, auth_key).then(function (data) {
                    return dataCounting(data.data);
                });
            }).then(function () {
                $rootScope.loaderFlag = false;
            }).catch(function (error) {
                console.log(error);
                $rootScope.loaderFlag = false;
            });
        }

        function dataCounting(data) {
            auditData.data.audits.push(data);
            var success = data.criterias.length - (data.warning + data.error);
            auditData.data.total += data.warning + data.error + success;
            auditData.data.success += success;
            auditData.data.warning += data.warning;
            auditData.data.error += data.error;
            auditData.data.percent = ((auditData.data.success / auditData.data.total) * 100).toFixed(1);
        }
    }
})();