# JS Topic 7 - Objects & Arrays

Objects in JavaScript are collections of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including objects or functions.

## Object Creation

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

## Accessing Object Properties

```js
console.log(person.name); // Output: 'John'
console.log(person.age); // Output: 30
person.greet(); // Output: 'Hello, my name is John'
```

## Object Manipulation

```js
person.age = 31; // Modifying a property
person.job = 'Developer'; // Adding a new property
delete person.isStudent; // Deleting a property
```

## Arrays in JavaScript

Arrays are ordered collections of elements. They can store multiple values of different data types and are indexed starting from zero.

## Array Creation

```js
let numbers = [1, 2, 3, 4, 5];
let names = ['Alice', 'Bob', 'Charlie'];
```

## Accessing Array Elements

```js
console.log(numbers[0]); // Output: 1
console.log(names[2]); // Output: 'Charlie'
```

## Array Manipulation

```js
numbers.push(6); // Adding an element at the end
names.pop(); // Removing the last element
names.unshift('Eve'); // Adding an element at the beginning
numbers.shift(); // Removing the first element
numbers.splice(2, 1, 10); // Removing and adding elements at a specific position
```

## Array Iteration Methods

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

## Multidimensional Arrays

Arrays within arrays, creating a grid or table-like structure.

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]); // Output: 6
```

## Tasks

It's showtime.

### You are a Lizard, Larry

```js
let person = {
  name: 'Larry',
  age: 25,
  country: 'USA'
};

// Modify the age value here

// Add a new property for occupation here
// like occupation: Lizard

// Output the modified person object
console.log(person);

// Expected output:

{
  name: 'Larry',
  age: 30,
  country: 'Hogwarts',
  occupation: 'Lizard'
}
```

### Numbers 

```js
// Create an array variable named `numbers`
// with the following content: `[4, 5, 6, 7]`
// Print the third element of `numbers`
```

### Compare Arrays Length 

```js
// Create an array variable named `firstArrayOfNumbers`
// with the following content: `[1, 2, 3]`
// Create an array variable named `secondArrayOfNumbers`
// with the following content: `[4, 5]`
// Print "secondArrayOfNumbers is longer" if `secondArrayOfNumbers`
// has more elements than `firstArrayOfNumbers`
// Otherwise print: "firstArrayOfNumbers is the longer one"
```

### Array Sum 

```js
// Create an array variable named `numbers`
// with the following content: `[54, 23, 66, 12]`
// Print the sum of the second and the third element
```

### Sum All 

```js
// Create an array variable named `numbers`
// with the following content: `[3, 4, 5, 6, 7]`
// Print the sum of the elements of `numbers`
```

### Change Element 

```js
// Create an array variable named `numbers`
// with the following content: `[1, 2, 3, 8, 5, 6]`
// Change the value of the fourth element (8) to 4
// Print the fourth element
```

### Print All 

```js
// Create an array variable named `numbers`
// with the following content: `[4, 5, 6, 7]`
// Print all the elements of `numbers`
// one element per line
```

### Increment Element 

```js
// Create an array variable named `numbers`
// with the following content: `[1, 2, 3, 4, 5]`
// Increment the third element
// Print the third element
```

### Double Numbers 

```js
// Create an array variable named `numbers`
// with the following content: `[3, 4, 5, 6, 7]`
// Double all the values in the array and print the modified
// array to the console as:
// [6, 8, 10, 12, 14]
```

### Append Element 

```js
// Create an array variable named `names`
// with the following content:
// `["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr",
//   "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul",
//   "piranh"]`
/// Add an `"a"` at the end of all elements (use a loop!)
// Print the 'fixed' array to the console:
// [koala, panda, zebra, anaconda, boa, ..., puma, tarantula, piranha]
```

### Reverse 

```js
// Create an array variable named `numbers`
// with the following content: `[3, 4, 5, 6, 7]`
// Reverse the order of the elements of `numbers` programmatically
// Print the elements of the reversed `numbers`:
// [7, 6, 5, 4, 3]
```

### Animals 💪

```js
// Create a multidimensional array to categorize animals by their modes of movement
// Each line represents animals with the same mode of movement: flying, walking, swimming
// Example usage: animals[0] represents flying animals, animals[1] represents walking animals, 
// animals[2] represents swimming animals
// Print the array to see the categorization
// Print only swimming animals
// Access the second animal in the array representing flying animals and print it
```

### Finding Maximum Element 💪💪

```js
// Create a 2D array called `matrix` with dimensions 3x3 and populate it with integer values.
// Write a program to find and print the maximum element in the 2D array.

// Example:

// matrix = [[3, 7, 2],
//           [8, 5, 9],
//           [1, 4, 6]]
// Maximum element: 9
```

### Sum of Two 3x3 Arrays 💪💪

```js
// Create two 2D arrays, `array1` and `array2`, both of dimensions 3x3 (each).
// Populate them with integer values.
// Implement a program to compute the sum of corresponding elements
// from both arrays and store the result in another 3x3 array.

// Example:

// array1 = [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]]

// array2 = [[9, 8, 7],
//           [6, 5, 4],
//           [3, 2, 1]]

// Sum of arrays:

// [[10, 10, 10],
//  [10, 10, 10],
//  [10, 10, 10]]
```

### Library Catalog 💪

```js
let library = {
  books: [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', available: true },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classics', available: false },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian', available: true }
  ]
};

// Access and log the title of the second book in the library

// Change the availability of the third book to false

// Add a new book to the library catalog

// Log the updated library object
console.log(library);
```

Expected Output:

- Accessing the title of the second book: 'To Kill a Mockingbird'
- Changing the availability of the third book to false
- Adding a new book to the library catalog
- The output should display the updated library object with the new book added and the availability of the third book changed.
