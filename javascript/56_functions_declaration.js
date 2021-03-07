function myFunction(a, b) {
  return a * b;
}

// Function expressions
var x = function (a, b) {return a * b;}
var z = x(4, 3);

// FUNCTION CONSTRUCTOR
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);


// Function Expression
var x = function (a, b) {return a * b};

// Self invoking function
(function () {
  var x = "Hello!!";
})();
