const arr = [1, [2, [3, [4]], 5]];

const flattenedArr = arr.flat(Infinity); // Flatten to any depth

console.log(flattenedArr); // Output: [1, 2, 3, 4, 5]
