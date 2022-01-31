/* let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
    // console.log(factorial);
}
console.log(factorial); */

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

let myNumber = getFactorial(7);
console.log(myNumber);

const herNumber = getFactorial(5);
console.log(herNumber);