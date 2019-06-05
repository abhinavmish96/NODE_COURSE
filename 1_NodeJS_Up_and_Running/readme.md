# Chapter 1 : Node.js: Up and Running

## This Chapter focuses on the basics of Node and understanding its basic components.

### Here are some of my learnings you might find intersting

### Introduction

- Node.js is a server-side technology that’s based on Google’s V8 JavaScript engine. It’s a highly scalable system that uses asynchronous, event-driven I/O (input/output), rather than threads or separate processes. It’s ideal for web applications that are frequently accessed but computationally simple.
- Node doesn’t create a new thread or process for every request. Instead, it listens for specific events, and when the event happens, responds accordingly. Node doesn’t block any other request while waiting for the event functionality to complete, and events are handled—first come, first served—in a relatively uncomplicated event loop 

### Setting Up a Node Development Environment