/* eslint-disable */
/*
* @Author: shihongyuan
* @Date:   2017-10-23 16:24:59
* @Last Modified by:   shihongyuan
* @Last Modified time: 2017-10-30 20:47:48
*/

$.fn.extend({
    initInputselect: function(options) {
        var $el = options.$el || this;
        var initObj = $el.data('inputselect');
        var args = $.extend({
            $el: $el,
            data: [],
            hasSearchInput: false,
            hasMultiSelect: false,
            optionAutoNumber: 0,
            optionScrollAddNumber: 100,
            styles: '',
            callback: null
        }, options);
        if(initObj) {
            initObj.destory();
            initObj.init(args);
        }
        new inputselect(args);
    },
    getInputselectValue: function(options){
        var $el = this;
        var initObj = $el.data('inputselect');
        if(initObj) {
            return initObj.getValue();
        }
        return false;
    }
});

function inputselect(args) {
	this.init(args);
}

inputselect.prototype = {
	constructor: inputselect,
	init: function(args) {
		var me = this;
		me.$el = args.$el;
		me.data = args.data;
        me.hasSearchInput = args.hasSearchInput;
        me.hasMultiSelect = args.hasMultiSelect;
        me.optionAutoNumber = args.optionAutoNumber;
        me.optionScrollAddNumber = args.optionScrollAddNumber;
        me.styles = args.styles;
        me.callback = args.callback;
        if (me.$el === null || undefined) {
            console.warn("请传入容器元素");
            return false;
        }
        me.$select = undefined;
        me.$input = undefined;
        me.$scroll = undefined;
        me.$options = undefined;
        me.length = me.data.length;
        me.selected = -1;
        me.currentData = [];
        me.currentIndex = -1;
        me.currentLength = 0;
        me.isSelected = false;
        
		me.fillHtml();
		me.bind();
		me.$el.data('inputselect', me);
	},
	fillHtml: function() {
		var me = this;
		me.$el.empty();
		
		me.$select = $('<div class="' + me.styles + '"></div>');
        me.$select.empty();

		if(me.hasSearchInput) {
			me.$input = $('<input class="" placeholder="请选择 （空值默认全选）"/>');
            me.$select.append(me.$input);
		}

        me.$scroll = $('<div class="inputselect-scroll" style="width: 100%;"></div>');

        me.$options = $('<ul class="inputselect-list"></ul>');

		if (me.length === 0 || me.data === null || me.data === undefined) {
            me.$select = $('<div class="' + me.styles + '">未获取数据</div>');
        }
        else {
        	me.changeData();
        }
        me.$scroll.append(me.$options);
        me.$el.append(me.$select);
		me.$el.append(me.$scroll);
        me.$scroll.mCustomScrollbar({
            theme:"minimal-dark",
            callbacks: {
                whileScrolling: function() {
                    if(me.currentLength > me.currentIndex) {
                        var scrollLen = me.$options.children('li').eq(0).height() * (me.currentIndex - me.optionAutoNumber - 3);
                        if(0 - me.$options.offset().top >= scrollLen) {
                            me.addElement();
                        }                       
                    }
                }
            }
        });
	},
	bind: function () {
		var me = this;
        me.$select.click(function(event) {
            if(me.$scroll.css('display') == 'none') {
                var $this = $(this);
                if(me.hasSearchInput) {
                    me.$input.focus();
                    if(me.$input.val() == "") {
                        me.changeData("");
                    }
                }
                else { 
                    if (me.$select.text() == "") {
                        me.changeData("");
                    }     
                }
                me.$select.addClass('tinashy-active');
                me.showOptions();
            }
        });
        me.$input.blur(function(event) {
            if(me.$options.children('li.selected').length == 0) {
                    me.$input.val("");
            }
            me.$select.removeClass('tinashy-active');
            setTimeout(function(){
                this.hideOptions();
            }.bind(me), 200);
        });
        me.$options.on('click', 'li', function(event) {
            var $this = $(this);
            me.$options.children('li').removeClass('selected');
            $this.addClass('selected');
            me.isSelected = true;
            if(me.hasSearchInput) {
                me.$input.val($this.text());
            }
            else {
                me.$select.text($this.text());
            }
            me.selected = $this.attr('index');
            me.$select.removeClass('tinashy-active');
            me.hideOptions();
            if (Object.prototype.toString.call(me.callback) === "[object Function]") {
                me.callback($this.attr('value'));
            }
        }); 
        me.$input.on('input', me.throttle(me.changeData, 500, ''));
	},
    changeData: function(params) {
        var me = this;
        if(me.isSelected) {
            me.isSelected = false;
            return;
        }
        params = (params == "") ? "" : me.$input.val();
        var sear = new RegExp(params);
        var newlength = 0;
        me.currentData = [];
        if(params != "") {
            me.data.forEach(function(item, index, array) {
                if(sear.test(item)) {
                    me.currentData.push('<li value="' + item + '" index='+ index +' class="">' + item + '</li>');
                    newlength++;
                }
            });
        }
        else {
            me.data.forEach(function(item, index, array) {
                me.currentData.push('<li value="' + item + '" index='+ index +' class="">' + item + '</li>');
                newlength++;
            });
        }
        me.currentLength = newlength;

        me.currentIndex = me.currentLength > 0 ? 0 : -1;
        me.$options.empty();
        me.addElement();
    },
    addElement: function() {
        var me = this;
        if (me.currentIndex >= 0 && me.currentLength > 0) {
            var optionString = '';
            var newindex = me.currentIndex;
            var newlength = (me.currentLength - me.currentIndex) < me.optionScrollAddNumber ? (me.currentLength - me.currentIndex) : me.optionScrollAddNumber;
            for(var i = newindex; i < newlength + newindex; i++) {
                optionString += me.currentData[i];
                me.currentIndex ++;
            }
            me.$options.append(optionString);
            var liLen = me.$options.children('li').eq(0).height();
            if(me.optionAutoNumber > 0 && me.$options.children('li').length > me.optionAutoNumber) {
                me.resize(me.$scroll.children('.mCustomScrollBox'), me.optionAutoNumber * liLen+2, '1px solid #ccc');
                me.$scroll.mCustomScrollbar("update");
            }
            else {
                me.resize(me.$scroll.children('.mCustomScrollBox'), liLen * me.$options.children('li').length+2,'1px solid #ccc');
                me.$scroll.mCustomScrollbar("update");
            }
        }
        else {
            me.$options.empty();
            me.resize(me.$scroll.children('.mCustomScrollBox'), 0);
            me.$scroll.mCustomScrollbar("disable");
        }
    },
    hideOptions: function() {
        var me = this;
        if(me.$options.children('li.selected').length > 0) {
            me.selected = me.$options.children('li.selected').attr('index');
        }
        else {
            me.selected = -1;
        }
        me.$scroll.hide();
    },
    showOptions: function(){
        var me = this;
        var liLen = me.$options.children('li').eq(0).height();
        var liTop = 0;
        if(me.selected >= 0 && me.$options.children('li.selected').length > 0) {
            var index =  me.$options.children('li.selected').index();
            liTop = liLen * index - (me.optionAutoNumber - 1) * liLen;
            liTop = (liTop > 0) ? liTop : 0;
        }
        me.$scroll.show();
        me.$scroll.mCustomScrollbar("scrollTo", liTop, {scrollInertia: 0});
    },
    getValue: function () {
        var me = this;
        if(me.hasSearchInput) {
            return me.$input.val().trim();
        }
        return me.$select.text().trim();

    },
    resize: function($ele, height, style){
        if(height == 0) {
            $ele.css('border-width', 0);
        }
        else {
            if(parseInt($ele.css('border-left-width')) == 0) {
                $ele.css('border', style);
            }
        }
        $ele.height(height);
    },
    /**
     * 节流通用函数
     * @name throttle
     * @param {Function} func  节流回调函数
     * @param {number} delay 节流频率时间
     * @param {Object} params 节流回调函数的参数
     * @return {Function} 节流函数
     */
    throttle: function(func, delay, params) {
        var me = this;
        var timer = null;
        var startTime = Date.now();
        return function () {
            var context = me;
            var args = arguments;
            var curTime = Date.now();
            var remainTime = delay - (curTime - startTime);
            if (timer) {
                clearTimeout(timer);
            }
            if (remainTime <= 0) {
                func.apply(context);
                startTime = Date.now();
            }
            else {
                timer = setTimeout(func.bind(me), delay);
            }
        };
    },
    destory: function (args) {
        var me = this;
        me.$el.empty();
        me.data = [];
        me.hasSearchInput = false;
        me.hasMultiSelect = false;
        me.optionAutoNumber = 0;
        me.optionScrollAddNumber = 100;
        me.styles = '';
        me.callback = null;
    }
};
