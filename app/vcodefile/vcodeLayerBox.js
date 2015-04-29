"use strict";

var VcodeLayerBox = exports.VcodeLayerBox = klass(Vcode, {

    __construct: function (options) {
        var config = {
            elementError: '',
            baseInput: '',
            errorHTML: '验证码错误',
            successHTML: '验证码正确'
        };

        if (!options.baseInput) {
            throw  new Error('baseInput 为必选参数')
        }
        if (!options.id) {
            throw  new Error('id 为必选参数')
        }

        var setting = $.extend(config, options);

        this.input = config.baseElement = $(options.baseInput);
        this.errorCon = $(setting.elementError);
        if (this.errorCon.length) {
            this.defaultHTML = this.errorCon.html();
        }

        VcodeLayerBox.uber.__construct.call(this, setting);
        this.input.attr('maxlength', this.size);
        this.element.addClass('vcode_min');

    },
    __bindEvent: function () {

        VcodeLayerBox.uber.__bindEvent.call(this, arguments);

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