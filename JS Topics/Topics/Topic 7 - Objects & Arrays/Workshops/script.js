
// =============================
// == You are a Lizard, Larry ==
// =============================

let person = {
    name: 'Larry',
    age: 25,
    country: 'USA'
};

person.age = 30;
person.country = 'Hogwarts';
person.occupation = 'Lizard';
console.log(person);

// =============
// == Numbers ==
// =============

let numbers = [4, 5, 6, 7];
console.log(numbers[2]);

// ===========================
// == Compare Arrays Length ==
// ===========================

let firstArrayOfNumbers = [1, 2, 3];
let secondArrayOfNumbers = [4, 5];

if (secondArrayOfNumbers.length > firstArrayOfNumbers.length) {
    console.log("secondArrayOfNumbers is longer");
} else {
    console.log("firstArrayOfNumbers is the longer one");
}

// ===============
// == Array Sum ==
// ===============

let numbers = [54, 23, 66, 12];
let sum = numbers[1] + numbers[2];
console.log(sum);

// =============
// == Sum All ==
// =============

let numbers = [3, 4, 5, 6, 7];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// ====================
// == Change Element ==
// ====================

let numbers = [1, 2, 3, 8, 5, 6];
numbers[3] = 4;
console.log(numbers[3]);

// ===============
// == Print All ==
// ===============

let numbers = [4, 5, 6, 7];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// =======================
// == Increment Element ==
// =======================

let numbers = [1, 2, 3, 4, 5];
numbers[2]++;
console.log(numbers[2]);

// ====================
// == Double Numbers ==
// ====================

let numbers = [3, 4, 5, 6, 7];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
}
console.log(numbers);

// ====================
// == Append Element ==
// ====================

let names = [
    "koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr",
    "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul",
    "piranh"
];
for (let i = 0; i < names.length; i++) {
    names[i] += "a";
}
console.log(names);

// =============
// == Reverse ==
// =============

let numbers = [3, 4, 5, 6, 7];
numbers.reverse();
console.log(numbers);

// =============
// == Animals ==
// =============

let animals = [
    ['eagle', 'sparrow', 'hawk'],
    ['lion', 'elephant', 'tiger'],
    ['fish', 'dolphin', 'crocodile']
];
console.log(animals);
console.log(animals[2]);
console.log(animals[0][1]);

// =============================
// == Finding Maximum Element ==
// =============================

let matrix = [
    [3, 7, 2],
    [8, 5, 9],
    [1, 4, 6]
];

let maxElement = matrix[0][0];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > maxElement) {
            maxElement = matrix[i][j];
        }
    }
}

console.log('Maximum element:', maxElement);

// ===========================
// == Sum of Two 3x3 Arrays ==
// ===========================

let array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let array2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

function addArrays(array1, array2) {
    let result = [];

    for (let i = 0; i < array1.length; i++) {
        result[i] = [];
        for (let j = 0; j < array1[i].length; j++) {
            result[i][j] = array1[i][j] + array2[i][j];
        }
    }

    return result;
}

let sumArrays = addArrays(array1, array2);
console.log('Sum of arrays:');
console.log(sumArrays);

// =====================
// == Library Catalog ==
// =====================

let library = {
    books: [
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', available: true },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classics', available: false },
        { title: '1984', author: 'George Orwell', genre: 'Dystopian', available: true }
    ]
};

console.log(library.books[1].title);
library.books[2].available = false;
library.books.push({ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classics', available: true });
console.log(library);