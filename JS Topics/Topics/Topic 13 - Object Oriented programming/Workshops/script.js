// ============
// == Animal ==
// ============

class Animal {
    constructor() {
        this.hunger = 50;
        this.thirst = 50;
    }

    eat() {
        this.hunger = Math.max(0, this.hunger - 1);
    }

    drink() {
        this.thirst = Math.max(0, this.thirst - 1);
    }

    play() {
        this.hunger++;
        this.thirst++;
    }
}

const myAnimal = new Animal();
console.log(myAnimal.hunger); // Outputs 50
console.log(myAnimal.thirst); // Outputs 50

myAnimal.eat();
console.log(myAnimal.hunger); // Outputs 49 after eating

myAnimal.drink();
console.log(myAnimal.thirst); // Outputs 49 after drinking

myAnimal.play();
console.log(myAnimal.hunger); // Outputs 50 after playing
console.log(myAnimal.thirst); // Outputs 50 after playing


// =========================
// == Teacher and Student ==
// =========================

class Student {
    learn() {
        console.log('The student is actually learning');
    }

    question(teacher) {
        teacher.giveAnswer();
    }
}

class Teacher {
    teach(student) {
        student.learn();
    }

    giveAnswer() {
        console.log('The teacher is answering a question');
    }
}

// Instantiate Student and Teacher objects
let student = new Student();
let teacher = new Teacher();

// Call student's question method and teacher's teach method
student.question(teacher); // Outputs: The teacher is answering a question
teacher.teach(student); // Outputs: The student is actually learning

// ==========
// == Farm ==
// ==========

class Animal {
    constructor() {
        this.hunger = 50;
        // other properties/methods of Animal class can be added here if needed
    }

    eat() {
        this.hunger = Math.max(0, this.hunger - 1);
    }
}

class Farm {
    constructor(limit) {
        this.limit = limit;
        this.listOfAnimals = [];
    }

    breed() {
        if (this.listOfAnimals.length < this.limit) {
            const newAnimal = new Animal();
            this.listOfAnimals.push(newAnimal);
            console.log('New animal bred!');
        } else {
            console.log('Farm is at maximum capacity, cannot breed new animals.');
        }
    }

    sell() {
        if (this.listOfAnimals.length > 0) {
            let leastHungryIndex = 0;
            let leastHungry = this.listOfAnimals[0].hunger;

            // Find the least hungry animal
            for (let i = 1; i < this.listOfAnimals.length; i++) {
                if (this.listOfAnimals[i].hunger < leastHungry) {
                    leastHungry = this.listOfAnimals[i].hunger;
                    leastHungryIndex = i;
                }
            }

            // Remove the least hungry animal
            this.listOfAnimals.splice(leastHungryIndex, 1);
            console.log('Sold the least hungry animal.');
        } else {
            console.log('No animals to sell.');
        }
    }
}

// Example usage:
let myFarm = new Farm(5); // Create a farm with a limit of 5 animals

myFarm.breed(); // Breed a new animal
myFarm.breed(); // Breed another animal

// Simulate animals getting hungry
myFarm.listOfAnimals.forEach(animal => animal.eat());

myFarm.sell(); // Sell the least hungry animal

