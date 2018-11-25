##### 将方法定义到构造方法的prototype上，这样的好处是，通过该构造函数生成的实例所拥有的方法都是指向一个函数的索引，这样可以节省内存
```javascript
// 不使用原型定义方法：
(function() {
    function func() {
        this.method1 = method1;
        this.method2 = method2;
    }

	// 通过定义全局函数的方式，让func的多个实例对象的method1指向同一个函数的引用
    function method1() {
    }

    function method2() {
   }
})();


一般使用原型定义时代码如下：
(function () {
    function func() {
    }

	//  重写func.prototype,相当于以前的prototype和重写的prototype都在，只是后面构建的实例在拥有多个prototype时，后面定义的prototype的会覆盖掉前面的
    func.prototype = {
    	 constractor: func,  // 重写会覆盖调原来的constractor，所以要重赋值
        method1: function() {
          var me = this   // this是指向构建func的实例对象
        },
        method2:  function() {
        }
    };
    
    // 或者 加到func.prototype上
    func.prototype.method1 = function() {
    };
    func.prototype.method2 = function() {
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

### constractor
在 Javascript 语言中，constructor 属性是专门为 function 而设计的，它存在于每一个 function 的prototype 属性中。这个 constructor 保存了指向 function 的一个引用。 
在定义一个函数（代码如下所示）时，

```javascript
function F() {
// some code
}
```

JavaScript 内部会执行如下几个动作：

> 1.为该函数添加一个原形（即 prototype）属性 
2. 为 prototype 对象额外添加一个 constructor 属性，并且该属性保存指向函数F 的一个引用

这样当我们把函数 F 作为自定义构造函数来创建对象的时候，对象实例内部会自动保存一个指向其构造函数（这里就是我们的自定义构造函数 F）的 prototype 对象的一个属性proto，
所以我们在每一个对象实例中就可以访问构造函数的 prototype 所有拥有的全部属性和方法，就好像它们是实例自己的一样。当然该实例也有一个 constructor属性了（从 prototype 那里获得的），每一个对象实例都可以通过 constrcutor 对象访问它的构造函数，请看下面代码：

```javascript
var f = new F();
alert(f.constructor === F);// output true
alert(f.constructor === F.prototype.constructor);// output true
```

我们可以利用这个特性来完成下面的事情： 
对象类型判断，如

```javascript
if(f.constructor === F) {
// do sth with F
}
```
其实 constructor 的出现原本就是用来进行对象类型判断的，但是 constructor 属性易变，不可信赖。我们有一种更加安全可靠的判定方法：instanceof 操作符。下面代码 
仍然返回 true

```javascript
if(f instanceof F) {
// do sth with F
}
```

原型链继承，由于 constructor 存在于 prototype 对象上，因此我们可以结合 
constructor 沿着原型链找到最原始的构造函数，如下面代码：

```javascript
function Base() {}

// Sub1 inherited from Base through prototype chain
function Sub1(){}
Sub1.prototype = new Base();
Sub1.prototype.constructor = Sub1;

Sub1.superclass = Base.prototype;

// Sub2 inherited from Sub1 through prototype chain
function Sub2(){}
Sub2.prototype = new Sub1();
Sub2.prototype.constructor = Sub2;

Sub2.superclass = Sub1.prototype;

// Test prototype chain
alert(Sub2.prototype.constructor);// function Sub2(){}
alert(Sub2.superclass.constructor);// function Sub1(){}
alert(Sub2.superclass.constructor.superclass.constructor);// function Base(){}
```

上面的例子只是为了说明 constructor 在原型链中的作用，更实际一点的意义在于：一个子类对象可以获得其父类的所有属性和方法，称之为继承。

之前提到 constructor 易变，那是因为函数的 prototype 属性容易被更改，我们用时下很流行的编码方式来说明问题，请看下面的示例代码：

```javascript

function F() {}
    F.prototype = {
    _name: 'Eric',
    getName: function() {
    return this._name;
    }
};

初看这种方式并无问题，但是你会发现下面的代码失效了：
var f = new F();
alert(f.constructor === F); // output false
```


怎么回事？F 不是实例对象 f 的构造函数了吗？当然是！只不过构造函数 F 的原型被开发者重写了，这种方式将原有的 prototype 对象用一个对象的字面量{}来代替。而新建的对象{}只是 Object 的一个实例，系统（或者说浏览器）在解析的时候并不会在{}上自动添加一个 constructor 属性，因为这是 function 创建时的专属操作，仅当你声明函数的时候解析器才会做此动作。然而你会发现 constructor 并不是不存在的，下面代码可以 
测试它的存在性：

```javascript
alert(typeof f.constructor == 'undefined');// output false
```

既然存在，那这个 constructor 是从哪儿冒出来的呢？我们要回头分析这个对象字面量 
{}。因为{}是创建对象的一种简写，所以{}相当于是 new Object()。那既然{}是 Object 
的实例，自然而然他获得一个指向构造函数 Object()的 prototype 属性的一个引用proto，又因为 Object.prototype 上有一个指向 Object 本身的 constructor属性。所以可以看出这个constructor其实就是Object.prototype的constructor， 
下面代码可以验证其结论：

```javascript
alert(f.constructor === Object.prototype.constructor);//output true
alert(f.constructor === Object);// also output true
```

一个解决办法就是手动恢复他的 constructor，下面代码非常好地解决了这个问题：

```javascript
function F() {}
F.prototype = {
    constructor: F, /* reset constructor */
    _name: 'Eric',
    getName: function() {
    return this._name;
    }
};
```

之后一切恢复正常，constructor 重新获得的构造函数的引用，我们可以再一次测试上面的代码，这次返回 true

```javascript
var f = new F();
alert(f.constructor === F); // output true this time
```

解惑：构造函数上怎么还有一个 constructor ？它又是哪儿来的？

细心的会发现，像 JavaScript 内建的构造函数，如 Array, RegExp, String,Number, Object, Function 等等居然自己也有一个 constructor: 
alert(typeof Array.constructor != ‘undefined’);// output true 
经过测试发现，此物非彼物它和 prototype 上 constructor 不是同一个对象，他们是共存的：

```javascript
alert(typeof Array.constructor != 'undefined');// output true
alert(typeof Array.prototype.constructor === Array); // output true
```

不过这件事情也是好理解的，因为 构造函数也是函数。是函数说明它就是 Function 构造函数的实例对象，自然他内部也有一个指向 Function.prototype 的内部引用proto啦。因此我们很容易得出结论，这个 constructor（构造函数上的constructor 不是 prototype 上的）其实就是 Function 构造函数的引用：

```javascript
alert(Array.constructor === Function);// output true
alert(Function.constructor === Function); // output true
```

### jquery $.proxy使用

在某些情况下，我们调用Javascript函数时候，this指针并不一定是我们所期望的那个。例如：

```javascript
//正常的this使用
 2 $('#myElement').click(function() {
 3 
 4     // 这个this是我们所期望的，当前元素的this.
 5 
 6     $(this).addClass('aNewClass');
 7 
 8 });
 9 
10 
11 //并非所期望的this
12 $('#myElement').click(function() {
13 
14     setTimeout(function() {
15 
16           // 这个this指向的是settimeout函数内部，而非之前的html元素
17 
18         $(this).addClass('aNewClass');
19 
20     }, 1000);
21 
22 });
```

这时候怎么办呢，通常的一种做法是这样的：

```javascript
1 $('#myElement').click(function() {
 2     var that = this;   //设置一个变量，指向这个需要的this
 3 
 4     setTimeout(function() {
 5 
 6           // 这个this指向的是settimeout函数内部，而非之前的html元素
 7 
 8         $(that).addClass('aNewClass');
 9 
10     }, 1000);
11 
12 });
```

但是，在使用了jquery框架的情况下， 有一种更好的方式，就是使用$.proxy函数。

jQuery.proxy(),接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文(context )语境。

有两种语法：

```javascript
jQuery.proxy( function, context )
/**function将要改变上下文语境的函数。
** context函数的上下文语境(`this`)会被设置成这个 object 对象。
**/

jQuery.proxy( context, name )
/**context函数的上下文语境会被设置成这个 object 对象。
**name将要改变上下文语境的函数名(这个函数必须是前一个参数 ‘context’ **对象的属性)
**/
```

上面的例子使用这种方式就可以修改成：

```javascript
$('#myElement').click(function() {

    setTimeout($.proxy(function() {

        $(this).addClass('aNewClass');  

    }, this), 1000);
});
```
