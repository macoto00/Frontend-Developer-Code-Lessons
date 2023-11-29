# JS Topic 6 - Functions

Functions in JavaScript are blocks of reusable code designed to perform a specific task or calculate a value. They allow you to encapsulate a piece of code, name it, and then execute it wherever needed within your program.

## Creating Functions

You can define functions using the function keyword followed by a name and a block of code enclosed in curly braces {}.

```js
function greet() {
  console.log("Hello!");
}

// Calling the function
greet(); // Output: "Hello!"
```

## Function Parameters and Arguments

Functions can take parameters, which are placeholders for values, and arguments are the actual values passed into the function when calling it.

```js
function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

// Calling the function with an argument
greetPerson("Alice"); // Output: "Hello, Alice!"
```

## Return Values

Functions can return values using the return keyword. This allows them to compute a value that can be used elsewhere in the code.

```js
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8
```

## Function Expressions

Functions can also be created as expressions. These are anonymous functions assigned to variables or properties.

```js
const multiply = function(a, b) {
  return a * b;
};

let product = multiply(4, 6);
console.log(product); // Output: 24
```

## Arrow Functions (ES6+)

Arrow functions provide a concise syntax for writing functions, especially useful for short, one-line functions.

```js
const square = (x) => x * x;

console.log(square(5)); // Output: 25
```

## Callback Functions

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

## Tasks

It's showtime.

### Task Name

```js
// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"
```