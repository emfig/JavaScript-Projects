// +, -, *, % FUNCTIONS //
function addition_Function() {
    var addition = 10 + 5;
    document.getElementById("Math_Add").innerHTML = "10 + 5 = " + addition;
}

function subtraction_Function() {
    var subtraction = 10 - 5;
    document.getElementById("Math_Sub").innerHTML = "10 - 5 = " + subtraction;
}

function multiplication_Function() {
    var simple_Math = 10 * 5;
    document.getElementById("Math_Multi").innerHTML = "10 x 5 = " + simple_Math;
}

function division_Function() {
    var simple_Math = 10 / 5;
    document.getElementById("Math_Div").innerHTML = "10 / 5 = " + simple_Math;
}

// INCREMENT AND DECREMENT OPERATORS //
var x = 15;
x++;
window.alert(x);

var y = 20;
y--;
window.alert(y);

// RANDOM WHOLE NUMBER GENERATOR //
window.alert(Math.floor(Math.random() * 50));