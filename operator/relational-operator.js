// 1.两个操作数都是数值 < >  <= >= 包含NaN，比较结果为false
console.log(NaN < 11);           //false
// 2.两个都是字符串  从第一个字符开始比较字符编码值
console.log("Brick" < "alpha");  //true  B 66 < a 97
console.log("23" < "3");         //true  "2" < "3"
// 3.不是两个数值也不是两个字符串的情况，也没有对象，就都用Number()转换成数值后再比较
console.log("10" < 11);          //true     10<11 
console.log(true < 11);          //true     1<11
console.log(null < 11);          //true     0<11
console.log(undefined < 11);     //false    NaN<11
console.log("10" < false);       //false    10<0
console.log(null < undefined);   //false    0<NaN

//如果是对象，用toString()先转换成字符串再用上述方法
console.log({} < "abc");         //true     "[object Object]" < "abc"  [ 91 <  a 97
console.log({} < "Bbc");         //false    [ 91 < B 66
console.log({} < 12);            //false    Number("[object Object]") = NaN < 12

