'use strict';

define(['angular', 'directive/md'], function (angular, md) {

    //重复密码
    md.directive('newPwd', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, ele, attr, c) {

                var pwd = scope.formModPwd[attr.newPwd];

                scope.$watch(attr.ngModel, function () {
                    if (pwd.$valid) {
                        if (c.$modelValue == pwd.$viewValue) {
                            c.$setValidity('isnewpwd', false);
                        } else {
                            c.$setValidity('isnewpwd', true);

                        }
                    }
                });
            }
        };
    }]);

});

