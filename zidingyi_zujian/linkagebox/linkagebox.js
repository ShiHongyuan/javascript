/* eslint-disable */
/*
* @file: 下拉联动框插件 
* @Author: shihongyuan
* @Date:   2017-09-28 11:44:09
* @Last Modified by:   lishuai18
* @Last Modified time: 2018-7-4 21:26:31
*/
    
//   $(document).ready(function () {
//   /**初始化模块列表**/
//   $('#J-module').initLinkagebox({
//       modules : {"adp":["fc-vega","fc-thunder"],"FEED":["FEED1","FEED2"]},
//       defAllSelected : true,
//       styles: "module-options"
//   });
//});
    $.fn.extend({
        initLinkagebox: function(options){
            var $el = options.$el || this;
            var initObj = $el.data('linkagebox');
            var args = $.extend({
                $el: $el,
                modules: {},
                defAllSelected: false,
                defModuleSelected: true,
                styles: "",
                defProductNo: -1,
                defProductName: "",
                defModuleNo: -1,
                defModuleName: "",
                l1ChangeCallback: "",
                l2ChangeCallback: "",
                l3ChangeCallback: ""
            }, options);
            if(initObj) {
                initObj.init(args);
            }
            else {
                new Linkagebox(args);
            }
        },
        getLinkageboxValue: function(options){
            var $el = options.$el || this;
            var initObj = $el.data('linkagebox');
            if(initObj) {
                return initObj.getValue(options.index);
            }
            return false;
        }
    });
    
    function Linkagebox (args) {
        this.init(args);   //this是指Linkagebox实例
    }

    Linkagebox.prototype = {
        constructor: Linkagebox,
        //产品线调用模块
        init: function (args) {
            var me = this;  //this=Linkagebox实例
            //定义参数
            me.$el = args.$el;
            me.defProductNo = args.defProductNo;
            me.defProductName = args.defProductName;
            me.defModuleNo = args.defModuleNo;
            me.defModuleName = args.defModuleName;
            me.defUdwModuleNo = args.defUdwModuleNo;
            me.defUdwModuleName = args.defUdwModuleName;
            me.defAllSelected = args.defAllSelected;
            me.modules = args.modules;
            me.styles = args.styles;
            me.l1ChangeCallback = args.l1ChangeCallback;
            me.l2ChangeCallback = args.l2ChangeCallback;
            me.l3ChangeCallback = args.l3ChangeCallback;
            if(me.$el === null || undefined) {
                console.warn("请传入容器元素");
                return;
            }
            //add by xhp
            //分离module与udwmodule

            //分离产品线和模块
            me.products = [];
            for (var product in me.modules) {
                me.products.push(product);
            }

            //在这里定义?
            me.$productSelector = undefined;
            me.$moduleSelector = undefined;
            me.$udwmoduleSelector = undefined;

            me.fillHtml();
            me.bind();
            me.$el.data('linkagebox', me);
        },

        //两个下拉框-->改成三个
        fillHtml: function () {
            var me = this;
            var productOptions = '';
            var moduleOptions = '';
            me.$productSelector = $('<select class="' + me.styles + '"></select>');
            me.$moduleSelector = $('<select class="' + me.styles + '"></select>');
            me.$udwmoduleSelector = $('<select class="' + me.styles + '"></select>');
            me.$el.empty();
            me.$el.append($('<span class="pick-name inline-pick-name-new">产品线</span>'));
            me.$el.append(me.$productSelector);
            me.$el.append($('<span class="pick-name inline-pick-name-new">模块</span>'));
            me.$el.append(me.$moduleSelector);
            me.$el.append($('<span class="pick-name inline-pick-name-new">udw模块</span>'));
            me.$el.append(me.$udwmoduleSelector);
            me.$productSelector.empty();
            me.$moduleSelector.empty();
            me.$udwmoduleSelector.empty();
            if (me.defAllSelected) {
                productOptions += '<option value="" data="allselected">请选择产品线，默认所有</option>';
                if (me.products.length == 0) {
                    productOptions += '<option value="" data="nodata" disabled="disabled">未获取到产品线</option>';
                }
                else {
                    me.products.forEach(function(item, index, array) {
                        productOptions += '<option value="'+ item +'" data="">' + item + '</option>';
                    });
                }
                me.$productSelector.append(productOptions);
                me.$productSelector.children('option').eq(0).prop('selected',true);
                me.productToModule('', false, true, false);
            }
            else {
                if (me.products.length == 0) {
                    productOptions += '<option value="" data="nodata" disabled="disabled">未获取到产品线</option>';
                    me.productToModule('', true, false, true);
                    me.$productSelector.append(productOptions);
                }
                else {
                    me.products.forEach(function(item, index, array) {
                        productOptions += '<option value="'+ item +'" data="">' + item + '</option>';
                    });
                    me.$productSelector.append(productOptions);
                    if(me.defProductNo >= 0 && me.defProductNo < me.products.length) {
                        me.$productSelector.children('option').eq(me.defProductNo).prop('selected',true);
                    }
                    else {
                        me.$productSelector.children('option').eq(0).prop('selected',true);
                    }
                    var defProduct = me.$productSelector.val().trim();
                    if (me.defModuleNo >= 0) {
                        me.productToModule(defProduct, true, false, false);
                    }
                    else {
                        me.productToModule(defProduct, false, false, false);
                    }
                }
                me.$productSelector.children('option').eq(0).prop('selected',true);
            }
            if (Object.prototype.toString.call(me.l2ChangeCallback) === "[object Function]") {
                me.l2ChangeCallback(me.getValue(1));
            }
            if (Object.prototype.toString.call(me.l3ChangeCallback) === "[object Function]") {
                me.l3ChangeCallback(me.getValue(2));
            }
        },
        
        //选择下拉框事件
        bind: function () {
            var me = this;
            me.$el.off('change', '**');
            me.$productSelector.change(function(event) {
                var product = me.$productSelector.val().trim();
                var data = me.$productSelector.find('option:selected').attr('data');
                if (data !='allselected' && data != 'nodata') {
                    if (me.defModuleNo < 0) {
                        me.productToModule(product, false, false, false);
                    }
                    else {
                        me.productToModule(product, true, false, false);
                    }
                }
                else if (data == 'allselected') {
                    if (me.defModuleNo < 0) {
                        me.productToModule('', false, true, false);
                    }
                    else {
                        me.productToModule('', true, true, false);
                    }
                }
                else if (data == 'nodata') {
                    if (me.defModuleNo < 0) {
                        me.productToModule('', false, false, true);
                    }
                    else {
                        me.productToModule('', true, false, true);
                    }
                }
                if (Object.prototype.toString.call(me.l1ChangeCallback) === "[object Function]") {
                    me.l1ChangeCallback(me.getValue(0));
                }
                if (Object.prototype.toString.call(me.l2ChangeCallback) === "[object Function]") {
                    me.l2ChangeCallback(me.getValue(1));
                }
                if (Object.prototype.toString.call(me.l3ChangeCallback) === "[object Function]") {
                    // 清空udw_module数据
                    me.$udwmoduleSelector.empty();
                    me.$udwmoduleSelector.text("");
                    me.l3ChangeCallback(me.getValue(2));
                }
            });
            me.$moduleSelector.change(function(event) {
                var productName = me.$productSelector.find("option:selected").val();
                var moduleName = $(this).val();
                me.moduleToudw(productName, moduleName);
                if (Object.prototype.toString.call(me.l2ChangeCallback) === "[object Function]") {
                    me.l2ChangeCallback(me.getValue(1));
                }
                if (Object.prototype.toString.call(me.l3ChangeCallback) === "[object Function]") {
                    me.l3ChangeCallback(me.getValue(2));
                }
            });
            me.$udwmoduleSelector.change(function(event) {
                if (Object.prototype.toString.call(me.l3ChangeCallback) === "[object Function]") {
                    me.l3ChangeCallback(me.getValue(2));
                }
            });
        },
        productToModule: function (product, defModule, isAllSelected, isNoData){
            var me = this;
            var moduleOptions = '';
            if (isAllSelected) {
                moduleOptions += '<option value="" data="allselected">请选择模块,默认所有</option>';
                moduleOptions += '<option value="" data="" disabled="disabled">请先选择产品线</option>';
                me.$moduleSelector.empty();
                me.$moduleSelector.append(moduleOptions);
                me.$moduleSelector.children('option').eq(0).prop('selected',true);
                return;
            }
            if (isNoData) {
                moduleOptions += '<option value="" data="nodata" disabled="disabled">未获取到模块</option>';
                me.$moduleSelector.empty();
                me.$moduleSelector.append(moduleOptions);
                me.$moduleSelector.children('option').eq(0).prop('selected',true);
                return;
            }
            var pTomodules = me.modules[product];

            if (me.defAllSelected && !me.defModuleSelected) {
                moduleOptions += '<option value="" data="allselected">请选择模块,默认所有</option>';
            }
            if (pTomodules.length == 0) {
                moduleOptions += '<option value="" data="nodata" disabled="disabled">未获取到模块</option>';
            }
            else {
                for (var i in pTomodules) {
                    moduleOptions += '<option value="'+ i +'" data="">' + i + '</option>';
                }
                // pTomodules.forEach(function(item, index, array) {
                //     console.log(item);
                //     moduleOptions += '<option value="'+ item +'" data="">' + item + '</option>';
                // });
            }
            me.$moduleSelector.empty();
            me.$moduleSelector.append(moduleOptions);
            var options = me.$moduleSelector.children('option').eq(0);
            if (defModule && me.defModuleNo >= 0 && me.defModuleNo < pTomodules.length) {
                var options = me.$moduleSelector.children('option').eq(me.defModuleNo);
                //me.$moduleSelector.children('option').eq(me.defModuleNo).prop('selected',true);
                //return;
            }
            //me.$moduleSelector.children('option').eq(0).prop('selected',true);
            options.prop('selected',true);
            this.moduleToudw(product, options.attr('value'));
        },
        moduleToudw: function (product, module) {
            var udwmoduleOptions = '';
            if (product.length > 0  && module.length > 0) {
                this.modules[product][module].forEach(function (item, key, array) {
                    udwmoduleOptions += '<option value="'+ item +'" data="">' + item + '</option>';
                });
                this.$udwmoduleSelector.html(udwmoduleOptions);
            }
            if (product.length > 0 && module.length == 0) {
                jfslk;
                var modulenp = this.modules[product];
                var modulenew = [];
                var modulenew01 = "";
                for (var i in modulenp) {
                    modulenew.push(i);
                }
                modulenew01 = modulenew[0];
                this.modules[product][modulenew01].forEach(function (item, key, array) {
                    udwmoduleOptions += '<option value="'+ item +'" data="">' + item + '</option>';
                });
                this.$udwmoduleSelector.html(udwmoduleOptions);
            }
            // udwmoduleOptions += '<option value="" data="allselected"></option>';

        },
        getValue: function (index) {
            var me = this;
            var value =  me.$el.children('select').eq(index).val();
            if (value === null || value === undefined) {
                return false;
            }
            else {
                return value.trim();
            }
        },
        destory: function (args) {
            var me = this;
            me.$el.empty();
            me.modules = {};
            me.defAllSelected = false;
            me.defModuleSelected = true;
            me.styles = "";
            me.defProductNo = -1;
            me.defProductName = "";
            me.defModuleNo = -1;
            me.defModuleName = "";
            me.l1ChangeCallback = "";
            me.l2ChangeCallback = "";
            me.l3ChangeCallback = "";
            me.$el.off('change', '**');
        }
    }
