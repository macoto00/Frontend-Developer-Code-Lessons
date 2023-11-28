# JS Topic 4 - Conditionals

Conditionals in JavaScript are structures that allow you to execute different blocks of code based on certain conditions. They help control the flow of a program by evaluating an expression and deciding which code to execute depending on whether the expression is true or false.

Types of Conditionals in JavaScript:

## If Statement

The if statement executes a block of code if a specified condition is true.

```js
let num = 10;

if (num > 0) {
  console.log("Number is positive");
}
```

## If...else Statement

The if...else statement executes one block of code if the condition is true and another block if the condition is false.

```js
let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}
```

## Nested if...else Statement

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

## Else if Statement

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

## Switch Statement

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