module.exports = (function(){
    
    return function(memo, fundamental){
        const shell = function(n){
          let result = memo[n];
          if(typeof result !== "number"){
            result = fundamental(shell , n);
            memo[n] = result;
          }
          return result;
        };
        return shell;
    };
}).bind(null)();


function fib (n) {
    if(n === 0 || n === 1) return 1;
    return fib(n-1) + fib(n-2);
};

function factorial(n){
    if(n == 1) return 1;
    return n * factorial(n-1);
};

const memo = require('memoization');

