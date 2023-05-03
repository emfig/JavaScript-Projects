// KVP FUNCTION FOR CAR //
function my_Dictionary() {
    var Car = {
        Type: "Sedan",
        Color: "Blue",
        Brand: "Acura",
        Year: 2007,
    };
    delete Car.Color // DELETED CAR COLOR FROM KVP //
    document.getElementById("Dictionary").innerHTML = Car.Brand;
}