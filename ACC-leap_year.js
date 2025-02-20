function leapYear(y){
    if (y%4 === 0 && y%100 !== 0 || y%400 === 0){
        return true;
    }
    return false;
}

console.log(leapYear(2004));
console.log(leapYear(2003));