"use strict";
//Worker は主に、ユーザインターフェイスのスレッドを妨げずに CPU 負荷が大きい演算を実行するために役立ちます。
require('./worker.js');
(function(){
    if(typeof window === 'undefined') return;
    const first = document.querySelector('#number1');
    const second  =document.querySelector('#number2');
    const result = document.querySelector('.result');
    
    if(window.Worker) {
        //Dedicated Workerは呼び出し元のスクリプトだけがアクセスできる
        const myWorker = new Worker('webworker.js');
        //Shared Workerは複数のスクリプトからアクセスできる 少し変えなきゃいけないみたい
        //const myWorker = new SharedWorker('webworker.js');
        first.addEventListener('change',()=>{
            myWorker.postMessage([first.value,second.value]);
            console.log('Message posted to worker'); 
        });
        second.addEventListener('change',()=>{
            myWorker.postMessage([first.value,second.value]);
            console.log('Message posted to worker'); 
        });
        myWorker.addEventListener('message',(e)=>{
            result.textContent = e.data;
            console.log('Message received from worker');
        });

    }
    
})();
