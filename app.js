function getName() {
    const userName = prompt("What is your name?");
    console.log(userName);
    return userName
};

function getTimeMessage() {
    let timeNum;
    let timeStr = "";
    let isValid = false;
    let message = "What hour of the day is it? (0-23)"

    do {
        timeStr = prompt(message);
        console.log(timeStr);
        timeNum = Number(timeStr);

        if (Number.isInteger(timeNum)) {
            console.log("isNumber");
            if (timeNum < 0) {
                message = "c'mon, thats is not a valid time! What hour of the day is it? (0-23)";
            }
            else if (timeNum < 12) {
                message = "Good morning!";
                isValid = true;
            } else if (timeNum <= 18) {
                message = "Good afternoon!";
                isValid = true;
            } else if (timeNum < 24) {
                message = "Good evening!";
                isValid = true;
            } else {
                message = "c'mon, thats is not a valid time! What hour of the day is it? (0-23)";
            }
        } else {
            message = "c'mon, thats is not an integer! What hour of the day is it? (0-23)";
        }
    } while (!isValid);

    console.log(message);
    return message
};

function getAndDisplayHackCount() {
    var n = prompt("How many times have you been hacked?", "0");
    let str = "";
    for (i = 0; i < n; ++i) {
        str += '<img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600" />';
    }
    return str;
}
