module.exports = (function(){
    const $ = require('jquery');    
    $('#clock').click(()=> $('#clock').slideUp('slow'));
    //4つ呼び出し方あるよ
    //$('cssセレクタ','問い合わせの開始地点);
    //$(Element,Window,Document);//wrapper
    //$('HTMLテキスト文字列',HTML属性を指定するオブジェクトor Document);
    //$(関数);//onLoadのjQuery版 いらんくね？
    //ブラウザごとの差異を吸収する
    $('a').attr('target',function(){
        if(this.host === location.host)return 'f1';
        else return '_blank';
    });
    $('#date').click(()=> {
        $('div').eq(1).css(
            'border','solid'
        );
        $('h1').toggleClass('red');

    });

    $(document.body).append("<div id='linklist'><h1>List of Links</h1></div>");
    $('a').appendTo('#linklist');
    $('#linklist > a').after('<br/>');

    


}).bind(null)();
