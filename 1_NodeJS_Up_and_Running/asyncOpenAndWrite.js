// load http module
var http = require('http');
var fs = require('fs');

// create http server
http.createServer((req,res)=>{

    // open and read in helloWorld.js
    fs.readFile('helloWorld.js', 'utf-8', function(err, data){
        
        // content header
        res.writeHead(200, {'content-type': 'text/plain'});

        if(err) res.write('Could not find or open file for reading\n');
        else
        res.write(data);
        res.end();
    });    
}).listen(8124, function(){
    console.log('bound to port 8124');
});

console.log("Server is running on 8124");