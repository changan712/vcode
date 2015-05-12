'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('manageCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.pageId = 'management';
        $rootScope.title = '管理中心_火柴手写码';
        var vm = $scope.vm = {};
    }])

});

