// 1.递增、递减 操作符----------------------------------
////前置型
var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2;  //   ++/--与+/-是相同优先级的
console.log(num3);  //21
console.log(num1);  //1    

////后置型
var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2;
console.log(num3);  //22
console.log(num1);  //1

////注意问题：非Number类型的数据在涉及操作符时，先用Number()转换成Number后再计算，得到的结果也自然是Number类型了
var a = "z";      //Number("z") = NaN
var b = "2";      //Number("2") = 2
var c = false;    //Number(false) = 0
//////后置型：先console，后变值
console.log(a++); //NaN   
console.log(b++); //2     
console.log(c++); //0     
console.log(a); //NaN
console.log(b); //3
console.log(c); //1






// 2.一元加、一元减  操作符---------------------------------
////一元加：相当于正号，对原值没有影响
var num = 25;
num = +num;
console.log(num); //25

console.log(+0);  //0

////一元减：相当于负号，原值求负
var num = -25;
console.log(-num); //25
console.log(num);  //-25

console.log(-num); //25

console.log(-0);  //-0


////注意问题：非Number类型的数据在涉及操作符时，先用Number()转换成Number后再计算，得到的结果也自然是Number类型了
var a = "z";      //Number("z") = NaN
var b = "-2";      //Number("-2") = -2
var c = false;    //Number(false) = 0
console.log(+a); //NaN   
console.log(+b); //-2     
console.log(+c); //0     
console.log(-a); //NaN
console.log(-b); //2
console.log(-c); //-0


//两者比较
////递增递减执行后自身会变
var num = 1;
--num;
console.log(num);   //0
////一元加减执行后自身不会变
var num = 1;
-num;
console.log(num);   //1


////js直接报错，跑不起来
//--1;  //Invalid left-hand side expression in prefix operation,因为1是个常量，--会使自身减1，常量不能改变，所以出错
-1;     //不出错，因为-不会改变自身的值，常量1不会被改变，所以不出错

