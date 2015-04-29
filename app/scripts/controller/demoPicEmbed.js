'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('demoPicEmbedCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$parent.demoId = 'embed';

    }])

});

