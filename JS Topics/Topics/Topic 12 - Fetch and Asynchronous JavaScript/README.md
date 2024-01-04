# JS Topic 12 - Fetch and Asynchronous JavaScript

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

## Fetch 

The `fetch` API in JavaScript is used to make network requests, typically to retrieve resources from a server via HTTP. It's a modern alternative to older methods like `XMLHttpRequest` and provides a more powerful and flexible feature set for handling network requests.

### Basic Usage

The fetch function takes in the URL of the resource you want to fetch and returns a Promise that resolves to the Response to that request. Here's a simple example:

```js
fetch('https://api.example.com/data')
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Work with the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
  });
```

### Benefits of `fetch`

**Simplicity**

- The fetch API provides a simple and clean syntax for making network requests compared to older methods.

**Promises** 

- It uses Promises, making it easier to handle asynchronous operations and chaining multiple requests or actions.

**Built-in JSON Handling**

- The fetch function automatically parses JSON responses using the .json() method, simplifying the process of working with JSON data.

- Support for Different Data Formats: Apart from JSON, it can handle other types of responses like text, blobs, and FormData.

**Modern API**

- fetch is a part of the modern JavaScript API, designed to work well with modern features like Promises and async/await.

**Flexibility**

- It allows you to configure requests with options like headers, request methods, authentication, and more.

### Common Use Cases

**API Calls**

- Fetching data from a server-side API to display information on a web page.

**Posting Data**

- Sending form data or JSON payloads to a server to create or update resources.

**Downloading Files**

- Fetching files such as images, documents, or media content.

### General Knowledge

**Cross-Origin Requests**

- By default, fetch follows the browser's same-origin policy, which restricts making requests to different domains. For cross-origin requests, CORS (Cross-Origin Resource Sharing) headers need to be set on the server.

**Error Handling**

- Always handle errors when using fetch. Check for network issues, failed responses, or rejected promises to provide a better user experience and manage unexpected situations gracefully.

**Polyfills**

- Older browsers might not support the fetch API. In such cases, you can use a polyfill, like isomorphic-fetch or fetch-ponyfill, to enable fetch functionality.

**Security**

- When dealing with sensitive data or user authentication, ensure that HTTPS is used to encrypt data transmission over the network.

- Understanding fetch and its capabilities is crucial for modern web development, as it forms the backbone of many applications' communication with servers.

## JSON

JSON (JavaScript Object Notation) is a lightweight data format used to exchange and store information. It's simple, human-readable, and easily understandable by machines. It resembles key-value pairs in JavaScript objects or arrays.

Here's a quick example:

```js
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "address": {
    "city": "New York",
    "country": "USA"
  },
  "hobbies": ["reading", "hiking", "coding"]
}
```

In this example:

- It represents a person's information.
- `"name"`, `"age"`, `"isStudent"`, and `"address"` are keys.
- Values associated with keys can be strings (`"John Doe"`), numbers (`30`), booleans (`false`), nested objects (`"address"`), and arrays (`"hobbies"`).
- Key-value pairs are separated by commas, and objects are enclosed in curly braces `{}`. Arrays are enclosed in square brackets `[]`.
- JSON's simplicity, compatibility with different programming languages, and ease of use make it a preferred choice for data exchange between applications and systems.

## Example

Here's an example of how you can use the fetch API to retrieve data from a public JSON API and display it on a webpage using HTML, CSS, and JavaScript.

We will be using this website to fetch JSON: https://jsonplaceholder.typicode.com/

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Fetch API Example</title>
    <style>
        /* Some basic styling for the output */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }

        #output {
            border: 1px solid #ccc;
            padding: 20px;
        }
    </style>
</head>

<body>
    <div id="output">
        <!-- Data will be displayed here -->
    </div>

    <script src="script.js"></script>
</body>

</html>
```

```js
document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Fetch error:', error);
        displayError();
    }
}

function displayData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.innerText = post.title;

        const bodyElement = document.createElement('p');
        bodyElement.innerText = post.body;

        const hrElement = document.createElement('hr');

        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);
        postElement.appendChild(hrElement);

        outputDiv.appendChild(postElement);
    });
}

function displayError() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clearing existing content for error message

    const errorParagraph = document.createElement('p');
    errorParagraph.innerText = 'Error fetching data';
    outputDiv.appendChild(errorParagraph);
}
```

## Tasks 

It's showtime.

### Joke Fetcher

- Create a web application with a `<div>` container and a `<button>`.
- The button should start a fetch-based request.
- You can use this API - https://api.chucknorris.io/.
- Store the result in your container.
- Handle your promise's rejected status also (show some error message).
- Feel free to implement your awesome design.

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
