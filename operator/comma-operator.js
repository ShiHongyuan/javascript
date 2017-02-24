//逗号操作符 ，依此执行操作
// 1. 一条语句定义多个变量
var num1 = 1, num2=2, num3=3;
console.log(num1);              //1
console.log(num2);              //2
console.log(num3);              //3

// 2. 赋值时，赋逗号表达式的最后一项
var num = (5,1,4,8,0);
console.log(num);               //0