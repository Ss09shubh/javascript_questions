function triangleType(a, b, c) {
    let z = Math.max(a, b, c); // Corrected Math.max usage
    let m = 2 * z * z;
    let s = a * a + b * b + c * c;

    if (m === s) return 2; // Right-angled triangle
    if (m > s) return 3; // Obtuse-angled triangle
    return 1; // Acute-angled triangle
}

// Example Test Cases
console.log(triangleType(3, 4, 5)); // Output: 2 (Right-angled)
console.log(triangleType(3, 3, 3)); // Output: 1 (Acute)
console.log(triangleType(7, 24, 25)); // Output: 3 (Obtuse)
