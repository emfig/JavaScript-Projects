// TIME FUNCTION LISTING USERS TIME OF DAY //
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

// IF STATEMENT/LOCAL VARIABLE //
function if_Function() {
    var apple;
    Y = 10
    if (Y > 5) {
        apple ="10 is greater than 5.";
    }
    document.getElementById("if_Output").innerHTML = apple;
}

// GLOBAL VARIABLE //
X = 10
// CONSOLE LOG TO DEBUG X + Y NOT APPEARING //
console.log(X + Y)