'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('docsPicApiCtrl', ['$scope', '$rootScope', '$location', '$anchorScroll', function ($scope, $rootScope, $location, $anchorScroll) {
        $scope.$parent.docsId = 'api';

        $scope.$on('$viewContentLoaded', function (event, config) {
            $anchorScroll();
        });
        $scope.gotoAnchor = function (anchor) {

            if ($location.hash() !== anchor) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash(anchor);
            } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
            }
        };
    }])

});

