'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('demoPicCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.pageId = 'demo';
        $rootScope.title = '在线体验_火柴手写码';
    }])

});

