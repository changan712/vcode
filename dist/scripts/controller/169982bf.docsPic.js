'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('docsPicCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.pageId = 'docs';
        $rootScope.title = '接入文档_火柴手写码';
    }])

});

