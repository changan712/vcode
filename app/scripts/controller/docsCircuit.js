'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('docsCircuitCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$parent.docsId = 'circuit';
    }])

});

