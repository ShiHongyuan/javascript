/**
 * transform to Boolean
 * 作为Boolean的构造函数
 */


//没有任何参数，默认函数返回值是false
console.log(Boolean());  //false



//各种数据类型转换成布尔值

//Boolean
console.log( Boolean(true) ); //true
console.log( Boolean(false) ); //false

//String
console.log( Boolean("任何非空字符串") ); //true
console.log( Boolean("") );  //false

//Number
console.log( Boolean(Number.MAX_VALUE) ); //true          Number.MIN_VALUE js里能表示的最大正数
console.log( Boolean(Number.POSITIVE_INFINITY) ); //true            Number.POSITIVE_INFINITY正无限大 js无法表示
console.log( Boolean(Number.NEGATIVE_INFINITY) ); //true            Number.POSITIVE_INFINITY负无限大 js无法表示
console.log( Boolean(0) ); //false
console.log( Boolean(NaN) ); //false     NaN不是数字

//Undefined
console.log( Boolean(undefined) ); //false

//Null
console.log( Boolean(null) ); //false

//Object
console.log( Boolean({"name":"shihongyuan"}) ); //true
console.log( Boolean({}) ); //true  {}表示空的复杂数据类的对象，是有值的，只是值的属性是空的，与null表示空值不同



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