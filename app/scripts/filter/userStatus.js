'use strict';

define(['angular', 'filter/md'], function (angular, md) {
    md.filter('userStatus', [ function () {

            var statusConfig = {
                1:'正常'
            };
            return function (input) {

                return statusConfig[input];
            }

        }]
    )

});

