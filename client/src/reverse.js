module.exports = (function(){
    
    function reverse(n){
        const f = document.createDocumentFragment();
        while(n.lastChild) f.appendChild(n.lastChild);
        n.appendChild(f);

    }
    const element = document.getElementsByTagName('div')[0];
    document.getElementById('reverse').addEventListener('click',()=>reverse(element));


}).bind(null)();
