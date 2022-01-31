function leapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return true;
    }
    return false;
}

const myYear = 2024;
const isMyYearLeapYear = leapYear(myYear);
console.log("is my year leap year", isMyYearLeapYear);

const herYear = 2100;
const isHerYearLeapYear = leapYear(herYear);
console.log("is her year leap year", isHerYearLeapYear);