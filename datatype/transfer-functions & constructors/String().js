/**
 * transform to String
 * 作为String的构造函数
 */



//没有任何参数，默认函数返回值是""
console.log(String());  //""




//所有类型都有String()方法，作为toString()的补充，除null undefined外，都直接调用toString()

//Boolean
console.log( String(true) );    //"true"
console.log( String(false) );   //"false"

//String
console.log( String("任何非空字符串") ); //"任何非空字符串"
console.log( String("") );              //""

//Number ：默认都转换成十进制数
console.log( String(Number.MAX_VALUE) );         //"1.7976931348623157e+308"          
console.log( String(Number.POSITIVE_INFINITY) ); //"Infinity"   进一步证明了存的就是这个 
console.log( String(Number.NEGATIVE_INFINITY) ); //"-Infinity"          
console.log( String(NaN) );                      //NaN
////10进制、8进制、16进制都认识-------默认转换成十进制
console.log( String(11) );   //"11"
console.log( String(-11) );  //"-11"
console.log( String(2.2) );  //"2.2"
console.log( String(-010) ); //"-8"
console.log( String(0x10) ); //"16"

//Object
console.log( String({"name":"shihongyuan"}) );   //[object Object]
console.log( String({}) );                       //[object Object]     



/**
 * undefined、null没有toString(),但是有String()方法
 */
//Undefined
console.log( String(undefined) ); //undefined

//Null
console.log( String(null) );      //null
 



/**
 * String()只有一个参数就是转换的值，不能指定转换的基数
 */
console.log( String(010,2) ); //8   第二个基数参数没有用，String只认第一个参数