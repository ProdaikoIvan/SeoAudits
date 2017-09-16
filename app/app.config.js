angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/create');
            $stateProvider
                .state('create', {
                    url: '/create',
                    templateUrl: 'templates/createAudit/createAudit.template.html',
                    controller: 'createAuditCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        requestData: function (request, url) {
                            return "Audit"
                            // return request.request(url.test).then(function (data) {
                            //     return data;
                            // });
                        }
                    }
                })
                .state('result', {
                    url: '/result',
                    templateUrl: 'templates/resultAudit/resultAudit.template.html',
                    controller: 'resultAuditCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        requestData: function (request, url) {
                            return request.request(url.test1[0], 'GET').then(function (data) {
                                return data;
                            });
                        }
                    }
                });
        }
    ]);

