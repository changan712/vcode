'use strict';

define(['angular', 'filter/md'], function (angular, md) {
    md.filter('applicationType', [ function () {

            var typeConfig = {
                1:'网站',
                2:'移动',
                3:'其它'
            };
            return function (input) {

                return typeConfig[input];
            }

        }]
    )

});

