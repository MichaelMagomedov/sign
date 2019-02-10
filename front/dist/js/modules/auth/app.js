var app = angular.module('auth', [
    'ui.router',
    'LocalStorageModule',
    'ngMessages',
    'oitozero.ngSweetAlert',
    'oc.lazyLoad'
]).config([
    
    '$stateProvider', '$urlRouterProvider', '$componentLoaderProvider','localStorageServiceProvider',
    '$httpProvider', '$qProvider', '$locationProvider', '$guestFilterProvider',
    function ($stateProvider, $urlRouterProvider, $componentLoaderProvider,localStorageServiceProvider,
              $httpProvider, $qProvider, $locationProvider, $guestFilterProvider) {
        
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        localStorageServiceProvider.setPrefix('sign');
        $qProvider.errorOnUnhandledRejections(false);
        $httpProvider.interceptors.push('$requestProvider');
        
        
        $stateProvider.state('authentication', {
            url: '/',
            templateUrl: '/js/modules/auth/tpl/authentication.tpl.html',
            controller: 'AuthenticationController',
            resolve: {
                cryptoJs: $componentLoaderProvider.cryptoJs,
                guestFilterProvider: $guestFilterProvider.checkAuth
            }
        });
        
        $stateProvider.state('registration', {
            url: '/registration',
            templateUrl: '/js/modules/auth/tpl/registration.tpl.html',
            controller: 'RegistrationController',
            resolve: {
                cryptoJs: $componentLoaderProvider.cryptoJs,
                fileSaver: $componentLoaderProvider.fileSaver,
                guestFilterProvider: $guestFilterProvider.checkAuth
            }
        });
        
        $stateProvider.state('restore', {
            url: '/restore',
            templateUrl: '/js/modules/auth/tpl/restore.tpl.html',
            resolve: {
                guestFilterProvider: $guestFilterProvider.checkAuth
            }
        });
    }

]).run([
    
    '$rootScope', '$tezosUrl',
    function ($rootScope, $tezosUrl) {
        eztz.node.setDebugMode(true);
        eztz.node.setProvider($tezosUrl);
    }

]);
