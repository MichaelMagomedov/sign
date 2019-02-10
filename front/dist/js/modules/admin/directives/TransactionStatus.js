app.directive("transactionStatus", ['$contractUtils', function ($contractUtils) {
    return {
        restrict: 'E',
        scope: {
            info: "=",
            errors: "=?",
        },
        template: "{{ status }}",
        link: function (scope, element, attributes) {
            
            scope.errors = [];
            scope.$watch('info', function () {
                scope.errors = [];
                
                if (!scope.info) {
                    return scope.status = "in process"
                }
                
                var errors = $contractUtils.findErrors(scope.info);
                if (errors) {
                    errors.forEach(function (error) {
                        var text = error.with ? error.with.string : $contractUtils.decodeError(error.id);
                        scope.errors.push(text);
                    });
                    return scope.status = "faill"
                }
                
                return scope.status = "success"
            })
        }
    }
}]);