module.exports = (function(){
    const http = require('http');
    const clients = [];

    setInterval(()=>{
        clients.forEach((client)=>{
            client.write(':ping\n');
        });
    },20000);

    const server = new http.Server();
    server.on('request',(request,response)=>{
        const url = require('url').parse(request.url);
        if(url.pathname !== '/chat'){
            response.writeHead(404);
            response.end();
            return;
        }
        if(request.method === 'POST'){
            request.setEncoding('utf8');
            let body ='';
            request.on('data', chunk => {body += chunk});
            request.on('end', () => {
                response.writeHead(200,{
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Credentials':true
                });
                response.end();

                const message = `data: ${body.replace('\n', '\ndata: ')}\r\n\r\n`;
                clients.forEach((client) => client.write(message));
            });
        }
        else{
            response.writeHead(200, {
                'Content-Type': 'text/event-stream',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Credentials':true
            });
            response.write('data: Connected\n\n');

            request.connection.on('end',() => {
                clients.splice(clients.indexOf(response),1);
                response.end();
            });

            clients.push(response);
        }
    });

    server.listen(3000);
}).bind(null)();
