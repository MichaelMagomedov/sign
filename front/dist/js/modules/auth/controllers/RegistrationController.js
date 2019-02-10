app.controller('RegistrationController', [
    '$scope', '$state', '$rootScope', 'SweetAlert', '$stringCrypt', '$accountService',
    function ($scope, $state, $rootScope, SweetAlert, $stringCrypt, $accountService) {
        
        $scope.showError = false;
        $scope.user = {
            password: null,
            repassword: null
        };
        
        $scope.registration = function (valid) {
            
            if ($scope.user.password != $scope.user.repassword) {
                valid = false;
            }
            
            if (!valid) {
                $scope.showError = true;
                return
            }
            
            var key = $stringCrypt.encrypt($accountService.getMnemonic(), $scope.user.password);
            
            
            SweetAlert.swal({
                type: "success",
                title: "Account create successful!",
                text: "now download your crypto key and authenticate with him",
                confirmButtonText: "Download",
                confirmButtonColor: "#3c8dbc"
            }, function () {
                var blob = new Blob([key], {type: "text/plain;charset=utf-8"});
                saveAs(blob, "key.txt");
                $state.go('restore');
            });
        }
    }

]);