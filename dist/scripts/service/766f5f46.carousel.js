'use strict';

define(['angular', 'service/md'], function (angular, md) {
    md.service('carousel', function () {
            return [
                {
                    image: 'images/banner.jpg',
                    title:'手写码',
                    text:'基于海量手写字符生成的图片验证码，更清晰、更安全、更方便。',
                    link:'#/demo/pic/layerbox'

                }/*,
                {
                    image: 'images/banner2.jpg',
                    title:'短信验证码',
                    text:'通过运营商短信网关向受众手机发送文字验证码的一种验证码传送方式',
                    link:''
                }*/
            ]
        }
    )

});

