'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('docsPicSdkCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.$parent.docsId = 'sdk';
    }])

});

