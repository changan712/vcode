'use strict';

define(['angular', 'controller/md'], function (angular, md) {

    md.controller('404Ctrl', ['$scope', '$rootScope', '$location','$state', function ($scope, $rootScope, $location,$state) {
        $rootScope.pageId = '404';
        $rootScope.title = '404_火柴手写码';
        var vm = $scope.vm = {};

        vm.back = function () {
            if ($location.search().bk) {
              location.href = '#/'+$location.search().bk;
            } else {
                history.go(-1)
            }
        }


    }])

});

