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

- 