(function (root) {
    'use strict';
    let results;
    if(typeof window === 'undefined'){
        console.log('nodeで実行できないよ');
        process.exit();
    } 
    root.assert = (value, desc) => {
        const li = document.createElement('li');
        li.className = value ? 'pass' : 'fail';
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if(!value){
            li.parentNode.parentNode.className = 'fail';
        }
        return li;
    };

    const queue = [];
    let paused = false;
    root.test = (name, fn) => {
        queue.push(()=>{
            results = document.getElementById('results');
            results = assert(true, name).appendChild(document.createElement('ul'));
            fn();
        });
        runTest();
    };

    root.pause = () => {
        paused = true;
    };
    root.resume = () => {
        paused = false;
        setTimeout(runTest, 1);
    };

    function runTest(){
        if(!paused && queue.length){
            (queue.shift())();
            if(!paused){
                resume();
            }
        }
    }
}).bind(null)(typeof window !=="undefined" ? window : global);

test('foreachテスト', ()=>  {
    const foreach = require('./foreach.js');
    const weapons = ['shuriken', 'katana', 'nunchucks'];
    //アロー関数はthisを束縛しないので一個外のthisになるから失敗する?
    //apply,callは意味ない
    /*
    単純な関数として呼び出すとき、コンテキストはグローバルオブジェクト
    メソッドとして呼び出すとき、コンテクストは、そのメソッドを所有するオブジェクト
    関数のapply() || call()メソッドを介して呼び出すと、コンテクストは任意に設定できる
    */
    foreach(weapons, (index)=>{
        console.log(this);
        assert(this.toString() === weapons[index], weapons[index] + 'は期待した値を得た');
    });
    foreach(weapons, function(index) {
        console.log(this);
        assert(this.toString() === weapons[index], weapons[index] + 'は期待した値を得た');
    });
});
/*test("テストA.", ()=>{
    assert(true, "第1のアサート完了");
    assert(true, "第2のアサート完了");
    assert(true, "第3のアサート完了");
});

test("テストB.", ()=>{
    assert(true, "第1のテスト完了");
    assert(false, "第2のテスト失敗");
    assert(true, "第3のテスト完了");
});

test("テストC.", ()=>{
    assert(null, "失敗");
    assert(5, "合格");
});

test('非同期テスト1',()=>{
    pause();
    setTimeout(()=>{
        assert(true,'第1テスト完了');
        resume();
    }, 1000);
});

test('非同期テスト2',()=>{
    pause();
    setTimeout(()=>{
        assert(true,'第2テスト完了');
        resume();
    }, 1000);
});*/

//javascriptでオーバーロードは一つの関数の中でargumentを用いて行う?
//オーバーロード用メソッド
const overload = {};
function addMethod(object,name,fn){
    const old = object[name];
    object[name] = function(){
        if(fn.length == arguments.length){
            return fn.apply(this,arguments);
        }else if(typeof old == 'function'){
            return old.apply(this,arguments);
        }
    };
}
function smallest(array){
    //apllyで引数を渡すことで配列を可変長引数として扱える
    return Math.min.apply(Math, array);
}

function multiMax(multi){
    //本当の配列でないarguments本当の配列のように扱える
    return multi * Math.max.apply(Math,Array.prototype.slice.call(arguments,1));
}


