'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('resetPwdCtrl', ['$scope', '$rootScope', '$state', '$location', '$http', 'md5', 'alert', function ($scope, $rootScope, $state, $location, $http, md5, alert) {
        $rootScope.pageId = 'resetPwd';
        $rootScope.title = '重置密码_火柴手写码';
        var vm = $scope.vm = $location.search();

        vm.resetPwd = function () {
            $http.post('/user/resetPwd', {
                id: vm.id,
                password: md5.createHash(vm.pwdNew),
                token: vm.token
            }).success(function (res) {
                if (res.errcode == 0) {
                    alert.open('重置成功!', '重置密码', function () {
                        $state.go('index', {}, {location: 'replace'});
                    })
                } else {
                    alert.open(res.errmsg, '重置密码');
                }
            }).error(function () {
                alert.open('系统错误请稍后再试！', '重置密码');
            })
        }
    }])

});

