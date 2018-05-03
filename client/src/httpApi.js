module.exports = (function(){
    const request = new XMLHttpRequest();
    function get(){
        console.log('hoge');
        request.open('GET','https://api.github.com/users/sk-mk2/events');
        request.send(null);
    }
    get();
    function response(){
        if(request.readyState === 4 && request.status === 200){
            console.log(request.getResponseHeader('Content-type'));
            const gitEvents = JSON.parse(request.responseText);
            for(let i = 0; i < gitEvents.length; i++){
                const onePush = gitEvents[i].payload.commits;
                try{
                    for(let j = 0; j < onePush.length; j++){
                        console.log(onePush[j].message);
                    }
                }catch(e){
                    //undefinedプロパティ参照エラーってどう処理するの
                }
            }
        }
    }

    request.addEventListener('readystatechange',response);
}).bind(null)(); 
