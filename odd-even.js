/* const number = 4;
var reminder = number % 2;
console.log(reminder == 0); */
// console.log(number % 2 == 0);

// even number
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log("is my number is even", isMyNumberEven);

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log("is her number is even", isHerNumberEven);

// odd number
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
const isMyNumberOdd = isOdd(myNumber);
console.log("is my number is odd", isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log("is her number is odd", isHerNumberOdd);