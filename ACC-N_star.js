function printStars(n) {
    console.log('*'.repeat(n)); // Print horizontal stars

    for (let i = 0; i < n; i++) {
        console.log('*'); // Print vertical stars
    }
}

// Example usage
const n = 5; // Change this value to test different inputs
printStars(n);
