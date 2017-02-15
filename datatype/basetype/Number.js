//Number的值有整数、浮点数、NaN
console.log(typeof(NaN)); //number
console.log(typeof(Number.MIN_VALUE)); //number

//整数
////十进制

////八进制 
//////0+(0-7)
console.log(072); //58
//////不符合规范的八进制，当作十进制
console.log(081);  //81

////十六进制
//////0x+(0-9)(A-F)(a-f)
console.log(0xA2); // 162
console.log(0x1b); // 27

////正数计算：不管什么进制，计算结果都是十进制
var sum = 1 + 1;
console.log(sum); //2

var sum = 010 * 010;
console.log(sum); //64

var sum = 0x10 / 0x10;
console.log(sum); //1

var sum = 1 + 010;
console.log(sum); //9

var sum = 1 + 0x10;
console.log(sum); // 17

var sum = 010+0x10;
console.log(sum); //24


//浮点数 
console.log(.1);  //0.1

////等于整数的，解释、存储、计算都当作整数
console.log(2.);  //2
console.log(10.0); //10
console.log(2.0 + 10.0); //12

////浮点的最高精度，小数位17位
console.log(0.30000000000000004); //18位小数,只能存储为0.30000000000000000 (17位小数)

////错误，浮点数只有十进制
//console.log(010.1);

////某些浮点的计算结果会产生小小的舍入误差，用浮点计算结果来测试字面值相等
if (0.1 + 0.2 == 0.3) {
    console.log(0.3);
}else{
    console.log(0.1 + 0.2);//输出0.30000000000000004
}



//科学技术法（整数和浮点数）

console.log(3.2e2); //320
////以任何形式表示的浮点数，小数位数不超过6位，都以浮点存储
console.log(3e-6); //0.000003
console.log(0.000003); //0.000003
////以任何形式表示的浮点数，小数位数超过6位至js的最大数值范围，都会被存储成科学计数法，不能存储为科学计数法的浮点数超过17位后只能舍入存储
console.log(0.0000003); //3e-7
console.log(3e-7); //3e-7
console.log(3e-20); //3e-20
console.log(0.30000000000000004); //18位小数,只能存储为0.30000000000000000 (17位小数，舍去了一位)



//0
var a = +0;
var b = -0;
console.log(a); //0
console.log(b); //-0
console.log(a == b); //true


//最大正值
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
//最小负值
console.log(-Number.MAX_VALUE); //-1.7976931348623157e+308

//最小正值（除了0）
console.log(Number.MIN_VALUE); //5e-324
//最大负值（除了0）
console.log(-Number.MIN_VALUE); //-5e-324

//超出最大值的正值
////全局值
console.log(Infinity); //Infinity
////Number.POSITIVE_INFINITY里面存的是Infinity
console.log(Number.POSITIVE_INFINITY); //Infinity

//超出最大值的负值
console.log(-Infinity); //-Infinity
console.log(Number.NEGATIVE_INFINITY); //-Infinity

//Infinity与自身相等
console.log(Infinity == Infinity);  //true
console.log(Infinity == Number.POSITIVE_INFINITY); //true

//isFinite()是否在js的数值范围内
console.log(isFinite(-Infinity)); //false
var sum = Number.MAX_VALUE + 1;
console.log(sum); //1.7976931348623157e+308
console.log(isFinite(sum)); //true

var sum = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(sum);  //Infinity
console.log(isFinite(sum)); //false



//NaN
////
console.log(NaN); //NaN
console.log(0/0); //NaN
console.log(1/0); //Infinity
console.log(-1/0); //--Infinity

////NaN与自身不等
console.log(NaN == NaN); //false
////所以要判断一个值是不是NaN，只能通过isNaN()来判断
//////NaN
console.log(isNaN(NaN)); //true
//////String
console.log(isNaN("10")); //false
console.log(isNaN("")); //false    Number("") = 0;
console.log(isNaN("011")); //false   Number("011") = 11;
console.log(isNaN("0x11")); //false    Number("0x11") = 17;  
console.log(isNaN("10 s")); //true    包含其他字符不能转换成数字
console.log(isNaN("shihongyuan")); //true
//////Boolean
console.log(isNaN(true)); //false
console.log(isNaN(false)); //false
//////Undefined
console.log(isNaN(undefined)); //true
//////Null
console.log(isNaN(null)); //false Number(null) = 0
//////Object   toString(valueOf(object))
console.log(isNaN({}));  //true 这里进一步说明 {} != null
console.log(isNaN({"age":10}));  //true
 


