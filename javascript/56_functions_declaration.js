function myFunction(a, b) {
  return a * b;
}

// Function expressions
var x = function (a, b) {return a * b;}

// FUNCTION CONSTRUCTOR
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
