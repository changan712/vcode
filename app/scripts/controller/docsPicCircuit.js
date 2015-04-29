'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('docsPicCircuitCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$parent.docsId = 'circuit';
    }])

});

