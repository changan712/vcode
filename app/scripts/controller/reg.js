'use strict';

define(['angular', 'controller/md', 'service/cvConstant'], function (angular, md) {

    md.controller('regCtrl', ['$scope', '$rootScope', '$state', 'userSev', '$http', 'md5','alert', function ($scope, $rootScope, $state, userSev, $http, md5,alert) {
        $rootScope.title = '注册_火柴手写码';
        var vm = $scope.vm = {};
        var reg = $scope.reg = {};
        $rootScope.pageId = 'reg';


        $state.current.onExit = function () {
            if ($scope.v) {
                $scope.v.destroy();
            }
        };

        $scope.reg.clauseChecked = true;


        vm.resister = function () {
            var regData = {
                username: reg.username,
                password: md5.createHash(reg.password),
                email: reg.email,
                code: reg.code,
                tempId:document.getElementsByName('verHdInput')[0].value
            };

            $http.post('/user/register', regData)
                .success(function (res) {
                    if (res.errcode == 0) {
                        userSev.logined = true;
                        userSev.time = (new Date).getTime();
                        userSev.userInfo = res.data;
                        $rootScope.user = userSev;
                        $rootScope.$state.go('regsucc');
                    } else {
                        alert.open(res.errmsg);
                    }

                })
                .error(function (msg) {
                    console.log('服务器错误');
                }
            )

        }
    }])

});

