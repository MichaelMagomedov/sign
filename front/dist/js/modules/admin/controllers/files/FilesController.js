app.controller('FilesController', [
    '$scope', '$rootScope', 'SweetAlert', 'toast', '$accountService', '$fileService', '$contractUtils',
    '$cryptoService', '$rpcService', 'localStorageService', '$uibModal',
    function ($scope, $rootScope, SweetAlert, toast, $accountService, $fileService, $contractUtils,
              $cryptoService, $rpcService, localStorageService, $uibModal) {
        
        $scope.authInfo = $rootScope.authCredential;
        $scope.authInfo.balance = null;
        $scope.files = null;
        $rootScope.transactions = {};
        
        $scope.uploadFormObjObj = {
            methods: null,
            file: null,
            loading: false,
            showError: false
        };
        
        $scope.checkFormObjObj = {
            methods: null,
            file: null,
            address: null,
            loading: false,
            showError: false
        };
        
        $scope.resetForm = function (form) {
            form.loading = false;
            form.showError = false;
            form.methods.clearInput();
            return form;
        };
        
        $scope.checkSign = function (valid) {
            
            $scope.checkFormObj.showError = true;
            if (valid == false) {
                return;
            }
            $scope.checkFormObj.loading = true;
            var reader = new FileReader();
            
            reader.onload = function (event) {
                var md5 = CryptoJS.MD5(event.target.result).toString();
                $fileService.getAddress(md5).then(function (address) {
                    $fileService.getInfo(address).then(function (info) {
                        
                    });
                }).catch(function () {
                    SweetAlert.swal({
                        text: "File not found",
                        type: "warning",
                    });
                    $scope.checkFormObj = $scope.resetForm($scope.checkFormObj);
                    $scope.$apply();
                });
            };
            
            reader.readAsBinaryString($scope.checkFormObj.file[0]);
        };
        
        $scope.uploadFile = function (valid) {
            
            $scope.uploadFormObj.showError = true;
            if (valid == false) {
                return;
            }
            
            $scope.uploadFormObj.loading = true;
            var reader = new FileReader();
            
            reader.onload = function (event) {
                var md5 = CryptoJS.MD5(event.target.result).toString();
                $fileService.createNew(md5, $rootScope.authCredential).then(function (transaction) {
                    
                    SweetAlert.swal({
                        text: "Request to create file success!",
                        title: "Please white few minutes ",
                        type: "success",
                    });
                    
                    $rpcService.head().then(function (info) {
                        
                        var existTransactions = localStorageService.get('transactions');
                        existTransactions = existTransactions ? existTransactions : [];
                        existTransactions.unshift({
                            hash: transaction.hash,
                            info: null,
                            name: 'Upload file',
                            watchers: [],
                            broadcastChanel: 'fileTransactionClosed',
                            block: info.header.level
                        });
                        if (existTransactions.length > 10) {
                            existTransactions.splice(-1, 1);
                        }
                        localStorageService.set('transactions', existTransactions);
                        $rootScope.$broadcast('transactionsChanged', {});
                        
                    });
                    
                }).catch(function (response) {
                    
                    SweetAlert.swal({
                        text: $contractUtils.prepareErrorResponse(response),
                        title: "File not created",
                        type: "warning",
                    });
                    
                    $scope.uploadFormObj = $scope.resetForm($scope.uploadFormObj);
                    
                }).finally(function () {
                    $scope.refreshBalance();
                });
                
            };
            
            reader.readAsBinaryString($scope.uploadFormObj.file[0]);
        };
        
        $scope.refreshBalance = function () {
            $scope.authInfo.balance = null;
            $accountService.getBalance($scope.authInfo.pkh).then(function (balance) {
                $cryptoService.getCryptoPrice().then(function (usdPrice) {
                    $scope.authInfo.balance = ((balance / 1000000) * usdPrice).toFixed(3);
                });
            });
        };
        
        $scope.refreshFiles = function () {
            $fileService.getAll($scope.authInfo.pkh).then(function (files) {
                $scope.files = [];
                for (var i = 0; i < files.length; i++) {
                    $scope.files.push({
                        address: $contractUtils.decodeAddress(files[i].bytes)
                    });
                }
            });
        }
        
        $scope.copyAddress = function (e) {
            toast.info('Address copied!');
            e.clearSelection();
        };
        
        $rootScope.$on('fileTransactionClosed', function (event, errors) {
            
            $scope.refreshBalance();
            $scope.refreshFiles();
            $scope.uploadFormObj = $scope.resetForm($scope.uploadFormObj);
            
            if (!errors) {
                toast.success('File created!');
                return;
            }
            toast.error('File create fail! More information in operation info');
            
        });
        
        $scope.refreshBalance();
        $scope.refreshFiles();
    }
]);


