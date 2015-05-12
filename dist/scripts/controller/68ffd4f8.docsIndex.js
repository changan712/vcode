'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('docsIndexCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$parent.docsId = 'index';
    }])

});

