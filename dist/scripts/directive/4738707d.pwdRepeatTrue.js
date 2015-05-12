'use strict';

define(['angular', 'directive/md'], function (angular, md) {

    //重复密码
    md.directive('pwdRepeatTrue', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, ele, attr, c) {
                var pwd = scope[attr.pwdRepeatTrueForm][attr.pwdRepeatTrueInput];

                scope.$watch(attr.ngModel, function () {
                    if (pwd.$valid) {
                        if (c.$modelValue == pwd.$viewValue) {
                            c.$setValidity('repeatTrue', true);
                        } else {
                            c.$setValidity('repeatTrue', false);
                        }
                    }
                });

                scope.$watch(function () {
                    return pwd.$modelValue;
                }, function () {
                    if (pwd.$valid) {
                        if (c.$modelValue == pwd.$viewValue) {
                            c.$setValidity('repeatTrue', true);
                        } else {
                            c.$setValidity('repeatTrue', false);
                        }
                    }
                });
            }
        };
    }]);

});

