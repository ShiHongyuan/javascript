// 1. 逻辑非 !
//对应操作数先用Boolean()转换成Boolean值-----------布尔值求反----------结果是Boolean值
////同时使用两个逻辑非操作符,相当于Boolean()的结果
console.log(!!"string");   //true
console.log(!!0);          //false
console.log(!!null);       //false
console.log(!!undefined);  //false


// 2. 逻辑与 &&
////（1）是短路操作，即第一个操作数是布尔值false，就不会执行第二个操作数，直接返回false
console.log("第一个是布尔值false");
console.log(false && "");        //false
console.log(false && "123");     //false
console.log(false && 0);         //false
console.log(false && 100);       //false
console.log(false && {});        //false
console.log(false && null);      //false
console.log(false && undefined); //false

console.log("第一个是布尔值false，第二个操作数未声明也不会发生错误");
var found = false;
var result = (found && someUndefinedVariable); // someUndefinedVariable未声明也不会发生错误
console.log(result); // 会执行（"false"）

////（2）两个操作数都是Boolean值时，按照与操作返回true或false
////（3）操作数至少有一个不是Boolean值，而是属于这些对象（object、string（除""外）、number（除0、NaN外））中，则认为该对象为真，
////     如果最终结果是真，但是只要有一个操作数不是Boolean，就返回第二个操作数，第二个操作数是什么就返回什么

console.log("第一个为真对象，第二个为Boolean");
////////string
console.log("123" && true);   //true
console.log("123" && false);  //false
////////number
console.log(100 && true);     //true
console.log(100 && false);    //flase
////////object
var object = new Object({name:"shihongyuan",sex:"girl"});
console.log({} && true);      //true      Boolean({})值为true
console.log({} && false);     //false
console.log(object && true);  //true
console.log(object && false); //false


console.log("第一个是布尔值true，第二个为真对象");
////////string
console.log(true && "123");      //"123"
////////number
console.log(true && 100);        //100
////////object
var object = new Object({"name":"shihongyuan",sex:"girl"});
console.log(true && {});         //{}
console.log(true && object);     //{ name: 'shihongyuan', sex: 'girl' }



console.log("两个都是真对象");
////////string
console.log("222" && "123");      //"123"
////////number
console.log(99 && 100);           //100
////////object
var object = new Object({"name":"shihongyuan",sex:"girl"});
console.log(object && {});        //{}
console.log({} && object);        //{ name: 'shihongyuan', sex: 'girl' }



////（4）操作数包含任意个假对象，假对象为（""、0、NaN、null、undefined），因为遇到第一个假对象时可以断定逻辑式整个为假，所以在遇到第一个假对象时就直接返回这个假对象

console.log("至少有一个是假对象");

console.log("" && false);       //""
console.log("" && true);        //""
console.log(true && "");        //""

console.log(0 && true);         //0
console.log(0 && false);        //0
console.log(true && 0);         //0

console.log(NaN && true);       //NaN
console.log(NaN && false);      //NaN
console.log(true && NaN);       //NaN

console.log(null && true);      //null 
console.log(null && false);     //null
console.log(true && null);      //null

console.log(undefined && true); //undefined
console.log(undefined && false);//undefined
console.log(true && undefined); //undefined

console.log("" && 0);           //""
console.log(NaN && "");         //NaN
console.log(0 && null);         //0
console.log(null && undefined); //null
console.log(undefined && null); //undefined








// 2. 逻辑或 ||
////（1）是短路操作，即第一个操作数是布尔值true，就不会执行第二个操作数，直接返回true
console.log("第一个是布尔值true");
console.log(true || "");        //true
console.log(true || "123");     //true
console.log(true || 0);         //true
console.log(true || 100);       //true
console.log(true || {});        //true
console.log(true || null);      //true
console.log(true || undefined); //true

console.log("第一个是布尔值true，第二个操作数未声明也不会发生错误");
var found = true;
var result = (found || someUndefinedVariable); // someUndefinedVariable未声明也不会发生错误
console.log(result); // 会执行（"true"）

////（2）两个操作数都是Boolean值时，按照与操作返回true或false
////（3）操作数至少有一个不是Boolean值，而是至少有一个是这些真对象（object、string（除""外）、number（除0、NaN外）），
////     则最终结果为真，但是只要有一个操作数不是Boolean，就返回遇到的第一个遇到的真对象,对象是什么就返回什么

console.log("第一个为真对象，第二个为任意值（false、true、真对象、假对象）");
////////string
console.log("123" || true);         //"123"
console.log("123" || false);        //"123"
console.log("123" || "222");        //"123"
console.log("123" || "");           //"123"
////////number
console.log(100 || true);           //100
console.log(100 || false);          //100
console.log(100 || 99);             //100
console.log(100 || "");             //100
console.log(100 || NaN);            //100
////////object
var object = new Object({name:"shihongyuan",sex:"girl"});
console.log({} || true);             //{}
console.log({} || false);            //{}
console.log(object || null);         //{ name: 'shihongyuan', sex: 'girl' }
console.log(object || undefined);    //{ name: 'shihongyuan', sex: 'girl' }




console.log("第一个为任意假值（false、假对象），第二个为真对象");
////////string
console.log(false || "123");      //"123"
console.log("" || "123");         //"123"
////////number
console.log(false || 100);        //100
console.log(0 || 100);            //100
////////object
var object = new Object({"name":"shihongyuan",sex:"girl"});
console.log(false || {});         //{}
console.log(null || object);      //{ name: 'shihongyuan', sex: 'girl' }



////（4）操作数都是假对象，假对象为（""、0、NaN、null、undefined），则最终结果为假，返回第二个假对象

console.log("两个都是假对象");

console.log("" || "");                 //""
console.log("" || 0);                  //0
console.log("" || NaN);                //NaN

console.log(0 || 0);                   //0
console.log(0 || null);                //null
console.log(0 || undefined);           //undefined

console.log(NaN || NaN);               //NaN
console.log(NaN || 0);                 //0
console.log(NaN || "");                //""

console.log(null || null);             //null 
console.log(null || undefined);        //undefined
console.log(null || "");               //""

console.log(undefined || undefined);   //undefined
console.log(undefined || null);        //null
console.log(undefined || 0);           //0