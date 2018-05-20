module.exports = (function(){
    return (list,callback)=>{
        for(let n = 0; n < list.length; n++){
            callback.call(list[n],n);
        }
    }
}).bind(null)();