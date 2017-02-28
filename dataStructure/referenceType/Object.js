/**
 * Object  对象 一种数据类型 一种数据结构 一种引用类型
 */
//创建方式
//// 1. 调用构造函数
var person = new Object();    //默认构造函数，定义了默认属性和方法
person.name = "shy";                    
person.age = 24;

//// 2.对象字面量：不会调用Object的构造函数
var person = {};          //空的{}只定义Object的默认属性和方法
person.name = "shy";
person.age = 24;

var person = {name:"shy",age:24};   //不为空的对象字面量初始化了Object的实例,属性值是什么类型就写成什么类型


//访问属性值的方式
/////1. 点表示法
var person = {name:"shy","age":24,1:true,"0":false}; //属性名相当于一个标志符，但是在对象中可可以接受不符合标识符规范的（字符串、以数字开头）的属性名
                                                     //但是通过属性名访问属性值时要符合标识符规范地访问
console.log(person.name);        //shy
console.log(person.age);         //24        "age"属性在对象中定义时是字符串，但是不符合标识符规范，在访问时要用不是字符串的age

//console.log(person.1);         //由于属性名1在任何形式下都不符合标识符规范，所以无法通过点表示法访问
//console.log(person."1");

//// 2. 方括号表示法:[]中必须是字符串形式的属性名
var person = {name:"shy","first name":"shi","age":24,1:true,"0":false};
console.log(person["name"]);     //shy    
console.log(person["age"]);      //24

//////（1） 属性名不符合标识符规范，又不能通过点表示法访问的时候
console.log(person["first name"]);             //shi     
console.log(person["1"]);                      //true
console.log(person["0"]);                      //false

//////（2） 因为[]中是属性名的字符串，可以放入变量来代替属性名的字符串
var variableName = "name";
console.log(person[variableName]);             //shy

var variableFirstName= "first name";           
console.log(person[variableFirstName]);        //shi


//向函数传入大量可选参数，又不用在外面建立新的对象，可以用对象字面量

function displayInfo(args) {
    var output = "";
    if (typeof args.name == "string"){          //typeof的返回值是个string，不然就成未声明的标识符了
        output += "Name: " + args.name + "\n";
    }
    if (typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }
    if (typeof args["first name"] == "string") {
        args["first name"] = "shitou";
    }
    console.log(output);
}

displayInfo({
    name: "Nicholas",
    age: 29
});                                             //Name: Nicholas
                                                //Age: 29
            
displayInfo({                                   //Name: Greg
    name: "Greg"
});

//如果在外面建立一个对象后，再把对象传入函数，函数结束后不会释放其值的空间，就浪费了空间，还要手动解除引用才行
var object = {
    name: "shy",
    age: 24,
    "first name":"shi"
};                                                 
displayInfo(object);                            //Name: shy
                                                //Age: 24

console.log(object["first name"]);              //shitou





