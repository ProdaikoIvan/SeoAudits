(function() {
    'use strict';

    angular
        .module('app')
        .factory('url', url);

        url.$inject = [];
    function url() {
        // var server = "https://seoapi.000webhostapp.com/api/web/v1/";
        //var server = "http://192.168.0.105/api/web/v1/";
        var server = "http://demo-artikel.de/api/web/v1/";
        return {
            login: server + 'users/login',
            signUp: server + 'users/signup',
            getPage: server + 'pages',
            getAudits: [
                server + 'pages/1/audits/mdc',
                server + 'pages/1/audits/pt',
                server + 'pages/1/audits/md',
                server + 'pages/1/audits/pus',
                server + 'pages/1/audits/iscsse',
                server + 'pages/1/audits/ia',
                server + 'pages/1/audits/ca',
                server + 'pages/1/audits/ht',
                server + 'pages/1/audits/kd',
                server + 'pages/1/audits/la',
                server + 'pages/1/audits/ls',
                server + 'pages/1/audits/plom',
                server + 'pages/1/audits/plod',
                server + 'pages/1/audits/psm',
                server + 'pages/1/audits/uta'
            ],


            setUrlId: function (id) {
                var auditsType = ["mdc","pt","md","pus","iscsse","ia","ca","ht","kd","la","ls","plom","plod","psm","uta"];
                this.getAudits.length = 0;
                this.getPage = server + 'pages'+ id;
                auditsType.forEach(function (item) {
                    this.getAudits.push(server + "pages/"+ id + /audits/ + item)
                }, this);
            }
        };
    }
})();