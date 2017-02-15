//Undefined的字面值只有一个：undefined
console.log(typeof(undefined));  //undefined

//undefined的三种普通形式

//1.undefined自身的值
console.log(undefined);//undefined

var u = {undefined};
console.log(u.undefined);//undefined

//2.赋值为undefined
var u2 = undefined;
console.log(u2);//undefined

var u = {u2:undefined};
console.log(u.u2);//undefined

//3.声明了未初始化的标识符
var u3;
console.log(u3);//undefined

var u3;
var u = {u3};
console.log(u.u3);//undefined







//undefined的一种会报错的特殊形式：未声明标识符

//运行到此处，直接报错指出标识符没有被定义
//console.log(u4);  //u4 is not defined

//运行到此处，直接报错指出标识符没有被定义
// var u = {u4};//u4 is not defined   
// console.log(u.u4);


var u={};
console.log(u.u4);//undefined  u.u4相当于为u声明了一个属性只是没有初始化,所以undefined







//声明了与未声明的区别
/**
 * 声明了的在运行时输出undefined
 * 未声明的在运行时会报not defined的错
 * typeof 两者都是undefined
 */

var ut1;
console.log(typeof(ut1)); //undefined
console.log(typeof(ut2)); //undefined







//js变量重名，后者之后的引用都是后者取代了前者
var test = "123";
console.log(test); //123

var test = "456";
console.log(test);  //456

