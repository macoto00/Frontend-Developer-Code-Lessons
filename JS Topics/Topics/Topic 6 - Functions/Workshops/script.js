
// ==============
// == Greeting ==
// ==============

function greetUser(userName) {
    return `Hello there, ${userName}!`;
}

// ======================
// == Double the Value ==
// ======================

function doubleNumber(input) {
    return input * 2;
}

// ==========
// == LOTR ==
// ==========

function notAlone(sentence) {
    return sentence.replace("Frodo walks alone.", "Frodo walks with Sam.");
}

// =========
// == Sum ==
// =========

function sum(n) {
    if (n < 0) {
        return "Please provide a non-negative number.";
    }

    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

// ===============
// == Factorial ==
// ===============

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

// =============
// == Anagram ==
// =============

function isAnagram(str1, str2) {
    const cleanString = (str) => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

    const cleanStr1 = cleanString(str1);
    const cleanStr2 = cleanString(str2);

    return cleanStr1 === cleanStr2;
}

// ================
// == Palindrome ==
// ================

function isPalindrome(str) {
    const cleanString = str.toLowerCase().replace(/[^a-z]/g, '');
    const reversedString = cleanString.split('').reverse().join('');
    return cleanString === reversedString;
}

// ========================
// == Palindrome Builder ==
// ========================

function build(str) {
    const cleanString = str.toLowerCase().replace(/[^a-z]/g, '');
    const reversedString = cleanString.split('').reverse().join('');
    return cleanString + reversedString;
}

// =========================
// == Palindrome Searcher ==
// =========================

function isPalindrome(str) {
    const cleanString = str.toLowerCase().replace(/[^a-z]/g, '');
    const reversedString = cleanString.split('').reverse().join('');
    return cleanString === reversedString;
}

function search(input) {
    const palindromes = [];
    for (let i = 0; i < input.length - 2; i++) {
        for (let j = i + 2; j < input.length; j++) {
            const substring = input.substring(i, j + 1);
            if (isPalindrome(substring) && substring.length >= 3) {
                palindromes.push(substring);
            }
        }
    }
    return palindromes;
}

// =====================
// == Using recursion ==
// =====================

function numberAdder(n) {
    // Base case: return 0 for inputs less than 1
    if (n < 1) {
        return 0;
    } else {
        // Recursive call: Add current number (n) with the sum of integers from 1 to (n - 1)
        return n + numberAdder(n - 1);
    }
}

console.log(numberAdder(5)); // Outputs 15 (1 + 2 + 3 + 4 + 5 = 15)
console.log(numberAdder(10)); // Outputs 55 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55)
console.log(numberAdder(0)); // Outputs 0 (Input less than 1, returns 0)
console.log(numberAdder(-5)); // Outputs 0 (Input less than 1, returns 0)

// ===========================
// == Using recursion again ==
// ===========================

function sumDigits(n) {
    // Base case: if the number is a single digit, return that number
    if (n < 10) {
        return n;
    } else {
        // Get the rightmost digit using modulus (%)
        const rightmostDigit = n % 10;

        // Get the remaining digits by dividing the number by 10
        const remainingDigits = Math.floor(n / 10);

        // Recursively sum the remaining digits and add the rightmost digit
        return rightmostDigit + sumDigits(remainingDigits);
    }
}

console.log(sumDigits(123)); // Outputs 6 (1 + 2 + 3 = 6)
console.log(sumDigits(456)); // Outputs 15 (4 + 5 + 6 = 15)
console.log(sumDigits(789)); // Outputs 24 (7 + 8 + 9 = 24)
console.log(sumDigits(5)); // Outputs 5 (Single digit, returns the number itself)
console.log(sumDigits(0)); // Outputs 0 (Single digit, returns the number itself)
