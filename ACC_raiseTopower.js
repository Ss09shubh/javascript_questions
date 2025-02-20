function raisetopower(a,b){
    let s = 1;
    for(let i=1 ; i<=b ; i++){
      s = a*s;
    }
    return s;
}

console.log(raisetopower(5,3));
console.log(raisetopower(10,5));



// //second method

// function raisetopower(a, b) {
//     return Math.pow(a, b);
// }



// // Third method

// function raisetopower(a, b) {
//     return a ** b;
// }
