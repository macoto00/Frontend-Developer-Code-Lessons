// Favorite Number
const favoriteNumber = 7;
console.log(`My favorite number is: ${favoriteNumber}`);

// Swap
let a = 123;
let b = 456;
let temp;
console.log(`Before Swap: a = ${a}, b = ${b}`);
temp = a;
a = b;
b = temp;
console.log(`After Swap: a = ${a}, b = ${b}`);

// Hello Student
const studentName = "Tomas";
console.log(`Hello, ${studentName}, my favorite student`);

// Declare Variables
let numberVar = 10;
let stringVar = "Hello";
let booleanVar = true;

// Concatenation
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log(`Full name: ${fullName}`);

// Variable Reassignment
let variableToReassign = 5;
variableToReassign = "Reassigned value";

// Variable Name Rules
let camelCaseVariable = "camelCase";
let snake_case_variable = "snake_case";
console.log(camelCaseVariable === snake_case_variable); // Check if they work the same way

// Strings, Strings Everywhere
let myString = "Hello, how are you?";
console.log("Original String:", myString);

// Task 1: Convert to Uppercase
console.log("Uppercase:", myString.toUpperCase());

// Task 2: Convert to Lowercase
console.log("Lowercase:", myString.toLowerCase());

// Task 3: Get the length of the string
console.log("Length:", myString.length);

// Task 4: Find the index of a specific character or substring
console.log("Index of 'are':", myString.indexOf('are'));

// Task 5: Replace a substring "how" for "where"
const replacedString = myString.replace("how", "where");
console.log("String after replacement:", replacedString);

// Task 6: Get a substring
const subString = myString.substring(7, 10);
console.log("Substring:", subString);

// Task 7: Split the string into an array
const splitArray = myString.split(" ");
console.log("Split into array:", splitArray);

// Task 8: Trim whitespace from the string
let trimmedString = "   Some spaces here    ";
console.log("Trimmed String:", trimmedString.trim());
