'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('demoPicMinCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$parent.demoId = 'min';

    }])

});

