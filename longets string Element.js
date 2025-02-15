// //find longest Element
// //M-1 using reduce
// let arr = "this is shubham kumar singha"
// let a = arr.split(" ");
// console.log(a);                                                           //['this', 'is', 'shubham', 'kumar', 'singha']
// const b = a.reduce((acc, cur) => {
//     return acc.length > cur.length ? acc : cur;
// });
// console.log(b);                                                           // shubham

// //M-2
// let longest = "";
// a.forEach(word => {
//     if (word.length > longest.length) {
//         longest = word;
//     }
// });
// console.log(longest);                                                     // shubham

// //M-3
// let s = a.sort((a, b) => {
//     return b.length - a.length;
// });
// console.log(s);                                                           //['shubham','singha', 'kumar', 'this', 'is']
// console.log(s[0]);                                                        //shubham
