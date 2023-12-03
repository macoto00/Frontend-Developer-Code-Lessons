# JS Topic 13 - Object Oriented Programming

Object-oriented programming (OOP) in JavaScript revolves around the concept of using objects to model real-world entities or abstract concepts. In JavaScript, objects are fundamental, and they allow you to encapsulate data (properties) and behavior (methods) into a single entity.

Here are the core principles of OOP in JavaScript:

## Objects

Everything in JavaScript is an object or can be represented as an object. Objects are collections of key-value pairs (properties) and can contain functions as values (methods).

```js
// Creating an object
let car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022,
  start: function() {
    return 'Engine started!';
  }
};
```
## Encapsulation

Encapsulation refers to bundling data (properties) and methods that operate on the data within a single unit (an object). This helps in hiding the internal state of an object and exposing only necessary functionalities.

```js 
class Person {
  constructor(name, age) {
    // Encapsulated properties
    let _name = name; // Private property
    let _age = age; // Private property

    // Getter methods to access encapsulated properties
    this.getName = function() {
      return _name;
    };

    this.getAge = function() {
      return _age;
    };

    // Setter methods to modify encapsulated properties
    this.setName = function(newName) {
      _name = newName;
    };

    this.setAge = function(newAge) {
      if (newAge > 0) {
        _age = newAge;
      } else {
        console.log('Age must be a positive number.');
      }
    };
  }

  // Method to display information
  displayInfo() {
    return `Name: ${this.getName()}, Age: ${this.getAge()}`;
  }
}

// Create a Person object
let person = new Person('Alice', 30);

console.log(person.displayInfo()); // Outputs: Name: Alice, Age: 30

// Accessing and modifying encapsulated properties using methods
person.setName('Bob');
person.setAge(-25); // This will not change the age due to the validation in setAge method

console.log(person.displayInfo()); // Outputs: Name: Bob, Age: 30 (Age remains unchanged)
```

In many programming languages, including JavaScript, using an underscore (_) as a prefix for a variable name is a convention to indicate that the variable is meant to be private or should be treated as a private member within a class or module.

In the context of the encapsulation example provided earlier, the use of _name and _age with the underscore prefix suggests that these variables are intended to be private properties of the Person class. By marking them as such, it's a visual cue for other developers (or even yourself) that these properties are not intended to be accessed or modified directly outside the class.

## Abstraction

Abstraction involves simplifying complex reality by modeling classes appropriate to the problem and working at the most relevant level of inheritance.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return 'Some generic sound!';
  }
}

class Dog extends Animal {
  makeSound() {
    return 'Woof!';
  }
}

let myDog = new Dog('Buddy');
console.log(myDog.makeSound()); // Outputs 'Woof!'
```

## Inheritance

JavaScript supports prototype-based inheritance where objects can inherit properties and methods from other objects. Classes can extend other classes to create a hierarchy of objects.

```js 
// Parent class
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  displayInfo() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
}

// Child class inheriting from Vehicle
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model); // Calling the parent class constructor
    this.year = year;
  }

  displayInfo() {
    return `${super.displayInfo()}, Year: ${this.year}`;
  }
}

let myCar = new Car('Toyota', 'Corolla', 2023);
console.log(myCar.displayInfo()); // Outputs: Make: Toyota, Model: Corolla, Year: 2023
```

## Polymorphism

Polymorphism allows objects of different types to be treated as objects of a common superclass. It allows methods to be called on different objects, but the methods will behave differently based on the object's type.

```js 
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method to make a sound (to be overridden by subclasses)
  makeSound() {
    return 'Some generic sound!';
  }
}

// Subclass Dog inheriting from Animal
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  // Override makeSound method for Dog
  makeSound() {
    return 'Woof!';
  }
}

// Subclass Cat inheriting from Animal
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  // Override makeSound method for Cat
  makeSound() {
    return 'Meow!';
  }
}

// Create instances of Dog and Cat
let dog = new Dog('Buddy');
let cat = new Cat('Whiskers');

// Call makeSound method on different animal instances
console.log(dog.makeSound()); // Outputs: Woof!
console.log(cat.makeSound()); // Outputs: Meow!
```

Abstraction and polymorphism are two fundamental concepts in object-oriented programming, and while they might seem related, they serve different purposes.

**Abstraction**

Abstraction involves simplifying complex reality by modeling classes appropriate to the problem and working at the most relevant level of inheritance. It's about hiding the complex implementation details and showing only the necessary features of an object.

In the context of abstraction:

- **Hides Complexity**: Abstraction hides the implementation details and focuses on the essential features relevant to the interaction with the object.
- **Focuses on What**: It concentrates on 'what' an object does rather than 'how' it does it.
- **Can Use Polymorphism**: Abstraction often utilizes polymorphism to define a common interface (through inheritance or interfaces) without specifying the exact implementation details.

**Polymorphism**

Polymorphism allows objects of different types to be treated as objects of a common superclass. It enables a single interface (method or property) to be used for entities of different types and classes.

In the context of polymorphism:

- **Same Interface, Different Behaviors**: Polymorphism allows objects to be treated as instances of a shared class or interface but exhibit different behaviors based on their specific implementations.
- **Allows Flexibility**: It provides a way for a single method or property to have different forms and behaviors in different subclasses or implementations.
- **Facilitates Abstraction**: Polymorphism often facilitates abstraction by allowing for a consistent interface while permitting varied implementations.

**Difference**

- Focus: Abstraction concentrates on hiding details and providing a simplified view, focusing on 'what' an object does. Polymorphism focuses on allowing objects of different types to be treated as instances of a shared superclass, exhibiting different behaviors.
- Intent: Abstraction is about simplifying the complexity and managing complexity by hiding details. Polymorphism is about providing a consistent interface to different implementations.
- Relationship: Abstraction often utilizes polymorphism to define a common interface for different objects or classes.
- In essence, abstraction is more about hiding details and focusing on essential features, while polymorphism deals with providing flexibility in behavior while using a unified interface. They often work hand in hand, but their primary focus and intent differ.

### Summary

In JavaScript, you can achieve OOP using plain objects, constructor functions, and ES6 classes. ES6 introduced the class syntax, providing a clearer and more structured way to define classes and work with inheritance.

The key to leveraging OOP principles in JavaScript is understanding how to create and use objects, inheritance, and how objects interact with each other through methods and properties.

## Tasks

It's showtime!

### Animal 

- Create an `Animal` class
- Every `animal` has a `hunger` value, which is a whole number
- Every `animal` has a `thirst` value, which is a whole number
- When creating a new `animal` instance these values must be set to the default 50 value
- Every `animal` can `eat()` which decreases its `hunger` by one
- Every `animal` can `drink()` which decreases its `thirst` by one
- Every `animal` can `play()` which increases both its `hunger` and `thirst` by one

### Teacher and Student 

- Create `Student` and `Teacher` classes

- **`Student`**
- `learn()` -> prints: `the student is actually learning`
- `question(teacher)` -> calls the teacher's `giveAnswer()` method

- **`Teacher`**
- `teach(student)` -> calls the student's `learn()` method
- `giveAnswer()` -> prints: `the teacher is answering a question`

- Instantiate a `Student` and `Teacher` object
- Call the student's `question()` method and the teacher's `teach()` method

### Farm 

- Reuse your `Animal` class
- Create a `Farm` class
- it has a list of Animals `listOfAnimals`
- it has a `limit` that defines how many animals can be kept in the Farm and can be set when the `Farm` is created
- it has two methods:
- `breed()` -> creates a new animal if there's place for it
- `sell()` -> removes the least hungry animal

### Pirates 💪💪

[Here is your task: Pirates](https://github.com/macoto00/Frontend-Developer-Code-Lessons/blob/main/JS%20Topics/Topics/Topic%2013%20-%20Object%20Oriented%20programming/Workshops/Pirates.md)

