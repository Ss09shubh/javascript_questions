function willHeightsBeEqual(h1, h2, v1, v2) {
    if (h1 === h2) return true; // If they are already equal

    if (v1 <= v2) return false; // If Gian grows slower or at the same rate, never possible

    return (h1 - h2) % (v2 - v1) === 0; // Check if they meet at some point
}

// Example Inputs
console.log(willHeightsBeEqual(4, 2, 2, 4)); // true
console.log(willHeightsBeEqual(5, 4, 1, 6)); // false
console.log(willHeightsBeEqual(10, 4, 3, 2)); // true
console.log(willHeightsBeEqual(6, 1, 1, 3)); // false



// // // second method


// function willHeightsBeEqual(h1, h2, v1, v2) {
//     if (v1 === v2) {
//         if (h1 === h2) {
//             console.log("true");
//         }
//         else {
//             console.log("false");
//         }

//     } else {
//         if ((h1 - h2) % (v2 - v1) === 0 && (h1 - h2) / (v2 - v1) >= 0) {
//             console.log("true");

//         }
//         else {
//             console.log("false");
//         }

//     }
// }

// Example Inputs
console.log(willHeightsBeEqual(4, 2, 2, 4)); // true
console.log(willHeightsBeEqual(5, 4, 1, 6)); // false
console.log(willHeightsBeEqual(10, 4, 3, 2)); // true
console.log(willHeightsBeEqual(6, 1, 1, 3)); // false

