app.controller('AuthenticationController', [
    '$scope', '$rootScope', '$stringCrypt', 'SweetAlert', 'localStorageService', '$accountService',
    function ($scope, $rootScope, $stringCrypt, SweetAlert, localStorageService, $accountService) {
        
        $scope.showError = false;
        $scope.fileInput = {};
        $scope.user = {
            password: null,
            key: null,
            file: null
        };
        
        var checkKey = function (key, pass) {
            
            try {
                
                var seed = $stringCrypt.decrypt(key, pass);
                if (!seed) {
                    throw new Error("auth error");
                }
                
                var authCredential = $accountService.generateKeys(seed, pass);
                localStorageService.set('authCredential', authCredential);
                
                window.location.href = "/admin"
                
            } catch (e) {
                
                SweetAlert.swal({
                    text: "key or password wrong",
                    title: "Error",
                    type: "warning",
                }, function () {
                    
                    $scope.fileInput.clearInput();
                    $scope.user = {
                        password: null,
                        key: null,
                        file: null
                    };
                });
            }
        };
        
        $scope.login = function (valid) {
            
            if (!valid || (!$scope.user.file && !$scope.user.key)) {
                return $scope.showError = true;
            }
            
            if ($scope.user.key) {
                checkKey($scope.user.key, $scope.user.password)
            } else {
                var reader = new FileReader();
                reader.onload = function () {
                    checkKey(reader.result, $scope.user.password)
                };
                reader.readAsText($scope.user.file[0]);
            }
            
            
        }
    }

]);

