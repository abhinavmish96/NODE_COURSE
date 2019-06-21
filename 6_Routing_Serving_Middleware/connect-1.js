const connect = require('connect');
const http = require('http');

let app = connect()
   .use(connect.favicon())
   .use(connect.logger())
   .use(function(req,res) {
      res.end('Hello World\n');
   });

http.createServer(app).listen(3000);

// Incorporating Connect bundled middleware into an application directly

http.createServer(connect() 
    .use(connect.favicon()) 
    .use(connect.logger()) 
    .use(function(req,res) {
        res.end('Hello World\n'); 
    })
).listen(3000);