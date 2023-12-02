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

## Recursion

Recursion in JavaScript refers to a programming technique where a function calls itself within its own definition. It's a powerful concept that allows a function to solve a problem by breaking it down into smaller, more manageable parts until it reaches a base case.

Here's a simple example of a recursive function in JavaScript that calculates the factorial of a number:

```js
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive call: n * factorial of (n - 1)
    return n * factorial(n - 1);
  }
}

// Example usage
console.log(factorial(5)); // Outputs 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
```

## Tasks

It's showtime.

You may need to do a research for a Regular expressions AKA "regex".

### Greeting

```js
// Create a program that Greet the input user.
// The input should be stored in a variable.

// Example: Hello there, general Kenobi!

// Example usage:

let inputUser = "general Kenobi";
let greeting = greetUser(inputUser);

console.log(greeting);
```

### Double the Value

```js
// Create a program that doubles an input number and returns it's doubled value.
// The input should be stored in a variable.

// Example: 

// Input: 123.
// Output: 246.

// Example usage:

let number = 123;
let doubledNumber = doubleNumber(number);

console.log("Input:", number);
console.log("Double:", doubledNumber);
```

### LOTR

```js
// You are given a variable frodo - Frodo walks alone.
// But frodo doesn't like to walk alone. He likes to walk with Sam, his friend. 
// Write a function called `notAlone()` that takes the input frodo, handle the logic so the return value is "Frodo walks with Sam".

// Example:

// Input: Frodo walks alone..
// Output: Frodo walks with Sam..

// Example usage:

let frodoSentence = "Frodo walks alone.";
let result = notAlone(frodoSentence);
console.log("Input:", frodoSentence);
console.log("Output:", result);
```

### Sum

```js
// Write a function called `sum()` that returns the sum of numbers from zero
// to the given parameter
//
// Example: sum(5) = 0 + 1 + 2 + 3 + 4 + 5 = 15

// Example usage:
console.log(sum(5)); // Output: 15
```

### Factorial

```js
// Create a function called `calculateFactorial()`
// that returns the factorial of its input.
//
// Example: 

// calculateFactorial(5) = 1 * 2 * 3 * 4 * 5 = 120.

// Example usage:

let number = 5;
console.log(calculateFactorial(number));
```

### Anagram 💪

What the hell is an anagram?

An anagram is direct word switch or word play, the result of rearranging the letters of a word or phrase to produce a new word or phrase, using all the original letters exactly once.

```js
// Create a function named isAnagram() following your current language's style guide. 
// It should take two strings and return a boolean value depending on whether it's an anagram or not.

// The function should ignore the letter case as well as any non (latin) letter characters, 
// i.e. "Astronomer" is an anagram of "Moon starer!"

// Example usage:

let string1 = "dog";
let string2 = "God";

let string3 = "Luke";
let string4 = "Vader";

console.log(isAnagram(string1, string2)); // Output: true
console.log(isAnagram(string3, string4)); // Output: false
```

### Palindrome 💪

What the hell is a palindrome?

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, such as madam or racecar.

```js
// Create a function named isPalindrome(). 
// It should take a string and check whether it is a palindrome or not and return a boolean value.

// The function should ignore the letter case as well as any non (latin) letter characters.

// Example usage:

let inputString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(inputString)); // Output: true

```

### Palindrome Builder 💪

```js
// Create a function named build(). 
// It should take a string, create a palindrome from it and then return it.

// The function should ignore the letter case as well as any non (latin) letter characters.

// Example usage:

let inputString = "Hello, world!";
console.log(build(inputString)); // Output: "helloworlddlrowolleh"
```

### Palindrome Searcher 💪

```js
// Create a function named search(). 
// It should take a string, search for palindromes of length at least 3 within it and return them in an array.

// Hint: create a function named isPalindrome() which takes a string as an input 
// and returns true/false depending on whether the string is a palindrome or not.

// Example usage:

let inputString = "abcbarracecarwow";
console.log(search(inputString)); // Output: ["bcb", "racecar", "wow"]
```

### Using recursion

```js
// Implement "numberAdder" which is a recursive function that takes one parameter: n (number)
// and returns the sum of integers from 1 to n.
// The function should return 0 for inputs less than 1.
```

### Using recursion again

```js
// Given a non-negative number n, return the sum of its digits recursively
// (without loops).
```