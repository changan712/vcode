'use strict';

define(['angular', 'service/md'], function (angular, md) {
    md.service('alert', ['$modal', function ($modal) {

            return {
                open: function (msg, title, callback) {
                    return this.alert = $modal.open({
                        size: 'sm',
                        keyboard: false,
                        backdrop: false,
                        templateUrl: 'views/tools/alert.html',

                        controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {

                            var _this = this;
                            $scope.msg = msg;
                            $scope.title = title || '';

                            $scope.close = function () {
                                $modalInstance.dismiss();
                                callback && callback();
                            }
                        }]

                    });
                }
            }
        }]
    )

});

