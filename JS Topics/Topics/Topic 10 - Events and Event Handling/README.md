# JS Topic 10 - Events and Event Handling

Events in JavaScript refer to actions or occurrences that happen in the browser, such as a user clicking a button, pressing a key, resizing a window, or a webpage finishing loading. Event handling involves writing code to respond to these events.

In JavaScript, you can use event listeners to handle events. Event listeners are functions that wait for a specific event to occur and then execute code in response. They are attached to HTML elements and respond to user interactions or other events triggered by the browser.

Example: 

```js
// Get a reference to the button element
const button = document.getElementById('myButton');

// Add an event listener to the button
button.addEventListener('click', function(event) {
  // Code to be executed when the button is clicked
  console.log('Button clicked!');
});
```

## Mouse Events

JavaScript provides various mouse events that allow you to respond to user interactions with the mouse on a webpage. These events occur when the user moves the mouse, clicks on elements, scrolls, hovers over elements, and more. Here are some commonly used mouse events:

- `click`: Fired when the mouse button is clicked.
- `dblclick`: Fired when the mouse button is double-clicked.
- `mousedown`: Fired when a mouse button is pressed down over an element.
- `mouseup`: Fired when a mouse button is released over an element.
- `mousemove`: Fired when the mouse pointer is moved over an element.
- `mouseover`: Fired when the mouse pointer enters the area of an element.
- `mouseout`: Fired when the mouse pointer leaves the area of an element.
- `contextmenu`: Fired when the right mouse button is clicked, typically used to display a context menu.

These events can be attached to HTML elements and respond to different mouse interactions, enabling you to create interactive features on a webpage.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="container">
        <div id="box" class="box">Move your mouse over this box</div>
        <p id="output">Mouse events will be displayed here</p>
    </div>

    <script src="script.js"></script>

</body>

</html>
```

```css
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.box {
    width: 200px;
    height: 200px;
    background-color: #3498db;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.box:hover {
    background-color: #2980b9;
}
```

```js
const box = document.getElementById('box');
const output = document.getElementById('output');

box.addEventListener('click', function () {
    output.textContent = 'Clicked!';
});

box.addEventListener('mouseover', function () {
    output.textContent = 'Mouse over the box!';
});

box.addEventListener('mouseout', function () {
    output.textContent = 'Mouse left the box!';
});

box.addEventListener('mousedown', function () {
    output.textContent = 'Mouse button pressed down!';
});

box.addEventListener('mouseup', function () {
    output.textContent = 'Mouse button released!';
});

box.addEventListener('mousemove', function (event) {
    output.textContent = `Mouse position - X: ${event.clientX}, Y: ${event.clientY}`;
});

```

## Keyboard Events

Keyboard events in JavaScript allow you to respond to user interactions with the keyboard. These events provide information about which keys are being pressed, released, or held down, enabling you to create dynamic and interactive experiences on web pages.

Here are the commonly used keyboard events:

- `keydown`: This event is triggered when a key is pressed down.
- `keyup`: This event is triggered when a key is released.
- `keypress`: Historically used for detecting character keys being pressed, but it's less commonly used now. It used to represent a character being inserted, but it doesn't detect all keys, such as modifier keys (Shift, Ctrl, Alt).
- `input`: This event is fired synchronously when the value of an `<input>`, `<select>`, or `<textarea>` element is changed.

Each of these events is associated with the event object, which contains information about the keyboard interaction. Some key properties of the event object related to keyboard events include:

- `event.key`: Indicates the value of the key that triggered the event ("a", "Enter", "Shift", etc.).
- `event.code`: Provides the physical position of the key on the keyboard ("KeyA" for "a" key, "Enter" for Enter key, etc.).
- `event.keyCode` (deprecated): Used to represent the Unicode value of the key that triggered the event (deprecated and not recommended for use).
- `event.which` (deprecated): Another way to represent the Unicode value of the key that triggered the event (deprecated and not recommended for use).

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="container">
        <h1>Type something...</h1>
        <p>Interact with the keyboard to see changes!</p>
    </div>

    <script src="script.js"></script>

</body>

</html>
```

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
}

.container {
    text-align: center;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

h1 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #333;
    transition: color 0.3s ease;
}

p {
    font-size: 18px;
    color: #666;
}

.keyboard-active {
    color: #e91e63;
}
```

```js
const container = document.querySelector('.container');
const heading = document.querySelector('h1');

document.addEventListener('keydown', function (event) {
    container.classList.add('keyboard-active');
    heading.style.color = 'red';
    heading.style.fontWeight = 'bold';
    console.log(`Key "${event.key}" pressed!`);
});

document.addEventListener('keyup', function (event) {
    container.classList.remove('keyboard-active');
    heading.style.color = ''; // Reset to default color
    heading.style.fontWeight = ''; // Reset to default font weight
    console.log(`Key "${event.key}" released!`);
});
```

## Form Events

JavaScript form events allow you to respond to various interactions and actions related to HTML forms on a web page. These events enable you to validate user input, control form submission, and perform actions based on form interactions. Here are some commonly used form events:

- `submit`: This event is triggered when a form is submitted, either by clicking a submit button or by using JavaScript to call the submit() method of the form.
- `reset`: Fired when the reset button within a form is clicked, resetting the form to its default values.
- `change`: Fired when the value of a form element (input, select, textarea) is changed and then loses focus.
- `input`: Similar to the change event but fires whenever the value of a form element is changed, even if it's still in focus.
- `focus`: Fired when a form element gains focus.
- `blur`: Fired when a form element loses focus.

Each of these events provides access to the event object, which contains information about the form interaction. Some key properties of the event object related to form events include:

- `event.target`: Refers to the form element that triggered the event.
- `event.preventDefault()`: Method used to prevent the default behavior associated with the event (e.g., preventing form submission).

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="container">
        <form id="myForm" class="form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username">
            <br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
            <br>
            <button type="submit">Submit</button>
        </form>
        <p id="output">Form events will be displayed here</p>
    </div>

    <script src="script.js"></script>

</body>

</html>
```

```css
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

input,
button {
    margin: 5px;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #ccc;
}

button {
    cursor: pointer;
    background-color: #3498db;
    color: white;
}

button:hover {
    background-color: #2980b9;
}
```

```js
const form = document.getElementById('myForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        output.textContent = `Form submitted! Username: ${username}, Password: ${password}`;
    } else {
        output.textContent = 'Please fill in all fields.';
    }
});
```

## Document/window events

JavaScript document and window events allow you to respond to various interactions and changes within the document or window of a web page. These events help in creating dynamic and interactive web experiences by detecting changes like loading of the document, resizing the window, scrolling, and more. Here are some commonly used document/window events:

Window Events:

- `load`: Fired when the entire page (including all its resources) finishes loading.
- `resize`: Fired when the browser window is resized.
- `scroll`: Fired when the document is scrolled either vertically or horizontally.
- `unload`: Fired when the page is about to be unloaded (e.g., when navigating away from the page).

Document Events:

- `DOMContentLoaded`: Fired when the initial HTML document has been completely loaded and parsed without waiting for stylesheets, images, and subframes to finish loading.
- `DOMContentLoaded`: Similar to DOMContentLoaded but is supported in IE versions 8 and earlier.

Each of these events triggers a callback function when it occurs, allowing you to perform actions or execute code in response to these events.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="container">
        <p>Try resizing the window, scrolling, and clicking anywhere on the page.</p>
        <p id="output">Document/Window events will be displayed here</p>
    </div>

    <script src="script.js"></script>

</body>

</html>
```

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    padding: 20px;
}

.container p {
    margin-bottom: 20px;
    font-size: 18px;
    color: #333;
    line-height: 1.5;
    max-width: 80%;
}
```

```js
const output = document.getElementById('output');

// Window events
window.addEventListener('resize', function () {
    output.textContent = 'Window resized!';
});

window.addEventListener('scroll', function () {
    output.textContent = 'Window scrolled!';
});

// Document events
document.addEventListener('click', function (event) {
    output.textContent = `Document clicked at X: ${event.clientX}, Y: ${event.clientY}`;
});
```

## Tasks - DOM and Events Together Strong

It's showtime.

### Manipulate me

You have this HTML:

```html
<div id="task1" class="task">
    <button id="task1Button">Click me!</button>
</div>

<div id="task2" class="task">
    <p id="task2Paragraph">Hover over me!</p>
</div>

<div id="task3" class="task">
    <div id="task3ImageDiv">
        <img id="task3Image" src="https://via.placeholder.com/150" alt="Pokemon">
    </div>
</div>

<div id="task4" class="task">
    <input id="task4Input" type="text">
    <button id="task4Button">Show Alert</button>
</div>

<div id="task5" class="task">
    <ul id="task5List">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>
</div>
```

This CSS:

```css
body {
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.task {
    border: 2px solid #333;
    padding: 20px;
    margin: 20px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button,
input[type="text"],
button[type="button"] {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

input {
    margin-right: 1rem;
}

img:hover {
    cursor: pointer;
}

button:hover,
input[type="text"]:focus,
button[type="button"]:hover {
    background-color: #2980b9;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

li:hover {
    background-color: #f9f9f9;
}
```

And your tasks are:

```js
// Task 1: The button should change its text when clicked.

// Task 2:The paragraph should change color of the parent div 
// when the mouse hovers over it.

// Task 3: Clicking the image should toggle its size.

// Task 4: Clicking the button should display an alert with the 
// text entered in the input field.

// Task 5: When clicked on list item - the item is removed from the 
// list.
```