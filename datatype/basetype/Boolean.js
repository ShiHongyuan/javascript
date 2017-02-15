//Boolean的字面值有两个：true、false
console.log(typeof(true));  //boolean
console.log(typeof(false)); //boolean


//if之类的判断函数，判断值就先要用Boolean()转换成Boolean类型来判断
//message可以是任何值，除了是未声明的会报错以外
//var message; //false
//var message = 1;
//var message = "123";
var message = NaN; //false
if (message) {
    console.log(true);
}else{
    console.log(false);
}

if (Boolean(message)) {
    console.log(true);
}else{
    console.log(false);
}


//布尔值与01的字面值相等性
console.log(true==1); //true
console.log(false==0); //true







