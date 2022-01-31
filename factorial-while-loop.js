/* function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
let myFactorial = getFactorial(6);
console.log(myFactorial); */

/* function getFact(number) {
    let fact = 1;
    let i = number;
    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    return fact;
}
let myNum = getFact(5);
console.log(myNum); */

function getFact(number) {
    let fact = 1;
    for (let i = number; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}
let herNum = getFact(7);
console.log(herNum);