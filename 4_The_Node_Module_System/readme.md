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

- Much of the rich functionality associated with Node comes in via third-party modules. There are router modules, modules for working with relational or document database systems, template modules, testing modules, and even modules for payment gateways.
- Though there is no formal Node module developer system, developers are encouraged to upload their modules to GitHub. Following are good resources for finding Node modules:
    - [npm registry](http://search.npmjs.org/)
    - [Node module wiki](https://github.com/joyent/node/wiki/modules)
    - The [node-toolbox](http://toolbox.no.de/)
    - [Nipster!](http://eirikb.github.com/nipster/)

### Finding Modules

- The Node documentation site does provide a listing of recommended third-party modules, starting with the npm, which is now incorporated into the Node installation. However, the npm website and its module registry provide us with a better view of what modules are used in most applications.

### Creating Your Own Custom Module

- Use the exports object to export the function.
- Treat the library as a single imported object, assigned to a variable, in order to
access the functions.
- #### Packaging an Entire Directory
    - You can split your module into separate JavaScript files, all located within a directory. Node can load the directory contents,as long as you organize the contents in one of two ways.
    - The first way is to provide a JSON file named package.json with information about the directory. The structure can contain other information, but the only entries relevant to Node are:
    **{ "name" : "mylibrary",<br>"main" : "./mymodule/mylibrary.js" }**
    - The second way is to include either an index.js or index.node file in the directory to serve as the main module entry point.
- #### Preparing Your Module for Publication
    - If you want to make your package available to others, you can promote it on your website, but you’ll be missing out on a significant audience. When you’re ready to publish a module,you’re going to want to add it to the list of modules at the Node.js website, and you’ll also want to publish it to the npm registry.