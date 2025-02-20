function grade(N) {
    if (N > 90) {
        return "Excellent";
    } else if (N > 80) {
        return "Good";
    } else if (N > 70) {
        return "Fair";
    } else if (N > 60) {
        return "Meets Expectations";
    } else {
        return "Below Expectations";
    }
}

// Example Usage:
console.log(grade(95));  // Output: "Excellent"
console.log(grade(75));  // Output: "Fair"
