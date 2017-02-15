/**
 * transform to 整数
 * 不作为构造函数
 */

//各种数据类型转换成整数

//Number
console.log( parseInt(Number.MIN_VALUE) );         //5 
console.log( parseInt(Number.POSITIVE_INFINITY) ); //NaN   与Number()和parseFloat()不一样
console.log( parseInt(-Infinity) );                //NaN   与Number()和parseFloat()不一样
console.log( parseInt(+0) ); //0
console.log( parseInt(-0) ); //0
console.log( parseInt(NaN) ); //NaN

//Boolean
console.log( parseInt(true) );  //NaN
console.log( parseInt(false) ); //NaN

//Null
console.log( parseInt(null) );   //NaN

//Undefined
console.log( parseInt(undefined) ); //NaN

//String：按顺序找不是看整体，除了前导0（除了16进制的前导0x），从第一个开始，遇到是数字或（+/-号）就往后，否则就终止，终止后未得到整数就是NaN
console.log( parseInt("") );    //NaN
console.log( parseInt("11") );  //11
console.log( parseInt("-11") );  //-11
//不再满足整数的条件，在2时终止
console.log( parseInt("2.2") ); //2
////不认识八进制，忽略前面的所有0后判断
console.log( parseInt("033") ); //33
console.log( parseInt("004.4") );//4
////认识16进制，转换成10进制输出
console.log( parseInt("0x10") ); //16
////按顺序找
console.log( parseInt("123数字在前字符串") ); //123
console.log( parseInt("数字在后字符串123") ); //NaN  第一位就终止了
console.log( parseInt("1.2.2") );  //1
console.log( parseInt("0x10.6") );  //16
console.log( parseInt("0xf.6") );  //15



//Object
console.log( parseInt({"age":25}) ); //NaN
console.log( parseInt({}) );         //NaN


/**
 * 第二个参数：转换时使用的基数
 * 被转换的数是16进制---------------------转换成10进制
 * 被转换的数可以省略0或0x
 */
//有0x
console.log( parseInt("0xA0") );  //160
//没有0x,没有基数参数
console.log( parseInt("A0") );    //NaN
//没有0x，有基数参数
console.log( parseInt("A0",16) ); //160

//有0
console.log( parseInt("070") );   //70
//没有0,没有基数参数
console.log( parseInt("70") );    //70
//没有0，有基数参数
console.log( parseInt("70",8) );  //56

console.log( parseInt("10",2) );  //2




console.log(parseInt());  //NaN