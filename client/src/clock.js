module.exports = (function(){
    function displayTime(){
        const elt = document.getElementById('clock');
        const now = new Date();
        elt.innerHTML = now.toLocaleTimeString();
        setTimeout(displayTime, 1000);
    }

    window.onload = displayTime;
}).bind(null)();
