'use strict';

import _ from 'lodash';
import clock from './clock.js';
import time from './displayDate.js';
function component() {
    const element = document.createElement('div');
    element.innerHTML = JSON.stringify(urlArgs());
    element.innerHTML += _.join(['<p>',JSON.stringify(location)]);
    return element;
}
document.body.appendChild(component());
console.log(document.getElementById('clock'));
//Locationオブジェクトのsearchプロパティにはクエリ文字列が入っている
function urlArgs() {
    const args = {};
    const query = location.search.substring(1);
    const pairs = query.split('&');
    for(let i = 0; i < pairs.length; i++){
        const pos = pairs[i].indexOf('=');
        if(pos == -1)continue;
        const name = pairs[i].substring(0,pos);
        let value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);
        args[name] = value;
    }
    return args;
}

//assign()も似たようなことができるけどちょっと違う
function replacePage(){
    location.replace('hello.html');
}
//replacePage();

//ページリロード
function reloadPage(){
    location.reload();
}
//reloadPage();

function spark(){
    const sparklines = document.getElementByClassName("sparkline");
    for(let i = 0;i<sparklines.length;i++){
        const dataset = sparklines[i].dataset;
        const ymin = parseFloat(dataset.ymin);
        const ymax = parseFloat(dataset.ymax);
        const data = sparklines[i].textContent.split(" ").map(parseFloat);
        drawSparkline(sparklines[i],ymin,ymax,data);//まだ実装してない
    }
}

