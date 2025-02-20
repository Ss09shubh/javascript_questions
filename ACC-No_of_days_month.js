function finddays(M, isLeapYear = false) {
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (M === 2 && isLeapYear) {
        return 29; // February has 29 days in a leap year
    }

    return month[M - 1];
}

console.log(finddays(2));            // Output: 28
console.log(finddays(2, true));      // Output: 29 (Leap Year)
console.log(finddays(4));            // Output: 30
