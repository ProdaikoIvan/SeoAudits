(function() {
    'use strict';

    angular
        .module('app')
        .factory('url', url);

        url.$inject = [];
    function url() {
        var server = "http://192.168.0.167/";
        return {
            login: server + 'login_custom',
            start: server + 'api/web/v1/pages',
            audit: [],
            test: 'services/request/request.json',
            test1: [
                'services/request/requests/post_pages.json',
                'services/request/requests/post_pages_1_audits_mdc.json',
                'services/request/requests/post_pages_1_audits_pt.json',
                'services/request/requests/post_pages_1_audits_md.json',
                'services/request/requests/post_pages_1_audits_pus.json',
                'services/request/requests/post_pages_1_audits_iscsse.json',
                'services/request/requests/post_pages_1_audits_ia.json',
                'services/request/requests/post_pages_1_audits_ca.json',
                'services/request/requests/post_pages_1_audits_ht.json',
                'services/request/requests/post_pages_1_audits_kd.json',
                'services/request/requests/post_pages_1_audits_la.json',
                'services/request/requests/post_pages_1_audits_ls.json',
                'services/request/requests/post_pages_1_audits_plom.json',
                'services/request/requests/post_pages_1_audits_plod.json',
                'services/request/requests/post_pages_1_audits_psm.json',
                'services/request/requests/post_pages_1_audits_uta.json'
            ],

            setUrlId: function (id) {
                var auditsType = ["mdc","pt","md","pus","iscsse","ia","ca","ht","kd","la","ls","plom","plod","psm","uta"];
                auditsType.forEach(function (item) {
                    this.audit.push(server + "api/web/v1/pages/"+ id + /audits/ + item)
                }, this);
                console.log(this.audit)
            }
        };
    }
})();