(function () {
    'use strict';

    angular
        .module('app')
        .factory('categoriesAudit', categoriesAudit);

    categoriesAudit.$inject = ['auditData'];

    function categoriesAudit(auditData) {
        return {
            categories: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
            changeCategory: changeCategory,
            categoriesType: ['total', 'check', 'warning', 'error']
        };


        ////////////////
        function changeCategory(categoryType) {
            switch (categoryType) {
                case this.categoriesType[0]:
                    this.categories.length = 0;
                    auditData.data.audits.forEach(function () {
                        this.categories.push(true);
                    },this);
                    break;
                case this.categoriesType[1]:
                    this.categories.length = 0;
                    auditData.data.audits.forEach(function (item) {
                        var res = item.percent === 100;
                        this.categories.push(res);
                    },this);
                    break;
                case this.categoriesType[2]:
                    this.categories.length = 0;
                    auditData.data.audits.forEach(function (item) {
                        var res = item.warning > 0;
                        this.categories.push(res);
                    },this);
                    break;
                case this.categoriesType[3]:
                    this.categories.length = 0;
                    auditData.data.audits.forEach(function (item) {
                        var res = item.error > 0;
                        this.categories.push(res);
                    },this);
                    break;
            }
            console.log(auditData.data);
        }
    }
})();