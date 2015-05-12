'use strict';

define(['angular', 'service/md'], function (angular, md) {
    md.service('aboutInfoSev', function () {
            return {
                text: '<p>手写码，是将海量手写图片资源进行碎片化处理，随机组合、加密，由于手写文字差异大、书写不规则等特点，使得OCR技术很难识别，结合巨人网络大数据处理和云计算技术，有效解决传统验证码不安全、易破解等问题。</p>' +
                '<p>手写码致力为网站、移动应用提供使用方便的、安全的、清晰的云验证码解决方案。</p>',
                qq: '2450678156'
               /* ,
                email: 'gaohongming@shenghuo.com',
                tel: '021-33979999'*/

            }
        }
    )
});

