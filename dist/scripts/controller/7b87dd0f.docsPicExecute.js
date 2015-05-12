'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('docsPicExecuteCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$parent.docsId = 'execute';
    }])

});

