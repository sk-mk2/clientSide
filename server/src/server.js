const http = require('http');
const url = require('url');

module.exports.start = (route, handle)=>{
    function onRequest(request, response){
        const pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received.`);

        route(handle, pathname, response, request);        
        /*request.addListener('data',(postDataChunk)=>{
            postData += postDataChunk;
            console.log(`Received POST data chunk '${postDataChunk}'`);
        });
        request.addListener('end',()=>{
            route(handle, pathname, response, postData);
        })*/

    }

    http.createServer(onRequest).listen(3000);
    console.log('Server has started');
}

