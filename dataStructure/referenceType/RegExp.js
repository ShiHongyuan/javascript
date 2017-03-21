/**
 * RegExp  正则 一种数据结构 一种引用类型
 * 支持正则表达式进行表达式的匹配
 * 利用正则表达式进行相关函数的运算
 */

//模式元字符（匹配需转移\）
/**
 * () 捕获组，子表达式
 * [] 选择组
 * {} 匹配项
 * \ 转义
 * ^ 开始
 * $ 结束
 * | 或者，两项之间的选择
 * ? 0次或1次
 * + 1次或多次
 * * 0次或多次
 * . 匹配除换行符 \n 之外的任何单字符
 * {n} n>=0，匹配前面表达式n次
 * {n,} 匹配前面表达式至少n次
 * {n,m} 匹配前面表达式至少n次，最多m次
 * \n 换行符
 * \r 回车符
 * \s 任何空白字符
 * \S 任何非空白字符
 * \d 任何数字字符
 * \D 任何非数字字符
 * \w 任何单词字符
 * \W 任何非单词字符
 * [里面的^] 非
 */


//匹配模式的3种标志：在正则里面是可选项，可有可没有
////1. g：全局模式，搜索完被匹配的字符串为止，发现的匹配项不止只有一个。
////2. i：不区分大小写模式。
////3. m：多行模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。


//创建方式
var str = "catch.batff";
////1. 调用构造函数:用“”来描述正则
var pattern = new RegExp("[bc]at");
var pattern = new RegExp("[bc]at","gi");
////2. 字面量形式:用/来描述正则
var pattern = /[bc]at/;
var pattern = /[bc]at/i;
var pattern = /\.[bc]at/gi;  //要匹配.本身，所以用转义字符，匹配.cat或.bat

//两种创建方式的区别
var pat = /\[bc\]at/;
var par = new RegExp("\\[bc\\]at");
var pat = /\.at/;
var par = new RegExp("\\.at");
var pat = /name\/age/;
var par = new RegExp("name\\/age");
var pat = /\d.\d{1,2}/;
var par = new RegExp("\\d.\\d{1,2}");
var pat = /\w\\hello\\123/;
var par = new RegExp("\\w\\\\hello\\\\123");
////2. E3：字面量形式每次创建会替换上一个正则表达式，说有字面量共享一个正则实例；构造函数每次都会新建一个正则实例。E5不是了。

//正则实例的属性
var pattern1 = /\.[bc]at/i;
var pattern2 = new RegExp("\\.[bc]at","i");
////1. global：是否设置了全局g
console.log(pattern1.global);                     //false
////2. ignoreCase:是否设置了不区分大小写i          
console.log(pattern1.ignoreCase);                 //true
////3. multiline: 是否设置了多行模式m
console.log(pattern1.multiline);                  //false
////4. source: 正则表达式，是字面量形式的字符串形式，而不是构造函数中的字符串
console.log(pattern1.source);                     //"\.[bc]at"
console.log(pattern2.source);                     //"\.[bc]at"
////5. lastIndex：下次开始搜索的位置，默认是0
console.log(pattern1.lastIndex);                  //0

//正则实例的方法
////1. 正则.test(用来匹配的字符串)：检查这个字符串中有没有与正则模式匹配的
var text = "000-00-0000-777";
var pattern = /\d{3}-\d{2}-\d{4}/;
if (pattern.test(text)){
    console.log("有匹配的");
}
 
////2.正则.exec(用来匹配的字符串)：用来获取匹配的捕获组的，
/**有匹配项 有捕获组返回：数组[第一项：与整个正则模式最大匹配的匹配项，每项分别是与各个捕获组最大匹配的匹配项]，数组有两个属性：index：被匹配的字符串被匹配的开始位置；input：被匹配的字符串。
 * 有匹配项 没有捕获组返回：数组[唯一一项：与整个正则模式最大匹配的匹配项]，数组有两个属性：index：被匹配的字符串被匹配的开始位置；input：被匹配的字符串。
 * 没有匹配项返回：null
 */
var text = "0 mom and dad and baby123";
var pattern = /mom( and dad( and baby)?)?/;
var matches = pattern.exec(text);
console.log(matches.index);   // 2
console.log(matches.input);   // "0 mom and dad and baby123"
console.log(matches[0]);      // "mom and dad and baby"
console.log(matches[1]);      // " and dad and baby"
console.log(matches[2]);      // " and baby"

var text = "0 mom and dad and baby123";
var pattern = /mom and dad/gi;
var matches = pattern.exec(text);
console.log(matches.index);   // 2
console.log(matches.input);   // "0 mom and dad and baby123"
console.log(matches[0]);      // "mom and dad"

var text = "0 mom and dad and baby123";
var pattern = /(mom and dad){2}/gi;
var matches = pattern.exec(text);
console.log(matches);         //null





