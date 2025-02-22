function firstNonRepeatingChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return "No non-repeating character";
}

console.log(firstNonRepeatingChar("swiss")); // Output: 'w'



function allNonRepeatingChars(str) {
    let result = [];

    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            result.push(char);  // Add non-repeating character to the result array
        }
    }

    return result.length > 0 ? result : "No non-repeating characters";
}

console.log(allNonRepeatingChars("swiss")); // Output: ['w', 'i']
console.log(allNonRepeatingChars("aabbcc")); // Output: "No non-repeating characters"
console.log(allNonRepeatingChars("abcdef")); // Output: ['a', 'b', 'c', 'd', 'e', 'f']
