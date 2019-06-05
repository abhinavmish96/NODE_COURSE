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