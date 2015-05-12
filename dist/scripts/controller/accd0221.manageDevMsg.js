'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('manageDevMsgCtrl', ['$scope', '$rootScope', '$http', '$state', function ($scope, $rootScope, $http, $state) {

        $scope.$parent.vid = 'msg';
        var vm = $scope.vm = {};

        vm.itemPerPage = 30;


        var setPage = function (num) {
            $http.post('/user/getUserNotice', {pageflag: num, reqnum:  vm.itemPerPage}).success(function (res) {
                if (res.errcode == 0) {
                    vm.noticeData = res.data;
                } else {
                    vm.error = res.errmsg;
                }

            }).error(function () {
                vm.error = '系统错误，请稍后再试'
            });
        };

        setPage(1);

        vm.currentPage = 1;


        $scope.pageChanged = function () {
            setPage(vm.currentPage);
        };



    }])

});

