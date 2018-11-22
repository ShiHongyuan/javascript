### json转string
```javascript
var json = {"opt":"shihongyuan","age":"26"}
// 错误的
var s = json.toString
s
ƒ toString() { [native code] }

var s = json.toString()
s
"[object Object]"
typeof s
"string"

// 正确的
var s = JSON.stringify(json)
s
"{"opt":"shihongyuan","age":"26"}"
typeof s
"string"
```

### string转json
```javascript
var j = JSON.parse(s)
j
{opt: "shihongyuan", age: "26"}
j.age
"26"
j.opt
"shihongyuan"
```

### json的数组转string
```javascript
var arr = [{"opt":"shihongyuan","age":"26"}]
var ss = JSON.stringify(arr)
ss
"[{"opt":"shihongyuan","age":"26"}]"
```

### string转json数组
```javascript
var jj = JSON.parse(ss)
jj
[{…}]
0: age: "26"opt: "shihongyuan"
__proto__: Object
length: 1
__proto__: Array(0)
jj[0]
{opt: "shihongyuan", age: "26"}
jj[0].age
"26"
jj[0].opt
"shihongyuan"
```




