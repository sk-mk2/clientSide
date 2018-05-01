module.exports = (function(){
    function displayDate(){
        document.getElementById("demo").innerHTML = Date();
    }
    document.getElementById("date").onclick = displayDate;
}).bind(null)();
