// USING CONCAT TO COMBINE STR1 AND STR 2 //
function useConcat() {
    var str1 = "Hi,";
    var str2 = "How are you?";
    var result = str1.concat(str2);
    document.getElementById("output").innerHTML = result;
}

// SLICE TO DISPLAY JUST "WORLD!" IN "HELLO WORLD!" //
function useSlice() {
    var str = "Hello World!";
    var result = str.slice(6, 12);
    document.getElementById("output").innerHTML = result;
}

// CHANGES NUMBER 500 TO STRING 500 ("500") //
function useToString() {
    var num = 500;
    var result = num.toString();
    document.getElementById("output").innerHTML = result;
}

// REDUCES NUM TO FIRST 4 DIGITS //
function useToPrecision() {
    var num = 3.14159353464;
    var result = num.toPrecision(4);
    document.getElementById("output").innerHTML = result;
}