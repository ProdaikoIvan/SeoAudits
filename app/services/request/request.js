(function () {
    'use strict';

    angular
        .module('app')
        .factory('request', request);

    request.$inject = ['$http', '$q', 'url'];

    function request($http, $q, url) {
        return {
            request: request
        };

        //responseType = 'arraybuffer';
        function request(urlPath, method, data, auth) {
            var defer = $q.defer();
            $http({
                method: method,
                url: urlPath,
                data: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + auth
                }
            }).then(function (data) {
                defer.resolve(data);
            }, function (dataError) {
                defer.reject(dataError);
            });
            return defer.promise;
        }
    }
})(); 