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