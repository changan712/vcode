'use strict';

define(['angular', 'service/md'], function (angular, md) {
        md.factory('myInterceptor', ['$rootScope','userSev', function ($rootScope,userSev) {
                return {
                    request: function (config) {
                        config.headers = config.headers || {};
                        config.headers.auth = getInfo();
                       if(config.method =='POST'){
                           $rootScope.isPosting = true;
                       }
                        return config;
                    },
                    response:function(res){
                        $rootScope.isPosting = false;
                        return res;
                    }
                };

                function getInfo() {
                    if (JSON.parse(localStorage.getItem('user')).userInfo && JSON.parse(localStorage.getItem('user')).userInfo.hasOwnProperty('token')) {
                        return JSON.stringify(JSON.parse(localStorage.getItem('user')).userInfo);
                    } else {
                        return JSON.stringify(userSev.userInfo);
                    }
                }
            }]
        );
    }
);



