/**
 * transform to 十进制数
 * 不作为构造函数
 */

//各种数据类型转换成十进制的整数和浮点数

//Number
console.log( parseFloat(Number.MIN_VALUE) );         //5e-324 
console.log( parseFloat(Number.POSITIVE_INFINITY) ); //Infinity
console.log( parseFloat(-Infinity) );                //-Infinity
console.log( parseFloat(+0) );  //0
console.log( parseFloat(-0) );  //0
console.log( parseFloat(NaN) ); //NaN

//Boolean
console.log( parseFloat(true) );  //NaN
console.log( parseFloat(false) ); //NaN

//Null
console.log( parseFloat(null) );   //NaN

//Undefined
console.log( parseFloat(undefined) ); //NaN

//String：按顺序找不是看整体，只认识十进制，会忽略所有前导0（除了16进制的前导0x），从第一个开始，遇到是数字或（+/-号）或第一个.就往后，否则就终止，终止后未得到整数或浮点数就是NaN
console.log( parseFloat("") );    //NaN
console.log( parseFloat("11") );  //11
console.log( parseFloat("-11") );  //-11
//不再满足整数的条件，在2时终止
console.log( parseFloat("2.2") );   //2.2
////不认识八进制，忽略前面的所有0后判断
console.log( parseFloat("033") );   //33
console.log( parseFloat("004.4") ); //4.4
////认识16进制，但是会被转换成0
console.log( parseFloat("0x10") );   //0
console.log( parseFloat("0x10.6") ); //0
console.log( parseFloat("0xf.6") );  //0
////按顺序找
console.log( parseFloat("123数字在前字符串") ); //123
console.log( parseFloat("数字在后字符串0x123") ); //NaN  第一位就终止了
console.log( parseFloat("1.2.2") );  //1.2




//Object
console.log( parseFloat({"age":24.5}) ); //NaN
console.log( parseFloat({}) );         //NaN


/**
 * parseFloat是转换浮点数的，只有十进制有浮点数，所以没有第二个参数
 */




console.log(parseFloat());  //NaN