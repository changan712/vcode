'use strict';

define(['angular', 'controller/md', 'service/aboutInfo'], function (angular, md) {

    md.controller('aboutCtrl', ['$scope', '$rootScope','$sce', 'aboutInfoSev', function ($scope, $rootScope,$sce, aboutInfoSev) {
        $rootScope.pageId = 'about';
        $rootScope.title = '关于我们_火柴手写码';
        var vm = $scope.vm = aboutInfoSev;

        vm.rendHtml = function(html){
            return $sce.trustAsHtml(html)
        }

    }])

});

