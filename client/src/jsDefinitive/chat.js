module.exports = (function(){
    const nick = prompt('Enter your nickname');
    const input = document.getElementById('input');
    input.focus();
    const chat = new EventSource('http://localhost:3000/chat');
    chat.addEventListener('message',getNewMessage);
    function getNewMessage(event){
        const msg = event.data;
        const node = document.createTextNode(msg);
        const div = document.createElement('div');
        div.appendChild(node);
        document.body.appendChild(div);
        input.scrollIntoView();
    }
    input.addEventListener('change',sendMessage);
    function sendMessage(){
        const msg = `${nick}: ${input.value}`;
        const xhr = new XMLHttpRequest();
        xhr.open('POST','http://localhost:3000/chat');
        xhr.setRequestHeader(
            'Content-Type',
            'text/plain;charset=UTF-8',
        );
        xhr.send(msg);
        input.value = '';
    }
}).bind(null)();
