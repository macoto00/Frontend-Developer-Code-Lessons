# JS Topic 5 - Loops

JavaScript loops are constructs used to repeatedly execute a block of code as long as a specified condition is true. They allow for the automation of repetitive tasks and the processing of data collections.

Types of Loops in JavaScript:

## For Loop

Executes a block of code a specified number of times.

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs numbers from 0 to 4
}
```

## While Loop

Executes a block of code while a specified condition is true.

```js
let count = 0;

while (count < 5) {
  console.log(count); // Outputs numbers from 0 to 4
  count++;
}
```

## Do...While Loop

Similar to a while loop, but it executes the block of code once before checking the condition.

```js
let num = 0;

do {
  console.log(num); // Outputs 0 (even if the condition is false)
  num++;
} while (num < 0);
```

## For...in Loop

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

## For...of Loop

Iterates over iterable objects like arrays, strings, etc.

```js
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color); // Outputs array elements: red, green, blue
}
```

## Breaking and Continuing

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

## Tasks

It's showtime.

### I will not cheat

```js
// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"
```

### Even 500

```js
// Create a program that prints all even numbers between 0 and 500 (both included)
```

### Multiplication

```js
// Create a program which prints the multiplication table for a specified
// number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

// Example usage:

let specifiedNumber = 15;
printMultiplicationTable(specifiedNumber);

function printMultiplicationTable(number) {
  // Write logic here
}
```

### FizzBuzz

```js
// Write a program that prints the numbers from 1 to 100
// but for multiples of three print "Fizz" instead of the number
// and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
```

### Draw triangle 💪

```js
// Write a program that takes a number and
// then draws a triangle of the specified height
//
// Example:
//
// The triangle height: 4
// *
// **
// ***
// ****

// Example usage:

let triangleHeight = 4;
drawTriangle(triangleHeight);


function drawTriangle(height) {
  // Solve logic here
}
```

### Draw pyramid 💪

```js
// Write a program that reads a number from the input and
// then draws a pyramid of the specified height
//
// Example:
//
// Please enter the pyramid height: 4
//    *
//   ***
//  *****
// *******

// Example usage:

let pyramidHeight = 4;
drawPyramid(pyramidHeight);

function drawPyramid(height) {
  // Solve logic here
}
```

### Draw diamond 💪

```js
// Write a program that reads a number from the standard input and
// then draws a diamond of the specified height
//
// Example:
//
// Please enter the diamond height: 4
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// Note: the height of the diamond is taken from its base
// (where it is the widest) to the top.
// The total number of lines produced is 2*height-1
```

### Guess the number 💪

```js
// Write a program that stores a number and the user has to figure it out.
// The user can input guesses. After each guess the program responds
// with a message indicating whether the stored number is smaller or
// greater than the guess.
// The program ends (exits) when the user finds the stored number
//
// Example:
//
// Please enter your guess: 3
// The stored number is greater than 3
// Please enter your guess: 10
// The stored number is smaller than 10
// Please enter your guess: 8
// You have found the stored number 8

let storedNumber = 8; 
guessNumber(storedNumber);

function guessNumber(storedNumber) {
    // Solve logic here
}
```

### Draw Chess Table 💪

```js
// Write a program that reads a number from the standard input and
// then draws a chess table of the specified size
//
// Example:
//
// Please enter the chess table size: 8
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
```