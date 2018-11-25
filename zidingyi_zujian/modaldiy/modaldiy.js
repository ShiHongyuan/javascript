$(document).ready(function () {
    
    var modal1 = $().initModal({
        type:'confirm',
        okcallback: function () {console.log('Confirmok')},
        clcallback: function () {console.log('Confirmcancel')},
        clickhide: false
    })
    console.log(modal1.getId())
    $('#testBtnConfirm').on('click', function () {
        modal1.getModal().modal('show')
    })

    var modal2 = $().initModal({
        type:'alert',
        okcallback: function () {console.log('Alertok')},
        hidecallback: function () {console.log('Alerthide')}
    })
    console.log(modal2.getId())
    $('#testBtnAlert').on('click', function () {
        modal2.getModal().modal('show')
    })

    var modal3 = $().initModal({
        type:'confirm',
        okcallback: function () {console.log('confirmok')},
        clcallback: function () {console.log('confirmcancel')},
        hidecallback: function () {console.log('confirmhide')}
    })
    console.log(modal3.getId())
    modal3.on(function (e) {
        if (e) {
            console.log('zhegelihaile_true')
        }
        else {
            console.log('zhegelihaile_false')
        }
    })
    $('#testBtn').on('click', function () {
        modal3.getModal().modal('show')
    })

    console.log(modal1.instance)
    console.log(modal2.instance)
    console.log(modal3.instance)

})

function modaldiy(options) {
    this.init(options)
}
modaldiy.prototype = {
    // constractor: modaldiy,
        init: function (options) {
            var me = this
            me.$el = options.$el
            me.obj = options.obj
            me.width = options.width
            me.height = options.height
            me.type = options.type
            me.ok = options.ok
            me.cancel = options.cancel
            me.title = options.title
            me.message = options.message
            me.okcallback = options.okcallback
            me.clcallback = options.clcallback
            me.clickhide = options.clickhide
            me.hidecallback = options.hidecallback
            if (me.$el === null || me.$obj === null) {
                console.warn("请传入容器元素");
                return false
            }
            me.id = me.generateId()
            me.fillhtml()
            me.bind()
            me.instance = me
        },
        generateId: function () {
            var date = new Date()
            return 'modal' + date.valueOf()
        },
        fillhtml: function () {
            var me = this
            var html =  '<div id="[Id]" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalLabel">' +
                            '<div class="modal-dialog modal-sm" role="document">' +
                                '<div class="modal-content">' +
                                    '<div class="modal-header">' +
                                       '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                                       '<h4 class="modal-title" id="modalLabel">[Title]</h4>' +
                                    '</div>' +
                                    '<div class="modal-body">' +
                                        '<p>[Message]</p>' +
                                    '</div>' +
                                    '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnCancel]</button>' +
                                        '<button type="button" class="btn btn-primary ok" data-dismiss="modal">[BtnOk]</button>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>'
            var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm')
            var content = html.replace(reg, function (node, key) {
                return {
                    Id: me.id,
                    Title: me.title,
                    Message: me.message,
                    BtnOk: me.ok,
                    BtnCancel: me.cancel
                }[key]
            })
            me.$el.append(content)
            switch (me.type) {
                case 'alert':
                    me.getModal().find('.ok').removeClass('btn-success').addClass('btn-primary')
                    me.getModal().find('.cancel').hide()
                    me.getModal().modal({
                        width: me.width,
                        height: me.height,
                        backdrop: me.clickhide,
                        show: false
                    })
                    break
                case 'confirm':
                    me.getModal().find('.ok').removeClass('btn-primary').addClass('btn-success')
                    me.getModal().find('.cancel').show()
                    me.getModal().modal({
                        width: me.width,
                        height: me.height,
                        backdrop: me.clickhide,
                        show: false
                    })
                    break
            }
            // me.getModal().modal({
            //     width: me.width,
            //     height: me.height,
            //     backdrop: 'static',
            //     show: false
            // })
            // me.getModal().modal('hide')
        },     
        bind: function () {
            var me = this
            me.getModal().on('click', '.ok', $.proxy(function () {
                if (Object.prototype.toString.call(me.okcallback) === "[object Function]") {
                    me.okcallback()
                }
            }, me))
            me.getModal().on('click', '.cancel', $.proxy(function () {
                if (Object.prototype.toString.call(me.clcallback) === "[object Function]") {
                    me.clcallback()
                }
            }, me))
            me.getModal().on('hide.bs.modal', $.proxy(function (e) {
                if (Object.prototype.toString.call(me.hidecallback) === "[object Function]") {
                    me.hidecallback(e)
                }
            }, me));
        },
        on: function (callback) {
            var me = this
            if (callback && callback instanceof Function) {

                // 当同一个元素用onclick,click,on都绑定了事件时，都会执行，onclick,click,on()执行的的优先关系是：onclick>click>on()；
                // 即先调用onclick事件，再调用click事件，再调用on事件

                // 先输出zhegelihaile_true，再输出confirmok
                // me.getModal().find('.ok').click(function () { callback(true) })
                // me.getModal().find('.cancel').click(function () { callback(false) })

                // 先输出confirmok，再输出zhegelihaile_true（都是on绑定的，按绑定的先后顺序执行）
                me.getModal().on('click', '.ok',function () { callback(true) })
                me.getModal().on('click', '.cancel',function () { callback(false) })
            }
        },
        getId: function () {
            var me = this
            return me.id
        },
        getModal: function () {
            var me = this
            return $('#' + me.getId())
        },
        destroy: function () {
            var me = this
            me.obj.data = undefined
            me.getModal().off('click', '**');
            me.getModal().remove()
        }
}


$.fn.initModal = function (options) {
    var parms = $.extend(
        {
            $el: $('body'),
            obj: this || options.obj,
            width: "200px" || options.width,
            height: "150px" || options.height, 
            type: 'alert' || options.type, // 'alert'  'confirm'
            ok: '确定' || options.ok,
            cancel: '取消' || options.cancel,
            title: '操作提示' || options.title,
            message: '操作内容' || options.message,
            okcallback: '' || options.okcallback,
            clcallback: '' || options.clcallback,
            clickhide: true || options.clickhide,
            hidecallback: '' || options.hidecallback
        }, options)
    var initObj = parms.obj.instance
    if (initObj) {
        initObj.destroy()
        initObj.init(parms)
    }
    else {
        initObj = new modaldiy(parms)
    }
    return initObj
}