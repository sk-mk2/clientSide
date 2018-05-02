function invoke(f, start, interval, end){
    if(!start) start=0;
    if(arguments.length <= 2){
        setTimeout(f,start);
    }else{
        setTimeout(repeat, start);
        function repeat(){
            const h = setInterval(f, interval);
            if(end) setTimeout(()=>clearInterval(h), end);
        }
    }
}
let i = 0;
f = ()=>console.log(i++);
invoke(f,0,100,1000);


