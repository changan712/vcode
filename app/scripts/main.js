'use strict';
//less.watch();
require.config({
    paths: {
        angular: '/bower_components/angular/angular.min',
        'ui-router': '/bower_components/ui-router/release/angular-ui-router.min',
        'ui-bootstrap': '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        ngResource: '/bower_components/angular-resource/angular-resource.min',
        md5: '/bower_components/angular-md5/angular-md5.min',
        jquery: '/bower_components/jquery/dist/jquery.min',
        prettify: '../lib/prettify/prettify'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'ui-bootstrap-tpl': ['angular'],
        'ui-router': ['angular'],
        'ui-bootstrap': ['angular'],
        oclazyload: ['angular'],
        ngResource: ['angular'],
        md5: ['angular']

    },
    map: {
        '*': {
            css: '/bower_components/require-css/css'
        }
    }
});
require([
    'angular',
    'app',
    'jquery',
    'service/routeResolver'
], function (angular, app) {
    app.run(['$rootScope', '$state', '$http', '$stateParams', '$anchorScroll', 'userSev', 'loginModalSev', function ($rootScope, $state, $http, $stateParams, $anchorScroll, userSev, loginModalSev) {
        var rootvm = $rootScope.rootvm = {};
        $rootScope.user = userSev;
        $rootScope.$state = $state;
        rootvm.isCollapsed = true;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeStart', function (event, to, toParams, from, fromParams) {
            rootvm.isCollapsed = true;
            if (to.auth == 1 && !$rootScope.user.logined) {
                $rootScope.$broadcast('loginneeded', to);
                $rootScope.toGoState = to.name;
                event.preventDefault();
            } else {
                $rootScope.toGoState = '';
                // $rootScope.pageId = '';
            }
            if ($rootScope.user.logined) {
                $http.get('/user/islogin').success(function (res) {
                    if (res.errcode !== 0) {
                        loginModalSev.logout();
                    }
                })
            }
        });


    }]);

    app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function ($httpProvider, $stateProvider, $urlRouterProvider) {
        $httpProvider.interceptors.push('myInterceptor');
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'views/index.html',
                controller: 'indexCtrl'
            })
            //demo
            .state('demo', {
                url: '/demo',
                abstract: true,
                templateUrl: 'views/demo/index.html'
            })
            .state('demo.pic', {
                url: '/pic',
                abstract: true,
                templateUrl: 'views/demo/pic/index.html',
                controller: 'demoPicCtrl'
            })
            .state('demo.pic.layerbox', {
                url: '/layerbox',
                templateUrl: 'views/demo/pic/layerbox.html',
                controller: 'demoPicLayerboxCtrl'
            })
            .state('demo.pic.alert', {
                url: '/alert',
                templateUrl: 'views/demo/pic/alert.html',
                controller: 'demoPicAlertCtrl'
            })
            .state('demo.pic.min', {
                url: '/min',
                templateUrl: 'views/demo/pic/min.html',
                controller: 'demoPicMinCtrl'
            })
            .state('demo.pic.min2', {
                url: '/min2',
                templateUrl: 'views/demo/pic/min2.html',
                controller: 'demoPicMin2Ctrl'
            })
            .state('demo.pic.embed', {
                url: '/embed',
                templateUrl: 'views/demo/pic/embed.html',
                controller: 'demoPicEmbedCtrl'
            })
            //docs
            .state('docs', {
                url: '/docs',
                abstract: true,
                templateUrl: 'views/docs/index.html'
            })
            .state('docs.pic', {
                url: '/pic',
                abstract: true,
                templateUrl: 'views/docs/pic/index.html',
                controller: 'docsPicCtrl'
            })
            .state('docs.pic.guide', {
                url: '/guide',
                templateUrl: 'views/docs/pic/guide.html',
                controller: 'docsPicGuideCtrl'
            })
            .state('docs.pic.api', {
                url: '/api',
                templateUrl: 'views/docs/pic/api.html',
                controller: 'docsPicApiCtrl'
            })
            .state('docs.pic.sdk', {
                url: '/sdk',
                templateUrl: 'views/docs/pic/sdk.html',
                controller: 'docsPicSdkCtrl'
            })

            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'views/404.html',
                controller: '404Ctrl'
            })
            .state('forgotpwd', {
                url: '/forgotpwd',
                templateUrl: 'views/forgotpwd.html',
                controller: 'forgotPwdCtrl'
            })

            .state('resetpwd', {
                url: '/resetpwd',
                templateUrl: 'views/resetpwd.html',
                controller: 'resetPwdCtrl'
            })
            .state('management', {
                url: '/management',
                template: '<ui-view></ui-view>',
                controller: 'manageCtrl',
                abstract: true
            })
            //management.developer;
            .state('management.developer', {
                url: '/developer',
                templateUrl: 'views/management/developer/index.html',
                abstract: true
            })
            .state('management.developer.info', {
                url: '/info',
                templateUrl: 'views/management/developer/info.html',
                auth: 1,
                controller: 'manageDevInfoCtrl'
            })
            .state('management.developer.msg', {
                url: '/msg',
                templateUrl: 'views/management/developer/msg.html',
                auth: 1,
                controller: 'manageDevMsgCtrl'
            })
            .state('management.developer.modpwd', {
                url: '/modpwd',
                templateUrl: 'views/management/developer/modpwd.html',
                auth: 1,
                controller: 'manageDevModPwdCtrl'
            })
            //management.application;
            .state('management.application', {
                url: '/application',
                templateUrl: 'views/management/application/index.html',
                abstract: true
            })
            .state('management.application.adm', {
                url: '/adm',
                templateUrl: 'views/management/application/adm.html',
                auth: 1,
                controller: 'manageAppAdmCtrl'
            })
            .state('management.application.edit', {
                url: '/edit/:method',
                templateUrl: 'views/management/application/edit.html',
                auth: 1,
                controller: 'manageAppEditCtrl'
            })
            //management.statistic;
            .state('management.statistic', {
                url: '/statistic',
                auth: 1,
                templateUrl: 'views/management/statistic/index.html'
            })
            //reg
            .state('reg', {
                url: '/reg',
                templateUrl: 'views/reg.html',
                controller: 'regCtrl'
            })
            .state('regsucc', {
                url: '/regsucc',
                templateUrl: 'views/regsucc.html'
            })
            .state('error', {
                url: '/error',
                templateUrl: 'views/error.html'
            })
            .state('info', {
                url: '/info',
                templateUrl: 'views/info.html'
            });

        $urlRouterProvider.when('/', '/index');
        $urlRouterProvider.when('', '/index');
        $urlRouterProvider.when('management.developer.msg', '/index');
        $urlRouterProvider.otherwise('404');
    }]);


    angular.bootstrap(document, ['cvApp']);
});


