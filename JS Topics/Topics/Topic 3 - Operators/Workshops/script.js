// Variable Mutation
let a = 3;
a += 10;
console.log(a);

let b = 100;
b -= 7;
console.log(b);

let c = 44;
c *= 2;
console.log(c);

let d = 125;
d /= 5;
console.log(d);

let e = 8;
e **= 3;
console.log(e);

let f1 = 123;
let f2 = 345;
console.log(f1 > f2);

let g1 = 350;
let g2 = 200;
console.log((g2 * 2) > g1);

let h = 135798745;
console.log(h % 11 === 0);

let i1 = 10;
let i2 = 3;
console.log(i1 > i2 ** 2 && i1 < i2 ** 3);

let j = 1521;
console.log(j % 3 === 0 || j % 5 === 0);

// Calculate BMI
const heightInMeters = 1.8;
const weightInKg = 68;
const bmi = weightInKg / (heightInMeters ** 2);
console.log(`BMI: ${bmi.toFixed(1)}`);

// Converter
const km = 2.88;
const miles = km * 0.621371;
console.log(`The distance in km: ${km}`);
console.log(`The distance in miles: ${miles}`);

// Chicken Legs
const numberOfChickens = 4;
const numberOfPigs = 2;
const totalLegs = (numberOfChickens * 2) + (numberOfPigs * 4);
console.log(`The number of chickens: ${numberOfChickens}`);
console.log(`The number of pigs: ${numberOfPigs}`);
console.log(`The number of legs: ${totalLegs}`);

// Sum and Average
let num1 = 1;
let num2 = 3;
let num3 = 5;
let num4 = 6;
let num5 = 7;
let sum = num1 + num2 + num3 + num4 + num5;
let average = sum / 5;
console.log(`Sum: ${sum}, Average: ${average}`);

// Cuboid
const side1 = 10.4;
const side2 = 13.5;
const side3 = 8.2;
const surfaceArea = 2 * ((side1 * side2) + (side2 * side3) + (side3 * side1));
const volume = side1 * side2 * side3;
console.log(`Surface Area: ${surfaceArea.toFixed(2)}`);
console.log(`Volume: ${volume.toFixed(2)}`);

// How many seconds?
const secondsInADay = 24 * 60 * 60;
const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;
const remainingSeconds = secondsInADay - ((currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds);
console.log(`Remaining seconds in a day: ${remainingSeconds}`);

// Greater and not Equal
let num1 = 10;
let num2 = 5;
console.log(num1 > num2 && num1 !== num2);

// Less than or not equal
let num3 = 15;
let num4 = 20;
console.log(num3 <= num4 || num4 !== num3);

// Three numbers 💪
let x = 10;
let y = 20;
let z = 30;
console.log(x < y && x < z && x !== y && x !== z);

// Three numbers again 💪
let m = 20;
let n = 30;
let o = 40;
console.log((m < n || m < o) && (m > n && m > o));
