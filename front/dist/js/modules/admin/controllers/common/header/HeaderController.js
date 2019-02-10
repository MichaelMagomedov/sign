app.controller('HeaderController',
    ['$scope', '$rootScope', 'localStorageService', '$timeout', '$rpcService', '$contractUtils', '$uibModal',
        function ($scope, $rootScope, localStorageService, $timeout, $rpcService, $contractUtils, $uibModal) {
            
            $scope.transactions = [];
            
            $rootScope.$on('transactionsChanged', function () {
                $scope.replayTransactions();
                $timeout(function () {
                    $scope.$apply();
                }, 0)
            });
            
            $scope.updateTransactionInfo = function (hash, info) {
                var storageTransactions = localStorageService.get('transactions');
                storageTransactions = storageTransactions.map(function (transaction) {
                    if (transaction.hash == hash && transaction.info == null) {
                        transaction.watchers.forEach(function (watherId) {
                            window.clearInterval(watherId);
                        });
                        transaction.info = info;
                        transaction.watchers = [];
                        $rootScope.$broadcast(transaction.broadcastChanel, $contractUtils.findErrors(transaction.info));
                    }
                    return transaction;
                });
                localStorageService.set('transactions', storageTransactions);
                $scope.transactions = storageTransactions;
                $scope.checkInProcess();
            };
            
            $scope.checkInProcess = function () {
                $rootScope.transactionInProcess = false;
                localStorageService.get('transactions').some(function (storageTransaction) {
                    if (!storageTransaction.info) {
                        $rootScope.transactionInProcess = true;
                    }
                })
            };
            
            $scope.createTransactionWatcher = function (blockId, storageTransactionHash) {
                var intervalid = setInterval(function () {
                    $rpcService.getBlockInfo(blockId).then(function (blockInfo) {
                        blockInfo.forEach(function (transactions) {
                            transactions.forEach(function (transaction) {
                                if (transaction.hash == storageTransactionHash) {
                                    $scope.updateTransactionInfo(storageTransactionHash, transaction);
                                }
                            });
                        })
                    });
                }, 2000);
                
                return intervalid;
            };
            
            $scope.replayTransactions = function () {
                
                var storageTransactions = localStorageService.get('transactions');
                storageTransactions = storageTransactions ? storageTransactions : [];
                storageTransactions.forEach(function (storageTransaction, index) {
                    if (!storageTransaction.info) {
                        for (var i = -1; i <= 1; i++) {
                            var intervalId = $scope.createTransactionWatcher(
                                storageTransaction.block + i,
                                storageTransaction.hash
                            );
                            storageTransactions[index].watchers.push(intervalId);
                        }
                    }
                });
                
                localStorageService.set('transactions', storageTransactions);
                $scope.transactions = storageTransactions;
                $scope.checkInProcess();
            };
            
            $scope.logout = function () {
                localStorageService.remove('authCredential');
                window.location = '/auth';
            };
            
            $scope.clearAll = function () {
                
                localStorageService.get('transactions').forEach(function (transaction) {
                    transaction.watchers.forEach(function (watcherId) {
                        window.clearInterval(watcherId);
                    });
                });
                
                localStorageService.set('transactions', []);
                $scope.transactions = [];
                $scope.checkInProcess();
            };
            
            $scope.info = function (hash) {
                $uibModal.open({
                    controller: 'TransactionInfoController',
                    templateUrl: '/js/modules/admin/tpl/common/header/modal/transaction-info.tpl.html',
                    resolve: {
                         hash: function () {
                             return hash;
                         }
                    }
                });
            };
            
            $scope.replayTransactions();
        }
    ]
);