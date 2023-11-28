# JS Topic 2 - Variables & Data Types

## Variables

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

## Data Types

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