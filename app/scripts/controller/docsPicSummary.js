'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('docsPicSummaryCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.$parent.docsId = 'summary';
    }])

});

