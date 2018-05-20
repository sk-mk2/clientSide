module.exports = (function(){
    return {
        helloSync:(name)=>{
            return ('Hello ' + name);
        },
        hello:(name, callback)=>{
            const modname = 'Hello ' + name;
            ((_name, _callback)=>{
                setTimeout(()=>{
                    _callback(_name);
                }, 500);
            })(modname, callback);
        }
    }
}).bind(null)();