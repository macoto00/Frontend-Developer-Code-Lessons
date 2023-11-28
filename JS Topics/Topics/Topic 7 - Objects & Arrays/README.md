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