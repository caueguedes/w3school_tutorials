// GLOBAL SCOPE
var carName = "Volvo";


function myFunc() {
  // FUNCTION SCOPE VARIABLES
  var carNameScope = "Volvo";
}


{
  // BLOCK SCOPE
  var carNameBlock = "Volvo";
}


// REDECLARING VARIABLES
var x = 10;
// Here x is 10
{ 
  var x = 2;
  // Here x is 2
}
// Here x is 2


// LOOP SCOPE
var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10
