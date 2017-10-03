angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/login');
            $stateProvider

                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login/login.template.html',
                    controller: 'loginCtrl',
                    controllerAs: 'vm',
                    data: {
                        'noLogin': true
                    }
                })
                .state('create', {
                    url: '/create',
                    templateUrl: 'templates/createAudit/createAudit.template.html',
                    controller: 'createAuditCtrl',
                    controllerAs: 'vm'
                })
                .state('result', {
                    url: '/result',
                    templateUrl: 'templates/resultAudit/resultAudit.template.html',
                    controller: 'resultAuditCtrl',
                    controllerAs: 'vm'
                });
        }
    ]);

