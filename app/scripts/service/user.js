'use strict';

define(['angular', 'service/md'], function (angular, md) {


    md.service('userSev', ['$rootScope', function ($rootScope) {

            var storageID = 'user',
                storageString = localStorage[storageID];
            var user =storageString? JSON.parse(storageString):{
                logined: false,
                time: '',
                userInfo: {}
            };

            $rootScope.$watch(function () {
                return user;
            }, function () {
                localStorage[storageID] = JSON.stringify(user);
            }, true);

            return user;

        }]
    );


});

