//String的值有两种：单引号、双引号
console.log(typeof("string")); //
console.log(typeof('string')); //

//字符字面量：字符串包含的一个字符字面量整体算一个字符（一字节）长度
var string = "\u03a3";
console.log(string);        //
console.log(string.length); //


//字符串重定义时原空间销毁，新建空间
var string = "hello";      //销毁hello
string = string + "-world"; //新建hello-world
console.log(string);