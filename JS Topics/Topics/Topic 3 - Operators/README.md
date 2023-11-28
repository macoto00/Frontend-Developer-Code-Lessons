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