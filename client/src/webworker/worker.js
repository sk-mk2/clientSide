"use strict";
if(typeof window === 'undefined')
onmessage = (e)=>{
    console.log('Message received from main script');
    const workerResult = 'Result: '  + (e.data[0] * e.data[1]);
    console.log('Posting message back to main script');
    postMessage(workerResult);
};
//selfとthisの違いがわからん
