# Chapter 6 : Routing Traffic, Serving Files, and Middleware

## This Chapter focuses on the Node basics and understanding its routing traffic, serving files, and middleware.

### Here are some of my learnings you might find intersting

### Topics covered in this chapter include:

This chapter focuses on the technology available to Node developers for providing the very basic routing and middleware functionality we need to ensure that resource A gets delivered to user B correctly and quickly.

### Building a Simple Static File Server from Scratch

- When thinking of what’s necessary to build a simple but functional static file server, we might come up with the following set of steps:
    - Create an HTTP server and listen for requests.
    - When a request arrives parse the request URL to determine the location for the file.
    - Check to make sure the file exists.
    - If the file doesn’t exist, respond accordingly.
    - If the file does exist, open the file for reading.
    - Prepare a response header.
    - Write the file to the response.
    - Wait for the next request.
- Creating an HTTP server and reading files requires the HTTP and File System modules. The Path module will also come in handy, because it has a way of checking to make sure a file exists before trying to open it for reading.

### Middleware

- Generally, middleware is software that exists between you, as the developer, and the underlying system. By system, we can mean either the operating system, or the under- lying technology, such as we get from Node. More specifically, middleware inserts itself into the communication chain between your application and the underlying system— hence its rather descriptive name.
- For instance, rather than have to provide all the functionality necessary for serving static files via a web server, you can use middleware to handle most of it. The middleware then takes care of all the tedious bits, so you can focus on those aspects of your appli- cation that are unique to your needs and requirements. 
- However, middleware doesn’t stop with just serving up static files. Some middleware provides authorization compo- nents, proxies, routers, cookie and session management, and other necessary web technologies.
- #### Connect 
    - You can install Connect using npm:<br>
        <pre>
        npm install connect</pre>
    - Connect is, in actuality, a framework in which you can use one or more middleware applications.

### Routers

- Routers accept something from one source and forward it to another. Typically what’s forwarded is a data packet, but at the application level, it can also be a resource request.
- In Node, the primary use for a router is to extract the information we need from a URI —usually using some pattern—and to use that information to trigger the right process, passing the extracted information to the process.

### Proxies

- 