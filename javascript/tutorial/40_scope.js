// code here can NOT use carName

function myFunction() {
  var carName = "Volvo";
  // code here CAN use carName
}



var carNameGlobal = "Volvo";
// code here can use carNameGlobal

function myFunction() {
  // code here can also use carNameGlobal
}


// Automatically global
myFunction();
// code here can use carNameAuto

function myFunction() {
  carNameAuto = "Volvo";
}