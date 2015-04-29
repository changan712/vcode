'use strict';

define(['angular', 'controller/md', 'service/alert'], function (angular, md) {

    md.controller('manageDevModPwdCtrl', ['$scope', '$rootScope', '$state', '$http', 'md5', 'alert', function ($scope, $rootScope, $state, $http, md5, alert) {
        var modal = null;
        $scope.$parent.vid = 'modpwd';

        $scope.modPwd = function () {
            $http.post('/user/changePwd', {
                password: md5.createHash($scope.password),
                new_password: md5.createHash($scope.passwordNew)
            }).success(function (res) {
                if (res.errcode == 0) {
                    alert.open('密码修改成功', '修改密码', function () {
                        $state.go('management.developer.info')
                    });

                } else {
                    alert.open(res.errmsg, '修改密码');
                }
            }).error(function () {
                alert.open('系统错误', '修改密码');
            })
        }

    }])

});

