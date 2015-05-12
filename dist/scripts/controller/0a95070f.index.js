'use strict';

define(['angular', 'controller/md','service/carousel'], function (angular, md) {

    md.controller('indexCtrl', ['$scope', '$rootScope','carousel', function ($scope, $rootScope,carousel) {
        $rootScope.pageId = 'index';
        $rootScope.title = '首页_火柴手写码';
        var vm = $scope.vm = {};

        vm.myInterval = 5000;
        vm.slides = carousel;

    }])

});

