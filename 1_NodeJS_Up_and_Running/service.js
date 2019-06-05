var http = require('http');
var fs = require('fs');
var counter = 0;
// write out numbers
function writeNumbers(res){
    
    //var counter = 0;

    //increment global write to client
    for(var i = 0; i<100; i++){
        counter++;
        res.write(counter.toString() + '\n');
    }
}

// create http server
http.createServer((req,res) => {

    var query = require('url').parse(req.url).query;
    var app = require('querystring').parse(query).file + ".txt";

    // content header
    res.writeHead(200, {'content-type': 'text/plain'});

    // write out numbers
    writeNumbers(res);
    
   // time to open and read contents
   setTimeout(function(){
       
        console.log('opening ' + app);
       // open and read in helloWorld.js
        fs.readFile(app, 'utf-8', function(err, data){
    
            if(err) 
            res.write('Could not find or open file for reading\n');
            else 
            res.write(data);
            
            res.end();
    });   
   }, 2000);
   
}).listen(8124);

console.log("Server is running on 8124");