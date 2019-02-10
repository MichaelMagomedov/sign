app.directive("file", ['$fileService', '$rootScope', '$uibModal', 'localStorageService', 'SweetAlert', '$contractUtils', '$rpcService', 'toast',
    function ($fileService, $rootScope, $uibModal, localStorageService, SweetAlert, $contractUtils, $rpcService, toast) {
        return {
            restrict: 'E',
            scope: {
                address: "=",
                onSign: "=",
            },
            templateUrl: "/js/modules/admin/tpl/directives/file.tpl.html",
            link: function (scope) {
                
                scope.fileInfo = null;
                scope.loading = true;
                
                scope.loadFileInfo = function () {
                    scope.fileInfo = null;
                    scope.loading = true;
                    
                    $fileService.getInfo(scope.address).then(function (info) {
                        scope.loading = false;
                        scope.fileInfo = info;
                        scope.fileInfo.address = scope.address;
                        scope.fileInfo.signed = scope.fileInfo.signs.filter(function (sign) {
                            return sign.string == $rootScope.authCredential.pkh
                        }).length > 0;
                    })
                };
                
                scope.$watch('address', function () {
                    scope.loadFileInfo();
                });
                
                scope.openInfoModal = function () {
                    $uibModal.open({
                        controller: 'FileInfoController',
                        templateUrl: '/js/modules/admin/tpl/files/modal/file-info.tpl.html',
                        resolve: {
                            fileAddress: function () {
                                return scope.address;
                            }
                        }
                    }).result.then(function (operation) {
                        
                        if (operation == 'sign') {
                            scope.loading = true;
                            $fileService.sign(scope.address, $rootScope.authCredential).then(function (transaction) {
                                
                                SweetAlert.swal({
                                    text: "Request to sign file success!",
                                    title: "Please white few minutes ",
                                    type: "success",
                                });
                                
                                $rpcService.head().then(function (info) {
                                    
                                    var existTransactions = localStorageService.get('transactions');
                                    existTransactions = existTransactions ? existTransactions : [];
                                    existTransactions.unshift({
                                        hash: transaction.hash,
                                        info: null,
                                        name: 'sign file',
                                        watchers: [],
                                        broadcastChanel: scope.address+"-sign",
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
                                    title: "File not signed",
                                    type: "warning",
                                });
                                scope.loading = false;
    
                            }).finally(function () {
                                scope.onSign();
                            });
                            
                        }
                    });
                };
                
                $rootScope.$on(scope.address+"-sign", function (event, errors) {
    
                    scope.loading = false;
    
                    if (!errors) {
                        toast.success('File signed!');
                        scope.onSign();
                        scope.loadFileInfo();
                        return;
                    }
    
                    toast.error('File sign fail! More information in operation info');
                    
                });
                
            }
        }
    }]);