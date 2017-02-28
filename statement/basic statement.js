// // 1. if语句
// if(condition){
//     ;
// }else if(condition){
//     ;
// }else{
//     ;
// }

// // 2. do-while语句 : 后测试循环语句，先执行循环体再测试条件，循环体至少被执行一次
// do{
//     ;
// }while(condition)

// // 3. while语句 : 前测试循环语句，先测试条件再执行循环体，循环体可能永远都不被执行
// while(condition){
//     ;
// }

// // 4. for语句 : 前测试循环语句，先测试条件再执行循环体，循环体可能永远都不被执行
// var count = 10;
// for (var i = 0; i < count; i++){
//     ;
// }
// console.log(i);         //语句局部变量在js中也可以在外部访问到，函数局部变量不能被外面访问，作用域不一样

// var i;
// for ( i = 0; i < count; i++){
//     ;
// }

// var i = 0;
// for ( ; i < count; ){
//     i++;
// }

// ////无限循环
// for ( ; ; ){
//     ;
// }


// // 5. for-in语句 : 枚举对象的属性名,依此获取in的对象的属性名字，但是获取顺序不确定
// var object = new Object({name:"shy",age:24,1:2});
// /////object是被枚举的对象
// for(var propName in object){
//     console.log(propName);        //1,name,age
// }

// ////若被枚举的对象为null或undefined，执行到这里会出错;ECMAScript 5 对这种情况不再抛出错误，而只是不执行循环体
// for(var propName in null){
//     console.log(propName);        //没有报错，没有执行循环体
// }

// for(var propName in undefined){
//     console.log(propName);        //没有报错，没有执行循环体
// }


// // 6. lable语句 : 给一个语句加上个名字，经常和break和continue合用
// labelName:statement;

// 7.break:退出函数体
////break:退出当前循环
var num = 0;
for (var i=0; i < 10; i++) {
    for (var j=0; j < 10; j++) {
        if (i == 5 && j == 5) {
            break;       //退出了内循环，但是没有退出外循环
        }
        num++;
    }
}
console.log(num);        //95

////break + lable:退出lable标记的循环
var num = 0;
outer:
for (var i=0; i < 10; i++) {
    for (var j=0; j < 10; j++) {
        if (i == 5 && j == 5) {
            break outer;  //退出了outer标记的循环，即退出外循环
        }
        num++;
    }
}
console.log(num);         //55


// 8.continue：退出函数体然后从函数顶部继续执行
////continue:退出当前循环，然后再继续当前循环
var num = 0;
for (var i=0; i < 10; i++) {
    for (var j=0; j < 10; j++) {
        if (i == 5 && j == 5) {
            continue;       //退出内循环一次，再继续内循环
        }
        num++;
    }
}
console.log(num);        //99

////continue + lable:退出lable标记的循环
var num = 0;
outer:
for (var i=0; i < 10; i++) {
    for (var j=0; j < 10; j++) {
        if (i == 5 && j == 5) {
            continue outer;  //退出outer标记的循环，再继续outer循环
        }
        num++;
    }
}
console.log(num);         //95


// 9. with：在外层设定一个对象，语句内部的所有未定义变量都是与设定的对象有关的
var object = new Object({name:"shy",age:24,1:2});
with(object){
    console.log(name);       //shy
    console.log(age);        //24
    console.log(object[1]);  //2
}


// 10. switch:比较的对象可以是任何数据类型，case的对象可以是变量、表达式，比较时时全等比较，不发生类型转换

////可以不用break，合并多种选择
var i = 25;
switch (i) {
    case 25:
        /* 合并两种情形 */
    case 35:
        console.log("25 or 35");              
        break;
    case 45:
        console.log("45");
        break;
    default:
        console.log("Other");
}                                        //"25 or 35"

i = 35;
switch (i) {
    case 25:
        /* 合并两种情形 */
    case 35:
        console.log("25 or 35");
        break;
    case 45:
        console.log("45");
        break;
    default:
        console.log("Other");
}                                        //"25 or 35"

////switch和case可以匹配任何数据类型
switch ("hello world") {
    case "hello" + " world":
        console.log("Greeting was found.");
        break;
    case "goodbye":
        console.log("Closing was found.");
        break;
    default:
        console.log("Unexpected message was found.");
}                                         //"Greeting was found."

////全等匹配，不转换类型
switch (10) {
    case "10":
        console.log("string 10");
        break;
    case 10:
        console.log("number 10");
        break;
    default:
        console.log("Other");
}                                         //"number 10"


