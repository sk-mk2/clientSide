module.exports = (function(){
    function displayDate(){
        document.getElementById("demo").innerHTML = Date();
    }
    let count = 0;
    function changeTagContents(e,tag = 'h1'){
        const element = document.getElementsByTagName(tag)[0];
        //textContentプロパチとinnerTextプロパチはほぼ一緒
        element.textContent = count % 2 ? 'The end of the world':'Hello,World?';
        count++;
    }
    const w = document.getElementById('f1').contentWindow;
    console.log(document.getElementById('f1'));
    document.getElementById("date").addEventListener('click', displayDate);
    document.getElementById("date").addEventListener('click', ()=>w.alert('別ウィンドウでボタンが押されました'));
    document.getElementById("date").addEventListener('click', changeTagContents);

    //フレーム間の関係 parentプロパチにはフレームの祖先が入っている
    if(top === window)console.log('true');
}).bind(null)();
