//leap year check
function leapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
};
const myYear = leapYear(2023);
// console.log(myYear);

const my2ndYear = leapYear(2024);
// console.log(my2ndYear);

const my3rdYear = leapYear(2100);
// console.log(my3rdYear);

//odd and even number check
function oddEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const myNum = oddEven(20);
// console.log(myNum);

const myNums = oddEven(13);
// console.log(myNums);
