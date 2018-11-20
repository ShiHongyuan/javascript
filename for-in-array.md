### js中数组遍历的时候，常见的的是for循环
```javascript
for (var index = 0; index < myArray.length; index++) {
 console.log(myArray[index]);
}
```

### es5 遍历数组方法，按顺序输出
```javascript
myArray.forEach(function (value) {
 console.log(value);
});
```
短小精悍，简要的表达了效果，但是存在以下几种坑： 
1. 不能使用 break 语句来跳出循环； 
2. 不能使用 return 语句来从闭包函数中返回。

### es6 遍历数组方法，按顺序输出
```javascript
for (var value of myArray) {
  console.log(value);
}
```
是的，与之前的内建方法相比，这种循环方式看起来是否有些眼熟？那好，我们将要探究一下for-of循环的外表下隐藏着哪些强大的功能。现在，只需记住：

* 这是最简洁、最直接的遍历数组元素的语法
* 这个方法避开了for-in循环的所有缺陷
* 与forEach()不同的是，它可以正确响应break、continue和return语句
for-in循环用来遍历对象属性。

for-of循环用来遍历数据—例如数组中的值。

但是，不仅如此！

for-of循环不仅支持数组，还支持大多数类数组对象，例如DOM NodeList对象。

for-of循环也支持字符串遍历，它将字符串视为一系列的Unicode字符来进行遍历：
它同样支持Map和Set对象遍历。

对不起，你一定没听说过Map和Set对象。他们是ES6中新增的类型。我们将在后续的文章讲解这两个新的类型。如果你曾在其它语言中使用过Map和Set，你会发现ES6中的并无太大出入。

举个例子，Set对象可以自动排除重复项：

```javascript
// 基于单词数组创建一个set对象
var uniqueWords = new Set(words);
生成Set对象后，你可以轻松遍历它所包含的内容：


for (var word of uniqueWords) {
   console.log(word);
}
```


Map对象稍有不同：内含的数据由键值对组成，所以你需要使用解构（destructuring）来将键值对拆解为两个独立的变量：

```javascript
for (var [key, value] of phoneBookMap) {
   console.log(key + "'s phone number is: " + value);
}
```

解构也是ES6的新特性，我们将在另一篇文章中讲解。看来我应该记录这些优秀的主题，未来有太多的新内容需要一一剖析。

现在，你只需记住：未来的JS可以使用一些新型的集合类，甚至会有更多的类型陆续诞生，而for-of就是为遍历所有这些集合特别设计的循环语句。

for-of循环不支持普通对象，但如果你想迭代一个对象的属性，你可以用for-in循环（这也是它的本职工作）或内建的Object.keys()方法：

```javascript
// 向控制台输出对象的可枚举属性
for (var key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}
```

### for in循环遍历,不保证顺序，一般用于遍历对象
```javascript
for (var index in myArray) { 
 console.log(myArray[index]);
}
```
这看起来也很简洁，并且没有forEach的一些毛病； 
但是不建议对数组采取这种方法进行遍历，原因在于： 
代码中的 index 变量将会是 “0”、”1”、”3” 等这样的字符串，而并不是数值类型。如果你使用字符串的 index 去参与某些运算（”2” + 1 == “21”），运算结果可能会不符合预期。

```javascript
var myArray=[1,2,3,4,5];
for (var index in myArray) { 
 console.log(index+1);
}
```
输出结果如下： 
01
11
21
31
41

显而易见，index的数据类型是string并不是number，如果对index做些运算，那就尴尬了

还有一个毛病是不仅数组本身的元素将被遍历到，用户自己为数组添加的一些属性也会被遍历到，甚至数组原型链上的属性也可能被遍历到。

```javascript
var myArray=new Array(1,2,3,4,5);
      myArray.name="hello";
      Array.prototype.method=function(){
          console.log("world");
      }
      for (var index in myArray) {
          console.log(index);
      }
```
输出结果如下：
0
1
2
3
4
name
method

结果是不是很有意思

还有一个坑是： 
在某些情况下，上面代码将会以任意顺序去遍历数组元素，即显示顺序并不是按我们所想的那样。

因此，for-in 设计的目的是用于遍历包含键值对的对象，对数组并不是那么友好。 


