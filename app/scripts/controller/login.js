'use strict';

define(['angular', 'controller/md', 'service/login', 'service/user'], function (angular, md) {

    md.controller('loginCtrl', ['$scope', '$rootScope', '$state','$modalInstance', 'md5', 'loginSev', 'userSev', function ($scope, $rootScope,$state, $modalInstance, md5, loginSev, userSev) {
            var vm = $scope.vm = {};

            vm.loginSubmited = false;

            //记住用户名
            $scope.saveUserName = Boolean(localStorage.getItem('savedChecker')) || false;
            $scope.userName = localStorage.getItem('savedUserName') || '';

            $scope.$watch(function () {
                return $scope.userName
            }, function () {
                if ($scope.saveUserName) {
                    if($scope.userName){
                        localStorage.setItem('savedUserName', $scope.userName);
                    }else{
                        localStorage.removeItem('savedUserName');
                    }
                }
            });

            $scope.$watch(function () {
                return $scope.saveUserName
            }, function (value) {
                if (value) {
                    localStorage.setItem('savedUserName', $scope.userName);
                    localStorage.setItem('savedChecker', value);
                    // $scope.userName = localStorage.getItem('savedUserName') || '';
                } else {
                    localStorage.removeItem('savedUserName');
                    localStorage.removeItem('savedChecker');
                }
            });

            $scope.$watch(function () {
                return [$scope.userName, $scope.password]
            }, function () {
                vm.loginError = '';
                vm.loginSubmited = false;
            }, true);

            vm.ok = function () {
                var loginData = {
                    username: $scope.userName,
                    password: md5.createHash($scope.password)
                };
                vm.isPosting = true;
                vm.loginSubmited = true;
                if ($scope.formLogin.$invalid) {
                    return;
                }
                loginSev.login(loginData).then(function (res) {
                    //登陆成功
                    vm.loginSubmited = false;
                    vm.loginError = '';
                    vm.isPosting = false;
                    userSev.logined = true;
                    userSev.userInfo = res.data;
                    $modalInstance.dismiss('ok');
                    $rootScope.$broadcast('loginsuccess');

                }, function (err) {
                    //失败
                    vm.isPosting = false;
                    vm.loginError = err;
                });
            };

            vm.cancel = function () {
                vm.loginSubmited = false;
                $modalInstance.dismiss('cancel');
            };
        }]
    )
});

