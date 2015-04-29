'use strict';

define(['angular', 'service/md', 'controller/login'], function (angular, md) {

    md.service('loginSev', ['$rootScope', '$http', '$q', '$modal', 'userSev',  function ($rootScope, $http, $q, $modal, userSev) {

            return {
                login: function (data) {
                    var def = $q.defer();
                    $http.post('/user/login', data)
                        .success(function (res) {
                            if (res.errcode==0) {
                                def.resolve(res);
                            } else {
                                def.reject(res.errmsg)
                            }
                        })
                        .error(function () {
                            def.reject('服务器错误');
                            console.log('服务器错误')
                        });
                    return def.promise;

                },
                logout: function () {
                    userSev.logined = false;
                    userSev.time = '';
                    userSev.userInfo = {};
                   // console.log($rootScope.$state);
                },
                checkExpired: function () {

                }
            }
        }]
    )
});

