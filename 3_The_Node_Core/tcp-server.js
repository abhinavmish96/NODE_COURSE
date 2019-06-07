var net = require('net');

var server = net.createServer(function(conn){
    console.log('connected');

    conn.on('data', function(data){
        console.log(data + ' from ' + conn.remoteAddress + ' ' + conn.remotePort);
        conn.write('Repeating: ' + data);
    });

    conn.on('close', function(){
        console.log('client closed connection');
    });
}).listen(8124);

console.log('listening on port 8124');

// We create the server, passing in a callback function. The TCP server differs from the HTTP server in that, rather than passing a requestListener, the TCP callback function’s sole argument is an instance of a socket listening for incoming connections.

// Contains the code to create a TCP server. Once the server socket is created, it listens for two events: when data is received, and when the client closes the connection.