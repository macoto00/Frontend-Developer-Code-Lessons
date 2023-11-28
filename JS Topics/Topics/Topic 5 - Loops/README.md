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