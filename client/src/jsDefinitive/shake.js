module.exports = (function(){
    function shake(e, oncomplete, distance, time){
        if(typeof e === "string") e = document.getElementsByTagName(e)[0];
        if(!time) time = 500;
        if(!distance) distance = 5;

        const originalStyle = e.style.cssText;
        e.style.position = "relative";
        const start = (new Date()).getTime();
        animate();

        function animate(){
            const now = (new Date()).getTime();
            const elapsed = now-start;
            const fraction = elapsed/time;
            if(fraction < 1){
                const x = distance * Math.sin(fraction*4*Math.PI);
                e.style.left = x + "px";
                setTimeout(animate,Math.min(25,time-elapsed));
            }
            else{
                e.style.cssText = originalStyle;
                if(oncomplete) oncomplete(e);
            }
        }
    }
    document.getElementById('shake').addEventListener('click',()=>shake('h1'));

}).bind(null)();
