# JS Topic - 1 - Foundations

JavaScript is a versatile scripting language used primarily for web development, allowing dynamic content manipulation, event handling, and more.

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

javascript
Copy code
let x = 10;
console.log(x)
// SyntaxError: missing ) after argument list
2. Runtime Errors:
Occurs during the execution of the program due to invalid operations or unexpected conditions.

javascript
Copy code
let y = 5;
y.toUpperCase();
// TypeError: y.toUpperCase is not a function
3. Logical Errors:
Code that runs but produces incorrect results due to flawed logic.

javascript
Copy code
function divide(a, b) {
  return a / b;
}

console.log(divide(10, 0));
// Output: Infinity (No error, but logically incorrect)
Handling Errors in JavaScript:
1. Try...Catch Statement:
Used to handle exceptions and gracefully manage errors.

javascript
Copy code
try {
  // Code that might throw an error
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}
2. Throw Statement:
Manually throws an error when a specific condition is met.

javascript
Copy code
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
3. Error Object:
JavaScript provides an Error object that contains information about an error.

error.name: Contains the name of the error (e.g., SyntaxError, TypeError).
error.message: Provides a human-readable description of the error.
error.stack: Displays the stack trace of the error.

## ECMA Script Standards

```js
// ES6 Arrow Function
const add = (a, b) => a + b;

// Template Literal
const name = "Alice";
console.log(`Hello, ${name}!`);

// Destructuring
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log(`${firstName} ${lastName}`);

```