/**
 * Date 日期 一种数据结构 一种引用类型
 * 日期有很多种表示格式
 * 日期分为UT、UTC、GMT
 * UT:世界时（世界统一时间）按照天体运动计算的，时间流动不均匀
 * UTC:协调世界时，为了反映均匀的原子时间，在UT的基础上进行秒级的调整，与UT的差距在0.9秒内
 * GMT:格林威治平时，UTC的民间称法
 * 北京时间 = UTC+8 = GMT+8
 * Date：用UTC保存日期，存储的是从1970 年1 月1 日午夜（零时）开始经过的毫秒数
 */

//创建Date
//// 1. 调用Date构造函数
//////（1）构造函数没有传入参数，默认时间为当前时间
var time = new Date();
console.log(time);                                      //2017-02-27T05:05:34.125Z
console.log(time.getDate());                            //27
   
//////（2）构造函数传入参数Date.parse(指定时间的字符串)，可以指定创建相应的时间        
var time = new Date(Date.parse("June 27,1992"));
var time = new Date(Date.parse("Tue June 27 1992 15:55:00 GMT+8"));
var time = new Date(Date.parse("6/27/1992"));    
console.log(time);                                       //1992-06-26T16:00:00.000Z        这是我输入时间的UTC时间格式
console.log(time.getFullYear());                         //1992    
console.log(time.getMonth());                            //5
console.log(time.getDate());                             //27

var time = new Date("June 27,1992");  //直接传入字符串作参数，Date构造函数检测到是字符串，会自己先调用Date.parse()，结果与前面一样
console.log(time.getFullYear());                         //1992
console.log(time.getMonth());                            //5
console.log(time.getDate());                             //27

//////（3）构造函数传入参数Date.UTC(年份（必须）、月份（0-11必须）、日（1-31不传入默认是0）、小时（0-23不传入默认是0）、分钟（0-59不传入默认是0）、秒（0-59不传入默认是0）、毫秒（不传入默认是0）)，可以指定创建相应的时间
var time = new Date(Date.UTC(1992,5));
console.log(time);                                       //1992-06-01T00:00:00.000Z
console.log(time.getFullYear());                         //1992
console.log(time.getMonth());                            //5
console.log(time.getDate());                             //1

var time = new Date(1992,5,27); //直接传入数字组作参数，Date构造函数检测到一开始是数字，会自己先调用Date.UTC()，结果与前面一样
console.log(time.getFullYear());                         //1992
console.log(time.getMonth());                            //5
console.log(time.getDate());                             //27

//获取当前
var now = Date.now();
console.log(now);                                        //1488172230941


//比较时间：因为Date存储的是毫秒数，可以直接比较两个时间的大小，来确定时间的顺序
var start = Date.now();
function doSomething(){
    console.log("doSomething");;
}
var stop = Date.now();
console.log(start);
console.log(stop);
console.log(start < stop); 

//只能获取构造函数创建的时间的参数，Date.now()不能获取时间
////获取时间的各个当地时间参数
console.log(time.getTime());                              //709574400000
console.log(time.getFullYear());                          //1992
console.log(time.getMonth());                             //5
console.log(time.getDate());                              //27
console.log(time.getDay());                               //6             星期日-星期六 0-6
console.log(time.getHours());                             //0             缺省的默认值是0
console.log(time.getMinutes());                           //0
console.log(time.getSeconds());                           //0
console.log(time.getMilliseconds());                      //0
////获取时间的UTC时间格式 
console.log(time.getUTCFullYear());                       //1992                  
console.log(time.getUTCMonth());                          //5
console.log(time.getUTCDate());                           //26 
console.log(time.getUTCDay());                            //5
console.log(time.getUTCHours());                          //16
console.log(time.getUTCMinutes());                        //0
console.log(time.getUTCSeconds());                        //0
console.log(time.getUTCMilliseconds());                   //0
////时间与UTC时间相差的分钟数
console.log(time.getTimezoneOffset());                    //-480

//设置时间的各个参数
var date = new Date();
date.setFullYear(1992);    //设置当地时间 
////设置UTC时间
date.setUTCMonth(5);                                     
date.setUTCDate(26);     
console.log(date.getFullYear());                           //1992
console.log(date.getMonth());                              //5
console.log(date.getDate());                               //26

