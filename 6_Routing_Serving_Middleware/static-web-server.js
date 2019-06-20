const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer(function(req,res){
    let pathname = __dirname + req.url;
    console.log(pathname);

    fs.exists(pathname, function(exists){
        if(exists){
            res.setHeader('Content-Type','test/html');
            res.statusCode = 200;

            var file = fs.createReadStream(pathname);
            file.on("open", function(){
                file.pipe(res);
            });
            file.on("error", function(err){
                console.log(err);
            });
        } else {
            res.writeHead(404);
            res.write('404 Not Found\n');
            res.end();
        }
    });

}).listen(3000);

console.log('Server running at 3000/');