/**
 * transform to Number
 * 作为Number的构造函数
 */


//没有任何参数，默认函数返回值是0
console.log(Number());  //0



//各种数据类型转换成数值

//Number
console.log( Number(Number.MIN_VALUE) );         //5e-324  
console.log( Number(Number.POSITIVE_INFINITY) ); //Infinity 
console.log( Number(-Infinity) );                //-Infinity 
console.log( Number(+0) );  //0
console.log( Number(-0) );  //-0
console.log( Number(NaN) ); //NaN

//Boolean
console.log( Number(true) );  //1
console.log( Number(false) ); //0

//Null
console.log( Number(null) );   //0

//Undefined
console.log( Number(undefined) ); //NaN

//String：除了前导0（除了16进制的前导0x）以外，看整体是不是全部转换成number，否则就是NaN
console.log( Number("") );  //0
console.log( Number("11") );  //11
console.log( Number("-11") );  //-11
console.log( Number("2.2") ); //2.2
////不认识八进制，忽略前面的所有0后判断
console.log( Number("033") ); //33
console.log( Number("004.4") );//4.4
////认识16进制，转换成10进制输出
console.log( Number("0x10") ); //16
////整体上不能是一个数
console.log( Number("123数字在前字符串") ); //NaN
console.log( Number("数字在后字符串123") ); //NaN
console.log( Number("1.2.2") );  //NaN
console.log( Number("0x10.6") );  //NaN


//Object
console.log( Number({"age":25}) ); //NaN
console.log( Number({}) );         //NaN
