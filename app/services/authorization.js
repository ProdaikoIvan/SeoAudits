(function () {
    'use strict';

    angular
        .module('app')
        .factory('authorization', authorization);

    authorization.$inject = ['localStorageService', '$state'];

    function authorization(localStorageService, $state) {
        return {
            setAuthKey: setAuthKey,
            getAuthKey: getAuthKey,
            checkAccess: checkAccess
        };

        function setAuthKey(authkey) {
            if (localStorageService.isSupported) {
                return localStorageService.set('auth', authkey);
            }
        }

        function getAuthKey() {
            if (localStorageService.isSupported) {
                return localStorageService.get('auth');
            }
        }

        function checkAccess(event, toState, toParams, fromState, fromParams) {
            var localStr;
            if (localStorageService.isSupported) {
                localStr = localStorageService.get('auth');
            }
            if (toState.data !== undefined) {
                if (toState.data.noLogin !== undefined && toState.data.noLogin) {
                    // если нужно, выполняйте здесь какие-то действия
                    // перед входом без авторизации
                }
                else{
                    event.preventDefault();
                    $state.go('login');
                }
            }
            else {
                if (!localStr) {
                    event.preventDefault();
                    $state.go('login');
                }
            }
        }
    }
})();