'use strict';

define(['angular', 'service/md'], function (angular, md) {
    md.service('appUpdateInfo', [function () {
            return {
                getAppById: function (id, appList) {
                    if (angular.isArray(appList)) {
                        var arr = [], i;
                        for (i = 0; i < appList.length; i++) {
                            if (appList[i].id == id) {
                                arr.push(appList[i]);
                                break;
                            }
                        }

                        return arr[0];
                    } else {
                        return null;
                    }
                },
                app: []
            }
        }]
    )

});

