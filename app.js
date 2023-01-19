let userName = prompt("What is your name?");
console.log(userName);

let time = prompt("What hour of the day is it? (0-23)");
let message;

if (time < 12) {
    message = "Good morning " + userName + "!";
} else if (time <= 18) {
    message = "Good afternoon " + userName + "!";
} else if (time < 24) {
    message = "Good evening " + userName + "!";
} else {
    message = "c'mon" + userName + "thats is not a valid time!";
}

console.log(message);
document.write(message)