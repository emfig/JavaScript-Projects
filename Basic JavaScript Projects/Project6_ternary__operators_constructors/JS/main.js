// TERNARY OPERATION TO CHECK IF ELIGIBLE TO VOTE //
function voter_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

// CONSTRUCTOR FOR CUSTOMER OBJECTS //
function Customer(first, last, age, height) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.height = height;
}

// CREATED A NEW CUSTOMER //
const customer0 = new Customer("Chris", "Thompson", 34, "5'8")

// DISPLAY HEIGHT OF CUSTOMER //
function customer_Function() {
    document.getElementById("New_and_This").innerHTML = "Customer 0 is " + customer0.height + "."
}

// NESTED FUNCTION //
function count_Function() {
    document.getElementById("Count").innerHTML = Count ();
    function Count() {
        var Start = 100;
        function Minus_five() {Start -= 5;}
        Minus_five();
        return Start;
    }
}