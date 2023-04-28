//TEXT DISPLAYED ON "CLICK HERE" TEXT//
function timeFunction() {
    var sentence = "Click the button below ";
    sentence += "to see what time it is!";
    document.getElementById("check_time").innerHTML = sentence
}
//DISPLAYS PROPER DATE OF THE USER//
function dateDisplay() {
    document.getElementById("time").innerHTML = Date();
}

