# JS Topic 8 - Error Handling

Error handling in JavaScript involves managing and responding to errors that occur during the execution of a program. Errors can happen due to syntax issues, logical errors, or unexpected situations, and handling them appropriately is crucial for building robust applications.

## Types of Errors in JavaScript

### Syntax Errors

Occurs due to code syntax mistakes that violate the language's rules, preventing the code from executing.

```js
let x = 10;
console.log(x)
// SyntaxError: missing ) after argument list
```

### Runtime Errors

Occurs during the execution of the program due to invalid operations or unexpected conditions.

```js
let y = 5;
y.toUpperCase();
// TypeError: y.toUpperCase is not a function
```

### Logical Errors

Code that runs but produces incorrect results due to flawed logic.

```js
function divide(a, b) {
  return a / b;
}

console.log(divide(10, 0));
// Output: Infinity (No error, but logically incorrect)
```

## Handling Errors in JavaScript

### Try...Catch Statement

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

### Throw Statement

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

### Error Object

JavaScript provides an Error object that contains information about an error.

- `error.name`: Contains the name of the error (e.g., SyntaxError, TypeError).
- `error.message`: Provides a human-readable description of the error.
- `error.stack`: Displays the stack trace of the error.

## Tasks

It's showtime.

### taskName

```js


```