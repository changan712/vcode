'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('docsPicGuideCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.$parent.docsId = 'guide';
    }])

});

