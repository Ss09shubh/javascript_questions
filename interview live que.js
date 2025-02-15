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





// //Example of indefined
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






