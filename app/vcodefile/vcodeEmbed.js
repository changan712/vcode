"use strict";

var VcodeEmbed = /* exports.VcodeEmbed =*/ klass(Vcode, {

    __construct: function (options) {
        var config = {
            baseInput: '',
            elementError: '',
            errorHTML: '验证码错误',
            successHTML: '验证码正确',
            template: ''

        };

        if (!options.baseInput) {
            throw  new Error('baseInput 为必选参数')
        }
        if (!options.id) {
            throw  new Error('id 为必选参数')
        }
        if (!options.wrapImg) {
            throw  new Error('wrapImg 为必选参数');
        }

        var setting = $.extend(config, options);
        this.wrapImg = $(options.wrapImg);

        setting.template = this.wrapImg.html();

        this.input = config.baseElement = $(options.baseInput);
        this.errorCon = $(setting.elementError);
        if (this.errorCon.length) {
            this.defaultHTML = this.errorCon.html();
        }

        VcodeEmbed.uber.__construct.call(this, setting);
        this.input.attr('maxlength', this.size);
        this.element.addClass('vcode_embed');
        this.img = this.wrapImg.find('img.vcode_img');
        this.show();

    },

    //重写__createDom
    __createDom: function () {
        var dom = $('<img class="vcode_img" />');
        this.wrapImg.append(dom);
        this.trigger('ondomready');
        return dom;
    },

    //重写__setStyle
    __setStyle: function () {
        this.element.css({
            width: this.wrapImg.width(),
            height: this.wrapImg.height()
        });

        return this;
    },
    __setPosition: function () {
    },
    //重写__bindEvent
    __bindEvent: function () {

        this.element.on('click.vcode', $.proxy(function () {
            this.change();
        }, this));

        this.input.on({
                'keyup.vcode': $.proxy(function () {
                    if (this.input.val().length == this.size) {
                        this.check(this.input.val());

                    } else {
                        this.errorCon.html(this.defaultHTML);
                        this.value = '';
                    }
                }, this),
                'focus.vcode': $.proxy(function () {
                    this.show();
                }, this),
                'paste.vcode cut.vcode': $.proxy(function () {
                    return false;
                }, this)
            }
        );

        this.after('change', $.proxy(function () {
            this.input.val('');
            if (this.errorCon.length) {
                this.errorCon.html(this.defaultHTML);
            }
        }, this));


        if (this.errorCon.length) {
            this.on('onchecktrue', $.proxy(function (code, message) {
                this.errorCon.removeClass('error').addClass('success').html(this.setting.successHTML || message).show();
            }, this));

            //验证不通过
            this.on('oncheckfalse', $.proxy(function (code, message) {
                this.errorCon.removeClass('success').addClass('error').html(this.setting.errorHTML || message).show();

            }, this));
            this.on('onvcodetimeout', $.proxy(function (code, message) {
                this.errorCon.removeClass('success').addClass('error').html(message).show();
            }, this));
        }

    }

});