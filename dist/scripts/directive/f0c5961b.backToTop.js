'use strict';

define(['angular', 'directive/md'], function (angular, md) {

    md.directive('backToTop', ['$rootScope', '$window', function ($rootScope, $window) {
        return {
            restrict: 'E',
            template: '<div ng-show="isShow" ng-click="toTop()" ><span class="glyphicon glyphicon-upload"></span></div>',
            replace: true,
            scope: {},
            link: function (scope, ele, attr) {
                var bd = angular.element(document.body),
                    ht = angular.element(document.documentElement),
                    time = null;
                scope.isShow = false;
                scope.toTop = function () {
                    if (bd.scrollTop()) {
                        bd.animate({'scrollTop': 0}, 'fast')
                    }
                    if (ht.scrollTop()) {
                        ht.animate({'scrollTop': 0}, 'fast')
                    }
                };

                $rootScope.$on('$viewContentLoaded', function () {
                    if (bd.data('scrollTopInit')) return;

                    if (bd < 1.5 * angular.element($window).height()) return;

                    bd.data('scrollTopInit', true);

                    angular.element($window).on('scroll', function () {
                        if (time) return;
                        time = setTimeout(function () {
                            scope.$apply(function () {
                                if (bd.scrollTop() > 200 || ht.scrollTop() > 200) {
                                    scope.isShow = true;
                                } else {
                                    scope.isShow = false;
                                }
                                clearTimeout(time);
                                time = null;
                            });
                        }, 50);

                    })
                });

            }
        };

    }]);

});

