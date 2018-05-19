//MDN JavaScript re-introduction
'use strict';
console.log('hello'.length);
//false,0,'',NaN,null,undefined => false
//それ以外 => true
console.log(!!undefined);

const array = ['dog','cat','hen'];
let result = '';
array.forEach(function(currentValue, index, array){
    //arrowにするとargumentsが使えない
    result += currentValue + ', ';
});
//...argsつかえばいい 未取得の引数の配列
array.forEach((...args)=>{
    console.log(args);
})
const util = require('util');
console.log(result);
