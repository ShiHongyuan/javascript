//Boolean的字面值有两个：true、false
console.log(typeof(true));  //boolean
console.log(typeof(false)); //boolean



//各种数据类型转换成布尔值

//Boolean
console.log( Boolean(true) ); //true
console.log( Boolean(false) ); //false

//String
console.log( Boolean("任何非空字符串") ); //true
console.log( Boolean("") );  //false

//Number
console.log( Boolean(Number.MIN_VALUE) ); //true          Number.MIN_VALUE js里能表示的最大正数
console.log( Boolean(Number.POSITIVE_INFINITY) ); //true            Number.POSITIVE_INFINITY正无限大 js无法表示
console.log( Boolean(Number.NEGATIVE_INFINITY) ); //true            Number.POSITIVE_INFINITY负无限大 js无法表示
console.log( Boolean(0) ); //false
console.log( Boolean(NaN) ); //false     NaN不是数字

//Undefined
console.log( Boolean(undefined) ); //false

//Object
console.log( Boolean({"name":"shihongyuan"}) ); //true
console.log( Boolean({}) ); //true  {}表示空的复杂数据类的对象，是有值的，只是值的属性时空的，与null表示空值不同
console.log( Boolean(null) ); //false


//if之类的判断函数，判断值就先要用Boolean()转换成Boolean类型来判断
//message可以是任何值，除了是未声明的会报错以外
//var message; //false
//var message = 1;
//var message = "123";
var message = NaN; //false
if (message) {
    console.log(true);
}else{
    console.log(false);
}

if (Boolean(message)) {
    console.log(true);
}else{
    console.log(false);
}


//布尔值与01的字面值相等性
console.log(true==1); //true
console.log(false==0); //true


