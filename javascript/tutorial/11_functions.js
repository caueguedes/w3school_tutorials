function myFunction(p1, p2) {
  return p1 * p2;
}

var x = myFunction(2, 3); // x is 6


// The () Operator Invokes the Function
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;


// Functions Used as Variable Values
var text = "The temperature is " + toCelsius(77) + " Celsius";
