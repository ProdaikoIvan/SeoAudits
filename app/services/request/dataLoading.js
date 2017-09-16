(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataLoaded', dataLoaded);

    dataLoaded.$inject = ['request', 'url',  'auditData'];
    function dataLoaded(request, url,  auditData) {

        return {
            autoLoad:autoLoad
        };

        function autoLoad(){
            request.request(url.start, 'POST').then(function (data) {
                console.log(data);
                url.setUrlId(1);
            });



            auditData.data.audits.length = 0;

            request.request(url.test1[1], 'GET').then(function (data) {
                auditData.data.audits.push(data.data);

                request.request(url.test1[2], 'GET').then(function (data) {
                    auditData.data.audits.push(data.data);

                    request.request(url.test1[3], 'GET').then(function (data) {
                        auditData.data.audits.push(data.data);

                        request.request(url.test1[4], 'GET').then(function (data) {
                            auditData.data.audits.push(data.data);

                            request.request(url.test1[5], 'GET').then(function (data) {
                                auditData.data.audits.push(data.data);

                                request.request(url.test1[6], 'GET').then(function (data) {
                                    auditData.data.audits.push(data.data);

                                    request.request(url.test1[7], 'GET').then(function (data) {
                                        auditData.data.audits.push(data.data);

                                        request.request(url.test1[8], 'GET').then(function (data) {
                                            auditData.data.audits.push(data.data);

                                            request.request(url.test1[9], 'GET').then(function (data) {
                                                auditData.data.audits.push(data.data);

                                                request.request(url.test1[10], 'GET').then(function (data) {
                                                    auditData.data.audits.push(data.data);

                                                    request.request(url.test1[11], 'GET').then(function (data) {
                                                        auditData.data.audits.push(data.data);

                                                        request.request(url.test1[12], 'GET').then(function (data) {
                                                            auditData.data.audits.push(data.data);

                                                            request.request(url.test1[13], 'GET').then(function (data) {
                                                                auditData.data.audits.push(data.data);

                                                                request.request(url.test1[14], 'GET').then(function (data) {
                                                                    auditData.data.audits.push(data.data);

                                                                    request.request(url.test1[15], 'GET').then(function (data) {
                                                                        auditData.data.audits.push(data.data);

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


            console.log(auditData.data);
        }
    }
})();