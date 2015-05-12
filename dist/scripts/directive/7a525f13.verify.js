'use strict';

define(['angular', 'directive/md'], function (angular, md) {

    //重复密码
    md.directive('verify', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, ele, attr, c) {


                scope.v = new VcodeLayerBox({
                    id: 12,//(必选) 您自己的应用id
                    baseInput: '#verify_code', //(必选) 验证码输入框jquery选择符，或输入框元素
                    tips: '请输入6位验证码',
                    hasHiddenInput:'verHdInput',
                    className: 'vcode_theme_min vcode_wrap_no_shadow',
                    position: [
                        {x: 0, y: '100%'},
                        {x: 0, y: 0}
                    ],
                    btns: [
                        {
                            className: 'btn btn-xs btn-default',
                            label: '刷新',
                            role: 'change'
                        }
                    ],
                    oncheckfalse: function () {
                        scope.$apply(function () {
                            scope.result = false;
                        })

                    },
                    onchecktrue: function () {
                        scope.$apply(function () {
                            scope.result = true;
                        });
                    }
                });
                scope.v.after('change', function () {
                    scope.$apply(function () {
                        scope.result = false;
                    })
                });


                scope.$watch(attr.ngModel, function () {
                    if (scope.formReg.code.$viewValue && scope.formReg.code.$viewValue.length < scope.v.size) {
                        c.$setValidity('verify', false);

                        scope.result = undefined;

                    }
                });

                scope.$watch('result', function (n, o) {
                    if (scope.formReg.code.$viewValue) {
                        if (scope.formReg.code.$viewValue.length < scope.v.size) {
                            c.$setValidity('verify', false);
                        } else {
                            c.$setValidity('verify', !!scope.result);
                        }
                    } else {
                        c.$setValidity('verify', false);
                    }
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
