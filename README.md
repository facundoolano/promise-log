# promise-log

I don't know about you, but I'm tired of typing stuff like this while debugging
my node libraries (specially when working in the REPL!):

```js
somePromiseReturningFunction(args).then(console.log).catch((e) => console.log(e.stack))
```

Instead, I'd like to do this:

```js
somePromiseReturningFunction(args).log();
```

Or even, in longer processing chains:

```js
myPromise
  .then(doStuff)
  .then(someWeirdProcessingStuff)
  .then(function (value) {
    console.log('partial value is:', value);
    return value;
  })
  .then(doMoreStuff);
```

Becomes:

```js
myPromise
  .then(doStuff)
  .then(someWeirdProcessingStuff)
  .log('partial value is:')
  .then(doMoreStuff);
```

Hence, I published the `promise-log` module to better support my laziness.

## Usage

Install with npm:

```
npm install promise-log
```

And require anywhere in your project, passing the promise prototype you want to extend
(defaults to native `Promise`):

```js
require('promise-log')(Promise);
```

That will add the `log` method to the Promise prototype.
