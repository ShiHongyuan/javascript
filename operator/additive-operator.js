// 1.Addition 加法 +
////两个都是数
//////（1）关于Infinity的
console.log(Infinity+Infinity);         //Infinity
console.log(-Infinity+-Infinity);       //-Infinity
console.log(Infinity+-Infinity);        //NaN
//////（2）关于0的
console.log(0+0);                       //0
console.log(-0+-0);                     //-0
console.log(0+-0);                      //0
//////（3）包含NaN，和是NaN
console.log(NaN+Infinity);              //NaN
console.log(NaN+-2);                    //NaN


////至少有一个字符串，就要用String()将不是字符串的操作数转化成字符串后拼接起来
console.log(null+"12");                 //null12
console.log(undefined+"12");            //undefined12
console.log(1+"12");                    //112
console.log("0"+"12");                  //012
console.log(true+"12");                 //true12
console.log({}+"12");                   //[object Object]12


////没有字符串，也没有对象，但是至少有一个不是数值，就要用Number()将不是数值的操作数转化成数值后再相加，结果可能是真数，可能是NaN
console.log("没有字符串和对象，只有一个数值");  
console.log(null+12);                   //12             Number(null)==0
console.log(undefined+12);              //NaN            Number(undefined)==NaN
console.log(true+12);                   //13             Number(true)==1


console.log("两个都不是数值，也不是字符串和对象"); 
console.log(null+null);                 //0
console.log(null+undefined);            //NaN
console.log(true+false);                //1


////至少有一个是对象，就要用String()将所有操作数转化成字符串后拼接起来
console.log({}+null);                   //[object Object]null
console.log({}+undefined);              //[object Object]undefined
console.log({}+12);                     //[object Object]12
console.log(true+{});                   //true[object Object]
console.log("12"+{});                   //12[object Object]
console.log({}+{});                     //[object Object][object Object]





// 1.Subtraction 减法 -
////两个都是数
//////（1）关于Infinity的
console.log(Infinity-Infinity);         //Infinity
console.log(-Infinity-(-Infinity));     //-Infinity
console.log(Infinity-(-Infinity));      //NaN
console.log(-Infinity-Infinity);        //NaN
//////（2）关于0的
console.log(0-0);                       //0
console.log(-0-(-0));                   //-0
console.log(0-(-0));                    //0
console.log(-0-(+0));                   //0
//////（3）包含NaN，和是NaN
console.log(NaN-Infinity);              //NaN
console.log(NaN-2);                     //NaN


////至少有一个不是数，用Number()将不是数值的操作数转化成数值后再相减，若是对象，先用toString()转化成字符串后再用Number()转换成数
console.log(12-"1");                     //11
console.log(12-true);                    //12
console.log(12-null);                    //13               Number(null)==0
console.log(12-undefined);               //NaN              Number(undefined)==NaN
console.log(12-{});                      //NaN              toString({}) == NaN


