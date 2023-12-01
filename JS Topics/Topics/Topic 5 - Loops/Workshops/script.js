// I will not cheat

for (let i = 0; i < 100; i++) {
    console.log("I won't cheat on the exam!");
}

// Even 500

for (let i = 0; i <= 500; i += 2) {
    console.log(i);
}


// Multiplication

function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = i * number;
        console.log(`${i} * ${number} = ${result}`);
    }
}

// FizzBuzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Draw triangle

function drawTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

let triangleHeight = 4;
drawTriangle(triangleHeight);

// Draw pyramid

function drawPyramid(height) {
    for (let i = 0; i < height; i++) {
        let pyramidRow = '';

        for (let j = 1; j < height - i; j++) {
            pyramidRow += ' ';
        }

        for (let k = 0; k < 2 * i + 1; k++) {
            pyramidRow += '*';
        }

        console.log(pyramidRow);
    }
}

let pyramidHeight = 4;
drawPyramid(pyramidHeight);

// Draw diamond

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function drawDiamond(height) {
    // Upper part of the diamond
    for (let i = 1; i <= height; i++) {
        console.log(" ".repeat(height - i) + "*".repeat(2 * i - 1));
    }

    // Lower part of the diamond
    for (let i = height - 1; i >= 1; i--) {
        console.log(" ".repeat(height - i) + "*".repeat(2 * i - 1));
    }
}

rl.question('Please enter the diamond height: ', (answer) => {
    const diamondHeight = parseInt(answer);
    if (!isNaN(diamondHeight) && diamondHeight > 0) {
        drawDiamond(diamondHeight);
    } else {
        console.log('Please enter a valid number greater than 0.');
    }
    rl.close();
});


// Guess the number

let storedNumber = 8;
guessNumber(storedNumber);

function guessNumber(storedNumber) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function getUserGuess() {
        readline.question('Please enter your guess: ', (guess) => {
            const parsedGuess = parseInt(guess);

            if (isNaN(parsedGuess)) {
                console.log('Please enter a valid number!');
                getUserGuess();
            } else if (parsedGuess < storedNumber) {
                console.log('The stored number is greater than', parsedGuess);
                getUserGuess();
            } else if (parsedGuess > storedNumber) {
                console.log('The stored number is smaller than', parsedGuess);
                getUserGuess();
            } else {
                console.log('You have found the stored number', storedNumber);
                readline.close();
            }
        });
    }

    getUserGuess();
}

// Draw Chess Table

function drawChessTable(size) {
    for (let i = 1; i <= size; i++) {
        let row = '';
        for (let j = 1; j <= size; j++) {
            if ((i + j) % 2 === 0) {
                row += '%';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter the chess table size: ', (input) => {
    const tableSize = parseInt(input);
    if (isNaN(tableSize)) {
        console.log('Please enter a valid number!');
    } else {
        drawChessTable(tableSize);
    }
    readline.close();
});

