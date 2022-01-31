var time = "3:40pm";
var bookPrice = 150;
var isWhiteColor = false;

// friendsay
var friends = ["kolim", "mojid", "solim", "dolim"];
var elementCount = friends.length;
var mojidIndex = friends.indexOf("mojid")

friends.push("kanto");
friends.pop();

if (bookPrice < 120) {
    console.log("I will by this book");
}
else {
    console.log("Mama, Kichu discount den na. Apni na mama!!");
}

// loop
var i = 0;
while (i < 12) {
    // do some work
    i++;
}

for (var i = 0; i < 23; i++) {
    // do some work
}

// function
function isMoonUp(param) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}
var moonStatus = isMoonUp(19);

// let const

//value of variable could change
let price = 27;
price = 29;
price = 31;

//value of the variable will not change
const myName = "la la lal lala lalaa laaalllaa";
console.log(myName);
myName = 22;