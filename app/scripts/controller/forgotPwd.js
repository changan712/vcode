'use strict';

define(['angular', 'controller/md', 'service/alert'], function (angular, md) {

    md.controller('forgotPwdCtrl', ['$scope', '$rootScope', '$http','$state', 'alert', function ($scope, $rootScope, $http, $state,alert) {
        $rootScope.pageId = 'forgotPwd';
        $rootScope.title = '忘记密码_火柴手写码';
        var vm = $scope.vm = {};
        vm.success = localStorage.getItem('FdPwdsuccess') || false;

        $state.current.onExit = function(){
            localStorage.removeItem('FdPwdsuccess');
        };

        vm.sentEmail = function () {
            $http.post('/user/findPwd', {
                username: vm.username,
                email: vm.email
            }).success(function (res) {
                if (res.errcode == 0) {
                    vm.success = true;
                    localStorage.setItem('FdPwdsuccess', true);
                } else {
                    alert.open(res.errmsg, '找回密码')
                }
            }).error(function () {
                alert.open('系统错误请稍后再试！', '找回密码')
            })
        };

    }])

});

