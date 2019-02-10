app.service('$cryptoService', ['$http', '$q', function ($http, $q) {
    return {
        getCryptoPrice: function () {
            return $q(function (resolve, reject) {
                $http({
                    method: 'GET',
                    url: 'https://api.cryptonator.com/api/ticker/tz-usd'
                }).then(function (response) {
                    resolve(response.data.ticker.price);
                }, function (response) {
                    reject(response);
                });
                // resolve(0.36);
            });
        }
        
    }
}]);
