// Simple If-Else

function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

let numberToCheck = 5;
checkNumber(numberToCheck); // Output: Positive

numberToCheck = -3;
checkNumber(numberToCheck); // Output: Negative

// Else-If Chain

function categorizeNumber(num) {
    if (num >= 1 && num <= 9) {
        console.log("Single Digit");
    } else if (num >= 10 && num <= 99) {
        console.log("Double Digit");
    } else {
        console.log("Triple Digit or more");
    }
}

let numberToCategorize = 5;
categorizeNumber(numberToCategorize); // Output: Single Digit

numberToCategorize = 75;
categorizeNumber(numberToCategorize); // Output: Double Digit

numberToCategorize = 150;
categorizeNumber(numberToCategorize); // Output: Triple Digit or more  

// Nested If-Else

function checkGrade(score) {
    if (score > 90) {
        console.log("A");
    } else if (score >= 80 && score <= 89) {
        console.log("B");
    } else if (score >= 70 && score <= 79) {
        console.log("C");
    } else if (score >= 60 && score <= 69) {
        console.log("D");
    } else {
        console.log("F");
    }
}

let studentScore = 85;
checkGrade(studentScore); // Output: B

studentScore = 45;
checkGrade(studentScore); // Output: F  

// Else-If With Logical Operators

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}

let yearToCheck = 2024;
checkLeapYear(yearToCheck); // Output: Leap year

yearToCheck = 2021;
checkLeapYear(yearToCheck); // Output: Not a leap year

// Switch Statement

function getWeekdayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid input");
    }
}

let weekdayNumber = 3;
getWeekdayName(weekdayNumber); // Output: Wednesday

weekdayNumber = 8;
getWeekdayName(weekdayNumber); // Output: Invalid input

// Even Odd

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter a number: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number)) {
        console.log('Invalid input');
    } else if (number % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }

    readline.close();
});

// Switch Statement

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter a number: ', (input) => {
    const number = parseInt(input);

    if (number <= 0) {
        console.log('Not enough');
    } else if (number === 1) {
        console.log('One');
    } else if (number === 2) {
        console.log('Two');
    } else {
        console.log('A lot');
    }

    readline.close();
});

// Print bigger number 

const number1 = 5;
const number2 = 13;

if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else {
    console.log(number2);
}

// Party Indicator

const girls = 15;
const boys = 25;
const totalPeople = girls + boys;

if (girls === 0) {
    console.log('Sausage party');
} else if (totalPeople >= 20) {
    if (girls === boys) {
        console.log('The party is excellent!');
    } else {
        console.log('Quite a cool party!');
    }
} else {
    console.log('Average party...');
}
