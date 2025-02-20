function sum(N){
    let sum = 0;
    for(let i = 1; i<=N; i++){
        sum += i;
    }
    return `sum of n natural numbers is: ${sum}`;
}

console.log(sum(5));