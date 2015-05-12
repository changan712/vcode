'use strict';

//通用controller
define(['angular', 'controller/md', 'service/head', 'service/loginModal', 'service/login'], function (angular, md) {

    md.controller('headCtrl', ['$scope', '$rootScope', 'headSev', function ($scope, $rootScope, headSev) {
        var vm = $scope.vm = {};
        vm.description = headSev.description;
        vm.keywords = headSev.keywords;

    }]);

    md.controller('userCtrl', ['$scope', '$rootScope', 'loginModalSev', 'loginSev', function ($scope, $rootScope, loginModalSev, loginSev) {
        var vm = $scope.vm = {};
        vm.user = loginModalSev;
    }]);

    md.controller('appCtrl', ['$scope', '$rootScope', '$state', 'loginModalSev', function ($scope, $rootScope, $state, loginModalSev) {

        $scope.$on('loginneeded', function (e, go) {
            loginModalSev.open();
        });
        $scope.$on('loginsuccess', function (e) {
            if ($rootScope.toGoState) {
                $state.go($rootScope.toGoState);
            }else{
                $state.go('management.developer.info');
            }
        })

    }]);

});

