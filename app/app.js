(function () {
    'use strict';

    angular.module('app', [
        "ui.router",
        "ui.router.state.events",
        "chart.js",
        "ngSanitize",
        "LocalStorageModule"
    ])
        .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
            localStorageServiceProvider
                .setPrefix('SeoAudit')
                .setStorageType('sessionStorage');

        }])

        .run([
            '$rootScope', '$state', '$stateParams', 'authorization',
            function ($rootScope, $state, $stateParams, authorization) {

                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                $rootScope.user = null;
                // Здесь мы будем проверять авторизацию
                $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                    authorization.checkAccess(event, toState, toParams, fromState, fromParams);
                });
            }]);
})();

