module.exports = (function(){
    "use strict";
    let _name = 'hoge';
    let _age = 1;
    const obj = {
        getName:()=>{
            return _name;
        },
        getAge:()=>{
            return _age;
        },
        setName:(name)=>{
            _name = name;
        }
    }
    //freeze最強?seal変更できる、preventExtensions追加できない
    Object.freeze(obj);
    return obj;
}).bind(null)();
