app.controller('FileInfoController',
    ['$scope', '$rootScope', '$uibModalInstance', '$fileService', 'fileAddress',
        function ($scope, $rootScope, $uibModalInstance, $fileService, fileAddress) {
            
            $scope.file = null;
            
            $fileService.getInfo(fileAddress).then(function (file) {
                $scope.file = file;
                $scope.file.address = fileAddress;
            });
            
            $scope.sign = function () {
                $uibModalInstance.close('sign')
            };
    
            
            $scope.close = function () {
                $uibModalInstance.dismiss('cancel');
            };
            
        }
    ]
);