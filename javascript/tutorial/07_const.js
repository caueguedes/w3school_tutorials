const PI = 3.1415;

PI = 3.14; // This will raise an error


// BLOCK SCOPE
var x = 10;
{
  // here x is 2
  const x = 2;
}
// here x is 10



// Constant objects can change
const car = {type: "Fiat", model: "500", color: "white"}

car.color = "red"
car.owner = "Johnson"

// It defines a constant reference to a value.
// So the value can be changed, not the reference


// HOISTING // you can use a variable before it is declared
carName = "Volvo";
alert(carName);
var carName;
