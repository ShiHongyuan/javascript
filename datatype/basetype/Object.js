
console.log(typeof(Object)); //function Object的构造函数
console.log(typeof({})); //object





var name = "shitou"
var object = {name}; //对象里面可以定义一个变量，变量名就是对象的属性名
console.log(object.name); //"shitou"

//没有初始化的对象属性，js直接报错，整个js都运行不起来
// var object = {"name"};
// var object = {1};

object.age;//对象创建后定义的属性相当于声明了未初始化的变量
console.log(object.age); //undefined

var u={};
console.log(u.u4);//undefined  u.u4相当于为u声明了一个属性只是没有初始化,所以undefined


/**
 * 至此，整个脚本运行不起来的语法错误有两个：
 * 1.使用了关键字
 * 2.对象的属性数值字面量定义时未初始化
 */

var o = Number();
console.log(typeof(o));
console.log(o);