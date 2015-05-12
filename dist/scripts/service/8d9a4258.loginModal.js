'use strict';

define(['angular', 'service/md', 'controller/login'], function (angular, md) {

    md.service('loginModalSev', ['$rootScope', '$http', '$modal', 'loginSev', 'userSev',  function ($rootScope, $http, $modal, loginSev, userSev) {

            return {
                open: function () {
                    return $modal.open({
                        templateUrl: 'views/login.html',
                        controller: 'loginCtrl' //todo service 依赖 controller 正常么 ？

                    });
                },
                logout: function () {
                    loginSev.logout();
                    $rootScope.$state.go('index', {}, {location: 'replace'});
                }
            }
        }]
    )
});

