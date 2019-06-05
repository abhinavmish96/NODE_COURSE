# Chapter 2 : Interactive Node and REPL

## This Chapter focuses on the basics of Node and understanding its basic components.

### Here are some of my learnings you might find intersting

### REPL: First Looks and Undefined Expressions

- **REPL**, or *read-eval-print loop*, REPL (pronounced “repple”) supports a simplified Emacs style of line editing and a small set of basic commands. Whatever you type into REPL is processed no differently than if you had typed the JavaScript into a file and run the file using Node. You can actually use REPL to code your entire application—literally testing the application on the fly.
- To begin REPL, simply type node without providing any Node application file, like so: 
**$ node**
- REPL then provides a command-line prompt—an angle bracket (>)—by default. Any- thing you type from this point on is processed by the underlying V8 JavaScript engine.