# Chapter 5 : Control Flow, Asynchronous Patterns and Exception Handling

## This Chapter focuses on the Node basics and understanding its control flow, asynchronous patterns and exception handling.

### Here are some of my learnings you might find intersting

### Topics covered in this chapter include:

we’re going to look more closely at exactly what we mean by the term **asynchronous control**. In particular, we’re going to look at some asynchronous design patterns, as well as explore some of the Node modules that provide finer *control over program flow* when we’re working in this new environment.<br> 
And since asynchronous control can add some new and interesting twists when it comes to error handling, we’re also going to take a closer look at exception handling within an asynchronous Node environment.

### Promises, No Promises, Callback Instead

- A **promise** is an object that represents the result of an asynchronous action. It’s also known as a future, a delay, or simply deferred.
- In the earlier Node implementation, a promise was an object that emitted exactly two events: success and error. Its use was simple: if an asynchronous operation succeeded, the success event was emitted; otherwise, the error event was emitted. No other events were emitted, and the object would emit one or the other, but not both, and no more than once.


### Sequential Functionality, Nested Callbacks, and Exception Handling

- The functions are called, in turn, passing the results from the earlier function to each subsequent function. Since all the functions are synchronous, we don’t have to worry about the function calls getting out of sequence—no unexpected results. Thus performing **sequential functionality**.
- Converting this synchronous sequential application pattern to an asynchronous im- plementation requires a couple of modifications. First, we have to replace all functions with their asynchronous counterparts. However, we also have to account for the fact that each function doesn’t block when called, which means we can’t guarantee the proper sequence if the functions are called independently of each other. The only way to ensure that each function is called in its proper sequence is to use **nested callbacks**.


### Asynchronous Patterns and Control Flow Modules

- One Node module, Async, provides names and support for the most extensive list of asynchronous control flow patterns:
    - **waterfall**
    Functions are called in turn, and results of all are passed as an array to the last callback (also called series and sequence by others).
    - **series**
    Functions are called in turn and, optionally, results are passed as an array to the last callback.
    - **parallel**
    Functions are run in parallel and when completed, results are passed to the last callback (though the result array isn’t part of the pattern in some interpretations of the parallel pattern).
    - **whilst**
    Repeatedly calls one function, invoking the last callback only if a preliminary test returns false or an error occurs.
    - **queue**
    Calls functions in parallel up to a given limit of concurrency, and new functions are queued until one of the functions finishes.
    - **until**
    Repeatedly calls one function, invoking the last callback only if a post-process test returns false or an error occurs.
    - **auto**
    Functions are called based on requirements, each function receiving the results of previous callbacks.
    - **iterator**
    Each function calls the next, with the ability to individually access the next iterator.
    - **apply**
    A continuation function with arguments already applied combined with other control flow functions.
    - **nextTick**
    Calls the callback in the next loop of an event loop—based on process.nextTick in Node.
- 