'use strict';

define(['angular', 'service/md'], function (angular, md) {

    md.service('headSev', function () {
            return {
                page: {
                    index: {
                        title: '首页'
                    },
                    demo:{
                        title:'体验'
                    },
                    docs:{
                        title:'文档'
                    },
                    about:{
                        title:'关于我们'
                    },
                    management:{
                        title:'管理中心'
                    }

                },
                description: '根据云端海量数据，采用各种安全机制 和策略、防穷举破解，为网站提供更好的安全防',
                keywords: '验证码 云服务'

            }
        }
    )

});

