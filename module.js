module.exports = (function(){
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
    Object.preventExtensions(obj);
    return obj;
}).bind(null)();
