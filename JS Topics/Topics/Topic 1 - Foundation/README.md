# JS Topic - 1 - Foundations

JavaScript is a versatile scripting language used primarily for web development, allowing dynamic content manipulation, event handling, and more.

We usually call the script file `script.js`

To the HTML we map the JS file by adding 

```html
<script src="script.js"></script>
```

in the end of the `<body>` element. Just like that:

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

    <!-- HTML content -->
    
    <!-- Script file mapped -->
    <script src="script.js"></script>

</body>

</html>
```

A simple "Hello, World!" script demonstrating basic syntax:

```js
// JavaScript code
console.log("Hello, World!");
```

## Language Basics

### Naming Conventions

JavaScript naming conventions help maintain consistency and readability in code. While JavaScript is flexible with naming, following conventions makes code more understandable for other developers and yourself in the future. Here are some common naming conventions:

1. Camel Case for Variables and Function Names:

Variables: Start with a lowercase letter, subsequent words capitalized.

```js
let userName = "JohnDoe";
let itemCount = 10;
```

Functions: Same as variables, but typically start with a verb or describe an action.

```js
function calculateTotal() {
  // Function logic here
}
```

2. Pascal Case for Constructor Functions and Classes:

Constructor Functions: Start each word with a capital letter (also known as Upper Camel Case).

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
```

Classes: Similar to constructor functions, start each word with a capital letter.

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
```

3. UPPERCASE for Constants:

Constants: Use all uppercase letters with underscores for separating words.

```js
const MAX_VALUE = 100;
const API_KEY = "abc123";
```

4. Descriptive and Meaningful Names:

Be descriptive: Use names that convey the purpose or meaning of variables, functions, or classes.

Avoid ambiguity: Names should be clear and unambiguous to prevent confusion.

5. Use Consistent Naming Styles:

Consistency: Maintain a consistent style throughout your codebase. If you choose a convention, stick to it.

6. Avoid Reserved Keywords and Special Characters:

Avoid reserved keywords: Don’t use JavaScript reserved keywords as identifiers (like function, let, const, class, etc.).

Avoid special characters: Except for underscores in variables or constants, avoid special characters.

7. Variables and Functions Should Start with Relevant Letters:

Avoid starting with numbers: Variable and function names shouldn’t start with numbers.

### Scope

In JavaScript, scope refers to the visibility and accessibility of variables, functions, and objects within your code. Understanding scope is crucial as it determines where variables and functions are accessible and where they aren't.

```js
let globalVar = 10;

function someFunction() {
  console.log(globalVar); // Accessible
}

// ===== Another Example =====

function someFunction() {
  let localVar = 20;
  console.log(localVar); // Accessible

  // Nested function with its own scope
  function innerFunction() {
    console.log(localVar); // Accessible
  }
}

// ===== Another Example =====

if (true) {
  let blockVar = 30;
  console.log(blockVar); // Accessible
}
console.log(blockVar); // Error: blockVar is not defined (outside the block)

// ===== Another Example =====

function outerFunction() {
  let outerVar = "Hello";

  function innerFunction() {
    console.log(outerVar); // Accessible due to closure
  }

  return innerFunction;
}

let myFunction = outerFunction();
myFunction(); // Output: "Hello"
```

### Variables

In JavaScript, variables are containers that hold values. They are used to store data that can be referenced and manipulated throughout the code. Variables in JavaScript can hold various types of data, such as numbers, strings, objects, functions, and more.

To create a variable in JavaScript, you use the var, let, or const keyword followed by the variable name. Here's a brief overview of each:

`var`: Historically used for variable declaration, but its scope can sometimes lead to unexpected behavior. It has a function-level scope.

`let`: Introduced in newer versions of JavaScript (ES6). It allows block-scoping, meaning the variable is limited to the block (inside curly braces {}) where it's declared or defined.

`const`: Also introduced in ES6, it declares a constant variable whose value cannot be changed once it's assigned. However, note that for objects and arrays declared with const, their internal properties or elements can still be modified.

```js
// Using var (function-scoped)
var x = 10;

// Using let (block-scoped)
let y = 'Hello';

// Using const (block-scoped)
const PI = 3.14;
```

### Data Types

In JavaScript, there are several data types that define the kinds of data that variables can hold. 

Primitive Data Types:

`Number`: Represents both integers and floating-point numbers.

```js
// Number: Represents integers or floating-point numbers.
let age = 25;
let pi = 3.14;
```

`String`: Represents a sequence of characters, such as text.

```js
// String: Represents textual data enclosed in single or double quotes.
let greeting = 'Hello, world!';
let firstName = "John";
```

`Boolean`: Represents true or false values.

```js
// Boolean: Represents a logical value indicating true or false.
let isStudent = true;
let hasSubscription = false;
```
`Undefined`: Represents a variable that has been declared but not assigned a value.

```js
// Undefined: Represents a variable that has been declared but not assigned a value.
let address;
console.log(address); // Output: undefined
```

`Null`: Represents the absence of a value or a deliberate non-value.

```js
// Null: Represents the deliberate absence of a value.
let emptyValue = null;
```

`Symbol (ES6+)`: Represents a unique and immutable value used as object property keys.


```js
// Symbol (ES6+): Represents a unique and immutable value.
const id = Symbol('id');
const user = {
  name: 'Alice',
  [id]: 123
};
```

Non-primitive/Data Structure Types:

`Object`: Represents a collection of key-value pairs. Objects can be created using curly braces `{}` and can contain properties and methods.

```js
// Object: Represents a collection of key-value pairs.
let person = {
  name: 'Sarah',
  age: 30,
  isStudent: false
};
```

`Array`: A special type of object used to store multiple values in a single variable. Arrays can hold different data types.

```js
// Array: Stores multiple values in a single variable.
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [10, 'hello', true];
```

`Function`: Functions are objects in JavaScript. They can be invoked, can have properties, and can be passed as arguments to other functions.

```js
// Function expression
const multiply = function(x, y) {
  return x * y;
};
```

### Operators

JavaScript operators are symbols or keywords used to perform operations on operands (values or variables). These operations can be arithmetic, assignment, comparison, logical, bitwise, and more. 

Arithmetic Operators:

Addition +: Adds two operands.
Subtraction -: Subtracts the second operand from the first.
Multiplication *: Multiplies two operands.
Division /: Divides the first operand by the second.
Modulus %: Returns the remainder after division.

```js
let a = 10;
let b = 5;

let addition = a + b; // Addition
let subtraction = a - b; // Subtraction
let multiplication = a * b; // Multiplication
let division = a / b; // Division
let modulus = a % b; // Modulus (Remainder)
```

Assignment Operators:

Assignment =: Assigns a value to a variable.
Addition Assignment +=: Adds the right operand to the left operand and assigns the result to the left operand.
Subtraction Assignment -=: Subtracts the right operand from the left operand and assigns the result to the left operand.
...and so on (*=, /=, %=) for other arithmetic operations.

```js
let x = 10;
x += 5; // Equivalent to: x = x + 5;
```

Comparison Operators:

Equal == or Strict Equal ===: Checks if two operands are equal in value. Strict equal checks both value and type.
Not Equal != or Strict Not Equal !==: Checks if two operands are not equal in value. Strict not equal checks both value and type.
Greater Than > and Less Than <: Checks if one operand is greater/less than the other.
Greater Than or Equal To >= and Less Than or Equal To <=: Checks if one operand is greater/less than or equal to the other.

```js
let num1 = 10;
let num2 = 5;

console.log(num1 === num2); // Strict Equal
console.log(num1 !== num2); // Strict Not Equal
console.log(num1 > num2); // Greater Than
console.log(num1 < num2); // Less Than
console.log(num1 >= num2); // Greater Than or Equal To
console.log(num1 <= num2); // Less Than or Equal To
```

Logical Operators:

Logical AND &&: Returns true if both operands are true.
Logical OR ||: Returns true if at least one operand is true.
Logical NOT !: Reverses the logical state of its operand.

```js
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // Logical AND
console.log(isTrue || isFalse); // Logical OR
console.log(!isTrue); // Logical NOT
```

Logical Operators Truth table: 

Logical AND (&&) Operator:

```js
let operandA = true;
let operandB = true;

if (operandA && operandB) {
  console.log("Both operands are true");
} else {
  console.log("At least one operand is false");
}

operandA = true;
operandB = false;

if (operandA && operandB) {
  console.log("Both operands are true");
} else {
  console.log("At least one operand is false");
}

operandA = false;
operandB = false;

if (operandA && operandB) {
  console.log("Both operands are true");
} else {
  console.log("At least one operand is false");
}
```

Logical OR (||) Operator:

```js
let operandA = true;
let operandB = true;

if (operandA || operandB) {
  console.log("At least one operand is true");
} else {
  console.log("Both operands are false");
}

operandA = true;
operandB = false;

if (operandA || operandB) {
  console.log("At least one operand is true");
} else {
  console.log("Both operands are false");
}

operandA = false;
operandB = false;

if (operandA || operandB) {
  console.log("At least one operand is true");
} else {
  console.log("Both operands are false");
}
```

Logical NOT (!) Operator:

```js
let operand = true;

if (!operand) {
  console.log("Operand is false");
} else {
  console.log("Operand is true");
}

operand = false;

if (!operand) {
  console.log("Operand is false");
} else {
  console.log("Operand is true");
}
```

### Conditionals

Conditionals in JavaScript are structures that allow you to execute different blocks of code based on certain conditions. They help control the flow of a program by evaluating an expression and deciding which code to execute depending on whether the expression is true or false.

Types of Conditionals in JavaScript:

1. If Statement:

The if statement executes a block of code if a specified condition is true.

```js
let num = 10;

if (num > 0) {
  console.log("Number is positive");
}
```

2. If...else Statement:

The if...else statement executes one block of code if the condition is true and another block if the condition is false.

```js
let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}
```

3. Nested if...else Statement:

You can nest if...else statements within each other to handle more complex conditions.

```js
let age = 20;
let isStudent = true;

if (age < 18) {
  console.log("You are under 18");
} else {
  if (isStudent) {
    console.log("You are a student and over 18");
  } else {
    console.log("You are not a student and over 18");
  }
}
```

4. Else if Statement:

The else if statement allows you to check for multiple conditions.

```js
let score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else if (score >= 70) {
  console.log("C grade");
} else {
  console.log("Below C grade");
}
```

5. Switch Statement:

The switch statement allows you to select one of many code blocks to be executed based on the value of an expression.

```js
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Other day";
}
console.log(`Today is ${dayName}`);
```

### Loops

JavaScript loops are constructs used to repeatedly execute a block of code as long as a specified condition is true. They allow for the automation of repetitive tasks and the processing of data collections.

Types of Loops in JavaScript:

1. For Loop:

Executes a block of code a specified number of times.

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs numbers from 0 to 4
}
```

2. While Loop:

Executes a block of code while a specified condition is true.

```js
let count = 0;

while (count < 5) {
  console.log(count); // Outputs numbers from 0 to 4
  count++;
}
```

3. Do...While Loop:

Similar to a while loop, but it executes the block of code once before checking the condition.

```js
let num = 0;

do {
  console.log(num); // Outputs 0 (even if the condition is false)
  num++;
} while (num < 0);
```

4. For...in Loop:

Iterates over the enumerable properties of an object.

```js
const person = {
  name: 'Alice',
  age: 25,
  gender: 'female'
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`); // Outputs key-value pairs
}
```

5. For...of Loop:

Iterates over iterable objects like arrays, strings, etc.

```js
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color); // Outputs array elements: red, green, blue
}
```

6. Breaking and Continuing:

`break`: Terminates the loop and moves to the next statement.
`continue`: Skips the current iteration and moves to the next one.

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skips the iteration when i is 3
  }
  console.log(i); // Outputs numbers from 0 to 4 (excluding 3)
}

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Breaks the loop when i is 3
  }
  console.log(i); // Outputs numbers from 0 to 2
}
```

### Functions

Functions in JavaScript are blocks of reusable code designed to perform a specific task or calculate a value. They allow you to encapsulate a piece of code, name it, and then execute it wherever needed within your program.

Creating Functions:

You can define functions using the function keyword followed by a name and a block of code enclosed in curly braces {}.

```js
function greet() {
  console.log("Hello!");
}

// Calling the function
greet(); // Output: "Hello!"
```

Function Parameters and Arguments:

Functions can take parameters, which are placeholders for values, and arguments are the actual values passed into the function when calling it.

```js
function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

// Calling the function with an argument
greetPerson("Alice"); // Output: "Hello, Alice!"
```

Return Values:

Functions can return values using the return keyword. This allows them to compute a value that can be used elsewhere in the code.

```js
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8
```

Function Expressions:

Functions can also be created as expressions. These are anonymous functions assigned to variables or properties.

```js
const multiply = function(a, b) {
  return a * b;
};

let product = multiply(4, 6);
console.log(product); // Output: 24
```

Arrow Functions (ES6+):

Arrow functions provide a concise syntax for writing functions, especially useful for short, one-line functions.

```js
const square = (x) => x * x;

console.log(square(5)); // Output: 25
```

Callback Functions:

Functions can be passed as arguments to other functions, often used in asynchronous code or event handling.

```js
function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

function finish() {
  console.log("Finished!");
}

doSomething(finish); // Output: "Doing something..." followed by "Finished!"
```

### Objects & Arrays

Objects in JavaScript:

Objects are collections of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including objects or functions.

Object Creation:

```js
let person = {
  name: 'John',
  age: 30,
  isStudent: false,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```

Accessing Object Properties:

```js
console.log(person.name); // Output: 'John'
console.log(person.age); // Output: 30
person.greet(); // Output: 'Hello, my name is John'
```

Object Manipulation:

```js
person.age = 31; // Modifying a property
person.job = 'Developer'; // Adding a new property
delete person.isStudent; // Deleting a property
```

Arrays in JavaScript:

Arrays are ordered collections of elements. They can store multiple values of different data types and are indexed starting from zero.

Array Creation:

```js
let numbers = [1, 2, 3, 4, 5];
let names = ['Alice', 'Bob', 'Charlie'];
```

Accessing Array Elements:

```js
console.log(numbers[0]); // Output: 1
console.log(names[2]); // Output: 'Charlie'
```

Array Manipulation:

```js
numbers.push(6); // Adding an element at the end
names.pop(); // Removing the last element
names.unshift('Eve'); // Adding an element at the beginning
numbers.shift(); // Removing the first element
numbers.splice(2, 1, 10); // Removing and adding elements at a specific position
```

Array Iteration Methods:

```js
// forEach
numbers.forEach(function(number) {
  console.log(number);
});

// map
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

// filter
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

// reduce
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator
```

Multidimensional Arrays:

Arrays within arrays, creating a grid or table-like structure.

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]); // Output: 6
```

## Error Handling

Error handling in JavaScript involves managing and responding to errors that occur during the execution of a program. Errors can happen due to syntax issues, logical errors, or unexpected situations, and handling them appropriately is crucial for building robust applications.

Types of Errors in JavaScript:

1. Syntax Errors:

Occurs due to code syntax mistakes that violate the language's rules, preventing the code from executing.

```js
let x = 10;
console.log(x)
// SyntaxError: missing ) after argument list
```

2. Runtime Errors:

Occurs during the execution of the program due to invalid operations or unexpected conditions.

```js
let y = 5;
y.toUpperCase();
// TypeError: y.toUpperCase is not a function
```

3. Logical Errors:

Code that runs but produces incorrect results due to flawed logic.

```js
function divide(a, b) {
  return a / b;
}

console.log(divide(10, 0));
// Output: Infinity (No error, but logically incorrect)
```

Handling Errors in JavaScript:

1. Try...Catch Statement:

Used to handle exceptions and gracefully manage errors.

```js
try {
  // Code that might throw an error
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}
```

2. Throw Statement:

Manually throws an error when a specific condition is met.

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
}
```

3. Error Object:

JavaScript provides an Error object that contains information about an error.

- `error.name`: Contains the name of the error (e.g., SyntaxError, TypeError).
- `error.message`: Provides a human-readable description of the error.
- `error.stack`: Displays the stack trace of the error.

## Working with the DOM

Working with the DOM (Document Object Model) in JavaScript involves manipulating the structure, content, and styling of HTML documents dynamically. The DOM represents the document as a tree-like structure where each node represents an element, attribute, or text within the HTML.

Accessing DOM Elements:

1. getElementById:

Retrieves an element by its unique id attribute.

```js
let element = document.getElementById("myElement");
```

2. querySelector:

Selects the first element that matches a specified CSS selector.

```js
let element = document.querySelector(".className");
```

3. querySelectorAll:

Selects all elements that match a specified CSS selector.

```js
let elements = document.querySelectorAll("p");
```

Modifying DOM Elements:

1. Changing Text Content VS Changing HTML Content:

```js
element.textContent = "New text content";
element.innerHTML = "<b>New HTML content</b>";
```

2. Changing CSS Styles:

```js
element.style.color = "red";
element.style.fontSize = "16px";
```

3. Manipulating Attributes:

```js
element.setAttribute("id", "newId");
element.removeAttribute("class");
```

Creating and Appending DOM Elements:

1. Creating Elements:

```js
let newElement = document.createElement("div");
```

2. Appending Elements:

```js
parentElement.appendChild(newElement);
```

3. Removing Elements:

```js
parentElement.removeChild(childElement);
```

Event Handling:

1. Adding Event Listeners:

```js
element.addEventListener("click", function() {
  // Event handling code
});
```

2. Removing Event Listeners:

```js
element.removeEventListener("click", eventHandlerFunction);
```

### Complex Example 

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

    <h1 id="mainTitle">Click the Button!</h1>
    <div id="container"></div>
    <button id="btn">Click Me</button>
    
    <script src="script.js"></script>
</body>

</html>
```

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #333;
}

#container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.square {
    width: 100px;
    height: 100px;
    background-color: #FFD700;
    margin: 0 10px;
    transition: transform 0.3s ease-in-out;
}

.square:hover {
    transform: scale(1.2);
}

button {
    padding: 10px 20px;
    margin: 3rem;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

button:hover {
    background-color: #45a049;
}
```

```js
document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("mainTitle");
    const container = document.getElementById("container");
    const button = document.getElementById("btn");

    button.addEventListener("click", function () {
        title.textContent = "Button Clicked!";
        createSquares();
    });

    function createSquares() {
        container.innerHTML = "";
        for (let i = 0; i < 5; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }
    }
});
```

## Events and Event Handling

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

### Mouse Events

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

## Form Validations 

Form validation in JavaScript involve ensuring that user input meets certain criteria or constraints before allowing it to be submitted. It's essential for enhancing user experience and maintaining data integrity on web forms.

Form Validation:

JavaScript can be used to validate form input either while the user is filling out the form or before submitting it to the server. Here's a simple example demonstrating form validation using JavaScript:

```html
<form id="myForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <span id="nameError" class="error"></span>
  <br>
  
  <label for="telephone">Telephone:</label>
  <input type="tel" id="telephone" name="telephone">
  <span id="telephoneError" class="error"></span>
  <br>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <span id="emailError" class="error"></span>
  <br>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea>
  <span id="messageError" class="error"></span>
  <br>
  
  <button type="submit">Submit</button>
</form>
```

```css
.error {
      color: red;
      font-size: 12px;
      margin-top: 5px;
    }
```

```js
const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    let isValid = true;

    const nameInput = document.getElementById('name');
    const telephoneInput = document.getElementById('telephone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const telephoneError = document.getElementById('telephoneError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Validate Name (Not empty)
    if (inputIsEmpty(nameInput)) {
        displayError(nameError, 'Name is required');
        isValid = false;
    } else {
        clearError(nameError);
    }

    // Validate Telephone (Only numbers)
    if (!isValidTelephone(telephoneInput)) {
        displayError(telephoneError, 'Enter a valid telephone number');
        isValid = false;
    } else {
        clearError(telephoneError);
    }

    // Validate Email (Email format)
    if (!isValidEmail(emailInput)) {
        displayError(emailError, 'Enter a valid email address');
        isValid = false;
    } else {
        clearError(emailError);
    }

    // Validate Message (Not empty)
    if (inputIsEmpty(messageInput)) {
        displayError(messageError, 'Message is required');
        isValid = false;
    } else {
        clearError(messageError);
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function inputIsEmpty(input) {
    return input.value.trim() === '';
}

function isValidTelephone(input) {
    const telephoneRegex = /^\d+$/;
    return telephoneRegex.test(input.value.trim());
}

function isValidEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input.value.trim());
}

function displayError(element, message) {
    element.textContent = message;
}

function clearError(element) {
    element.textContent = '';
}
```

## Asynchronous JavaScript

Asynchronous JavaScript refers to executing code that doesn’t necessarily run in sequence or wait for one operation to complete before starting another. Callback functions play a significant role in handling asynchronous operations in JavaScript.

Callbacks:

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

Promises:

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

Async/Await:

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

## Further Research

- Object oriented programming
- Asynchronous Operations and APIs
- Handling User Input and Events
- Dynamic Content Rendering
- Client-Side Routing
- Browser Storage and Cookies
- Responsive and Mobile-first Development
- Performance Optimization
- Cross-browser Compatibility
- And Many Many other topics ...