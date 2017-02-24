// 1.相等和不相等 ==和！=
////操作数包含NaN，比较结果是false，NaN也不等于NaN
console.log(NaN==NaN);                 //false
console.log(NaN==0);                   //false
console.log(NaN==false);               //false
////null和undefined比较时不能进行转换，所以只要null==undefined时才为true，他们的值相等
console.log(null==0);                  //false
console.log(undefined==0);             //false
console.log(undefined==null);          //true

////布尔值、string、对象都是先用Number()转换成数值后比较
console.log(true==1);                   //true
console.log("2.2"==2.2);                //true
console.log("0"==false);                //true

////两个操作数都是对象，直接比较两个对象，是同一个对象返回true，否则是false
var object = {name:"shihongyuan",age:24};
console.log({}=={});                    //false
console.log(object==object);            //true

////只有一个操作数是对象，另一个对象是任意值，先用valueOf()转换对象，再按照上述规则比较

console.log({}==2);                     //false         [object Object]==2
console.log({}==false);                 //false         [object Object]==0






// 2.全等和不全等 ===和！==
////所有操作符在比较时都不能转换，只有数据类型和值都相等时才全等
console.log(NaN===NaN);                 //false
console.log(NaN===0);                   //false
console.log(undefined===null);          //false
console.log(object==object);            //true