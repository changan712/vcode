'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('manageAppModCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.$parent.vid = 'mod';

    }])

});

