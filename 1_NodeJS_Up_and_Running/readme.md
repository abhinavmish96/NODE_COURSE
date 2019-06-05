# Chapter 1 : Node.js: Up and Running

## This Chapter focuses on the basics of Node and understanding its basic components.

### Here are some of my learnings you might find intersting

### Introduction

- Node.js is a server-side technology that’s based on Google’s V8 JavaScript engine. It’s a highly scalable system that uses asynchronous, event-driven I/O (input/output), rather than threads or separate processes. It’s ideal for web applications that are frequently accessed but computationally simple.
- Node doesn’t create a new thread or process for every request. Instead, it listens for specific events, and when the event happens, responds accordingly. Node doesn’t block any other request while waiting for the event functionality to complete, and events are handled—first come, first served—in a relatively uncomplicated event loop 

### Setting Up a Node Development Environment

- [Node.js](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- Before installing node we will use [NVM](https://github.com/nvm-sh/nvm); Node Version Manager - Simple bash script to manage multiple active node.js versions
- Latest node.js can be downloaded and installed by going on [node download page](https://nodejs.org/en/download/)

Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications built on Google Chrome's JavaScript Engine (V8 Engine). Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

### Asynchronous Functions and the Node Event Loop

- The fundamental design behind Node is that an application is executed on a single thread (or process), and all events are handled asynchronously.
- Node does things differently. When you start a Node application, it’s created on a single thread of execution. It sits there, waiting for an application to come along and make a request. When Node gets a request, no other request can be processed until it’s finished processing the code for the current one.You might be thinking that this doesn’t sound very efficient, and it wouldn’t be except for one thing: Node operates asynchronously, via an *event loop* and *callback functions*. 
- An **event loop** is nothing more than functionality that basically polls for specific events and invokes event handlers at the proper time. In Node, a **callback function** is this event handler.
- Unlike with other single-threaded applications, when you make a request to a Node application and it must, in turn, make some request of resources (such as a database request or file access), Node initiates the request, but doesn’t wait around until the request receives a response. Instead, it attaches a callback function to the request. When whatever has been requested is ready (or finished), an event is emitted to that effect, triggering the associated callback function to do something with either the results of the requested action or the resources requested.
- If five people access a Node application at the exact same time, and the application needs to access a resource from a file, Node attaches a callback function to a response event for each request. As the resource becomes available for each, the callback function is called, and each person’s request is satisfied in turn. In the meantime, the Node application can be handling other requests, either for the same applications or a different application. Though the application doesn’t process the requests in parallel, depending on how busy it is and how it’s designed, most people usually won’t perceive any delay in the response. Best of all, the application is very frugal with memory and other limited resources.