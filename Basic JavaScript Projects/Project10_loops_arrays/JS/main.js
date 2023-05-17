//  WHILE LOOP FUCNTION //
function countdown(start) {
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log("Go!");
}

// FOR LOOP FUNCTION //
function Numbers(start, end) {
    for (let x = start; x <= end; x++) {
        document.write(x);
    }
}

// ARRAY FUNCTION //
function array() {
    let mineral = ["Diamond", "Gold", "Copper", "Silver"];
    for (let i = 0; i < mineral.length; i++) {
        document.write("Mineral: " + mineral[i] + ", ");
    }
}


// USING "let" TO CREATE OBJECT //
let desert = {
    name: "Ice Cream",
    flavor: "Vanilla",
    toppings: "Caramel"
};

// DISPLAY OBJECT //
function displayDesert() {
    console.log("Desert: ", desert);
}