function prime(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    return result;
}

function isPrime(num){
    if(num<2)return false;
    for(let i=2;i<num;i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

console.log(prime(1,10));






//second method

function prime(a, b) {
    let result = [];

    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            result.push(i);
        }
    }

    return result;
}

// Function to check if a number is prime using count
function isPrime(num) {
    let count = 0;

    for (let i = 1; i <= num; i++) { // Check divisibility from 1 to num
        if (num % i === 0) {
            count++; // Increase count if num is divisible by i
        }
    }

    return count === 2; // Prime numbers have exactly 2 divisors
}

console.log(prime(1, 10));
