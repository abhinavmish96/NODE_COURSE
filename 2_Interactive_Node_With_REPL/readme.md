# Chapter 2 : Interactive Node and REPL

## This Chapter focuses on the basics of Node and understanding its basic components.

### Here are some of my learnings you might find intersting

### REPL: First Looks and Undefined Expressions

- **REPL**, or *read-eval-print loop*, REPL (pronounced “repple”) supports a simplified Emacs style of line editing and a small set of basic commands. Whatever you type into REPL is processed no differently than if you had typed the JavaScript into a file and run the file using Node. You can actually use REPL to code your entire application—literally testing the application on the fly.
- To begin REPL, simply type node without providing any Node application file, like so: 
**$ node**
- REPL then provides a command-line prompt—an angle bracket (>)—by default. Any- thing you type from this point on is processed by the underlying V8 JavaScript engine.

### Multiline and More Complex JavaScript

-  From incorporating external modules to gracefully handling multiline expressions, providing a textual indicator of code that’s nested following an opening curly brace **{}**.
- REPL provides repeating dots to indicate that everything that’s being typed follows an open curly brace and hence the command isn’t finished yet. It does the same for an open parenthesis.
- Increasing levels of nesting generates more dots; this is necessary in an interactive en- vironment, where you might lose track of where you are, as you type.
- You can type in, or copy and paste in, an entire Node application and run it from REPL.
- |Keyboard entry|What it does|
  |:------|:------------------------|
  |Ctrl-C|Terminates current command. Pressing Ctrl-C twice forces an exit.|
  |Ctrl-D|Exits REPL.|
  |Tab|Autocompletes global or local variable.|
  |Up arrow|Traverses up through command history.|
  |Down arrow|Traverses down through command history.|
  |Underscore(_)|References result of last expression.|