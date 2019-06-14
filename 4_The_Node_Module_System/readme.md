# Chapter 4 : The Node Module System

## This Chapter focuses on the basics of Node and understanding its basic components.

### Here are some of my learnings you might find intersting

### Topics covered in this chapter include:

Node’s basic implementation is kept as streamlined as possible. Rather than incorpo- rate every possible component of use directly into Node, developers offer additional functionality via Node’s modules.<br>
Node’s module system is patterned after the CommonJS module system, a way of cre- ating modules so that they’re interoperable. The core of the system is a contract that developers adhere to in order to ensure that their modules play well with others.<br>
Among the CommonJS module system requirements implemented with Node are:
- Support is included for a require function that takes the module identifier and returns the exported API.
- The module name is a string of characters, and may include forward slashes (for identification of path).
- The module must specifically export that which is to be exposed outside the module.
- Variables are private to the module.

### Loading a Module with require and Default Paths

- Node supports a simple module loading system: there is a one-to-one correspondence between the file and module.To include a module within a Node application, use the **require** statement, passing in a *string* with the **identifier for the module**.<br>
**var http = require ('http');**
- You can also just include a specific object, rather than all objects, from a module:<br>
**var spawn = require('child_process').spawn;**
- | Type | String passed to require | Examples |
|------|:------------------------:|:---------|
| Core | Doesn't start with /, ./ , or ../ | require('fs')<br>require('os')<br>require('http')<br>require('child_process') |
| File | Start with /, ./ , or ../ | require('./debug.js')<br>require('/full/path/to/module.js')<br>require('../a.js')<br>require('../../a.js') |
| npm  | Not a core module and doesn't start with /, ./ , or ../ | require('debug')<br>require('express')<br>require('chalk')<br>require('koa')<br>require('q') |
- Module files can have either a **.js**, **.node**, or **.json** file extension. The .node extension assumes that the file is a compiled binary, not a text file containing JavaScript.
- Node first looks for a **node_modules** folder local to the application, and searches for the module in this folder. If it doesn’t find the module, Node then looks in the parent subdirectory for a node_mod- ules folder and the node, and so on.

### External Modules and the Node Package Manager

- 