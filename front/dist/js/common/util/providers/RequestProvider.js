/**
 * если не передана функция обработчик то срабатывает дефолтная оьбрабока ошибки
 */
app.factory('$requestProvider', [
    '$q', '$injector', '$appVersion',
    function ($q, $injector, $appVersion) {
        var requestCount = 0;
        
        return {
            
            request: function (config) {
                
                var $rootScope = $injector.get('$rootScope');
                requestCount++;
                
                if (!$rootScope.disableSpinner) {
                    $rootScope.isLoading = true;
                }
                
                if (config.url.indexOf(".tpl.html") !== -1) {
                    config.params = config.params || {};
                    config.params.version = $appVersion;
                }
                
                return config;
            },
            
            response: function (response) {
                requestCount--;
                var $rootScope = $injector.get('$rootScope');
                if (!$rootScope.disableSpinner && requestCount == 0) {
                    $rootScope.isLoading = false;
                }
                return response;
            },
            
            responseError: function (rejection) {
                var $rootScope = $injector.get('$rootScope'),
                    $state = $injector.get('$state');
                
                requestCount--;
                if (!$rootScope.disableSpinner && requestCount == 0) {
                    $rootScope.isLoading = false;
                }
                var errorFn = $injector.get('$responseErrorFn');
                
                if (rejection.status < 200) {
                    errorFn.error('Неизвестаня ошибка сервера');
                }
    
                if (rejection.status > 399 && rejection.status != 401) {
                    errorFn.error(rejection.data.message);
                }
                
                
                if (rejection.status == 401) {
                    $rootScope.userAuth = false;
                    errorFn.error('Ошибка авторизации');
                    $state.go('authentication')
                }
                
                return $q.reject(rejection);
            }
        };
    }
]);
