
console.log(typeof(Object)); //function Object的构造函数
console.log(typeof({})); //object

//创建空对象
var o = new Object();
var oo = new Object;
var ooo = {};
console.log(o == null); //false
console.log(oo == null);  //false
console.log(ooo == null); //false
////创建的不同对象之间是不同的
console.log(o == oo); //false



//创建包含属性的对象
//////1.数值字面量或变量直接初始化对象
var name = "shitou"
var object = {name}; //对象里面可以定义一个变量，变量名就是对象的属性名
console.log(object.name); //shitou

var object = {name:"shihongyuan",age:25};
console.log(object.name); //shihongyuan


//////2.用对象初始化对象
var o = new Object(object);
console.log(object.age);  //25

var o = new Object({name:"shihongyuan",age:25});
console.log(object.age);  //25

/////////变量初始化Object是错的，变量初始化数值字面量对象是对的，见上面1
var attribute = "212";
var oo = new Object(attribute);
console.log(object.attribute);  //undefined


//////3.对象创建后再定义属性
var object = {};
object.sex="girl";
console.log(object.sex);  //girl

var object = new Object(object);
object.department="computer";
console.log(object.sex);  //girl
console.log(object.department);  //computer






//对象属性定义问题
////没有初始化的数值字面量定义的属性，js直接报错，整个js都运行不起来
// var object = {"name"};
// var object = {1};

var object = new Object();
object.age;//对象创建后定义的属性相当于声明了未初始化的变量
console.log(object.age); //undefined

var u={};
console.log(u.u4);//undefined  u.u4相当于为u声明了一个属性只是没有初始化,所以undefined




/**
 * 至此，整个脚本运行不起来的语法错误有两个：
 * 1.使用了关键字
 * 2.对象的属性数值字面量定义时未初始化
 */