function factorial(N){
    let fact = 1;
    for(let i = 1; i<= N; i++){
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));