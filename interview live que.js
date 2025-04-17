// console.log("A"-1);               //NaN
// console.log("Tilak"+1);           //Tilak1
// console.log('2'+ 2 +'2');           //222
// console.log('2'+ 2 -'2');         //20




// const a = {}
// const b = {
//     name: "Shubham"
// }
// const c = {
//     name: "Nikita"
// }
// const d = {
//     name: "rahul"
// }
// a[b] = {
//     name: "Ritu"
// }
// a[c] = {
//     name: "Nita"
// }
// a[d] = {
//     name: "rohit"
// }
// console.log(a[b]);                    //Rohit
// console.log(a[c]);                    //Rohit
// console.log(a[d]);                    //Rohit
// console.log(a[a]);                    //Rohit
// console.log(b[a]);                    //undefined




// const y = 0;
// const z = false;
// console.log(y==z);                        //true
// console.log(y===z);                       //false





// //Example of NaN
// let a = "A";
// let b = 1;
// console.log(a / b);                            //NaN

// console.log("abc" * 5);                      // NaN
// console.log(undefined + 10);                 // NaN
// console.log(NaN + 1);                        // NaN





// //Example of undefined
// let x;
// console.log(x);                              // undefined

// const person = { name: "John" };
// console.log(person.age);                     // undefined

// function greet() {
//     console.log("Hello");
// }
// let result = greet();
// console.log(result);                         // undefined (because the function does not return anything)

// let arr = [10, 20, 30];
// console.log(arr[5]);                         // undefined (index 5 does not exist)

// function sum(a, b) {
//     console.log(a, b);
// }
// sum(5);                                     // 5 undefined (b is missing)

// let value;
// console.log(typeof value);                  // "undefined"




// console.log(NaN == NaN);                       //false (because the way we type is different)NaN is not equal to anything, including itself.
// console.log(NaN === NaN);                      //false (because the way we type is different)Even though both are NaN (same type), JavaScript treats them as different unique entities, so NaN === NaN is also false.




// let arr = [1, 2, 3, 4]
// let res = arr.map((ele) => {
//     return ele > 2;
// });
// console.log(res);                                //[false,false,true,true]









// //Array method which return new arr
// map()	Transforms each element and returns a new array
// filter()	Returns a new array with elements that pass a condition
// slice()	Returns a portion of the original array
// concat()	Combines multiple arrays into a new array
// flat()	Flattens nested arrays into a new array
// flatMap()	Maps and flattens the array in one step
// reduce()	Can be used to return a new array
// toSorted()	Returns a sorted version of the array (ES2023)
// toReversed()	Returns a reversed version of the array (ES2023)
// toSpliced()	Returns a modified version of the array without changing the original (ES2023)











// //  Mutating vs Non-Mutating Methods
// // Mutating Methods (Modify Original Array)	      Non-Mutating Methods (Return a New Array)
// // push()	                                         map()
// // pop()	                                             filter()
// // shift()	                                         slice()
// // unshift()	                                         concat()
// // splice()	                                         flat()
// // sort()	                                         flatMap()
// // reverse()	                                         reduce()
// // fill()	                                         toSorted() (ES2023)
// // copyWithin()	                                     toReversed() (ES2023)
// // toSpliced() (ES2023)

// //Examples of Mutating Methods
// let arr = [1, 2, 3];

// // push() - adds element
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]

// // pop() - removes last element
// arr.pop();
// console.log(arr); // [1, 2, 3]

// // shift() - removes first element
// arr.shift();
// console.log(arr); // [2, 3]

// // unshift() - adds element at the start
// arr.unshift(0);
// console.log(arr); // [0, 2, 3]

// // splice() - modifies part of the array
// arr.splice(1, 1, 5);
// console.log(arr); // [0, 5, 3]

// // sort() - sorts the array
// arr.sort();
// console.log(arr); // [0, 3, 5]

// // reverse() - reverses the array
// arr.reverse();
// console.log(arr); // [5, 3, 0]

// // fill() - fills array with a value
// arr.fill(7);
// console.log(arr); // [7, 7, 7]

// //Example of Non-Mutating Methods
// let arr = [1, 2, 3];

// // map() - returns a new array with transformed values
// let doubled = arr.map(num => num * 2);
// console.log(doubled); // [2, 4, 6]
// console.log(arr); // [1, 2, 3] (original array remains unchanged)

// // filter() - returns a new array with elements that satisfy a condition
// let evens = arr.filter(num => num % 2 === 0);
// console.log(evens); // [2]
// console.log(arr); // [1, 2, 3] (original array remains unchanged)

// // slice() - extracts part of the array
// let sliced = arr.slice(1, 3);
// console.log(sliced); // [2, 3]
// console.log(arr); // [1, 2, 3]

// // concat() - merges arrays without modifying the original
// let merged = arr.concat([4, 5]);
// console.log(merged); // [1, 2, 3, 4, 5]
// console.log(arr); // [1, 2, 3]

// // flat() - flattens an array
// let nested = [1, [2, 3], [4, 5]];
// let flattened = nested.flat();
// console.log(flattened); // [1, 2, 3, 4, 5]
// console.log(nested); // [1, [2, 3], [4, 5]]

// // sort() vs toSorted() (mutating vs non-mutating)
// let sortedNew = arr.toSorted((a, b) => b - a);
// console.log(sortedNew); // [3, 2, 1]
// console.log(arr); // [1, 2, 3] (original remains unchanged)






//  //Higher-Order Functions in JavaScript
// A higher-order function is a function that either:
// Takes another function as an argument (callback function).
// Returns a function as a result.
// Higher-order functions enhance code reusability and are a key concept in functional programming.




// //lexical Scope
// Lexical scope in JavaScript means that a variable's scope is determined by where it is declared in the code, not where it is called. Inner functions have access to variables of their outer functions due to lexical scoping.

// function outer() {
//     let name = "Shubham";  // name is accessible inside inner()

//     function inner() {
//         console.log(name); // ✅ Can access 'name' from outer()
//     }
//     inner();
// }

// outer();  // Output: "Shubham"








// //Function Currying in JavaScript
// Currying is a technique in JavaScript where a function takes multiple arguments one at a time instead of all at once. It transforms a function that takes multiple arguments into a sequence of nested functions, each taking a single argument.

// function curriedAdd(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }

// console.log(curriedAdd(2)(3)(4));                                      // Output: 9



// // What is Infinite Currying?
// Infinite currying is a technique where a function keeps returning another function until a stopping condition is met (like when an argument is missing). This allows us to call the function infinitely many times.
// function add(a) {
//     return function (b) {
//         if (b !== undefined) {
//             return add(a + b); // Keep returning a function
//         } else {
//             return a; // Stop when no argument is passed
//         }
//     };
// }

// console.log(add(2)(3)(4)(5)()); // Output: 14
// console.log(add(1)(2)(3)(4)(5)(6)()); // Output: 21




// // What is a Polyfill?
// A polyfill is a piece of JavaScript code that provides modern functionality to older browsers that do not support certain built-in features.
//  In simple terms: A polyfill is a custom implementation of a method to ensure compatibility across different browsers.
 
//  Using Built-in map()
// const arr = [1, 2, 3];
// const result = arr.map(num => num * 2);
// console.log(result); // Output: [2, 4, 6]


// using Polyfill for map()
// Array.prototype.myMap = function (callback) {
//     let newArray = [];
//     for (let i = 0; i < this.length; i++) {
//         newArray.push(callback(this[i], i, this));
//     }
//     return newArray;
// };




// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i); // 3 3 3
//   }, 1000);
// }

// ✅ Explanation:
// var is function-scoped, not block-scoped.
// All setTimeout callbacks reference the same i variable.
// When the setTimeout executes after 1 second, the loop has already completed and i has the value 3.
// So all callbacks log 3.





// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i); // 0, 1, 2
//   }, 1000);
// }

// ✅ Explanation:
// let is block-scoped, so a new i is created for each iteration.
// Each callback closes over its own copy of i.
// After 1 second, the console logs 0, 1, and 2 as expected.







// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);  //456

// ✅ Explanation:
// In JavaScript, object keys are always strings.
// a[b] and a[c] both convert b and c to the same string: "[object Object]".
// So a[b] = 123 is overwritten by a[c] = 456.
// console.log(a[b]) is effectively a["[object Object]"] → 456.






// if (undefined === null) {
//     console.log("Yes, undefined and null are loosely equal in JavaScript!");
//   } else {
//     console.log("Nope, undefined and null are not loosely equal.");
//   }

// ✅ Output:
// Nope, undefined and null are not loosely equal.
// ✅ Explanation:
// This uses the strict equality (===) operator.
// undefined === null is false.
// If it had used loose equality (==), then undefined == null would be true.
// So it logs: "Nope, undefined and null are not loosely equal."
  












// //chatgpt suggection snippet topics
// Absolutely! Here's a categorized list of **commonly asked code snippets** and patterns in **Node.js and JavaScript interviews**, ranging from **basic to advanced**. These snippets test everything from core JavaScript concepts to Node.js internals.

// ---

// ### ✅ **Basic JavaScript Snippets (20+)**

// 1. **Variable scoping (`var`, `let`, `const`)**
// 2. **Hoisting behavior**
// 3. **Closures**
// 4. **IIFE (Immediately Invoked Function Expressions)**
// 5. **Difference between `==` and `===`**
// 6. **Truthy & Falsy values**
// 7. **Callback vs Promise vs async/await**
// 8. **setTimeout inside a loop (closure trap)**
// 9. **Array methods: map, filter, reduce**
// 10. **Shallow vs Deep Copy**
// 11. **Object key coercion**
// 12. **Destructuring arrays/objects**
// 13. **Template literals**
// 14. **Rest and Spread operators**
// 15. **Optional chaining and nullish coalescing**
// 16. **Event Loop & microtask vs macrotask**
// 17. **Debounce and Throttle functions**
// 18. **Function currying**
// 19. **Memoization function**
// 20. **Flattening nested arrays**
// 21. **Detecting palindrome, anagram, prime number**
// 22. **Reversing string or array**

// ---

// ### ⚙️ **Intermediate Node.js/JavaScript Snippets (15+)**

// 1. **Custom implementation of `map`, `filter`, or `reduce`**
// 2. **Custom debounce/throttle functions**
// 3. **Promise chaining**
// 4. **Custom `Promise.all`, `Promise.race`, etc.**
// 5. **Handling errors in async/await**
// 6. **Implementing a retry mechanism with async calls**
// 7. **Middleware function in Express.js**
// 8. **JWT token generation and verification**
// 9. **Creating a simple REST API with Express**
// 10. **Custom EventEmitter implementation**
// 11. **Streaming in Node.js**
// 12. **Working with buffers and file system (fs module)**
// 13. **Handling process signals (SIGINT, etc.)**
// 14. **Using `cluster` module to scale a Node.js server**
// 15. **Using environment variables via `dotenv`**

// ---

// ### 🔥 **Advanced Snippets (15+)**

// 1. **Custom implementation of `bind`, `call`, `apply`**
// 2. **Implementing a `deepClone` function**
// 3. **Proxy object usage**
// 4. **Custom implementation of `setTimeout` / scheduler**
// 5. **Rate limiter using in-memory or Redis**
// 6. **Handling backpressure in Node streams**
// 7. **Load balancing with `cluster` and worker threads**
// 8. **Multithreading using `worker_threads`**
// 9. **Design patterns (Singleton, Factory, Observer, etc.)**
// 10. **Pub/Sub implementation**
// 11. **Service layer architecture (Controller, Service, Model separation)**
// 12. **Custom logger with Winston or Bunyan**
// 13. **Custom Error Classes & Error Handling Middleware**
// 14. **Creating a custom `require` function (module loader)**
// 15. **API Caching using Redis or memory**

// ---

// ### 🧠 **Bonus: Coding Patterns & Concepts (Frequently Asked)**

// - Event-driven architecture
// - Middleware chaining
// - Promise-based wrapper for callback functions (`util.promisify`)
// - Asynchronous iteration (`for await...of`)
// - Memory leaks and garbage collection
// - Difference between synchronous and asynchronous code execution

// ---

// ### 📊 Estimated Snippet Count Summary:
// | Level        | Estimated Snippets |
// |--------------|--------------------|
// | Basic        | 20–25              |
// | Intermediate | 15–20              |
// | Advanced     | 15–20              |
// | **Total**    | **50–65**          |

// ---

// If you'd like, I can give you **real code snippets** or **quiz-style questions** to practice for each category. Would you like to go by level, or by topic (e.g., promises, Node.js internals, etc.)?




// ✅ Level 1: Basic JavaScript Snippets (5 to start)
// 🔹 1. Hoisting
// console.log(x); 
// var x = 5;
// Output: undefined
// Explanation: var declarations are hoisted to the top, but the assignment is not.


// 🔹 2. Closure in a Loop
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// Output: 3 3 3
// Explanation: var is function scoped. All setTimeout share the same i.


// 🔹 3. Array Map vs Filter
// const nums = [1, 2, 3, 4];
// const even = nums.filter(n => n % 2 === 0);
// const squared = nums.map(n => n * n);
// console.log(even, squared);
// Output: [2, 4] [1, 4, 9, 16]
// Explanation: filter returns elements; map transforms them.


// 🔹 4. Object as a Key
// const obj = {};
// const a = { id: 1 };
// const b = { id: 2 };

// obj[a] = "hello";
// obj[b] = "world";

// console.log(obj[a]);
// Output: "world"
// Explanation: Both a and b become "[object Object]" as keys.


// 🔹 5. Falsy Values
// const a = "";
// const b = 0;
// const c = null;

// if (!a && !b && !c) console.log("All falsy");
// Output: "All falsy"
// Explanation: "", 0, and null are falsy.


// 🔹 6. Difference Between == and ===
// console.log(0 == false);  // true
// console.log(0 === false); // false
// Explanation:
// == does type coercion → 0 becomes false, so returns true.
// === checks both type and value → number !== boolean.



// 🔹 7. IIFE (Immediately Invoked Function Expression)
// (function greet() {
//   console.log("Hello from IIFE");
// })();
// Output: Hello from IIFE
// Explanation: Function runs immediately when defined using parentheses.


// 🔹 8. Destructuring
// const user = { name: "Alice", age: 30 };
// const { name, age } = user;
// console.log(name, age);
// Output: Alice 30
// Explanation: Object destructuring lets you extract values from objects easily.


// 🔹 9. Spread Operator
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];
// console.log(arr2);
// Output: [1, 2, 3, 4]
// Explanation: ...arr1 spreads the elements of the first array.


// 🔹 10. Rest Parameters
// function sum(...nums) {
//   return nums.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3));
// Output: 6
// Explanation: ...nums collects all arguments into an array.


// 🔹 11. Falsy and Truthy Check
// const value = "0";

// if (value) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }
// Output: Truthy
// Explanation: Non-empty strings are always truthy, even "0".


// 🔹 12. typeof Behavior
// console.log(typeof null); // ?
// Output: "object"
// Explanation: It's a well-known JavaScript bug — typeof null is "object".


// 🔹 13. Function Declaration vs Expression
// greet(); // ?

// function greet() {
//   console.log("Hello!");
// }
// Output: Hello!
// Explanation: Function declarations are hoisted. But if it were an expression (const greet = function() {}), it would throw an error.


// 🔹 14. Array includes()
// const fruits = ["apple", "banana", "mango"];
// console.log(fruits.includes("banana")); // ?
// Output: true
// Explanation: .includes() checks for existence (case-sensitive).


// 🔹 15. Template Literals
// const name = "John";
// const greeting = `Hello, ${name}!`;
// console.log(greeting);
// Output: Hello, John!
// Explanation: Backticks allow for embedded expressions using ${}.


// 🔹 16. String Reversal (Classic Question)
// const str = "hello";
// const reversed = str.split("").reverse().join("");
// console.log(reversed);
// Output: olleh
// Explanation: Convert to array, reverse, join back.


// 🔹 17. Ternary Operator
// const age = 18;
// const canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);
// Output: Yes
// Explanation: Ternary is a compact form of if/else.


// 🔹 18. Short-Circuiting with || and &&
// console.log(null || "default");  // default
// console.log("value" && "next");  // next
// Explanation:
// || returns the first truthy value.
// && returns the last truthy value if all are truthy.


// 🔹 19. Array push() vs concat()
// const a = [1, 2];
// const b = [3, 4];
// const c = a.concat(b);
// a.push(b);

// console.log(a); // [1, 2, [3, 4]]
// console.log(c); // [1, 2, 3, 4]
// Explanation: .push() adds the entire array as a single element. .concat() flattens one level.


// 🔹 20. Basic Type Conversion
// console.log(Number("123"));    // 123
// console.log(String(456));      // "456"
// console.log(Boolean(""));      // false


// 🔹 21. setTimeout with 0 ms
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");
// Output:
// sql
// Copy
// Edit
// Start
// End
// Timeout
// Explanation: Even with 0ms, setTimeout is pushed to the event queue. Synchronous code runs first.


// 🔹 22. NaN Comparison
// console.log(NaN === NaN); // false
// console.log(Number.isNaN(NaN)); // true
// Explanation: NaN is never equal to anything, even itself.


// 🔹 23. Empty Array is Truthy
// if ([]) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }
// Output: Truthy
// Explanation: All objects (including arrays) are truthy in JS.


// 🔹 24. this in Global Function
// function show() {
//   console.log(this);
// }
// show();
// Output:
// In browser: window
// In strict mode or Node.js: undefined
// Explanation: this refers to global object unless in strict mode or arrow function.


// 🔹 25. Arrow Function & this
// const obj = {
//   value: 42,
//   arrowFn: () => {
//     console.log(this.value);
//   }
// };
// obj.arrowFn();
// Output: undefined
// Explanation: Arrow functions don’t have their own this, they inherit from the parent scope.


// 🔹 26. Primitive vs Reference
// let x = 5;
// let y = x;
// x = 10;
// console.log(y); // 5
// let a = [1];
// let b = a;
// a.push(2);
// console.log(b); // [1, 2]
// Explanation: Primitives copy by value; objects/arrays copy by reference.


// 🔹 27. parseInt Quirk
// console.log(parseInt("08")); // 8
// console.log(parseInt("08", 8)); // 0
// Explanation: When radix is 8 (octal), "08" is invalid, so it returns 0.


// 🔹 28. String Coercion with +
// console.log(1 + "2" + 3); // "123"
// console.log(1 + 2 + "3"); // "33"
// Explanation: If any operand is a string, + becomes string concatenation.



// 🔹 29. Default Parameters
// function greet(name = "Guest") {
//   return `Hello, ${name}`;
// }
// console.log(greet()); // Hello, Guest
// Explanation: name gets "Guest" if undefined.


// 🔹 30. Comma Operator
// let x = (1, 2, 3);
// console.log(x); // 3
// Explanation: Comma operator evaluates all expressions and returns the last one.




// ⚙️ Level 2: Intermediate JavaScript Interview Snippets


// 🔸 1. Closure in a Loop (Classic)
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// Output: 3, 3, 3
// Explanation: var is function-scoped, so the same i is shared. It’s 3 by the time the timeout fires.

// ✅ Fix it:
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000); // 0, 1, 2
// }




// 🔸 2. Function Hoisting
// hoisted(); // Works
// function hoisted() {
//   console.log("Function hoisted");
// }

// notHoisted(); // Error
// const notHoisted = function () {
//   console.log("Not hoisted");
// };
// Explanation:
// Function declarations are hoisted.
// Function expressions are not.


// 🔸 3. Object Keys as Strings
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]); // ?
// Output: 456
// Explanation: Both b and c are converted to "[object Object]", so the key gets overwritten.


// 🔸 4. Destructuring with Defaults
// const user = { name: "Sam" };
// const { name, age = 30 } = user;
// console.log(name, age);
// Output: Sam 30
// Explanation: age is undefined, so default 30 is used.


// 🔸 5. Optional Chaining
// const user = {};
// console.log(user.profile?.email); // undefined (no error)
// Explanation: Avoids error when accessing deeply nested properties that may not exist.


// 🔸 6. Map vs Object
// const map = new Map();
// const obj = {};

// map.set("key", 123);
// obj["key"] = 123;

// console.log(map.get("key")); // 123
// console.log(obj["key"]);     // 123
// But:

// const funcKey = () => {};
// map.set(funcKey, "value");
// console.log(map.get(funcKey)); // "value"
// Explanation: Map can use functions, objects as keys. Regular objects convert them to strings.


// 🔸 7. Falsy Values in filter()
// console.log([0, null, undefined, false, "", 1].filter(Boolean));
// Output: [1]
// Explanation: Boolean filters out all falsy values.


// 🔸 8. Promise Chaining
// Promise.resolve(1)
//   .then((res) => {
//     console.log(res);
//     return res + 1;
//   })
//   .then((res) => {
//     console.log(res);
//   });
// Output:
// 1
// 2


// 🔸 9. Async/Await with Error Handling
// async function test() {
//   try {
//     const data = await Promise.reject("Error!");
//   } catch (e) {
//     console.log(e);
//   }
// }
// test();
// Output: Error!
// Explanation: await must be inside try/catch to handle rejected promises.


// 🔸 10. Object Freezing
// const obj = { name: "Leo" };
// Object.freeze(obj);
// obj.name = "Max";
// console.log(obj.name); // Leo
// Explanation: Object.freeze() makes the object immutable.


// 🔹 11. Mutating vs Non-Mutating Array Methods
// const arr = [1, 2, 3];
// const res1 = arr.slice(0, 2);
// const res2 = arr.splice(0, 2);

// console.log(res1); // [1, 2]
// console.log(res2); // [1, 2]
// console.log(arr);  // [3]
// Explanation:
// slice() does not mutate.
// splice() mutates the original array.


// 🔹 12. Function as Property Key
// const key = () => {};
// const obj = {};
// obj[key] = "value";

// console.log(obj[key]);        // "value"
// console.log(Object.keys(obj)); // ["() => {}"]
// Explanation: Functions used as keys are stringified as "function () {}".


// 🔹 13. Rest vs Spread
// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3)); // 6
// const arr = [1, 2, 3];
// const copy = [...arr];
// Explanation:
// ...args in function params = rest
// ...arr in array = spread


// 🔹 14. Double Negation for Boolean Coercion
// console.log(!!"hello"); // true
// console.log(!!0);       // false
// Explanation: Converts any value into an explicit boolean.


// 🔹 15. Promise.all vs Promise.race
// Promise.all([
//   Promise.resolve("A"),
//   Promise.resolve("B")
// ]).then(console.log); // ["A", "B"]

// Promise.race([
//   Promise.resolve("X"),
//   new Promise((resolve) => setTimeout(() => resolve("Y"), 1000))
// ]).then(console.log); // "X"


// 🔹 16. typeof null is... what?!
// console.log(typeof null); // "object"
// Explanation: Historical bug in JavaScript that's never been fixed.


// 🔹 17. == vs ===
// console.log(false == 0);   // true
// console.log(false === 0);  // false
// console.log(null == undefined); // true
// Explanation:
// == is loose equality (performs coercion)
// === is strict equality


// 🔹 18. Variable Shadowing
// let x = 10;

// function test() {
//   let x = 20;
//   console.log(x); // 20
// }

// test();
// console.log(x); // 10
// Explanation: Inner x shadows outer x.


// 🔹 19. IIFE (Immediately Invoked Function Expression)
// (function () {
//   console.log("IIFE ran!");
// })();
// Output: "IIFE ran!"
// Explanation: Executes immediately after it's defined.


// 🔹 20. Falsy but Not False
// console.log([] == false); // true
// console.log([] === false); // false
// Explanation:
// == performs coercion: [] becomes "" → then becomes false.


// 🧠 Level 3: Advanced JavaScript Interview Snippets


// 🔹 1. Event Loop – Microtask vs Macrotask
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");
// Output:

// sql
// Copy
// Edit
// Start
// End
// Promise
// Timeout
// Explanation:

// Promise (microtask) runs before setTimeout (macrotask).


// 🔹 2. Async/Await with setTimeout
// async function wait() {
//   await new Promise((res) => setTimeout(res, 1000));
//   console.log("Waited 1s");
// }
// wait();
// Explanation: await pauses function execution until setTimeout resolves via Promise.


// 🔹 3. Debounce Function
// function debounce(fn, delay) {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => fn(...args), delay);
//   };
// }

// const log = debounce(() => console.log("Triggered!"), 500);
// log();
// log();
// log(); // Only this one logs after 500ms
// Explanation: Prevents function from running until after delay with no new calls.


// 🔹 4. Throttle Function
// function throttle(fn, delay) {
//   let lastCall = 0;
//   return (...args) => {
//     const now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       fn(...args);
//     }
//   };
// }

// const throttled = throttle(() => console.log("Run!"), 1000);
// setInterval(throttled, 200); // Logs once every 1s max


// 🔹 5. this inside Arrow vs Regular Function
// const obj = {
//   name: "Alex",
//   arrow: () => console.log(this.name),
//   regular() {
//     console.log(this.name);
//   },
// };

// obj.arrow();   // undefined
// obj.regular(); // Alex
// Explanation:
// Arrow functions don't bind their own this, it inherits from the parent scope.


// 🔹 6. Prototype Chain
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.sayHi = function () {
//   return `Hi, I’m ${this.name}`;
// };

// const user = new Person("Luna");
// console.log(user.sayHi()); // Hi, I’m Luna


// 🔹 7. Currying
// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(add(1)(2)(3)); // 6
// Explanation: Currying is breaking down a function that takes multiple arguments into nested functions.


// 🔹 8. Memoization
// function memoize(fn) {
//   const cache = {};
//   return function (n) {
//     if (n in cache) return cache[n];
//     cache[n] = fn(n);
//     return cache[n];
//   };
// }

// const factorial = memoize((x) => {
//   if (x === 0) return 1;
//   return x * factorial(x - 1);
// });

// console.log(factorial(5)); // 120
// Explanation: Speeds up recursion by storing previously computed results.


//  9. setTimeout Inside Loop with Closure
// for (var i = 1; i <= 3; i++) {
//   (function (j) {
//     setTimeout(() => console.log(j), j * 1000);
//   })(i);
// }
// Output: 1, 2, 3 each 1s apart
// Explanation: IIFE captures value of i for each loop iteration.


// 🔹 10. Hoisting Trap
// function test() {
//   console.log(a); // undefined
//   var a = 10;
// }
// test();
// Explanation: var a is hoisted to the top, but not the value 10.


// 🔹 1. Infinite Currying
// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }

// console.log(sum(1)(2)(3)(4)()); // 10
// Explanation: Each call returns another function until it's called with no arguments.


// 🔹 2. Object.keys with Non-String Keys
// const obj = {};
// const key = { a: 1 };

// obj[key] = "value";
// console.log(Object.keys(obj)); // ["[object Object]"]
// Explanation: Objects can only use string/symbol keys. So key is converted to "[object Object]".


// 🔹 3. Temporal Dead Zone (TDZ)
// console.log(x); // ReferenceError
// let x = 5;
// Explanation: Variables declared with let/const are in the TDZ from start of block until declaration.


// 🔹 4. Function Declaration vs Expression Hoisting
// greet(); // Works

// function greet() {
//   console.log("Hi");
// }

// sayHi(); // TypeError

// const sayHi = function () {
//   console.log("Hey");
// };
// Explanation:

// Function declarations are hoisted entirely.

// Function expressions hoist only the var/const, not the function itself.


// 🔹 5. Chained Promises
// Promise.resolve(1)
//   .then((x) => x + 1)
//   .then((x) => Promise.resolve(x + 1))
//   .then((x) => console.log(x)); // 3
// Explanation: .then() can return either a value or another Promise.


// 🔹 6. Async Function Return
// async function foo() {
//   return 42;
// }

// foo().then(console.log); // 42
// Explanation: async functions always return a Promise.


// 🔹 7. Array Holes
// const arr = [1, , 3];
// console.log(arr.length);      // 3
// console.log(arr[1]);          // undefined
// console.log(arr.map(x => 9)); // [9, <1 empty item>, 9]
// Explanation: A missing element creates a “hole”, not undefined. Methods like .map() skip holes.


// 🔹 8. Set vs Array
// const arr = [1, 2, 2, 3];
// const set = new Set(arr);

// console.log([...set]); // [1, 2, 3]
// Explanation: Set only stores unique values.


// 🔹 9. Symbol Key Access
// const sym = Symbol("secret");
// const obj = { [sym]: "hidden" };

// console.log(obj[sym]);            // "hidden"
// console.log(Object.keys(obj));    // []
// console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(secret)]
// Explanation: Symbols are not included in normal key enumerations.


// 🔹 10. Memory Leak via Closures
// function outer() {
//   const largeData = new Array(1000000).fill("*");
//   return function inner() {
//     console.log(largeData[0]);
//   };
// }

// const leak = outer(); // largeData stays in memory
// Explanation: inner() closes over largeData, preventing GC from collecting it.


// 🔹 1. Promise vs setTimeout
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// console.log("D");
// Output:
// A
// D
// C
// B
// ✅ Explanation:
// Promise.then() is a microtask → runs before macrotasks (setTimeout)
// Synchronous: A → D
// Microtask: C
// Macrotask: B


// 🔹 2. Multiple Promises + Timers
// setTimeout(() => console.log("setTimeout"), 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// }).then(() => {
//   console.log("Promise 2");
// });

// console.log("Sync");
// Output:
// Promise 1
// Promise 2
// setTimeout
// ✅ Explanation:

// console.log("Sync") → sync

// .then(...) → microtasks

// setTimeout → macrotask


// 🔹 3. Async/Await inside setTimeout
// setTimeout(async () => {
//   console.log("Timeout Start");
//   await Promise.resolve();
//   console.log("Timeout End");
// }, 0);
// Output:
// Timeout Start
// Timeout End
// ✅ Because await only yields after the current macrotask, it doesn't interrupt the execution inside the callback.


// 🔹 4. await is not a "wait"
// async function test() {
//   console.log("1");
//   await console.log("2");
//   console.log("3");
// }
// test();
// console.log("4");
// Output:
// 1
// 2
// 4
// 3
// ✅ Explanation:
// await on a non-promise still pauses via microtask.
// 3 waits for test() to yield.


// 🔹 5. Promise Inside setTimeout
// setTimeout(() => {
//   Promise.resolve().then(() => console.log("Promise in Timeout"));
// }, 0);

// console.log("End");
// Output:
// End
// Promise in Timeout
// ✅ Microtask is still within the timer — it waits for the timer to run before queuing the promise.


// 🔹 6. Nested setTimeouts
// setTimeout(() => {
//   console.log("First");

//   setTimeout(() => {
//     console.log("Second");
//   }, 0);
// }, 0);
// Output:
// First
// Second
// ✅ Second timer goes into the queue after the first one completes.


// 🔹 7. Zero Delay is NOT Immediate
// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// console.log("End");
// Output:

// sql
// Copy
// Edit
// Start
// End
// Timeout
// ✅ Even with 0ms, setTimeout is pushed to the macrotask queue.


// 🔹 8. Queue Order – Microtasks Dominate
// setTimeout(() => console.log("Macrotask 1"), 0);

// Promise.resolve().then(() => console.log("Microtask 1"));

// setTimeout(() => console.log("Macrotask 2"), 0);

// Promise.resolve().then(() => console.log("Microtask 2"));
// Output:
// Microtask 1
// Microtask 2
// Macrotask 1
// Macrotask 2
// ✅ Microtasks always run fully before the next macrotask.


// 🔹 9. MutationObserver (Microtask) vs Promise
// const observer = new MutationObserver(() => console.log("MutationObserver"));

// observer.observe(document.body, { childList: true });

// document.body.appendChild(document.createElement("div"));

// Promise.resolve().then(() => console.log("Promise"));
// Output:
// Promise
// MutationObserver
// ✅ MutationObserver callback is queued after microtasks.


// 🔹 10. Async Trap: Rejected Promises
// Promise.reject("Oops").then(() => {
//   console.log("Then");
// }).catch((err) => {
//   console.log("Caught:", err);
// });

// console.log("After Reject");
// Output:

// makefile
// After Reject
// Caught: Oops
// ✅ Uncaught rejections are async; they don’t block execution.