/**
 * transform to String
 * 不作为构造函数
 */


//没有任何参数，默认参数未定义
console.log(toString());  //[object Undefined]

//Boolean、String、Number、Object有方法toString()

//Boolean
console.log( true.toString());     //"true"
console.log( (false).toString() ); //"false"

//String
console.log( ("任何非空字符串").toString() ); //"任何非空字符串"
console.log( ("").toString() );               //""

//Number ：默认都转换成十进制数
console.log( (Number.MAX_VALUE).toString() );         //"1.7976931348623157e+308"          
console.log( (Number.POSITIVE_INFINITY).toString() ); //"Infinity"   进一步证明了存的就是这个 
console.log( (Number.NEGATIVE_INFINITY).toString() ); //"-Infinity"          
console.log( (NaN).toString() );                      //NaN
////10进制、8进制、16进制都认识-------默认转换成十进制
console.log( (11).toString() );   //"11"
console.log( (-11).toString() );  //"-11"
console.log( (2.2).toString() ); //"2.2"
console.log( (-010).toString() ); //"-8"
console.log( (0x10).toString() ); //"16"

//Object
console.log( ({"name":"shihongyuan"}).toString() );   //[object Object]
console.log( ({}).toString() );                       //[object Object]     



/**
 * undefined、null没有方法toString()
 * 运行到这里，js报错
 */
//Undefined
//console.log( (undefined).toString() ); 

//Null
//console.log( (null).toString() ); 






/**
 * toString()有一个可传参数，转换成字符串的基数
 * 十进制、八进制、十六进制---------------转换成基数规定的进制数
 * 转换成的八进制、十六进制都不带符号
 */
//10进制------------转换成各种进制
console.log( (10).toString(2) );     //"1010"
console.log( (10).toString(8) );     //"12"  
console.log( (10).toString(10) );    //"10"
console.log( (10).toString(16) );    //"a"   
//8进制------------转换成各种进制
console.log( (010).toString(2) );    //"1000"
console.log( (010).toString(8) );    //"10"
console.log( (010).toString(10) );   //"8" 
console.log( (010).toString(16) );   //"8"   
//16进制------------转换成各种进制
console.log( (0x10).toString(2) );   //"10000"
console.log( (0x10).toString(8) );   //"20"
console.log( (0x10).toString(10) );  //"16"
console.log( (0x10).toString(16) );  //"10" 