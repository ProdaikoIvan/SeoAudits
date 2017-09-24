(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataLoaded', dataLoaded);

    dataLoaded.$inject = ['request', 'url', 'auditData'];

    function dataLoaded(request, url, auditData) {

        return {
            autoLoad: autoLoad
        };

        function autoLoad() {
            auditData.data.audits.length = 0;
            auditData.data.total = 0;
            auditData.data.success = 0;
            auditData.data.warning = 0;
            auditData.data.error = 0;

            //
            // request.request(url.test, 'GET').then(function (data) {
            //     console.warn(data);
            //     auditData.data = data.data;
            //     // url.setUrlId(1);
            // }, function (err) {
            //     console.warn(err)
            // });





            request.request(url.test1[1], 'GET').then(function (data) {
                dataCounting(data.data);
                // auditData.data.audits.push(data.data);

                request.request(url.test1[2], 'GET').then(function (data) {
                    dataCounting(data.data);
                    // auditData.data.audits.push(data.data);

                    request.request(url.test1[3], 'GET').then(function (data) {
                        dataCounting(data.data);
                        // auditData.data.audits.push(data.data);

                        request.request(url.test1[4], 'GET').then(function (data) {
                            dataCounting(data.data);
                            // auditData.data.audits.push(data.data);

                            request.request(url.test1[5], 'GET').then(function (data) {
                                dataCounting(data.data);
                                // auditData.data.audits.push(data.data);

                                request.request(url.test1[6], 'GET').then(function (data) {
                                    dataCounting(data.data);
                                    // auditData.data.audits.push(data.data);

                                    request.request(url.test1[7], 'GET').then(function (data) {
                                        dataCounting(data.data);
                                        // auditData.data.audits.push(data.data);

                                        request.request(url.test1[8], 'GET').then(function (data) {
                                            dataCounting(data.data);
                                            // auditData.data.audits.push(data.data);

                                            request.request(url.test1[9], 'GET').then(function (data) {
                                                dataCounting(data.data);
                                                // auditData.data.audits.push(data.data);

                                                request.request(url.test1[10], 'GET').then(function (data) {
                                                    dataCounting(data.data);
                                                    // auditData.data.audits.push(data.data);

                                                    request.request(url.test1[11], 'GET').then(function (data) {
                                                        dataCounting(data.data);
                                                        // auditData.data.audits.push(data.data);

                                                        request.request(url.test1[12], 'GET').then(function (data) {
                                                            dataCounting(data.data);
                                                            // auditData.data.audits.push(data.data);

                                                            request.request(url.test1[13], 'GET').then(function (data) {
                                                                dataCounting(data.data);
                                                                // auditData.data.audits.push(data.data);

                                                                request.request(url.test1[14], 'GET').then(function (data) {
                                                                    dataCounting(data.data);
                                                                    // auditData.data.audits.push(data.data);

                                                                    request.request(url.test1[15], 'GET').then(function (data) {
                                                                        dataCounting(data.data);
                                                                        // auditData.data.audits.push(data.data);

                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            });
        }

        function dataCounting(data) {
            auditData.data.audits.push(data);
            var success = data.criterias.length - (data.warning + data.error);
            auditData.data.total += data.warning + data.error + success;
            auditData.data.success += success;
            auditData.data.warning += data.warning;
            auditData.data.error += data.error;
            auditData.data.percent = ((auditData.data.success/auditData.data.total) * 100).toFixed(1);
        }
    }
})();