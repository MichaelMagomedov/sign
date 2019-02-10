app.service('$rpcService', [
    '$tezosUrl', '$http', '$q',
    function ($tezosUrl, $http, $q) {
        return {
            info: function () {
                return $q(function (resolve, reject) {
                    $http({
                        method: 'GET',
                        headers: {'Content-Type': 'application/json'},
                        url: $tezosUrl + "/chains/main/blocks/head/context/constants"
                    }).then(function (response) {
                        resolve(response.data);
                    }, function (response) {
                        reject(response);
                    });
                });
                
            },
            head: function () {
                return eztz.rpc.getHead();
            },
            getBlockInfo: function (blockId) {
                return eztz.node.query("/chains/main/blocks/" + blockId + "/operations");
            }
        }
    },
]);
