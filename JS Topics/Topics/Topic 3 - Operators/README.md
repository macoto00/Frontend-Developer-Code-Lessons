# JS Topic 3 - Operators

JavaScript operators are symbols or keywords used to perform operations on operands (values or variables). These operations can be arithmetic, assignment, comparison, logical, bitwise, and more. 

## Arithmetic Operators

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

## Assignment Operators

Assignment =: Assigns a value to a variable.
Addition Assignment +=: Adds the right operand to the left operand and assigns the result to the left operand.
Subtraction Assignment -=: Subtracts the right operand from the left operand and assigns the result to the left operand.
...and so on (*=, /=, %=) for other arithmetic operations.

```js
let x = 10;
x += 5; // Equivalent to: x = x + 5;
```

## Comparison Operators

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

## Logical Operators

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

## Logical Operators Truth table

**Logical AND (&&) Operator:**

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

**Logical OR (||) Operator:**

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

**Logical NOT (!) Operator:**

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

## Tasks

It's showtime.

### Variable Mutation 

```js
let a = 3;
// increase the value of variable "a" by 10

console.log(a);

let b = 100;
// decrease the value of b by 7

console.log(b);

let c = 44;
// double the value of c

console.log(c);

let d = 125;
// divide the value of d by 5

console.log(d);

let e = 8;
// cube the value of e

console.log(e);

let f1 = 123;
let f2 = 345;
// determine if f1 is greater than f2 (print as a boolean)
console.log();

let g1 = 350;
let g2 = 200;
// determine if double the value of g2 is greater than g1 (print as a boolean)
console.log();

let h = 135798745;
// determine if h has 11 as a divisor (print as a boolean)
console.log();

let i1 = 10;
let i2 = 3;
// determine if i1 is greater than i2 squared and smaller than i2 cubed (print as a boolean)
console.log();

let j = 1521;
// determine if j is divisible by 3 or 5 (print as a boolean)
console.log();
```

### Calculate BMI

```js
// Print the Body mass index (BMI) based on your values.

// Example output:

// BMI: 22.1
```

### Convertor

```js
// Write a program that is given a number in Km and converts it into miles.

// Example output:

// The distance in km: 2.88
// The distance in miles: 1.8
```

### Chicken Legs

```js
// Write a program that takes two numbers.
// The first represents the number of chickens the farmer has.
// The second represents the number of pigs owned by the farmer.
// Print how many legs all the animals have in total.

// Example output:

// The number of chickens: 4
// The number of pigs: 2
// The number of legs: 16
```

### Sum and Average

```js
// Write a program that stores numbers 1, 3, 5, 6 and 7
// Sum and average the numbers

// Example output:

// Sum: 22, Average: 4.4
```

### Cuboid 

```js
// Write a program that stores 3 sides of a cuboid as variables (doubles)
// The program should write the surface area and volume of the cuboid.
//
// Set the 3 sides to 10.4, 13.5, 8.2 and your program should
// produce the following output:
//
// Surface Area: 672.76
// Volume: 1151.28
```

### How many seconds? 

```js
let currentHours = 14;
let currentMinutes = 34;
let currentSeconds = 42;

// Write a program that prints the remaining seconds from a
// day if the current time is represented by the variables above
```

### Greater and not Equal

```js
let num1 = 10;
let num2 = 5;

// Check if num1 is greater than num2 and not equal to num2
```

### Less than or or not equal

```js
let num1 = 15;
let num2 = 20;

// Check if num1 is less than or equal to num2 or num2 is not equal to num1
```

### Three numbers 💪

```js
let a = 10;
let b = 20;
let c = 30;

// Check if a is less than b and c, and a is not equal to b or c
```

### Three numbers again 💪

```js
let m = 20;
let n = 30;
let o = 40;

// Check if m is less than n or o, and m is greater than n and o
```