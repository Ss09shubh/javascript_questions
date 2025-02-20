function isOdd(a, b){
    if(a%2 === 0 || b%2 === 0){
        return "we are not odd"
    }
    return " we are odd"
}

console.log(isOdd(1,3));
console.log(isOdd(2,3));
console.log(isOdd(2,4));
