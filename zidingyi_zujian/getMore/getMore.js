/* eslint-disable */
/*
* @file: 查看更多插件
* @Author: shihongyuan
* @Date:   2017-09-10 11:22:09
*/
function GetMore(options) {
    this.init(options);
}

GetMore.prototype = {
    constructor: GetMore,
    init: function (options) {
        var me = this;
        // 组件的ul容器
        me.$el = options.$el;
        // 组件默认首页大小
        me.firstPage = options.firstPage;
        // 组件默认分页大小
        me.page = options.page;
        // 组件初始数据数组
        me.dataArr = options.dataArr.slice(0);
        // 组件样式开关
        me.switchTab = options.switchTab;
        //增加按钮文字
        me.moreSign = options.moreSign;
        //减少按钮文字
        me.reduceSign = options.reduceSign;
        // 维护当前最后一页page的索引值
        me.index = -1;
        if (me.$el === null) {
            console.warn("请传入容器元素");
            return false;
        }
        me.chunkArr = me.chunk(me.dataArr, me.firstPage, me.page);
        // 初始化第一个
        me.appendHtml(me.chunkArr[0]);
        me.bind();
        me.$el.data('getmore', me);
    },
    destory: function (parm) {
        var me = this;
        me.$el.empty();
        me.index = null;
        me.chunkArr = null;
        me.$el.off('click', '**')
    },
    // 添加一个横向
    appendHtml: function (arr) {
        var me = this;
        if (arr) {
            me.$el.children('li').last().remove()
            var _initHtml = '';
            $.each(arr, function (index, value) {
                _initHtml += '<li>' + value + '</li>';
            })
            me.$el.append('<li><ul class="second">' + _initHtml + '</ul></li>');
            me.index++;
            me.checkOption();
        }
    },
    // 减少两个横向
    reduceHtml: function () {
        var me = this;
        var $children = me.$el.children('li');
        if(me.switchTab){
            if (me.index == 1) {
                $children.slice(1, $children.length).remove();
                me.index--;
                $children.eq(me.index).css('display','block');
            } else {
                $children.slice(me.index - 1, $children.length).remove();
                me.index = me.index - 2;
                if( me.index == 0) {
                    $children.eq(me.index).css('display','block');
                }
                else{
                    $children.eq(me.index - 1).css('display','block');
                    $children.eq(me.index).css('display','block');
                }
            }
        }
        else if(!me.switchTab){
            if (me.index == 1) {
                $children.slice(1, $children.length).remove();
                me.index--;
            } else {
                $children.slice(me.index - 1, $children.length).remove();
                me.index = me.index - 2;
            }
        }
        me.checkOption();
    },
    checkOption: function () {
        var me = this;
        var $optionHtml = $('<li><ul class="option"></ul></li>');
        if (me.chunkArr[me.index + 1]) {
            $optionHtml.children('ul').append('<li class="add" title="查看更多">' + me.moreSign + '</li>')
        }
        if (me.index >= 1) {
            $optionHtml.children('ul').append('<li class="reduce" title="收起展开">' + me.reduceSign + '</li>')
        }
        me.$el.append($optionHtml);
    },
    checkMore: function () {
        var me = this;
        if (me.chunkArr[me.index + 1]) {
            me.$el.append('<li class="add">............</li>')
        }
    },
    checkReduce: function () {
        var me = this;
        if (me.index >= 1) {
            me.$el.append('<li class="reduce">-----------</li>')
        }
    },
    clickMore: function () {
        var me = this;
        if(me.switchTab){
            var $children = me.$el.children('li');
            if( me.index== 0 ){
                $children.eq(me.index).css('display','none');
            }
            else {
                $children.eq(me.index - 1).css('display','none');
                $children.eq(me.index).css('display','none');
            }
        }
        // 两次append，可以优化
        me.appendHtml(me.chunkArr[me.index + 1]);
        me.appendHtml(me.chunkArr[me.index + 1]);
    },
    clickReduce: function () {
        var me = this;
        me.reduceHtml();
    },
    // 把数组按照page大小拆分
    chunk: function (arr, firstNum, num) {
        if (firstNum < 1 || num < 1) {
            return;
        }
        var ret = [];
        if(arr.length != 0) {
            ret.push([]);
            arr.forEach(function (item, i) {
                // 每遇到一个整数，向ret中构建一个新的数组
                if (i < firstNum) {
                	ret[ret.length - 1].push(item);
                }
                else{
                	j = i - firstNum;
                	// 每遇到一个整数，向ret中构建一个新的数组
                    if (j % num === 0) {
                        ret.push([]);
                    }
                    // 并将该数组中新增的数组添加当前item
                    ret[ret.length - 1].push(item);
                }
            });
        }
        return ret;
    },
    bind: function () {
        var me = this;
        me.$el.on('click', '.add', $.proxy(me.clickMore, me));
        me.$el.on('click', '.reduce', $.proxy(me.clickReduce, me));
    }
}

$.fn.initGetMore = function (options) {
    // 容器默认采用调用该方法的元素
    var $el = options.$el || this;
    var initObj = $el.data('getmore');
    var parm = {
        $el: $el,
        firstPage: options.firstPage || 5,
        page: options.page || 5,
        dataArr: options.dataArr ? options.dataArr.slice(0) : null
            || [],
        switchTab: options.switchTab || false,
        moreSign: options.moreSign || "更多",
        reduceSign: options.reduceSign || "收起"
    }
    if (initObj) {
        initObj.destory();
        initObj.init(parm)
    } else {
        var getMore = new GetMore(parm);
    }
} 