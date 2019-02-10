app.service('$fileService', [
    '$userFilesAddress', '$rpcService', '$allFilesAddress', '$contractUtils', '$tezosUrl', '$http', '$q', '$cryptoService',
    function ($userFilesAddress, $rpcService, $allFilesAddress, $contractUtils, $tezosUrl, $http, $q, $cryptoService) {
        return {
            
            getAll: function (address) {
                
                return $q(function (resolve, reject) {
                    $http({
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        data: {
                            "key": {
                                "string": address
                            },
                            "type": {
                                "prim": "address"
                            }
                        },
                        url: $tezosUrl + "/chains/main/blocks/head/context/contracts/" + $userFilesAddress + "/big_map_get"
                    }).then(function (response) {
                        resolve(response.data);
                    }, function (response) {
                        reject(response);
                    });
                });
                
            },
            getAddress: function (hash) {
                return $q(function (resolve, reject) {
                    $http({
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        data: {
                            "key": {
                                "string": hash
                            },
                            "type": {
                                "prim": "string"
                            }
                        },
                        url: $tezosUrl + "/chains/main/blocks/head/context/contracts/" + $allFilesAddress + "/big_map_get"
                    }).then(function (response) {
                        if (response.data && response.data.bytes) {
                            return resolve($contractUtils.decodeAddress(response.data.bytes));
                        }
                        reject();
                    }, function (response) {
                        reject(response);
                    });
                });
            },
            getInfo: function (address) {
                return $q(function (resolve, reject) {
                    eztz.contract.storage(address).then(function (info) {
                        var fileInfo = {
                            hash: info.args[0].string,
                            owner: info.args[1].args[0].string,
                            signs: info.args[1].args[1].args[0],
                            access: info.args[1].args[1].args[1]
                        };
                        
                        
                        resolve(fileInfo);
                    }).catch(function (error) {
                        reject(error);
                    });
                });
                
            },
            createNew: function (fileHash, keys) {
                return $q(function (resolve, reject) {
                    // default fee is 0.018 usd
                    $cryptoService.getCryptoPrice().then(function (usdPrice) {
                        $rpcService.info().then(function (info) {
                            
                            var fee = Math.floor((0.018 / usdPrice) * 1000000);
                            eztz.contract.send(
                                $userFilesAddress,
                                keys.pkh,
                                keys,
                                0,
                                '(Left (Pair "' + fileHash + '" "' + keys.pkh + '"))',
                                fee,
                                info.hard_gas_limit_per_operation,
                                info.hard_storage_limit_per_operation
                            ).then(function (resp) {
                                resolve(resp);
                            }).catch(function (err) {
                                reject(err);
                            });
                            
                        });
                    });
                });
            },
            sign: function (address, keys) {
                return $q(function (resolve, reject) {
                    // default fee is 0.018 usd
                    $cryptoService.getCryptoPrice().then(function (usdPrice) {
                        $rpcService.info().then(function (info) {
                            
                            var fee = Math.floor((0.018 / usdPrice) * 1000000);
                            eztz.contract.send(
                                address,
                                keys.pkh,
                                keys,
                                0,
                                '(Right (Left (Unit)))',
                                fee,
                                info.hard_gas_limit_per_operation,
                                info.hard_storage_limit_per_operation
                            ).then(function (resp) {
                                resolve(resp);
                            }).catch(function (err) {
                                reject(err);
                            });
                            
                        });
                    });
                });
            }
        }
    },
]);
