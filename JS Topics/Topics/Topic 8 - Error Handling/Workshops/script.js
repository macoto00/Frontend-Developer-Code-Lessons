
// =========
// == 18+ ==
// =========

function validateAge(age) {
    if (typeof age !== 'number' || age < 18) {
        throw new Error("Invalid age: Age must be a number and greater than or equal to 18.");
    }
    return "Age is valid.";
}

try {
    console.log(validateAge(25)); // Output: Age is valid.
    console.log(validateAge('abc')); // Throws an error
} catch (error) {
    console.log("Error:", error.message);
}

// =========================
// == String to Uppercase ==
// =========================

function convertToUppercase(input) {
    try {
        if (typeof input !== 'string') {
            throw new Error('Input should be a string');
        }
        return input.toUpperCase();
    } catch (error) {
        console.log("Error converting to uppercase:", error.message);
    }
}

console.log(convertToUppercase('hello')); // Output: HELLO
console.log(convertToUppercase(42)); // Output: Error converting to uppercase: Input should be a string

// =============
// == Pokemon ==
// =============

function catchWildPokemon() {
    try {
        console.log("Wild Pokémon appeared!");

        const catchSuccessChance = Math.floor(Math.random() * 100) + 1; 
        console.log("Your chances to catch the pokemon: " + catchSuccessChance)

        if (catchSuccessChance >= 80) {
            console.log("Successfully caught the wild Pokémon!");
            return "Caught Pokémon!";
        } else {
            throw new Error('Chances too low'); 
        }
    } catch (error) {
        console.log(`Error catching Pokémon: ${error.message}`);
        return null; 
    }
}

// Example usage:
console.log(catchWildPokemon()); // Output: Either a successful catch or a handled low chance error


