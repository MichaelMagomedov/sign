var app = angular.module('admin', [
    'ui.router',
    'LocalStorageModule',
    'ui.bootstrap',
    'ngMessages',
    'jsonFormatter',
    'ngSimpleToast',
    'oitozero.ngSweetAlert',
    'oc.lazyLoad'
]).config([
    
    '$stateProvider', '$urlRouterProvider', '$componentLoaderProvider', 'localStorageServiceProvider',
    '$httpProvider', '$qProvider', '$authFilterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $componentLoaderProvider, localStorageServiceProvider,
              $httpProvider, $qProvider, $authFilterProvider, $locationProvider) {
        
        $urlRouterProvider.otherwise('/files');
        $locationProvider.html5Mode(true);
        localStorageServiceProvider.setPrefix('sign');
        $qProvider.errorOnUnhandledRejections(false);
        $httpProvider.interceptors.push('$requestProvider');
        
        
        $stateProvider.state('files', {
            url: '/files',
            templateUrl: '/js/modules/admin/tpl/files/files.tpl.html',
            controller: 'FilesController',
            resolve: {
                cryptoJs: $componentLoaderProvider.cryptoJs,
                fileIcon: $componentLoaderProvider.fileIcon,
                authFilterProvider: $authFilterProvider.checkAuth,
                copyClipboard: $componentLoaderProvider.copyClipboard,
                tooltips: $componentLoaderProvider.tooltips
            }
        });
        
    }

]).run([
    
    '$rootScope', '$window', '$appVersion', 'localStorageService', '$tezosUrl',
    function ($rootScope, $window, $appVersion, localStorageService, $tezosUrl) {
        $rootScope.appVersion = $appVersion;
        $rootScope.authCredential = localStorageService.get('authCredential');
        $rootScope.transactionInProcess = false;
        eztz.node.setProvider($tezosUrl);
        eztz.node.setDebugMode(false);
    }

]);
