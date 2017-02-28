/**
 * Array  数组 一种数据结构 一种引用类型
 * 数组每一项都可以保存不同类型的数据
 * 数组的大小可以在使用中自由改变
 */
//创建方式
//// 1. 调用构造函数
var colors = new Array();              //创建默认属性和方法
var colors = new Array(20);            //同时初始化为20项undefined
var colors = new Array("red","blue","green");      //同时初始化3项数组值
var colors = Array(1);                 //创建Array时可以省略new
var colors = Array("pink");
console.log(colors[0]);                //pink

//// 2. 数组字面量：不会调用Array的构造函数，不能初始化为固定的项数
var colors = [];                       //创建默认属性和方法
var colors = ["red","blue","green"];   //同时初始化3项数组值
var colors = [5];                      //会认为是初始化时包含一项：数字5
console.log(colors.length);            // 1 
console.log(colors[0]);                // 5

//访问属性值的方式：是能用[]
colors[0] = "change";
console.log(colors[0]);                //change

//数组的length:不单单是属性
//// 1. 获取长度
colors.length;
//// 2. 缩小长度，从数组的末尾移除项
var colors = ["red","blue","green"];  
colors.length = 1;
console.log(colors[0]);                 //red
console.log(colors[1]);                 //undefined
console.log(colors[2]);                 //undefined

//// 3. 增加长度，从数组的末尾开始添加项,添加的没有被指定的项都是undefined
var colors = ["red","blue","green"];  
colors.length = 4;
console.log(colors[2]);                 //green
console.log(colors[3]);                 //undefined

//// 4. 定位长度，从数组的末尾开始添加项到定位处
var colors = ["red","blue","green"];  
colors[99] = "yellow";
console.log(colors.length);             //100


//检测一个对象是否是数组类型
//// 1. instanceof：在不同的全局环境中不稳定（两个网页互传递Array）
colors instanceof Array
//// 2. Array.isArray(value)  浏览器兼容性不好
console.log(Array.isArray(colors));     //true
//// 3. Object.prototype.toString.call(value)  浏览器兼容性较好
console.log(Object.prototype.toString.call(colors));         //[object Array]


//Array转换成字符串的函数：toLocaleString() toString() valueOf() join()
//// 1. toString() :调用数组每一项的toString()方法转换成字符串，再用逗号把每一项拼接成字符串

var colors = ["red","blue","green"];
console.log(colors.toString());             //red,blue,green

//// 2. valueOf():和toString()相同
console.log(colors.valueOf());              //['red','blue','green']

//// 3. toLocaleString()：调用数组每一项的toLocaleString()方法转换成字符串，再用逗号把每一项拼接成字符串
console.log(colors.toLocaleString());        //red,blue,green

//// 4. join(用作分隔的字符串或无参数或传入undefined默认为逗号) ：不同的是可以使用不同的分隔符来连接字符串
////// join(用作分隔的字符串)
console.log(colors.join("||"));              //red||blue||green
////// join(无参数默认为逗号)
console.log(colors.join());                  //red,blue,green
////// join(undefined默认为逗号)
console.log(colors.join(undefined));         //red,blue,green

//// 5. 直接显示数组，与valueOf()结果相同

console.log(colors);                         //['red','blue','green']

//// 6. 数组中的null undefined 转换成字符串时为空字符串""
var names = ["shy",null,"shitou",undefined];  
console.log(names.toString());               //shy,,shitou,
console.log(names.valueOf());                //['shy',null,'shhitou',undefined]
console.log(names.toLocaleString());         //shy,,shitou,
console.log(names.join());                   //shy,,shitou,
console.log(names);                          //shy,,shitou,



//栈方法：push() pop()
//// 1. push():参数任意数量，按顺序加入数组末端，返回加入参数后的数组长度
var colors = ["red","blue","green"];
var count = colors.push("yellow",null,undefined,12);
console.log(count);                           //7
console.log(colors[4]);                       //null
console.log(colors[6]);                       //12

//// 2. pop():从数组末尾取出一项，返回删除项的值
var colors = ["red","blue","green"];
var result = colors.pop();
console.log(colors.length);                   //2
console.log(result);                          //green

//队列方法：shift() push()   unshift() pop()
//// 1. 正向队列 队尾进，队头出
var colors = ["red","blue","green"];
var count = colors.push("pink","white");
console.log(count);                           //5
console.log(colors.toString());               //red,blue,green,pink,white

var result = colors.shift();                  //移出时每次只能移除一项
console.log(colors.length);                   //4
console.log(result);                          //red

//// 2. 反向队列 队头进，队尾出
var colors = ["red","blue","green"];
var count = colors.unshift("pink","white");
console.log(count);                           //5
console.log(colors.toString());               //pink,white,red,blue,green

var result = colors.pop();                    
console.log(colors.length);                   //4
console.log(result);                          //green


//重排序法：sort() reverse()
//// 1. sort():首先调用每一项的toString()转换后，在比较其字符串大小进行重排序（即使数字也是比较的字符串大小），会改变数组自身
var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values);                          //[0,1,10,15,5]
//////给sort()传递一个比较函数作为参数，比较时按比较函数比，而不是都先转成string比，大的返回正数，小的返回负数，相等的返回0
//（1）正序比较函数
function compare1(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}

//（2）倒序比较函数
function compare2(value1, value2) {
    if (value1 < value2) {
        return 1;
    } else if (value1 > value2) {
        return -1;
    } else {
        return 0;
    }
}

var values = [0, 1, 5, 10, 15];
values.sort(compare1);
console.log(values);                          //[0,1,5,10,15]
var values = [0, 1, 5, 10, 15];
values.sort(compare2);
console.log(values);                          //[15,10,5,1,0]

//// 1. reverse():不会比较，只是把数组原来的顺序反过来，会改变数组自身
var values = [0, 15, 10, 5, 1];
values.reverse();
console.log(values);                          //[1,5,10,15,0]


//操作方法：concat() slice() splice()
//// 1. concat():连接数组，给数组后面添加数组或项，不会改变数组自身,返回一个新数组

//////（1）concat()没有参数，只是复制一次原数组，不添加任何项
var colors = ["red","blue","green"];
var colors2 = colors.concat();
console.log(colors);                          //['red','blue','green']
console.log(colors2);                         //['red','blue','green']

//////（2）concat()参数是要添加的数组或项,参数数量任意
var colors = ["red","blue","green"];
var colorss = ["white","black"];
var colors2 = colors.concat(colorss,"yellow",["pink","brown"]);
console.log(colors2);                         //['red','blue','green','white','black','yellow','pink','brown']

//// 2. slice():截取数组一部分创建一个新数组，不会改变数组自身
//////（1）slice()只有一个参数，返回从参数位置到数组末尾的新数组
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(2);
console.log(colors2);                         //['blue','yellow','purple']

//////（2）slice()有两个个参数，返回从参数位置1到参数位置2（不包括位置2）之间的新数组
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1,3);
console.log(colors2);                         //['green','blue']

//////（3）slice()参数如果是负数，先转换负参数，用数组的长度加上负数作为转换结果
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1,-2);             // ==slice(1,3)
console.log(colors2);                         //['green','blue']

var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(-2,-1);            // ==slice(3,4)
console.log(colors2);                         //['yellow']

//////（4）slice()参数或者转换后超出范围，或者前大后小，就返回空数组
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(10);              
console.log(colors2);                         //[]

var colors2 = colors.slice(-1,1);              
console.log(colors2);                         //[]


//// 3. splice():在数组任意位置删除、插入和替换，会改变数组自身,返回被删除的项组成的数组，没有删除的就返回空数组
//////（1）splice(开始删除的位置，一共要删除的项数): 删除
var colors = ["red", "green", "blue"];
var removed = colors.splice(1,2);              
console.log(colors);                         //['red']
console.log(removed);                        //['green','blue']

//////（2）splice(开始插入的位置，0（删除的项数），插入的项的值（可以插入任意多项）): 插入
var colors = ["red", "green", "blue"];
var removed = colors.splice(1,0,"white","black");              
console.log(colors);                         //['red','white','black','green','blue']   把原本1的位置往后移，再插入
console.log(removed);                        //[]

//////（3）splice(开始替换的位置，一共要删除的项数，插入的项的值（可以插入任意多项，插入的项数和前面删除的项数不一定要相等）): 替换
var colors = ["red", "green", "blue"];
var removed = colors.splice(1,1,"white","black");              
console.log(colors);                         //['red','white','black','blue']
console.log(removed);                        //['green']

//位置方法：indexOf() lastIndexOf()
//// 1. indexOf():从前往后找，查找匹配项（全等才匹配），返回第一个匹配的正序位置，没找到返回-1
//////（1）indexOf(要匹配的项的值)
var numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers.indexOf(4));             //3
//////（2）indexOf(要匹配的项的值,从那个位置开始往后找)
var numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers.indexOf(4,3));           //3
console.log(numbers.indexOf(4,4));           //5

//// 2. lastIndexOf():从后往前找，查找匹配项（全等才匹配），返回第一个匹配的正序位置，没找到返回-1
//////（1）lastIndexOf(要匹配的项的值)
var numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers.lastIndexOf(4));         //5
//////（2）lastIndexOf(要匹配的项的值,从那个位置开始往前找)
var numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers.lastIndexOf(4,5));       //5
console.log(numbers.lastIndexOf(4,4));       //3    逆着找，但是匹配项的位置是在数组中正序的位置索引


//迭代方法：every()  some()  forEach()  filter()  map() 传一个函数作参数，对每一项一次运行这个函数，返回的结果不一样
//// 1. every(function(item,index,array){}) : 每一项运行函数后都返回true，every才返回true，否则false

var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array){  //item：要运行函数的这一项 index：item在数组中的位置 array：numbers数组
    return (item > 2);
});
console.log(everyResult);                     //false，不是每一项都大于2

//// 2. some(function(item,index,array){}) : 每一项运行函数后只要某一项返回true，some都返回true，否则false
var numbers = [1,2,3,4,5,4,3,2,1];
var someResult = numbers.some(function(item, index, array){
    return (item > 2);
});
console.log(someResult);                      //true,只要有一项大于2

//// 3. forEach(function(item,index,array){}) : 每一项运行函数，没有返回值
var numbers = [1,2,3,4,5,4,3,2,1];
numbers.forEach(function(item,index,array){
    array[index] = item * 2;
});
console.log(numbers);                         //[2,4,6,8,10,8,6,4,2]

//// 4. filter(function(item,index,array){}) : 每一项运行函数后返回true的项，按顺序组成一个新数组返回
var numbers = [1,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function(item, index, array){
    return (item > 2);
});
console.log(filterResult);                    //[3,4,5,4,3]

//// 5. map(function(item,index,array){}) : 每一项运行函数后返回的结果，按顺序组成一个新数组返回
var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function(item, index, array){
    return (item > 2);
});
console.log(mapResult);                       //[false,false,true,true,true,true,true,false,false]

var mapResult = numbers.map(function(item, index, array){
    return (item * 2);
});
console.log(mapResult);                       //[2,4,6,8,10,8,6,4,2]



//归并方法：reduce() reduceRight()  与迭代方法类似，只是每一项调用函数后的返回值作为下一项调用函数的参数传入
//// 1. reduce(每一项上要调用的函数，第一项调用函数时的prev的基础值（不传入的话从数组第二项开始）) 从数组前面开始往后遍历

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur * 2;
});
console.log(sum);                             //29  没有第二个参数，函数从第二项2开始被调用

var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur * 2;
},1); 
console.log(sum);                             //31  有第二个参数，函数从第一项1开始被调用，第一项调用时的prev就是第二个参数值

//// 2. reduceRight(每一项上要调用的函数，最后一项调用函数时的prev的基础值（不传入的话从数组倒数第二项开始）) 从数组后面开始往前遍历

var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev, cur, index, array){
    return prev + cur * 2;
});
console.log(sum);                             //25  没有第二个参数，函数从倒数第二项4开始被调用

var sum = values.reduceRight(function(prev, cur, index, array){
    return prev + cur * 2;
},1); 
console.log(sum);                             //31  有第二个参数，函数从最后一项5开始被调用，最后一项调用时的prev就是第二个参数值



