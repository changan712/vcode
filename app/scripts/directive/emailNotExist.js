'use strict';

define(['angular', 'directive/md'], function (angular, md) {

    //重复密码
    md.directive('emailNotExist', ['$http', function ($http) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, ele, attr, c) {
                scope.$watch(attr.ngModel, function (n, o) {
                    if (scope.formReg.email.$error.required||scope.formReg.email.$error.pattern) {
                        c.$setValidity('emailnotexist', true);
                        return false;
                    }
                    $http.post('/user/checkEmail', {email: scope.reg.email}).success(function (res) {

                        if (res.errcode == 0) {
                            c.$setValidity('emailnotexist', true);
                        } else {
                            c.$setValidity('emailnotexist', false);
                        }
                    }).error(function () {
                        c.$setValidity('emailnotexist', true);
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
