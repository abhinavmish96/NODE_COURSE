# Chapter 5 : Control Flow, Asynchronous Patterns and Exception Handling

## This Chapter focuses on the Node basics and understanding its control flow, asynchronous patterns and exception handling.

### Here are some of my learnings you might find intersting

### Topics covered in this chapter include:

we’re going to look more closely at exactly what we mean by the term **asynchronous control**. In particular, we’re going to look at some asynchronous design patterns, as well as explore some of the Node modules that provide finer *control over program flow* when we’re working in this new environment.<br> 
And since asynchronous control can add some new and interesting twists when it comes to error handling, we’re also going to take a closer look at exception handling within an asynchronous Node environment.

### Promises, No Promises, Callback Instead
- A **promise** is an object that represents the result of an asynchronous action. It’s also known as a future, a delay, or simply deferred.
- In the earlier Node implementation, a promise was an object that emitted exactly two events: success and error. Its use was simple: if an asynchronous operation succeeded, the success event was emitted; otherwise, the error event was emitted. No other events were emitted, and the object would emit one or the other, but not both, and no more than once.
- 