
// Greeting

function greetUser(userName) {
    return `Hello there, ${userName}!`;
}

// Double the Value

function doubleNumber(input) {
    return input * 2;
}

// LOTR

function notAlone(sentence) {
    return sentence.replace("Frodo walks alone.", "Frodo walks with Sam.");
}

// Sum

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

// Factorial

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

// Anagram

function isAnagram(str1, str2) {
    const cleanString = (str) => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

    const cleanStr1 = cleanString(str1);
    const cleanStr2 = cleanString(str2);

    return cleanStr1 === cleanStr2;
}

// Palindrome

function isPalindrome(str) {
    const cleanString = str.toLowerCase().replace(/[^a-z]/g, '');
    const reversedString = cleanString.split('').reverse().join('');
    return cleanString === reversedString;
}

// Palindrome Builder

function build(str) {
    const cleanString = str.toLowerCase().replace(/[^a-z]/g, '');
    const reversedString = cleanString.split('').reverse().join('');
    return cleanString + reversedString;
}

// Palindrome Searcher

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
