(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['request', 'url', 'authorization', '$state'];

    function loginCtrl(request, url, authorization, $state) {
        var vm = this;

        vm.loginIsError = false;
        vm.registrationIsError = false;
        vm.loginErrorMessage = "Login and password do not match";
        vm.registrationMessage = "The data is incorrect";

        vm.signIn = signIn;
        vm.signUp = signUp;
        vm.login = {
            username: '',
            password: ''
        };
        vm.registration = {
            username: '',
            password: ''
        };

        function signIn() {
            request.request(url.login, 'POST', vm.login).then(function (data) {
                vm.loginIsError = false;
                if (authorization.setAuthKey(data.data.auth_key)) {
                    $state.go('create');
                }
            }, function (data) {
                vm.loginIsError = true;
            });
        }

        function signUp() {
            request.request(url.signUp, 'POST', vm.registration).then(function (data) {
                console.log(data);
                if (data.data === 'true') {
                    vm.registrationIsError = false;
                    $('#loginTabs a:first').tab('show');
                    vm.login = angular.copy(vm.registration);
                }
            }, function (err) {
                vm.registrationIsError = true;
                console.log('err', err);
            });
        }
    }
})();