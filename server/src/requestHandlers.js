const exec = require('child_process').exec;
const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

module.exports.start = (response)=>{
    function sleep(ms){
        const startTime = new Date().getTime();
        //eventloopを止めている Nodeのいいところを消している
        while(new Date().getTime() < startTime + ms);
    }

    const body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-type": "text/html"});
    response.write(body);
    response.end();
};

module.exports.upload = (response, request)=>{
    response.writeHead(200, {"Content-type": "text/html"});
    const form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(request, (error, fields, files)=>{
        console.log("parsing done");
        fs.rename(files.upload.path, "../tmp/test.png",(err)=>{
            //windowsだと既存のファイルに対してrenameできないらしい
            if(err){
                fs.unlink("../tmp/test.png");
                fs.rename(files.upload.path,"../tmp/test.png");
            }
        });
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />")
        response.end();;
    })
};
module.exports.show = (response, postData)=>{
    console.log("Request handler 'show' was called");
    fs.readFile('../tmp/test.png', 'binary', (error, file)=>{
        if(error){
            response.writeHead(500, {"Content-Type": "text/plain"})
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"})
            response.write(file,"binary");
            response.end();
        }
    })
};