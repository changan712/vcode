'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('demoPicAlertCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$parent.demoId = 'alert';

    }])

});

