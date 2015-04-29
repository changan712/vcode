'use strict';

define(['angular', 'filter/md'], function (angular, md) {
    md.filter('userType', [ function () {

            var typeConfig = {
                1:'个人开发者'
            };
            return function (input) {

                return typeConfig[input];
            }

        }]
    )

});

