'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('manageDevInfoCtrl', ['$scope', '$rootScope', '$http', '$state', 'alert', function ($scope, $rootScope, $http, $state, alert) {

        $scope.$parent.vid = 'info';
        var vm = $scope.vm = {};

        $http.get('/user/getUserInfo').success(function (res) {
            if (res.errcode == 0) {
                vm.info = res.data;
            } else {
                vm.error = '获取用户信息失败，请稍后再试'
            }
        }).error(
            function () {
                vm.error = '系统错误，请稍后再试'
            });


        vm.updateUserInfo = function () {

            $http.post('/user/updateUserInfo', {
                nickname: vm.info.nickname || vm.mdNickName || '',
                truename: vm.info.truename || vm.mdTrueName || '',
                mobile: vm.info.mobile || vm.mdMobile || '',
                qq: vm.info.qq || vm.mdQq || ''
            }).success(function (res) {
                if (res.errcode == 0) {
                    alert.open('修改成功', '用户信息', function () {
                        $state.reload();
                    })
                } else {
                    alert.open(res.errmsg, '用户信息')
                }
            }).error(function () {
                alert.open('系统错误', '用户信息')
            })
        }


    }])

});

