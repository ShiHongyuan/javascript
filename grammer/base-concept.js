//区分大小写

//identifier 标识符：变量、函数名、属性名
//开头：字母、_、$
var _ ="以下划线开头"
console.log(_);

var $ = "以美刀开头"
console.log($);


//js中用驼峰形式
var jsIndentifier = "js中用驼峰形式";
console.log(jsIndentifier);

//严格模式启用
/**
 * 1.整个脚本启用 顶部
 * "use strict";
 * 
 * 2.对函数启用
 * function doSomething() {
     "use strict";
     //函数体
 }
 */

//keywords 关键字
// do  in  typeof instanceof with debugger this

//用关键字作标识符
//浏览器console直接报错，js文件都跑不起来
// var in = 1;
// console.log(in);

//reserved words 保留字
//let  yield  eval arguments

//用保留字作标识符
//正常输出2，当普通标识符用
var private = 2;
console.log(private); 

//variable 变量
//松散类型

//输出undefined
var _1;
console.log(_1);

//输出正常
var _2 = "初始化类型可以变";
console.log(_2);
var _2 = 2;
console.log(_2);

//输出正常
var _3 = "不同类型初始化，可以放在同一条声明语句中",
    _31 = 31,
    _32 = true;

console.log(_3);
console.log(_31);
console.log(_32);

//局部变量，作用域结束后立即销毁
function test1() {
    var _4 = "函数里面声明的局部变量";
    console.log(_4);
}
test1();
//运行到此报错：_4 is not defined
//console.log(_4);

//省略var，局部变量可以变成全局变量
//运行到此报错：_41 is not defined
//console.log(_41);
function test2() {
    _41 = "函数里面声明的全局变量";
    console.log(_41);
}
test2();
//输出正常，只有函数运行后全局变量_41才被创建
console.log(_41);


 