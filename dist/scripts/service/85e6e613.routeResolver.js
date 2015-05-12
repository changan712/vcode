'use strict';

define(['angular', 'service/md'], function (angular, md) {
        md.provider('routeResolver', function () {
                this.$get = function ($q, $rootScope) {
                    console.log($q,$rootScope);
                };
            }
        )
    }
);



