// 1.Multiplication 乘法 *
////操作数不是数值的，先用Number()转换成数后再作乘法
////如果只有一个操作数有符号，那么结果就是负数
////操作数都是数后，
//////（1）乘积超过了数值范围，则结果为Infinity或-Infinity
console.log(Infinity*Infinity);                               //Infinity
console.log(Infinity*-Infinity);                              //-Infinity
console.log(-Infinity*2);                                     //-Infinity
console.log(Number.MAX_VALUE*Number.MAX_VALUE);               //Infinity
console.log(-Number.MAX_VALUE*Number.POSITIVE_INFINITY);      //-Infinity
//////（2）Infinity与0，乘积为NaN
console.log(Infinity*0);                                      //NaN
console.log(0*-Infinity);                                     //NaN
//////（3）乘数包含NaN，乘积为NaN
console.log(Infinity*NaN);                                    //NaN
console.log(NaN*NaN);                                         //NaN

// 2.Division 除法 /
////操作数不是数值的，先用Number()转换成数后再作除法
////如果只有一个操作数有符号，那么结果就是负数
////操作数都是数后，
//////（1）商超过了数值范围，则结果为Infinity或-Infinity
console.log(Infinity/2);                               //Infinity
console.log(-Infinity/2);                              //-Infinity
console.log(Infinity/Number.MAX_VALUE);                //Infinity 
//////（2）Infinity作为被除数，商为
console.log(Infinity/0);                               //Infinity
console.log(Infinity/-0);                              //-Infinity
console.log(Infinity/Infinity);                        //NaN
//////（3）Infinity作为除数，商为
console.log(0/Infinity);                               //0
console.log(-Infinity/Infinity);                       //NaN
console.log(-2/Infinity);                              //-0            商为0，并且符号是-，则应该是-0，因为0和-0显示时是不同的
console.log(Number.MAX_VALUE/-Infinity);               //-0
//////（3）0作为除数，商为
console.log(0/0);                                      //NaN                      
console.log(2/0);                                      //Infinity 
//////（3）0作为被除数，商为
console.log(0/2);                                      //0                      
console.log(-0/Infinity);                              //-0
//////（3）操作数包含NaN，商为NaN
console.log(Infinity/NaN);                             //NaN
console.log(NaN/NaN);                                  //NaN





// 3.Mod 求模 %
////操作数不是数值的，先用Number()转换成数后再作除法
////操作数都是数后，
//////（1）除法结果为Infinity或-Infinity的，模是NaN
console.log(Infinity%2);                               //NaN
console.log(-Infinity%2);                              //NaN
console.log(Infinity%Number.MAX_VALUE);                //NaN
console.log(Infinity%0);                               //NaN
console.log(Infinity%-0);                              //NaN
console.log(2%0);                                      //NaN
//////（2）除法结果为NaN的，模是NaN
console.log(Infinity%Infinity);                        //NaN
console.log(-Infinity%Infinity);                       //NaN
console.log(Infinity%NaN);                             //NaN
console.log(NaN%NaN);                                  //NaN
console.log(0%0);                                      //NaN
//////（3）除法结果为0（但是被除数不是0）的，模是被除数
console.log(-2%Infinity);                              //-2     
console.log(Number.MAX_VALUE%-Infinity);               //1.7976931348623157e+308
//////（4）被除数是0，模是0
console.log(0%Infinity);                               //0
console.log(0%2);                                      //0
