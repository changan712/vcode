'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('manageAppEditCtrl', ['$scope', '$rootScope', '$http', '$location', '$state', 'alert', 'appUpdateInfo', function ($scope, $rootScope, $http, $location, $state, alert, appUpdateInfo) {

        var vm = $scope.vm = {};

        //add
        if ($rootScope.$stateParams.method == 'add') {

            $scope.$parent.vid = 'add';
            vm.appUrl = 'http://';
            vm.appType = 1;
            vm.appMaxNum =5;
            vm.appVm =1;
            vm.appTimeout =1800;
        }

        //update
        else if ($rootScope.$stateParams.method == 'update') {

            $scope.$parent.vid = 'update';

            vm.reset = function () {

                $state.reload();
                return false;
            };

            var appInfo = isEmptyObject(appUpdateInfo.app) ? JSON.parse(localStorage.getItem('appInfo')) : appUpdateInfo.app;

            if (appInfo) {
                vm.isUpdate = true;
                vm.appBusiness = appInfo.business;
                vm.appName = appInfo.application_name;
                vm.appUrl = appInfo.application_url;
                vm.appType = appInfo.application_type;
                vm.appVm = appInfo.verify_mode;
                vm.memo = appInfo.appMemo;
                vm.appMaxNum = parseInt(appInfo.max_num);
                vm.appTimeout =parseInt(appInfo.timeout);
            }
        } else {

           vm.error = "参数错误!"
        }


        $scope.appMod = function () {
            vm.isPosting = true;
            if (vm.isUpdate) {
                $http.post('/application/updateApplication', {
                    id: appInfo.id,
                    business: vm.appBusiness,
                    application_name: vm.appName,
                    application_url: vm.appUrl,
                    application_type: vm.appType,
                    verify_mode: vm.appVm,
                    memo: vm.appMemo || '',
                    max_num: vm.appMaxNum || 0,
                    timeout:vm.appTimeout
                }).success(function (res) {
                    vm.isPosting = false;
                    if (res.errcode == 0) {
                        alert.open('修改成功', '修改应用', function () {
                            appUpdateInfo.app = [];
                            localStorage.removeItem('appInfo');
                            $state.go('management.application.adm');
                        })
                    } else {
                        alert.open(res.errmsg, '修改应用');
                    }
                }).error(function () {
                    vm.isPosting = false;
                    alert.open('系统错误请稍后再试！', '修改应用');
                })

            } else {
                $http.post('/application/addApplication', {
                    business: vm.appBusiness,
                    application_name: vm.appName,
                    application_url: vm.appUrl,
                    application_type: vm.appType,
                    verify_mode: vm.appVm,
                    memo: vm.appMemo || '',
                    max_num: vm.appMaxNum || 0,
                    timeout:vm.appTimeout

                }).success(function (res) {
                    vm.isPosting = false;
                    if (res.errcode == 0) {
                        alert.open('添加成功', '添加应用', function () {
                            $state.go('management.application.adm');
                        })
                    } else {
                        alert.open(res.errmsg, '添加应用');
                    }
                }).error(function () {
                    vm.isPosting = false;
                    alert.open('系统错误请稍后再试！', '添加应用');
                })
            }
        };


        function isEmptyObject(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        }

    }])

});

