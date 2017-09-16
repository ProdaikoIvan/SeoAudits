(function () {
    'use strict'; 

    angular
        .module('app')
        .factory('request', request); 

        request.$inject = ['$http', '$q', 'url'];
    function request($http, $q, url) {
        return{
            request:request
        }; 
        
       

        ////////////////
        function request(urlPath, method) {
            var defer = $q.defer();
            $http({
                method: method,
                url: urlPath,
                dataType: 'json'
            }).then(function (data) {
                defer.resolve(data);
            },function (dataError) {
                defer.reject(dataError);
            });
            return defer.promise;
        }
            
    }
})(); 