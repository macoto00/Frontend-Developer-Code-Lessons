# JS Topic 12 - Asynchronous JavaScript

What the hell is that Asynchronous?

Synchronous refers to a process where tasks execute one after another in a sequential order, while asynchronous means tasks can start, execute, and complete independently of each other without waiting, often allowing parallel execution or callbacks, presenting a difference in execution flow and the potential for concurrent operations.

So, Asynchronous JavaScript refers to executing code that doesn’t necessarily run in sequence or wait for one operation to complete before starting another. Callback functions play a significant role in handling asynchronous operations in JavaScript.

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

## Tasks 

It's showtime.

### Joke Fetcher

- Create a web application with a `<div>` container and a `<button>`.
- The button should start a fetch-based request.
- You can use this API - https://api.chucknorris.io/.
- Store the result in your container.
- Handle your promise's rejected status also (show some error message).
- You can implement more awesome design than the example 😃

### Surprise 💪

Create a surprise event triggered by a button click after a delay using setTimeout with a visible countdown.

You have this HTML:

```html
<div id="funnyTask" class="container">
    <button id="triggerButton">Trigger Surprise</button>
    <p id="countdown">Get ready for a surprise in <span id="timer">5</span> seconds!</p>
    <p id="surpriseMessage" style="display: none;">Surprise! 🎉</p>
</div>
```

```css
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

.container {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

p {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
```

### STAR WARS API (SWAPI) 💪💪

Your task is to create JavaScript functionality for a web application that interacts with provided HTML and CSS to fetch and display random character details from the Star Wars universe. The application already has a structured HTML layout and styled elements.

**Data Fetching:**

Utilize the Star Wars API (SWAPI) to retrieve character details.
Use asynchronous JavaScript to fetch data from the API.

**Displaying Data:**

Update the JavaScript code to display the following details for the random character:

- Name
- Gender
- Height
- Mass
- Birth Year
- User Feedback:

Provide a text paragraph in the HTML that informs the user that data is being fetched when the button is clicked.
Update this paragraph to indicate when the character data has been successfully fetched or if an error occurs during the process.

**JavaScript Implementation:**

Implement JavaScript functions to handle button click events and API requests.
Use the provided HTML and CSS structure to manipulate and display data on the webpage.

**Additional Information:**

You'll work specifically on the JavaScript functionality within the provided HTML and CSS structure.
Ensure that error handling is implemented for network-related issues or if the API request fails.
Test the application to ensure character data is displayed correctly and that error messages are shown when necessary.

**Resources:**

Star Wars API (SWAPI): https://swapi.dev/

Note: You can write your own HTML and CSS or you can use mine; focus on implementing JavaScript functionality to interact with the provided elements.

HTML

```html
<div class="container">
    <h1>Star Wars Characters</h1>
    <button id="fetchButton">Fetch Random Character</button>
    <div class="characterInfo" id="characterInfo">
        <div class="characterDetails" id="characterDetails">
            <h2>Character Details</h2>
            <ul>
                <li><span>Name:</span> <span id="charName"></span></li>
                <li><span>Gender:</span> <span id="charGender"></span></li>
                <li><span>Height:</span> <span id="charHeight"></span></li>
                <li><span>Mass:</span> <span id="charMass"></span></li>
                <li><span>Birth Year:</span> <span id="charBirthYear"></span></li>
            </ul>
        </div>
    </div>
    <p id="infoParagraph"></p> 
</div>
```

CSS

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

.characterDetails {
    margin-top: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}

span {
    font-weight: bold;
}

.characterInfo {
    display: none;
}
```

Already done? You can modify the code like this:

- add an input for the user to insert a number for a person
- use the input value to fetch the information regarding the character
- handle the rejected fetch (input) properly and print an error message