module.exports = (function(){
    function displayDate(){
        document.getElementById("demo").innerHTML = Date();
    }
    function addContents(){
        w.alert('別ウィンドウでボタンが押されました');
    }
    let count = 0;
    function tag(){
        const element = document.getElementsByTagName('h1')[0];
        element.textContent = count % 2 ? 'The end of the world':'Hello,World?';
        count++;
    }
    const w = document.getElementById('f1').contentWindow;
    console.log(document.getElementById('f1'));
    document.getElementById("date").addEventListener('click', displayDate);
    document.getElementById("date").addEventListener('click', addContents);
    document.getElementById("date").addEventListener('click', tag);

    //フレーム間の関係 parentプロパチにはフレームの祖先が入っている
    if(top === window)console.log('true');
}).bind(null)();
