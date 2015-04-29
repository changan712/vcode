'use strict';

define(['angular', 'directive/md', 'jquery'], function (angular, md, $) {

    md.directive('footFixer', function () {
        return {
            restrict: 'AE',
            link: function (scope, ele, attr) {
                setConMinHeight();
            }
        };

        function setConMinHeight() {
            var con = $('#view-con'),
                tp = $('body>nav'),
                bt = $('body>footer'),
                h = tp.outerHeight(true) + bt.outerHeight(true) + parseFloat(con.css('marginTop')) + parseFloat(con.css('marginBottom')) + parseFloat(con.css('paddingTop')) + parseFloat(con.css('paddingBottom'));
            con.css({
                'minHeight': document.documentElement.clientHeight - h + 'px'
            });

            bt.css({position: 'relative'});

            $(window).on('resize.shtapr', function () {
                if (time) return;
                var time = setTimeout(function () {
                    con.css({
                        'minHeight': document.documentElement.clientHeight - h + 'px'
                    });
                    clearTimeout(time);
                    time = null;
                }, 10);

            });
        }
    });

});

