function Even_Sum(N){
    let sum =0;

    for(let i=1; i<=N; i++){
        if(i%2 == 0){
            sum += i;
        }
    }
    return sum;

}
console.log(Even_Sum(12));
console.log(Even_Sum(13));
console.log(Even_Sum(11));