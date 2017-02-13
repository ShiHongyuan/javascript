//数值字面量 "123456"、 123、 false、 null、 undefined


//string
console.log(typeof("数值字面量的字符串"));
//typeof是操作符，不是函数，可以不要括号
console.log(typeof "数值字面量的字符串");

//number
console.log(typeof(123));
console.log(typeof 123);

//boolean
console.log(typeof(false));
console.log(typeof false);

//undefined
console.log(typeof(undefined));
console.log(typeof undefined);

//object null相当于一个指向空对象的指针
console.log(typeof(null));
console.log(typeof null);

//function 函数不是一种数据类型
console.log(typeof(function fun(a) {
    a = 2;
}));
console.log(typeof function fun(a) {
    a = 2;
});


//变量 
var stringVar = "变量的字符串";
//string
console.log(typeof(stringVar));
//typeof是操作符，不是函数，可以不要括号
console.log(typeof stringVar);


var numberVar = 456;
//number
console.log(typeof(numberVar));
console.log(typeof numberVar);


var booleanVar = true;
//boolean
console.log(typeof(booleanVar));
console.log(typeof booleanVar);



var undefinedVar;
 var undefinedVar3 = undefined;
//undefined
console.log(typeof(undefinedVar));
console.log(typeof undefinedVar);

//undefined  声明了未初始化和没声明都是undefined
console.log(typeof(undefinedVar2));
console.log(typeof undefinedVar2);

//undefined  是初始化为undefined也是undefined
console.log(typeof(undefinedVar3));
console.log(typeof undefinedVar3);


var nullVar = null;
var nullVar2 = {};
//object   null是一个空对象的指针，指向的值为空，数据类型为空
console.log(typeof(nullVar));
console.log(typeof nullVar);
//object   {}是一个对象的指针，指向的值为对象，数据类型是复杂数据类型
console.log(typeof(nullVar2));
console.log(typeof nullVar2);
//false  null的值是空的，{}的值不是空的，是一个空的对象，所以==为假，一个没有值一个有值，值不等
console.log({} == null);



function fun(a) {
    a = 2;
}
//function
console.log(typeof(fun));
console.log(typeof fun);

// undefined派生自null的意思是：两者都表示值为空，undefined想用原始类型来简单表示空的意思， 是在null的基础上发展而来的，
//他们的值不是任何对象，所以其==为真（值相等）
//true
console.log(undefined == null);

