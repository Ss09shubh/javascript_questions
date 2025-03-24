// Object-Oriented Programming (OOP) in JavaScript

// OOP in JavaScript follows four main principles: Encapsulation, Abstraction, Inheritance, and Polymorphism. Let's explore each concept with examples.

// 1. Encapsulation
// Encapsulation means bundling data (properties) and methods (functions) inside an object. It also restricts direct access to some of the object's details.
// Example: Encapsulation in JavaScript

class BankAccount {
  #balance; // Private variable (Encapsulation)

  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } else {
      console.log('Insufficient funds');
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount('John Doe', 500);
myAccount.deposit(200);
myAccount.withdraw(100);
console.log(`Balance: $${myAccount.getBalance()}`);
// 👉 Private properties (#balance) prevent direct modification, ensuring data security.





// 2. Abstraction
// Abstraction means hiding complex implementation details and exposing only necessary functionality.
// Example: Abstraction in JavaScript

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.engineStarted = false;
  }

  startEngine() {
    this.#igniteEngine();
    console.log(`${this.make} ${this.model} engine started.`);
  }

  #igniteEngine() {  // Private method (Abstraction)
    this.engineStarted = true;
    console.log('Engine ignition process complete.');
  }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.startEngine();  // Users don't need to know about #igniteEngine()
// 👉 The user interacts with startEngine() but doesn’t see how #igniteEngine() works.




// 3. Inheritance
// Inheritance allows one class to inherit properties and methods from another, avoiding code duplication.
// Example: Inheritance in JavaScript

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Some generic sound...');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Call parent class constructor
    this.breed = breed;
  }

  makeSound() {
    console.log('Woof! Woof!');
  }
}

const myDog1 = new Dog('Buddy', 'Golden Retriever');
myDog.makeSound(); // Output: Woof! Woof!
console.log(myDog1.name); // Output: Buddy
// 👉 Dog inherits from Animal, and we override the makeSound method.




// 4. Polymorphism
// Polymorphism allows methods in different classes to have the same name but behave differently.
// Example: Polymorphism in JavaScript

class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const myCircle = new Circle(5);
const myRectangle = new Rectangle(4, 6);

console.log(myCircle.getArea()); // Output: 78.54
console.log(myRectangle.getArea()); // Output: 24
// 👉 Both Circle and Rectangle override getArea() but implement it differently.


// Compile-Time Polymorphism vs. Run-Time Polymorphism in JavaScript=>

// Polymorphism is the ability of a function or method to take multiple forms. In JavaScript, we primarily see Run-Time Polymorphism because JavaScript is a dynamically typed language and does not support function overloading in the traditional sense.

// 1. Compile-Time Polymorphism (Method Overloading)
// Definition
// Compile-time polymorphism occurs when multiple functions with the same name exist, but they have different signatures (different parameters). The correct function is determined at compile time.

// Does JavaScript Support Method Overloading?
// Unlike languages such as Java or C++, JavaScript does not support traditional function overloading. However, we can simulate it using default parameters, conditional checks, or the arguments object.

// Example: Simulated Method Overloading

class MathOperations {
  add(a, b, c) {
    if (typeof c !== "undefined") {
      return a + b + c; // If 3 parameters are provided
    }
    return a + b; // Default case with 2 parameters
  }
}

const math = new MathOperations();
console.log(math.add(2, 3));      // Output: 5
console.log(math.add(2, 3, 4));   // Output: 9
// 👉 In this example, the function determines which logic to execute based on the number of parameters provided.



// 2. Run-Time Polymorphism (Method Overriding)
// Definition
// Run-time polymorphism occurs when a subclass provides a specific implementation of a method already defined in its parent class. The correct method is determined at runtime.
// Example: Method Overriding

class Animal {
  speak() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow! Meow!");
  }
}

const myDog = new Dog();
const myCat = new Cat();

myDog.speak(); // Output: Woof! Woof!
myCat.speak(); // Output: Meow! Meow!
// 👉 The overridden method in the subclass (Dog and Cat) replaces the parent method at runtime.

