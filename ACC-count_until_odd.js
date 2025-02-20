function countUntilOdd(numbers) {
    let count = 0;

    for (let num of numbers) {
        count++;
        if (num % 2 !== 0) { // If the number is odd, stop and return count
            return count;
        }
    }
    return count; // Just in case (though an odd number is always expected)
}

// Example usage:
const input = [4, 8, 6, 10, 12, 13];
console.log(countUntilOdd(input)); // Output: 6

const input2 = [8, 13212, 332, 134, 4418, 909];
console.log(countUntilOdd(input2)); // Output: 6
