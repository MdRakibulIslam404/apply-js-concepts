function inchesTOFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchesTOFeet(myInches);
console.log("my feet is", feet);

var dadiInches = 144;
var feet = inchesTOFeet(dadiInches);
console.log("dadi feet is", feet);

var naniInches = 156;
var feet = inchesTOFeet(naniInches);
console.log("nani feet is", feet);

var nanaInches = 168;
var feet = inchesTOFeet(nanaInches);
console.log("nana feet is", feet);


// mile to kilometer
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKilometer(26.2);
console.log(marathon);