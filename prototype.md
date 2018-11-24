##### 将方法定义到构造方法的prototype上，这样的好处是，通过该构造函数生成的实例所拥有的方法都是指向一个函数的索引，这样可以节省内存
```javascript
// 不使用原型定义方法：
(function() {
    function Constractor() {
        this.method1 = method1;
        this.method2 = method2;
    }

    function method1() {
    }

    function method2() {
   }
})();


一般使用原型定义时代码如下：
(function () {
    function Constractor() {
    }

    Constactor.prototype = {
        method1: function() {
        },
        method2:  function() {
        }
    };
    
    // 或者
    Constactor.prototype.method1 = function() {
    };
    Constactor.prototype.method2 = function() {
    };

})();
```

### 给原型对象增加函数，就是让对象拥有公用的函数
```javascript
//给数组原型增加一个打乱数组的函数
Array.prototype.shuffle=function(){
var value = this.valueOf(),len = this.length,temp,key;
while(len--){
//随机生成数组的下标
key = Math.floor(Math.random()*len);
//temp为中间交换变量
temp = value[key];
value[key] = value[len];
value[len] = temp;
}
return value;
}
var arr1 = [0,1,2,3,4,5,6,7,8,9];
var arr2 = ['a','b','c','d','e','f'];    
alert(JSON.stringify(arr1.shuffle()));
alert(JSON.stringify(arr2.shuffle()));
```

### 给原型对象增加属性，也就是给对象增加公用的属性
```javascript
function fun(){
        
}
fun.prototype.name = '小东';
fun.prototype.arr = [1,2,3,4];//这里的属性可以是数组，也可以是对象
var ob1 = new fun();
var ob2 = new fun();
alert(JSON.stringify(ob1.name));
alert(JSON.stringify(ob2.arr));
```

### 实现原型继承
```javascript
function P1(){
    
    }
    function P2(){
        
    }
    //原型对象增加属性和方法
    P2.prototype.name = 'P2"s name';
    P2.prototype.get=function(value){
            return value;
    }
    //实例化P2构造函数的一个对象
    var obp2 = new P2();//这个对象应该包含所有原型对象的属性和方法
    //给P1的原型对象赋值一个对象，相当于P1继承了obp2的所有属性和方法
    P1.prototype = obp2;//这个式子，简单来讲就类似于a = b, b赋值给a这个总该明白吧？
    //调用P1从obp2继承过来的get函数
    alert(P1.prototype.get('out"s name'));
    //展示P1从obp2继承过来的name属性
    alert(P1.prototype.name);
    //用构造函数P1实例化一个obp1对象
    var obp1 = new P1();
    //P1的原型对象prototype既然已经继承了obp2的所有属性和函数，那么依据P1所实例化出来的对象也都有obp2的属性和函数了
    alert(obp1.get('obp1"s name'));
```

### 利用Object原型方法看对象类型
```javascript
// 对的
Object.prototype.toString.call(args.callback) === "[object Function]"

// 错的
(args.callback).prototype.toString()
(args.callback).toString()
```

### jquery的$.extend()、$.fn和$.fn.extend()
#### $.fn
原来 jQuery.fn = jQuery.prototype.对prototype肯定不会陌生啦
虽然 javascript　没有明确的类的概念，但是用类来理解它，会更方便。

jQuery便是一个封装得非常好的类，比如我们用 语句　$(“#btn1″) 会生成一个 jQuery类的实例。

```javascript
jQuery.fn = jQuery.prototype = {
　　　init: function( selector, context ) {//….
//……
};
```

#### $.extend(object)
为jQuery类添加类方法，可以理解为添加静态方法。如：

```javascript
jQuery.extend({
min: function(a, b) { return a < b ? a : b; },
max: function(a, b) { return a > b ? a : b; }
});
jQuery.min(2,3); //  2 
jQuery.max(4,5); //  5
```

#### $.extend(target, object1, [objectN])
用一个或多个其他对象来扩展一个对象，返回被扩展的对象

```javascript
var settings = { validate: false, limit: 5, name: "foo" }; 
var options = { validate: true, name: "bar" }; 
jQuery.extend(settings, options); 
结果：settings == { validate: true, limit: 5, name: "bar" }
```

#### $.fn.extend(object)
对jQuery.prototype进得扩展，就是为jQuery类添加“成员函数”。jQuery类的实例可以使用这个“成员函数”。
比如我们要开发一个插件，做一个特殊的编辑框，当它被点击时，便alert 当前编辑框里的内容。可以这么做：

```javascript
$.fn.extend({          
    alertWhileClick:function() {            
          $(this).click(function(){                 
                 alert($(this).val());           
           });           
     }       
});   
 
$("#input1").alertWhileClick(); // 页面上
```

$("#input1")　为一个jQuery实例，当它调用成员方法 alertWhileClick后，便实现了扩展，每次被点击时它会先弹出目前编辑里的内容。


jQuery.extend() 的调用并不会把方法扩展到对象的实例上，引用它的方法也需要通过jQuery类来实现，如jQuery.init()，而 jQuery.fn.extend()的调用把方法扩展到了对象的prototype上，所以实例化一个jQuery对象的时候，它就具有了这些方法，这 是很重要的，在jQuery.js中到处体现这一点

jQuery.fn.extend = jQuery.prototype.extend
你可以拓展一个对象到jQuery的 prototype里去，这样的话就是插件机制了。

```javascript
(function( $ ){
$.fn.tooltip = function( options ) {
};
//等价于
var tooltip = {
function(options){
}
};
$.fn.extend(tooltip) = $.prototype.extend(tooltip) = $.fn.tooltip
})( jQuery );

// 传jQuery是为了防止$被其他的库占了，防符号冲突
```







