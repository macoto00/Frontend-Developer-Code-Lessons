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

## User input

In JavaScript, you can take user input using various methods. The most common ones for browser-based applications are using the prompt() function or handling input through HTML elements and JavaScript event listeners.

```js
// Using prompt() to take user input
let userInput = prompt('Enter something:');

// Displaying the user input
console.log('You entered:', userInput);
```

## Tasks

It's showtime.

### Simple If-Else

```js
// Write a program that checks if a given number is positive or negative. 
// If the number is greater than zero, print "Positive", otherwise print "Negative".
```

### Else-If Chain

```js
// Create a program that categorizes a given number based on ranges:
// 
// If the number is between 1 and 9, print "Single Digit".
// If it's between 10 and 99, print "Double Digit".
// If it's greater than 99, print "Triple Digit or more".
```

### Nested If-Else

```js
// Develop a program that checks a student's grade based on their score:
// 
// If the score is above 90, print "A".
// If it's between 80 and 89, print "B".
// If it's between 70 and 79, print "C".
// If it's between 60 and 69, print "D".
// If it's below 60, print "F".
```

### Else-If With Logical Operators

```js
// Write a program to determine whether a year is a leap year or not. 
// If the year is divisible by 4 and not divisible by 100 unless it's divisible by 400, print "Leap year", 
// otherwise print "Not a leap year".
```

### Switch Statement

```js
// Create a program that takes a weekday number (1 for Monday, 2 for Tuesday, and so on) and prints the corresponding weekday name. 
// If the number is not between 1 and 7, print "Invalid input".
```

### Even Odd 💪

```js
// Write a program that reads a number from the user input,
// then prints "Odd" if the number is odd, or "Even" if it is even
//
// Please enter a number: 7
// Odd
```

### Switch Statement 💪

```js
// Write a program that reads a number form the standard input,
// If the number is zero or smaller it should print: Not enough
// If the number is one it should print: One
// If the number is two it should print: Two
// If the number is more than two it should print: A lot
//
// Example
//
// Please enter a number: 5
// A lot
```

### Print bigger number 

```js
// Write a program that compares two numbers and prints the bigger one.
// If they are equal, it prints the second one.
//
// Example
//
// Number one: 5
// Number two: 13
// 13
```

### Party Indicator

```js
// Write a program that works with two numbers
// The first number represents the number of girls that comes to a party,
// the second represents the number of boys
//
// If the number of girls and boys are equal and 20 or more people are
// coming to the party, it should print: The party is excellent!
//
// If there are 20 or more people coming to the party but the girl - boy
// ratio is not 1-1, it should print: Quite a cool party!
//
// If there are fewer than 20 people coming,
// it should print: Average party...
//
// If no girls are coming, regardless the count of the people,
// it should print: Sausage party
//
// Girls: 15
// Boys: 25
// Quite a cool party!
```