# JS Topic 12 - Asynchronous JavaScript

Asynchronous JavaScript refers to executing code that doesn’t necessarily run in sequence or wait for one operation to complete before starting another. Callback functions play a significant role in handling asynchronous operations in JavaScript.

## Callbacks

A callback function is a function passed as an argument to another function, which then gets executed at some point in the future, usually after an asynchronous operation completes. It allows you to specify what should happen after a certain task finishes without blocking the execution of other code.

For example, consider the setTimeout function:

```js
console.log('Start');

setTimeout(function() {
  console.log('Inside setTimeout callback');
}, 2000);

console.log('End');
```

This code will proceed in following output: 

```
Start
End
Inside setTimeout callback (after approximately 2 seconds)
```

However, using callbacks extensively can lead to situations known as "callback hell" or "pyramid of doom," where multiple nested callbacks can make code harder to read and maintain. To alleviate this, modern JavaScript has introduced alternative approaches like Promises, async/await, and the use of libraries like async.js to handle asynchronous code more cleanly and efficiently.

## Promises & Async/Await

Promises and async/await are features in JavaScript used to handle asynchronous operations in a more readable and manageable way compared to using callbacks directly. They provide a more structured and synchronous-looking syntax for handling asynchronous tasks.

### Promises

A Promise is an object that represents a value that might not be available yet, but will be resolved in the future, either successfully or unsuccessfully. It has three states: pending, fulfilled, or rejected. Promises have two main functions: resolve() and reject(), which are called to change the Promise's state.

Here's an example of a simple Promise:

```js
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., fetching data from an API)
  setTimeout(() => {
    const success = true; // Simulating a successful operation
    if (success) {
      resolve('Operation completed successfully');
    } else {
      reject('Operation failed');
    }
  }, 2000);
});

myPromise.then((result) => {
  console.log(result); // Output: Operation completed successfully
}).catch((error) => {
  console.error(error); // Output: Operation failed
});
```

In this example, a Promise is created that simulates an asynchronous operation. When the operation is complete, it either resolves (with the success message) or rejects (with the error message). The then() method is used to handle the resolved promise, and the catch() method is used to handle any rejections.

### Async/Await

Async functions in JavaScript allow you to write Promise-based asynchronous code in a synchronous manner, making asynchronous operations look more like synchronous code, which is often easier to read and maintain.

Here's the previous example rewritten using async/await:

```js
async function myAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Operation completed successfully');
      } else {
        reject('Operation failed');
      }
    }, 2000);
  });
}

async function runAsyncOperation() {
  try {
    const result = await myAsyncFunction();
    console.log(result); // Output: Operation completed successfully
  } catch (error) {
    console.error(error); // Output: Operation failed
  }
}

runAsyncOperation();
```

The `async` keyword before a function declaration means that the function will return a Promise implicitly, and the `await` keyword is used within async functions to wait for the Promise to resolve before proceeding further.

Async/await simplifies the syntax for handling asynchronous operations, making it easier to understand and maintain code that deals with promises, especially when dealing with multiple asynchronous tasks sequentially or in parallel.