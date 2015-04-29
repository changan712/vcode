'use strict';

define(['angular', 'directive/md'], function (angular, md) {

    //重复密码
    md.directive('userNotExist', ['$http', function ($http) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, ele, attr, c) {
                scope.$watch(attr.ngModel, function (n, o) {
                    if (scope.formReg.username.$error.required || scope.formReg.username.$error.minlength) {
                        c.$setValidity('usernotexist', true);
                        return false;
                    }
                    $http.post('/user/checkUsername', {username: scope.reg.username}).success(function (res) {

                        if (res.errcode == 0) {
                            c.$setValidity('usernotexist', true);
                        } else {
                            c.$setValidity('usernotexist', false);
                        }
                    }).error(function () {
                        c.$setValidity('usernotexist', true);
                    })
                });

            }
        };
    }]);

});


/* if (c.$modelValue == pwd.$viewValue) {
 c.$setValidity('isnewpwd', false);
 } else {
 c.$setValidity('isnewpwd', true);

 }*/
