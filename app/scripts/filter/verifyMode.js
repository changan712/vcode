'use strict';

define(['angular', 'filter/md'], function (angular, md) {
    md.filter('verifyMode', [function () {

            var typeConfig = {
                1: '数字',
                2: '字母',
                3: '数字+字母'
            };
            return function (input) {

                return typeConfig[input];
            }

        }]
    )

});

