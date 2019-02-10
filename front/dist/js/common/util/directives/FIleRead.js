app.directive("fileRead", [function () {
    return {
        restrict: 'A',
        scope: {
            fileModel: "=?",
            methods: "=?"
        },
        link: function (scope, element, attributes) {
            
            scope.methods = (scope.methods != undefined) ? scope.methods : {};
            
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.fileModel = changeEvent.target.files;
                });
            });
            
            scope.methods = {
                clearInput: function () {
                    scope.fileModel = null;
                    angular.element(element).val(null);
                }
            }
        }
    }
}]);