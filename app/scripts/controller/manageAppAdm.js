'use strict';

define(['angular', 'controller/md', 'service/alert', 'service/confirm', 'service/appUpdateInfo'], function (angular, md) {

    md.controller('manageAppAdmCtrl', ['$scope', '$rootScope', '$state', '$http', 'alert', 'confirm', 'appUpdateInfo', function ($scope, $rootScope, $state, $http, alert, confirm, appUpdateInfo) {

        $scope.$parent.vid = 'adm';

        var vm = $scope.vm = {};
        vm.itemPerPage = 30;

        function setPage(num) {
            $http.post('/application/getApplication', {
                pageflag: num,
                reqnum: vm.itemPerPage
            }).success(function (res) {
                if (res.errcode == 0) {
                    vm.appData = res.data;
                }
                else {
                    vm.error = res.errmsg;
                }
            }).error(function () {
                vm.error = '系统错误请稍后再试';
            });

        };
        setPage(1);
        vm.currentPage = 1;
        // vm.applist

        vm.pageChanged = function () {
            setPage(vm.currentPage)
        };

        vm.appDelete = function (id) {
            confirm.open('确认要删除这个应用？', '删除应用', function () {
                $http.post('/application/delApplication', {
                    id: id
                }).success(function (res) {
                    if (res.errcode == 0) {
                        $state.reload();
                    } else {
                        alert.open(res.errmsg, '删除应用');
                    }
                }).error(function () {
                    alert.open('系统错误，请稍后再试', '删除应用');
                })
            })
        };

        appUpdateInfo.app = [];
        vm.goToUpdate = function (id) {
            appUpdateInfo.app = appUpdateInfo.getAppById(id, vm.appData.applicationList);
            localStorage.setItem('appInfo', JSON.stringify(appUpdateInfo.app));
            $state.go('management.application.edit',{method:'update'});
        }
    }])

});

