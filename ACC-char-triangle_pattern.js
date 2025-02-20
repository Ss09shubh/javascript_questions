// function charPattern(N) {
//     for (let i = 0; i < N; i++) {
//         let char = String.fromCharCode(65 + i); // Convert 0 → 'A', 1 → 'B', etc.
//         console.log(char.repeat(i + 1)); // Print character 'i+1' times
//     }
// }

// charPattern(4);



//second method
function charPattern(N) {
    for (let i = 0; i < N; i++) {
        let char = String.fromCharCode(65 + i); // Convert 0 → 'A', 1 → 'B', etc.
        let row = "";
        
        for (let j = 0; j <= i; j++) {
            row += char; // Append the character to the row string
        }
        
        console.log(row);
    }
}

charPattern(4);
