app.controller('TransactionInfoController',
    ['$scope', '$rootScope', '$uibModalInstance', 'localStorageService', 'hash',
        function ($scope, $rootScope, $uibModalInstance, localStorageService, hash) {
            
            
            $scope.transaction = localStorageService.get('transactions').filter(function (transaction) {
                return transaction.hash == hash;
            }).pop();
            
            $scope.close = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]
);