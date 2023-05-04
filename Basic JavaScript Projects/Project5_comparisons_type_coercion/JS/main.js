// TYPEOF OPERATOR //

X ="15"
document.write("X is a " + typeof X) // RETURNS "string" //
document.write("<br>")

// STRING AND NUMBER COMBINATION //

document.write(X + 10)

// DOUBLE EQUAL SIGNS TO CHECK IF LISTED NUMBERS ARE EQUAL //

document.write("<br>")
document.write(100 == 100)
document.write("<br>")
document.write(100 == 50)
document.write("<br>")

// TRIPLE EQUAL SIGNS CHECKING EQUALITY IN VALUE AND TYPE //
Y = 15
Z = "Fifteen"
XY = 15
document.write(X === Y)
document.write("<br>")
document.write(Y === XY)
document.write("<br>")
document.write(X === Z)
document.write("<br>")

// LOGICAL OPERATORS //
document.write(100 > 99 && 10 > 9) // AND OPERATOR //
document.write("<br>")
document.write(100 > 99 || 9 > 10) // OR OPERATOR //
// NOT OPERATOR //
function not_Function() {
    document.getElementById("Not").innerHTML = !(9 > 10);
}