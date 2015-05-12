'use strict';

define(['angular', 'directive/md','prettify'], function (angular, md,prettify) {

    md.directive('prettify', ['$rootScope',function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, ele, attr) {

                $rootScope.$on('$viewContentLoaded',function(){
                    angular.element('pre',ele).addClass(' prettyprint');
                    prettyPrint();
                });

            }
        };
    }]);

});

