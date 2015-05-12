'use strict';

define(['angular', 'service/md'], function (angular, md) {
    md.service('confirm', ['$modal', function ($modal) {

            return {
                open: function (msg, title, okCallback, cancelCallback) {
                    return this.confirm = $modal.open({
                        size: 'sm',
                        keyboard: false,
                        backdrop: false,
                        templateUrl: 'views/tools/confirm.html',

                        controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {

                            var _this = this;
                            $scope.msg = msg;
                            $scope.title = title || '';

                            $scope.cancel = function () {
                                $modalInstance.dismiss();
                                cancelCallback && cancelCallback();
                            };

                            $scope.ok = function () {
                                $modalInstance.dismiss();
                                okCallback && okCallback();
                            }
                        }]

                    });
                }
            }
        }]
    )

});

