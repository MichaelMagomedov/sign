app.service('$responseErrorFn', ['SweetAlert', function (SweetAlert) {
    return {
        error: function (message) {
            SweetAlert.swal({
                title: "Ooops..",
                text: message,
                icon: "warning",
            });
        }
    }
}]);
