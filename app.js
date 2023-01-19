function getName() {
    const userName = prompt("What is your name?");
    console.log(userName);
    return userName
};

function getTimeMessage() {
    const time = prompt("What hour of the day is it? (0-23)");
    console.log(time);
    let message;

    if (time < 12) {
        message = "Good morning!";
    } else if (time <= 18) {
        message = "Good afternoon!";
    } else if (time < 24) {
        message = "Good evening!";
    } else {
        message = "c'mon, thats is not a valid time!";
    }
    console.log(message);
    return message
};