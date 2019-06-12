# Chapter 3 : The Node Core

## This Chapter focuses on the basics of Node and understanding its basic components.

### Here are some of my learnings you might find intersting

### Topics covered in this chapter include:

- Node global objects, such as global, process, and Buffer
- The timer methods, such as setTimeout
- A quick overview of socket and stream modules and functionality
- The Utilities object, especially the part it plays in Node inheritance
- The EventEmitter object and events

### Globals: global, process, and Buffer

- There are several objects available to all Node applications without the user having to incorporate any module. The Node.js website groups these items under the descriptive label of globals.
- #### Global :
    - *global* is the global namespace object. In some ways, it’s similar to windows in a browser environment, in that it provides access to global properties and methods and doesn’t have to be explicitly referenced by name.
    - *global* is like the windows object in a browser, but there are key differences—and not just the methods and properties available. The windows object in a browser is truly global in nature. If you define a global variable in client-side JavaScript, it’s accessible by the web page and by every single library. However, if you create a variable at the top-level scope in a Node module (a variable outside a function), it only becomes global to the module, not to all of the modules.
- #### process
    - Each Node application is an instance of a Node process object, and as such, comes with certain built-in functionality.
    - Many of the process object’s methods and properties provide identification or information about the application and its environment. The **process.execPath** method re- turns the execution path for the Node application; **process.version** provides the Node version; and **process.platform** identifies the server platform
    - The process object also wraps the STDIO streams *stdin*, *stdout*, and *stderr*. Both *stdin* and *stdout* are **asynchronous**, and are *readable* and *writable*, respectively. *stderr*, however, is a **synchronous, blocking stream**.
    - Use **process.nextTick** if you wanted to delay a function for some reason, but you wanted to delay it asynchronously.
- #### buffer
    - The Buffer class, also a global object, is a way of handling binary data in Node. In fact that streams are often binary data rather than strings. To convert the binary data to a string the data encoding for the stream socket is changed using setEncoding.
    - Data sent between sockets is transmitted as a buffer (in binary format) by default. To send a string instead, you either need to call setEncoding directly on the socket, or specify the encoding in the function that writes to the socket. 
    - By default, the TCP (Transmission Control Protocol) socket.write method sets the second parameter to utf8, but the socket returned in the connectionListener callback to the TCP create Server function sends the data as a buffer, not a string.

### The Timers: setTimeout, clearTimeout, setInterval, and clearInterval

- The timer functions in client-side JavaScript are part of the global windows object. They’re not part of JavaScript, but have become such a ubiquitous part of JavaScript development that the Node developers incorporated them into the Node core API.
- The timer functions operate in Node just like they operate in the browser. In fact, they operate in Node exactly the same as they would in Chrome, since Node is based on Chrome’s V8 JavaScript engine.
- The Node **setTimeout** function takes a callback function as first parameter, the delay time (in milliseconds) as second parameter, and an optional list of arguments.
- The function **clearTimeout** clears a preset **setTimeout**. If you need to have a repeating timer, you can use **setInterval** to call a function every n milliseconds—n being the second parameter passed to the function. Clear the interval with **clearInterval**.

### Servers, Streams and Sockets

- A **socket** is an endpoint in a communication, and a network socket is an endpoint in a communication between applications running on two different computers on the network.
- The data flows between the sockets in what’s known as a **stream**.
- The data in the stream can be transmitted as binary data in a buffer, or in Unicode as a string. Both types of data are transmitted as *packets*: parts of the data split off into specifically sized pieces. 
- There is a special kind of packet, a finish packet (FIN), that is sent by a socket to signal that the transmission is done. How the communication is managed, and how reliable the stream is, depends on the type of socket created.
- #### TCP Sockets and Servers
    - We can create a basic *TCP server* and client with the *Node Net module*. TCP forms the basis for most Internet applications, such as web service and email. It provides a way of reliably transmitting data between client and server sockets.
    - *Callback function* is attached to the two events via the **on method**. Many objects in Node that emit events provide a way to attach a function as an event listener by using the on method. This method takes the name of the *event as first parameter*, and *the function listener as the second*.
- #### HTTP
    - We can create **http servers** using the *createServer* method, passing in the function that will act as the *requestListener*. Requests are processed as they come, asynchronously.
    - In a network, TCP is the transportation layer and HTTP is the application layer. If you scratch around in the modules included with Node, you’ll see that when you create an HTTP server, you’re inheriting functionality from the TCP-based net.Server.
    - For the *HTTP server*, the *requestListener* is a socket, while the *http.ServerRequest* object is a readable stream and the *http.ServerResponse* is a writable stream.
- #### UDP/Datagram Socket
    - *TCP* requires a dedicated connection between the two endpoints of the communication. *UDP* is a *connectionless protocol*, which means there’s no guarantee of a connection between the two endpoints. For this reason, *UDP is less reliable and robust than TCP*. 
    - On the other hand, *UDP* is generally *faster* than *TCP*, which makes it more popular for real-time uses, as well as technologies such as VoIP (Voice over Internet Protocol), where the TCP connection requirements could adversely impact the quality of the signal.
    - The UDP module identifier is dgram: 
        **require ('dgram');**
    - To create a *UDP socket*, use the *createSocket* method, passing in the type of socket— either *udp4* or *udp6*. You can also pass in a callback function to listen for events. Unlike messages sent with TCP, messages sent using UDP must be sent as buffers, not strings.
- #### Streams, Pipes and Readlines
    - **Streams** can be *readable*, *writable*, or both, and all streams are instances of EventEmitter.

### Child Processes

- *Operating systems* provide access to a great deal of functionality, but much of it is only accessible via the *command line*. It would be nice to be able to access this functionality from a Node application. That’s where *child processes* come in.
- Node enables us to run a system command within a new child process, and listen in on its input/output. This includes being able to pass arguments to the command, and even pipe the results of one command to another.
- #### child_process.spawn
    - There are four different techniques you can use to create a child process. The most common one is using the *spawn method*.
- #### child_process.exec and child_process.execFile
    - In addition to spawning a child process, you can also use **child_process.exec** and **child_process.execFile** to run a command in a shell and buffer the results. 
    - The only difference between *child_process.exec* and *child_process.execFile* is that execFile runs an application in a file, rather than running a command.
    - The first parameter in the two methods is either the command or the file and its location; the second parameter is options for the command; and the third is a callback function.
    - The callback function takes three arguments: *error*, *stdout*, and *stderr*. The data is buffered to *stdout* if no error occurs.
- #### child_process.fork
    - The *child_process.fork* process apart from the others is that there’s an actual communication channel established to the child process. Note, though, that each pro- cess requires a whole new instance of V8, which takes both time and memory.

### Domain Resolution and URL Processing

- The DNS module provides DNS resolution using c-ares, a C library that provides asyn- chronous DNS requests. It’s used by Node with some of its other modules, and can be useful for applications that need to discover domains or IP addresses.
- To discover the *IP address* given a *domain*, use the **dns.lookup** method and print out the returned IP address.
- The **dns.reverse** method returns an array of domain names for a given IP address.