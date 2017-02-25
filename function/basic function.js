//函数 function                        
// 1. 关键字：function
function functionName(arg0,arg1,arg2,...argN) {
    
}

// 2. 函数返回值：函数外部不指定返回值，内部任意指定
////（1）在函数体的任意位置return任意类型的返回值
function sum(num1,num2){
    return num1 + num2;
}

console.log(sum(5,10));          //15

////（2）可以在函数体内实现多个return
function diff(num1,num2){
    if(num1 > num2){
        return num1 - num2;
    } else{
        return num2 - num1;
    }
}

console.log(diff(5,10));          //5

////（3）return后面的语句不再执行
function sayHi(name, message) {
    return "Hello " + name + "," + message;
    console.log("Hello " + name + "," + message); //永远不会执行
}

function sayHi(name, message) {
    return;
    console.log("Hello " + name + "," + message); //永远不会执行
}

////（4）没有指定返回值的函数都是默认返回一个undefined

/**
 * js 在执行代码前会对 变量（所以对关键字作变量名的错误会在预处理时发现，所以导致代码无法执行）、函数 进行预处理(类似于C等的编译)，
 * 处理完成之后再开始 由上至下执行脚本中的内容
 */
//所以可以先调用函数,再定义函数
var result = test();     
console.log(result);        //undefined

function test() {
    return;
}

function test2() {
}

var result = test2();     
console.log(result);        //undefined



// 3. 函数的命名参数：()里的参数，不用声明var
////（1）函数接收的参数跟命名参数没有关系，数量和数据类型都可以不匹配，接受的参数都是被放入类似于数组的arguments传进来的

//////函数体内可以通过arguments[]访问参数
function sayHi() {
    console.log("Hello " + arguments[0] + "," + arguments[1]);
}

sayHi("shihongyuan","How are you?");     //"Hello shihongyuan,How are you?"

//////有命名参数的，是按照顺序arguments[0]赋给name，arguments[1]赋给greeting
function sayHi2(name,greeting) {
    console.log("Hello " + name + "," + greeting);
}
sayHi2("shihongyuan","How are you?");    //"Hello shihongyuan,How are you?"

//////有命名参数的，函数体内可以混用命名参数和arguments来获取参数
function sayHi3(name) {
    console.log("Hello " + name + "," + arguments[1]);
}

sayHi3("shihongyuan","How are you?");    //"Hello shihongyuan,How are you?"

//////没有传入的参数默认是undefined
function sayHi4(name,greeting) {
    console.log("Hello " + name + "," + greeting + "," + arguments[2]);
}

sayHi4("shihongyuan");                   //"Hello shihongyuan,undefined,undefined"

//////命名参数和对应的arguments的对象是关联在一起的，可以说是同一个对象，任一变，另一个也跟着变
function sayHi5(name,greeting) {
    console.log(name);            //shihongyuan
    arguments[0] = "shy";
    console.log(name);            //shy
}

sayHi5("shihongyuan");                   //"Hello shihongyuan,undefined,undefined"

//////js函数的命名参数都是复制的，不能引用
var greeting = "000000";
function sayHi6(name,greeting) {
    greeting = "111111";
    console.log(greeting);          //"111111"
}

sayHi6("",greeting);       
console.log(greeting);              //"000000"


////（2）函数重载：函数预处理时忽略命名参数，所以js函数不能实现真正意义上的函数重载

//////出现相同的函数名，在预处理时后面个覆盖了前面个，调用时调用后面个

function addSomeNumber(num){
    return num + 100;
}

//虽然是在后面个函数定义前调用的，但是js预处理时，将这个名字的函数定义为后面个，前面调用时是从预处理里面的函数取的
var result = addSomeNumber(100);    
console.log(result);                  //300

//虽然与前面的同名函数的命名参数不同，但是预处理忽略命名参数，函数名相同就是和前面个是同个函数，会覆盖前面个的定义
function addSomeNumber(num,num1,num2) {
    return num + 200;
}

var result = addSomeNumber(100);
console.log(result);                  //300


////（3）模拟函数重载：js不能重载，可以通过判断传入参数的个数来执行不同的函数体，从而达到重载的目的
function doAdd(num1, num2) {
    if(arguments.length == 1) {
        console.log(num1 + 10);
    } else if (arguments.length == 2) {
       console.log(num1 + num2);
    }
}

doAdd(10);           //10+10=20

doAdd(10,20);        //10+20=30