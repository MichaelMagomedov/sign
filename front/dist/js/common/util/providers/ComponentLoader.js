app.provider('$componentLoader', ['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
        modules: [
            {
                name: "ngclipboard",
                files: [
                    '/node_modules/clipboard/dist/clipboard.min.js',
                    '/node_modules/ngclipboard/dist/ngclipboard.min.js',
                ],
                serie: true
            },
            {
                name: "tooltips",
                files: [
                    '/node_modules/angularjs-tooltips/dist/angular-tooltips.min.js',
                    '/node_modules/angularjs-tooltips/dist/angular-tooltips.min.css',
                ],
            }
        ]
    });
    
    var loader = {
        
        /** нет необходимоси вохваращть что то. так сервис используется только в config*/
        $get: function () {
            return "$componentLoaderProvider";
        },
        cryptoJs: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
                files: [
                    '/node_modules/crypto-js/crypto-js.js'
                ]
            });
        }],
        fileSaver: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
                files: [
                    '/node_modules/file-saver/dist/FileSaver.min.js'
                ]
            });
        }],
        copyClipboard: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load('ngclipboard');
        }],
        fileIcon: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
                files: [
                    '/node_modules/css-file-icons/build/css-file-icons.css',
                ],
            });
        }],
        tooltips: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load('tooltips');
        }],
    };
    
    return loader;
}]);