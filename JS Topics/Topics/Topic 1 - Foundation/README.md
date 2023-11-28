# JS Topic 1 - Foundations

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

## Why to the end of the `<body>`?

There are basically two reasons for that.

**Page Loading Performance:** Placing JavaScript files at the end of the `<body>` allows the HTML content to load first. JavaScript can sometimes block other resources from loading while it's being fetched and executed. By putting it at the end, the page's critical content (HTML, CSS, images) can load first, improving perceived performance.

**Parsing and Execution:** Older browsers used to parse HTML in a sequential manner. When encountering a `<script>` tag, they would stop parsing until the script was fetched and executed. Placing scripts at the end of the body helps avoid this interruption as most of the visible content would have already been parsed and displayed.

## Basic example

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
## Comments

In JavaScript, comments are used to add explanatory notes or to exclude certain lines of code from being executed by the browser. There are two types of comments in JavaScript:

### Single-line comments

To create a single-line comment in JavaScript, you use //. Anything after // on the same line will be treated as a comment.

```js
// This is a single-line comment
var x = 5; // Assigning the value 5 to variable x
```

Everything after `//` until the end of the line won't be executed by the browser and is purely for human readability.

### Multi-line comments

Multi-line comments start with `/*` and end with `*/`, allowing you to comment out multiple lines at once.

```js
/*
   This is a multi-line comment
   It can span multiple lines
   and is useful for longer explanations.
*/
```

All text between `/*` and `*/`, including line breaks, won't be interpreted as JavaScript code by the browser.

Comments in JavaScript are essential for documenting code, explaining functionality, or temporarily disabling sections of code for testing or debugging purposes. They help developers understand the purpose of specific code segments and improve code readability.